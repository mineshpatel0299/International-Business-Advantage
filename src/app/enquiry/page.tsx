"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

const services = [
  { title: "CXO Business Network Platform", slug: "cxo-business-network-platform" },
  { title: "Global Search Company", slug: "global-search-company" },
  { title: "Board Advisory & Consulting", slug: "board-advisory-consulting" },
  { title: "Business Events & Entertainment", slug: "business-events-entertainment" },
  { title: "Business Partnerships & Collaborations", slug: "business-partnerships-collaborations" },
  { title: "VK Business Academy", slug: "vk-business-academy" },
];

export default function EnquiryPage() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const activeService = services.find((service) => service.slug === activeSlug) ?? services[0];

  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <Navbar />

      <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0E1B2D]">
        <div className="w-full px-4 lg:px-8">
          <div className="border-2 border-[#eab308] bg-[#0a2543] p-5 sm:p-8 md:p-12 w-full">

            {/* Header Area */}
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
                Employers Enquiry Form
              </h2>
              <p className="text-gray-400 text-[13px] leading-relaxed mt-4 max-w-xl mx-auto">
                Select a service below and fill in the enquiry form. Our team will get
                back to you to understand your requirements.
              </p>
            </div>

            {/* Service Capsule Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10 md:mb-12 max-w-4xl mx-auto">
              {services.map((service) => {
                const isActive = service.slug === activeSlug;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setActiveSlug(service.slug)}
                    className={`px-4 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase border transition-colors ${
                      isActive
                        ? "bg-[#c5a365] border-[#c5a365] text-[#0E1B2D]"
                        : "bg-transparent border-white/15 text-gray-300 hover:border-[#c5a365]/60 hover:text-[#c5a365]"
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <EnquiryForm key={activeService.slug} serviceName={activeService.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
