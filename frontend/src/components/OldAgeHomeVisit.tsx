"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Clock, Smile } from 'lucide-react';

const OldAgeHomeVisit = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto py-32 px-6 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-20 relative z-10">
                <motion.div style={{ opacity }} className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest">
                    <Heart size={14} fill="currentColor" /> Care & Compassion
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Old Age Home <span className="text-blue-600">Visit</span>
                </h2>
                <p className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Honoring our elders with the love, respect, and companionship they deserve. A day spent sharing stories, smiles, and warmth.
                </p>
            </div>

            {/* Content Container */}
            <motion.div
                style={{ scale }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[650px] items-stretch"
            >
                {/* Info Card (Left) */}
                <div className="flex flex-col justify-center p-12 md:p-16 rounded-[60px] bg-slate-50 text-slate-900 shadow-sm border border-slate-100 relative overflow-hidden h-full order-2 lg:order-1">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100/20 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">Moments of Pure Joy</h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-light font-jakarta">
                                "To care for those who once cared for us is one of the highest honors." <br /><br />
                                Our visit wasn't just about distributing gifts; it was about being present. We listened to their wisdom, shared laughter, and reminded them that they are cherished members of our society.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                            <div className="flex items-center gap-5 bg-white p-6 rounded-[32px] border border-blue-50 shadow-sm">
                                <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900 leading-none">Quality</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest font-black mt-2">Time spent</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 bg-white p-6 rounded-[32px] border border-blue-50 shadow-sm">
                                <div className="p-4 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                                    <Smile size={28} />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900 leading-none">Shared</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest font-black mt-2">Smiles</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card (Right) */}
                <div className="relative h-[500px] lg:h-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group order-1 lg:order-2 bg-slate-100">
                    <div className="absolute top-8 right-8 z-20 px-6 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                        <Heart size={14} fill="white" /> Spreading Love
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/oldagehome.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent">
                        <p className="text-white font-bold text-2xl">A Bond Beyond Words</p>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default OldAgeHomeVisit;
