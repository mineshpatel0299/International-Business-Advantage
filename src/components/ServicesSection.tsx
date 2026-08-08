import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    { title: 'CXO Business Network Platform', slug: 'cxo-business-network-platform' },
    { title: 'Global Search Company', slug: 'global-search-company' },
    { title: 'Board Advisory & Consulting', slug: 'board-advisory-consulting' },
    { title: 'Business Events & Entertainment', slug: 'business-events-entertainment' },
    { title: 'Business Partnerships & Collaborations', slug: 'business-partnerships-collaborations' },
    { title: 'VK Business Academy', slug: 'vk-business-academy' },
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
              Our Services
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-square bg-white"></div>

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center py-4 text-center flex-1">
                  <h3 className="text-white text-[12px] font-bold tracking-wide uppercase">
                    {service.title}
                  </h3>
                </div>

                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-2.5 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center"
                  >
                    READ MORE
                  </Link>
                  <Link
                    href="/enquiry"
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
