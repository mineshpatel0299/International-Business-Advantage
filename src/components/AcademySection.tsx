import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function AcademySection() {
  const items = [
    { title: "BOARD COACHING", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "CXO COACHING", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "YOUNG LEADERS", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "EXECUTIVE COACHING", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "COACHING THE TRAINERS", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "YOU ARE A BRAND", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "SELL LIKE A CHAMPION", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "POWER SELLING", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "IMPACT PRESENTATIONS", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "CUSTOMER FIRST", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "INFLUENCING OTHERS", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "DECISION MAKING", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "NEGOTIATION TECHNIQUES", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "BUSINESS ETIQUETTES", subtitle: "PROGRAM", buttonText: "Apply Now" },
    { title: "MANAGING COMMUNICATION", subtitle: "PROGRAM", buttonText: "Apply Now" }
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#0E1B2D]">

      {/* Main Content Area */}
      <div className="w-full px-4 lg:px-8">

        {/* Golden Border Box */}
        <div className="border-2 border-[#eab308] bg-[#0a2543] p-8 md:p-12 w-full">

          {/* Header Area */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
              VK Business Academy
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-square bg-[#dcdcdc]"></div>

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center py-4 text-center flex-1">
                  <h3 className="text-white text-[12px] font-bold tracking-wide uppercase">
                    {item.title}
                  </h3>
                </div>

                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-2.5 text-[9px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                    READ MORE
                  </button>
                  <button className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-2.5 text-[9px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
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
