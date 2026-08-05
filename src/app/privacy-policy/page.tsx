import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF6EC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-[#071429] text-[#E1B341] rounded-2xl border border-[#E1B341]/40">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#071429] uppercase tracking-wide">
              PRIVACY POLICY
            </h1>
            <p className="text-xs text-gray-500 font-semibold">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="prose prose-blue max-w-none space-y-8 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-[#E1B341]/20 pt-8">
          <section>
            <h2 className="text-xl font-bold text-[#071429] mb-3 uppercase tracking-wide">1. Introduction</h2>
            <p>
              AZHELIA SHIPPING ("we", "our", or "us") is committed to protecting the privacy of seafarers, shipowners, and visitors to our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or submit applications for maritime recruitment and crew management services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071429] mb-3 uppercase tracking-wide">2. Information We Collect</h2>
            <p className="mb-2">We collect personal and professional data that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Contact Information:</strong> Full name, email address, phone/WhatsApp number, and postal address.</li>
              <li><strong>Maritime Kualifikasi Data:</strong> Rank, sea service history, STCW certificates, Seaman Book details, and medical fitness certificates.</li>
              <li><strong>Document Uploads:</strong> CV/resumes, passports, flag state endorsements, and training records.</li>
              <li><strong>Inquiry Details:</strong> Business company name, vessel fleet requirements, and messaging contents.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071429] mb-3 uppercase tracking-wide">3. How We Use Your Information</h2>
            <p className="mb-2">The information collected is strictly utilized for:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Evaluating seafarer applications for vessel placements.</li>
              <li>Verifying certificate authenticity with maritime flag state authorities.</li>
              <li>Arranging visa logistics, flag endorsements, and international travel.</li>
              <li>Communicating with shipowners regarding crew complement requests.</li>
              <li>Ensuring full compliance with MLC 2006 and STCW standards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071429] mb-3 uppercase tracking-wide">4. Protection of Seafarer Data</h2>
            <p>
              We implement industry-standard encryption and physical security measures to safeguard candidate CVs and certificates. AZHELIA SHIPPING strictly abides by MLC 2006 guidelines: we NEVER sell, monetize, or inappropriately distribute candidate personal data to third parties without prior consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071429] mb-3 uppercase tracking-wide">5. Contact Information</h2>
            <p>
              If you have questions or requests regarding your personal data or this Privacy Policy, please contact our Data Protection Officer at:
            </p>
            <div className="bg-white p-5 rounded-2xl border border-[#E1B341]/30 mt-3 text-xs sm:text-sm font-medium text-[#071429]">
              <p>Email: <a href="mailto:privacy@azheliashipping.com" className="text-[#071429] font-bold underline">privacy@azheliashipping.com</a></p>
              <p>Phone: +62 812-9590-4116</p>
              <p>Address: North Jakarta Maritime Center, DKI Jakarta, Indonesia</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
