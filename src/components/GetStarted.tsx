"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface GetStartedProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStarted: React.FC<GetStartedProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0" style={{ zIndex: 999999 }}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-7xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ maxHeight: "70vh" }}
        >
          {/* Decorative accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-500" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -right-4 -top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-zinc-900 text-white shadow-xl transition-transform hover:scale-110 hover:bg-zinc-800"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto" style={{ maxHeight: "calc(70vh - 4px)" }}>
            {/* Compact Header */}
            <div className="border-b border-zinc-200 bg-white px-6 py-6 text-center">
              <h2 className="text-3xl font-light tracking-tight text-zinc-900">
                Choose Your Style Journey
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-4 bg-zinc-50 p-6 lg:grid-cols-3">
              {/* Card 1: Luxury Lookbook */}
              <div className="group relative overflow-hidden bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/images/services/lookbook.jpg"
                    alt="Luxury Lookbook"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-3 top-3 bg-emerald-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Free
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                    Luxury Lookbook
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-zinc-600">
                    Personalized designer curation. Connect with designers, get exclusive looks crafted for you—completely free.
                  </p>

                  <ul className="mb-4 space-y-1.5 text-xs text-zinc-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Designer-curated looks
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Direct designer access
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      100% complimentary
                    </li>
                  </ul>

                  <Link
                    href="/platform/lookbook"
                    className="block bg-zinc-900 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-emerald-600"
                  >
                    Explore Free
                  </Link>
                </div>
              </div>

              {/* Card 2: AI Stylist */}
              <div className="group relative overflow-hidden bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/images/services/ai-stylist.jpg"
                    alt="AI Personal Stylist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-3 top-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    ₹69/mo
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                    AI Personal Stylist
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-zinc-600">
                    AI-powered virtual try-on. See curated looks on your photo, shop directly or connect with designers.
                  </p>

                  <ul className="mb-4 space-y-1.5 text-xs text-zinc-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                      Virtual AI try-on
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                      Occasion-based styling
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                      Direct purchase links
                    </li>
                  </ul>

                  <Link
                    href="/platform/personal-ai"
                    className="block bg-zinc-900 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-indigo-600"
                  >
                    Try AI Styling
                  </Link>
                </div>
              </div>

              {/* Card 3: Celebrity Stylist */}
              <div className="group relative overflow-hidden bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/images/services/celebrity-stylist.jpg"
                    alt="Celebrity Stylist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-3 top-3 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    From ₹99
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                    Celebrity Stylist
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-zinc-600">
                    Elite celebrity stylists. Preview signature looks, book premium appointments for red-carpet style.
                  </p>

                  <ul className="mb-4 space-y-1.5 text-xs text-zinc-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      Top celebrity stylists
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      Signature look previews
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      Premium appointments
                    </li>
                  </ul>

                  <Link
                    href="/platform/celebrity"
                    className="block bg-zinc-900 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-600"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;