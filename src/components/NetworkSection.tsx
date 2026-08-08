import React from 'react';
import { ArrowRight, Users, UserCog, Megaphone, Briefcase, Monitor, FileText, DollarSign, UserCheck } from 'lucide-react';
import ParallaxWrapper from './ParallaxWrapper';

export default function NetworkSection() {
  const roles = [
    { title: "Managing Director", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief Executive Officer", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief Marketing Officer", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief Business Officer", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief Digital Officer", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief Information Officer", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief Financial Officer", subtitle: "Business Network", buttonText: "Membership Open" },
    { title: "Chief HR Officer", subtitle: "Business Network", buttonText: "Membership Open" }
  ];

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0E1B2D]">

      {/* Main Content Area */}
      <div className="w-full px-4 lg:px-8">

        {/* Golden Border Box */}
        <div className="border-2 border-[#eab308] bg-[#0a2543] p-5 sm:p-8 md:p-12 w-full">

          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
              CXO Business Network Platform: Connecting Global
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* Gray Image Placeholder */}
                <div className="w-full aspect-square bg-[#dcdcdc]"></div>

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center py-4 text-center flex-1">
                  <h3 className="text-white text-[12px] font-bold tracking-wide uppercase">
                    {role.title}
                  </h3>
                </div>

                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-2.5 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                    READ MORE
                  </button>
                  <button className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-2.5 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
