'use client';

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {t.footer.company}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/#hero" className="hover:text-green-600 transition-colors">
            {t.header.home}
          </Link>
          {/* Services Link - Assuming you have a services section now, if not link to features or a new id */}
          <Link href="/#features" className="hover:text-green-600 transition-colors">
            {t.header.services}
          </Link>
          <Link href="/#products" className="hover:text-green-600 transition-colors">
            {t.header.products}
          </Link>
          <Link href="/#factory" className="hover:text-green-600 transition-colors">
            {t.header.projects}
          </Link>
          <Link href="/#about" className="hover:text-green-600 transition-colors">
            {t.header.about}
          </Link>
          <Link href="/#contact" className="hover:text-green-600 transition-colors">
            {t.header.contact}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">


          <LanguageSwitcher />
          
          <a 
            href="https://wa.me/8613539314842" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{t.header.whatsapp}</span>
          </a>
          
          <Link 
            href="/#contact" 
            className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {t.header.getQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
