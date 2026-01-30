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
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-24 px-6 relative">

            {/* Header */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-sm font-bold uppercase tracking-widest"
                >
                    <Calendar size={14} /> Year in Review
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-serif text-[#1a1612] italic leading-tight"
                >
                    Recap <span className="text-[#d4af37]">2024</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-xl text-[#1a1612]/70 max-w-2xl mx-auto font-light leading-relaxed font-jakarta"
                >
                    A look back at the moments that defined us. 365 days of unwavering commitment, community support, and lives changed.
                </motion.p>
            </div>

            {/* Video Container */}
            <motion.div
                style={{ scale, opacity }}
                className="relative aspect-video w-full rounded-[48px] overflow-hidden shadow-2xl border-4 border-white group"
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                {/* Play Button Overlay (Decorative) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 pointer-events-none">
                    <Play size={40} fill="white" className="text-white ml-2" />
                </div>

                <video
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/landingpagepics/2024recap.mp4" type="video/mp4" />
                </video>

                {/* Bottom Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1a1612]/80 to-transparent z-10" />

                <div className="absolute bottom-10 left-10 z-20 text-white">
                    <h3 className="text-3xl font-serif italic mb-2">Unstoppable Impact</h3>
                    <p className="opacity-80 font-jakarta">Celebrating our collective achievements.</p>
                </div>
            </motion.div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[#d4af37]/5 -z-10 blur-[100px] rounded-full pointer-events-none" />

        </section>
    );
};

export default Recap2024;
