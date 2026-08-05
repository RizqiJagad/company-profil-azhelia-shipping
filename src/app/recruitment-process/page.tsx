'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Search,
  Users,
  Activity,
  GraduationCap,
  Plane,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { recruitmentStepsData } from '@/data/maritimeData';

export default function RecruitmentProcessPage() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-7 h-7 text-[#071429]" />;
      case 'Search':
        return <Search className="w-7 h-7 text-[#071429]" />;
      case 'Users':
        return <Users className="w-7 h-7 text-[#071429]" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#071429]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[#071429]" />;
      case 'Plane':
        return <Plane className="w-7 h-7 text-[#071429]" />;
      default:
        return <FileText className="w-7 h-7 text-[#071429]" />;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF6EC]">
      {/* Header */}
      <section className="bg-[#071429] text-white py-16 mb-16 border-b border-[#E1B341]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-4 text-[#E1B341]"
          >
            TRANSPARENT RECRUITMENT JOURNEY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            Our 6-step recruitment pipeline guarantees complete compliance, quality assurance, and smooth vessel deployment.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-[#E1B341] via-[#F4C854] to-[#071429]" />

          <div className="space-y-10">
            {recruitmentStepsData.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start sm:items-center sm:pl-20"
              >
                {/* Step Circle Badge */}
                <div className="sm:absolute sm:left-0 w-16 h-16 bg-[#E1B341] rounded-2xl flex items-center justify-center shadow-xl text-[#071429] mb-4 sm:mb-0 flex-shrink-0 border-2 border-[#071429]">
                  {getStepIcon(item.iconName)}
                </div>

                {/* Content Card */}
                <Card className="w-full border-l-4 border-[#E1B341] bg-white border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-[#071429] bg-[#E1B341] px-3 py-1 rounded-full uppercase tracking-wider">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#071429] uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
