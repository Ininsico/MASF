"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const AnnouncementPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup on mount (every time the component loads)
        // Add a small delay for better UX so it doesn't jarringly appear immediately
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
                    onClick={handleClose} // Close on backdrop click
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-3xl w-full bg-transparent overflow-visible"
                        onClick={(e) => e.stopPropagation()} // Prevent close on content click
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm border border-white/20"
                            aria-label="Close Announcement"
                        >
                            <X size={24} />
                        </button>

                        {/* Content Container - Responsive Aspect Ratio or Auto Height */}
                        <div className="relative w-full h-[80vh] bg-transparent flex items-center justify-center">
                            {/* Using standard img tag to ensure visibility without Next.js strict sizing constraints */}
                            <img
                                src="/postermasf.jpeg"
                                alt="Announcement Poster"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    // Try fallback to png if jpeg fails, just in case user meant png
                                    if (target.src.endsWith('jpeg')) {
                                        target.src = "/postermasf.png"; // Fallback to png
                                    } else if (target.src.endsWith('png')) {
                                        target.src = "/postermasf.jpg"; // Fallback to jpg
                                    } else {
                                        // If all fail, show placeholder text
                                        target.style.display = 'none';
                                        target.parentElement?.insertAdjacentHTML('beforeend', '<div class="absolute inset-0 flex items-center justify-center p-4 text-center text-slate-400 font-bold bg-slate-100">Image not found. Please ensure "postermasf.jpeg" (or .png/.jpg) is in the public folder.</div>');
                                    }
                                }}
                            />
                        </div>

                        {/* Optional CTA or Link? for now just the image */}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnnouncementPopup;
