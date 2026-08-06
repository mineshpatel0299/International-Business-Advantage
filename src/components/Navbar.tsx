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
      <div className="bg-[#0E1B2D] text-gray-300 py-1.5 px-6 flex justify-between items-center text-[11px] font-medium border-b border-gray-700">
        <div className="flex gap-2.5">
          <div className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all">
            <FaFacebookF size={13} />
          </div>
          <div className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all">
            <FaInstagram size={13} />
          </div>
          <div className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all">
            <FaLinkedinIn size={13} />
          </div>
          <div className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all">
            <FaXTwitter size={12} />
          </div>
          <div className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all">
            <FaWhatsapp size={14} />
          </div>
          <div className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 cursor-pointer hover:border-[#3fa2f6] hover:bg-[#3fa2f6]/10 hover:text-[#3fa2f6] transition-all">
            <FaYoutube size={14} />
          </div>
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
      <div className="bg-[#0E1B2D] text-white px-8 py-5 flex justify-between items-center">
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
            <button className="bg-[#3fa2f6] text-white border border-[#3fa2f6] hover:bg-[#2e8ee6] text-[10px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">JOB SEEKERS LOGIN</button>
            <button className="bg-[#3fa2f6] text-white border border-[#3fa2f6] hover:bg-[#2e8ee6] text-[10px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">EMPLOYERS LOGIN</button>
            <button className="bg-[#3fa2f6] text-white border border-[#3fa2f6] hover:bg-[#2e8ee6] text-[10px] font-bold py-2 px-3 flex-1 whitespace-nowrap tracking-[0.1em] transition-all">PARTNERS LOGIN</button>
          </div>
          <div className="w-full flex border border-gray-600 p-[3px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-[13px] placeholder:text-gray-400 text-gray-800 px-4 py-2 h-[36px] bg-white"
            />
            <button className="bg-[#0E1B2D] border border-gray-600 hover:bg-gray-800 transition w-[46px] shrink-0 flex items-center justify-center text-white h-[36px]">
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Main Menu - Static positioned row */}
      <div className="w-full bg-[#132c4a] text-white text-[11px] lg:text-[9px] xl:text-[10px] font-bold font-heading tracking-[0.05em] lg:tracking-[0.1em] flex border-y border-white relative">

        {/* ABOUT US */}
        <div className="relative group flex-auto border-r border-white">
          <div
            onClick={() => toggleDropdown('about')}
            className={`py-4 px-2 text-center cursor-pointer select-none transition-colors flex items-center justify-center h-full ${openDropdown === 'about' ? 'bg-[#3fa2f6]' : 'hover:bg-[#3fa2f6]'}`}
          >
            ABOUT US
          </div>
          {openDropdown === 'about' && (
            <div className="absolute top-full left-0 w-[calc(100%+1px)] bg-[#132c4a] flex flex-col z-50">
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">CHAIRMAN</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">BOARD OF DIRECTORS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">ADVISORS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">CONSULTANTS</Link>
            </div>
          )}
        </div>

        {/* GLOBAL RETAINED SEARCH */}
        <div className="relative group flex-auto border-r border-white">
          <div
            onClick={() => toggleDropdown('global')}
            className={`py-4 px-2 text-center cursor-pointer select-none transition-colors flex items-center justify-center h-full ${openDropdown === 'global' ? 'bg-[#3fa2f6]' : 'hover:bg-[#3fa2f6]'}`}
          >
            GLOBAL RETAINED SEARCH
          </div>
          {openDropdown === 'global' && (
            <div className="absolute top-full left-0 w-[calc(100%+1px)] bg-[#132c4a] flex flex-col z-50">
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">RETAINED CXO SEARCH</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">SENIOR EXECUTIVE SEARCH</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">CAREER WITH IBA</Link>
            </div>
          )}
        </div>

        {/* ADVISORY & CONSULTING */}
        <div className="relative group flex-auto border-r border-white">
          <div
            onClick={() => toggleDropdown('advisory')}
            className={`py-4 px-2 text-center cursor-pointer select-none transition-colors flex items-center justify-center h-full ${openDropdown === 'advisory' ? 'bg-[#3fa2f6]' : 'hover:bg-[#3fa2f6]'}`}
          >
            ADVISORY & CONSULTING
          </div>
          {openDropdown === 'advisory' && (
            <div className="absolute top-full left-0 w-[calc(100%+1px)] bg-[#132c4a] flex flex-col z-50">
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">CORPORATE GOVERNANCE ADVISORY</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">MEDIA ADVERTISING & PRODUCTION</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">BRANDING, PR & IMAGE CONSULTING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">BUSINESS ADVISORY & CONSULTING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">LEGAL ADVISORY & CONSULTING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">FINANCIAL ADVISORY & CONSULTING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">HR TRANSFORMATIONAL CONSULTING</Link>
            </div>
          )}
        </div>

        {/* COACHING & MENTORING */}
        <div className="relative group flex-auto border-r border-white">
          <div
            onClick={() => toggleDropdown('coaching')}
            className={`py-4 px-2 text-center cursor-pointer select-none transition-colors flex items-center justify-center h-full ${openDropdown === 'coaching' ? 'bg-[#3fa2f6]' : 'hover:bg-[#3fa2f6]'}`}
          >
            COACHING & MENTORING
          </div>
          {openDropdown === 'coaching' && (
            <div className="absolute top-full left-0 w-[calc(100%+1px)] bg-[#132c4a] flex flex-col z-50">
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">TRANSFORMATIONAL COACHING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">ENTREPRENEURIAL COACHING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">MENTORING THE YOUNG LEADERS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">LEADERSHIP COACHING</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">IMPACT SALES PROGRAMS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">SOFT SKILLS PROGRAMS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">INTERNSHIP PROGRAMS</Link>
            </div>
          )}
        </div>

        {/* PARTNERSHIPS & TIE-UPS */}
        <div className="relative group flex-auto border-r border-white">
          <div
            onClick={() => toggleDropdown('partnerships')}
            className={`py-4 px-2 text-center cursor-pointer select-none transition-colors flex items-center justify-center h-full ${openDropdown === 'partnerships' ? 'bg-[#3fa2f6]' : 'hover:bg-[#3fa2f6]'}`}
          >
            PARTNERSHIPS & TIE-UPS
          </div>
          {openDropdown === 'partnerships' && (
            <div className="absolute top-full left-0 w-[calc(100%+1px)] bg-[#132c4a] flex flex-col z-50">
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">TECHNOLOGY PARTNERS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">FRANCHISE PARTNERS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">STRATEGIC PARTNERS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">BUSINESS PARTNERS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">EXPANSION PARTNERS</Link>
              <Link href="#" className="px-2 py-3 text-center text-[11px] border border-white -mt-px hover:bg-[#3fa2f6] transition whitespace-normal leading-tight flex items-center justify-center min-h-[40px]">DELIVERY PARTNERS</Link>
            </div>
          )}
        </div>

        {/* EVENTS & ENTERTAINMENT */}
        <div className="relative flex-auto border-r border-white">
          <div className="py-4 px-2 text-center cursor-pointer select-none hover:bg-[#3fa2f6] transition-colors flex items-center justify-center h-full">
            EVENTS & ENTERTAINMENT
          </div>
        </div>

        {/* NEWSROOM */}
        <div className="relative flex-auto border-r border-white">
          <div className="py-4 px-2 text-center cursor-pointer select-none hover:bg-[#3fa2f6] transition-colors flex items-center justify-center h-full">
            NEWSROOM
          </div>
        </div>

        {/* CONTACT US */}
        <div className="relative flex-auto">
          <div className="py-4 px-2 text-center cursor-pointer select-none hover:bg-[#3fa2f6] transition-colors flex items-center justify-center h-full">
            CONTACT US
          </div>
        </div>

      </div>
    </div>
  );
}
