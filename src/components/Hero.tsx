'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Using product images as hero banners for now
  const slides = [
    {
      image: "/slides/home1.jpg",
      title: t.hero.title,
      subtitle: t.hero.subtitle,
      alt: "Foshan Jishao Aluminum Windows and Doors Factory Showroom"
    },
    {
      image: "/slides/home2.jpg",
      title: t.hero.title,
      subtitle: t.hero.subtitle,
      alt: "Modern Residential Aluminum Sliding Doors Installation"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative h-[600px] md:h-[800px] overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={true} // Prioritize all hero images to prevent LCP delay
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
            <div className={`w-full max-w-none transition-all duration-1000 transform ${
              index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              {index === 0 ? (
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                  {slide.title}
                </h1>
              ) : (
                <div className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                  {slide.title}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#products" 
                  className="inline-flex items-center text-white text-xl md:text-2xl hover:text-green-400 transition-colors group"
                >
                  {t.hero.viewProducts}
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-green-500 w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
