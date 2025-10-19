import { NextRequest, NextResponse } from 'next/server';
import { getOTPStore } from '@/lib/otpStore';

const otpStore = getOTPStore();

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase();
    const storedData = otpStore.get(normalizedEmail);

    // Check if OTP exists
    if (!storedData) {
      return NextResponse.json(
        { error: 'Invalid or expired verification code' },
        { status: 400 }
      );
    }

    // Check if OTP is expired
    if (Date.now() > storedData.expiry) {
      otpStore.delete(normalizedEmail);
      return NextResponse.json(
        { error: 'Verification code has expired' },
        { status: 400 }
      );
    }

    // Verify OTP
    if (storedData.otp !== otp) {
      return NextResponse.json(
        { error: 'Invalid verification code' },
        { status: 400 }
      );
    }

    // OTP is valid - remove it from store
    otpStore.delete(normalizedEmail);

    // In production, you might want to:
    // 1. Create a session token
    // 2. Store user verification status in database
    // 3. Return a JWT or session cookie

    return NextResponse.json(
      { 
        message: 'Verification successful',
        email: normalizedEmail
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verify OTP error:', error);
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    );
  }
}