'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Ship, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { faqData } from '@/data/maritimeData';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<'shipowners' | 'seafarers'>('shipowners');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = faqData[activeTab];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] text-white py-16 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 font-light"
          >
            Clear answers for international shipowners, charterers, and seafarers.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Category Tabs */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-10 max-w-md mx-auto shadow-inner">
          <button
            onClick={() => {
              setActiveTab('shipowners');
              setOpenIndex(0);
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'shipowners'
                ? 'bg-[#0A2540] text-white shadow-md'
                : 'text-gray-600 hover:text-[#0A2540]'
            }`}
          >
            <Ship className="w-4 h-4" />
            For Shipowners
          </button>
          <button
            onClick={() => {
              setActiveTab('seafarers');
              setOpenIndex(0);
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'seafarers'
                ? 'bg-[#0A2540] text-white shadow-md'
                : 'text-gray-600 hover:text-[#0A2540]'
            }`}
          >
            <Users className="w-4 h-4" />
            For Seafarers
          </button>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={index} layout>
                <Card
                  className={`p-6 border transition-all cursor-pointer ${
                    isOpen ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-[#0A2540] flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <div
                      className={`p-1.5 rounded-full bg-blue-50 text-blue-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-100 text-gray-600 text-sm leading-relaxed pl-8"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
