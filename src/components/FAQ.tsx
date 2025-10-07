'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How does StyleKart's AI understand my style?",
        answer: "Our proprietary AI analyzes your preferences, measurements, and lifestyle through advanced deep learning. It creates a comprehensive style DNA that evolves with every interaction, delivering recommendations that feel truly personal."
    },
    {
        question: "Can the AI help me build complete outfits?",
        answer: "Absolutely. Maya, your 24/7 AI stylist, crafts complete looks for any occasion. From boardroom presentations to evening soirées, she curates ensembles that harmonize with your aesthetic and the moment's demands."
    },
    {
        question: "What makes your color analysis different?",
        answer: "We use advanced imaging technology to analyze your skin's undertones, contrast levels, and seasonal color theory. The AI then recommends shades that enhance your natural radiance, ensuring every piece complements your unique complexion."
    },
    {
        question: "How does AI-powered shopping reduce waste?",
        answer: "StyleKart evaluates each item's versatility with your existing wardrobe, suggests multi-occasion styling, and calculates cost-per-wear. This ensures mindful purchases that align with sustainable fashion principles."
    },
    {
        question: "Is my personal data secure?",
        answer: "Your privacy is paramount. We employ military-grade encryption and adhere to international data protection standards. Your style profile and measurements are never shared, maintaining the discretion expected of luxury fashion houses."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative bg-white py-32 md:py-40 overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-100/40 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
                {/* Premium Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex flex-col items-center"
                    >
                        <div className="w-12 h-[1px] bg-black mb-8" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-8 font-light">
                            Questions & Answers
                        </span>
                        <h2 className="text-5xl md:text-7xl font-extralight text-black mb-6 tracking-tight">
                            Discover StyleKart
                        </h2>
                        <p className="text-lg text-gray-500 max-w-xl font-light leading-relaxed">
                            Everything you need to know about our AI-powered styling experience
                        </p>
                    </motion.div>
                </div>

                {/* Premium FAQ Grid */}
                <div className="grid grid-cols-1 gap-2 max-w-4xl mx-auto">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative bg-gradient-to-r from-white to-gray-50/50 backdrop-blur-sm transition-all duration-700 ${
                                openIndex === index 
                                    ? 'shadow-2xl shadow-gray-200/60' 
                                    : 'hover:shadow-xl hover:shadow-gray-200/40'
                            }`}
                        >
                            {/* Decorative Border */}
                            <div className={`absolute inset-0 border transition-all duration-700 ${
                                openIndex === index 
                                    ? 'border-black' 
                                    : 'border-gray-200 group-hover:border-gray-300'
                            }`} />

                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="relative w-full px-10 md:px-12 py-8 flex items-start justify-between text-left"
                            >
                                <div className="flex-1 pr-8">
                                    <div className="flex items-start gap-6">
                                        <span className={`text-6xl font-extralight transition-all duration-700 ${
                                            openIndex === index ? 'text-black' : 'text-gray-300 group-hover:text-gray-400'
                                        }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1 pt-2">
                                            <h3 className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-700 ${
                                                openIndex === index ? 'text-black' : 'text-gray-800'
                                            }`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Elegant Toggle Icon */}
                                <div className="flex-shrink-0 pt-2">
                                    <div className={`w-12 h-12 rounded-full border transition-all duration-700 flex items-center justify-center ${
                                        openIndex === index 
                                            ? 'bg-black border-black rotate-180' 
                                            : 'bg-white border-gray-300 group-hover:border-black'
                                    }`}>
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 20 20" 
                                            fill="none" 
                                            className={`transition-colors duration-700 ${
                                                openIndex === index ? 'text-white' : 'text-black'
                                            }`}
                                        >
                                            <path 
                                                d="M10 4V16M4 10H16" 
                                                stroke="currentColor" 
                                                strokeWidth="1.5" 
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-10 md:px-12 pb-10">
                                            <div className="pl-20 pr-16">
                                                <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 via-gray-200 to-transparent mb-6" />
                                                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Elegant CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-8">
                        <p className="text-base text-gray-500 font-light">
                            Need personalized assistance?
                        </p>
                        <Link 
                            href="/contact"
                            className="group relative px-12 py-5 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span className="relative text-sm uppercase tracking-[0.3em] text-white font-light flex items-center gap-4">
                                Schedule a Consultation
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-500 group-hover:translate-x-2">
                                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
