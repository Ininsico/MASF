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
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-12 flex flex-col items-center text-center overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                        Student Resource Center
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                        Academic <span className="text-blue-600">Excellence</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
                        Empowering the next generation of medical professionals with free, high-quality mentorship and global resources.
                    </p>
                </motion.div>
            </section>

            {/* Guides Grid */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {guides.map((guide, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-50 p-10 rounded-[50px] border border-transparent shadow-sm flex flex-col sm:flex-row items-start gap-8 group hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-[24px] bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 shadow-lg shadow-blue-600/20 transition-transform">
                                <guide.icon size={32} />
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">{guide.category}</span>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight">{guide.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-lg font-light">
                                    {guide.desc}
                                </p>
                                <Button className="mt-4 bg-transparent border-2 border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full px-8 h-12 font-black text-xs uppercase tracking-widest transition-all">
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
