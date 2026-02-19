"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import RamadanDastarkhan from '@/components/RamadanDastarkhan';
import OldAgeHomeVisit from '@/components/OldAgeHomeVisit';
import AboutMedicalCamps from '@/components/AboutMedicalCamps';
import Recap2024 from '@/components/Recap2024';
import Footer from '@/components/Footer';
import DonationTicker from '@/components/DonationTicker';

const AboutPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-white text-slate-900 font-jakarta">
            {/* Editorial Hero Section */}
            <section className="relative min-h-[90vh] w-full flex items-center bg-white overflow-hidden -mt-24 pt-24">
                <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Typography */}
                    <div className="relative z-20 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-6"
                        >
                            <div className="h-[1px] w-24 bg-blue-600" />
                            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Since 2018</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
                        >
                            We Are <br />
                            <span className="text-blue-600 uppercase font-black">MASF</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-2xl text-slate-500 max-w-xl font-light leading-relaxed font-jakarta"
                        >
                            More than an organization, we are a family. Driven by the belief that every life holds immeasurable value, we bridge the gap between privilege and need across Pakistan.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 h-12 font-bold text-base shadow-lg transition-all hover:scale-105">
                                Our Impact Story
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: Visual Composition */}
                    <div className="relative h-[800px] w-full hidden lg:block perspective-1000">
                        {/* Main Image - Center */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[600px] rounded-[100px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)] border-[12px] border-white z-20"
                        >
                            <Image
                                src="/landingpagepics/Medicalcamp.png"
                                alt="Medical Camp"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Top Left Floating Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="absolute top-10 left-10 w-[240px] h-[320px] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white z-30"
                        >
                            <Image
                                src="/landingpagepics/breastcancer.png"
                                alt="Health Awareness"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Bottom Right Floating Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute bottom-10 right-10 w-[260px] h-[340px] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white z-30 transform rotate-6"
                        >
                            <Image
                                src="/landingpagepics/clothingcampagin.png"
                                alt="Clothing Drive"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
                    </div>
                </div>
            </section>

            <RamadanDastarkhan />

            <OldAgeHomeVisit />

            <AboutMedicalCamps />

            <DonationTicker />

            <Recap2024 />

            <Footer />
        </div>
    );
};

export default AboutPage;
