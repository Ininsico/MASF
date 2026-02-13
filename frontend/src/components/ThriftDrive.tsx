"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Share2, ShoppingBag } from 'lucide-react';

const ThriftDrive = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const rotateParallax = useTransform(scrollYProgress, [0, 1], [-2, 4]);

    return (
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-40 px-6 relative overflow-hidden">

            {/* Background Decorative Text */}
            <div className="absolute top-24 left-0 w-full overflow-hidden opacity-[0.05] pointer-events-none select-none">
                <h3 className="text-[22vw] font-serif italic text-blue-900 whitespace-nowrap leading-none tracking-tighter">
                    Impact & Purpose
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Visual Content Side */}
                <div className="relative">
                    {/* Main Video Card - Professional Frame */}
                    <div className="relative z-20 rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] border-8 border-white bg-slate-100">
                        <div className="absolute top-8 left-8 z-20 px-6 py-2 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" /> Campaign Action
                        </div>
                        <video
                            className="w-full h-[600px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/landingpagepics/trift/triftdrive.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900/60 to-transparent">
                            <p className="text-white font-serif italic text-3xl">Sustainable Giving</p>
                        </div>
                    </div>

                    {/* Floating Image Card - Parallax Enhanced */}
                    <motion.div
                        style={{ y: yParallax, rotate: rotateParallax }}
                        className="absolute -bottom-16 -right-12 z-30 w-[70%] h-80 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white lg:block hidden bg-white"
                    >
                        <Image
                            src="/landingpagepics/trift/trift.png"
                            alt="Thrift Drive Event"
                            fill
                            className="object-cover transition-transform duration-1000 hover:scale-110"
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-16 right-16 w-80 h-80 bg-indigo-100/40 rounded-full blur-[120px] -z-10" />
                </div>

                {/* Text Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-12 lg:pl-16"
                >
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-blue-600" />
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs font-jakarta">Sustainability Focus</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-serif text-slate-900 italic leading-[0.85] tracking-tighter">
                            The Thrift <br />
                            <span className="text-blue-600">Drive</span>
                        </h2>
                        <p className="text-2xl text-slate-500 font-jakarta leading-relaxed font-light">
                            Fashion meets philanthropy. Our annual Thrift Drive brings the community together to repurpose quality goods and raise funds for essential medical supplies throughout Punjab.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                        <div className="bg-slate-50 p-10 rounded-[48px] border border-blue-50 shadow-sm transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                <ShoppingBag size={28} />
                            </div>
                            <h4 className="text-4xl font-serif italic text-slate-900 mb-2">500+</h4>
                            <p className="text-sm font-black font-jakarta text-slate-400 uppercase tracking-widest">Items Curated</p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-[48px] border border-blue-50 shadow-sm transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 group">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                                <Share2 size={28} />
                            </div>
                            <h4 className="text-4xl font-serif italic text-slate-900 mb-2">100%</h4>
                            <p className="text-sm font-black font-jakarta text-slate-400 uppercase tracking-widest">Proceeds to Patients</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ThriftDrive;
