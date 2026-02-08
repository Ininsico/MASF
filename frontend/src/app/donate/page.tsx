"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

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
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">
            {/* Hero Section */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        Support Our Cause
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9]">
                        Make a <span className="text-[#d4af37]">Difference</span>
                    </h1>
                    <p className="text-xl text-[#1a1612]/70 leading-relaxed font-light">
                        Your contribution brings hope to those who need it most. Every rupee counts towards saving a life, feeding a family, or educating a child.
                    </p>
                </motion.div>
            </section>

            {/* Donation Amount Input */}
            <section className="px-6 pb-12 max-w-xl mx-auto">
                <div className="bg-white p-8 rounded-[32px] shadow-xl border border-[#d4af37]/20 text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl -z-10" />

                    <h2 className="text-2xl font-serif font-bold text-[#1a1612]">How much would you like to donate?</h2>

                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-serif text-[#d4af37] font-bold">PKR</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full pl-20 pr-6 py-4 text-3xl font-bold font-serif bg-[#fdf8f0] border-2 border-[#d4af37]/20 rounded-2xl focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#1a1612]/20"
                        />
                    </div>

                    <Button
                        onClick={handleProceed}
                        className="w-full h-14 text-lg font-bold bg-[#1a1612] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1612]"
                    >
                        Proceed to Payment
                    </Button>
                </div>
            </section>

            {/* Payment Methods */}
            {showPayment && (
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 pb-20 max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl font-serif italic text-center mb-12 text-[#1a1612]">Select Payment Method</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Nayapay Card */}
                        <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-[#d4af37]/20 flex flex-col items-center text-center space-y-6 relative overflow-hidden group hover:border-[#d4af37] transition-all">
                            <div className="w-full h-48 relative rounded-3xl overflow-hidden mb-4 border border-[#1a1612]/10">
                                <img src="/payment/nayapay.jpeg" alt="Nayapay QR" className="w-full h-full object-contain p-4" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#1a1612] mb-2">Nayapay</h3>
                                <p className="text-lg font-bold text-[#d4af37]">Umar Shahab Khan</p>
                                <p className="text-2xl font-jakarta font-bold text-[#1a1612]/80 mt-2">0335-6238125</p>
                            </div>
                            <Button
                                onClick={() => handleCopy("03356238125")}
                                variant="outline"
                                className="mt-auto border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
                            >
                                <Copy className="mr-2 h-4 w-4" /> Copy Number
                            </Button>
                        </div>

                        {/* JazzCash Card */}
                        <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-[#d4af37]/20 flex flex-col items-center text-center space-y-6 relative overflow-hidden group hover:border-[#d4af37] transition-all">
                            <div className="w-full h-48 relative rounded-3xl overflow-hidden mb-4 border border-[#1a1612]/10">
                                <img src="/payment/jaazcash.jpeg" alt="JazzCash QR" className="w-full h-full object-contain p-4" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#1a1612] mb-2">JazzCash</h3>
                                <p className="text-lg font-bold text-[#d4af37]">Muhammad Waqas Ali</p>
                                <p className="text-2xl font-jakarta font-bold text-[#1a1612]/80 mt-2">0320-7677269</p>
                            </div>
                            <Button
                                onClick={() => handleCopy("03207677269")}
                                variant="outline"
                                className="mt-auto border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
                            >
                                <Copy className="mr-2 h-4 w-4" /> Copy Number
                            </Button>
                        </div>
                    </div>


                </motion.section>
            )}

            <Footer />

            {/* Copied Popup Notification */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 50, x: "-50%" }}
                        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-[#1a1612] text-[#d4af37] px-6 py-3 rounded-full shadow-2xl border border-[#d4af37]/20 flex items-center gap-3"
                    >
                        <Check size={20} className="text-[#d4af37]" />
                        <span className="font-bold font-jakarta">Copied to clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DonatePage;
