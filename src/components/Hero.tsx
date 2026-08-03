"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
  }
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
    <div className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.image.startsWith('/') ? (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          )}
          {/* Dark overlay to make text more readable */}
          <div className="absolute inset-0 bg-[#0c1018]/70"></div>
        </div>
      ))}

      {/* Carousel Navigation Arrows */}
      <div 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer hover:text-gray-300 transition"
      >
        <ChevronLeft size={64} strokeWidth={1} />
      </div>
      <div 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer hover:text-gray-300 transition"
      >
        <ChevronRight size={64} strokeWidth={1} />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center flex flex-col items-center mt-12 md:mt-24 w-full px-16 h-[140px] justify-center">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`transition-all duration-1000 absolute w-full flex flex-col items-center ${
              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-light tracking-wide mb-4">
              {slide.title}
            </h1>
            <h2 className="text-gray-300 text-xs md:text-lg font-medium tracking-[0.2em] uppercase">
              {slide.subtitle}
            </h2>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="relative z-10 flex gap-3 mt-8 md:mt-12">
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-white opacity-100 scale-125' : 'bg-white opacity-40 hover:opacity-70'
            }`}
          ></div>
        ))}
      </div>

      {/* Bottom Blue Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3b82f6] text-white text-center py-4 z-20">
        <p className="text-xl md:text-3xl font-medium tracking-wide">
          Be an Achiever... not a performer
        </p>
      </div>
    </div>
  );
}
