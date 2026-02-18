"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Smile, Sparkles } from 'lucide-react';

const SpreadingSmiles = () => {
    const containerRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start end", "end start"]
    // });

    const videos = [
        { src: "/landingpagepics/spreadingsmiles.mp4", label: "Pure Joy" },
        { src: "/landingpagepics/spreadingsmiles2.mp4", label: "Shared Moments" },
        { src: "/landingpagepics/spreadingsmiles3.mp4", label: "Endless Hope" }
    ];

    return (
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-10 px-6 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest"
                >
                    <Smile size={14} fill="currentColor" /> Happiness Project
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Spreading <span className="text-blue-600">Smiles</span>
                </h2>
                <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed font-jakarta">
                    Sometimes, the greatest medicine is a smile. Our recreational activities and thoughtful gifts bring light to the lives of children and the elderly across Pakistan.
                </p>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {videos.map((video, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        className="group relative rounded-[60px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-8 border-white aspect-[9/16] md:aspect-[3/4.5] bg-slate-100"
                    >
                        <video
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={video.src} type="video/mp4" />
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                        {/* Floating Content */}
                        <div className="absolute bottom-10 left-10 text-white z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-5 border border-white/30 shadow-lg">
                                <Sparkles size={24} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-none">{video.label}</h3>
                            <p className="text-xs text-slate-200 mt-3 font-bold uppercase tracking-widest">Ground Awareness</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/40 -z-10 blur-[130px] rounded-full pointer-events-none" />

        </section>
    );
};

export default SpreadingSmiles;
