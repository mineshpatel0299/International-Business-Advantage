import React from 'react';
import Link from 'next/link';
import { Shield, Target, Award, Scale, Users, ArrowRight } from 'lucide-react';

export default function AdvisorySection() {
  const items = [
    { title: "CORPORATE GOVERNANCE", subtitle: "ADVISORY", buttonText: "Register Now" },
    { title: "STRATEGIC BUSINESS", subtitle: "CONSULTING", buttonText: "Register Now" },
    { title: "BRANDING, PR & IMAGE", subtitle: "CONSULTING", buttonText: "Register Now" },
    { title: "LEGAL ADVISORY", subtitle: "CONSULTING", buttonText: "Register Now" },
    { title: "HR TRANSFORMATIONAL", subtitle: "CONSULTING", buttonText: "Register Now" },
  ];

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0E1B2D]">

      {/* Main Content Area */}
      <div className="w-full px-4 lg:px-8">

        {/* Golden Border Box */}
        <div className="border-2 border-[#eab308] bg-[#0a2543] p-5 sm:p-8 md:p-12 w-full">

          {/* Header Area */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
              Board Advisory & Consulting
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-square bg-white"></div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center pt-4 pb-3 text-center flex-1">
                  <h3 className="text-white text-[13px] font-bold tracking-wide uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>
                
                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-2.5 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                    READ MORE
                  </button>
                  <Link
                    href="/enquiry#enquiry-form"
                    className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-2.5 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center"
                  >
                    REGISTER NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
