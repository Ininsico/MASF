"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Stethoscope, Activity, Heart, UserPlus } from 'lucide-react';

const AboutMedicalCamps = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-24 px-6 relative">

            {/* Header */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-sm font-bold uppercase tracking-widest"
                >
                    <Stethoscope size={14} /> Healthcare Initiative
                </motion.div>
                <h2 className="text-5xl md:text-8xl font-serif text-[#1a1612] italic leading-tight">
                    Medical <span className="text-[#d4af37]">Camps</span>
                </h2>
                <p className="mt-6 text-xl text-[#1a1612]/70 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Bridging the gap in healthcare access. We organize regular medical camps to provide free checkups, medication, and specialized care to remote communities.
                </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto">

                {/* Main Feature Video */}
                <motion.div
                    style={{ scale }}
                    className="lg:col-span-2 relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group h-[500px] lg:h-[600px]"
                >
                    <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                        <Activity size={14} /> Primary Care
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/Medicalcamp.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1a1612]/90 to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Checkups</h3>
                        <p className="text-white/80 font-jakarta text-sm max-w-lg">
                            From general exams to specialized screenings, our team ensures every patient receives thorough attention and care.
                        </p>
                    </div>
                </motion.div>

                {/* Vertical Stack */}
                <div className="flex flex-col gap-6 h-[500px] lg:h-[600px]">

                    {/* Top Side Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative flex-1 rounded-[32px] overflow-hidden shadow-xl border-4 border-white group"
                    >
                        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#1a1612] text-[#d4af37] text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                            <UserPlus size={12} /> Volunteers
                        </div>
                        <video
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/landingpagepics/HeroSectionvideo.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white text-lg font-bold font-serif">Dedicated Team</div>
                    </motion.div>

                    {/* Bottom Side Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative flex-1 rounded-[32px] overflow-hidden shadow-xl border-4 border-white group"
                    >
                        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#1a1612] text-[#d4af37] text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                            <Heart size={12} /> Impact
                        </div>
                        <video
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/landingpagepics/HeroSectionvideo3.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white text-lg font-bold font-serif">Community First</div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutMedicalCamps;
