"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon, Star } from "lucide-react";

const RamadanUrduTicker = () => {
    return (
        <div className="w-full bg-blue-600 overflow-hidden py-3 border-y border-blue-700 relative z-20 mb-10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                    className="flex gap-12"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12" dir="rtl">
                            <div className="flex items-center gap-4">
                                <Moon className="text-yellow-300 fill-yellow-300 w-6 h-6" />
                                <span className="text-white font-bold text-2xl md:text-3xl font-noto-naskh-urdu leading-relaxed pt-1">
                                    رمضان کریم
                                </span>
                                <Star className="text-white fill-white w-4 h-4 animate-pulse" />
                            </div>
                            <span className="text-blue-200">✦</span>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                    className="flex gap-12 pr-12"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12" dir="rtl">
                            <div className="flex items-center gap-4">
                                <Moon className="text-yellow-300 fill-yellow-300 w-6 h-6" />
                                <span className="text-white font-bold text-2xl md:text-3xl font-noto-naskh-urdu leading-relaxed pt-1">
                                    رمضان کریم
                                </span>
                                <Star className="text-white fill-white w-4 h-4 animate-pulse" />
                            </div>
                            <span className="text-blue-200">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default RamadanUrduTicker;
