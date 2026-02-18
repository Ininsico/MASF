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
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">
            {/* Premium Hero Section */}
            <section className="relative min-h-[85vh] w-full flex items-center pt-10 overflow-hidden bg-white">
                <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div className="relative z-10 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-6"
                        >
                            <div className="h-[1px] w-12 bg-blue-600" />
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Our Global Impact</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
                        >
                            Serving <br />
                            <span className="text-blue-600">Humanity</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-2xl text-slate-500 max-w-xl font-light leading-relaxed font-jakarta"
                        >
                            We go beyond temporary aid to provide sustainable solutions. From emergency relief to long-term educational support, our services are a lifeline for those in need across every province.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            {['Healthcare', 'Education', 'Social Welfare'].map((tag, i) => (
                                <span key={i} className="px-8 py-3 rounded-full border border-slate-100 bg-slate-50 text-slate-500 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default shadow-sm sm:shadow-none">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visuals */}
                    <div className="relative h-[650px] w-full hidden lg:block">
                        {/* Main Image Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute top-0 right-0 w-full h-full rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] border-[12px] border-white z-10 bg-slate-100"
                        >
                            <img
                                src="/landingpagepics/COMBOpic.png"
                                alt="Flood Relief Efforts"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            <div className="absolute bottom-12 left-12 text-white">
                                <p className="font-bold text-3xl leading-tight">Restoring Hope In <br /> Pakistan</p>
                                <p className="text-sm opacity-80 font-jakarta mt-4 uppercase font-bold tracking-widest">On Ground Impact</p>
                            </div>
                        </motion.div>

                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Our Core Initiatives</h2>
                    <div className="w-32 h-[2px] bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 md:p-12 rounded-[50px] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 group"
                            >
                                <div className="space-y-8 h-full flex flex-col items-start text-start">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                                        <service.icon size={32} />
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                            {service.title}
                                        </h3>

                                        <p className="font-jakarta text-lg leading-relaxed text-slate-500 font-light">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="pt-6 w-full flex justify-end">
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors duration-500">0{idx + 1}</span>
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
