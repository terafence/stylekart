"use client";
import React from "react";
import Link from "next/link";

// Luxury-inspired editorial hero with full viewport coverage
// Keeps the background video at /public/videos/hero.mp4

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex h-screen min-h-[100vh] items-center overflow-hidden"
      aria-label="Editorial hero"
    >
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlays */}
      <div className="absolute inset-0 -z-10 bg-black/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-b from-transparent to-black/70" />

      {/* Top utility bar */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 text-xs text-white/80 md:px-10">
        <span className="pointer-events-auto uppercase tracking-[0.35em]">AW &apos;25</span>
        <span className="hidden pointer-events-auto md:block">Free shipping over ₹1,999 • Easy 30‑day returns</span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 md:px-10">
        <div className="max-w-3xl">
          {/* Microcopy */}
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-white/80">
            The New Edit
          </p>

          {/* Editorial headline */}
          <h1 className="text-5xl font-extrabold leading-[1.05] text-white md:text-8xl">
            Redefine Quiet Power
          </h1>

          {/* Subline */}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Tailored silhouettes in weightless wool. Midnight satin with architectural lines. Essentials, distilled.
          </p>

          {/* Primary actions */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/women"
              className="group inline-flex items-center text-white/95 underline underline-offset-[6px] decoration-white/30 hover:decoration-white"
            >
              Shop Women
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/men"
              className="group inline-flex items-center text-white/95 underline underline-offset-[6px] decoration-white/30 hover:decoration-white"
            >
              Shop Men
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/capsule/aw25"
              className="group inline-flex items-center text-white/80 underline underline-offset-[6px] decoration-white/20 hover:text-white hover:decoration-white"
            >
              AW &apos;25 Capsule
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Right rail nav */}
      <nav className="absolute right-0 top-0 z-20 hidden h-full w-20 items-center justify-center md:flex">
        <ul className="flex flex-col items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
          <li><a href="#women" className="hover:text-white">Women</a></li>
          <li><a href="#men" className="hover:text-white">Men</a></li>
          <li><a href="#shoes" className="hover:text-white">Shoes</a></li>
          <li><a href="#bags" className="hover:text-white">Bags</a></li>
        </ul>
      </nav>

      {/* Bottom nav strip */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[12px] uppercase tracking-[0.25em] text-white/80 md:px-10">
          <Link href="/new" className="hover:text-white">New In</Link>
          <Link href="/tailoring" className="hover:text-white">Tailoring</Link>
          <Link href="/evening" className="hover:text-white">Evening</Link>
          <Link href="/denim" className="hover:text-white">Denim</Link>
          <Link href="/accessories" className="hover:text-white">Accessories</Link>
          <Link href="/sale" className="hover:text-white">Sale</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
