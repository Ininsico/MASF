"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Copy, Check, Heart, ShieldCheck, Wallet } from 'lucide-react';

const DonatePage = () => {
    const [copied, setCopied] = useState(false);
    const [amount, setAmount] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        accountUsed: '',
        amount: ''
    });
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [fileName, setFileName] = useState('No file chosen');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            setScreenshot(file);
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        if (!screenshot) {
            alert('Please upload payment screenshot');
            setStatus('idle');
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('whatsapp', formData.whatsapp);
            formDataToSend.append('accountUsed', formData.accountUsed);
            formDataToSend.append('amount', formData.amount);
            formDataToSend.append('screenshot', screenshot);

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/donation`, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', whatsapp: '', accountUsed: '', amount: '' });
                setScreenshot(null);
                setFileName('No file chosen');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                const errorData = await response.json();
                console.error('Server error:', errorData);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };



    return (
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">
            {/* Header section with blue subtle background */}
            <section className="relative px-6 py-12 flex flex-col items-center text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">
                        Donate to MASF
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Transfer & upload proof
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        Make a manual transfer from your bank or wallet app. Once you send the amount, upload your details so our finance team can verify and issue your receipt.
                    </p>
                </div>
            </section>

            {/* Main Donation Container */}
            <section className="px-4 pb-20 max-w-5xl mx-auto space-y-12">
                {/* Bank Details Card */}
                <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 p-8 md:p-12">
                    <div className="text-center mb-10 space-y-2">
                        <h2 className="text-2xl font-bold text-slate-900">Bank account details</h2>
                        <p className="text-slate-500 text-sm">Send from any mobile wallet or bank app</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Account 1: NayaPay */}
                        <div className="space-y-6">
                            <div className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => handleCopy("Umar Shahab Khan")}>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Account Title</div>
                                    <div className="font-bold text-slate-900">Umar Shahab Khan</div>
                                </div>
                                <Copy size={16} className="text-slate-400 group-hover:text-blue-500" />
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => handleCopy("03356238125")}>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Account Number / ID</div>
                                    <div className="font-bold text-slate-900">0335-6238125</div>
                                </div>
                                <Copy size={16} className="text-slate-400 group-hover:text-blue-500" />
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Bank</div>
                                    <div className="font-bold text-slate-900">NayaPay</div>
                                </div>
                                <Copy size={16} className="text-slate-400 group-hover:text-blue-500" />
                            </div>
                            {/* QR Code 1 */}
                            <div className="p-5 bg-slate-50 rounded-2xl flex flex-col items-center justify-center space-y-3">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scan to Pay</div>
                                <div className="w-75 h-65 bg-white p-2 rounded-xl">
                                    <img src="/payment/nayapay.jpeg" alt="Nayapay QR" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Account 2: JazzCash */}
                        <div className="space-y-6">
                            <div className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => handleCopy("Muhammad Waqas Ali")}>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Account Title</div>
                                    <div className="font-bold text-slate-900">Muhammad Waqas Ali</div>
                                </div>
                                <Copy size={16} className="text-slate-400 group-hover:text-blue-500" />
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => handleCopy("03207677269")}>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Account Number / ID</div>
                                    <div className="font-bold text-slate-900">0320-7677269</div>
                                </div>
                                <Copy size={16} className="text-slate-400 group-hover:text-blue-500" />
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-blue-50 transition-colors">
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Bank</div>
                                    <div className="font-bold text-slate-900">JazzCash</div>
                                </div>
                                <Copy size={16} className="text-slate-400 group-hover:text-blue-500" />
                            </div>
                            {/* QR Code 2 */}
                            <div className="p-5 bg-slate-50 rounded-2xl flex flex-col items-center justify-center space-y-3">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scan to Pay</div>
                                <div className="w-80 h-70 bg-white p-2 rounded-xl">
                                    <img src="/payment/jaazcash.jpeg" alt="JazzCash QR" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reminder Banner */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-2">
                    <h3 className="font-bold text-lg">Need a reminder for monthly donations?</h3>
                    <p className="text-slate-400 text-sm">Save above account details in your bank or wallet app (Favorites) for future transfers.</p>
                </div>

                {/* Submit Form */}
                <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 p-8 md:p-12">
                    <div className="text-center mb-10 space-y-2">
                        <h2 className="text-2xl font-bold text-slate-900">Submit your transfer details</h2>
                        <p className="text-slate-500 text-sm">Once your online transfer is complete, share the details below.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Ahmed Ali"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 ml-1">WhatsApp number (for receipt)</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., 0300-1234567"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                />
                                <p className="text-[10px] text-slate-400 ml-1">Include country code. We'll send your raseed here.</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 ml-1">Account / IBAN you used to send the amount</label>
                            <textarea
                                name="accountUsed"
                                value={formData.accountUsed}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Meezan Bank, IBAN PK40MEZN0000..."
                                className="w-full h-24 p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 ml-1">Total amount donated (PKR)</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., 15000"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 ml-1">Payment screenshot / photo</label>
                                <div className="flex items-center gap-3 border border-slate-200 rounded-xl p-1 bg-white">
                                    <label className="bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                                        Choose file
                                        <input
                                            type="file"
                                            accept="image/*,.pdf"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                    <span className="text-xs text-slate-500">{fileName}</span>
                                </div>
                                <p className="text-[10px] text-slate-400 ml-1">Upload a clear screenshot or photo of your payment confirmation (max 5MB).</p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full h-14 font-bold rounded-xl mt-4 uppercase text-sm tracking-wide transition-all ${status === 'submitting'
                                ? 'bg-slate-400 cursor-not-allowed'
                                : status === 'success'
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-slate-900 hover:bg-blue-600'
                                } text-white`}
                        >
                            {status === 'submitting'
                                ? 'Submitting...'
                                : status === 'success'
                                    ? 'Submitted Successfully!'
                                    : 'Submit Donation Proof'}
                        </Button>

                        {status === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-4 rounded-xl text-center">
                                ✅ Your donation has been submitted! You will receive a receipt (raseed) on WhatsApp shortly.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-xl text-center">
                                ❌ Something went wrong. Please try again or contact us on WhatsApp.
                            </div>
                        )}

                        <div className="bg-green-50 text-green-700 text-xs p-4 rounded-xl text-center">
                            You will receive a receipt (raseed) from the Finance Secretary on WhatsApp from the number: 0335-4014014.
                        </div>
                    </form>
                </div>
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
