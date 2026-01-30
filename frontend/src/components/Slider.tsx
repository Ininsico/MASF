"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    "/landingpagepics/breastcancer.png",
    "/landingpagepics/clothingcampagin.png",
    "/landingpagepics/floodrelief.png",
    "/landingpagepics/worldmentalhealth.png",
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl shadow-[#d4af37]/20 border border-[#d4af37]/20 group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[index]}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f0]/40 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-6 left-6 flex space-x-2 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-300 h-1.5 rounded-full shadow-sm ${i === index ? "w-8 bg-[#d4af37]" : "w-1.5 bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
