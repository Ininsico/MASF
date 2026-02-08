"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { UserPlus, Heart, Share2 } from 'lucide-react';

const GetInvolvedPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        Join The Mission
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9]">
                        Get <span className="text-[#d4af37]">Involved</span>
                    </h1>
                    <p className="text-xl text-[#1a1612]/70 leading-relaxed font-light max-w-2xl mx-auto">
                        Whether you volunteer your time, donate, or spread the word, your contribution changes lives.
                    </p>
                </motion.div>
            </section>

            {/* Ways to Help */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Volunteer */}
                    <div className="p-10 rounded-[40px] bg-white shadow-xl border border-[#d4af37]/10 text-center space-y-6 hover:translate-y-[-10px] transition-transform duration-300">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#1a1612] flex items-center justify-center text-[#d4af37]">
                            <UserPlus size={40} />
                        </div>
                        <h3 className="text-3xl font-serif text-[#1a1612]">Volunteer</h3>
                        <p className="text-[#1a1612]/70 leading-relaxed">
                            Join our team of dedicated volunteers and work on the ground to make a real difference.
                        </p>
                        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=masfpk@gmail.com&su=Volunteer%20Application" target="_blank" className="w-full">
                            <Button className="w-full bg-[#d4af37] text-[#1a1612] hover:bg-[#c5a059] font-bold">Apply Now</Button>
                        </Link>
                    </div>

                    {/* Donate */}
                    <div className="p-10 rounded-[40px] bg-[#1a1612] text-[#f2e8cf] shadow-2xl border border-[#d4af37]/20 text-center space-y-6 transform scale-105">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#d4af37] flex items-center justify-center text-[#1a1612]">
                            <Heart size={40} fill="currentColor" />
                        </div>
                        <h3 className="text-3xl font-serif text-[#f2e8cf]">Donate</h3>
                        <p className="border-t border-b border-[#f2e8cf]/10 py-4 opacity-80 leading-relaxed">
                            Your financial support enables us to buy medicines, food, and essentials for those in need.
                        </p>
                        <Link href="/donate" className="w-full">
                            <Button className="w-full bg-[#f2e8cf] text-[#1a1612] hover:bg-white font-bold">Donate Now</Button>
                        </Link>
                    </div>

                    {/* Partner */}
                    <div className="p-10 rounded-[40px] bg-white shadow-xl border border-[#d4af37]/10 text-center space-y-6 hover:translate-y-[-10px] transition-transform duration-300">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#1a1612] flex items-center justify-center text-[#d4af37]">
                            <Share2 size={40} />
                        </div>
                        <h3 className="text-3xl font-serif text-[#1a1612]">Partner</h3>
                        <p className="text-[#1a1612]/70 leading-relaxed">
                            Collaborate with us as an organization or sponsor to amplify our reach and impact.
                        </p>
                        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=masfpk@gmail.com&su=Partnership%20Inquiry" target="_blank" className="w-full">
                            <Button className="w-full bg-[#d4af37] text-[#1a1612] hover:bg-[#c5a059] font-bold">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GetInvolvedPage;
