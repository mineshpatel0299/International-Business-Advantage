import React from 'react';
import { ArrowRight } from 'lucide-react';
import ParallaxWrapper from './ParallaxWrapper';

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center py-24 relative bg-[#f8f6f0] overflow-visible">

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8 relative">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-[#c5a365] text-xs font-semibold tracking-[0.2em] uppercase">
                  About Us
                </span>
              </div>
              <h2 className="text-[#0E1B2D] text-4xl lg:text-5xl font-light tracking-wide leading-tight">
                Global Connections. <br />
                Strategic Advantage.
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed font-light relative z-10 pr-4">
              <p>
                <strong className="text-[#0E1B2D] font-medium">International Business Advantage</strong> is a Global Search & Business Consulting Company.
              </p>
              <p>
                IBA undertakes complete projects of Search & Recruitment, Business Consulting, Coaching & Training Solutions with MNCs, Blue Chip Co's, Large Corporate Houses, SME & Family owned businesses since over two and a half decades, based at Gurgaon and have PAN India presence.
              </p>
              <p>
                IBA provides its services in overseas market too.
              </p>
            </div>

            <div className="pt-4 relative z-10">
              <button className="flex items-center gap-3 px-8 py-3 bg-[#0E1B2D] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gray-800 transition-all duration-300">
                KNOW MORE ABOUT US <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-sm">
              <ParallaxWrapper offset={60} direction="up" className="w-full h-[120%] -mt-[10%]">
                <img
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop"
                  alt="Corporate Boardroom"
                  className="w-full h-full object-cover object-center"
                />
              </ParallaxWrapper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
