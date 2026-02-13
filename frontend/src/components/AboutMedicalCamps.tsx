"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Stethoscope, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const AboutMedicalCamps = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-32 px-6 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900 rounded-[80px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] relative group border-8 border-white"
            >
                {/* Visual Aspect - Dynamic Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/landingpagepics/medicalcampawareness.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 md:p-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-[1px] w-12 bg-blue-500" />
                                <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs">Legacy of Care</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-[1.1]">
                                Our Medical <br />
                                <span className="text-blue-500">Milestones</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { count: "50+", label: "Medical Camps", icon: Heart },
                                { count: "10k+", label: "Patients Treated", icon: Users },
                                { count: "20+", label: "Specialists", icon: Stethoscope },
                                { count: "Free", label: "Medicines Provided", icon: ClipboardCheck },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-5"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                        <stat.icon size={28} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white leading-none">{stat.count}</div>
                                        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:pl-12">
                        <div className="p-10 md:p-14 rounded-[50px] bg-white/5 backdrop-blur-xl border border-white/10 space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

                            <p className="text-2xl font-serif italic text-slate-200 leading-relaxed font-light">
                                "We don't just treat symptoms; we restore dignity. Since our inception, MASF has been the bridge for thousands who had lost hope in healthcare."
                            </p>

                            <Link href="/services">
                                <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold text-lg shadow-xl shadow-blue-600/30">
                                    Our Full Journey <ArrowUpRight className="ml-2" size={20} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMedicalCamps;
