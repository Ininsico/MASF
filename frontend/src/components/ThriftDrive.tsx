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

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <section ref={containerRef} className="w-full max-w-[1400px] mx-auto py-32 px-6 relative overflow-hidden">

            {/* Background Decorative Text */}
            <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <h3 className="text-[20vw] font-serif italic text-[#1a1612] whitespace-nowrap leading-none">
                    Thrift For Good
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Visual Content Side */}
                <div className="relative">
                    {/* Main Video Card - Tilted */}
                    <div className="relative z-20 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform -rotate-2">
                        <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-[#1a1612] text-[#d4af37] text-xs font-bold rounded-full uppercase tracking-wider">
                            Campaign Highlight
                        </div>
                        <video
                            className="w-full h-[500px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/landingpagepics/trift/triftdrive.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Floating Image Card - Parallax */}
                    <motion.div
                        style={{ y, rotate }}
                        className="absolute -bottom-20 -right-10 z-30 w-2/3 h-64 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(26,22,18,0.3)] border-4 border-white lg:block hidden"
                    >
                        <Image
                            src="/landingpagepics/trift/trift.png"
                            alt="Thrift Drive Event"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#d4af37]/20 rounded-full blur-3xl -z-10" />
                </div>

                {/* Text Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10 pl-0 lg:pl-10"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-[1px] bg-[#d4af37]" />
                            <span className="text-[#d4af37] font-bold uppercase tracking-widest text-sm font-jakarta">Sustainable Giving</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-serif text-[#1a1612] italic leading-[0.9] mb-6 pr-4">
                            The Thrift <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b38f2d]">Drive</span>
                        </h2>
                        <p className="text-xl text-[#1a1612]/70 font-jakarta leading-relaxed">
                            Fashion meets philanthropy. Our annual Thrift Drive brings the community together to repurpose, reuse, and raise funds for essential medical supplies.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="glass-panel p-6 rounded-3xl border border-[#d4af37]/20 bg-white/50">
                            <ShoppingBag className="w-8 h-8 text-[#d4af37] mb-4" />
                            <h4 className="text-2xl font-serif text-[#1a1612] mb-1">500+</h4>
                            <p className="text-sm font-jakarta text-[#1a1612]/60">Items Donated</p>
                        </div>
                        <div className="glass-panel p-6 rounded-3xl border border-[#d4af37]/20 bg-white/50">
                            <Share2 className="w-8 h-8 text-[#d4af37] mb-4" />
                            <h4 className="text-2xl font-serif text-[#1a1612] mb-1">100%</h4>
                            <p className="text-sm font-jakarta text-[#1a1612]/60">Proceeds to Care</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ThriftDrive;
