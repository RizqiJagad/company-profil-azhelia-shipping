'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, Menu, X, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Vessels', href: '/vessels' },
  { name: 'Process', href: '/recruitment-process' },
  { name: 'Careers', href: '/careers' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '/team' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
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
          ? 'bg-[#0A2540]/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-gradient-to-b from-[#0A2540]/90 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black text-white tracking-wider block leading-none">
                AZHELIA
              </span>
              <span className="text-xs font-semibold text-blue-300 tracking-widest block mt-0.5">
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
                  className={`text-sm font-medium transition-colors hover:text-blue-300 ${
                    isActive ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/download-profile">
              <Button size="sm" variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white">
                <Download className="w-4 h-4 mr-1.5" />
                Profile PDF
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" variant="primary">
                <Phone className="w-4 h-4 mr-1.5" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-blue-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A2540] border-b border-gray-800 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white font-bold'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-2">
            <Link href="/download-profile" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" variant="outline" className="w-full justify-center border-blue-400 text-blue-300">
                <Download className="w-4 h-4 mr-2" />
                Download Company Profile
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" variant="primary" className="w-full justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
