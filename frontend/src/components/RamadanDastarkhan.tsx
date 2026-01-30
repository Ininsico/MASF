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
        <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto py-24 px-6 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.div style={{ opacity }} className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                    <Moon size={14} /> Annual Tradition
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-serif text-[#1a1612] italic leading-tight">
                    Ramadan <span className="text-[#d4af37]">Dastarkhan</span>
                </h2>
                <p className="mt-6 text-xl text-[#1a1612]/70 max-w-2xl mx-auto font-light leading-relaxed">
                    Celebrating the spirit of giving by hosting community iftars. A moment where we break bread together, irrespective of status, fostering unity and gratitude.
                </p>
            </div>

            {/* Content Container */}
            <motion.div
                style={{ scale }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[600px] items-stretch"
            >
                {/* Video Card */}
                <div className="relative h-[500px] lg:h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
                    <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-[#d4af37] text-[#1a1612] text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                        <Utensils size={14} /> Community Iftar
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/Dashtarkhan.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Info Card */}
                <div className="flex flex-col rounded-[40px] bg-white text-[#1a1612] shadow-xl border border-[#d4af37]/20 relative overflow-hidden h-full">
                    {/* Text Section */}
                    <div className="p-10 relative z-10 flex-shrink-0">
                        <h3 className="text-3xl font-serif italic text-[#1a1612] mb-4">Sharing Blessings</h3>
                        <p className="text-lg text-[#1a1612]/70 leading-relaxed font-light font-jakarta mb-6">
                            "The best charity is that given in Ramadan." <br />
                            Our Dastarkhan is a sanctuary of dignity, ensuring no one breaks their fast alone.
                        </p>

                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20">
                            <span className="text-[#d4af37] font-bold text-xl">Raised 800k PKR</span>
                            <span className="text-[#1a1612]/60 text-sm font-medium border-l border-[#1a1612]/10 pl-3">Ramadan 2025</span>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex-grow w-full min-h-[250px] mt-auto">
                        <img
                            src="/landingpagepics/Dastarkhan.png"
                            alt="Ramadan Iftar Gathering"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/60 to-transparent opacity-40" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default RamadanDastarkhan;
