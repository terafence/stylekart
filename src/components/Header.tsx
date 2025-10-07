'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.header 
            className="fixed left-0 right-0 z-[90] w-full"
            animate={{ 
                top: isScrolled ? '0px' : '44px'
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            <nav className="relative w-full flex justify-between items-center py-4 px-6 md:px-8 lg:px-12 bg-white/80 md:bg-white/40 backdrop-blur-2xl border-b border-white/30 shadow-lg">
                {/* Brighter glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/60 md:from-white/30 md:via-white/20 md:to-white/25 -z-10" />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />
                
                {/* Logo */}
                <Link href="/" className="flex items-center relative z-10">
                    <Image 
                        src="/images/stylekart.png" 
                        alt="StyleKart" 
                        width={160} 
                        height={45}
                        className="h-auto w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 items-center">
                    <li>
                        <Link href="/" className="relative text-foreground hover:text-foreground-accent transition-all duration-300 font-semibold text-base group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground-accent transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="relative text-foreground hover:text-foreground-accent transition-all duration-300 font-semibold text-base group">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground-accent transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="relative text-foreground hover:text-foreground-accent transition-all duration-300 font-semibold text-base group">
                            Products
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground-accent transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="relative text-foreground hover:text-foreground-accent transition-all duration-300 font-semibold text-base group">
                            Services
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground-accent transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="relative text-foreground hover:text-foreground-accent transition-all duration-300 font-semibold text-base group">
                            Contact Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground-accent transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    </li>
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block relative z-10">
                    <Link href="#cta" className="relative text-white bg-black/90 backdrop-blur-sm hover:bg-black hover:shadow-xl hover:shadow-black/30 hover:scale-105 px-9 py-3.5 rounded-full transition-all duration-300 font-bold text-base border border-white/20">
                        Style.ai
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center relative z-10">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="bg-primary text-black focus:outline-none rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        )}
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden w-full bg-white/90 backdrop-blur-2xl shadow-lg border-b border-white/30">
                    <ul className="flex flex-col space-y-4 pt-4 pb-6 px-6">
                        <li>
                            <Link href="/" className="text-foreground hover:text-primary block font-semibold text-base" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-foreground hover:text-primary block font-semibold text-base" onClick={toggleMenu}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="text-foreground hover:text-primary block font-semibold text-base" onClick={toggleMenu}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-foreground hover:text-primary block font-semibold text-base" onClick={toggleMenu}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-foreground hover:text-primary block font-semibold text-base" onClick={toggleMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-6 py-2.5 rounded-full block w-fit font-bold text-base shadow-lg" onClick={toggleMenu}>
                                Style.ai
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </motion.header>
    );
};

export default Header;
