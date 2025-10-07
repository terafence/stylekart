'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AIIntroduction: React.FC = () => {
    return (
        <section className="relative w-full">
            {/* Row 1: Light Left | Dark Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[85vh]">
                {/* Light Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#FAF9F7] flex items-center justify-center p-10 md:p-16 lg:p-20"
                >
                    <div className="max-w-lg">
                        <div className="w-12 h-[1px] bg-black/30 mb-5" />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3 font-light">Introducing</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#1A1A1A] mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            StyleKart.ai, Your AI Stylist
                        </h2>
                        <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed font-light mb-8">
                            Experience intelligent fashion curation powered by advanced machine learning. StyleKart.ai analyzes your preferences, body type, and lifestyle to deliver recommendations that feel inherently you.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
                                <p className="text-sm text-[#5A5A5A] font-light">Personalized style DNA analysis</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
                                <p className="text-sm text-[#5A5A5A] font-light">Real-time outfit generation</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
                                <p className="text-sm text-[#5A5A5A] font-light">24/7 styling consultation</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Dark Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#1A1A1A] overflow-hidden"
                >
                    <Image
                        src="/images/ai-stylekart.png"
                        alt="StyleKart.ai AI Stylist Interface"
                        fill
                        className="object-cover object-center"
                        quality={90}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
                </motion.div>
            </div>

            {/* Gap Between Rows */}
            <div className="h-16 md:h-24 bg-white" />

            {/* Row 2: Dark Left | Light Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[85vh]">
                {/* Dark Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#2A2A2A] overflow-hidden order-2 lg:order-1"
                >
                    <Image
                        src="/images/wardrobe-analysis.png"
                        alt="Intelligent Wardrobe Analysis"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/30 to-black/10" />
                </motion.div>

                {/* Light Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#F5F3F0] flex items-center justify-center p-10 md:p-16 lg:p-20 order-1 lg:order-2"
                >
                    <div className="max-w-lg">
                        <div className="w-12 h-[1px] bg-black/30 mb-5" />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3 font-light">Smart Technology</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#1A1A1A] mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            Intelligent Wardrobe
                        </h2>
                        <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed font-light mb-8">
                            Our AI maps your entire collection, understanding fabric, color, and style compatibility. Each piece is analyzed for versatility, helping you maximize your wardrobe&apos;s potential.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A] mt-2 flex-shrink-0" />
                                <p className="text-sm text-[#5A5A5A] font-light">Digital wardrobe visualization</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A] mt-2 flex-shrink-0" />
                                <p className="text-sm text-[#5A5A5A] font-light">Outfit compatibility scoring</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A] mt-2 flex-shrink-0" />
                                <p className="text-sm text-[#5A5A5A] font-light">Sustainable style insights</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIIntroduction;
