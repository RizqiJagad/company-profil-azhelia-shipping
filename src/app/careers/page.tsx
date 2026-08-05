'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Ship,
  Anchor,
  UserCheck,
  MessageCircle,
  Upload,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export default function CareersPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    department: 'Deck Department',
    position: 'Master',
    vesselExperience: '',
    fileName: '',
  });

  const recruitmentRequirements = [
    'Minimum 2 years of experience on foreign-going vessels.',
    'Valid Passport and Seaman Book.',
    'Valid STCW Certificates.',
    'Valid Medical Certificate.',
    'Valid COC/COP (if applicable).',
    'All certificates and documents must have at least 12 months validity.',
    'Fluent in English.',
    'Good knowledge of onboard operations and safety procedures.',
    'Physically and mentally fit for sea service.',
  ];

  const requiredDocuments = [
    'Updated CV',
    'Passport',
    'Seaman Book',
    'STCW Certificates',
    'Medical Certificate',
    'COC/COP (if applicable)',
    'Sea Service Record',
    'Recent Passport-size Photo',
  ];

  const recruitmentProcessSteps = [
    { step: 1, title: 'Submit your application' },
    { step: 2, title: 'Profile review by the Crewing Team' },
    { step: 3, title: 'Document verification' },
    { step: 4, title: 'Interview (if required)' },
    { step: 5, title: 'Client approval' },
    { step: 6, title: 'Medical examination' },
    { step: 7, title: 'Crew mobilization' },
  ];

  const availablePositions = [
    {
      department: 'Deck Department',
      positions: [
        'Master',
        'Chief Officer',
        'Second Officer',
        'Third Officer',
        'Bosun',
        'Able Seaman (AB)',
        'Ordinary Seaman (OS)',
      ],
    },
    {
      department: 'Engine Department',
      positions: [
        'Chief Engineer',
        'Second Engineer',
        'Third Engineer',
        'Fourth Engineer',
        'Motorman',
        'Oiler',
        'Wiper',
      ],
    },
    {
      department: 'Catering Department',
      positions: ['Chief Cook', 'Cook', 'Messman'],
    },
  ];

  const vesselTypes = [
    'Chemical Tanker',
    'Product Tanker',
    'Crude Oil Tanker',
    'VLCC',
    'Bulk Carrier',
    'General Cargo',
    'Container Vessel',
    'Offshore Support Vessel (OSV)',
    'Tugboat',
    'LNG Carrier',
    'LPG Carrier',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeApplyModal = () => {
    setIsApplyModalOpen(false);
    setCurrentStep(1);
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      department: 'Deck Department',
      position: 'Master',
      vesselExperience: '',
      fileName: '',
    });
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF6EC]">
      {/* 1. Hero Section */}
      <section className="bg-[#071429] text-white py-20 mb-16 border-b border-[#E1B341]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          {/* <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1B341]/10 border border-[#E1B341]/40 text-[#E1B341] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Anchor className="w-4 h-4 text-[#E1B341]" />
            Career Opportunities
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black mb-6 text-white leading-tight"
          >
            Build Your Maritime Career With <br />
            <span className="text-[#E1B341]">AZHELIA SHIPPING</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Join our growing network of professional seafarers and explore international career opportunities with reputable shipowners.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-[#E1B341] text-[#071429] hover:bg-[#F4C854] w-full sm:w-auto"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="https://wa.me/6281295904116"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#E1B341] text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429]"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                Contact Crewing Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-20">
        {/* 2. Recruitment Requirements & 3. Required Documents */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* 2. Recruitment Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-[#E1B341] p-8 bg-white shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/40 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#E1B341]" />
                </div>
                <div>
                  <span className="text-[#E1B341] font-bold text-xs uppercase tracking-wider block">Qualification Standards</span>
                  <h2 className="text-2xl font-black text-[#071429] uppercase">Recruitment Requirements</h2>
                </div>
              </div>

              <ul className="space-y-3">
                {recruitmentRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#E1B341] flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* 3. Required Documents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-[#071429] p-8 bg-white shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/40 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-[#E1B341]" />
                </div>
                <div>
                  <span className="text-[#E1B341] font-bold text-xs uppercase tracking-wider block">Application File Checklist</span>
                  <h2 className="text-2xl font-black text-[#071429] uppercase">Required Documents</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF6EC] border border-[#E1B341]/20 flex items-center gap-3 text-sm font-bold text-[#071429]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E1B341] flex-shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* 4. Recruitment Process */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1B341]/30 shadow-md">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
              7-Step Evaluation Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071429] uppercase">
              Recruitment Process
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentProcessSteps.map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.08 }}
                className="p-6 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/30 hover:border-[#E1B341] transition-all relative flex flex-col justify-between"
              >
                <span className="w-10 h-10 rounded-full bg-[#071429] text-[#E1B341] border border-[#E1B341] flex items-center justify-center font-black text-sm mb-4">
                  {item.step}
                </span>
                <h3 className="font-extrabold text-[#071429] text-base leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Available Positions */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
              Deck, Engine & Catering
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071429] uppercase">
              Available Positions
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {availablePositions.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-t-4 border-[#E1B341] p-6 bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-[#FAF6EC] border border-[#E1B341]/40 rounded-xl flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-[#E1B341]" />
                  </div>
                  <h3 className="text-xl font-black text-[#071429] uppercase mb-4 tracking-wide border-b border-gray-100 pb-3">
                    {dept.department}
                  </h3>
                  <ul className="space-y-2.5">
                    {dept.positions.map((pos, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#E1B341] flex-shrink-0" />
                        <span>{pos}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Vessel Types */}
        <section className="bg-[#071429] text-white p-8 sm:p-12 rounded-3xl border border-[#E1B341]/30">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
              International Fleet Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Vessel Types
            </h2>
            <div className="w-16 h-1 bg-[#E1B341] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {vesselTypes.map((vessel, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-[#E1B341]/30 hover:border-[#E1B341] text-center flex items-center justify-center gap-2.5 transition-all"
              >
                <Ship className="w-4 h-4 text-[#E1B341] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-gray-200">{vessel}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Apply for a Position */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1B341]/40 shadow-xl text-center max-w-4xl mx-auto">
          <span className="text-[#E1B341] font-extrabold tracking-widest text-xs uppercase block mb-2">
            DIRECT CREWING CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071429] mb-4 uppercase">
            Apply for a Position
          </h2>
          <h3 className="text-xl font-bold text-[#E1B341] mb-4">
            Interested in joining our team?
          </h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Please contact our Crewing Team through the Teams page via WhatsApp. Our Crewing Team will review your profile and contact you when a suitable vacancy matching your qualifications and experience becomes available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281295904116"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="primary" className="bg-[#E1B341] text-[#071429] hover:bg-[#F4C854] w-full">
                <MessageCircle className="w-5 h-5 mr-2 text-[#071429]" />
                Contact Crewing Team
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsApplyModalOpen(true)}
              className="border-[#071429] text-[#071429] hover:bg-[#071429] hover:text-[#E1B341] w-full sm:w-auto"
            >
              Submit Application Online
            </Button>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={closeApplyModal}
          title="Online Seafarer Application"
          maxWidth="3xl"
        >
          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#E1B341]/20 text-[#071429] border border-[#E1B341] rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-10 h-10 text-[#E1B341]" />
              </div>
              <h3 className="text-2xl font-bold text-[#071429]">Application Submitted!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our Crewing Team will review your application for <strong>{formData.position}</strong> ({formData.department}) and contact you shortly.
              </p>
              <Button variant="primary" onClick={closeApplyModal} className="mt-4 bg-[#E1B341] text-[#071429]">
                Done & Close
              </Button>
            </div>
          ) : (
            <div>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                        currentStep === step
                          ? 'bg-[#E1B341] text-[#071429] shadow-md border-2 border-[#071429]'
                          : currentStep > step
                          ? 'bg-[#071429] text-[#E1B341]'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {currentStep > step ? '✓' : step}
                    </div>
                    <span
                      className={`hidden sm:inline text-xs font-bold uppercase tracking-wider ${
                        currentStep === step ? 'text-[#071429]' : 'text-gray-400'
                      }`}
                    >
                      {step === 1 ? 'Personal Details' : step === 2 ? 'Target Position' : 'Upload Documents'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name as in Passport"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+62 812-9590-4116"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                          Department *
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white font-medium"
                        >
                          <option value="Deck Department">Deck Department</option>
                          <option value="Engine Department">Engine Department</option>
                          <option value="Catering Department">Catering Department</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                          Target Position *
                        </label>
                        <input
                          type="text"
                          name="position"
                          required
                          value={formData.position}
                          onChange={handleInputChange}
                          placeholder="e.g. Master, Chief Engineer, AB"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Sea Service Experience (Years) *
                      </label>
                      <input
                        type="text"
                        name="vesselExperience"
                        required
                        value={formData.vesselExperience}
                        onChange={handleInputChange}
                        placeholder="e.g. 3 years on Chemical Tankers"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-[#E1B341] p-8 rounded-2xl text-center bg-white hover:bg-gray-50 transition-colors">
                      <Upload className="w-10 h-10 text-[#E1B341] mx-auto mb-2" />
                      <p className="text-sm font-bold text-[#071429] mb-1 uppercase tracking-wide">
                        Upload Updated CV & Certificates (PDF)
                      </p>
                      <p className="text-xs text-gray-500 mb-4">Max file size: 10 MB</p>

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label htmlFor="cv-upload">
                        <span className="inline-flex items-center px-5 py-2.5 rounded-xl bg-[#071429] text-[#E1B341] text-xs font-bold cursor-pointer hover:bg-[#E1B341] hover:text-[#071429] transition-colors uppercase tracking-wider">
                          Select PDF File
                        </span>
                      </label>

                      {formData.fileName && (
                        <p className="text-xs font-bold text-green-700 mt-3">
                          Selected File: {formData.fileName}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Modal Action Buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="border-gray-300 text-gray-600"
                  >
                    Previous
                  </Button>

                  {currentStep < 3 ? (
                    <Button type="button" variant="primary" onClick={handleNext} className="bg-[#071429] text-white">
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" className="bg-[#E1B341] text-[#071429]">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
