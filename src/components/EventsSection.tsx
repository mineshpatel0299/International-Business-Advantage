import React from 'react';
import { Calendar } from 'lucide-react';
import ParallaxWrapper from './ParallaxWrapper';

export default function EventsSection() {
  const smallItems = [
    { title: "CONFERENCE & FORUMS" },
    { title: "BUSINESS MEETS" },
    { title: "SPORTS EVENTS" },
    { title: "PRODUCT PROMOTIONS" }
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
              Business Events & Entertainment
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Left Large Item */}
            <div className="flex flex-col h-full bg-[#0a2543]">
              <div className="w-full flex-1 min-h-[300px] bg-[#dcdcdc]"></div>
              <div className="flex flex-col items-center justify-center pt-4 pb-1 text-center">
                <h3 className="text-white text-[13px] font-semibold tracking-wide uppercase">
                  MUSIC CONCERTS & SHOWS
                </h3>
              </div>
            </div>
            
            {/* Right Side 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {smallItems.map((item, idx) => (
                <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                  <div className="w-full aspect-[4/3] bg-[#dcdcdc]"></div>
                  <div className="flex flex-col items-center justify-center pt-3 pb-1 text-center">
                    <h3 className="text-white text-[11px] font-semibold tracking-wide uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
