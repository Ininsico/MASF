"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const developers = [
    {
        name: "Huzaifa Safdar",
        designation: "Full Stack Developer",
        image: "/offprof.jpg", // Needs to be added
        bio: "Passionate about building scalable web applications and creating intuitive user experiences. Specializes in the MERN stack and Next.js.",
        socials: {
            github: "https://github.com/codifyzefa",
            linkedin: "https://linkedin.com/in/huzaifasafdar",
            twitter: "https://twitter.com/",
            email: "mailto:artbyzefa@gmail.com"
        }
    },
    {
        name: "Arslan Ahmed Rathore",
        designation: "AI Engineer & Backend Developer",
        image: "/arsprof.jpeg", // Ensure this image is in public folder
        bio: "I am a backend developer with experience in building web applications. I am also an AI engineer with experience in machine learning and deep learning.",
        socials: {
            github: "https://github.com/ininsico",
            linkedin: "https://www.linkedin.com/in/arslan-rathore-ininsico/",
            twitter: "https://twitter.com/",
            email: "mailto:ininsico@gamil.com"
        }
    }
];

const DevelopersPage = () => {
    return (
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">
            {/* Header Section */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">
                        Meet the Creators
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Our Developers
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        The minds behind the MASF platform. Dedicated to using technology for social good and community impact.
                    </p>
                </div>
            </section>

            {/* Developers Grid */}
            <section className="px-4 pb-32 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {developers.map((dev, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-[40px] border border-slate-100 p-8 shadow-xl hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                {/* Image Container */}
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                                    <Image
                                        src={dev.image}
                                        alt={dev.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{dev.name}</h3>
                                        <p className="text-blue-600 font-medium text-sm tracking-wide uppercase mt-1">{dev.designation}</p>
                                    </div>

                                    <p className="text-slate-500 leading-relaxed text-sm max-w-sm mx-auto">
                                        {dev.bio}
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4 pt-4">
                                    <a href={dev.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={dev.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href={dev.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-sky-500 hover:text-white transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href={dev.socials.email} className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-red-500 hover:text-white transition-colors">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DevelopersPage;
