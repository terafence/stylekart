"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LookbookPage() {
  const router = useRouter();

  const options = [
    {
      id: 'diy',
      title: 'DIY Style Form',
      subtitle: 'Craft Your Vision',
      path: '/platform/lookbook/diy',
    },
    {
      id: 'call',
      title: 'Style Consultation',
      subtitle: 'Personal Guidance',
      path: '/contact',
    },
    {
      id: 'history',
      title: 'Your Archive',
      subtitle: 'Collection History',
      path: '/platform/lookbook/history',
    }
  ];

  return (
    <div className="h-screen bg-[#f8f6f0] overflow-hidden flex flex-col">
      {/* Header Spacing */}
      <div className="h-20 flex-shrink-0"></div>

      {/* Main Container - Fits within remaining viewport */}
      <div className="flex-1 flex items-center overflow-hidden">
        <div className="w-full px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1600px] mx-auto h-full">
            
            {/* Left Pane - Image */}
            <div className="flex items-center justify-center">
              <div className="relative group w-full max-w-[600px]">
                {/* Subtle Frame Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/40 via-transparent to-amber-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative bg-white shadow-2xl">
                  {/* Image Container - Controlled height */}
                  <div className="relative overflow-hidden" style={{ height: 'calc(100vh - 200px)', maxHeight: '650px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90" 
                      alt="Luxury Fashion"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                      priority
                    />
                    
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c2416]/40 via-transparent to-transparent"></div>
                    
                    {/* LV-Style Monogram Watermark */}
                    <div className="absolute top-8 right-8 text-white/10 text-6xl font-serif">
                      SK
                    </div>

                    {/* Bottom Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#2c2416] text-white py-4 px-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-light tracking-[0.2em] uppercase">Lookbook</p>
                          <p className="text-xs text-amber-200 tracking-wider mt-1">2025 Collection</p>
                        </div>
                        <div className="w-8 h-8 border border-amber-400/50 flex items-center justify-center">
                          <div className="w-2 h-2 bg-amber-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-amber-700/20"></div>
              </div>
            </div>

            {/* Right Pane - Options */}
            <div className="flex flex-col justify-center py-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#2c2416]"></div>
                  <div className="w-2 h-2 bg-amber-600"></div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-light text-[#2c2416] tracking-wide mb-3">
                  Begin Your Journey
                </h1>
                <p className="text-neutral-600 text-sm tracking-wider font-light">
                  Select your preferred experience
                </p>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => router.push(option.path)}
                    className="group relative w-full bg-white hover:bg-[#2c2416] border border-neutral-200 hover:border-[#2c2416] transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Background Slide */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    <div className="relative px-8 py-6 flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-xl font-light text-[#2c2416] group-hover:text-white tracking-wide transition-colors duration-500 mb-1">
                          {option.title}
                        </h3>
                        <p className="text-sm text-neutral-500 group-hover:text-amber-200 font-light tracking-wider transition-colors duration-500">
                          {option.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-px bg-neutral-200 group-hover:bg-amber-400/30 transition-colors duration-500"></div>
                        <svg 
                          className="w-5 h-5 text-[#2c2416] group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-10 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border-2 border-[#2c2416] flex items-center justify-center">
                    <span className="text-[#2c2416] text-xs font-serif">SK</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#2c2416] tracking-wider font-light">STYLE KRAFTER</p>
                    <p className="text-xs text-neutral-500 tracking-wider font-light mt-0.5">Since 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="fixed top-20 left-0 w-32 h-32 border-l-2 border-t-2 border-amber-700/10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber-700/10 pointer-events-none"></div>
    </div>
  );
}
    