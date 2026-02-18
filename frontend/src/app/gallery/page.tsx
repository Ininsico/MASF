"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Play, X, Image as ImageIcon, Film } from 'lucide-react';

// --- Assets Data ---
interface GalleryItem {
    type: string;
    src: string;
    thumb?: string;
    category: string;
    title: string;
    size: string;
}

const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'community', label: 'Community' },
    { id: 'plantation', label: 'Green Pakistan' },
    { id: 'events', label: 'Events & Talks' }
];

const galleryItems: GalleryItem[] = [
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
    const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="min-h-screen pt-20 bg-white text-slate-900 font-jakarta">

            {/* Header */}
            <section className="relative px-6 py-12 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="inline-block px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                        Visual Impact Archive
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                        Captured <span className="text-blue-600">Moments</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
                        Witness the tangible difference of our collective efforts in healthcare, education, and social welfare across Pakistan.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="mt-16 flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border-2 ${filter === cat.id
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20'
                                : 'bg-transparent text-slate-400 border-slate-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/30'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 pb-20 max-w-[1600px] mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[350px] gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                key={`${item.title}-${idx}`}
                                className={`relative rounded-[60px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 border-8 border-white bg-slate-50
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
                                            playsInline
                                            onMouseOver={e => e.currentTarget.play()}
                                            onMouseOut={e => e.currentTarget.pause()}
                                        />
                                        <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                                            <Play size={20} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                                            <ImageIcon size={20} className="text-white" />
                                        </div>
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{categories.find(c => c.id === item.category)?.label}</p>
                                    <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
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
                        className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button
                            className="absolute z-[110] top-4 right-4 md:top-10 md:right-10 w-10 h-10 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-500 group border border-white/10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMedia(null);
                            }}
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-500 md:w-8 md:h-8" />
                        </button>

                        <div className="relative w-full max-w-[1400px] max-h-[80vh] aspect-video rounded-[60px] overflow-hidden border-[12px] border-white/10 bg-slate-950 shadow-2xl" onClick={e => e.stopPropagation()}>
                            {selectedMedia.type === 'video' ? (
                                <video
                                    src={selectedMedia.src}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                />
                            ) : (
                                <Image
                                    src={selectedMedia.src}
                                    alt={selectedMedia.title}
                                    fill
                                    className="object-contain"
                                />
                            )}
                            <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 bg-gradient-to-t from-slate-900/90 to-transparent">
                                <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-3">Viewing Archive</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none">{selectedMedia.title}</h3>
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
