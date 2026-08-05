import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#071429] text-gray-300 pt-16 pb-8 border-t border-[#E1B341]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3">
              <img
                src="/logo.png"
                alt="AZHELIA SHIPPING Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-black text-white tracking-wider block leading-none">
                  AZHELIA
                </span>
                <span className="text-xs font-semibold text-[#E1B341] tracking-widest block">
                  SHIPPING
                </span>
              </div>
            </Link>

            <h4 className="text-[#E1B341] text-sm font-extrabold tracking-wide uppercase mb-1">
              PT AZHELIA SHIPPING AGENCY INTERNATIONAL
            </h4>
            <p className="text-xs text-gray-400 font-medium mb-4">
              Officially Registered Indonesian Company
            </p>

            <div className="space-y-2 text-xs text-gray-300 bg-white/5 p-3.5 rounded-xl border border-[#E1B341]/20 mb-4">
              <div>
                <span className="text-[#E1B341] font-bold block uppercase text-[10px] tracking-wider">Company Registration Number</span>
                <span className="font-mono text-white text-xs">0508260224636</span>
              </div>
              <div className="pt-1.5 border-t border-gray-800">
                <span className="text-[#E1B341] font-bold block uppercase text-[10px] tracking-wider">Established</span>
                <span className="font-medium text-white text-xs">2026</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#E1B341] bg-black/30 p-2.5 rounded-xl border border-[#E1B341]/30">
              <ShieldCheck className="w-4 h-4 text-[#E1B341] flex-shrink-0" />
              <span>STCW 2010 & MLC 2006 Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E1B341] text-lg font-bold mb-4 border-l-4 border-[#E1B341] pl-3 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E1B341] transition-colors">Homepage</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E1B341] transition-colors">About Company</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E1B341] transition-colors">Maritime Services</Link>
              </li>
              <li>
                <Link href="/vessels" className="hover:text-[#E1B341] transition-colors">Vessel Types</Link>
              </li>
              <li>
                <Link href="/recruitment-process" className="hover:text-[#E1B341] transition-colors">Recruitment Process</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#E1B341] transition-colors">Career Opportunities</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#E1B341] text-lg font-bold mb-4 border-l-4 border-[#E1B341] pl-3 tracking-wide">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/gallery" className="hover:text-[#E1B341] transition-colors">Operational Gallery</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#E1B341] transition-colors">Leadership Team</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#E1B341] transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <a href="/company-profile.pdf" download="AZHELIA_SHIPPING_Company_Profile.pdf" className="hover:text-[#E1B341] transition-colors">Download Company Profile</a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E1B341] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E1B341] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-[#E1B341] text-lg font-bold mb-4 border-l-4 border-[#E1B341] pl-3 tracking-wide">
              HEAD OFFICE
            </h4>
            <ul className="space-y-3.5 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E1B341] flex-shrink-0 mt-0.5" />
                <span>Jl. Mindi Blok O No. 5 A1, RT. 009, RW. 006, Kel. Lagoa, Kec. Koja, Jakarta Utara, Provinsi DKI Jakarta, 14270</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E1B341] flex-shrink-0" />
                <a href="tel:+6281295904116" className="hover:text-[#E1B341] transition-colors">
                  +62 812-9590-4116
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/6281295904116" target="_blank" rel="noreferrer" className="hover:text-[#E1B341] transition-colors">
                  WhatsApp Support Desk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E1B341] flex-shrink-0" />
                <a href="mailto:info@azheliashipping.com" className="hover:text-[#E1B341] transition-colors">
                  info@azheliashipping.com
                </a>
              </li>
            </ul>

            {/* Social Icons Gold */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="p-2.5 rounded-full bg-white/5 border border-[#E1B341]/30 text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-full bg-white/5 border border-[#E1B341]/30 text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-white/5 border border-[#E1B341]/30 text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} AZHELIA SHIPPING. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#E1B341] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#E1B341] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
