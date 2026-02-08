"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
    { src: "/landingpagepics/HeroSectionvideo2.mp4", label: "Our Story", featured: true },
    { src: "/landingpagepics/HeroSectionvideo.mp4", label: "Impact", featured: false },
    { src: "/landingpagepics/HeroSectionvideo3.mp4", label: "Community", featured: false },
];

const HeroGrid = () => {
    return (
        <div className="w-full relative">
            {/* Decorative Circle - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#d4af37]/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />

            {/* Mobile: Creative Staggered Layout */}
            <div className="md:hidden relative h-[600px] w-full">
                {/* Featured Video - Center, Larger */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[320px] z-20"
                >
                    <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-2 border-[#d4af37]/30 group h-full">
                        <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300">
                            <Play size={16} fill="white" className="text-white ml-0.5" />
                        </div>

                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={videos[0].src} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/90 via-[#1a1612]/20 to-transparent flex items-end p-6">
                            <span className="text-[#f2e8cf] font-jakarta text-2xl font-bold tracking-wide">{videos[0].label}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Second Video - Top Left, Smaller */}
                <motion.div
                    initial={{ opacity: 0, x: -30, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-4 left-4 w-[45%] h-[180px] z-10"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#d4af37]/20 group h-full">
                        <div className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300">
                            <Play size={12} fill="white" className="text-white ml-0.5" />
                        </div>

                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={videos[1].src} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/90 via-[#1a1612]/30 to-transparent flex items-end p-4">
                            <span className="text-[#f2e8cf] font-jakarta text-sm font-bold tracking-wide">{videos[1].label}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Third Video - Bottom Right, Smaller */}
                <motion.div
                    initial={{ opacity: 0, x: 30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-4 right-4 w-[45%] h-[180px] z-10"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#d4af37]/20 group h-full">
                        <div className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300">
                            <Play size={12} fill="white" className="text-white ml-0.5" />
                        </div>

                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={videos[2].src} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/90 via-[#1a1612]/30 to-transparent flex items-end p-4">
                            <span className="text-[#f2e8cf] font-jakarta text-sm font-bold tracking-wide">{videos[2].label}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none -z-10" />
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 p-4 h-[600px]">
                {videos.map((video, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={`relative rounded-[32px] overflow-hidden shadow-2xl border border-[#d4af37]/20 group ${video.featured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                            }`}
                    >
                        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play size={12} fill="white" className="text-white ml-0.5" />
                        </div>

                        <video
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={video.src} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/80 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-[#f2e8cf] font-jakarta text-lg font-bold tracking-wide">{video.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HeroGrid;
