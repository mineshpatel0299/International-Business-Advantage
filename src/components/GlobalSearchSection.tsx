import React from 'react';
import Link from 'next/link';
import { Search, Briefcase, ChevronRight } from 'lucide-react';

export default function GlobalSearchSection() {
  const roles = [
    { title: "MD, DIRECTORS, CEO" },
    { title: "CXO, VP, GM" },
    { title: "DGM-MANAGERS" },
    { title: "INTERNS" }
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
              Global Search Company
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-square bg-white"></div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center justify-center py-4 text-center">
                  <h3 className="text-white text-[12px] font-semibold tracking-wide uppercase">
                    {role.title}
                  </h3>
                </div>
                
                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  <Link
                    href="/job-seeker-enquiry"
                    className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-2.5 px-1 text-[9px] font-bold tracking-wide whitespace-nowrap transition-colors flex items-center justify-center"
                  >
                    JOB SEEKER APPLY HERE
                  </Link>
                  <Link
                    href="/employer-enquiry"
                    className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-2.5 px-1 text-[9px] font-bold tracking-wide whitespace-nowrap transition-colors flex items-center justify-center"
                  >
                    EMPLOYER APPLY HERE
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
