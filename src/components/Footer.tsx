'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-b from-white to-gray-50">
            {/* Luxury Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            
            {/* Premium Newsletter Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-28">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-6">
                            <div className="h-[1px] w-16 bg-black mx-auto mb-6" />
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light mb-6">Exclusive Access</p>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-tight leading-tight">
                            Join Our Community
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                            Receive personalized style recommendations, early access to collections, and invitations to exclusive events
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 px-6 py-4 text-sm border border-gray-300 focus:outline-none focus:border-black transition-all bg-white/50 backdrop-blur-sm font-light tracking-wide"
                            />
                            <button className="px-10 py-4 bg-black text-white text-sm uppercase tracking-[0.2em] hover:bg-gray-900 transition-all duration-500 font-light whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-6 font-light">By subscribing, you agree to our Privacy Policy and consent to receive updates</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Main Footer Grid */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Brand Section - Takes more space */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-8">
                            <Image 
                                src="/images/stylekart.png" 
                                alt="StyleKart" 
                                width={180} 
                                height={50}
                                className="h-auto w-auto opacity-90"
                            />
                        </Link>
                        <p className="text-sm text-gray-600 leading-loose mb-8 font-light max-w-sm">
                            Redefining fashion through artificial intelligence. Experience personalized styling that adapts to your unique aesthetic.
                        </p>
                        <div className="space-y-4 mb-10">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-light">Customer Care</p>
                            <a href="tel:+1234567890" className="block text-lg text-black hover:text-gray-600 transition-colors font-light">
                                +91 9876543210
                            </a>
                            <a href="mailto:clientele@stylekart.com" className="block text-sm text-gray-700 hover:text-black transition-colors font-light">
                                contact@stylekart.in
                            </a>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href="#" className="group">
                                <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-black transition-all duration-500 flex items-center justify-center">
                                    <FaInstagram className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                            <Link href="#" className="group">
                                <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-black transition-all duration-500 flex items-center justify-center">
                                    <FaFacebookF className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                            <Link href="#" className="group">
                                <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-black transition-all duration-500 flex items-center justify-center">
                                    <FaXTwitter className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                            <Link href="#" className="group">
                                <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-black transition-all duration-500 flex items-center justify-center">
                                    <FaPinterest className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                            <Link href="#" className="group">
                                <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-black transition-all duration-500 flex items-center justify-center">
                                    <FaYoutube className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Collections */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs uppercase tracking-[0.25em] text-black mb-8 font-medium">Collections</h3>
                        <ul className="space-y-4">
                            <li><Link href="/women" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Women&apos;s</Link></li>
                            <li><Link href="/men" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Men&apos;s</Link></li>
                            <li><Link href="/accessories" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Accessories</Link></li>
                            <li><Link href="/footwear" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Footwear</Link></li>
                            <li><Link href="/new-season" className="text-sm text-gray-600 hover:text-black transition-colors font-light">New Season</Link></li>
                            <li><Link href="/editorial" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Editorial</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs uppercase tracking-[0.25em] text-black mb-8 font-medium">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/ai-styling" className="text-sm text-gray-600 hover:text-black transition-colors font-light">AI Styling</Link></li>
                            <li><Link href="/personal-shopper" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Personal Shopper</Link></li>
                            <li><Link href="/alterations" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Alterations</Link></li>
                            <li><Link href="/gift-services" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Gift Services</Link></li>
                            <li><Link href="/appointments" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Book Appointment</Link></li>
                            <li><Link href="/vip" className="text-sm text-gray-600 hover:text-black transition-colors font-light">VIP Program</Link></li>
                        </ul>
                    </div>

                    {/* Assistance */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs uppercase tracking-[0.25em] text-black mb-8 font-medium">Assistance</h3>
                        <ul className="space-y-4">
                            <li><Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Contact Us</Link></li>
                            <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Shipping</Link></li>
                            <li><Link href="/returns" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Returns</Link></li>
                            <li><Link href="/payment" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Payment Options</Link></li>
                            <li><Link href="/size-guide" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Size Guide</Link></li>
                            <li><Link href="/faq" className="text-sm text-gray-600 hover:text-black transition-colors font-light">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs uppercase tracking-[0.25em] text-black mb-8 font-medium">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors font-light">About Us</Link></li>
                            <li><Link href="/careers" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Careers</Link></li>
                            <li><Link href="/sustainability" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Sustainability</Link></li>
                            <li><Link href="/press" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Press</Link></li>
                            <li><Link href="/stores" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Store Locator</Link></li>
                            <li><Link href="/partnerships" className="text-sm text-gray-600 hover:text-black transition-colors font-light">Partnerships</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Luxury Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Bottom Section */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
                        <Link href="/privacy" className="text-xs text-gray-500 hover:text-black transition-colors uppercase tracking-wider font-light">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-gray-500 hover:text-black transition-colors uppercase tracking-wider font-light">Terms of Service</Link>
                        <Link href="/cookies" className="text-xs text-gray-500 hover:text-black transition-colors uppercase tracking-wider font-light">Cookie Policy</Link>
                        <Link href="/accessibility" className="text-xs text-gray-500 hover:text-black transition-colors uppercase tracking-wider font-light">Accessibility</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-px bg-gray-300" />
                        <p className="text-xs text-gray-400 font-light tracking-wide">© 2025 StyleKart. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

            {/* Subtle Bottom Border */}
            <div className="h-1 w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
        </footer>
    );
};

export default Footer;
