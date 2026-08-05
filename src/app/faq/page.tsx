'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { faqData } from '@/data/maritimeData';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            FREQUENTLY ASKED QUESTIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            Answers to common questions regarding recruitment, requirements, documents, and application status.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={index} layout>
                <Card
                  className={`p-6 border transition-all cursor-pointer bg-white ${
                    isOpen ? 'border-[#E1B341] shadow-md' : 'border-gray-200 hover:border-[#E1B341]/50'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-[#071429] flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#E1B341] flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <div
                      className={`p-1.5 rounded-full bg-[#FAF6EC] text-[#071429] border border-[#E1B341]/30 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#E1B341] text-[#071429]' : ''
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
                      className="mt-4 pt-4 border-t border-gray-100 text-gray-700 text-sm leading-relaxed pl-8"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Box */}
        <div className="mt-16 bg-white p-8 rounded-3xl border border-[#E1B341]/40 shadow-lg text-center">
          <h3 className="text-2xl font-black text-[#071429] mb-2 uppercase">
            Have More Questions?
          </h3>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Contact our Crewing Team via WhatsApp directly for any additional questions or assistance with your application.
          </p>
          <a href="https://wa.me/6281295904116" target="_blank" rel="noreferrer">
            <Button variant="primary" size="lg" className="bg-[#E1B341] text-[#071429] hover:bg-[#F4C854]">
              <MessageCircle className="w-5 h-5 mr-2 text-[#071429]" />
              Contact Crewing Team via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
