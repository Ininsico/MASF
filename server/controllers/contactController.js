const { Resend } = require('resend');

exports.sendContactEmail = async (req, res) => {

    try {
        const { name, email, subject, message } = req.body;

        if (!process.env.RESEND_API_KEY) {
            console.error('❌ Resend API Key is missing in .env file');
            return res.status(500).json({
                message: 'Server configuration error: Resend API Key not set',
                error: 'Missing RESEND_API_KEY'
            });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const senderEmail = process.env.SENDER_EMAIL || 'noreply@masfpakistan.org';

        const emailTemplate = (isAdmin = false) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${isAdmin ? 'New Contact Form Submission' : 'Thank You for Contacting MASF'}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    
                    <!-- Header with Logo -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%); padding: 40px 30px; text-align: center;">
                            <div style="background-color: white; display: inline-block; padding: 12px 24px; border-radius: 12px; margin-bottom: 16px;">
                                <h1 style="margin: 0; color: #2563EB; font-size: 32px; font-weight: 800; letter-spacing: -1px;">MASF</h1>
                            </div>
                            <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 500;">Medical & Social Family</p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            ${isAdmin ? `
                            <!-- Admin Email -->
                            <h2 style="margin: 0 0 24px 0; color: #1E293B; font-size: 24px; font-weight: 700;">New Contact Form Submission</h2>
                            <p style="margin: 0 0 30px 0; color: #64748B; font-size: 15px;">You have received a new inquiry through the MASF website contact form.</p>
                            
                            <!-- Contact Details Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #2563EB;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 16px 0; color: #2563EB; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Contact Information</h3>
                                        
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="120" style="color: #64748B; font-size: 14px; font-weight: 600;">Name:</td>
                                                <td style="color: #1E293B; font-size: 14px; font-weight: 500;">${name}</td>
                                            </tr>
                                            <tr>
                                                <td style="color: #64748B; font-size: 14px; font-weight: 600;">Email:</td>
                                                <td style="color: #2563EB; font-size: 14px; font-weight: 500;">
                                                    <a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #64748B; font-size: 14px; font-weight: 600;">Subject:</td>
                                                <td style="color: #1E293B; font-size: 14px; font-weight: 500;">${subject}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Message Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #EFF6FF; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #3B82F6;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 12px 0; color: #1E40AF; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                                        <p style="margin: 0; color: #1E293B; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Action Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                                           style="display: inline-block; background-color: #2563EB; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Reply to ${name}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            ` : `
                            <!-- User Confirmation Email -->
                            <h2 style="margin: 0 0 16px 0; color: #1E293B; font-size: 24px; font-weight: 700;">Thank You for Reaching Out!</h2>
                            <p style="margin: 0 0 24px 0; color: #64748B; font-size: 15px;">Dear <strong style="color: #1E293B;">${name}</strong>,</p>
                            <p style="margin: 0 0 24px 0; color: #64748B; font-size: 15px;">We have successfully received your message regarding "<strong style="color: #2563EB;">${subject}</strong>". Our team will review your inquiry and get back to you within 24-48 hours.</p>
                            
                            <!-- Summary Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #10B981;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 16px 0; color: #059669; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Your Submission Summary</h3>
                                        
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="100" style="color: #64748B; font-size: 14px; font-weight: 600;">Subject:</td>
                                                <td style="color: #1E293B; font-size: 14px; font-weight: 500;">${subject}</td>
                                            </tr>
                                            <tr>
                                                <td style="color: #64748B; font-size: 14px; font-weight: 600; vertical-align: top;">Message:</td>
                                                <td style="color: #1E293B; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Contact Info -->
                            <p style="margin: 24px 0 0 0; color: #64748B; font-size: 14px;">For urgent matters, feel free to contact us directly:</p>
                            <table width="100%" cellpadding="8" cellspacing="0" style="margin-top: 12px;">
                                <tr>
                                    <td style="color: #2563EB; font-size: 14px; font-weight: 600;">📧 Email:</td>
                                    <td style="color: #1E293B; font-size: 14px;">masfpk@gmail.com</td>
                                </tr>
                                <tr>
                                    <td style="color: #2563EB; font-size: 14px; font-weight: 600;">📱 Phone:</td>
                                    <td style="color: #1E293B; font-size: 14px;">+92 335 4014014</td>
                                </tr>
                            </table>
                            `}
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #F8FAFC; padding: 24px 30px; border-top: 1px solid #E2E8F0;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0 0 8px 0; color: #94A3B8; font-size: 12px;">
                                            This is an automated message from the MASF Contact System
                                        </p>
                                        <p style="margin: 0; color: #CBD5E1; font-size: 11px;">
                                            © ${new Date().getFullYear()} Medical & Social Family (MASF) • Lahore, Pakistan
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

        const sendEmail = async (to, subject, htmlContent, replyTo) => {
            const { data, error } = await resend.emails.send({
                from: senderEmail,
                to: to,
                subject: subject,
                html: htmlContent,
                reply_to: replyTo
            });

            if (error) {
                throw new Error(error.message);
            }
            return data;
        };

        // Email to Admin
        const adminEmail = process.env.ADMIN_EMAIL || 'masfpk@gmail.com';
        await sendEmail(
            adminEmail,
            `🔔 New Contact Inquiry: ${subject}`,
            emailTemplate(true),
            email // Reply to user
        );
        // Confirmation Email to User

        // Confirmation Email to User
        // Confirmation Email to User
        await sendEmail(
            email,
            `Thank you for contacting MASF - We received your message`,
            emailTemplate(false)
        );

        res.status(200).json({ message: 'Message sent successfully' });

    } catch (error) {
        console.error('❌ Email sending failed:');
        console.error('Error message:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        }

        res.status(500).json({
            message: 'Failed to send message',
            error: error.message,
            details: error.response ? error.response.data : null
        });
    }
};

