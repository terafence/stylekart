'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    tag?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Tailored Blazer",
        category: "Outerwear",
        price: "₹45,900",
        image: "/products/blazer.png",
        tag: "New"
    },
    {
        id: 2,
        name: "Silk Midi Dress",
        category: "Dresses",
        price: "₹32,500",
        image: "/products/dress.png"
    },
    {
        id: 3,
        name: "Leather Tote",
        category: "Bags",
        price: "₹58,000",
        image: "/products/bag.png",
        tag: "Trending"
    },
    {
        id: 4,
        name: "Cashmere Sweater",
        category: "Knitwear",
        price: "₹28,900",
        image: "/products/sweater.png"
    }
];

const Products: React.FC = () => {
    return (
        <section className="relative bg-white py-24 md:py-32">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
                {/* Elegant Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex flex-col items-center">
                        <div className="w-[1px] h-12 bg-black/20 mb-6" />
                        <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-light mb-4">Collection</p>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#1A1A1A] tracking-tight mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            New Arrivals
                        </h2>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={`/products/${product.id}`} className="group block">
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] bg-[#F5F3F0] mb-5 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        quality={90}
                                    />
                                    
                                    {/* Tag */}
                                    {product.tag && (
                                        <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm">
                                            <span className="text-[9px] uppercase tracking-[0.3em] text-black font-light">
                                                {product.tag}
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                                </div>

                                {/* Product Info */}
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light">
                                        {product.category}
                                    </p>
                                    <h3 className="text-lg font-light text-[#1A1A1A] group-hover:text-[#666] transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-base font-normal text-[#1A1A1A]">
                                        {product.price}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <Link href="/collections">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-12 py-4 border border-black hover:bg-black hover:text-white transition-all duration-500"
                        >
                            <span className="text-xs uppercase tracking-[0.3em] font-light">
                                Explore All
                            </span>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
