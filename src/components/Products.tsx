'use client';

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { products, Product } from "@/data/products";

export default function Products() {
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.products.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name[language]}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                  {product.name[language]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="relative w-full h-80 sm:h-[500px] bg-white flex-shrink-0">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name[language]}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="w-full p-6 md:p-8 flex flex-col overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {selectedProduct.name[language]}
              </h3>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="whitespace-pre-line leading-relaxed mb-6">
                  {selectedProduct.description[language]}
                </p>

                {selectedProduct.parameters && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                      {language === 'zh' ? '产品参数' : 'Product Parameters'}
                    </h4>
                    <div className="grid grid-cols-1 gap-y-3 text-sm md:text-base">
                      {selectedProduct.parameters.map((param, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline border-b border-slate-50 pb-2 last:border-0">
                          <span className="font-medium text-slate-800 sm:w-1/3 min-w-[140px]">
                            {param.label[language]}
                          </span>
                          <span className="text-slate-600 sm:w-2/3">
                            {param.value[language]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProduct.advantages && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                      {language === 'zh' ? '产品优势' : 'Product Advantages'}
                    </h4>
                    <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
                      {selectedProduct.advantages.map((adv, idx) => (
                        <li key={idx} className="text-slate-600 pl-1">
                          {adv[language]}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProduct.colors && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                      {language === 'zh' ? '可选颜色' : 'Optional Colors'}
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProduct.colors.map((color, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div 
                            className="w-16 h-16 rounded-full shadow-md border-2 border-white ring-1 ring-slate-200 mb-2"
                            style={{ backgroundColor: color.value }}
                          />
                          <span className="text-sm text-slate-600 font-medium">
                            {color.name[language]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                 <button 
                   className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                   onClick={() => {
                     const contactSection = document.getElementById('contact');
                     if (contactSection) {
                       contactSection.scrollIntoView({ behavior: 'smooth' });
                       setSelectedProduct(null);
                     }
                   }}
                 >
                   {t.header.contact}
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
