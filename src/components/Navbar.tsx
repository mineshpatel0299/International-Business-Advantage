"use client";

import { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

type MenuItem = {
  key: string;
  label: string;
  children?: string[];
};

const menuItems: MenuItem[] = [
  {
    key: 'about',
    label: 'ABOUT US',
    children: ['CHAIRMAN', 'BOARD OF DIRECTORS', 'ADVISORS', 'CONSULTANTS'],
  },
  {
    key: 'global',
    label: 'GLOBAL RETAINED SEARCH',
    children: ['RETAINED CXO SEARCH', 'SENIOR EXECUTIVE SEARCH', 'CAREER WITH IBA'],
  },
  {
    key: 'advisory',
    label: 'ADVISORY & CONSULTING',
    children: [
      'CORPORATE GOVERNANCE ADVISORY',
      'MEDIA ADVERTISING & PRODUCTION',
      'BRANDING, PR & IMAGE CONSULTING',
      'BUSINESS ADVISORY & CONSULTING',
      'LEGAL ADVISORY & CONSULTING',
      'FINANCIAL ADVISORY & CONSULTING',
      'HR TRANSFORMATIONAL CONSULTING',
    ],
  },
  {
    key: 'coaching',
    label: 'COACHING & MENTORING',
    children: [
      'TRANSFORMATIONAL COACHING',
      'ENTREPRENEURIAL COACHING',
      'MENTORING THE YOUNG LEADERS',
      'LEADERSHIP COACHING',
      'IMPACT SALES PROGRAMS',
      'SOFT SKILLS PROGRAMS',
      'INTERNSHIP PROGRAMS',
    ],
  },
  {
    key: 'partnerships',
    label: 'PARTNERSHIPS & TIE-UPS',
    children: [
      'TECHNOLOGY PARTNERS',
      'FRANCHISE PARTNERS',
      'STRATEGIC PARTNERS',
      'BUSINESS PARTNERS',
      'EXPANSION PARTNERS',
      'DELIVERY PARTNERS',
    ],
  },
  { key: 'events', label: 'EVENTS & ENTERTAINMENT' },
  { key: 'newsroom', label: 'NEWSROOM' },
  { key: 'contact', label: 'CONTACT US' },
];

const socialIcons = [
  { Icon: FaFacebookF, size: 13 },
  { Icon: FaInstagram, size: 13 },
  { Icon: FaLinkedinIn, size: 13 },
  { Icon: FaXTwitter, size: 12 },
  { Icon: FaWhatsapp, size: 14 },
  { Icon: FaYoutube, size: 14 },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="w-full font-heading relative z-50 flex flex-col shadow-sm">
      {/* Top Bar - desktop only */}
      <div className="hidden lg:flex bg-[#0E1B2D] text-gray-300 py-1.5 px-6 justify-between items-center text-[11px] font-medium border-b border-gray-700">
        <div className="flex gap-2.5">
          {socialIcons.map(({ Icon, size }, idx) => (
            <div
              key={idx}
              className="w-7 h-7 rounded-md border border-white flex items-center justify-center text-white cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all"
            >
              <Icon size={size} />
            </div>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 hover:text-[#3fa2f6] transition cursor-pointer">
            <FaEnvelope size={12} className="text-[#3fa2f6]" />
            <span className="tracking-wide">business@ibasearch.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#3fa2f6] transition cursor-pointer">
            <FaPhoneAlt size={12} className="text-[#3fa2f6]" />
            <span className="tracking-wide">+91-88027 56666 | +91-88027 06666</span>
          </div>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="bg-[#0E1B2D] text-white px-4 md:px-8 py-3 md:py-5 flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center shrink-0">
          <Link href="/" className="relative w-32 h-14 md:w-48 md:h-20 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="International Business Advantage Logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right side buttons & search - desktop only */}
        <div className="hidden lg:flex flex-col gap-3 w-full max-w-[460px]">
          <div className="flex gap-2 justify-between w-full">
            <button className="bg-[#3fa2f6] text-white hover:bg-[#2e8ee6] text-[12px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">JOB SEEKERS LOGIN</button>
            <button className="bg-[#3fa2f6] text-white hover:bg-[#2e8ee6] text-[12px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">EMPLOYERS LOGIN</button>
            <button className="bg-[#3fa2f6] text-white hover:bg-[#2e8ee6] text-[12px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">PARTNERS LOGIN</button>
          </div>
          <div className="w-full flex border border-white p-[3px] gap-[3px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-[13px]  font-semibold text-gray-800 px-3 py-1.5 h-[34px] bg-white"
            />
            <button className="bg-[#3fa2f6] hover:bg-[#2e8ee6] transition w-[42px] shrink-0 flex items-center justify-center text-white h-[34px]">
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden shrink-0 text-white p-1"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Main Menu - desktop only, static positioned row */}
      <div className="hidden lg:flex w-full bg-[#132c4a] text-white text-[15px] lg:text-[13px] xl:text-[14px] font-semibold font-heading tracking-[0.05em] lg:tracking-[0.1em] border-y border-white relative">
        {menuItems.map((item, idx) => (
          <div
            key={item.key}
            className={`relative group flex-auto ${idx < menuItems.length - 1 ? 'border-r border-white' : ''}`}
          >
            <div
              onClick={() => item.children && toggleDropdown(item.key)}
              className={`py-4 px-2 text-center select-none transition-colors flex items-center justify-center h-full ${item.children ? 'cursor-pointer' : 'cursor-pointer'} ${openDropdown === item.key ? 'bg-[#3fa2f6]' : 'hover:bg-[#3fa2f6]'}`}
            >
              {item.label}
            </div>
            {item.children && openDropdown === item.key && (
              <div className="absolute top-full left-0 w-[calc(100%+1px)] bg-[#132c4a] flex flex-col z-50">
                {item.children.map((child) => (
                  <Link
                    key={child}
                    href="#"
                    className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]"
                  >
                    {child}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#132c4a] text-white flex flex-col max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Login buttons + search */}
          <div className="flex flex-col gap-2 p-4 border-b border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button className="bg-[#3fa2f6] text-white hover:bg-[#2e8ee6] text-[13px] font-bold py-2.5 px-3 whitespace-nowrap tracking-[0.1em] transition-all">JOB SEEKERS LOGIN</button>
              <button className="bg-[#3fa2f6] text-white hover:bg-[#2e8ee6] text-[13px] font-bold py-2.5 px-3 whitespace-nowrap tracking-[0.1em] transition-all">EMPLOYERS LOGIN</button>
              <button className="bg-[#3fa2f6] text-white hover:bg-[#2e8ee6] text-[13px] font-bold py-2.5 px-3 whitespace-nowrap tracking-[0.1em] transition-all">PARTNERS LOGIN</button>
            </div>
            <div className="w-full flex border border-white p-[3px] gap-[3px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-[13px] font-semibold text-gray-800 px-3 py-1.5 h-[38px] bg-white"
              />
              <button className="bg-[#3fa2f6] hover:bg-[#2e8ee6] transition w-[42px] shrink-0 flex items-center justify-center text-white h-[38px]">
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Nav accordion */}
          <div className="flex flex-col">
            {menuItems.map((item) => (
              <div key={item.key} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="w-full px-4 py-4 flex items-center justify-between text-left text-[13px] font-semibold tracking-[0.05em]"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${openDropdown === item.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === item.key && (
                      <div className="flex flex-col bg-[#0E1B2D]">
                        {item.children.map((child) => (
                          <Link
                            key={child}
                            href="#"
                            onClick={closeMobileMenu}
                            className="px-6 py-3 text-[12px] text-gray-300 hover:text-[#3fa2f6] transition whitespace-normal leading-tight border-t border-white/5"
                          >
                            {child}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-[13px] font-semibold tracking-[0.05em]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4 p-4 text-[12px] text-gray-300">
            <div className="flex gap-2.5">
              {socialIcons.map(({ Icon, size }, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-md border border-white flex items-center justify-center text-white"
                >
                  <Icon size={size} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope size={12} className="text-[#3fa2f6]" />
              <span className="tracking-wide">business@ibasearch.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={12} className="text-[#3fa2f6]" />
              <span className="tracking-wide">+91-88027 56666 | +91-88027 06666</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
