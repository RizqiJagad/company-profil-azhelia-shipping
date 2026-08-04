'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, FileText, Lock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DownloadProfilePage() {
  const [downloaded, setDownloaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    // Create a mock blob download for Company Profile PDF
    const element = document.createElement('a');
    const file = new Blob(
      [
        `AZHELIA SHIPPING - COMPANY PROFILE\n\n` +
          `Professional Maritime Recruitment & Crew Management\n` +
          `Website: https://azheliashipping.com\n` +
          `Contact: info@azheliashipping.com | +62 812-9590-4116\n\n` +
          `Thank you for downloading our official company profile brochure.`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'AZHELIA_SHIPPING_Company_Profile.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] text-white p-8 sm:p-12 rounded-3xl shadow-2xl overflow-hidden relative"
        >
          {/* Background Graphic */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <FileText className="w-96 h-96 text-white" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-300 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full uppercase tracking-wider">
                Official E-Brochure
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Download Our <br />
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Company Profile
                </span>
              </h1>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Get full access to our comprehensive service deck, MLC compliance credentials, vessel complement list, and principal case studies.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Complete service overview & fee models',
                  'STCW & MLC 2006 compliance certificates',
                  'Seafarer pool statistics & rank breakdown',
                  'Direct contacts & crewing escalation matrix',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-xs text-blue-300 pt-2">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Your information is strictly protected per our Privacy Policy</span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl">
              {downloaded ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540]">Download Started!</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Thank you, <strong>{formData.name}</strong>. Your copy of AZHELIA SHIPPING Company Profile has been downloaded to your device.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setDownloaded(false)}
                    className="w-full text-xs"
                  >
                    Download Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">Request Free Download</h3>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Capt. Alexander Smith"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@shipping.com"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Maritime Corp"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 812-xxxx-xxxx"
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Brochure
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
