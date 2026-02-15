"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav
            className={cn(
                "fixed top-0 w-full z-[100] transition-all duration-500",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className={cn(
                        "relative flex justify-between items-center px-8 py-3 rounded-[32px] transition-all duration-500",
                        scrolled ? "glass-nav shadow-lg border-blue-100" : "bg-transparent"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-4 group">
                        <div className="relative w-12 h-12 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/10 border border-blue-100 bg-white p-1">
                            <Image
                                src="/MASF.png"
                                alt="MASF Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                            MASF
                        </span>
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
                    <div className="flex items-center space-x-4">
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
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="lg:hidden absolute top-full left-0 w-full p-6 pt-2"
                    >
                        <div className="glass-panel bg-white/95 rounded-[32px] p-8 shadow-2xl border border-blue-100 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link onClick={() => setIsOpen(false)} key={link.name} href={link.href} className="text-lg font-medium text-slate-900 hover:text-blue-600">{link.name}</Link>
                            ))}
                            <hr className="border-slate-100" />
                            <Link href="/donate" className="w-full">
                                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-base h-12 font-jakarta rounded-lg">
                                    Donate Now <Heart size={20} className="ml-2 fill-white" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
