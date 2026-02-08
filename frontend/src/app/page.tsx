"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Handshake,
  Stethoscope,
  Utensils,
  Lightbulb,
  Smile,
  Users,
  MessageCircle,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import HeroGrid from '@/components/HeroGrid';
import PlantationGrid from '@/components/PlantationGrid';
import ThriftDrive from '@/components/ThriftDrive';
import MedicalCamp from '@/components/MedicalCamp';
import Footer from '@/components/Footer';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const services = [
    {
      title: "Social Welfare",
      desc: "Providing basic needs and support to the underprivileged.",
      icon: Heart
    },
    {
      title: "NGO Support",
      desc: "Collaborating with other organizations to drive systemic change.",
      icon: Handshake
    },
    {
      title: "Health & Food Camps",
      desc: "Accessible healthcare screenings and nutritious food distribution.",
      icon: Stethoscope
    },
    {
      title: "Awareness Programs",
      desc: "Education and empowerment initiatives for community growth.",
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center overflow-x-hidden bg-[#fdf8f0]">

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full py-8 lg:py-24 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Elements - Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Text Content - First on mobile, second on desktop */}
        <motion.div variants={itemVariants} className="text-center space-y-6 lg:space-y-8 order-1 lg:order-2 w-full flex flex-col items-center">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#d4af37]/20 text-[#d4af37] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Empowering Communities, One Life at a Time
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-serif font-medium text-[#1a1612] tracking-tighter leading-[0.8] italic"
          >
            MASF
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold gradient-text hover:text-[#1a1612] transition-colors duration-300"
          >
            Medical & Social Family
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#1a1612]/70 max-w-xl leading-relaxed font-sans text-center"
          >
            A non-profit organization dedicated to holistic community welfare through healthcare, education, and social support. We build bridges to a better future.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link href="/get-involved" className="w-full sm:w-auto">
              <Button size="lg" className="bg-[#d4af37] text-white hover:bg-[#c5a059] text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-2xl w-full font-bold shadow-xl shadow-[#d4af37]/10 font-jakarta">
                Join Our Mission
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/10 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-2xl w-full bg-transparent font-jakarta">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Grid - Second on mobile, first on desktop */}
        <motion.div variants={itemVariants} className="order-2 lg:order-1 w-full">
          <HeroGrid />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Mobile: Creative Zigzag Layout */}
        <div className="md:hidden relative px-4 space-y-8">
          {[
            { label: "Community Members", value: "5,000+", icon: Users, color: "from-[#d4af37] to-[#c5a059]", position: "left" },
            { label: "Food Camps Held", value: "120+", icon: Utensils, color: "from-[#c5a059] to-[#b38f2d]", position: "right" },
            { label: "Medical Aid Provided", value: "2,500+", icon: Stethoscope, color: "from-[#b38f2d] to-[#d4af37]", position: "center" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: stat.position === "left" ? -50 : stat.position === "right" ? 50 : 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              className={`relative ${stat.position === "left" ? "mr-auto w-[85%]" :
                stat.position === "right" ? "ml-auto w-[85%]" :
                  "mx-auto w-[90%]"
                }`}
              style={{
                transform: stat.position === "left" ? "rotate(-2deg)" :
                  stat.position === "right" ? "rotate(2deg)" :
                    "rotate(0deg)"
              }}
            >
              <div className="glass-panel p-8 rounded-[28px] flex flex-col items-center text-center space-y-5 border-2 border-[#d4af37]/20 bg-white/60 shadow-xl overflow-hidden">
                {/* Background Gradient Blob */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-3xl`} />

                {/* Icon - Top */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-2xl blur-lg`} />
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="text-white w-7 h-7" />
                  </div>
                </div>

                {/* Number - Large */}
                <h3 className="text-5xl font-serif text-[#1a1612] italic font-bold relative z-10">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-[#1a1612]/70 font-jakarta font-semibold text-base tracking-wide relative z-10">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className={`w-12 h-1 bg-gradient-to-r ${stat.color} rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {[
            { label: "Community Members", value: "5,000+", icon: Users, color: "from-[#d4af37] to-[#c5a059]" },
            { label: "Food Camps Held", value: "120+", icon: Utensils, color: "from-[#c5a059] to-[#b38f2d]" },
            { label: "Medical Aid Provided", value: "2,500+", icon: Stethoscope, color: "from-[#b38f2d] to-[#d4af37]" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="glass-panel p-10 rounded-[32px] flex flex-col items-center text-center space-y-6 border border-[#d4af37]/20 bg-white/50 hover:bg-white/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient Blob */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Number - Large and Bold */}
                <motion.h3
                  className="text-6xl md:text-7xl font-serif text-[#1a1612] italic font-bold relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.h3>

                {/* Icon - Centered with Animated Background */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <stat.icon className="text-white w-8 h-8" />
                  </div>
                </div>

                {/* Label - Bottom */}
                <p className="text-[#1a1612]/70 font-jakarta font-semibold text-lg tracking-wide relative z-10">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-50 group-hover:w-24 group-hover:opacity-100 transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Grid */}
      <section id="services" className="w-full max-w-7xl mx-auto mb-32 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#1a1612] mb-6 italic">Our Initiatives</h2>
          <p className="text-[#1a1612]/60 text-lg max-w-2xl mx-auto font-jakarta">
            From medical education to recreational activities, we provide comprehensive support for a thriving society.
          </p>
        </motion.div>

        {/* Mobile: Creative Asymmetric Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`glass-panel p-6 rounded-[28px] border border-[#d4af37]/10 flex flex-col items-start bg-white/40 ${i === 0 ? 'col-span-2 min-h-[200px]' :
                i === 1 ? 'col-span-1 min-h-[240px]' :
                  i === 2 ? 'col-span-1 min-h-[240px]' :
                    'col-span-2 min-h-[180px]'
                }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={`w-12 h-12 bg-[#d4af37] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#d4af37]/20 ${i === 0 ? 'mb-6' : ''}`}>
                <service.icon className="text-white w-6 h-6" />
              </div>
              <h3 className={`font-bold text-[#1a1612] mb-2 font-jakarta ${i === 0 ? 'text-2xl mb-4' : 'text-lg'}`}>{service.title}</h3>
              <p className={`text-[#1a1612]/70 leading-relaxed font-jakarta ${i === 0 ? 'text-base' : 'text-sm'}`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 4-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-panel p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 border border-[#d4af37]/10 flex flex-col items-start bg-white/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#d4af37] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#d4af37]/20">
                <service.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1612] mb-3 font-jakarta">{service.title}</h3>
              <p className="text-[#1a1612]/70 leading-relaxed text-sm font-jakarta">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MASF Talkshow Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto glass-panel p-12 rounded-[48px] relative overflow-hidden mb-20 border border-[#d4af37]/20 bg-white/40"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#d4af37]/20 text-[#d4af37] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              Latest Episode
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1a1612] italic whitespace-nowrap">
              The MASF Talkshow
            </h2>
            <p className="text-[#1a1612]/80 text-lg leading-relaxed font-jakarta">
              Exlusive interviews, study guidelines (USMLE, PLAB, OET), and mentorship for aspiring medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/study-guidelines">
                <Button size="lg" className="bg-[#d4af37] text-white hover:bg-[#c5a059] rounded-2xl px-8 font-bold font-jakarta w-full sm:w-auto">
                  Watch Now
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 rounded-2xl px-8 font-bold font-jakarta w-full sm:w-auto">
                  View Archive
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full h-[300px] md:h-[400px] glass-panel rounded-3xl bg-black border border-[#d4af37]/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              <source src="/landingpagepics/Talkshow.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
      </motion.section>

      <PlantationGrid />

      <ThriftDrive />

      <MedicalCamp />

      {/* Footer CTA - Minimal & Clean */}
      <section className="w-full relative py-20 flex flex-col items-center justify-center text-center">
        <div className="relative z-10 max-w-full mx-auto px-6 space-y-8">
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-serif text-[#1a1612] italic leading-tight whitespace-nowrap">
            From Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b38f2d]">to Action.</span>
          </h2>

          <p className="text-xl text-[#1a1612]/70 font-jakarta max-w-xl mx-auto">
            Join us in building a healthier, more supportive community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/donate">
              <Button size="lg" className="bg-[#1a1612] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1612] rounded-full px-12 h-20 text-xl font-bold shadow-2xl transition-all duration-300 font-serif italic">
                Donate & Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
