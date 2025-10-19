interface OTPData {
  otp: string;
  expiry: number;
}

class OTPStore {
  private store: Map<string, OTPData>;

  constructor() {
    this.store = new Map();
    this.startCleanup();
  }

  set(email: string, otp: string, expiryMinutes: number = 10): void {
    const expiry = Date.now() + expiryMinutes * 60 * 1000;
    this.store.set(email.toLowerCase(), { otp, expiry });
  }

  get(email: string): OTPData | undefined {
    return this.store.get(email.toLowerCase());
  }

  delete(email: string): boolean {
    return this.store.delete(email.toLowerCase());
  }

  verify(email: string, otp: string): boolean {
    const data = this.get(email);
    
    if (!data) {
      return false;
    }

    // Check expiry
    if (Date.now() > data.expiry) {
      this.delete(email);
      return false;
    }

    // Verify OTP
    if (data.otp !== otp) {
      return false;
    }

    // Remove OTP after successful verification
    this.delete(email);
    return true;
  }

  private startCleanup(): void {
    // Clean up expired OTPs every minute
    setInterval(() => {
      const now = Date.now();
      const emails = Array.from(this.store.keys());
      
      for (const email of emails) {
        const data = this.store.get(email);
        if (data && data.expiry < now) {
          this.store.delete(email);
        }
      }
    }, 60000);
  }
}

// Singleton instance
let otpStoreInstance: OTPStore;

export function getOTPStore(): OTPStore {
  if (!otpStoreInstance) {
    otpStoreInstance = new OTPStore();
  }
  return otpStoreInstance;
}