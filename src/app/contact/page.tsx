'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 font-light"
          >
            Ready to discuss your maritime recruitment needs or apply for seafarer positions? Our team is available 24/7.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-2">
                24/7 Operations Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
                We're Here to Support Your Maritime Voyage
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you are a shipowner seeking top-tier officer complement or a seafarer looking for your next contract, reach out to our crewing specialists.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Head Office Address</h4>
                  <p className="text-gray-600 text-sm">
                    North Jakarta Maritime Center, Jl. Yos Sudarso, DKI Jakarta 14320, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Phone / Hotline</h4>
                  <p className="text-gray-600 text-sm">+62 812-9590-4116 / +62 21-555-8920</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Email Inquiry</h4>
                  <p className="text-gray-600 text-sm">info@azheliashipping.com / crewing@azheliashipping.com</p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/6281295904116"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+6281295904116"
                className="flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#0A2540] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <Card className="p-8 border border-gray-100 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540]">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out. A representative from AZHELIA SHIPPING will respond to your message shortly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Capt. John Doe"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@shipping.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 812-xxxx-xxxx"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Crew Management Inquiry"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vessel staffing or career inquiry..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Embedded Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126955.70034608351!2d106.8187844!3d-6.1471714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3b0c3d97f5b3310!2sNorth%20Jakarta%2C%20North%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Azhelia Shipping Office Location"
          />
        </div>
      </div>
    </div>
  );
}
