import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center pb-20 pt-10">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-16 w-full bg-[#071326] flex flex-col items-center text-center">
          
          <h2 className="text-white text-3xl md:text-4xl font-medium tracking-widest mb-8 uppercase">
            About Us
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
            <p>
              <strong className="text-white font-semibold">International Business Advantage</strong> is a Global Search & Business Consulting Company. 
            </p>
            <p>
              IBA undertakes complete projects of Search & Recruitment, Business Consulting, Coaching & Training Solutions with MNCs, Blue Chip Co's, Large Corporate Houses, SME & Family owned businesses since over two and a half decades, based at Gurgaon and have PAN India presence.
            </p>
            <p>
              IBA provides its services in overseas market too.
            </p>
          </div>
          
        </div>
      </div>

    </section>
  );
}
