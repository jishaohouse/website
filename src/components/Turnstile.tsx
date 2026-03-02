"use client";

import { useEffect, useRef } from "react";

import Script from "next/script";

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  [key: string]: unknown;
}

interface TurnstileObject {
  render: (element: HTMLElement, options: TurnstileOptions) => string;
  remove: (widgetId: string) => void;
  reset: () => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileObject;
    onTurnstileLoad?: () => void;
  }
}

export default function Turnstile({ siteKey, onVerify, onError, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;

      // Check if widget is already rendered to avoid duplicates
      if (widgetId.current) return;

      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onVerify(token),
        "error-callback": () => onError?.(),
        "expired-callback": () => onExpire?.(),
      });
    };

    // If script is already loaded and turnstile object exists
    if (window.turnstile && containerRef.current && !widgetId.current) {
      renderWidget();
    }

    // Define the global callback for the script
    window.onTurnstileLoad = () => {
       renderWidget();
    };

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [siteKey, onVerify, onError, onExpire]);

  return (
    <>
      <Script 
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
        strategy="lazyOnload"
      />
      <div ref={containerRef} className="my-4 min-h-[65px]" />
    </>
  );
}
