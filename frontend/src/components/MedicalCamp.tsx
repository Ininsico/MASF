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
                    <span className="px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        Healthcare For All
                    </span>
                </motion.div>
                <motion.h2
                    style={{ scale }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#1a1612] italic leading-[0.9] whitespace-nowrap"
                >
                    Medical Camp <span className="text-[#d4af37]">2k25</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

                {/* Left Side: Long Description */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 relative z-10 h-full">
                    <div className="p-8 md:p-10 rounded-[32px] bg-white border border-[#d4af37]/20 shadow-xl h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-[#1a1612] mb-4 italic">A Day of Healing & Hope</h3>
                            <div className="space-y-4 text-[#1a1612]/70 font-jakarta text-base leading-relaxed text-justify">
                                <p>
                                    In the heart of Jhal, something extraordinary unfolded. Our Medical Camp 2k25 wasn't just about checkups; it was a festival of compassion. Doctors, nurses, and volunteers came together with a singular mission: to serve humanity without boundaries.
                                </p>
                                <p>
                                    From early morning, families gathered, finding comfort in the hands of our expert specialists. We provided comprehensive screenings, free medications, and crucial health education to hundreds who otherwise lack access to basic care.
                                </p>
                                <p>
                                    The smiles we saw were our greatest reward. Elderly patients received much-needed relief, children were given nutritional support, and the community felt the warmth of being cared for. This is what MASF stands for — making healthcare a right, not a privilege.
                                </p>
                                <p>
                                    Every prescription written and every hand held was a step towards a healthier tomorrow. We are committed to continuing this journey, one camp, one life at a time.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-[#d4af37]/10">
                            <p className="font-serif italic text-2xl text-[#d4af37]">"Healing is a matter of time, but it is sometimes also a matter of opportunity."</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div className="lg:col-span-8 grid grid-cols-1 gap-8">

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[500px]"
                    >
                        <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
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
                    <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden shadow-xl border border-[#d4af37]/20 group">
                        <Image
                            src="/landingpagepics/Medicalcamp.png"
                            alt="Medical Camp Team"
                            fill
                            className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/90 via-transparent to-transparent flex items-end p-8 md:p-12">
                            <motion.p style={{ x }} className="text-[#f2e8cf] text-xl md:text-3xl font-serif italic max-w-2xl leading-relaxed">
                                "Providing quality healthcare isn't just a service, it's a promise to our community's future."
                            </motion.p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-full -z-10 bg-[url('/noise.png')] opacity-5" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] -z-10" />

        </section>
    );
};

export default MedicalCamp;
