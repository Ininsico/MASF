"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const gridImages = [
    "/landingpagepics/plantation/Plantation.png",
    "/landingpagepics/plantation/Plantation2.png",
    "/landingpagepics/plantation/plantation3.png",
    "/landingpagepics/plantation/plantation4.png",
];

const PlantationGrid = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-24 px-6 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <div className="inline-block px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] text-lg font-bold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    Community Impact
                </div>
                <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-serif text-[#1a1612] italic leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#1a1612] via-[#d4af37] to-[#1a1612] drop-shadow-sm whitespace-nowrap">
                    Green Future Initiative
                </h2>
                <p className="mt-8 text-2xl text-[#1a1612]/70 font-jakarta max-w-3xl mx-auto">
                    Plantation Drive at MHCG School Jhal - cultivating a greener, healthier tomorrow for our children.
                </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">

                {/* Left Large Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-4 md:row-span-2 relative rounded-[32px] overflow-hidden group shadow-2xl border border-[#d4af37]/20"
                >
                    <Image
                        src={gridImages[0]}
                        alt="Plantation"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-serif italic text-2xl">Community Unity</span>
                    </div>
                </motion.div>

                {/* Center Video - The Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                    className="md:col-span-4 md:row-span-2 rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border-2 border-[#d4af37]/30 bg-black relative group"
                >
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#d4af37] text-white text-xs font-bold rounded-full animate-pulse">
                        LIVE ACTION
                    </div>
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/plantation/plantationvideo.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay Frame */}
                    <div className="absolute inset-0 border-[8px] border-white/5 pointer-events-none rounded-[24px]"></div>
                </motion.div>

                {/* Right Top Image and Bottom Image split */}
                <div className="md:col-span-4 md:row-span-2 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 relative rounded-[32px] overflow-hidden group shadow-2xl border border-[#d4af37]/20"
                    >
                        <Image
                            src={gridImages[1]}
                            alt="Plantation Event"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-serif italic text-2xl">Young Hands</span>
                        </div>
                    </motion.div>

                    <div className="flex-1 flex gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 relative rounded-[32px] overflow-hidden group shadow-xl border border-[#d4af37]/20"
                        >
                            <Image
                                src={gridImages[2]}
                                alt="Plantation Grid"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex-1 relative rounded-[32px] overflow-hidden group shadow-xl border border-[#d4af37]/20"
                        >
                            <Image
                                src={gridImages[3]}
                                alt="Plantation Grid"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 flex justify-center"
            >
                <Link href="/gallery">
                    <Button size="lg" className="bg-[#1a1612] text-[#d4af37] border border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1612] text-xl px-12 py-8 rounded-full shadow-2xl transition-all duration-300 font-serif italic">
                        View Full Gallery
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
};

export default PlantationGrid;
