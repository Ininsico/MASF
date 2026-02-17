"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-slate-950 border-t border-white/5 py-12 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Brand & Social - Horizontal Layout */}
                <div className="flex items-center gap-6">
                    <div className="relative w-48 h-14 md:w-56 md:h-16 overflow-hidden">
                        <Image
                            src="/bgmasf.png"
                            alt="MASF Logo"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <div className="flex space-x-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {[Facebook, Instagram, Mail].map((Icon, i) => (
                            <a key={i} href="#" className="hover:text-blue-500 transition-colors">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Nav - Horizontal */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                    {[
                        { name: 'About', href: '/about' },
                        { name: 'Services', href: '/services' },
                        { name: 'Gallery', href: '/gallery' },
                        { name: 'Donate', href: '/donate' },
                        { name: 'Our Developers', href: '/developers' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-[0.2em]"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Info & Legal */}
                <div className="flex flex-col items-center md:items-end space-y-2">
                    <div className="flex items-center space-x-4 text-slate-500 text-xs font-medium">
                        <span className="flex items-center gap-1.5"><MapPin size={12} /> Faisalabad</span>
                        <span className="flex items-center gap-1.5"><Phone size={12} /> 0335 6238125</span>
                    </div>
                    <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold">
                        © {new Date().getFullYear()} Medical & Social Family
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
