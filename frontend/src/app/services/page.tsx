"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
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
            {/* Hero Section */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[100px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        What We Do
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9]">
                        Serving with <br /> <span className="text-[#d4af37]">Purpose</span>
                    </h1>
                    <p className="text-xl text-[#1a1612]/70 leading-relaxed font-light max-w-2xl mx-auto">
                        From healthcare to education, our services are designed to address the most critical needs of our community.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[32px] bg-white border border-[#d4af37]/10 hover:border-[#d4af37]/40 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1a1612] mb-3">{service.title}</h3>
                            <p className="text-[#1a1612]/70 leading-relaxed font-jakarta">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
