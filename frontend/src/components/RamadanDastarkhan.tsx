"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Moon, Utensils, HeartHandshake } from 'lucide-react';

const RamadanDastarkhan = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto py-10 px-6 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-20 relative z-10">
                <motion.div style={{ opacity }} className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest">
                    <Moon size={14} fill="currentColor" /> Annual Tradition
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Ramadan <span className="text-blue-600">Dastarkhan</span>
                </h2>
                <p className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Celebrating the spirit of giving by hosting community iftars. A moment where we break bread together, fostering unity and gratitude across all sections of society.
                </p>
            </div>

            {/* Content Container */}
            <motion.div
                style={{ scale }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[650px] items-stretch"
            >
                {/* Video Card */}
                <div className="relative h-[500px] lg:h-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group bg-slate-100">
                    <div className="absolute top-8 left-8 z-20 px-6 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                        <Utensils size={14} /> Community Iftar
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/Dashtarkhan.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent">
                        <p className="text-white font-bold text-2xl">Spreading Blessings</p>
                    </div>
                </div>

                {/* Info Card */}
                <div className="flex flex-col rounded-[60px] bg-slate-50 text-slate-900 shadow-sm border border-slate-100 relative overflow-hidden h-full">
                    {/* Text Section */}
                    <div className="p-12 md:p-16 relative z-10 flex-shrink-0">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Sharing Blessings & Dignity</h3>
                        <p className="text-lg text-slate-500 leading-relaxed font-light font-jakarta mb-10">
                            "The best charity is that given in Ramadan." <br /><br />
                            Our Dastarkhan is a sanctuary of dignity, ensuring no one breaks their fast alone. We serve hundreds of meals daily during the holy month.
                        </p>

                        <div className="inline-flex items-center gap-4 px-8 py-5 rounded-3xl bg-white border border-blue-100 shadow-sm">
                            <span className="text-blue-600 font-black text-2xl">800k+ PKR</span>
                            <span className="text-slate-400 text-sm font-bold border-l border-slate-200 pl-4 uppercase tracking-widest">Impact 2k24</span>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex-grow w-full min-h-[300px] mt-auto">
                        <img
                            src="/landingpagepics/Dastarkhan.png"
                            alt="Ramadan Iftar Gathering"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-40" />
                    </div>
                </div>
            </motion.div>

            {/* Decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50" />
        </section>
    );
};

export default RamadanDastarkhan;
