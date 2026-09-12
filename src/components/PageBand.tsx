import type { ReactNode } from "react";

type PageBandProps = {
  children: ReactNode;
};

export function PageBand({ children }: PageBandProps) {
  return (
    <div className="hero-grid bg-navy text-paper-50">
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-20">
        {children}
      </div>
    </div>
  );
}
