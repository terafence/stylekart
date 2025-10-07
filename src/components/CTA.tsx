'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#F5E6D3] via-[#FAF0E6] to-[#FFF8E7] overflow-hidden">
            {/* Luxury Brand Pattern - Inspired by LV Monogram */}
            <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 69, 19, 0.1) 35px, rgba(139, 69, 19, 0.1) 70px)`,
                }} />
            </div>

            {/* Elegant Content Container */}
            <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Luxury Serif Headline */}
                    <h2 className="text-4xl md:text-6xl font-serif text-[#2C1810] mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Elevate Your Wardrobe
                    </h2>
                    
                    {/* Refined Subtext */}
                    <p className="text-base md:text-lg text-[#6B5446] mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Experience personalized AI styling that understands your aesthetic. Begin your journey to effortless elegance.
                    </p>

                    {/* Premium Button - LV/Gucci Style */}
                    <Link href="/get-started">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-14 py-4 bg-[#2C1810] text-[#F5E6D3] font-light text-sm uppercase tracking-[0.25em] overflow-hidden border border-[#2C1810] transition-all duration-500"
                        >
                            <span className="relative z-10">Discover Style.ai</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#8B4513] to-[#A0522D]"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </motion.button>
                    </Link>

                    {/* Luxury Accent Line */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#8B4513]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-[#8B4513] font-light">Since 2025</span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#8B4513]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
