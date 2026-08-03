import React from 'react';

export default function PartnershipsSection() {
  const items = [
    { title: "INVESTORS CONNECT", subtitle: "BUSINESS INVESTMENT PARTNERSHIP" },
    { title: "MERGER & ACQUISITION", subtitle: "BUSINESS ADVISORY & COLLABORATION" },
    { title: "FRANCHISE PARTNERSHIP", subtitle: "BUSINESS PARTNERSHIP" },
    { title: "COLLABORATION & TIE-UPS", subtitle: "BUSINESS EXPANSION PARTNERSHIP" },
    { title: "TECHNOLOGY PARTNERS", subtitle: "BUSINESS EXPANSION PARTNERSHIP" },
    { title: "FUNDRAISING", subtitle: "FOUNDATION" },
  ];

  return (
    <section className="w-full flex flex-col items-center pb-20">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-12 w-full bg-[#071326]">
          
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center mb-10 uppercase">
            Business Partnerships & Collaborations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Gray Placeholder Image */}
                <div className="w-full aspect-[4/3] bg-[#cfd1d4] mb-3"></div>
                
                {/* Role Text */}
                <div className="text-center mb-4 flex-1">
                  <h3 className="text-white text-[13px] font-semibold tracking-wide leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-[10px] tracking-wider mt-1 uppercase">{item.subtitle}</p>
                </div>
                
                {/* Buttons Container */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#1e4a86] hover:bg-[#1a3d6b] transition text-white py-2.5 px-1 text-[9px] font-bold tracking-wider text-center">
                    READ MORE
                  </button>
                  <button className="flex-1 bg-[#3b82f6] hover:bg-blue-600 transition text-white py-2.5 px-1 text-[9px] font-bold tracking-wider text-center">
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
