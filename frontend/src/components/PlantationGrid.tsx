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
        <section className="w-full max-w-[1400px] mx-auto py-32 px-6 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <div className="inline-block px-8 py-2 rounded-full border border-blue-600/20 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-[0.3em] mb-12 shadow-sm">
                    Green Pakistan
                </div>
                <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-serif text-slate-900 italic leading-none tracking-tight">
                    Green <span className="text-blue-600">Future</span>
                </h2>
                <p className="mt-10 text-2xl text-slate-500 font-jakarta max-w-4xl mx-auto leading-relaxed">
                    Our Plantation Drive at MHCG School Jhal — cultivating a greener, healthier tomorrow for the generations to come.
                </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[900px]">

                {/* Left Large Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-4 md:row-span-2 relative rounded-[60px] overflow-hidden group shadow-2xl border-8 border-white"
                >
                    <Image
                        src={gridImages[0]}
                        alt="Plantation"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-white font-serif italic text-3xl">Community Roots</span>
                    </div>
                </motion.div>

                {/* Center Video - The Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                    className="md:col-span-4 md:row-span-2 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white bg-slate-900 relative group"
                >
                    <div className="absolute top-6 right-6 z-20 px-6 py-2 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Live Coverage
                    </div>
                    <video
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/plantation/plantationvideo.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                {/* Right Top Image and Bottom Image split */}
                <div className="md:col-span-4 md:row-span-2 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 relative rounded-[60px] overflow-hidden group shadow-2xl border-8 border-white"
                    >
                        <Image
                            src={gridImages[1]}
                            alt="Plantation Event"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-white font-serif italic text-3xl">Young Hands</span>
                        </div>
                    </motion.div>

                    <div className="flex-1 flex gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 relative rounded-[40px] overflow-hidden group shadow-xl border-4 border-white"
                        >
                            <Image
                                src={gridImages[2]}
                                alt="Plantation Grid"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex-1 relative rounded-[40px] overflow-hidden group shadow-xl border-4 border-white"
                        >
                            <Image
                                src={gridImages[3]}
                                alt="Plantation Grid"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-20 flex justify-center"
            >
                <Link href="/gallery">
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-blue-600 rounded-full px-16 h-20 text-xl font-serif italic transition-all duration-500 shadow-xl shadow-slate-900/20">
                        View Full Gallery
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
};

export default PlantationGrid;
