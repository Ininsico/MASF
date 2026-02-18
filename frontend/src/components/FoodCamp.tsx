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
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-10 px-6 relative">

            {/* Header */}
            <div className="text-center mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest"
                >
                    <Truck size={14} fill="currentColor" /> Ration Drive
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Food <span className="text-blue-600">Camp</span>
                </h2>
                <p className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
                    Fighting hunger, restoring dignity. Our food camps provide essential ration packs and cooked meals to hundreds of families in underserved areas.
                </p>
            </div>

            {/* Content Container */}
            <motion.div
                style={{ scale, opacity }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[650px] items-stretch"
            >
                {/* Info Card (Left) */}
                <div className="flex flex-col justify-center p-12 md:p-16 rounded-[60px] bg-slate-900 text-white shadow-2xl border border-white/5 relative overflow-hidden h-full order-2 lg:order-1">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

                    <div className="relative z-10 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-6 leading-tight">Feeding Hope</h3>
                            <p className="text-lg text-slate-400 leading-relaxed font-light font-jakarta">
                                "If you cannot feed a hundred people, then feed just one." <br /><br />
                                We believe that no one should sleep hungry. Our dedicated team works tirelessly to identify and support the most vulnerable households, ensuring that help reaches where it is needed most.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                            <div className="flex items-center gap-5 bg-white p-6 rounded-[32px] border border-blue-50 shadow-sm transition-transform hover:scale-105">
                                <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                    <Utensils size={28} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-3xl font-bold text-slate-900 leading-none">1000+</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest font-black mt-2">Meals Served</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 bg-white p-6 rounded-[32px] border border-blue-50 shadow-sm transition-transform hover:scale-105">
                                <div className="p-4 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                                    <Heart size={28} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-3xl font-bold text-slate-900 leading-none">Monthly</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest font-black mt-2">Ration Packs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card (Right) */}
                <div className="relative h-[400px] lg:h-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group order-1 lg:order-2 bg-slate-100">
                    <div className="absolute top-8 right-8 z-20 px-6 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                        <Utensils size={14} /> Community Service
                    </div>
                    <video
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/FoodCamp.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent">
                        <p className="text-white font-bold text-2xl">Direct Impact on Ground</p>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default FoodCamp;
