"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Footer = () => {
    return (
        <footer className="w-full bg-slate-900 pt-20 pb-10 px-6 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-blue-500/20 bg-white p-1">
                                <Image
                                    src="/MASF.png"
                                    alt="MASF Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-3xl font-serif font-bold text-white italic tracking-tight">MASF</span>
                        </div>
                        <p className="text-slate-400 font-jakarta leading-relaxed text-lg">
                            Dedicated to bridging the gap in healthcare and social welfare, providing hope and tangible support to underserved communities across Pakistan.
                        </p>
                        <div className="flex space-x-5">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 font-jakarta uppercase tracking-widest">Navigation</h4>
                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Our Services', href: '/services' },
                                { name: 'Study Guidelines', href: '/study-guidelines' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Get Involved', href: '/get-involved' },
                                { name: 'Donate Now', href: '/donate' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-400 hover:text-blue-400 transition-colors font-jakarta flex items-center group text-lg">
                                        <ArrowRight size={18} className="mr-3 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 font-jakarta uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-8">
                            <li className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-slate-400 font-jakarta text-lg">
                                    Faisalabad, Punjab, Pakistan
                                </span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <span className="text-slate-400 font-jakarta text-lg">0335 6238125</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="text-slate-400 font-jakarta text-lg">masfpk@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-10 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-slate-500 font-jakarta text-sm font-medium">
                        © {new Date().getFullYear()} Medical & Social Family. All Rights Reserved.
                    </p>
                    <div className="flex space-x-10">
                        {['Privacy', 'Terms', 'Cookies'].map((item) => (
                            <Link key={item} href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-jakarta font-medium">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
