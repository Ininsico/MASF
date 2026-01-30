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
        <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto py-24 px-6 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.div style={{ opacity }} className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                    <Heart size={14} /> Care & Compassion
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-serif text-[#1a1612] italic leading-tight">
                    Old Age Home <span className="text-[#d4af37]">Visit</span>
                </h2>
                <p className="mt-6 text-xl text-[#1a1612]/70 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Honoring our elders with the love, respect, and companionship they deserve. A day spent sharing stories, smiles, and warmth.
                </p>
            </div>

            {/* Content Container */}
            <motion.div
                style={{ scale }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[600px] items-stretch"
            >
                {/* Info Card (Left) */}
                <div className="flex flex-col justify-center p-10 md:p-14 rounded-[40px] bg-white text-[#1a1612] shadow-xl border border-[#d4af37]/20 relative overflow-hidden h-full order-2 lg:order-1">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px] pointer-events-none" />

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h3 className="text-3xl font-serif italic text-[#1a1612] mb-4">Moments of Joy</h3>
                            <p className="text-lg text-[#1a1612]/70 leading-relaxed font-light font-jakarta">
                                "To care for those who once cared for us is one of the highest honors." <br />
                                Our visit wasn't just about distributing gifts; it was about being present. We listened to their wisdom, shared laughter, and reminded them that they are cherished members of our society.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-4 bg-[#fdf8f0] p-4 rounded-2xl border border-[#d4af37]/20">
                                <div className="p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#1a1612]">Time</div>
                                    <div className="text-xs text-[#1a1612]/50 uppercase tracking-wider font-bold">Invested</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-[#fdf8f0] p-4 rounded-2xl border border-[#d4af37]/20">
                                <div className="p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                                    <Smile size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#1a1612]">Countless</div>
                                    <div className="text-xs text-[#1a1612]/50 uppercase tracking-wider font-bold">Smiles Shared</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card (Right) */}
                <div className="relative h-[500px] lg:h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group order-1 lg:order-2">
                    <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-[#d4af37] text-[#1a1612] text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                        <Heart size={14} /> Spreading Love
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/oldagehome.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/40 via-transparent to-transparent opacity-60" />
                </div>

            </motion.div>
        </section>
    );
};

export default OldAgeHomeVisit;
