'use client';

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/slides/home2.jpg" 
                alt="About Foshan Jishao Doors and Windows Factory" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
              {t.about.years}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.about.title}
            </h2>
            <h3 className="text-xl text-green-700 font-medium mb-6">
              {t.about.subtitle}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              {t.about.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {t.about.points.map((item, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
