"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { BookOpen, Video, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const guides = [
    {
        title: "USMLE Step 1 Guide",
        category: "Exam Prep",
        desc: "Comprehensive roadmap for acing the United States Medical Licensing Examination.",
        icon: BookOpen
    },
    {
        title: "PLAB Journey",
        category: "International",
        desc: "Step-by-step guidance for practicing medicine in the UK.",
        icon: FileText
    },
    {
        title: "OET Preparation",
        category: "Language",
        desc: "Resources and tips to clear the Occupational English Test with high grades.",
        icon: Video
    },
    {
        title: "Clinical Electives",
        category: "Experience",
        desc: "How to secure vital clinical experience in foreign hospitals.",
        icon: Download
    }
];

const StudyGuidelinesPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[100px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        Student Resource Center
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9]">
                        Study <span className="text-[#d4af37]">Guidelines</span>
                    </h1>
                    <p className="text-xl text-[#1a1612]/70 leading-relaxed font-light max-w-2xl mx-auto">
                        Empowering the next generation of medical professionals with free, high-quality mentorship and resources.
                    </p>
                </motion.div>
            </section>

            {/* Guides Grid */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {guides.map((guide, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-[32px] border border-[#d4af37]/10 shadow-lg flex items-start gap-6 group hover:border-[#d4af37]/30 transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#1a1612] flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37] group-hover:text-[#1a1612] transition-colors duration-300">
                                <guide.icon size={32} />
                            </div>
                            <div className="space-y-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">{guide.category}</span>
                                <h3 className="text-2xl font-serif text-[#1a1612]">{guide.title}</h3>
                                <p className="text-[#1a1612]/70 leading-relaxed text-sm">
                                    {guide.desc}
                                </p>
                                <Button variant="outline" size="sm" className="mt-2 text-[#d4af37] border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-[#1a1612]">
                                    Access Guide
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default StudyGuidelinesPage;
