"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { UserPlus, Heart, Share2 } from 'lucide-react';

const GetInvolvedPage = () => {
    return (
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-12 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                        Bridge The Gap
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                        Join Our <span className="text-blue-600">Family</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
                        Whether you volunteer your time, donate, or spread the word, your contribution changes lives across Pakistan.
                    </p>
                </motion.div>
            </section>

            {/* Ways to Help */}
            <section className="px-4 py-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Volunteer */}
                    <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center space-y-6 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-500 group">
                        <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-500">
                            <UserPlus size={32} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">Volunteer</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-base">
                                Join our team of dedicated volunteers and work on the ground to make a real difference.
                            </p>
                        </div>
                        <Button disabled className="w-full bg-slate-200 text-slate-400 cursor-not-allowed rounded-full h-12 font-black uppercase tracking-widest text-xs transition-all">Coming Soon</Button>
                    </div>

                    {/* Donate */}
                    {/* Donate */}
                    <div className="p-10 rounded-[40px] bg-blue-600 text-white shadow-xl shadow-blue-600/30 text-center space-y-6 transform md:scale-105 z-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-40 transition-opacity" />
                        <div className="w-20 h-20 mx-auto rounded-3xl bg-white flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-105 transition-transform duration-500">
                            <Heart size={32} fill="currentColor" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white leading-tight">Donate</h3>
                            <p className="text-blue-50/80 leading-relaxed font-light text-base">
                                Your financial support enables us to buy medicines, food, and essentials for those in need.
                            </p>
                        </div>
                        <Link href="/donate" className="block">
                            <Button className="w-full bg-white text-blue-600 hover:bg-slate-50 rounded-full h-12 font-black uppercase tracking-widest text-xs transition-all">Donate Now</Button>
                        </Link>
                    </div>

                    {/* Partner */}
                    {/* Partner */}
                    <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center space-y-6 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-500 group">
                        <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-500">
                            <Share2 size={32} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">Partner</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-base">
                                Collaborate with us as an organization or sponsor to amplify our reach and impact.
                            </p>
                        </div>
                        <Button disabled className="w-full bg-slate-200 text-slate-400 cursor-not-allowed rounded-full h-12 font-black uppercase tracking-widest text-xs transition-all">Coming Soon</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GetInvolvedPage;
