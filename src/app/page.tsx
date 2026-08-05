'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Ship,
  ShieldCheck,
  Globe,
  Clock,
  Compass,
  ArrowRight,
  CheckCircle2,
  Check,
  Search,
  Award,
  Users,
  Shield,
  FileCheck,
  Plane,
  GraduationCap,
  UserPlus,
  Droplet,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  whyChooseUsData,
  servicesData,
  companyValuesData,
  companyCommitment,
} from '@/data/maritimeData';

export default function HomePage() {
  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#E1B341]" />;
      case 'Search':
        return <Search className="w-8 h-8 text-[#E1B341]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#E1B341]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#E1B341]" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-[#E1B341]" />;
      case 'Users':
        return <Users className="w-8 h-8 text-[#E1B341]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#E1B341]" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-[#E1B341]" />;
    }
  };

  const getValueIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#E1B341]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#E1B341]" />;
      case 'Shield':
        return <Shield className="w-8 h-8 text-[#E1B341]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-8 h-8 text-[#E1B341]" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-[#E1B341]" />;
    }
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'UserPlus':
        return <UserPlus className="w-7 h-7 text-[#E1B341]" />;
      case 'Users':
        return <Users className="w-7 h-7 text-[#E1B341]" />;
      case 'FileCheck':
        return <FileCheck className="w-7 h-7 text-[#E1B341]" />;
      case 'Ship':
        return <Ship className="w-7 h-7 text-[#E1B341]" />;
      case 'Plane':
        return <Plane className="w-7 h-7 text-[#E1B341]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[#E1B341]" />;
      case 'Droplet':
        return <Droplet className="w-7 h-7 text-[#E1B341]" />;
      default:
        return <Ship className="w-7 h-7 text-[#E1B341]" />;
    }
  };

  return (
    <div className="overflow-hidden bg-[#FAF6EC]">
      {/* 1. Hero Section (Deep Navy #071429) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#071429] overflow-hidden">
        {/* Visual Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071429]/90 via-[#071429]/75 to-[#071429] z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-40 transition-transform duration-1000"
          style={{
            backgroundImage: 'url("/gambar_5.jpg")',
          }}
        />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span
              suppressHydrationWarning
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1B341]/10 border border-[#E1B341]/40 text-[#E1B341] text-xs font-bold tracking-widest uppercase mb-6"
            >
              <CheckCircle2 className="w-4 h-4 text-[#E1B341]" />
              Your Trusted Maritime Partner
            </span> */}

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
              Your Trusted Partner in <br />
              <span className="text-[#E1B341]">
                Maritime Crew Excellence
              </span>
            </h1>

            <p className="text-base sm:text-xl mb-10 text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              AZHELIA SHIPPING is an international maritime recruitment and crew management company established to provide qualified, competent, and reliable seafarers for global shipping companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services">
                <Button size="lg" variant="primary" className="bg-[#E1B341] text-[#071429] hover:bg-[#F4C854] w-full sm:w-auto">
                  EXPLORE OUR SERVICES
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#E1B341] text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429]"
                >
                  VIEW CAREER OPPORTUNITIES
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Choose Us Section (7 Strengths from PDF) */}
      <section className="py-20 bg-[#FAF6EC] border-b border-[#E1B341]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071429]">
              WHY CHOOSE US
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-center p-6 rounded-2xl bg-white border border-[#E1B341]/20 shadow-sm hover:shadow-xl hover:border-[#E1B341] transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-[#FAF6EC] rounded-2xl flex items-center justify-center mb-4 border border-[#E1B341]/30">
                  {getWhyIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-extrabold text-[#071429] mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section Preview (PDF Introduction Content) */}
      <section className="py-24 bg-[#FAF6EC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block">
                INTRODUCTION & OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#071429] leading-tight">
                ABOUT AZHELIA SHIPPING
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Our primary objective is to connect skilled maritime professionals with international shipowners through a transparent, efficient, and professional recruitment process.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                We believe that every successful voyage begins with a highly qualified crew. With a strong commitment to integrity, safety, and service excellence, AZHELIA SHIPPING strives to become a trusted partner for shipowners while creating valuable career opportunities for seafarers worldwide.
              </p>
              <div className="pt-2">
                <Link href="/about">
                  <Button variant="navy" size="md">
                    LEARN MORE ABOUT US
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image with Gold Offset Frame */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#E1B341] translate-x-3 translate-y-3 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 border border-[#E1B341]/30">
                <img
                  src="/gambar_1.jpg"
                  alt="AZHELIA Vessel Operations"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section: Compact Horizontal Process Diagram (Unified Colors & Fit to Viewport) */}
      <section className="py-16 bg-[#FAF6EC] border-t border-[#E1B341]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-1">
              End-to-End Maritime Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071429] mb-2">
              OUR SERVICE FLOW
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mb-3" />
            <p className="text-gray-600 text-xs sm:text-sm">
              Sequential workflow connecting crewing recruitment, management, documentation, placement, mobilization, consultancy, and bunkering.
            </p>
          </div>

          {/* Services Grid (Spacious Cards, No Numbers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {servicesData.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group"
                >
                  <Card className="h-full p-6 bg-white border border-[#E1B341]/30 hover:border-[#E1B341] shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between">
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/40 flex items-center justify-center mb-5">
                        {getServiceIcon(service.iconName)}
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-[#071429] uppercase tracking-wide mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features Checklist */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600 gap-2 leading-tight">
                            <Check className="w-4 h-4 text-[#E1B341] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Action Link */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-xs font-bold text-[#E1B341] hover:text-[#071429] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        <span>Learn Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Company Values Section (from PDF Page 6) */}
      <section className="py-24 bg-white border-t border-[#E1B341]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
              Principles We Live By
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071429] mb-3">
              COMPANY VALUES
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValuesData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/30 hover:border-[#E1B341] hover:shadow-xl transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-white border border-[#E1B341] rounded-2xl flex items-center justify-center">
                    {getValueIcon(value.iconName)}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#071429] mb-3 uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Commitment Section (from PDF Page 7) */}
      <section className="py-20 bg-[#071429] text-white border-t border-[#E1B341]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-3">
            Building Long-Term Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-6 text-white uppercase tracking-wide">
            OUR COMMITMENT
          </h2>
          <p className="text-base sm:text-xl italic leading-relaxed text-gray-200 font-light mb-10 bg-white/5 p-8 rounded-3xl border border-[#E1B341]/30">
            "{companyCommitment}"
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-[#E1B341] text-[#071429] hover:bg-[#F4C854] w-full sm:w-auto">
                CONTACT OUR TEAM
              </Button>
            </Link>
            <a href="/company-profile.pdf" download="AZHELIA_SHIPPING_Company_Profile.pdf">
              <Button size="lg" variant="outline" className="border-[#E1B341] text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429] w-full sm:w-auto">
                DOWNLOAD COMPANY PROFILE
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
