'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">{t.footer.company}</h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61581689489765" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/8613553338986" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-4">
              <li><Link href="/#hero" className="hover:text-green-500 transition-colors">{t.header.home}</Link></li>
              <li><Link href="/#products" className="hover:text-green-500 transition-colors">{t.header.products}</Link></li>
              <li><Link href="/#about" className="hover:text-green-500 transition-colors">{t.header.about}</Link></li>
              <li><Link href="/#factory" className="hover:text-green-500 transition-colors">{t.header.projects}</Link></li>
              <li><Link href="/#contact" className="hover:text-green-500 transition-colors">{t.header.contact}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">{t.footer.ourProducts}</h3>
            <ul className="space-y-4">
              {t.products.items.map((item, index) => (
                <li key={index}><Link href="/#products" className="hover:text-green-500 transition-colors">{item.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">{t.footer.contactUs}</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                <span>No. 8, Bo&apos;ai East Road, Nanhai District, Foshan City, Guangdong Province, China, 528200</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                <a href="tel:+8613553338986" className="hover:text-white transition-colors">+86 135 5333 8986</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                <a href="mailto:zengkaoyuanfs@gmail.com" className="hover:text-white transition-colors">zengkaoyuanfs@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-green-500 transition-colors">
              {t.footer.privacyPolicy}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
