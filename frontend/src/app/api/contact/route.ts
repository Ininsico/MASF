import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or use your SMTP provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to Admin
        const mailOptionsAdmin = {
            from: process.env.EMAIL_USER,
            to: 'masfpaskiatn@gmail.com', // Admin email as requested
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2563eb;">New Message from MASF Website</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `,
        };

        // Email to User (Confirmation)
        const mailOptionsUser = {
            from: process.env.EMAIL_USER,
            to: email, // User's email
            subject: `We received your message: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2563eb;">Thank you for contacting MASF!</h2>
                    <p>Dear ${name},</p>
                    <p>We have received your message regarding "<strong>${subject}</strong>". Our team will review it and get back to you shortly.</p>
                    
                    <h3 style="color: #64748b; margin-top: 20px;">Your Submission:</h3>
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>

                    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
                    
                    <p style="font-size: 12px; color: #94a3b8;">
                        This is an automated confirmation. Please do not reply directly to this email.<br/>
                        For urgent matters, call us at +92 335 4014014.
                    </p>
                </div>
            `,
        };

        // Send emails
        await transporter.sendMail(mailOptionsAdmin);
        await transporter.sendMail(mailOptionsUser);

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send message', error }, { status: 500 });
    }
}
