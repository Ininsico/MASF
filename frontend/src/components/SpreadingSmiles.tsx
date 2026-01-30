"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smile, Heart, Sparkles } from 'lucide-react';

const SpreadingSmiles = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const videos = [
        { src: "/landingpagepics/spreadingsmiles.mp4", label: "Pure Joy" },
        { src: "/landingpagepics/spreadingsmiles2.mp4", label: "Shared Moments" },
        { src: "/landingpagepics/spreadingsmiles3.mp4", label: "Endless Hope" }
    ];

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
                    <Smile size={14} /> Happiness Project
                </motion.div>
                <h2 className="text-5xl md:text-8xl font-serif text-[#1a1612] italic leading-tight">
                    Spreading <span className="text-[#d4af37]">Smiles</span>
                </h2>
                <p className="mt-6 text-xl text-[#1a1612]/70 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Sometimes, the greatest medicine is a smile. Our recreational activities and thoughtful gifts bring light to the lives of children and the elderly alike.
                </p>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videos.map((video, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] md:aspect-[3/4]"
                    >
                        <video
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={video.src} type="video/mp4" />
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Floating Content */}
                        <div className="absolute bottom-8 left-8 text-white z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                                <Sparkles size={18} className="text-[#d4af37]" />
                            </div>
                            <h3 className="text-2xl font-serif italic text-white">{video.label}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-[#d4af37]/5 -z-10 blur-[120px] rounded-full pointer-events-none" />

        </section>
    );
};

export default SpreadingSmiles;
