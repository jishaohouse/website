import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jishaowindows.com'),
  title: {
    default: "Jishao Doors And Windows | Custom Aluminum Manufacturer China",
    template: "%s | Foshan Jishao Doors And Windows"
  },
  description: "Premier manufacturer of custom aluminum doors and windows in Foshan, China. Specializing in thermal break folding doors, sliding systems, and heavy-duty casing. Global export.",
  keywords: [
    "Aluminum Windows China", 
    "Aluminum Doors Manufacturer", 
    "Broken-bridge Aluminum", 
    "Foshan Window Factory", 
    "Custom Aluminum Joinery", 
    "Thermal Break Windows", 
    "Folding Doors Supplier", 
    "Sliding Door Systems", 
    "Heavy Duty Aluminum Doors", 
    "Jishao Windows",
    "Double Glazed Windows China",
    "Soundproof Aluminum Windows"
  ],
  authors: [{ name: "Foshan Jishao Doors And Windows", url: "https://www.jishaowindows.com" }],
  creator: "Foshan Jishao Doors And Windows",
  publisher: "Foshan Jishao Doors And Windows",
  category: "Construction & Home Improvement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Foshan Jishao Doors And Windows | Premium Aluminum Solutions",
    description: "Discover high-end custom aluminum doors and windows from Foshan's leading manufacturer. Quality, durability, and style for residential and commercial projects.",
    url: 'https://www.jishaowindows.com',
    siteName: 'Foshan Jishao Doors And Windows',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
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
    description: "Professional Aluminum Doors & Windows Manufacturer in China. Exporting globally.",
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
    languages: {
      'en-US': 'https://www.jishaowindows.com',
      'zh-CN': 'https://www.jishaowindows.com/zh', // Assuming zh route exists or plan to add
    },
  },
  verification: {
    google: 'verification_token', // User needs to provide this, but I'll add the field
  },
  other: {
    "geo.region": "CN-GD",
    "geo.placename": "Foshan",
    "geo.position": "23.0215;113.1214", // Approximate Foshan coordinates
    "ICBM": "23.0215, 113.1214"
  }
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
