# MASF Backend API

Backend server for MASF (Medical & Social Family) website.

## Features
- Contact form email service
- Donation submission with file upload
- Email notifications with professional templates

## Environment Variables Required
```
PORT=5000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

## Installation
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production
```bash
npm start
```

## API Endpoints

### POST /api/contact
Submit contact form
- Body: `{ name, email, subject, message }`

### POST /api/donation
Submit donation with screenshot
- Form-data: `{ name, whatsapp, accountUsed, amount, screenshot (file) }`
