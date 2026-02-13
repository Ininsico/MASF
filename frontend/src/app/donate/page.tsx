"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Copy, Check, Heart, ShieldCheck, Wallet } from 'lucide-react';

const DonatePage = () => {
    const [amount, setAmount] = useState('');
    const [showPayment, setShowPayment] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleProceed = () => {
        if (amount) setShowPayment(true);
    };

    return (
        <div className="min-h-screen pt-32 bg-white text-slate-900 font-jakarta">
            {/* Header section with blue subtle background */}
            <section className="relative px-6 py-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10" />

                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-widest uppercase"
                    >
                        <Heart size={16} fill="currentColor" /> Every Cent Matters
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-serif italic text-slate-900 tracking-tight"
                    >
                        Change is in <span className="text-blue-600">Your</span> Hands.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Your generosity fuels our mission to provide healthcare, education, and hope to those who need it most.
                    </motion.p>
                </div>
            </section>

            {/* Main Donation Container */}
            <section className="px-6 py-12 max-w-5xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left side: Why Donate */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-serif italic text-slate-900 leading-tight">Your impact in <br /> real numbers</h2>
                            <p className="text-lg text-slate-500">We ensure 100% of your donation goes directly to field programs.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { label: "Medical Aid", value: "3,000 PKR provides 1 month of medicine.", icon: ShieldCheck },
                                { label: "Food Support", value: "5,000 PKR feeds a family for 2 weeks.", icon: Wallet },
                                { label: "Social Care", value: "10,000 PKR funds a whole medical camp day.", icon: Heart },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon size={28} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-900 text-lg uppercase tracking-wider">{item.label}</h4>
                                        <p className="text-slate-500">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Input and Payment */}
                    <div className="bg-white p-10 md:p-14 rounded-[60px] shadow-[0_32px_64px_-16px_rgba(37,99,235,0.1)] border border-blue-100 relative">
                        <div className="space-y-10">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Contribution Amount</h3>
                                <p className="text-slate-500">Select or enter an amount in PKR</p>
                            </div>

                            <div className="relative group">
                                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-serif text-blue-600 font-bold opacity-40 group-focus-within:opacity-100 transition-opacity">PKR</span>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full pl-24 pr-10 py-8 text-5xl font-bold font-serif bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-600 rounded-[32px] outline-none transition-all placeholder:text-slate-200"
                                />
                            </div>

                            <Button
                                onClick={handleProceed}
                                className="w-full h-20 text-xl font-bold bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-2xl shadow-blue-600/30 font-serif italic tracking-wide"
                            >
                                Secure My Donation
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Secure Methods Popup/Section */}
                <AnimatePresence>
                    {showPayment && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-32 pt-20 border-t border-slate-100"
                        >
                            <h2 className="text-4xl font-serif italic text-center mb-16 text-slate-900">Select Your Payment Channel</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Nayapay */}
                                <div className="group bg-white p-10 rounded-[50px] shadow-lg border border-slate-50 hover:border-blue-600/40 transition-all duration-500 text-center space-y-8">
                                    <div className="w-48 h-48 mx-auto relative rounded-[40px] overflow-hidden border-8 border-slate-50 group-hover:border-blue-50 transition-colors">
                                        <img src="/payment/nayapay.jpeg" alt="Nayapay" className="w-full h-full object-contain p-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-blue-600 font-black uppercase text-xs tracking-widest">NayaPay ID</div>
                                        <div className="text-3xl font-bold text-slate-900">Umar Shahab Khan</div>
                                        <div className="text-2xl font-light text-slate-500">0335-6238125</div>
                                    </div>
                                    <Button
                                        onClick={() => handleCopy("03356238125")}
                                        className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-10 h-14 font-bold"
                                    >
                                        <Copy className="mr-2 h-4 w-4" /> Copy ID
                                    </Button>
                                </div>

                                {/* JazzCash */}
                                <div className="group bg-white p-10 rounded-[50px] shadow-lg border border-slate-50 hover:border-blue-600/40 transition-all duration-500 text-center space-y-8">
                                    <div className="w-48 h-48 mx-auto relative rounded-[40px] overflow-hidden border-8 border-slate-50 group-hover:border-blue-50 transition-colors">
                                        <img src="/payment/jaazcash.jpeg" alt="JazzCash" className="w-full h-full object-contain p-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-blue-600 font-black uppercase text-xs tracking-widest">JazzCash ID</div>
                                        <div className="text-3xl font-bold text-slate-900">Muhammad Waqas Ali</div>
                                        <div className="text-2xl font-light text-slate-500">0320-7677269</div>
                                    </div>
                                    <Button
                                        onClick={() => handleCopy("03207677269")}
                                        className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-10 h-14 font-bold"
                                    >
                                        <Copy className="mr-2 h-4 w-4" /> Copy ID
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <Footer />

            {/* Notification */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4"
                    >
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-bold text-sm tracking-wide">Securely Copied to Clipboard</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DonatePage;
