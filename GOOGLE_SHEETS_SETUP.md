# Google Sheets Contact Form Integration Setup

This guide will help you set up the contact form to send submissions directly to a Google Spreadsheet.

## Prerequisites

- Google account
- Access to Google Cloud Console
- A Google Spreadsheet where you want to store contact form submissions

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your project ID

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `contact-form-service`
   - Description: `Service account for contact form submissions`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the "Credentials" page, find your newly created service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create New Key"
5. Choose "JSON" format and click "Create"
6. Download and save the JSON file securely

## Step 5: Set Up Your Google Spreadsheet

1. Create a new Google Spreadsheet or use an existing one
2. Set up the header row in the first row with these columns:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Subject`
   - F1: `Message`
3. Copy the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```

## Step 6: Share the Spreadsheet

1. In your Google Spreadsheet, click the "Share" button
2. Add the service account email (found in the JSON file) as an editor
3. The email will look like: `your-service-account@your-project.iam.gserviceaccount.com`

## Step 7: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in the values from your JSON key file:
   ```env
   GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=your_google_sheet_id_here
   ```

   **Important Notes:**
   - The `GOOGLE_CLIENT_EMAIL` is the `client_email` field from your JSON file
   - The `GOOGLE_PRIVATE_KEY` is the `private_key` field from your JSON file (keep the quotes and newline characters)
   - The `GOOGLE_SHEET_ID` is extracted from your spreadsheet URL

## Step 8: Test the Integration

### Option 1: Use the Test Script
We've included a test script to verify your Google Sheets configuration:

1. Make sure your `.env.local` file is properly configured
2. Run the test script:
   ```bash
   node test-google-sheets.js
   ```
3. If successful, you'll see confirmation messages and a test entry in your spreadsheet

### Option 2: Test via the Website
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the contact form on your website
3. Fill out and submit the form
4. Check your Google Spreadsheet to see if the data appears

## Troubleshooting

### Common Issues:

1. **403 Forbidden Error**
   - Make sure you've shared the spreadsheet with the service account email
   - Verify the service account has edit permissions

2. **Invalid Credentials**
   - Double-check your environment variables
   - Ensure the private key includes proper newline characters
   - Make sure there are no extra spaces in the environment variables

3. **Sheet Not Found**
   - Verify the `GOOGLE_SHEET_ID` is correct
   - Make sure the sheet name is "Sheet1" or update the range in the API code

4. **API Not Enabled**
   - Ensure Google Sheets API is enabled in your Google Cloud project

### Security Best Practices:

1. **Never commit your `.env.local` file** - it should be in your `.gitignore`
2. **Rotate your service account keys regularly**
3. **Use least privilege principle** - only give the service account access to the specific spreadsheet
4. **Monitor your API usage** in Google Cloud Console

## Deployment

When deploying to production:

1. Set the environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Make sure your domain is authorized if using OAuth (not applicable for service accounts)
3. Test the form submission in production environment

## Additional Features

You can extend this integration by:

1. **Adding form validation on the server side**
2. **Implementing email notifications** when new submissions arrive
3. **Adding spam protection** with reCAPTCHA
4. **Creating a dashboard** to view submissions
5. **Setting up webhooks** for real-time notifications

## Support

If you encounter any issues:

1. Check the browser console for error messages
2. Review the server logs for API errors
3. Verify your Google Cloud Console settings
4. Test your credentials with a simple Google Sheets API call