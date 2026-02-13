"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const MedicalCamp = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto py-32 px-6 relative overflow-hidden">

            {/* Header Area */}
            <div className="text-center mb-20 relative z-10">
                <motion.div style={{ opacity }} className="inline-block mb-4">
                    <span className="px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-[0.2em]">
                        Healthcare For All
                    </span>
                </motion.div>
                <motion.h2
                    style={{ scale }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif text-slate-900 italic leading-[0.9] whitespace-nowrap"
                >
                    Medical Camp <span className="text-blue-600">2k25</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">

                {/* Left Side: Long Description */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 relative z-10">
                    <div className="p-10 md:p-14 rounded-[48px] bg-slate-50 border border-slate-100 shadow-sm">
                        <h3 className="text-3xl font-serif text-slate-900 mb-8 italic leading-tight">A Day of Healing & Hope in Jhal</h3>
                        <div className="space-y-6 text-slate-600 font-jakarta text-lg leading-relaxed">
                            <p>
                                In the heart of Jhal, something extraordinary unfolded. Our Medical Camp 2k25 wasn't just about checkups; it was a festival of compassion. Doctors, nurses, and volunteers came together with a singular mission: to serve humanity without boundaries.
                            </p>
                            <p>
                                From early morning, families gathered, finding comfort in the hands of our expert specialists. We provided comprehensive screenings, free medications, and crucial health education to hundreds who otherwise lack access to basic care.
                            </p>
                            <p>
                                The smiles we saw were our greatest reward. Elderly patients received much-needed relief, children were given nutritional support, and the community felt the warmth of being cared for.
                            </p>
                        </div>

                        <div className="mt-12 pt-10 border-t border-slate-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <span className="font-serif italic text-2xl font-bold">"</span>
                                </div>
                                <p className="font-serif italic text-2xl text-slate-900">Making healthcare a right, not a privilege.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div className="lg:col-span-7 grid grid-cols-1 gap-12">

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] lg:aspect-video bg-slate-100"
                    >
                        <div className="absolute top-8 left-8 z-20 px-6 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Live Coverage
                        </div>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/landingpagepics/Medicalcamp.mp4" type="video/mp4" />
                        </video>
                    </motion.div>

                    {/* Image Section with Parallax Text */}
                    <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group">
                        <Image
                            src="/landingpagepics/Medicalcamp.png"
                            alt="Medical Camp Team"
                            fill
                            className="object-cover object-bottom transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-12">
                            <motion.p style={{ x }} className="text-white text-2xl md:text-3xl lg:text-4xl font-serif italic max-w-3xl leading-snug">
                                "Providing quality healthcare isn't just a service, it's a promise to our community's future."
                            </motion.p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />

        </section>
    );
};

export default MedicalCamp;
