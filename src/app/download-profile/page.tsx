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
    const element = document.createElement('a');
    element.href = '/company-profile.pdf';
    element.download = 'AZHELIA_SHIPPING_Company_Profile.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF6EC] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#071429] text-white p-8 sm:p-12 rounded-3xl shadow-2xl overflow-hidden relative border border-[#E1B341]/30"
        >
          {/* Background Graphic */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <FileText className="w-96 h-96 text-white" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-black text-[#071429] bg-[#E1B341] px-3 py-1 rounded-full uppercase tracking-widest">
                Official E-Brochure
              </span>
              <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                DOWNLOAD OUR <br />
                <span className="text-[#E1B341]">
                  COMPANY PROFILE
                </span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
                    <CheckCircle className="w-5 h-5 text-[#E1B341] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-xs text-[#E1B341] pt-2">
                <Lock className="w-4 h-4 text-[#E1B341]" />
                <span>Your information is strictly protected per our Privacy Policy</span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl border border-[#E1B341]/20">
              {downloaded ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-[#E1B341]/20 text-[#071429] rounded-full flex items-center justify-center mx-auto border border-[#E1B341]">
                    <ShieldCheck className="w-8 h-8 text-[#E1B341]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#071429]">Download Started!</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Thank you, <strong>{formData.name}</strong>. Your copy of AZHELIA SHIPPING Company Profile has been downloaded to your device.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const element = document.createElement('a');
                      element.href = '/company-profile.pdf';
                      element.download = 'AZHELIA_SHIPPING_Company_Profile.pdf';
                      document.body.appendChild(element);
                      element.click();
                      document.body.removeChild(element);
                    }}
                    className="w-full text-xs border-[#071429] text-[#071429]"
                  >
                    DOWNLOAD AGAIN
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4">
                  <h3 className="text-xl font-black text-[#071429] mb-2 uppercase tracking-wide">Request Free Download</h3>

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
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
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
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
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
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
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
                      className="w-full px-3.5 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E1B341] text-sm bg-white"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full mt-2 bg-[#E1B341] text-[#071429]">
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD PDF BROCHURE
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
