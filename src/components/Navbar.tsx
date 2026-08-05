"use client";

import { useState } from 'react';
import {
  ChevronRight,
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

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <div className="w-full font-sans relative z-50 flex flex-col shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#f8f6f0] text-gray-800 py-1.5 px-6 flex justify-between items-center text-[11px] font-medium border-b border-gray-200">
        <div className="flex gap-2.5">
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 cursor-pointer hover:border-[#c5a365] hover:bg-[#c5a365]/5 hover:text-[#c5a365] transition-all">
            <FaFacebookF size={13} />
          </div>
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 cursor-pointer hover:border-[#c5a365] hover:bg-[#c5a365]/5 hover:text-[#c5a365] transition-all">
            <FaInstagram size={13} />
          </div>
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 cursor-pointer hover:border-[#c5a365] hover:bg-[#c5a365]/5 hover:text-[#c5a365] transition-all">
            <FaLinkedinIn size={13} />
          </div>
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 cursor-pointer hover:border-[#c5a365] hover:bg-[#c5a365]/5 hover:text-[#c5a365] transition-all">
            <FaXTwitter size={12} />
          </div>
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 cursor-pointer hover:border-[#c5a365] hover:bg-[#c5a365]/5 hover:text-[#c5a365] transition-all">
            <FaWhatsapp size={14} />
          </div>
          <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 cursor-pointer hover:border-[#c5a365] hover:bg-[#c5a365]/5 hover:text-[#c5a365] transition-all">
            <FaYoutube size={14} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 hover:text-[#c5a365] transition cursor-pointer">
            <FaEnvelope size={12} className="text-[#c5a365]" />
            <span className="tracking-wide">business@ibasearch.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#c5a365] transition cursor-pointer">
            <FaPhoneAlt size={12} className="text-[#c5a365]" />
            <span className="tracking-wide">+91-88027 56666 | +91-88027 06666</span>
          </div>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="bg-[#f8f6f0] text-[#081225] px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link href="/" className="relative w-48 h-20 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="International Business Advantage Logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right side buttons & search */}
        <div className="flex flex-col gap-3 w-full max-w-[460px]">
          <div className="flex gap-2 justify-between w-full">
            <button className="border border-[#081225] hover:bg-[#081225] hover:text-white text-[#081225] text-[10px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">JOB SEEKERS LOGIN</button>
            <button className="border border-[#081225] hover:bg-[#081225] hover:text-white text-[#081225] text-[10px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">EMPLOYERS LOGIN</button>
            <button className="border border-[#081225] hover:bg-[#081225] hover:text-white text-[#081225] text-[10px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">PARTNERS LOGIN</button>
          </div>
          <div className="w-full flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-[13px] placeholder:text-gray-400 text-gray-800 px-4 py-2 h-[36px] bg-white border border-gray-200 border-r-0"
            />
            <button className="bg-[#081225] hover:bg-gray-800 transition w-[46px] shrink-0 flex items-center justify-center text-white h-[36px]">
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Main Menu - Static positioned row */}
      <div className="w-full bg-white text-[#081225] text-[10px] font-bold tracking-[0.15em] flex border-y border-gray-200 relative">

        {/* ABOUT US */}
        <div className="flex-1 relative group">
          <div
            onClick={() => toggleDropdown('about')}
            className={`py-4 text-center cursor-pointer select-none transition-colors border-r border-gray-200 ${openDropdown === 'about' ? 'text-[#c5a365] bg-[#f8f6f0]' : 'hover:text-[#c5a365] hover:bg-[#f8f6f0]'}`}
          >
            ABOUT US
          </div>
          {openDropdown === 'about' && (
            <div className="absolute top-full left-0 w-64 bg-white flex flex-col shadow-lg border border-gray-200 z-50">
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">CHAIRMAN</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">BOARD OF DIRECTORS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">ADVISORS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">CONSULTANTS</Link>
            </div>
          )}
        </div>

        {/* GLOBAL RETAINED SEARCH */}
        <div className="flex-1 relative group">
          <div
            onClick={() => toggleDropdown('global')}
            className={`py-4 text-center cursor-pointer select-none transition-colors border-r border-gray-200 ${openDropdown === 'global' ? 'text-[#c5a365] bg-[#f8f6f0]' : 'hover:text-[#c5a365] hover:bg-[#f8f6f0]'}`}
          >
            GLOBAL SEARCH
          </div>
          {openDropdown === 'global' && (
            <div className="absolute top-full left-0 w-64 bg-white flex flex-col shadow-lg border border-gray-200 z-50">
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">RETAINED CXO SEARCH</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">SENIOR EXECUTIVE SEARCH</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">CAREER WITH IBA</Link>
            </div>
          )}
        </div>

        {/* ADVISORY & CONSULTING */}
        <div className="flex-1 relative group">
          <div
            onClick={() => toggleDropdown('advisory')}
            className={`py-4 text-center cursor-pointer select-none transition-colors border-r border-gray-200 ${openDropdown === 'advisory' ? 'text-[#c5a365] bg-[#f8f6f0]' : 'hover:text-[#c5a365] hover:bg-[#f8f6f0]'}`}
          >
            CONSULTING
          </div>
          {openDropdown === 'advisory' && (
            <div className="absolute top-full left-0 w-72 bg-white flex flex-col shadow-lg border border-gray-200 z-50">
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">CORPORATE GOVERNANCE ADVISORY</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">MEDIA ADVERTISING & PRODUCTION</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">BRANDING, PR & IMAGE CONSULTING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">BUSINESS ADVISORY & CONSULTING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">LEGAL ADVISORY & CONSULTING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">FINANCIAL ADVISORY & CONSULTING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">HR TRANSFORMATIONAL CONSULTING</Link>
            </div>
          )}
        </div>

        {/* COACHING & MENTORING */}
        <div className="flex-1 relative group">
          <div
            onClick={() => toggleDropdown('coaching')}
            className={`py-4 text-center cursor-pointer select-none transition-colors border-r border-gray-200 ${openDropdown === 'coaching' ? 'text-[#c5a365] bg-[#f8f6f0]' : 'hover:text-[#c5a365] hover:bg-[#f8f6f0]'}`}
          >
            COACHING
          </div>
          {openDropdown === 'coaching' && (
            <div className="absolute top-full left-0 w-64 bg-white flex flex-col shadow-lg border border-gray-200 z-50">
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">TRANSFORMATIONAL COACHING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">ENTREPRENEURIAL COACHING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">MENTORING THE YOUNG LEADERS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">LEADERSHIP COACHING</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">IMPACT SALES PROGRAMS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">SOFT SKILLS PROGRAMS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">INTERNSHIP PROGRAMS</Link>
            </div>
          )}
        </div>

        {/* PARTNERSHIPS & TIE-UPS */}
        <div className="flex-1 relative group">
          <div
            onClick={() => toggleDropdown('partnerships')}
            className={`py-4 text-center cursor-pointer select-none transition-colors border-r border-gray-200 ${openDropdown === 'partnerships' ? 'text-[#c5a365] bg-[#f8f6f0]' : 'hover:text-[#c5a365] hover:bg-[#f8f6f0]'}`}
          >
            PARTNERSHIPS
          </div>
          {openDropdown === 'partnerships' && (
            <div className="absolute top-full left-0 w-64 bg-white flex flex-col shadow-lg border border-gray-200 z-50">
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">TECHNOLOGY PARTNERS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">FRANCHISE PARTNERS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">STRATEGIC PARTNERS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">BUSINESS PARTNERS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] border-b border-gray-100 hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">EXPANSION PARTNERS</Link>
              <Link href="#" className="px-6 py-4 text-left text-[11px] hover:text-[#c5a365] hover:bg-[#f8f6f0] transition">DELIVERY PARTNERS</Link>
            </div>
          )}
        </div>

        {/* EVENTS & ENTERTAINMENT */}
        <div className="flex-1 relative">
          <div className="py-4 text-center cursor-pointer select-none hover:text-[#c5a365] hover:bg-[#f8f6f0] transition-colors border-r border-gray-200">
            EVENTS
          </div>
        </div>

        {/* NEWSROOM */}
        <div className="flex-1 relative">
          <div className="py-4 text-center cursor-pointer select-none hover:text-[#c5a365] hover:bg-[#f8f6f0] transition-colors border-r border-gray-200">
            NEWSROOM
          </div>
        </div>

        {/* CONTACT US */}
        <div className="flex-1 relative">
          <div className="py-4 text-center cursor-pointer select-none hover:text-[#c5a365] hover:bg-[#f8f6f0] transition-colors">
            CONTACT
          </div>
        </div>

      </div>
    </div>
  );
}
