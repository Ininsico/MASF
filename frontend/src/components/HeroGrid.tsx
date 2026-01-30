"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

const videos = [
    { src: "/landingpagepics/HeroSectionvideo2.mp4", className: "col-span-1 md:col-span-2 row-span-2", label: "Our Story" },
    { src: "/landingpagepics/HeroSectionvideo.mp4", className: "col-span-1 row-span-1", label: "Impact" },
    { src: "/landingpagepics/HeroSectionvideo3.mp4", className: "col-span-1 row-span-1", label: "Community" },
];

const HeroGrid = () => {
    return (
        <div className="w-full h-[500px] md:h-[600px] grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 p-4 relative">
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#d4af37]/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />

            {videos.map((video, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className={cn(
                        "relative rounded-[32px] overflow-hidden shadow-2xl border border-[#d4af37]/20 group",
                        video.className
                    )}
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
    );
};

export default HeroGrid;
