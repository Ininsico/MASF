"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { UserPlus, Heart, Share2 } from 'lucide-react';

const GetInvolvedPage = () => {
    return (
        <div className="min-h-screen pt-24 bg-white text-slate-900 font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-32 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <span className="inline-block px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                        Bridge The Gap
                    </span>
                    <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.85] tracking-tighter">
                        Join Our <span className="text-blue-600">Family</span>
                    </h1>
                    <p className="text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
                        Whether you volunteer your time, donate, or spread the word, your contribution changes lives across Pakistan.
                    </p>
                </motion.div>
            </section>

            {/* Ways to Help */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Volunteer */}
                    <div className="p-12 rounded-[60px] bg-slate-50 border border-slate-100 text-center space-y-8 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group">
                        <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
                            <UserPlus size={44} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-serif text-slate-900 italic leading-tight">Volunteer</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-lg">
                                Join our team of dedicated volunteers and work on the ground to make a real difference.
                            </p>
                        </div>
                        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=masfpk@gmail.com&su=Volunteer%20Application" target="_blank" className="block">
                            <Button className="w-full bg-slate-950 text-white hover:bg-blue-600 rounded-full h-14 font-black uppercase tracking-widest text-xs transition-all">Apply Now</Button>
                        </Link>
                    </div>

                    {/* Donate */}
                    <div className="p-12 rounded-[60px] bg-blue-600 text-white shadow-2xl shadow-blue-600/30 text-center space-y-8 transform scale-105 z-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:opacity-40 transition-opacity" />
                        <div className="w-24 h-24 mx-auto rounded-3xl bg-white flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <Heart size={44} fill="currentColor" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-serif text-white italic leading-tight">Donate</h3>
                            <p className="text-blue-50/80 leading-relaxed font-light text-lg">
                                Your financial support enables us to buy medicines, food, and essentials for those in need.
                            </p>
                        </div>
                        <Link href="/donate" className="block">
                            <Button className="w-full bg-white text-blue-600 hover:bg-slate-50 rounded-full h-14 font-black uppercase tracking-widest text-xs transition-all">Donate Now</Button>
                        </Link>
                    </div>

                    {/* Partner */}
                    <div className="p-12 rounded-[60px] bg-slate-50 border border-slate-100 text-center space-y-8 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group">
                        <div className="w-24 h-24 mx-auto rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500">
                            <Share2 size={44} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-serif text-slate-900 italic leading-tight">Partner</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-lg">
                                Collaborate with us as an organization or sponsor to amplify our reach and impact.
                            </p>
                        </div>
                        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=masfpk@gmail.com&su=Partnership%20Inquiry" target="_blank" className="block">
                            <Button className="w-full bg-slate-950 text-white hover:bg-indigo-600 rounded-full h-14 font-black uppercase tracking-widest text-xs transition-all">Inquire Now</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GetInvolvedPage;
