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
        <footer className="w-full bg-[#fdf8f0] border-t border-[#d4af37]/20 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#d4af37]/20">
                                <Image
                                    src="/MASF.png"
                                    alt="MASF Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-serif font-bold text-[#1a1612] italic">MASF</span>
                        </div>
                        <p className="text-[#1a1612]/70 font-jakarta leading-relaxed">
                            Medical & Social Family (MASF) is dedicated to bridging the gap in healthcare and social welfare, providing hope and tangible support to underserved communities.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1612] transition-colors duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-serif font-bold text-[#1a1612] mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Services', 'Programs', 'Volunteer', 'Donate', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[#1a1612]/70 hover:text-[#d4af37] transition-colors font-jakarta flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#d4af37]" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-serif font-bold text-[#1a1612] mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-[#d4af37] mt-1 shrink-0" size={20} />
                                <span className="text-[#1a1612]/70 font-jakarta">
                                    Jhal Road, Near MHCG School,<br /> Abbottabad, Pakistan
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="text-[#d4af37] shrink-0" size={20} />
                                <span className="text-[#1a1612]/70 font-jakarta">+92 300 1234567</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="text-[#d4af37] shrink-0" size={20} />
                                <span className="text-[#1a1612]/70 font-jakarta">contact@masf.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-serif font-bold text-[#1a1612] mb-6">Newsletter</h4>
                        <p className="text-[#1a1612]/70 font-jakarta mb-6">
                            Subscribe to receive updates on our latest drives and impact stories.
                        </p>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-[#faecd2]/50 border border-[#d4af37]/20 rounded-xl px-4 py-3 text-[#1a1612] placeholder:text-[#1a1612]/50 focus:outline-none focus:border-[#d4af37] transition-colors font-jakarta"
                            />
                            <Button className="w-full bg-[#d4af37] text-[#1a1612] hover:bg-[#c5a059] font-bold font-jakarta">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#d4af37]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#1a1612]/40 font-jakarta text-sm">
                        © {new Date().getFullYear()} MASF. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <Link href="#" className="text-[#1a1612]/40 hover:text-[#d4af37] transition-colors text-sm font-jakarta">Privacy Policy</Link>
                        <Link href="#" className="text-[#1a1612]/40 hover:text-[#d4af37] transition-colors text-sm font-jakarta">Terms of Service</Link>
                        <Link href="#" className="text-[#1a1612]/40 hover:text-[#d4af37] transition-colors text-sm font-jakarta">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
