// src/app/api/send-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getOTPStore } from '@/lib/otpStore';

const otpStore = getOTPStore();

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = generateOTP();

    // Store OTP with 10 minutes expiry
    otpStore.set(email.toLowerCase(), otp, 10);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Luxury email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              background-color: #f8f7f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: white;
              border: 1px solid #e5e5e5;
            }
            .header {
              background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
              padding: 40px;
              text-align: center;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-weight: 300;
              letter-spacing: 4px;
              font-size: 28px;
            }
            .content {
              padding: 50px 40px;
            }
            .otp-box {
              background: #fafaf9;
              border: 2px solid #d97706;
              border-radius: 2px;
              padding: 30px;
              text-align: center;
              margin: 30px 0;
            }
            .otp-code {
              font-size: 36px;
              font-weight: 300;
              letter-spacing: 8px;
              color: #292524;
              margin: 10px 0;
            }
            .text {
              color: #57534e;
              line-height: 1.8;
              font-weight: 300;
              font-size: 15px;
            }
            .divider {
              height: 1px;
              background: linear-gradient(to right, transparent, #d97706, transparent);
              margin: 30px 0;
            }
            .footer {
              background: #fafaf9;
              padding: 30px;
              text-align: center;
              border-top: 1px solid #e5e5e5;
            }
            .footer p {
              color: #a8a29e;
              font-size: 12px;
              margin: 5px 0;
              font-weight: 300;
              letter-spacing: 1px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>TERAFENCE</h1>
            </div>
            <div class="content">
              <p class="text">Dear Valued Client,</p>
              <p class="text">
                Your exclusive verification code for accessing the DIY Style Form is ready. 
                This code ensures the security and privacy of your personalized style journey.
              </p>
              <div class="otp-box">
                <p style="color: #78716c; font-size: 12px; letter-spacing: 2px; margin: 0; text-transform: uppercase;">Verification Code</p>
                <div class="otp-code">${otp}</div>
                <p style="color: #a8a29e; font-size: 11px; margin: 10px 0 0 0;">Valid for 10 minutes</p>
              </div>
              <div class="divider"></div>
              <p class="text">
                If you did not request this code, please disregard this email. 
                Your account security is our highest priority.
              </p>
            </div>
            <div class="footer">
              <p>TERAFENCE LUXURY STYLE</p>
              <p>Crafting Excellence Since 2025</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Your Terafence Verification Code',
      html: htmlContent,
      text: `Your Terafence verification code is: ${otp}. Valid for 10 minutes.`,
    });

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Send OTP error:', error);
    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    );
  }
}