'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { teamMembersData } from '@/data/maritimeData';

export default function TeamPage() {
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
            Meet Our Leadership Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 font-light"
          >
            Seafaring veterans, Master Mariners, and compliance experts driving excellence across our global crewing operations.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembersData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-0 overflow-hidden border border-gray-100 group hover:shadow-2xl">
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-1">
                      AZHELIA EXECUTIVE
                    </span>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-xs text-blue-200 font-medium">{member.title}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Certified Auditor</span>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-gray-100 hover:bg-[#1E3A8A] hover:text-white text-gray-600 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-[#1E3A8A] hover:text-white text-gray-600 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
