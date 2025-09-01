import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to sanitize input
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input.trim().slice(0, 1000); // Limit length to prevent abuse
}

// Helper function to validate phone number format
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\-\(\)\s]{7,20}$/;
    return phoneRegex.test(phone);
}

export async function POST(request) {
    try {
        // Check if required environment variables are set
        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error('Missing required environment variables for Google Sheets API');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(name),
            email: sanitizeInput(email),
            phone: sanitizeInput(phone),
            subject: sanitizeInput(subject),
            message: sanitizeInput(message),
        };

        // Validate required fields
        if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.phone || !sanitizedData.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(sanitizedData.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Validate phone format
        if (!isValidPhone(sanitizedData.phone)) {
            return NextResponse.json(
                { error: 'Invalid phone number format' },
                { status: 400 }
            );
        }

        // Validate message length
        if (sanitizedData.message.length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters long' },
                { status: 400 }
            );
        }

        // Configure Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Get current date and time in Nepal timezone
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

        // Prepare the row data
        const rowData = [
            timestamp,
            sanitizedData.name,
            sanitizedData.email,
            sanitizedData.phone,
            sanitizedData.subject || 'No subject provided',
            sanitizedData.message,
        ];

        // Append data to the spreadsheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:F', // Columns A-F for timestamp, name, email, phone, subject, message
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [rowData],
            },
        });

        console.log('Contact form data successfully added to spreadsheet');

        return NextResponse.json(
            {
                message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
                success: true
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);

        // Check if it's a Google API error
        if (error.message?.includes('Unable to parse range')) {
            return NextResponse.json(
                { error: 'Spreadsheet configuration error' },
                { status: 500 }
            );
        }

        if (error.message?.includes('The caller does not have permission')) {
            return NextResponse.json(
                { error: 'Permission denied to access spreadsheet' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to submit contact form. Please try again later.' },
            { status: 500 }
        );
    }
}

// Handle OPTIONS request for CORS (if needed)
export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}