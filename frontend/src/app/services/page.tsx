"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import DentalCamp from '@/components/DentalCamp';
import FoodCamp from '@/components/FoodCamp';
import SpreadingSmiles from '@/components/SpreadingSmiles';
import { Heart, Stethoscope, GraduationCap, Handshake, Lightbulb, Users } from 'lucide-react';

const services = [
    {
        title: "Medical Camps",
        desc: "Bringing expert healthcare to remote areas.",
        icon: Stethoscope
    },
    {
        title: "Educational Support",
        desc: "Scholarships and guidance for deserving students.",
        icon: GraduationCap
    },
    {
        title: "Community Outreach",
        desc: "Providing food, shelter, and essentials to those in need.",
        icon: Users
    },
    {
        title: "Awareness Drives",
        desc: "Campaigns on health, hygiene, and social issues.",
        icon: Lightbulb
    },
    {
        title: "Emergency Relief",
        desc: "Rapid response during floods and natural disasters.",
        icon: Heart
    },
    {
        title: "NGO Collaboration",
        desc: "Partnering for greater impact and reach.",
        icon: Handshake
    }
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">
            {/* Premium Hero Section */}
            <section className="relative min-h-[85vh] w-full flex items-center pt-24 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="relative z-10 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[1px] w-12 bg-[#d4af37]" />
                            <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm">Our Impact</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-7xl md:text-9xl font-serif text-[#1a1612] leading-[0.9]"
                        >
                            Serving <br />
                            <span className="italic text-[#d4af37]">Humanity</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-xl text-[#1a1612]/70 max-w-lg font-light leading-relaxed font-jakarta"
                        >
                            We go beyond temporary aid to provide sustainable solutions. From emergency relief to long-term educational support, our services are a lifeline for those in need.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            {['Healthcare', 'Education', 'Social Welfare'].map((tag, i) => (
                                <span key={i} className="px-6 py-2 rounded-full border border-[#1a1612]/10 text-[#1a1612]/60 text-sm font-medium hover:bg-[#1a1612] hover:text-[#d4af37] transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visuals */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        {/* Main Image Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute top-0 right-0 w-[550px] h-[550px] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white z-10"
                        >
                            <img
                                src="/landingpagepics/COMBOpic.png"
                                alt="Flood Relief Efforts"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/60 to-transparent opacity-60" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-serif italic text-2xl">Restoring Hope</p>
                                <p className="text-sm opacity-80 font-jakarta mt-2">In times of crisis, we stand firm.</p>
                            </div>
                        </motion.div>

                        {/* Background Decor */}
                        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </section>

            <DentalCamp />

            <FoodCamp />

            <SpreadingSmiles />

            {/* Services Bento Grid */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-serif italic text-[#1a1612] mb-6">Our Core Initiatives</h2>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        // Mobile Layout Logic: Highlight every 3rd item or similar pattern
                        const isMobileHighlight = (idx === 0) || (idx === 3) || (idx === 4);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`
                                    relative p-8 rounded-[32px] overflow-hidden group hover:shadow-2xl transition-all duration-500
                                    md:bg-white md:border md:border-[#d4af37]/10 md:text-[#1a1612] md:col-span-1
                                    ${isMobileHighlight
                                        ? 'bg-[#1a1612] text-[#fdf8f0] border-none'
                                        : 'bg-white text-[#1a1612] border border-[#d4af37]/10'}
                                `}
                            >
                                {/* Decorative Gradient - Hidden on Desktop unless we want to keep it? Original didn't have it. Let's hide it on desktop to be safe. */}
                                <div className={`absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 -mr-20 -mt-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 md:hidden
                                    ${isMobileHighlight ? 'bg-[#d4af37]' : 'bg-[#d4af37]'}
                                `} />

                                <div className={`relative z-10 h-full flex flex-col justify-between gap-6`}>

                                    <div className="space-y-4">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 
                                            md:bg-[#d4af37]/10 md:text-[#d4af37]
                                            ${isMobileHighlight ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'bg-[#d4af37]/10 text-[#d4af37]'}
                                        `}>
                                            <service.icon size={28} />
                                        </div>

                                        <h3 className={`text-2xl md:text-2xl font-serif italic ${isMobileHighlight ? 'text-[#d4af37] md:text-[#1a1612] md:not-italic md:font-serif' : 'text-[#1a1612]'}`}>
                                            {service.title}
                                        </h3>

                                        <p className={`font-jakarta text-base leading-relaxed ${isMobileHighlight ? 'text-[#fdf8f0]/80 md:text-[#1a1612]/70' : 'text-[#1a1612]/70'}`}>
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Numbering - Only for Mobile highlight */}
                                    <div className={`flex items-end justify-end md:hidden ${!isMobileHighlight && 'hidden'}`}>
                                        <span className="text-6xl font-serif font-bold italic opacity-10 text-[#d4af37]">
                                            0{idx + 1}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
