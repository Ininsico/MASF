"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Heart,
    Handshake,
    Stethoscope,
    Utensils,
    Lightbulb,
    Users,
    ArrowRight,
    ShieldCheck,
    Globe,
    Award
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import PlantationGrid from '@/components/PlantationGrid';
import ThriftDrive from '@/components/ThriftDrive';
import MedicalCamp from '@/components/MedicalCamp';
import Footer from '@/components/Footer';
import AnnouncementPopup from '@/components/AnnouncementPopup';
import RamadanTicker from '@/components/RamadanTicker';



export default function HomeView() {
    const initiatives = [
        {
            title: "Social Welfare",
            desc: "Delivering essential support and hope to marginalized communities across the nation.",
            icon: Heart,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "NGO Collaboration",
            desc: "Partnering with global and local organizations to amplify our collective social impact.",
            icon: Handshake,
            color: "bg-indigo-50 text-indigo-600"
        },
        {
            title: "Health & Care",
            desc: "Comprehensive medical screenings and essential healthcare services for all.",
            icon: Stethoscope,
            color: "bg-cyan-50 text-cyan-600"
        },
        {
            title: "Education & Awareness",
            desc: "Empowering the next generation through knowledge and specialized mentorship programs.",
            icon: Lightbulb,
            color: "bg-sky-50 text-sky-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
            <AnnouncementPopup />

            {/* Hero Section */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src="/landingpagepics/HeroSectionvideo2.mp4" type="video/mp4" />
                </video>

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />

                <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight px-4" dir="rtl">
                            &quot;کھجور کے ایک ٹکڑے کے ذریعے ہی سہی، <br className="hidden md:block" />
                            <span className="text-blue-400">جہنم کی آگ</span> سے بچو۔&quot;
                        </h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                            <p className="text-xl md:text-2xl font-medium text-blue-100 tracking-wide">
                                Sahih al-Bukhari (1417)
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-16 items-center justify-center">
                                <Link href="/donate" className="w-full sm:w-auto">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white rounded-lg px-8 h-12 font-bold text-base transition-all hover:scale-105 shadow-lg w-full sm:w-auto">
                                        Donate Now
                                    </Button>
                                </Link>
                                <Link href="/about" className="w-full sm:w-auto">
                                    <Button className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-lg px-8 h-12 font-bold text-base transition-all hover:scale-105 w-full sm:w-auto">
                                        Our Mission
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-blue-400 to-transparent" />
                </motion.div>
            </section>



            {/* Ramadan Ticker */}
            <RamadanTicker />

            {/* Achievements Section - High Impact Overhaul */}
            <section className="py-12 md:py-20 relative overflow-hidden bg-white">
                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    {/* Achievements Grid Area - Full Width */}
                    <div className="w-full space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4 mb-10 text-center flex flex-col items-center"
                        >
                            <div className="h-[2px] w-32 bg-blue-600 mb-4" />
                            <h2 className="text-3xl md:text-5xl font-bold text-blue-950 leading-tight">
                                Tangible Milestones
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {/* Ramadan Dastarkhan */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative h-[400px] md:h-[600px] rounded-[60px] overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-sm"
                            >
                                <video
                                    autoPlay muted loop playsInline
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                                >
                                    <source src="/landingpagepics/Dashtarkhan.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                                <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-4">
                                    <div className="text-blue-400 font-black text-xs uppercase tracking-[0.4em]">Resource Distribution</div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ramadan <br /> Dastarkhan</h3>
                                    <p className="text-white/60 font-light text-base max-w-xs">Connecting with the spirit of giving by feeding thousands across Pakistan's major urban centers.</p>
                                </div>
                            </motion.div>

                            {/* Green Pakistan */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group relative h-[400px] md:h-[600px] rounded-[60px] overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-sm"
                            >
                                <Image src="/landingpagepics/plantation/plantation3.png" alt="Green Pakistan" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                                <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-4">
                                    <div className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em]">Eco Restoration</div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Green <br /> Pakistan</h3>
                                    <p className="text-white/60 font-light text-base max-w-xs">A nationwide movement to restore Pakistan's green cover, one sapling at a time.</p>
                                </div>
                            </motion.div>

                            {/* Free Medical Camps */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="group relative h-[400px] md:h-[600px] rounded-[60px] overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-sm"
                            >
                                <Image src="/landingpagepics/Medicalcamp.png" alt="Medical Camp" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-4">
                                    <div className="text-blue-400 font-black text-xs uppercase tracking-[0.4em]">Healthcare Mission</div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Beyond The Clinic</h2>
                                    <p className="text-white/70 text-base font-light leading-relaxed max-w-xs">
                                        Bringing healthcare to those who need it most. Our free medical and dental camps have served over 25,000+ patients in rural areas.
                                    </p>
                                    <Link href="/gallery" className="pt-4">
                                        <Button className="bg-white text-blue-950 hover:bg-blue-400 hover:text-white rounded-full h-14 px-10 text-xs font-black uppercase tracking-widest transition-all shadow-xl">
                                            Explore Impact
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Grids with Modern Spacing */}
            <section className="space-y-16 py-10">
                <PlantationGrid />
                <ThriftDrive />
                <MedicalCamp />
            </section>

            {/* Big Impact CTA */}
            <section className="py-20 px-6 text-center relative">
                <div className="max-w-5xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                            Ready to <span className="text-blue-600">Make</span> <br /> a Difference?
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-jakarta">
                            Your contribution can provide medicine to a child, food to a family, or education to an aspiring doctor.
                        </p>
                    </motion.div>

                    <Link href="/donate" className="inline-block">
                        <motion.button
                            className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Donate Now
                        </motion.button>
                    </Link>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
                        {[
                            { label: "Secure Payments", icon: ShieldCheck },
                            { label: "Global Reach", icon: Globe },
                            { label: "Direct Impact", icon: Heart },
                            { label: "Verified NGO", icon: Award },
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                    <feature.icon size={24} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{feature.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}
