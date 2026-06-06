import { useEffect, useRef } from "react";
import { useRouter } from "@tanstack/react-router";

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4 loader + SPA pageview tracking.
 * Only loads if VITE_GA_ID is set (e.g. "G-XXXXXXX").
 * Safe no-op otherwise — won't ship analytics in dev or before setup.
 */
export function Analytics() {
  const router = useRouter();
  const loaded = useRef(false);

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;
    if (loaded.current) return;
    loaded.current = true;

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: true });
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    const unsub = router.subscribe("onResolved", ({ toLocation }) => {
      window.gtag?.("event", "page_view", {
        page_path: toLocation.pathname + toLocation.searchStr,
        page_location: window.location.href,
      });
    });
    return unsub;
  }, [router]);

  return null;
}

/** Fire a custom conversion event. Safe no-op if GA isn't configured. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params ?? {});
}
