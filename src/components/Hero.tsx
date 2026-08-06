"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ParallaxWrapper from './ParallaxWrapper';

const slides = [
  {
    image: "/hero-bg.png",
    title: "International Business Advantage",
    subtitle: "A CXO BUSINESS NETWORK PLATFORM"
  },
  {
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop",
    title: "Global Leadership Excellence",
    subtitle: "CONNECTING VISIONARY LEADERS"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    title: "Strategic Corporate Alliances",
    subtitle: "EMPOWERING BUSINESS GROWTH"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Transformational Coaching",
    subtitle: "ELEVATING EXECUTIVE POTENTIAL"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Transformational Coaching",
    subtitle: "ELEVATING EXECUTIVE POTENTIAL"
  },
  {
    image: "/hero-bg.png",
    title: "International Business Advantage",
    subtitle: "A CXO BUSINESS NETWORK PLATFORM"
  },
  {
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop",
    title: "Global Leadership Excellence",
    subtitle: "CONNECTING VISIONARY LEADERS"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Transformational Coaching",
    subtitle: "ELEVATING EXECUTIVE POTENTIAL"
  },
  {
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop",
    title: "Global Leadership Excellence",
    subtitle: "CONNECTING VISIONARY LEADERS"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Transformational Coaching",
    subtitle: "ELEVATING EXECUTIVE POTENTIAL"
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full flex flex-col">
      <div className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0E1B2D]">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <ParallaxWrapper offset={100} direction="down" className="absolute inset-0 w-full h-full scale-[1.15]">
              {slide.image.startsWith('/') ? (
                <Image
                  src={slide.image}
                  alt="Background"
                  fill
                  className="object-cover object-center opacity-70"
                  priority={index === 0}
                />
              ) : (
                <img
                  src={slide.image}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                />
              )}
            </ParallaxWrapper>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2D] via-[#0E1B2D]/50 to-[#0E1B2D]/20"></div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <div
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-gray-400 cursor-pointer hover:text-white transition"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </div>
        <div
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-gray-400 cursor-pointer hover:text-white transition"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </div>

        {/* Main Content Area */}
        <div className="absolute inset-0 z-10 w-full w-full px-4 md:px-16 pointer-events-none">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 absolute flex flex-col items-center text-center w-full left-1/2 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ pointerEvents: index === currentSlide ? 'auto' : 'none', bottom: '2.75rem', transform: index === currentSlide ? 'translateX(-50%)' : 'translate(-50%, 2rem)' }}
            >
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-2 leading-tight whitespace-nowrap">
                {slide.title}
              </h1>
              <h2 className="text-[#c5a365] text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                {slide.subtitle}
              </h2>
              {/* <button className="flex items-center gap-3 px-8 py-3 border border-[#c5a365]/50 text-[#c5a365] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#c5a365] hover:text-[#0E1B2D] transition-all duration-300">
                EXPLORE NETWORK <ArrowRight size={16} />
              </button> */}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-[#c5a365] scale-125' : 'bg-gray-500 hover:bg-gray-400'
                }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full bg-[#3fa2f6] py-6 z-20 shadow-sm relative">
        <p className="text-xl md:text-3xl text-center text-white font-medium tracking-wide">
          Be an Achiever... not a performer
        </p>
      </div>
    </div>
  );
}
