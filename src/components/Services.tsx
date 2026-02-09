'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PenTool, ThumbsUp, HardHat } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const icons = [
    <HardHat key="1" className="w-8 h-8 text-green-600" />,
    <ShieldCheck key="2" className="w-8 h-8 text-green-600" />,
    <PenTool key="3" className="w-8 h-8 text-green-600" />,
    <ThumbsUp key="4" className="w-8 h-8 text-green-600" />,
  ];

  // Using existing product images for now as placeholders
  const serviceImages = [
    "/products/10.jpg",
    "/products/11.jpg",
    "/products/12.jpg",
    "/products/13.jpg"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t.services.title}
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              {t.services.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 mb-10">
              {t.services.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {icons[index]}
                  </div>
                  <span className="text-slate-900 font-bold text-lg leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link 
              href="#contact" 
              className="inline-flex items-center text-green-600 border border-green-600 px-8 py-3 rounded hover:bg-green-600 hover:text-white transition-colors uppercase font-medium tracking-wide group"
            >
              {t.services.contactUs}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Images Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {serviceImages.map((src, index) => (
                <div key={index} className="relative aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={src}
                    alt={`Service image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
