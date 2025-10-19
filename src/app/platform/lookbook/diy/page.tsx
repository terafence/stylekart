"use client"

import React, { useState, useRef } from 'react';

export default function DIYPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSendOTP = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStep('otp');
        setSuccess('Verification code sent to your email');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to send verification code');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'Enter' && otp.join('').length === 6) {
      handleVerifyOTP();
    }
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      setError('Please enter the complete verification code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpCode })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Verification successful!');
        setTimeout(() => {
          window.location.href = '/platform/lookbook/diy/form';
        }, 1500);
      } else {
        setError(data.error || 'Invalid verification code');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendOTP();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-stone-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Pane - Video */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-700/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[75vh] object-cover"
              >
                <source src="https://cdn.coverr.co/videos/coverr-a-woman-walks-through-a-luxury-boutique-6236/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                <div className="border-l-2 border-amber-400 pl-6">
                  <h1 className="text-4xl font-light text-white tracking-wider mb-2">
                    DIY STYLE
                  </h1>
                  <p className="text-amber-100 font-light tracking-widest text-sm">
                    DESIGN YOUR MASTERPIECE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane - OTP Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-sm shadow-2xl p-12 border border-neutral-200/50">
            <div className="mb-10">
              <h2 className="text-3xl font-light tracking-wider text-neutral-800 mb-3">
                {step === 'email' ? 'Verify Your Identity' : 'Enter Verification Code'}
              </h2>
              <div className="h-px w-20 bg-gradient-to-r from-amber-600 to-transparent"></div>
            </div>

            {/* Email Step */}
            {step === 'email' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-light tracking-widest text-neutral-600 uppercase mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleEmailKeyDown}
                    className="w-full px-4 py-4 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all duration-300 text-neutral-800 tracking-wide"
                    placeholder="your.email@example.com"
                  />
                </div>

                <button
                  onClick={handleSendOTP}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-light tracking-widest uppercase rounded-sm hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Verification Code'}
                </button>
              </div>
            )}

            {/* OTP Step */}
            {step === 'otp' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-light tracking-widest text-neutral-600 uppercase mb-3">
                    Verification Code
                  </label>
                  <div className="flex gap-3 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOTPChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-14 h-14 text-center text-2xl font-light bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 text-neutral-800"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-500 mt-4 text-center font-light tracking-wide">
                    Code sent to {email}
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleVerifyOTP}
                    disabled={loading || otp.join('').length !== 6}
                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-light tracking-widest uppercase rounded-sm hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Verifying...' : 'Verify Code'}
                  </button>

                  <button
                    onClick={() => {
                      setStep('email');
                      setOtp(['', '', '', '', '', '']);
                      setError('');
                    }}
                    className="w-full py-3 text-neutral-600 font-light tracking-wide hover:text-amber-700 transition-colors duration-300"
                  >
                    Change Email Address
                  </button>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-red-700 text-sm font-light tracking-wide">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-sm">
                <p className="text-emerald-700 text-sm font-light tracking-wide">{success}</p>
              </div>
            )}

            {/* Privacy Note */}
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <p className="text-xs text-neutral-500 font-light tracking-wide text-center">
                Your information is encrypted and secure. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-40 right-40 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-40 left-40 w-80 h-80 bg-stone-200/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
