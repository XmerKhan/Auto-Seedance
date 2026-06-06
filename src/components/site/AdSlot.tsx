import { useEffect, useRef } from "react";

const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

type Props = {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  /** Visible label shown only when AdSense is not configured (placeholder mode). */
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * AdSense ad slot. Renders a non-breaking placeholder when VITE_ADSENSE_CLIENT
 * is not set. Once configured, swap in your real `slot` IDs from the AdSense UI.
 */
export function AdSlot({ slot, format = "auto", className, label = "Advertisement" }: Props) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!ADSENSE_CLIENT || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense script not loaded yet */
    }
  }, [slot]);

  if (!ADSENSE_CLIENT || !slot) {
    return (
      <div
        className={
          "rounded-xl border border-dashed border-border bg-muted/30 text-muted-foreground text-xs flex items-center justify-center min-h-[90px] " +
          (className ?? "")
        }
        aria-hidden
      >
        {label}
      </div>
    );
  }

  return (
    <ins
      ref={ref}
      className={"adsbygoogle block " + (className ?? "")}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}

export const adsenseClient = ADSENSE_CLIENT;
