'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
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
            CONTACT OUR CREWING DESK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light"
          >
            Ready to discuss your maritime recruitment needs or apply for seafarer positions? Our team is available 24/7.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
        {/* Info Box */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1B341]/40 shadow-xl space-y-8">
          <div>
            <span className="text-[#E1B341] font-bold tracking-widest text-xs uppercase block mb-2">
              24/7 Operations Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071429] mb-4">
              WE'RE HERE TO SUPPORT YOUR MARITIME VOYAGE
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Whether you are a shipowner seeking top-tier officer complement or a seafarer looking for your next contract, reach out to our crewing specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/30 space-y-3">
              <div className="w-12 h-12 bg-[#071429] rounded-xl flex items-center justify-center text-[#E1B341] flex-shrink-0 border border-[#E1B341]">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#071429] uppercase text-xs tracking-wider">Head Office Address</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Jl. Mindi Blok O No. 5 A1, RT. 009, RW. 006, Kel. Lagoa, Kec. Koja, Jakarta Utara, Provinsi DKI Jakarta, 14270
              </p>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/30 space-y-3">
              <div className="w-12 h-12 bg-[#071429] rounded-xl flex items-center justify-center text-[#E1B341] flex-shrink-0 border border-[#E1B341]">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#071429] uppercase text-xs tracking-wider">Phone / Hotline</h4>
              <p className="text-gray-600 text-xs font-bold">+62 812-9590-4116</p>
              <p className="text-gray-500 text-[11px]">Available 24/7 for emergency crewing</p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#FAF6EC] border border-[#E1B341]/30 space-y-3">
              <div className="w-12 h-12 bg-[#071429] rounded-xl flex items-center justify-center text-[#E1B341] flex-shrink-0 border border-[#E1B341]">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#071429] uppercase text-xs tracking-wider">Email Inquiry</h4>
              <p className="text-gray-600 text-xs font-bold">azheliashippingagency@gmail.com</p>
              <p className="text-gray-500 text-[11px]">Official crewing & client communications</p>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-gray-100">
            <a
              href="https://wa.me/6281295904116"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+6281295904116"
              className="flex items-center gap-2 bg-[#071429] hover:bg-[#122F5C] text-[#E1B341] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all border border-[#E1B341] shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Hotline Now</span>
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E1B341]/30 h-96">
          <iframe
            title="AZHELIA SHIPPING Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9748685121976!2d106.9064783!3d-6.1340798!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f81df681ad3%3A0x2a0d9be8cf6dbef4!2sLagoa%2C%20Koja%2C%20North%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
