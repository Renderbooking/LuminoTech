// Test script for Google Sheets API integration
// Run this with: node test-google-sheets.js

const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function testGoogleSheetsConnection() {
    try {
        console.log('Testing Google Sheets API connection...');

        // Check environment variables
        if (!process.env.GOOGLE_CLIENT_EMAIL) {
            throw new Error('GOOGLE_CLIENT_EMAIL environment variable is not set');
        }
        if (!process.env.GOOGLE_PRIVATE_KEY) {
            throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set');
        }
        if (!process.env.GOOGLE_SHEET_ID) {
            throw new Error('GOOGLE_SHEET_ID environment variable is not set');
        }

        console.log('✅ Environment variables are set');

        // Configure Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Test reading the spreadsheet
        console.log('Testing spreadsheet access...');
        const readResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A1:F1',
        });

        console.log('✅ Successfully connected to Google Sheets');
        console.log('Current header row:', readResponse.data.values);

        // Test writing to the spreadsheet
        console.log('Testing write access...');
        const timestamp = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kathmandu',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });

        const testData = [
            timestamp,
            'Test User',
            'test@example.com',
            '+977-9800000000',
            'Test Subject',
            'This is a test message from the API integration test.',
        ];

        const writeResponse = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [testData],
            },
        });

        console.log('✅ Successfully wrote test data to spreadsheet');
        console.log('Updated range:', writeResponse.data.updates.updatedRange);
        console.log('Rows added:', writeResponse.data.updates.updatedRows);

        console.log('\n🎉 Google Sheets integration is working correctly!');
        console.log('You can now use the contact form on your website.');

    } catch (error) {
        console.error('❌ Error testing Google Sheets integration:');
        console.error(error.message);

        if (error.message.includes('Unable to parse range')) {
            console.error('💡 Make sure your spreadsheet has a sheet named "Sheet1"');
        }

        if (error.message.includes('The caller does not have permission')) {
            console.error('💡 Make sure you\'ve shared the spreadsheet with the service account email:');
            console.error('   ', process.env.GOOGLE_CLIENT_EMAIL);
        }

        if (error.message.includes('Requested entity was not found')) {
            console.error('💡 Check that your GOOGLE_SHEET_ID is correct');
        }

        process.exit(1);
    }
}

testGoogleSheetsConnection();