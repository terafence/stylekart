'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "StyleKart's AI captures the nuance of my aesthetic perfectly. Revolutionary.",
        name: "Priya Sharma",
        title: "Fashion Entrepreneur, Mumbai"
    },
    {
        quote: "It understands my style better than any stylist ever has. Truly exceptional.",
        name: "Arjun Mehta",
        title: "Creative Director, Bangalore"
    },
    {
        quote: "The precision and elegance in every recommendation. Absolutely transformative.",
        name: "Ananya Kapoor",
        title: "Luxury Consultant, Delhi"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#F8F6F3] to-[#EEEBE7] py-20 overflow-hidden">
            {/* Luxury Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative w-full px-8 md:px-16 lg:px-24">
                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#999] font-light mb-3">What Our Clients Say</p>
                    <h2 className="text-4xl md:text-5xl font-extralight text-[#1A1A1A] tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Testimonials
                    </h2>
                </motion.div>

                {/* Full Width Testimonial Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1600px] mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-white/40 backdrop-blur-sm border border-[#E8E6E1] p-8 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                        >
                            {/* Quote Mark */}
                            <div className="text-6xl font-serif text-[#D4CFC5] leading-none mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                &quot;
                            </div>
                            
                            {/* Quote */}
                            <p className="text-base text-[#2A2A2A] leading-relaxed font-light mb-6 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                {testimonial.quote}
                            </p>

                            {/* Author */}
                            <div className="border-t border-[#E8E6E1] pt-4">
                                <p className="text-sm font-medium text-[#1A1A1A] mb-1">
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-[#8B8B8B] font-light uppercase tracking-[0.2em]">
                                    {testimonial.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
