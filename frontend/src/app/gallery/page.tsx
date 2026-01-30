"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Play, X, Image as ImageIcon, Film } from 'lucide-react';

// --- Assets Data ---
const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'community', label: 'Community' },
    { id: 'plantation', label: 'Green Pakistan' },
    { id: 'events', label: 'Events & Talks' }
];

const galleryItems = [
    // Healthcare
    { type: 'video', src: '/landingpagepics/Medicalcamp.mp4', thumb: '/landingpagepics/Medicalcamp.png', category: 'healthcare', title: 'Medical Camp 2024', size: 'large' },
    { type: 'video', src: '/landingpagepics/Dentalcamp.mp4', category: 'healthcare', title: 'Dental Hygiene Drive', size: 'standard' },
    { type: 'image', src: '/landingpagepics/breastcancer.png', category: 'healthcare', title: 'Breast Cancer Awareness', size: 'standard' },
    { type: 'image', src: '/landingpagepics/worldmentalhealth.png', category: 'healthcare', title: 'Mental Health Day', size: 'small' },

    // Community
    { type: 'video', src: '/landingpagepics/FoodCamp.mp4', category: 'community', title: 'Ration Distribution', size: 'large' },
    { type: 'video', src: '/landingpagepics/Dashtarkhan.mp4', thumb: '/landingpagepics/Dastarkhan.png', category: 'community', title: 'Ramadan Dastarkhan', size: 'standard' },
    { type: 'video', src: '/landingpagepics/oldagehome.mp4', category: 'community', title: 'Old Age Home Vist', size: 'standard' },
    { type: 'image', src: '/landingpagepics/clothingcampagin.png', category: 'community', title: 'Clothing Drive', size: 'small' },
    { type: 'image', src: '/landingpagepics/floodrelief.png', category: 'community', title: 'Flood Relief', size: 'standard' },
    { type: 'image', src: '/landingpagepics/COMBOpic.png', category: 'community', title: 'Community Support', size: 'wide' },
    { type: 'video', src: '/landingpagepics/spreadingsmiles.mp4', category: 'community', title: 'Spreading Smiles I', size: 'tall' },
    { type: 'video', src: '/landingpagepics/spreadingsmiles2.mp4', category: 'community', title: 'Spreading Smiles II', size: 'tall' },
    { type: 'video', src: '/landingpagepics/spreadingsmiles3.mp4', category: 'community', title: 'Spreading Smiles III', size: 'tall' },


    // Plantation
    { type: 'video', src: '/landingpagepics/plantation/plantationvideo.mp4', category: 'plantation', title: 'Green Pakistan Drive', size: 'large' },
    { type: 'image', src: '/landingpagepics/plantation/Plantation.png', category: 'plantation', title: 'Planting Hope', size: 'standard' },
    { type: 'image', src: '/landingpagepics/plantation/Plantation2.png', category: 'plantation', title: 'Community Action', size: 'standard' },
    { type: 'image', src: '/landingpagepics/plantation/plantation3.png', category: 'plantation', title: 'Future Generations', size: 'small' },
    { type: 'image', src: '/landingpagepics/plantation/plantation4.png', category: 'plantation', title: 'Towards Sustainability', size: 'small' },

    // Events & Talks (Thrift + Talkshow + Recap)
    { type: 'video', src: '/landingpagepics/Talkshow.mp4', category: 'events', title: 'MASF Talkshow', size: 'large' },
    { type: 'video', src: '/landingpagepics/2024recap.mp4', category: 'events', title: '2024 Year Recap', size: 'wide' },
    { type: 'video', src: '/landingpagepics/trift/triftdrive.mp4', thumb: '/landingpagepics/trift/trift.png', category: 'events', title: 'Thrift Drive', size: 'standard' },
    { type: 'video', src: '/landingpagepics/HeroSectionvideo.mp4', category: 'events', title: 'Our Volunteers', size: 'standard' },

];


const GalleryPage = () => {
    const [filter, setFilter] = useState('all');
    const [selectedMedia, setSelectedMedia] = useState(null);

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="min-h-screen pt-24 bg-[#fdf8f0] text-[#1a1612] font-jakarta">

            {/* Header */}
            <section className="relative px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold uppercase tracking-widest">
                        Visual Journey
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9]">
                        Captured <span className="text-[#d4af37]">Moments</span>
                    </h1>
                    <p className="text-xl text-[#1a1612]/70 leading-relaxed font-light max-w-2xl mx-auto">
                        Through the lens of compassion. Witness the impact of our collective efforts in healthcare, education, and social welfare.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${filter === cat.id
                                    ? 'bg-[#1a1612] text-[#d4af37] border-[#1a1612]'
                                    : 'bg-transparent text-[#1a1612]/60 border-[#1a1612]/20 hover:border-[#1a1612] hover:text-[#1a1612]'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 pb-32 max-w-[1600px] mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={idx} // Using index as simple key for static list, ideally use unique ID
                                className={`relative rounded-[32px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#d4af37]/10
                                    ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${item.size === 'wide' ? 'md:col-span-2' : ''}
                                    ${item.size === 'tall' ? 'md:row-span-2' : ''}
                                `}
                                onClick={() => setSelectedMedia(item)}
                            >
                                {item.type === 'video' ? (
                                    <div className="relative w-full h-full">
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            onMouseOver={e => e.currentTarget.play()}
                                            onMouseOut={e => e.currentTarget.pause()}
                                        />
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                            <Play size={16} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                            <ImageIcon size={16} className="text-white" />
                                        </div>
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1a1612]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-serif text-white italic">{item.title}</h3>
                                    <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{categories.find(c => c.id === item.category)?.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button
                            className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                            onClick={() => setSelectedMedia(null)}
                        >
                            <X size={24} />
                        </button>

                        <div className="relative w-full max-w-6xl max-h-[85vh] aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black" onClick={e => e.stopPropagation()}>
                            {selectedMedia.type === 'video' ? (
                                <video
                                    src={selectedMedia.src}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                />
                            ) : (
                                <img
                                    src={selectedMedia.src}
                                    alt={selectedMedia.title}
                                    className="w-full h-full object-contain"
                                />
                            )}
                            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-serif italic text-white">{selectedMedia.title}</h3>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default GalleryPage;
