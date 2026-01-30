"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
    { src: "/landingpagepics/breastcancer.png", alt: "Breast Cancer Awareness", className: "col-span-2 row-span-2" },
    { src: "/landingpagepics/clothingcampagin.png", alt: "Clothing Campaign", className: "col-span-1 row-span-1" },
    { src: "/landingpagepics/floodrelief.png", alt: "Flood Relief", className: "col-span-1 row-span-2" },
    { src: "/landingpagepics/worldmentalhealth.png", alt: "Mental Health", className: "col-span-1 row-span-1" },
];

const HeroGrid = () => {
    return (
        <div className="w-full h-[500px] md:h-[600px] grid grid-cols-3 grid-rows-3 gap-4 p-4 relative">
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#d4af37]/10 rounded-full animate-[spin_60s_linear_infinite]" />

            {images.map((img, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className={cn(
                        "relative rounded-[24px] overflow-hidden shadow-2xl border border-[#d4af37]/20 group",
                        img.className
                    )}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-[#f2e8cf] font-jakarta text-sm font-bold">{img.alt}</span>
                    </div>
                </motion.div>
            ))}

            {/* Floating Badge */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-[#d4af37] text-[#1a1612] p-6 rounded-full shadow-2xl z-20 hidden md:block"
            >
                <div className="text-center leading-none">
                    <span className="block text-3xl font-serif font-bold">100+</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Projects</span>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroGrid;
