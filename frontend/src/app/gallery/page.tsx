"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';

const images = [
    { src: "/landingpagepics/breastcancer.png", category: "Awareness" },
    { src: "/landingpagepics/clothingcampagin.png", category: "Drives" },
    { src: "/landingpagepics/floodrelief.png", category: "Relief" },
    { src: "/landingpagepics/Medicalcamp.png", category: "Healthcare" },
    { src: "/landingpagepics/worldmentalhealth.png", category: "Seminars" },
    { src: "/landingpagepics/trift/trift.png", category: "Events" },
];

const GalleryPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        Moments of Impact
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9]">
                        Our <span className="text-[#d4af37]">Gallery</span>
                    </h1>
                </motion.div>
            </section>

            {/* Masonry Grid */}
            <section className="px-6 pb-32 max-w-[1400px] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative break-inside-avoid rounded-[32px] overflow-hidden group border border-[#d4af37]/10 shadow-lg"
                        >
                            <Image
                                src={img.src}
                                alt={img.category}
                                width={500}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-[#f2e8cf] font-serif italic text-xl">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GalleryPage;
