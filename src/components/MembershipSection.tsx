import React from 'react';
import Link from 'next/link';

export default function MembershipSection() {
  const memberships = [
    { title: 'CXO Club', href: '/services/cxo-business-network-platform' },
    { title: 'Billionaire Club' },
    { title: 'Coming Soon' },
    { title: 'Coming Soon' },
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
              Membership
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
            {memberships.map((membership, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-white"></div>

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center py-4 px-2 text-center flex-1">
                  <h3 className="text-white text-[14px] md:text-[16px] font-bold tracking-wide uppercase leading-tight">
                    {membership.title}
                  </h3>
                </div>

                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  {membership.href ? (
                    <Link
                      href={membership.href}
                      className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-3 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center"
                    >
                      READ MORE
                    </Link>
                  ) : (
                    <button className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-3 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                      READ MORE
                    </button>
                  )}
                  <Link
                    href="/enquiry#enquiry-form"
                    className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-3 text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center"
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
