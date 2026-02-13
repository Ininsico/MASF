"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';

const Recap2024 = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-32 px-6 relative">

            {/* Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest"
                >
                    <Calendar size={14} fill="currentColor" /> Year in Review
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-serif text-slate-900 italic leading-tight"
                >
                    Recap <span className="text-blue-600">2024</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed font-jakarta"
                >
                    A look back at the moments that defined us. 365 days of unwavering commitment, community support, and lives changed throughout Pakistan.
                </motion.p>
            </div>

            {/* Video Container */}
            <motion.div
                style={{ scale, opacity }}
                className="relative aspect-video w-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group bg-slate-100"
            >
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />

                {/* Play Button Overlay (Decorative) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 pointer-events-none">
                    <Play size={48} fill="white" className="text-white ml-2" />
                </div>

                <video
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/landingpagepics/2024recap.mp4" type="video/mp4" />
                </video>

                <div className="absolute bottom-12 left-12 z-20 text-white">
                    <h3 className="text-4xl font-serif italic mb-3">Unstoppable Impact</h3>
                    <p className="text-slate-200 font-jakarta text-lg font-light tracking-wide">Celebrating our collective achievements on the ground.</p>
                </div>
            </motion.div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/50 -z-10 blur-[120px] rounded-full pointer-events-none" />

        </section>
    );
};

export default Recap2024;
