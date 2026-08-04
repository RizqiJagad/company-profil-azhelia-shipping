'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  CheckCircle,
  FileCheck,
  Upload,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { jobsData, JobItem } from '@/data/maritimeData';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRank, setSelectedRank] = useState<string>('all');
  const [applyingJob, setApplyingJob] = useState<JobItem | null>(null);
  const [detailJob, setDetailJob] = useState<JobItem | null>(null);

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    rank: '',
    experience: '',
    certifications: '',
    fileName: '',
  });

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.vesselType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRank = selectedRank === 'all' || job.rank === selectedRank;
    return matchesSearch && matchesRank;
  });

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
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeApplyModal = () => {
    setApplyingJob(null);
    setCurrentStep(1);
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      rank: '',
      experience: '',
      certifications: '',
      fileName: '',
    });
  };

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
            Your Maritime Career Starts Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 font-light"
          >
            Explore exciting job vacancies on top international fleets with competitive compensation and 100% MLC compliance.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-10 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by position or vessel type..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={selectedRank}
            onChange={(e) => setSelectedRank(e.target.value)}
            className="w-full md:w-56 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-gray-700 bg-white"
          >
            <option value="all">All Ranks / Jabatan</option>
            <option value="captain">Master / Captain</option>
            <option value="chief-engineer">Chief Engineer</option>
            <option value="officer">Deck & Engine Officers</option>
            <option value="rating">Ratings (AB, Oiler, Fitter)</option>
          </select>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-l-4 border-[#1E3A8A] hover:border-blue-500 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-[#0A2540]">{job.title}</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                          Active Recruitment
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-50 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-lg border border-blue-100">
                          {job.vesselType}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg">
                          Contract: {job.contractDuration}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                      <Button
                        size="md"
                        variant="primary"
                        onClick={() => {
                          setApplyingJob(job);
                          setFormData((prev) => ({ ...prev, rank: job.title }));
                        }}
                        className="flex-1 md:flex-none"
                      >
                        Apply Now
                      </Button>
                      <Button
                        size="md"
                        variant="outline"
                        onClick={() => setDetailJob(job)}
                        className="flex-1 md:flex-none"
                      >
                        Details
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-gray-800">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>Posted: {job.postedDate}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-1">No vacancies found</h3>
              <p className="text-gray-500 text-sm">Try clearing your search keyword or changing rank filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* 1. Job Detail Modal */}
      {detailJob && (
        <Modal
          isOpen={!!detailJob}
          onClose={() => setDetailJob(null)}
          title={`Vacancy: ${detailJob.title}`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#0A2540] text-lg mb-2">Job Description</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{detailJob.description}</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-[#0A2540] mb-3">Key Requirements:</h4>
              <ul className="space-y-2">
                {detailJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setDetailJob(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setApplyingJob(detailJob);
                  setDetailJob(null);
                }}
              >
                Apply for Position
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* 2. Multi-Step Application Modal */}
      {applyingJob && (
        <Modal
          isOpen={!!applyingJob}
          onClose={closeApplyModal}
          title={`Application Form: ${applyingJob.title}`}
          maxWidth="3xl"
        >
          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540]">Application Submitted!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our crewing team will review your CV and certificates for <strong>{applyingJob.title}</strong> and contact you via email/phone shortly.
              </p>
              <Button variant="primary" onClick={closeApplyModal} className="mt-4">
                Done & Return to Careers
              </Button>
            </div>
          ) : (
            <div>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                        currentStep === step
                          ? 'bg-[#1E3A8A] text-white shadow-md'
                          : currentStep > step
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {currentStep > step ? '✓' : step}
                    </div>
                    <span
                      className={`hidden sm:inline text-xs font-semibold ${
                        currentStep === step ? 'text-[#0A2540]' : 'text-gray-400'
                      }`}
                    >
                      {step === 1 ? 'Personal Info' : step === 2 ? 'Experience' : 'Upload CV'}
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
                        Full Name / Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Capt. Alexander Smith"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
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
                          placeholder="alexander@example.com"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+62 812-3456-7890"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Target Rank / Position *
                      </label>
                      <input
                        type="text"
                        name="rank"
                        required
                        value={formData.rank}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Total Sea Time Experience (Years) *
                      </label>
                      <input
                        type="text"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g. 5 Years in Tankers"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                        Key Certifications & Licenses *
                      </label>
                      <textarea
                        name="certifications"
                        rows={3}
                        required
                        value={formData.certifications}
                        onChange={handleInputChange}
                        placeholder="List your STCW certificates (e.g. Master Class 1, BST, AFF, ME-Engine certificate)"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 p-8 rounded-2xl text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Upload className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-bold text-[#0A2540] mb-1">
                        Upload Your Updated CV & Certificates (PDF)
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
                        <span className="inline-flex items-center px-4 py-2 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold cursor-pointer hover:bg-[#0A2540]">
                          Select PDF File
                        </span>
                      </label>

                      {formData.fileName && (
                        <p className="text-xs font-semibold text-green-600 mt-3">
                          Selected File: {formData.fileName}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Modal Action Buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-100">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>

                  {currentStep < 3 ? (
                    <Button type="button" variant="primary" onClick={handleNext}>
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" className="bg-green-600 hover:bg-green-700">
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
