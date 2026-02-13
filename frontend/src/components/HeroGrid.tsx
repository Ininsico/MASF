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
            {/* Decorative Decorative elements */}
            <div className="hidden lg:block absolute -top-20 -right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
            <div className="hidden lg:block absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl animate-pulse" />

            {/* Mobile: Creative Staggered Layout */}
            <div className="md:hidden relative h-[500px] w-full mt-8">
                {/* Featured Video - Center, Larger */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[280px] z-20"
                >
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group h-full">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={videos[0].src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                            <span className="text-white font-jakarta text-xl font-bold">{videos[0].label}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Dots */}
                <div className="absolute top-0 right-0 grid grid-cols-4 gap-2 opacity-20">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    ))}
                </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-12 md:grid-rows-12 gap-4 p-4 h-[600px]">
                {videos.map((video, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        className={`relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group ${idx === 0 ? 'col-span-8 row-span-12' :
                                idx === 1 ? 'col-span-4 row-span-6' :
                                    'col-span-4 row-span-6'
                            }`}
                    >
                        <video
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={video.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500" />
                        <div className="absolute bottom-6 left-6 p-2 rounded-2xl backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-jakarta text-sm font-bold px-4">{video.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HeroGrid;
