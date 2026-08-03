import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="World Map Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-[#061224]/70"></div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer hover:text-gray-300 transition">
        <ChevronLeft size={64} strokeWidth={1} />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer hover:text-gray-300 transition">
        <ChevronRight size={64} strokeWidth={1} />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center flex flex-col items-center mt-24">
        <h1 className="text-white text-5xl font-light tracking-wide mb-4">
          International Business Advantage
        </h1>
        <h2 className="text-gray-300 text-lg font-medium tracking-[0.2em] mb-12 uppercase">
          A CXO BUSINESS NETWORK PLATFORM
        </h2>

        {/* Carousel Indicators */}
        <div className="flex gap-3 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50 cursor-pointer"></div>
        </div>
      </div>

      {/* Bottom Blue Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3b82f6] text-white text-center py-4 z-10">
        <p className="text-3xl font-medium tracking-wide">
          Be an Achiever... not a performer
        </p>
      </div>
    </div>
  );
}
