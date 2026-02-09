import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jishaowindows.com'),
  title: {
    default: "Foshan Jishao Doors And Windows | Professional Aluminum Manufacturer",
    template: "%s | Foshan Jishao Doors And Windows"
  },
  description: "Top-rated manufacturer of high-quality broken-bridge aluminum doors, windows, and sunrooms in Foshan, China. 25+ years of experience in custom residential and commercial solutions.",
  keywords: ["Aluminum Windows", "Aluminum Doors", "Sunrooms", "Broken-bridge Aluminum", "Foshan Window Manufacturer", "China Door Factory", "Custom Windows", "Sliding Doors", "Folding Doors", "Casement Windows"],
  authors: [{ name: "Foshan Jishao Doors And Windows" }],
  creator: "Foshan Jishao Doors And Windows",
  publisher: "Foshan Jishao Doors And Windows",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Foshan Jishao Doors And Windows | Premium Aluminum Solutions",
    description: "Discover high-end custom aluminum doors and windows from Foshan's leading manufacturer. Quality, durability, and style for your home.",
    url: 'https://www.jishaowindows.com',
    siteName: 'Foshan Jishao Doors And Windows',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/slides/home1.jpg',
        width: 1200,
        height: 630,
        alt: 'Foshan Jishao Factory and Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Foshan Jishao Doors And Windows",
    description: "Professional Aluminum Doors & Windows Manufacturer in China.",
    images: ['/slides/home1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.jishaowindows.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G1YL3C2TWB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-G1YL3C2TWB');
          `}
        </Script>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
