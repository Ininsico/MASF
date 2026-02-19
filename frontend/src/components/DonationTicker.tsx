"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const DonationTicker = () => {
    return (
        <div className="w-full bg-blue-600 overflow-hidden py-3 border-y border-blue-700 relative z-20 mb-16">
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
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <div className="flex items-center gap-4">
                                <Heart className="text-red-400 fill-red-400 w-5 h-5 animate-pulse" />
                                <span className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] font-jakarta uppercase">
                                    Your Generosity Changes Lives
                                </span>
                            </div>
                            <span className="text-blue-200">✦</span>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] font-jakarta uppercase">
                                    Donate Today
                                </span>
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
                    className="flex gap-12 pl-12"
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <div className="flex items-center gap-4">
                                <Heart className="text-red-400 fill-red-400 w-5 h-5 animate-pulse" />
                                <span className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] font-jakarta uppercase">
                                    Your Generosity Changes Lives
                                </span>
                            </div>
                            <span className="text-blue-200">✦</span>
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] font-jakarta uppercase">
                                    Donate Today
                                </span>
                            </div>
                            <span className="text-blue-200">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default DonationTicker;
