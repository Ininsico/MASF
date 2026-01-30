"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const DonatePage = () => {
    const [copied, setCopied] = useState(false);
    const bankDetails = {
        accountName: "Medical & Social Family",
        bankName: "Meezan Bank",
        accountNumber: "0123-45678901-23",
        iban: "PK12MEZN0001234567890123"
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(bankDetails, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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

            {/* Donation Details */}
            <section className="px-6 pb-20 max-w-4xl mx-auto">
                <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl border border-[#d4af37]/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl -z-10" />

                    <h3 className="text-3xl font-serif text-[#1a1612] mb-8 text-center">Bank Transfer Details</h3>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-[#1a1612]/10">
                            <span className="text-[#1a1612]/60 font-bold uppercase tracking-wider text-sm">Account Name</span>
                            <span className="text-xl font-serif font-bold text-[#1a1612]">{bankDetails.accountName}</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-[#1a1612]/10">
                            <span className="text-[#1a1612]/60 font-bold uppercase tracking-wider text-sm">Bank Name</span>
                            <span className="text-xl font-serif font-bold text-[#1a1612]">{bankDetails.bankName}</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-[#1a1612]/10">
                            <span className="text-[#1a1612]/60 font-bold uppercase tracking-wider text-sm">Account Number</span>
                            <span className="text-xl font-serif font-bold text-[#1a1612]">{bankDetails.accountNumber}</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-[#1a1612]/10">
                            <span className="text-[#1a1612]/60 font-bold uppercase tracking-wider text-sm">IBAN</span>
                            <span className="text-xl font-serif font-bold text-[#1a1612] break-all">{bankDetails.iban}</span>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Button
                            onClick={handleCopy}
                            size="lg"
                            className="bg-[#d4af37] text-[#1a1612] hover:bg-[#c5a059] font-bold px-8 rounded-xl flex items-center gap-2"
                        >
                            {copied ? <Check size={20} /> : <Copy size={20} />}
                            {copied ? "Copied Details" : "Copy Bank Details"}
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DonatePage;
