"use client";

import React, { useState } from 'react';

import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL; // || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                await response.json();
                setStatus('error');
                // You might want to set a state for the specific error message to show to the user
                // setErrorMessage(errorData.message || 'Something went wrong');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">
            {/* Header Section */}
            <section className="relative px-6 py-12 flex flex-col items-center text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        We&apos;re Here to Help
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        Have questions or want to get involved? Reach out to us and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Main Contact Container */}
            <section className="px-4 pb-20 max-w-5xl mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="col-span-1 space-y-6">
                        {/* Email Card */}
                        <div className="bg-white p-8 rounded-[30px] shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-4 hover:border-blue-100 transition-colors">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Email Us</h3>
                                <p className="text-slate-500 text-sm mt-1">masfpk@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white p-8 rounded-[30px] shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-4 hover:border-blue-100 transition-colors">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Call Us</h3>
                                <p className="text-slate-500 text-sm mt-1">+92 335 4014014</p>
                            </div>
                        </div>

                        {/* Social Card (Optional or Address) */}
                        <div className="bg-white p-8 rounded-[30px] shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-4 hover:border-blue-100 transition-colors">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Visit Us</h3>
                                <p className="text-slate-500 text-sm mt-1">Faisalabad, Punjab, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-span-1 md:col-span-2 bg-white rounded-[40px] shadow-xl border border-slate-100 p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
                            <p className="text-slate-500 text-sm mt-2">Fill out the form below and we&apos;ll respond within 24 hours.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. John Doe"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. john@example.com"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. Partnership Inquiry"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you?"
                                    className="w-full h-40 p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
                                />
                            </div>

                            <Button
                                disabled={status === 'sending'}
                                type="submit"
                                className={`w-full h-14 ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-blue-600'} text-white font-bold rounded-xl mt-4 uppercase text-sm tracking-wide transition-all`}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </Button>

                            {status === 'error' && (
                                <p className="text-red-500 text-xs text-center font-bold">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[450px] rounded-[40px] overflow-hidden shadow-xl border border-slate-100 bg-slate-50 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4919640930666!2d73.1591346!3d31.4556504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269202f2facaf%3A0xe78f0200ff49568b!2sAziz%20Fatimah%20Medical%20and%20Dental%20College!5e0!3m2!1sen!2s!4v1771429942088!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale-[1] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/20 pointer-events-none">
                        <p className="font-bold text-slate-900 text-sm">Faisalabad Campus</p>
                        <p className="text-xs text-slate-500">Aziz Fatimah Medical & Dental College</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
