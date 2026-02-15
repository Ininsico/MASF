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
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-10 px-6 relative">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest"
                    >
                        <Stethoscope size={14} fill="currentColor" /> Collaborative Care
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 leading-none"
                    >
                        Dental <span className="text-blue-600">Care</span> <br />
                        <span className="font-light text-2xl uppercase tracking-[0.5em] text-slate-400 align-middle">x</span> UMDC
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-500 max-w-sm font-light leading-relaxed font-jakarta md:text-right"
                >
                    A joint initiative bringing specialized oral healthcare to the underserved. Creating healthy smiles, one family at a time.
                </motion.p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-auto lg:h-[650px] items-stretch">

                {/* Main Video Card */}
                <motion.div
                    style={{ scale, opacity }}
                    className="lg:col-span-8 relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group min-h-[400px] bg-slate-100"
                >
                    <div className="absolute top-8 left-8 z-20 px-6 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                        <Smile size={14} /> Hygiene Awareness
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/Dentalcamp.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent">
                        <p className="text-white font-bold text-2xl">Restoring Every Smile</p>
                    </div>
                </motion.div>

                {/* Info & Stats Column */}
                <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                    {/* Dark Info Card */}
                    <div className="flex-1 bg-slate-900 rounded-[50px] p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl border border-white/5">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />

                        <h3 className="text-2xl font-bold text-blue-400 mb-6 leading-tight">Expert Treatment</h3>
                        <p className="text-slate-400 font-jakarta leading-relaxed mb-10 text-lg">
                            Doctors from University Medical & Dental College joined hands with MASF to perform procedures and educate rural families.
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
                                <UserCheck size={28} />
                            </div>
                            <div>
                                <div className="text-xl font-black text-white leading-none">15+ Doctors</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-2">Specialist On-Site</div>
                            </div>
                        </div>
                    </div>

                    {/* Light Stat Card */}
                    <div className="h-[220px] bg-blue-600 rounded-[50px] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-lg shadow-blue-600/20">
                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-1000 rounded-full" />
                        <h4 className="text-5xl font-bold text-white mb-2 relative z-10 leading-none">300+</h4>
                        <p className="text-blue-100 font-black font-jakarta uppercase tracking-widest text-xs relative z-10 mt-4">Families Treated</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DentalCamp;
