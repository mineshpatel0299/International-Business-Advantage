import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    { title: 'Global Search Company', slug: 'global-search-company' },
    { title: 'Board Advisory & Consulting', slug: 'board-advisory-consulting' },
    { title: 'VRK Business Academy', slug: 'vk-business-academy' },
    { title: 'Business Partnerships & Collaborations', slug: 'business-partnerships-collaborations' },
    { title: 'Business Events & Entertainment', slug: 'business-events-entertainment' },
  ];

  return (
    <section className="w-full flex flex-col items-center py-8 sm:py-10 md:py-14 bg-[#0E1B2D]">

      {/* Main Content Area */}
      <div className="w-full px-4 lg:px-8">

        {/* Golden Border Box */}
        <div className="border-2 border-[#eab308] bg-[#0a2543] p-5 sm:p-8 md:p-10 w-full">

          {/* Header */}
          <div className="text-center mb-6 md:mb-9">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
              Our Services
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-white"></div>

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center py-4 px-2 text-center flex-1">
                  <h3 className="text-white text-[14px] md:text-[16px] font-bold tracking-wide uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Single Action Button */}
                <div className="flex w-full mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-3 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center"
                  >
                    APPLY NOW
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


