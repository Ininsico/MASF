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
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Impact', href: '#impact' },
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
                        "relative flex justify-between items-center px-8 py-3 rounded-[24px] transition-all duration-500",
                        scrolled ? "glass-nav shadow-2xl border-[#d4af37]/20" : "bg-transparent"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-4 group">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-transform shadow-lg shadow-[#d4af37]/20 border border-[#d4af37]/20">
                            <Image
                                src="/MASF.png"
                                alt="MASF Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-tight text-[#1a1612] group-hover:text-[#d4af37] transition-colors font-serif italic">
                            MASF
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-[#1a1612]/70 hover:text-[#d4af37] transition-colors tracking-tight uppercase font-jakarta"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-4">
                        <Link href="/donate">
                            <Button variant="default" size="sm" className="hidden md:flex bg-[#d4af37] text-white hover:bg-[#c5a059] shadow-lg shadow-[#d4af37]/20 font-bold font-jakarta">
                                Donate Now <Heart size={16} className="ml-2 fill-white" />
                            </Button>
                        </Link>
                        <button
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1a1612] bg-[#d4af37] rounded-xl"
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
                        <div className="glass-panel bg-[#fdf8f0]/95 rounded-[32px] p-8 shadow-2xl border border-[#d4af37]/20 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link onClick={() => setIsOpen(false)} key={link.name} href={link.href} className="text-xl font-bold text-[#1a1612] hover:text-[#d4af37] font-serif italic">{link.name}</Link>
                            ))}
                            <hr className="border-[#d4af37]/20" />
                            <Link href="/donate" className="w-full">
                                <Button className="w-full bg-[#d4af37] text-white hover:bg-[#c5a059] font-bold text-lg h-12 font-jakarta">
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
