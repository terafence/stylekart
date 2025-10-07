'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
    { name: 'Nike', logo: '/logos/nike.svg' },
    { name: 'Zara', logo: '/logos/zara.svg' },
    { name: 'H&M', logo: '/logos/hm.svg' },
    { name: 'Gucci', logo: '/logos/gucci.svg' },
    { name: 'Burberry', logo: '/logos/burberry.svg' },
    { name: 'ASOS', logo: '/logos/asos.svg' },
    { name: 'Adidas', logo: '/logos/adidas.svg' },
    { name: 'Puma', logo: '/logos/puma.svg' },
    { name: 'Ralph Lauren', logo: '/logos/ralph-lauren.svg' },
    { name: 'Tommy Hilfiger', logo: '/logos/tommy-hilfiger.svg' },
    { name: 'Calvin Klein', logo: '/logos/calvin-klein.svg' },
    { name: 'Levi\'s', logo: '/logos/levis.svg' },
    { name: 'Uniqlo', logo: '/logos/uniqlo.svg' },
    { name: 'Gap', logo: '/logos/gap.svg' },
];

const Logos: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#FDFCFB] via-[#F8F6F3] to-[#FDFCFB] py-20 overflow-hidden">
            <div className="relative max-w-[1800px] mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#8B7355] font-light mb-3">
                        Our Partners
                    </p>
                    <h2 className="text-2xl md:text-3xl font-light text-[#1A1A1A] tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Trusted by <span className="font-normal text-[#8B7355]">200+</span> brands worldwide
                    </h2>
                </motion.div>

                {/* Marquee */}
                <div className="relative py-8">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDFCFB] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDFCFB] to-transparent z-10" />

                    <div className="flex overflow-hidden">
                        {[1, 2, 3].map((set) => (
                            <motion.div
                                key={set}
                                className="flex gap-20 items-center px-10"
                                animate={{ x: [0, -2400] }}
                                transition={{
                                    x: { duration: 45, repeat: Infinity, ease: "linear" }
                                }}
                            >
                                {brands.map((brand, index) => (
                                    <div
                                        key={`${set}-${index}`}
                                        className="group flex-shrink-0 w-48 h-24 flex items-center justify-center"
                                    >
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            width={180}
                                            height={90}
                                            className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                            quality={95}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logos;
