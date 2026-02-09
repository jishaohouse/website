'use client';

import { Droplets, Thermometer, VolumeX, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Droplets, Thermometer, VolumeX, ShieldCheck];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-slate-100">
                <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
