'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, CheckCircle } from 'lucide-react';
import { vesselTypesData } from '@/data/maritimeData';

export default function VesselTypesPage() {
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
            VESSEL TYPES COVERED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            Providing highly specialized, STCW-certified crews across various international commercial vessel types.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vesselTypesData.map((vessel, index) => (
            <motion.div
              key={vessel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#E1B341]/30 bg-white flex flex-col justify-between"
            >
              {/* Vessel Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vessel.image}
                  alt={vessel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071429] via-[#071429]/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-[#E1B341] text-[#071429] text-xs font-black px-3 py-1 rounded-full shadow tracking-wider uppercase">
                  Certified Crew
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1 text-white">{vessel.name}</h3>
                  <p className="text-xs text-[#E1B341] font-medium flex items-center gap-1">
                    <Anchor className="w-3.5 h-3.5 text-[#E1B341]" />
                    {vessel.specs}
                  </p>
                </div>
              </div>

              {/* Vessel Info */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {vessel.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#071429] bg-[#FAF6EC] p-2.5 rounded-xl border border-[#E1B341]/30">
                  <CheckCircle className="w-4 h-4 text-[#E1B341] flex-shrink-0" />
                  <span>Full Officer & Rating Complement</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
