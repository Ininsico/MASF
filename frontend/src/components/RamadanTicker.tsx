"use client";

import React from "react";
import { motion } from "framer-motion";

const RamadanTicker = () => {
    return (
        <div className="w-full bg-blue-600 overflow-hidden py-3 border-y border-blue-700 relative z-20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-8"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] font-jakarta">
                                RAMADAN MUBARAK
                            </span>
                            <span className="text-blue-200">✦</span>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-8 pl-8"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] font-jakarta">
                                RAMADAN MUBARAK
                            </span>
                            <span className="text-blue-200">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default RamadanTicker;
