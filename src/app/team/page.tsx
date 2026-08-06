'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MessageCircle, ShieldCheck, Briefcase, Award, Send, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function TeamPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const leadershipMembers = [
    {
      role: 'Managing Director',
      name: 'Andhyka Payoh, A.Md., ATT II',
      description: "Leads the company's vision, strategic planning, business development, and overall operations.",
      whatsapp: [
        { label: '+34 677 12 92 17', url: 'https://wa.me/34677129217' },
        { label: '+62 812-9590-4116', url: 'https://wa.me/6281295904116' },
      ],
      badge: 'Executive Director',
    },
    {
      role: 'Commissioner',
      name: 'Lois Amora Bakris Br. Tarigan, A.Md.',
      description: 'Provides strategic oversight, corporate governance, and business advisory.',
      whatsapp: [{ label: '+62 822-4911-6124', url: 'https://wa.me/6282249116124' }],
      badge: 'Board of Commissioners',
    },
  ];

  const financeManager = {
    role: 'Finance Manager',
    name: 'Elviona Thresia, S.Ak.',
    description: 'Responsible for financial planning, accounting, budgeting, payroll, financial reporting, and ensuring compliance with financial regulations.',
    badge: 'Finance & Compliance',
  };

  const crewingHead = {
    role: 'Head of Crewing',
    name: 'Tedy Bagus Erwanda',
    description: 'Oversees crew recruitment, deployment, certification, compliance, and overall crewing operations.',
    whatsapp: [{ label: '+62 895-8008-45080', url: 'https://wa.me/62895800845080' }],
    badge: 'Operations Head',
  };

  const crewingOfficers = [
    {
      role: 'Crewing Officer',
      name: 'Natalia Anzelina Gultom, A.Md.',
      description: 'Responsible for crew recruitment, documentation, certification, scheduling, and crew administration.',
      whatsapp: [{ label: '+62 852-8607-8874', url: 'https://wa.me/6285286078874' }],
    },
    {
      role: 'Crewing Officer',
      name: 'Sanny Azzam Mubasyir, S.Tr.Kom',
      description: 'Responsible for crew scheduling, documentation, travel arrangements, and personnel administration.',
      whatsapp: [{ label: '+62 856-9442-1820', url: 'https://wa.me/6285694421820' }],
    },
    {
      role: 'Crewing Officer',
      name: 'Rahayu, S.Tr.Tra',
      description: 'Responsible for crew scheduling, documentation, travel arrangements, and personnel administration.',
      whatsapp: [{ label: '+62 895-1325-0873', url: 'https://wa.me/6289513250873' }],
    },
  ];

  const getInitials = (name: string) => {
    const cleanName = name.split(',')[0].replace(/(Capt\.|Mr\.|Mrs\.|Ms\.)/gi, '').trim();
    const parts = cleanName.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return cleanName.slice(0, 2).toUpperCase();
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF6EC]">
      {/* Header */}
      <section className="bg-[#071429] text-white py-16 mb-16 border-b border-[#E1B341]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1B341]/10 border border-[#E1B341]/40 text-[#E1B341] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#E1B341]" />
            Corporate Governance & Operations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-4 text-[#E1B341]"
          >
            LEADERSHIP & CREWING TEAM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            Dedicated maritime professionals managing vision, crewing operations, seafarer deployment, and corporate governance.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16">
        {/* 1. Executive Leadership */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#E1B341] font-bold tracking-widest text-xs uppercase block mb-1">
              Executive Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071429] uppercase">
              Leadership Team
            </h2>
            <div className="w-12 h-1 bg-[#E1B341] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-l-4 border-[#E1B341] p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-black text-[#071429] bg-[#E1B341] px-3 py-1 rounded-full uppercase tracking-wider">
                        {member.role}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#071429] text-[#E1B341] border border-[#E1B341] flex items-center justify-center font-black text-lg shadow-sm">
                        {getInitials(member.name)}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#071429] mb-3">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {member.description}
                    </p>
                  </div>

                  {member.whatsapp && (
                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <span className="text-xs font-bold text-[#E1B341] uppercase tracking-wider block">
                        Direct WhatsApp Contact:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {member.whatsapp.map((wa, idx) => (
                          <a
                            key={idx}
                            href={wa.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF6EC] border border-[#E1B341]/40 text-xs font-bold text-[#071429] hover:bg-[#E1B341] transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span>{wa.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Finance Manager (Moved Above Head of Crewing) */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#E1B341] font-bold tracking-widest text-xs uppercase block mb-1">
              Financial Planning & Payroll Accounting
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071429] uppercase">
              Finance Manager
            </h2>
            <div className="w-12 h-1 bg-[#E1B341] mx-auto rounded-full mt-2" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-l-4 border-[#071429] p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-black text-[#071429] bg-[#E1B341] px-3 py-1 rounded-full uppercase tracking-wider">
                  {financeManager.role}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#071429] text-[#E1B341] border border-[#E1B341] flex items-center justify-center font-black text-lg shadow-sm">
                  {getInitials(financeManager.name)}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#071429] mb-3">
                {financeManager.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {financeManager.description}
              </p>
            </Card>
          </motion.div>
        </section>

        {/* 3. Head of Crewing */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#E1B341] font-bold tracking-widest text-xs uppercase block mb-1">
              Crewing Management & Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071429] uppercase">
              Head of Crewing
            </h2>
            <div className="w-12 h-1 bg-[#E1B341] mx-auto rounded-full mt-2" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-t-4 border-[#071429] p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-black text-[#E1B341] bg-[#071429] px-3 py-1 rounded-full uppercase tracking-wider border border-[#E1B341]/40">
                  {crewingHead.role}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#E1B341] text-[#071429] flex items-center justify-center font-black text-lg shadow-sm">
                  {getInitials(crewingHead.name)}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#071429] mb-3">
                {crewingHead.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {crewingHead.description}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-[#E1B341] uppercase tracking-wider block mb-2">
                  Direct WhatsApp Contact:
                </span>
                <div className="flex flex-wrap gap-2">
                  {crewingHead.whatsapp.map((wa, idx) => (
                    <a
                      key={idx}
                      href={wa.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FAF6EC] border border-[#E1B341]/40 text-xs font-bold text-[#071429] hover:bg-[#E1B341] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span>{wa.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* 4. Crewing Officers */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#E1B341] font-bold tracking-widest text-xs uppercase block mb-1">
              Recruitment, Documentation & Deployment
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071429] uppercase">
              Crewing Officers
            </h2>
            <div className="w-12 h-1 bg-[#E1B341] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {crewingOfficers.map((officer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-[#E1B341]/30 p-6 bg-white shadow-sm hover:shadow-xl hover:border-[#E1B341] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF6EC] text-[#071429] border border-[#E1B341]/40 flex items-center justify-center font-black text-sm">
                        {getInitials(officer.name)}
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md uppercase">
                        {officer.role}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#071429] mb-2">
                      {officer.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {officer.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    {officer.whatsapp.map((wa, idx) => (
                      <a
                        key={idx}
                        href={wa.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF6EC] border border-[#E1B341]/30 text-xs font-bold text-[#071429] hover:bg-[#E1B341] transition-colors w-full justify-center"
                      >
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span>{wa.label}</span>
                      </a>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. "SEND US A MESSAGE" Form Section */}
        <section className="pt-10">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 sm:p-10 border border-[#E1B341]/40 shadow-2xl bg-white rounded-3xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#E1B341]/20 text-[#071429] rounded-full flex items-center justify-center mx-auto border border-[#E1B341]">
                    <CheckCircle2 className="w-10 h-10 text-[#E1B341]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#071429]">MESSAGE SENT SUCCESSFULLY!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. A representative from our team will review your message and respond shortly.
                  </p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)} className="border-[#071429] text-[#071429]">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-1">
                      Direct Contact Desk
                    </span>
                    <h3 className="text-3xl font-black text-[#071429] uppercase tracking-wide">
                      SEND US A MESSAGE
                    </h3>
                    <div className="w-12 h-1 bg-[#E1B341] mx-auto rounded-full mt-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Capt. John Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@shipping.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812-xxxx-xxxx"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        SUBJECT *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Crew Management Inquiry"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vessel staffing or career inquiry..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full bg-[#E1B341] text-[#071429] hover:bg-[#F4C854] font-black text-sm uppercase tracking-wider py-4">
                    <Send className="w-4 h-4 mr-2" />
                    SEND MESSAGE
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
