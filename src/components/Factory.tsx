'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Factory() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Update itemsToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use existing images as factory images for now
  const factoryImages = [
    { src: "/factory/1.webp", alt: "Aluminum Extrusion and Processing Workshop" },
    { src: "/factory/2.webp", alt: "Automated Window Assembly Line" },
    { src: "/factory/3.webp", alt: "Precision CNC Cutting Machine for Aluminum Profiles" },
    { src: "/factory/4.webp", alt: "Quality Control and Inspection Station" },
    { src: "/factory/5.webp", alt: "Finished Aluminum Doors and Windows Warehouse" }
  ];

  const maxIndex = Math.max(0, factoryImages.length - itemsToShow);

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="factory" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.factory.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.factory.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Slider Area */}
          <div className="relative bg-slate-50 p-4 rounded-xl">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4"
                style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
              >
                {factoryImages.map((img, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] relative group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-slate-200">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Green Banner */}
                    <div className="bg-green-600 text-white text-center py-3 font-medium">
                      {t.factory.itemLabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                startIndex === 0 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-green-600 text-white hover:bg-green-700 shadow-lg"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex >= maxIndex}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                startIndex >= maxIndex 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-green-600 text-white hover:bg-green-700 shadow-lg"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
