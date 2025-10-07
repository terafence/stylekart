'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiSparkles } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

const AdvertisementHeader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -40 }}
                    animate={{ y: 0 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-0 left-0 right-0 z-[100] h-[36px]"
                >
                    <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#16213e] border-b border-white/5">
                        {/* Premium gradient overlay */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-pink-600/20"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            style={{ backgroundSize: '200% 100%' }}
                        />

                        <div className="relative max-w-7xl mx-auto h-full px-4 flex items-center justify-center">
                            {/* Left sparkle */}
                            <motion.div 
                                className="hidden md:block absolute left-4"
                                animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <HiSparkles className="w-3 h-3 text-purple-400" />
                            </motion.div>

                            {/* Center content */}
                            <div className="flex items-center justify-center gap-2 sm:gap-3">
                                <motion.span
                                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                    className="text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text"
                                    style={{ backgroundSize: '200% auto' }}
                                >
                                    Limited Time
                                </motion.span>
                                
                                <div className="h-3 w-px bg-white/10" />
                                
                                <p className="text-[11px] sm:text-xs text-gray-300 font-medium">
                                    <span className="hidden sm:inline">Get </span>
                                    <span className="text-white font-bold">70% OFF</span> New Collection
                                </p>
                                
                                <Link 
                                    href="/shop" 
                                    className="group relative ml-2 px-3 sm:px-4 py-1 bg-white text-black text-[11px] sm:text-xs font-bold rounded-full overflow-hidden"
                                >
                                    <motion.span 
                                        className="relative z-10"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Shop Now
                                    </motion.span>
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </div>

                            {/* Right sparkle */}
                            <motion.div 
                                className="hidden md:block absolute right-4"
                                animate={{ rotate: [0, -180, -360], scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <HiSparkles className="w-3 h-3 text-pink-400" />
                            </motion.div>
                        </div>

                        {/* Bottom glow */}
                        <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-px"
                            animate={{
                                background: [
                                    'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)',
                                    'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.5), transparent)',
                                    'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)'
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdvertisementHeader;
