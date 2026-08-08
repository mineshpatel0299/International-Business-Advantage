"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SERIF = "font-[family-name:var(--font-serif)]";
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ---------------------------------- Shared primitives ---------------------------------- */

const Reveal = ({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionMark = ({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) => (
  <div className="flex items-center gap-4">
    <span className={`${SERIF} italic text-lg text-[#c5a365]`}>{index}</span>
    <span className={`h-px flex-1 max-w-14 ${dark ? "bg-white/15" : "bg-[#0E1B2D]/10"}`} />
    <span
      className={`text-[10px] font-semibold tracking-[0.25em] uppercase ${
        dark ? "text-white/45" : "text-[#0E1B2D]/45"
      }`}
    >
      {label}
    </span>
  </div>
);

const GoldLink = ({
  children,
  href = "#",
  dark = false,
}: {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}) => (
  <Link
    href={href}
    className={`group inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide ${
      dark ? "text-white" : "text-[#0E1B2D]"
    }`}
  >
    <span className="relative">
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-[#c5a365] transition-transform duration-300 group-hover:scale-x-100" />
    </span>
    <ArrowUpRight
      size={14}
      className="text-[#c5a365] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </Link>
);

const PrimaryButton = ({
  children,
  href = "#",
  inverted = false,
}: {
  children: React.ReactNode;
  href?: string;
  inverted?: boolean;
}) => (
  <Link
    href={href}
    className={`inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-300 ${
      inverted
        ? "bg-[#c5a365] text-[#0E1B2D] hover:bg-white"
        : "bg-[#0E1B2D] text-white hover:bg-[#c5a365] hover:text-[#0E1B2D]"
    }`}
  >
    {children}
    <ArrowRight size={15} />
  </Link>
);

/* ---------------------------------- Navbar ---------------------------------- */

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Network", href: "#network" },
  { label: "Search", href: "#search" },
  { label: "Advisory", href: "#advisory" },
  { label: "Academy", href: "#academy" },
  { label: "Partnerships", href: "#partnerships" },
];

const socialIcons = [
  { Icon: FaFacebookF, size: 12 },
  { Icon: FaInstagram, size: 12 },
  { Icon: FaLinkedinIn, size: 12 },
  { Icon: FaXTwitter, size: 11 },
  { Icon: FaWhatsapp, size: 13 },
];

const SampleNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0E1B2D]">
      <div className="hidden lg:flex items-center justify-between px-8 py-2 text-[11px] text-white/50 border-b border-white/10 tracking-wide">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <Mail size={12} className="text-[#c5a365]" /> business@ibasearch.com
          </span>
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-[#c5a365]" /> +91-88027 56666
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socialIcons.map(({ Icon, size }, i) => (
            <Link key={i} href="#" className="hover:text-[#c5a365] transition-colors">
              <Icon size={size} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="relative w-36 h-12 md:w-44 md:h-16 shrink-0">
          <Image src="/logo.png" alt="International Business Advantage" fill className="object-contain object-left" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-white/70 hover:text-white text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1.5 h-px w-full bg-[#c5a365] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#c5a365]/60 text-[#c5a365] text-[11px] font-semibold tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#c5a365] hover:text-[#0E1B2D] transition-colors duration-300"
          >
            Enquire
          </Link>
        </div>

        <button onClick={() => setOpen(true)} aria-label="Open menu" className="lg:hidden text-white p-1 cursor-pointer">
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#0E1B2D] flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20 shrink-0">
              <Link href="/" className="relative w-32 h-11" onClick={() => setOpen(false)}>
                <Image src="/logo.png" alt="International Business Advantage" fill className="object-contain object-left" />
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white p-1 cursor-pointer">
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pt-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-4 border-b border-white/10 ${SERIF} text-white text-3xl`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-10 pt-6 flex flex-col gap-4 text-white/50 text-sm">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center gap-2 border border-[#c5a365]/60 text-[#c5a365] text-[11px] font-semibold tracking-[0.15em] uppercase px-6 py-3"
              >
                Enquire
              </Link>
              <span className="flex items-center gap-2">
                <Mail size={13} className="text-[#c5a365]" /> business@ibasearch.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={13} className="text-[#c5a365]" /> +91-88027 56666
              </span>
              <div className="flex items-center gap-4 mt-2">
                {socialIcons.map(({ Icon, size }, i) => (
                  <span key={i} className="text-white/60">
                    <Icon size={size + 2} />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ---------------------------------- Hero ---------------------------------- */

const practiceAreas = [
  "Executive Search",
  "Advisory & Consulting",
  "CXO Network",
  "Business Academy",
  "Events & Entertainment",
  "Coaching & Mentoring",
];

const SampleHero = () => (
  <section className="relative w-full flex flex-col bg-[#0E1B2D]">
    <div className="relative w-full h-[92vh] min-h-[560px] md:min-h-[680px] flex items-end overflow-hidden">
      <ParallaxWrapper offset={70} direction="down" className="absolute inset-0 w-full h-full scale-[1.12]">
        <img
          src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop"
          alt="Executive boardroom"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </ParallaxWrapper>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2D] via-[#0E1B2D]/60 to-[#0E1B2D]/25" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easeOut }}>
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-[#c5a365]" />
            <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.3em] uppercase">
              A CXO Business Network Platform
            </span>
          </div>
          <h1 className={`${SERIF} text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.98] max-w-4xl`}>
            Strategic Advantage.
            <br />
            <span className="italic text-[#c5a365]">Global Impact.</span>
          </h1>
          <p className="mt-8 text-white/60 text-base md:text-lg max-w-lg leading-relaxed font-light">
            A retained search, advisory, and executive network built for boards, founders, and the
            institutions they lead — across 25 countries.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <PrimaryButton href="#contact" inverted>
              Begin the Conversation
            </PrimaryButton>
            <GoldLink href="#network" dark>
              Explore the Network
            </GoldLink>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="w-full bg-[#0E1B2D] border-t border-white/10 overflow-hidden">
      <div className="flex w-max animate-marquee-left gap-10 py-5">
        {[...practiceAreas, ...practiceAreas, ...practiceAreas, ...practiceAreas].map((area, i) => (
          <span
            key={i}
            className="flex items-center gap-10 shrink-0 whitespace-nowrap text-white/40 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            {area}
            <span className="w-1 h-1 rounded-full bg-[#c5a365]" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------------------------- 01 — Footprint ---------------------------------- */

const SampleLocations = () => {
  const indianCities = ["Delhi", "Gurugram", "Chandigarh", "Ahmedabad", "Mumbai", "Pune", "Goa", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];
  const intlCities = ["New York", "California", "Toronto", "United Kingdom", "France", "Germany", "Italy", "Dubai", "Singapore", "Malaysia", "Philippines", "Indonesia", "Australia", "New Zealand"];

  return (
    <section id="footprint" className="w-full bg-white py-20 md:py-24 relative overflow-hidden">
      <span
        aria-hidden
        className={`pointer-events-none select-none absolute -top-10 right-4 md:right-10 ${SERIF} italic text-[#0E1B2D]/[0.04] text-[10rem] md:text-[16rem] leading-none`}
      >
        01
      </span>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 relative">
        <Reveal>
          <SectionMark index="01" label="Our Footprint" />
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 items-start border-t border-[#0E1B2D]/10 pt-10"
        >
          <h3 className={`${SERIF} text-[#0E1B2D] text-3xl md:text-4xl font-medium leading-[1.1]`}>
            Global
            <br />
            Presence
          </h3>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-10 pb-8 border-b border-[#0E1B2D]/10">
              <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.2em] w-20 shrink-0">INDIA</span>
              <p className="text-[#0E1B2D]/60 text-lg md:text-xl font-light leading-relaxed">
                {indianCities.map((c, i) => (
                  <span key={c}>
                    <span className="hover:text-[#0E1B2D] transition-colors cursor-default">{c}</span>
                    {i < indianCities.length - 1 && <span className="text-[#0E1B2D]/20 mx-2">/</span>}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-10">
              <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.2em] w-20 shrink-0">GLOBAL</span>
              <p className="text-[#0E1B2D]/60 text-lg md:text-xl font-light leading-relaxed">
                {intlCities.map((c, i) => (
                  <span key={c}>
                    <span className="hover:text-[#0E1B2D] transition-colors cursor-default">{c}</span>
                    {i < intlCities.length - 1 && <span className="text-[#0E1B2D]/20 mx-2">/</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------------------------------- 02 — About ---------------------------------- */

const SampleAbout = () => (
  <section id="about" className="w-full py-24 md:py-32 bg-[#f8f6f0]">
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
      <div className="lg:col-span-5 lg:order-2">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden relative">
              <ParallaxWrapper offset={40} direction="down" className="absolute inset-0 w-full h-full scale-110">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Corporate boardroom"
                  className="w-full h-full object-cover"
                />
              </ParallaxWrapper>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#0E1B2D] text-white px-8 py-6 hidden sm:block">
              <span className={`${SERIF} text-4xl font-medium text-[#c5a365]`}>25+</span>
              <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mt-1">
                Years of Excellence
              </span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-7 lg:order-1 lg:pr-10">
        <Reveal>
          <SectionMark index="02" label="Who We Are" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className={`mt-6 ${SERIF} text-[#0E1B2D] text-4xl md:text-6xl font-medium leading-[1.08] mb-8`}>
            Strategic Advantage.
            <br />
            <span className="italic text-[#c5a365]">Global Impact.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18} className="space-y-5 text-[#0E1B2D]/65 text-[16px] leading-relaxed max-w-xl">
          <p>
            <strong className="font-semibold text-[#0E1B2D]">International Business Advantage</strong> is a
            premier Global Search &amp; Business Consulting Company dedicated to transforming organizations
            through strategic talent acquisition and business advisory.
          </p>
          <p>
            For over two and a half decades, we have partnered with MNCs, Blue Chip Companies, Large Corporate
            Houses, and Family-owned businesses to deliver complete projects in Search &amp; Recruitment,
            Coaching, and Training Solutions. Based in Gurgaon, our expertise drives growth across a PAN India
            presence.
          </p>
        </Reveal>
        <Reveal delay={0.26} className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-[#0E1B2D]/10">
          {[["500+", "Placements"], ["40+", "Countries"]].map(([num, label]) => (
            <div key={label}>
              <span className={`${SERIF} text-2xl text-[#0E1B2D]`}>{num}</span>
              <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0E1B2D]/45 mt-1">
                {label}
              </span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.32} className="mt-10">
          <GoldLink href="#network">Discover our story</GoldLink>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------------------------------- 03 — Network ---------------------------------- */

const SampleNetwork = () => {
  const roles = [
    "Managing Director",
    "Chief Executive Officer",
    "Chief Marketing Officer",
    "Chief Business Officer",
    "Chief Digital Officer",
    "Chief Information Officer",
    "Chief Financial Officer",
    "Chief HR Officer",
  ];
  return (
    <section id="network" className="w-full py-24 md:py-32 bg-[#0E1B2D]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal>
            <SectionMark index="03" label="VRK Global CXO Network" dark />
            <h2 className={`mt-6 ${SERIF} text-white text-4xl md:text-5xl font-medium leading-tight`}>
              Exclusive Leadership Club
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <PrimaryButton href="#contact" inverted>
              Request Membership
            </PrimaryButton>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
          {roles.map((role, i) => (
            <Reveal
              key={role}
              delay={i * 0.04}
              className={`border-b border-white/10 ${i % 2 === 0 ? "md:border-r md:border-white/10" : ""}`}
            >
              <Link href="#contact" className="flex items-center justify-between gap-6 py-6 md:pr-10 group cursor-pointer">
                <div className="flex items-center gap-6">
                  <span className={`${SERIF} italic text-[#c5a365] text-base w-9 shrink-0`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white text-lg md:text-xl font-light group-hover:text-[#c5a365] transition-colors">
                    {role}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/30 shrink-0 opacity-0 group-hover:opacity-100 group-hover:text-[#c5a365] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- 04 — Global Search ---------------------------------- */

const SampleGlobalSearch = () => {
  const featured = {
    title: "Executive Search",
    desc: "Retained search for C-Suite and Board level appointments globally, calibrated to institutional standards.",
    roles: "MD · DIRECTORS · CEO",
  };
  const rest = [
    { title: "Mid-Management", desc: "Targeted acquisition for pivotal leadership and operational roles.", roles: "CXO · VP · GM" },
    { title: "Emerging Talent", desc: "Identifying high-potential leaders for future strategic growth.", roles: "DGM – MANAGERS" },
    { title: "Early Career", desc: "Acquiring fresh talent and interns to build a strong foundation.", roles: "INTERNS" },
  ];
  return (
    <section id="search" className="w-full py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <Reveal>
          <SectionMark index="04" label="Talent Acquisition" />
          <h2 className={`mt-6 mb-16 ${SERIF} text-[#0E1B2D] text-4xl md:text-5xl font-medium leading-tight max-w-2xl`}>
            Global Retained Search
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="h-full bg-[#0E1B2D] text-white p-10 md:p-14 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
              <span aria-hidden className={`absolute top-8 right-10 ${SERIF} italic text-white/[0.06] text-[8rem] leading-none select-none`}>
                01
              </span>
              <div className="relative">
                <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.2em] uppercase">{featured.roles}</span>
                <h3 className={`mt-4 ${SERIF} text-3xl md:text-4xl font-medium`}>{featured.title}</h3>
                <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-md">{featured.desc}</p>
              </div>
              <div className="relative mt-10">
                <GoldLink href="#contact" dark>
                  Enquire about this practice
                </GoldLink>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((tier, i) => (
              <Reveal key={tier.title} delay={0.1 + i * 0.08} className="flex-1">
                <div className="h-full border border-[#0E1B2D]/10 p-7 md:p-8 flex flex-col justify-between hover:border-[#c5a365]/50 transition-colors">
                  <div>
                    <span className={`${SERIF} italic text-[#c5a365] text-sm`}>{String(i + 2).padStart(2, "0")}</span>
                    <h4 className={`mt-2 ${SERIF} text-xl font-medium text-[#0E1B2D]`}>{tier.title}</h4>
                    <p className="mt-2 text-[#0E1B2D]/55 text-[13px] leading-relaxed">{tier.desc}</p>
                  </div>
                  <span className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-[#0E1B2D]/40 uppercase">
                    {tier.roles}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- 05 — Advisory (accordion) ---------------------------------- */

const SampleAdvisory = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { n: "01", title: "Corporate Governance Advisory", desc: "Legal advisory, financial structuring, and risk management frameworks built for long-term institutional integrity." },
    { n: "02", title: "Strategic Business Consulting", desc: "Business advisory, branding, and comprehensive PR strategies engineered around measurable growth." },
    { n: "03", title: "Branding, PR & Image Consulting", desc: "Building strong corporate and personal branding footprints across every market you operate in." },
    { n: "04", title: "Legal Advisory & Consulting", desc: "Expert legal counsel and corporate structuring for complex, multi-jurisdiction operations." },
    { n: "05", title: "HR Transformational Consulting", desc: "Organizational redesign, culture building, and leadership assessment for the next decade of growth." },
  ];
  return (
    <section id="advisory" className="w-full py-24 md:py-32 bg-[#f8f6f0]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal>
            <SectionMark index="05" label="Expert Guidance" />
            <h2 className={`mt-6 ${SERIF} text-[#0E1B2D] text-4xl md:text-5xl font-medium leading-tight`}>
              Advisory &amp; Consulting
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm text-[#0E1B2D]/60 text-sm leading-relaxed">
            <p>Five disciplines, one integrated practice — built to move alongside boards, founders, and the institutions they lead.</p>
          </Reveal>
        </div>
        <div className="border-t border-[#0E1B2D]/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.n} className="border-b border-[#0E1B2D]/10">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-6 md:gap-10 py-7 md:py-8 text-left cursor-pointer group"
                >
                  <span className={`${SERIF} italic text-[#c5a365] text-lg w-10 shrink-0`}>{item.n}</span>
                  <span
                    className={`${SERIF} text-xl md:text-3xl leading-tight flex-1 transition-colors ${
                      isOpen ? "text-[#0E1B2D]" : "text-[#0E1B2D]/50 group-hover:text-[#0E1B2D]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[#c5a365] bg-[#c5a365] text-white rotate-45"
                        : "border-[#0E1B2D]/20 text-[#0E1B2D]/50 group-hover:border-[#c5a365] group-hover:text-[#c5a365]"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 md:pl-[4.5rem] max-w-2xl text-[#0E1B2D]/60 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- 06 — Events (filmstrip) ---------------------------------- */

const SampleEvents = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const items = [
    { title: "Music Concerts & Shows", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070" },
    { title: "Conference & Forums", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070" },
    { title: "Business Meets", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084" },
    { title: "Sports Events", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070" },
    { title: "Product Promotions", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012" },
  ];
  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };
  return (
    <section id="events" className="w-full py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionMark index="06" label="Networking & Growth" />
            <h2 className={`mt-6 ${SERIF} text-[#0E1B2D] text-4xl md:text-5xl font-medium leading-tight max-w-xl`}>
              Business Events &amp; Entertainment
            </h2>
          </Reveal>
          <div className="hidden md:flex gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="w-11 h-11 flex items-center justify-center border border-[#0E1B2D]/15 text-[#0E1B2D]/50 hover:border-[#c5a365] hover:text-[#c5a365] transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="w-11 h-11 flex items-center justify-center border border-[#0E1B2D]/15 text-[#0E1B2D]/50 hover:border-[#c5a365] hover:text-[#c5a365] transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 px-6 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={item.title} className="relative shrink-0 w-[78vw] sm:w-[380px] h-[480px] snap-start overflow-hidden group cursor-pointer">
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2D]/95 via-[#0E1B2D]/20 to-transparent" />
            <span className={`absolute top-6 left-6 ${SERIF} italic text-white/70 text-sm`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="block h-px w-8 bg-[#c5a365] mb-4 group-hover:w-14 transition-all duration-500" />
              <h4 className="text-white text-lg font-medium leading-snug">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------------------------------- 07 — Partnerships ---------------------------------- */

const SamplePartnerships = () => {
  const cards = [
    { n: "01", title: "Investors Connect", subtitle: "Business Investment Partnership", items: ["Venture Capital", "Angel Investors", "Private Equity"] },
    { n: "02", title: "Merger & Acquisition", subtitle: "Business Advisory & Collaboration", items: ["Due Diligence", "Valuation", "Integration Strategy"] },
    { n: "03", title: "Franchise Partnership", subtitle: "Business Partnership", items: ["Master Franchise", "Unit Franchise", "Area Development"] },
    { n: "04", title: "Collaboration & Tie-Ups", subtitle: "Business Expansion Partnership", items: ["Joint Ventures", "Strategic Alliances", "Co-Branding"] },
    { n: "05", title: "Technology Partners", subtitle: "Business Expansion Partnership", items: ["Platform Integrations", "Digital Transformation", "EdTech Solutions"] },
    { n: "06", title: "Fundraising", subtitle: "Foundation", items: ["Seed Funding", "Series A/B", "Debt Financing"] },
  ];
  return (
    <section id="partnerships" className="w-full py-24 md:py-32 bg-[#0E1B2D]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <Reveal>
          <SectionMark index="07" label="Global Collaborations" dark />
          <h2 className={`mt-6 mb-16 ${SERIF} text-white text-4xl md:text-5xl font-medium leading-tight`}>
            Partnerships &amp; Tie-Ups
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {cards.map((card, i) => (
            <Reveal
              key={card.n}
              delay={i * 0.05}
              className="border-r border-b border-white/10 p-8 md:p-10 flex flex-col hover:bg-white/[0.03] transition-colors"
            >
              <span className={`${SERIF} italic text-[#c5a365] text-sm`}>{card.n}</span>
              <h4 className={`mt-4 ${SERIF} text-white text-2xl font-medium leading-snug`}>{card.title}</h4>
              <p className="mt-2 text-[#c5a365] text-[10px] font-semibold tracking-[0.2em] uppercase">{card.subtitle}</p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {card.items.map((item) => (
                  <li key={item} className="text-white/50 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <GoldLink href="#contact" dark>
                  Partner with us
                </GoldLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- 08 — Academy ---------------------------------- */

const SampleAcademy = () => {
  const groups = [
    { title: "Coaching & Leadership", items: ["Board Coaching", "CXO Coaching", "Young Leaders", "Executive Coaching", "Coaching the Trainers"] },
    { title: "Sales & Influence", items: ["You Are a Brand", "Sell Like a Champion", "Power Selling", "Impact Presentations", "Customer First"] },
    { title: "Business Mastery", items: ["Influencing Others", "Decision Making", "Negotiation Techniques", "Business Etiquettes", "Managing Communication"] },
  ];
  return (
    <section id="academy" className="w-full py-24 md:py-32 bg-[#f8f6f0]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal>
            <SectionMark index="08" label="Executive Education" />
            <h2 className={`mt-6 ${SERIF} text-[#0E1B2D] text-4xl md:text-5xl font-medium leading-tight`}>
              VK Business Academy
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm text-[#0E1B2D]/60 text-sm leading-relaxed">
            <p>Fifteen curricula across three disciplines — coaching leaders, sharpening influence, and mastering the business of business.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <h4 className={`${SERIF} italic text-[#0E1B2D] text-xl mb-6 pb-4 border-b border-[#0E1B2D]/15`}>
                {group.title}
              </h4>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#contact"
                      className="flex items-center gap-3 py-3 border-b border-[#0E1B2D]/10 text-[#0E1B2D]/70 hover:text-[#0E1B2D] hover:pl-2 transition-all duration-300 text-[15px] group"
                    >
                      <span className="text-[#c5a365] group-hover:translate-x-0.5 transition-transform">—</span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- 09 — Employers ---------------------------------- */

const employerMarks = Array.from({ length: 14 });

const EmployerMarkRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="w-full overflow-hidden group">
    <div
      className={`flex w-max gap-5 py-2.5 ${reverse ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
    >
      {[...employerMarks, ...employerMarks, ...employerMarks, ...employerMarks].map((_, i) => (
        <div
          key={i}
          className="w-40 h-24 shrink-0 border border-[#0E1B2D]/10 flex items-center justify-center hover:border-[#c5a365]/60 transition-colors duration-300"
        >
          <span className="w-2 h-2 rotate-45 border border-[#0E1B2D]/25" />
        </div>
      ))}
    </div>
  </div>
);

const SampleEmployers = () => {
  return (
    <section id="employers" className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 mb-16">
        <Reveal>
          <SectionMark index="09" label="Trusted By" />
          <h2 className={`mt-6 ${SERIF} text-[#0E1B2D] text-4xl md:text-5xl font-medium leading-tight`}>
            Top Employers
          </h2>
        </Reveal>
      </div>
      <div className="flex flex-col gap-5">
        <EmployerMarkRow />
        <EmployerMarkRow reverse />
      </div>
    </section>
  );
};

/* ---------------------------------- Footer ---------------------------------- */

const SampleFooter = () => {
  const quickLinks = ["About Us", "Global Retained Search", "Management Services", "Coaching & Mentoring", "Internship Programs"];
  const memberships = ["VRK Billionaires Club", "VRK Millionaires Club", "VRK Global CXO Network", "Global Diversity Business Club", "Events & Entertainment"];
  const partnerships = ["Business Opportunities", "Franchise Partnership", "Collaborations & Tie-Ups", "Luxury Marketplace", "Luxury Real Estate"];
  const footerSocials = [{ Icon: FaFacebookF }, { Icon: FaInstagram }, { Icon: FaLinkedinIn }, { Icon: FaXTwitter }, { Icon: FaWhatsapp }, { Icon: FaYoutube }];

  return (
    <footer id="contact" className="w-full bg-[#0E1B2D] pt-24 md:pt-32 pb-10 border-t border-white/10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 pb-20 border-b border-white/10">
          <Reveal>
            <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.25em] uppercase">Get in touch</span>
            <h2 className={`mt-6 ${SERIF} text-white text-4xl md:text-6xl font-medium leading-[1.05]`}>
              Let&rsquo;s build your <span className="italic text-[#c5a365]">next chapter.</span>
            </h2>
            <div className="mt-10 flex flex-col gap-3 text-white/60 text-sm">
              <a href="mailto:business@ibasearch.com" className="hover:text-[#c5a365] transition-colors w-fit">
                business@ibasearch.com
              </a>
              <a href="tel:+918802756666" className="hover:text-[#c5a365] transition-colors w-fit">
                +91 88027-56666 &nbsp;/&nbsp; +91 88027-06666
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-3 text-sm outline-none focus:border-[#c5a365] transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#c5a365] text-[#0E1B2D] text-[11px] font-semibold tracking-[0.15em] uppercase px-7 py-3 hover:bg-white transition-colors duration-300 cursor-pointer"
              >
                Join the Network <ArrowRight size={14} />
              </button>
            </form>
            <p className="mt-4 text-white/30 text-xs">One line. No spam. A member of our team will follow up personally.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div>
            <h3 className={`${SERIF} italic text-white text-sm mb-6`}>Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link key={link} href="#" className="text-white/45 hover:text-[#c5a365] text-[13px] transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${SERIF} italic text-white text-sm mb-6`}>Membership</h3>
            <div className="flex flex-col gap-3">
              {memberships.map((link) => (
                <Link key={link} href="#" className="text-white/45 hover:text-[#c5a365] text-[13px] transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${SERIF} italic text-white text-sm mb-6`}>Partnerships</h3>
            <div className="flex flex-col gap-3">
              {partnerships.map((link) => (
                <Link key={link} href="#" className="text-white/45 hover:text-[#c5a365] text-[13px] transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${SERIF} italic text-white text-sm mb-6`}>Follow</h3>
            <div className="flex flex-wrap gap-2">
              {footerSocials.map(({ Icon }, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/50 hover:text-[#c5a365] hover:border-[#c5a365]/50 transition-colors"
                >
                  <Icon size={13} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-white/30 text-xs">
          <span>&copy; {new Date().getFullYear()} International Business Advantage. All rights reserved.</span>
          <span className={`${SERIF} italic text-white/50`}>Gurgaon &middot; Global</span>
        </div>
      </div>
    </footer>
  );
};

/* ---------------------------------- Page ---------------------------------- */

export default function SamplePage() {
  return (
    <main className="min-h-screen bg-white">
      <SampleNavbar />
      <SampleHero />
      <SampleLocations />
      <SampleAbout />
      <SampleNetwork />
      <SampleGlobalSearch />
      <SampleAdvisory />
      <SampleEvents />
      <SamplePartnerships />
      <SampleAcademy />
      <SampleEmployers />
      <SampleFooter />
    </main>
  );
}
