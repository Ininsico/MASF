"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smile, UserCheck, Stethoscope } from 'lucide-react';

const DentalCamp = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-24 px-6 relative">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-sm font-bold uppercase tracking-widest"
                    >
                        <Stethoscope size={14} /> Collaborative Care
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-[#1a1612] italic leading-tight"
                    >
                        MASF <span className="not-italic font-sans font-thin text-4xl px-2">X</span> UMDC <br />
                        <span className="text-[#d4af37]">Dental Camp</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-[#1a1612]/70 max-w-md font-light leading-relaxed font-jakarta text-right md:text-left"
                >
                    A joint initiative bringing specialized dental care to those who need it most. Creating smiles, one checkup at a time.
                </motion.p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px] items-stretch">

                {/* Main Video Card */}
                <motion.div
                    style={{ scale, opacity }}
                    className="lg:col-span-8 relative rounded-[48px] overflow-hidden shadow-2xl border-4 border-white group min-h-[400px]"
                >
                    <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-[#1a1612] text-white text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                        <Smile size={14} /> Oral Hygiene Awareness
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/Dentalcamp.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/80 via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Info & Stats Column */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                    {/* Dark Info Card */}
                    <div className="flex-1 bg-[#1a1612] rounded-[40px] p-8 text-[#f2e8cf] flex flex-col justify-center relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-[40px]" />

                        <h3 className="text-2xl font-serif italic text-[#d4af37] mb-4">Expert Care</h3>
                        <p className="opacity-80 font-jakarta leading-relaxed mb-6">
                            Doctors from University Medical & Dental College joined hands with MASF volunteers to perform procedures and educate families.
                        </p>

                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                                <UserCheck size={20} />
                            </div>
                            <div>
                                <div className="text-white font-bold">15+ Specialists</div>
                                <div className="text-xs opacity-60 uppercase">On Site</div>
                            </div>
                        </div>
                    </div>

                    {/* Light Stat Card */}
                    <div className="h-[200px] bg-white rounded-[40px] p-8 border border-[#d4af37]/20 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#d4af37]/5 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                        <h4 className="text-6xl font-serif text-[#d4af37] italic mb-2 relative z-10">300+</h4>
                        <p className="text-[#1a1612]/60 font-medium font-jakarta uppercase tracking-wider relative z-10">Patients Treated</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DentalCamp;
