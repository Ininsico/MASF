const { Resend } = require('resend');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `donation-${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|pdf/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only .png, .jpg, .jpeg and .pdf files are allowed!'));
    }
}).single('screenshot');

exports.submitDonation = (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            console.error('❌ Multer error:', err);
            return res.status(400).json({ message: 'File upload error', error: err.message });
        } else if (err) {
            console.error('❌ Upload error:', err);
            return res.status(400).json({ message: err.message });
        }

        console.log('📩 Donation submission received');
        console.log('Request body:', req.body);
        console.log('Uploaded file:', req.file);

        try {
            const { name, whatsapp, accountUsed, amount } = req.body;

            // Validate required fields
            if (!name || !whatsapp || !accountUsed || !amount) {
                if (req.file) fs.unlinkSync(req.file.path);
                return res.status(400).json({ message: 'All fields are required' });
            }

            if (!req.file) {
                return res.status(400).json({ message: 'Payment screenshot is required' });
            }

            // Validate environment variables
            if (!process.env.RESEND_API_KEY) {
                console.error('❌ Resend API Key is missing in .env file');
                if (req.file) fs.unlinkSync(req.file.path);
                return res.status(500).json({
                    message: 'Server configuration error: Resend API Key not set'
                });
            }

            console.log('✅ All validations passed');
            console.log('📧 Preparing email...');

            const resend = new Resend(process.env.RESEND_API_KEY);
            const senderEmail = process.env.SENDER_EMAIL || 'noreply@masfpakistan.org';
            const adminEmail = process.env.ADMIN_EMAIL || 'masfpk@gmail.com';

            const submissionDate = new Date().toLocaleString('en-PK', {
                timeZone: 'Asia/Karachi',
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });

            // Professional Email Template
            const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Donation Received - PKR ${amount}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    
                    <!-- Header with Logo and Badge -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%); padding: 40px 30px; text-align: center; position: relative;">
                            <div style="background-color: white; display: inline-block; padding: 12px 24px; border-radius: 12px; margin-bottom: 16px;">
                                <h1 style="margin: 0; color: #2563EB; font-size: 32px; font-weight: 800; letter-spacing: -1px;">MASF</h1>
                            </div>
                            <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 500;">Medical & Social Family</p>
                            
                            <!-- Donation Badge -->
                            <div style="background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); display: inline-block; padding: 8px 20px; border-radius: 20px; border: 2px solid rgba(255, 255, 255, 0.3);">
                                <span style="color: #ffffff; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">💰 New Donation</span>
                            </div>
                        </td>
                    </tr>

                    <!-- Amount Highlight -->
                    <tr>
                        <td style="background: linear-gradient(to bottom, #EFF6FF, #ffffff); padding: 30px; text-align: center; border-bottom: 1px solid #E2E8F0;">
                            <p style="margin: 0 0 8px 0; color: #64748B; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Donation Amount</p>
                            <h2 style="margin: 0; color: #2563EB; font-size: 48px; font-weight: 800; letter-spacing: -2px;">PKR ${parseInt(amount).toLocaleString()}</h2>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Donor Information Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #10B981;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 16px 0; color: #059669; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">👤 Donor Information</h3>
                                        
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="140" style="color: #64748B; font-size: 14px; font-weight: 600;">Full Name:</td>
                                                <td style="color: #1E293B; font-size: 14px; font-weight: 600;">${name}</td>
                                            </tr>
                                            <tr>
                                                <td style="color: #64748B; font-size: 14px; font-weight: 600;">WhatsApp:</td>
                                                <td style="color: #10B981; font-size: 14px; font-weight: 600;">
                                                    <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #10B981; text-decoration: none;">${whatsapp}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #64748B; font-size: 14px; font-weight: 600;">Submitted On:</td>
                                                <td style="color: #1E293B; font-size: 14px;">${submissionDate}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Bank Details Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #EFF6FF; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #2563EB;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 12px 0; color: #1E40AF; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">🏦 Bank Account Used by Donor</h3>
                                        <div style="background-color: white; padding: 16px; border-radius: 8px; margin-top: 12px;">
                                            <p style="margin: 0; color: #1E293B; font-size: 14px; line-height: 1.7; white-space: pre-wrap; font-family: 'Courier New', monospace;">${accountUsed}</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Action Required Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #F59E0B;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 12px 0; color: #92400E; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">⚠️ Action Required</h3>
                                        <ol style="margin: 0; padding-left: 20px; color: #78350F; font-size: 14px; line-height: 1.8;">
                                            <li style="margin-bottom: 8px;"><strong>Verify</strong> the attached payment screenshot</li>
                                            <li style="margin-bottom: 8px;"><strong>Confirm</strong> the donation amount (PKR ${parseInt(amount).toLocaleString()})</li>
                                            <li><strong>Send receipt (raseed)</strong> to WhatsApp: <span style="color: #10B981; font-weight: 600;">${whatsapp}</span></li>
                                        </ol>
                                    </td>
                                </tr>
                            </table>

                            <!-- Attachment Notice -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F1F5F9; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0; color: #475569; font-size: 14px;">
                                            📎 <strong>Payment Proof Attached:</strong> ${req.file.originalname}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- WhatsApp Action Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Assalam%20o%20Alaikum%20${encodeURIComponent(name)}%2C%20JazakAllah%20for%20your%20generous%20donation%20of%20PKR%20${amount}%20to%20MASF.%20Your%20receipt%20is%20attached." 
                                           style="display: inline-block; background-color: #10B981; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 10px; font-weight: 700; font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);">
                                            📱 Send Receipt via WhatsApp
                                        </a>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #F8FAFC; padding: 24px 30px; border-top: 1px solid #E2E8F0;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0 0 8px 0; color: #94A3B8; font-size: 12px;">
                                            This is an automated notification from the MASF Donation System
                                        </p>
                                        <p style="margin: 0; color: #CBD5E1; font-size: 11px;">
                                            © ${new Date().getFullYear()} Medical & Social Family (MASF) • Finance Department • Lahore, Pakistan
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `;

            // Email to Admin with attachment
            console.log('📤 Sending email to admin...');

            // Read file content for attachment
            const fileContent = fs.readFileSync(req.file.path);

            const { data, error } = await resend.emails.send({
                from: senderEmail,
                to: adminEmail,
                subject: `💰 New Donation Alert: PKR ${parseInt(amount).toLocaleString()} from ${name}`,
                html: emailTemplate,
                attachments: [
                    {
                        filename: `payment-proof-${name.replace(/\s+/g, '-')}-PKR${amount}.${path.extname(req.file.originalname).substring(1)}`,
                        content: fileContent
                    }
                ]
            });

            if (error) {
                console.error('Error sending email:', error);
                throw new Error(error.message);
            }
            console.log('✅ Email sent successfully');

            // Clean up uploaded file after sending email
            fs.unlinkSync(req.file.path);
            console.log('🗑️ Temporary file cleaned up');

            res.status(200).json({
                message: 'Donation submitted successfully! You will receive a receipt on WhatsApp shortly.',
                whatsapp: whatsapp
            });

        } catch (error) {
            console.error('❌ Donation submission failed:');
            console.error('Error:', error);

            // Clean up file if exists
            if (req.file && fs.existsSync(req.file.path)) {
                fs.unlinkSync(req.file.path);
            }

            res.status(500).json({
                message: 'Failed to process donation submission',
                error: error.message
            });
        }
    });
};
