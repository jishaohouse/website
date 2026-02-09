"use client";

import { useEffect, useRef } from "react";

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

      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onVerify(token),
        "error-callback": () => onError?.(),
        "expired-callback": () => onExpire?.(),
      });
    };

    // Define the callback function globally so the script can call it
    window.onTurnstileLoad = () => {
      if (containerRef.current && !widgetId.current) {
        renderWidget();
      }
    };

    // If script is already loaded and turnstile object exists
    if (window.turnstile && containerRef.current && !widgetId.current) {
      renderWidget();
    }

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
      // Clean up global callback? Maybe not strictly necessary but good practice if we want to be clean.
      // But multiple components might use it? Assuming singleton usage or okay to overwrite.
      // window.onTurnstileLoad = undefined; 
    };
  }, [siteKey, onVerify, onError, onExpire]);

  return (
    <>
      <script 
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad" 
        async 
        defer
      ></script>
      <div ref={containerRef} className="my-4" />
    </>
  );
}
