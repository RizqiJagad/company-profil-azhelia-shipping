import React from 'react';
import Link from 'next/link';
import { Anchor, MapPin, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-gray-300 pt-16 pb-8 border-t border-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center text-white shadow-md">
                <Anchor className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-wider block leading-none">
                  AZHELIA
                </span>
                <span className="text-xs font-semibold text-blue-300 tracking-widest block">
                  SHIPPING
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted partner in international maritime recruitment and crew management. Connecting world-class seafarers with global shipowners.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-300 bg-blue-950/60 p-3 rounded-xl border border-blue-800">
              <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>STCW 2010 & MLC 2006 Compliant Agency</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 border-l-4 border-[#3B82F6] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Homepage</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Company</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Maritime Services</Link>
              </li>
              <li>
                <Link href="/vessels" className="hover:text-white transition-colors">Vessel Types</Link>
              </li>
              <li>
                <Link href="/recruitment-process" className="hover:text-white transition-colors">Recruitment Process</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Career Opportunities</Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 border-l-4 border-[#3B82F6] pl-3">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Operational Gallery</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">Leadership Team</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/download-profile" className="hover:text-white transition-colors">Download Company Profile</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 border-l-4 border-[#3B82F6] pl-3">
              Head Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>North Jakarta Maritime Center, DKI Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+6281295904116" className="hover:text-white transition-colors">
                  +62 812-9590-4116
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/6281295904116" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Support Desk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@azheliashipping.com" className="hover:text-white transition-colors">
                  info@azheliashipping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} AZHELIA SHIPPING. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
