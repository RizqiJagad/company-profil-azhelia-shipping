'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  Ship,
  Shield,
  Award,
  ShieldCheck,
  Globe,
  Clock,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { statisticsData, whyChooseUsData, testimonialsData } from '@/data/maritimeData';

export default function HomePage() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const getStatIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-10 h-10 text-blue-300 mx-auto mb-3" />;
      case 'Ship':
        return <Ship className="w-10 h-10 text-blue-300 mx-auto mb-3" />;
      case 'Shield':
        return <Shield className="w-10 h-10 text-blue-300 mx-auto mb-3" />;
      case 'Award':
        return <Award className="w-10 h-10 text-blue-300 mx-auto mb-3" />;
      default:
        return <Award className="w-10 h-10 text-blue-300 mx-auto mb-3" />;
    }
  };

  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#1E3A8A]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#1E3A8A]" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-[#1E3A8A]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#1E3A8A]" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-[#1E3A8A]" />;
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#0A2540] overflow-hidden">
        {/* Parallax Overlay & Visual Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/60 to-[#0A2540] z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-40 transition-transform duration-1000"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80")',
          }}
        />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-sm font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              STCW 2010 & MLC 2006 Certified Maritime Agency
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Your Trusted Partner in <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                Maritime Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-2xl mb-10 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Connecting world-class seafarers with global maritime opportunities through integrity, speed, and uncompromised compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#0A2540]"
                >
                  View Career Opportunities
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Statistics Counter Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] text-white border-y border-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statisticsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10"
              >
                {getStatIcon(stat.iconName)}
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base text-blue-200 mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0A2540] mb-4">
              Why Industry Leaders Choose AZHELIA
            </h2>
            <p className="text-gray-600 text-lg">
              We bridge shipowners with highly skilled, rigorously tested crew members to ensure smooth, safe, and profitable voyages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-100 hover:border-blue-200 hover:shadow-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    {getWhyIcon(item.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Social Proof / Testimonial Carousel */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-2">
              Social Proof & Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540]">
              Trusted by Shipowners & Seafarers Worldwide
            </h2>
          </div>

          <div className="relative bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <Ship className="w-96 h-96 text-white" />
            </div>

            <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
              <p className="text-lg sm:text-2xl italic leading-relaxed text-blue-100 font-light mb-8">
                "{testimonialsData[activeTestimonialIndex].quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-blue-400/30">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonialsData[activeTestimonialIndex].author}
                  </h4>
                  <p className="text-sm text-blue-300">
                    {testimonialsData[activeTestimonialIndex].role} —{' '}
                    <span className="text-white font-medium">
                      {testimonialsData[activeTestimonialIndex].company}
                    </span>
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic CTA Conversion Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Ready to Set Sail with Us?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 font-light">
            Contact our crewing specialists today to discuss your vessel manning requirements or apply for top maritime careers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#1E3A8A] hover:bg-gray-100 shadow-xl w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
            <Link href="/download-profile">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E3A8A] w-full sm:w-auto">
                Download Company Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
