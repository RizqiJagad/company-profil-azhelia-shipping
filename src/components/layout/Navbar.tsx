'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'VESSELS', href: '/vessels' },
  { name: 'PROCESS', href: '/recruitment-process' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'TEAM', href: '/team' },
  { name: 'FAQ', href: '/faq' },
  { name: 'CONTACT', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071429]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#E1B341]/20'
          : 'bg-gradient-to-b from-[#071429]/95 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="AZHELIA SHIPPING Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="text-xl md:text-2xl font-black text-white tracking-widest block leading-none">
                AZHELIA
              </span>
              <span className="text-xs font-semibold text-[#E1B341] tracking-widest block mt-0.5">
                SHIPPING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold tracking-widest transition-colors hover:text-[#E1B341] ${
                    isActive ? 'text-[#E1B341] font-extrabold border-b-2 border-[#E1B341] pb-1' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="/company-profile.pdf" download="AZHELIA_SHIPPING_Company_Profile.pdf">
              <Button size="sm" variant="outline" className="border-[#E1B341] text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429]">
                <Download className="w-4 h-4 mr-1.5" />
                PROFILE PDF
              </Button>
            </a>
            <Link href="/contact">
              <Button size="sm" variant="primary" className="bg-[#E1B341] text-[#071429] hover:bg-[#F4C854]">
                <Phone className="w-4 h-4 mr-1.5" />
                CONTACT US
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-[#E1B341] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#E1B341]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#071429] border-b border-[#E1B341]/20 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold tracking-widest transition-colors ${
                    isActive
                      ? 'bg-[#E1B341] text-[#071429] font-extrabold'
                      : 'text-gray-300 hover:bg-white/10 hover:text-[#E1B341]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E1B341]/20 flex flex-col gap-2">
            <a href="/company-profile.pdf" download="AZHELIA_SHIPPING_Company_Profile.pdf" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" variant="outline" className="w-full justify-center border-[#E1B341] text-[#E1B341]">
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD COMPANY PROFILE
              </Button>
            </a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" variant="primary" className="w-full justify-center bg-[#E1B341] text-[#071429]">
                <Phone className="w-4 h-4 mr-2" />
                CONTACT OUR TEAM
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
