"use client";

import React from 'react';
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
    },
    {
      title: "Fun Activities",
      desc: "Recreational events designed to bring joy to all ages.",
      icon: Smile
    },
    {
      title: "Community Development",
      desc: "Building stronger, more resilient communities together.",
      icon: Users
    },
    {
      title: "Counseling Services",
      desc: "Professional health and mental wellness support.",
      icon: MessageCircle
    },
    {
      title: "Study Guidelines",
      desc: "Expert guidance for USMLE, PLAB, and OET exams.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center overflow-x-hidden bg-[#fdf8f0]">

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Elements - Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Left Column: Hero Grid */}
        <motion.div variants={itemVariants} className="order-2 lg:order-1 w-full">
          <HeroGrid />
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div variants={itemVariants} className="order-1 lg:order-2 text-left space-y-8">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#d4af37]/20 text-[#d4af37] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Empowering Communities, One Life at a Time
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-9xl md:text-[12rem] lg:text-[16rem] font-serif font-medium text-[#1a1612] tracking-tighter leading-[0.8] italic"
          >
            MASF
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-sans font-bold gradient-text hover:text-[#1a1612] transition-colors duration-300"
          >
            Medical & <br /> Social Family
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#1a1612]/70 max-w-xl leading-relaxed font-sans"
          >
            A non-profit organization dedicated to holistic community welfare through healthcare, education, and social support. We build bridges to a better future.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button size="lg" className="bg-[#d4af37] text-white hover:bg-[#c5a059] text-lg h-14 px-8 rounded-2xl w-full sm:w-auto font-bold shadow-xl shadow-[#d4af37]/10 font-jakarta">
              Join Our Mission
            </Button>
            <Button size="lg" variant="outline" className="border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/10 text-lg h-14 px-8 rounded-2xl w-full sm:w-auto bg-transparent font-jakarta">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {[
          { label: "Community Members", value: "5,000+", icon: Users },
          { label: "Food Camps Held", value: "120+", icon: Utensils },
          { label: "Medical Aid Provided", value: "2,500+", icon: Stethoscope },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-3xl flex items-center justify-between group hover:bg-[#d4af37]/5 transition-colors duration-300 border border-[#d4af37]/10 bg-white/40">
            <div>
              <p className="text-[#1a1612]/60 font-medium mb-1 font-jakarta">{stat.label}</p>
              <h3 className="text-4xl font-serif text-[#d4af37] italic">{stat.value}</h3>
            </div>
            <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="text-[#d4af37] w-6 h-6" />
            </div>
          </div>
        ))}
      </motion.section>

      {/* Services Grid */}
      <section id="services" className="w-full max-w-7xl mx-auto mb-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-4xl md:text-6xl font-serif text-[#1a1612] italic">
              The MASF <br />
              Talkshow
            </h2>
            <p className="text-[#1a1612]/80 text-lg leading-relaxed font-jakarta">
              Exlusive interviews, study guidelines (USMLE, PLAB, OET), and mentorship for aspiring medical professionals.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#d4af37] text-white hover:bg-[#c5a059] rounded-2xl px-8 font-bold font-jakarta">
                Watch Now
              </Button>
              <Button size="lg" variant="outline" className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 rounded-2xl px-8 font-bold font-jakarta">
                View Archive
              </Button>
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

      {/* Footer CTA */}
      <footer className="w-full text-center py-20 border-t border-[#d4af37]/10">
        <h2 className="text-[12vw] font-serif italic text-[#d4af37]/10 leading-none select-none pointer-events-none">
          MASF FAMILY
        </h2>
        <div className="mt-[-6vw]">
          <p className="text-[#1a1612]/70 mb-8 text-lg opacity-80 font-jakarta">Be a part of something bigger.</p>
          <Button size="lg" className="bg-[#d4af37] text-white hover:bg-[#c5a059] rounded-full px-12 h-16 text-xl font-bold shadow-2xl font-jakarta">
            Donate & Support
          </Button>
        </div>
      </footer>
    </div>
  );
}
