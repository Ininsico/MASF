"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import RamadanDastarkhan from '@/components/RamadanDastarkhan';
import OldAgeHomeVisit from '@/components/OldAgeHomeVisit';
import Recap2024 from '@/components/Recap2024';
import Footer from '@/components/Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">
            {/* Editorial Hero Section */}
            <section className="relative min-h-[90vh] w-full flex items-center bg-[#fdf8f0] overflow-hidden -mt-24 pt-24">
                <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Typography */}
                    <div className="relative z-20 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[1px] w-20 bg-[#d4af37]" />
                            <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm">Est. 2018</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-6xl md:text-8xl lg:text-[7rem] font-serif text-[#1a1612] leading-tight whitespace-nowrap"
                        >
                            We Are <span className="italic text-[#d4af37]">MASF</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-xl text-[#1a1612]/70 max-w-lg font-light leading-relaxed font-jakarta"
                        >
                            More than an organization, we are a family. Driven by the belief that every life holds immeasurable value, we bridge the gap between privilege and need.
                        </motion.p>
                    </div>

                    {/* Right: Visual Composition */}
                    <div className="relative h-[700px] w-full hidden lg:block perspective-1000">
                        {/* Main Image - Center */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute top-10 right-20 w-[350px] h-[450px] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white z-20"
                        >
                            <img
                                src="/landingpagepics/Medicalcamp.png"
                                alt="Medical Camp"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Top Left Floating Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="absolute top-0 right-[350px] w-[220px] h-[280px] rounded-[40px] overflow-hidden shadow-xl border-4 border-[#d4af37]/20 z-10"
                        >
                            <img
                                src="/landingpagepics/breastcancer.png"
                                alt="Health Awareness"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Bottom Right Floating Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute bottom-20 right-0 w-[240px] h-[300px] rounded-[40px] overflow-hidden shadow-xl border-4 border-white z-30 transform rotate-3"
                        >
                            <img
                                src="/landingpagepics/clothingcampagin.png"
                                alt="Clothing Drive"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Bottom Left Abstract Shape/Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute bottom-40 right-[320px] w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border border-[#d4af37]/30 z-0 grayscale mix-blend-multiply opacity-70"
                        >
                            <img
                                src="/landingpagepics/worldmentalhealth.png"
                                alt="Mental Health"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Gold Circle Accent */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#d4af37]/10 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
                    </div>
                </div>
            </section>

            <RamadanDastarkhan />

            <Recap2024 />

            <Footer />
        </div>
    );
};

export default AboutPage;
