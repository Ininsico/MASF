"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Study Guidelines', href: '/study-guidelines' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Get Involved', href: '/get-involved' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-[9999] py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="relative flex justify-between items-center px-5 py-2 md:px-8 md:py-3 rounded-[32px] bg-white/95 backdrop-blur-sm shadow-md border border-slate-200">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-36 h-10 md:w-56 md:h-16 overflow-hidden group-hover:scale-105 transition-transform">
                            <Image
                                src="/bgmasf.png"
                                alt="MASF Logo"
                                fill
                                className="object-contain p-1 md:p-2"
                            />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors tracking-tight uppercase font-jakarta"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-4 z-[100]">
                        <Link href="/donate">
                            <Button variant="default" size="sm" className="hidden md:flex bg-blue-600 text-white hover:bg-blue-700 font-bold font-jakarta rounded-lg px-6 h-10">
                                Donate Now
                            </Button>
                        </Link>
                        <button
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 w-full h-screen bg-white z-[9998] flex flex-col pt-24 px-6 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center space-y-4 text-center w-full max-w-md mx-auto">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                >
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        href={link.href}
                                        className="text-xl font-bold text-slate-800 hover:text-blue-600 active:text-blue-700 transition-colors block py-3 px-4 -mx-4 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="w-full max-w-xs pt-8"
                            >
                                <Link href="/donate" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg h-14 rounded-2xl shadow-xl shadow-blue-500/20">
                                        Donate Now
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
