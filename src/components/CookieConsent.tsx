"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Use setTimeout to avoid setting state synchronously in effect
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#171717] text-white p-4 md:p-6 shadow-lg border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 md:max-w-2xl">
          <p>
            {t.cookies.text}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-[#171717] bg-white rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            {t.cookies.reject}
          </button>
          
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
