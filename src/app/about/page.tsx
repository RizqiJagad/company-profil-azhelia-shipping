'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Shield, Award, Heart, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const historyTimeline = [
  { year: '2015', title: 'Company Established', description: 'AZHELIA SHIPPING was founded in Jakarta with a vision to connect Indonesian seafarers with global shipping lines.' },
  { year: '2018', title: 'International Expansion', description: 'Established partnerships with major shipowners in Singapore, Japan, and Germany, expanding fleet coverage to chemical tankers and bulk carriers.' },
  { year: '2021', title: '500+ Seafarers Milestone', description: 'Deployed over 500 qualified seafarers internationally while maintaining a 100% STCW and MLC compliance record.' },
  { year: '2024', title: 'Digital Innovation', description: 'Launched our modern recruitment and crew management portal to streamline application, document auditing, and crew rotational scheduling.' },
];

const coreValues = [
  { icon: Shield, title: 'Integrity', desc: 'Ethical standards and transparency in every recruitment process and contract.' },
  { icon: Award, title: 'Excellence', desc: 'Continuous improvement mindset delivering top-tier seafarer quality.' },
  { icon: Heart, title: 'Responsibility', desc: 'Unwavering commitment to crew welfare, safety at sea, and family allotment care.' },
  { icon: Users, title: 'Professionalism', desc: 'Industry-leading service delivery conforming strictly to international maritime law.' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] text-white py-16 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            About AZHELIA SHIPPING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 font-light"
          >
            Our Story, Our Vision, and Our Commitment to Maritime Excellence
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-24">
        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-[#1E3A8A] p-8 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the premier, most trusted global maritime manning and crew management partner, recognized for exceptional seafarer quality, ethical standards, and uncompromised safety at sea.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-[#3B82F6] p-8 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver tailored crew management solutions for shipowners through rigorous selection, continuous training, and transparent communication, while providing seafarers with rewarding, safe international maritime careers.
              </p>
            </Card>
          </motion.div>
        </section>

        {/* History & Timeline */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-2">
              Milestones & Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540]">
              Our History of Progress
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E3A8A] to-[#3B82F6]" />

            <div className="space-y-12">
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <Card className="border border-gray-100 p-6 hover:shadow-xl">
                      <span className="text-sm font-black text-[#3B82F6] bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-[#0A2540] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </Card>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-white shadow-lg items-center justify-center" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-2">
              Principles We Live By
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
