'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { companyValuesData } from '@/data/maritimeData';

const missionPoints = [
  'To recruit and provide highly qualified seafarers for international vessels.',
  'To ensure every recruitment process is transparent, ethical, and efficient.',
  'To build long-term partnerships with shipowners and maritime companies worldwide.',
  'To support seafarers in developing successful international careers.',
  'To maintain the highest standards of quality, safety, and professionalism.',
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAF6EC]">
      {/* Page Header */}
      <section className="bg-[#071429] text-white py-16 mb-16 border-b border-[#E1B341]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-4 text-[#E1B341]"
          >
            ABOUT AZHELIA SHIPPING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            International Crew Management & Recruitment
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-24">
        {/* Introduction Overview */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1B341]/30 shadow-md">
          <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
            COMPANY INTRODUCTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071429] mb-6 uppercase">
            WHO WE ARE
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
            AZHELIA SHIPPING is an international maritime recruitment and crew management company established to provide qualified, competent, and reliable seafarers for global shipping companies.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our primary objective is to connect skilled maritime professionals with international shipowners through a transparent, efficient, and professional recruitment process. We believe that every successful voyage begins with a highly qualified crew. With a strong commitment to integrity, safety, and service excellence, AZHELIA SHIPPING strives to become a trusted partner for shipowners while creating valuable career opportunities for seafarers worldwide.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-[#E1B341] p-8 shadow-lg bg-white">
              <div className="w-14 h-14 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/40 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#E1B341]" />
              </div>
              <h3 className="text-2xl font-bold text-[#071429] mb-4 uppercase tracking-wide">OUR VISION</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                To become one of the most trusted international maritime recruitment companies, recognized for professionalism, quality, and commitment to excellence in the global shipping industry.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-[#071429] p-8 shadow-lg bg-white">
              <div className="w-14 h-14 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/40 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#E1B341]" />
              </div>
              <h3 className="text-2xl font-bold text-[#071429] mb-4 uppercase tracking-wide">OUR MISSION</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E1B341] flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </section>

        {/* Company Values */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
              Principles We Live By
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071429] uppercase">
              COMPANY VALUES
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValuesData.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-6 rounded-2xl border border-[#E1B341]/30 shadow-sm hover:shadow-xl hover:border-[#E1B341] transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-extrabold text-[#071429] mb-3 uppercase tracking-wide">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
