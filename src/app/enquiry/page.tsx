"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const services = [
  "CXO Business Network Platform",
  "Global Search Company",
  "Board Advisory & Consulting",
  "Business Events & Entertainment",
  "Business Partnerships & Collaborations",
  "VK Business Academy",
];

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <Navbar />
      <PageHero
        title="Enquire Now"
        subtitle="GET IN TOUCH WITH OUR TEAM"
        image="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop"
      />

      <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0E1B2D]">
        <div className="w-full px-4 lg:px-8">
          <div className="border-2 border-[#eab308] bg-[#0a2543] p-5 sm:p-8 md:p-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

              {/* Left: Contact Info */}
              <div className="lg:col-span-2 flex flex-col">
                <span className="text-[#c5a365] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Contact Us
                </span>
                <h2 className="text-white text-2xl md:text-3xl font-light tracking-wide leading-tight mb-6">
                  Let&apos;s Discuss Your Business Requirements
                </h2>
                <p className="text-gray-400 text-[13px] leading-relaxed mb-8">
                  Fill in the enquiry form and our team will get back to you to understand
                  your requirements and guide you to the right service.
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt size={16} className="text-[#3fa2f6] mt-1 shrink-0" />
                    <span className="text-gray-300 text-[13px] leading-relaxed">
                      International Business Advantage, Gurgaon, India
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt size={14} className="text-[#3fa2f6] shrink-0" />
                    <span className="text-gray-300 text-[13px] tracking-wide">
                      +91-88027 56666 | +91-88027 06666
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope size={14} className="text-[#3fa2f6] shrink-0" />
                    <span className="text-gray-300 text-[13px] tracking-wide">
                      business@ibasearch.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Enquiry Form */}
              <div className="lg:col-span-3">
                <form
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
                  />
                  <select
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 text-gray-400 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
                  >
                    <option value="" disabled className="bg-[#0a2543]">
                      Service Interested In
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#0a2543] text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Type your Message here"
                    rows={4}
                    className="sm:col-span-2 w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none resize-none focus:border-[#c5a365]/50 transition-colors"
                  ></textarea>

                  <button
                    type="submit"
                    className="sm:col-span-2 w-full bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 mt-2 text-[12px] font-bold tracking-widest uppercase"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
