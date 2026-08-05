'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  UserCheck,
  FileText,
  Plane,
  Droplet,
  ArrowRight,
  Shield,
  Tag,
  Clock,
  Globe,
  CheckCircle2,
  Anchor,
  Ship,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { servicesData, ServiceItem } from '@/data/maritimeData';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isFuelModalOpen, setIsFuelModalOpen] = useState(false);

  const topServices = [
    {
      id: 'crew-recruitment',
      title: 'Crew Recruitment',
      description: 'Providing qualified seafarers for all types of vessels worldwide.',
      icon: Users,
      highlight: false,
    },
    {
      id: 'crew-management',
      title: 'Crew Management',
      description: 'Ensuring optimal crew performance, safety, and well-being on board.',
      icon: UserCheck,
      highlight: false,
    },
    {
      id: 'crew-documentation',
      title: 'Crew Documentation',
      description: 'Handling all documentation with accuracy and in compliance with regulations.',
      icon: FileText,
      highlight: false,
    },
    {
      id: 'crew-mobilization',
      title: 'Crew Mobilization',
      description: 'Efficient crew travel arrangements and mobilization services.',
      icon: Plane,
      highlight: false,
    },
    {
      id: 'marine-fuel-supply',
      title: 'Marine Fuel Supply',
      description: 'Reliable marine fuel supply services across Indonesian waters.',
      icon: Droplet,
      highlight: true,
    },
  ];

  const fuelTypes = [
    { name: 'Marine Fuel Oil', code: '(MFO)' },
    { name: 'Low Sulfur Marine Gas Oil', code: '(LSMGO)' },
    { name: 'High Speed Diesel', code: '(HSD)' },
  ];

  const fuelHighlights = [
    { title: 'Reliable Service', icon: Shield },
    { title: 'Competitive Pricing', icon: Tag },
    { title: 'Timely Delivery', icon: Clock },
    { title: 'High-Quality Fuel', icon: Droplet },
    { title: 'Coverage Across Indonesian Waters', icon: Globe },
  ];

  return (
    <div className="pt-20 bg-[#FAF6EC] min-h-screen">
      {/* 1. Hero Section (Header with Officers Background) */}
      <section className="relative bg-[#071429] text-white py-20 border-b border-[#E1B341]/30 overflow-hidden">
        {/* Background Image with Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gambar_5.jpg"
            alt="AZHELIA SHIPPING Services Operations"
            className="w-full h-full object-cover opacity-30 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071429] via-[#071429]/90 to-[#071429]/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4 tracking-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-200 max-w-2xl font-light leading-relaxed"
          >
            AZHELIA SHIPPING provides comprehensive maritime solutions to support shipowners and seafarers worldwide.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 space-y-12">
        {/* 2. Top 5 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {topServices.map((service, index) => {
            const Icon = service.icon;
            if (service.highlight) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsFuelModalOpen(true)}
                  className="cursor-pointer"
                >
                  <Card className="h-full p-6 bg-[#071429] text-white border border-[#E1B341] hover:border-[#F4C854] shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group rounded-2xl">
                    <div>
                      <div className="w-10 h-10 mb-6 text-[#E1B341] flex items-center justify-start">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-base font-bold text-[#E1B341] mb-2 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <ArrowRight className="w-4 h-4 text-[#E1B341] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </motion.div>
              );
            }

            // Standard Service Cards
            const matchedData = servicesData.find((s) => s.id === service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => {
                  if (matchedData) setSelectedService(matchedData);
                }}
                className="cursor-pointer"
              >
                <Card className="h-full p-6 bg-white border border-gray-200/80 hover:border-[#E1B341] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group rounded-2xl">
                  <div>
                    <div className="w-10 h-10 mb-6 text-[#071429] flex items-center justify-start">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-bold text-[#071429] mb-2 tracking-wide group-hover:text-[#E1B341] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E1B341] group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Additional Maritime Services Banner: Marine Fuel Supply Services */}
        <section className="bg-white rounded-3xl border border-[#E1B341]/30 overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left Content Side */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Category Tag */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#E1B341]/20 flex items-center justify-center">
                    <Droplet className="w-3.5 h-3.5 text-[#E1B341]" />
                  </div>
                  <span className="text-[#E1B341] font-extrabold text-[11px] uppercase tracking-widest">
                    ADDITIONAL MARITIME SERVICES
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#071429] mb-4">
                  Marine Fuel Supply Services
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  In addition to our shipping agency services, we also provide marine fuel supply through our trusted partners. Vessels operating or calling at ports and waters throughout Indonesia can conveniently arrange bunkering with us.
                </p>

                {/* We Supply Grid */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-[#071429] uppercase tracking-wider block mb-3">
                    We supply:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {fuelTypes.map((type, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/20 flex items-center gap-2.5"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#E1B341]/20 flex items-center justify-center flex-shrink-0">
                          <Droplet className="w-4 h-4 text-[#071429]" />
                        </div>
                        <div className="text-[11px]">
                          <span className="font-bold text-[#071429] block leading-tight">
                            {type.name}
                          </span>
                          <span className="text-gray-500 font-medium">{type.code}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Paragraph */}
                <p className="text-gray-600 text-xs leading-relaxed pt-2 border-t border-gray-100">
                  Our team is committed to providing reliable service, competitive pricing, timely delivery, and high-quality fuel to support your vessel's operations wherever you are in Indonesian waters.
                </p>
              </div>

              {/* Bunkering Action CTA */}
              <div className="pt-4">
                <a
                  href="https://wa.me/6281295904116"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071429] text-[#E1B341] hover:bg-[#122F5C] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <Droplet className="w-4 h-4 text-[#E1B341]" />
                  <span>Inquire Bunkering & Fuel Supply</span>
                </a>
              </div>
            </div>

            {/* Right Image Side with 5 Highlights Bar */}
            <div className="lg:col-span-6 relative flex flex-col justify-end min-h-[380px] bg-[#071429]">
              <img
                src="/gambar_1.jpg"
                alt="Marine Fuel Supply Bunkering Vessel"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071429] via-[#071429]/20 to-transparent" />

              {/* Bottom 5 Value Badges Bar */}
              <div className="relative z-10 bg-[#071429]/95 backdrop-blur-md p-4 sm:p-5 border-t border-[#E1B341]/30">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-white">
                  {fuelHighlights.map((item, idx) => {
                    const HIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 text-left">
                        <div className="w-7 h-7 rounded-lg bg-[#E1B341]/10 border border-[#E1B341]/40 flex items-center justify-center flex-shrink-0">
                          <HIcon className="w-3.5 h-3.5 text-[#E1B341]" />
                        </div>
                        <span className="text-[10px] font-bold leading-tight text-gray-200">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {selectedService.details}
            </p>

            <div className="bg-[#FAF6EC] p-6 rounded-2xl border border-[#E1B341]/30">
              <h4 className="font-bold text-[#071429] mb-3 uppercase text-xs tracking-wider">Key Features & Scope:</h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E1B341] mr-2.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center pt-4">
              <a
                href="https://wa.me/6281295904116"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E1B341] text-[#071429] text-xs font-extrabold uppercase tracking-wider hover:bg-[#F4C854] transition-colors"
              >
                Inquire via WhatsApp
              </a>
              <Button onClick={() => setSelectedService(null)} variant="outline" className="border-gray-300 text-gray-700">
                Close Details
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Marine Fuel Supply Modal */}
      {isFuelModalOpen && (
        <Modal
          isOpen={isFuelModalOpen}
          onClose={() => setIsFuelModalOpen(false)}
          title="Marine Fuel Supply Services"
        >
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-[#071429] text-white border border-[#E1B341]">
              <span className="text-[#E1B341] font-bold text-xs uppercase tracking-wider block mb-1">Bunkering Solutions</span>
              <h3 className="text-xl font-bold text-white mb-2">Marine Fuel Supply Across Indonesia</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                In addition to our shipping agency services, we provide marine fuel supply through our trusted partners. Vessels operating or calling at ports and waters throughout Indonesia can conveniently arrange bunkering with us.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#071429] text-sm uppercase tracking-wider mb-3">Fuel Grades Available:</h4>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/20 flex items-center justify-between text-xs font-bold text-[#071429]">
                  <span>Marine Fuel Oil (MFO)</span>
                  <span className="text-[#E1B341] bg-[#071429] px-2 py-0.5 rounded">High Quality</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/20 flex items-center justify-between text-xs font-bold text-[#071429]">
                  <span>Low Sulfur Marine Gas Oil (LSMGO)</span>
                  <span className="text-[#E1B341] bg-[#071429] px-2 py-0.5 rounded">Low Sulfur</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/20 flex items-center justify-between text-xs font-bold text-[#071429]">
                  <span>High Speed Diesel (HSD)</span>
                  <span className="text-[#E1B341] bg-[#071429] px-2 py-0.5 rounded">Standard HSD</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/6281295904116"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E1B341] text-[#071429] text-xs font-extrabold uppercase tracking-wider hover:bg-[#F4C854] transition-colors"
              >
                Inquire Fuel Bunkering Now
              </a>
              <Button onClick={() => setIsFuelModalOpen(false)} variant="outline" className="border-gray-300 text-gray-700">
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
