"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, Heart, Truck } from 'lucide-react';

const FoodCamp = () => {
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
            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-sm font-bold uppercase tracking-widest"
                >
                    <Truck size={14} /> Ration Drive
                </motion.div>
                <h2 className="text-5xl md:text-8xl font-serif text-[#1a1612] italic leading-tight">
                    Food <span className="text-[#d4af37]">Camp</span>
                </h2>
                <p className="mt-6 text-xl text-[#1a1612]/70 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Fighting hunger, restoring dignity. Our food camps provide essential ration packs and cooked meals to hundreds of families in underserved areas.
                </p>
            </div>

            {/* Content Container */}
            <motion.div
                style={{ scale, opacity }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[600px] items-stretch"
            >
                {/* Info Card (Left) */}
                <div className="flex flex-col justify-center p-10 md:p-14 rounded-[40px] bg-[#1a1612] text-[#f2e8cf] shadow-xl border border-[#d4af37]/20 relative overflow-hidden h-full order-2 lg:order-1">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h3 className="text-3xl font-serif italic text-[#d4af37] mb-4">Feeding Hope</h3>
                            <p className="text-lg opacity-80 leading-relaxed font-light font-jakarta">
                                "If you cannot feed a hundred people, then feed just one." <br />
                                We believe that no one should sleep hungry. Our dedicated team works tirelessly to identify and support the most vulnerable households, ensuring that help reaches where it is needed most.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="p-3 rounded-full bg-[#d4af37]/20 text-[#d4af37]">
                                    <Utensils size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">1000+</div>
                                    <div className="text-xs opacity-60 uppercase tracking-wider font-bold">Meals Served</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="p-3 rounded-full bg-[#d4af37]/20 text-[#d4af37]">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">Monthly</div>
                                    <div className="text-xs opacity-60 uppercase tracking-wider font-bold">Ration Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card (Right) */}
                <div className="relative h-[500px] lg:h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group order-1 lg:order-2">
                    <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-[#d4af37] text-[#1a1612] text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                        <Utensils size={14} /> Community Service
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/FoodCamp.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/40 via-transparent to-transparent opacity-60" />
                </div>

            </motion.div>
        </section>
    );
};

export default FoodCamp;
