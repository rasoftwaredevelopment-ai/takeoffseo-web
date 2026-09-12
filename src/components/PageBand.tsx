import type { ReactNode } from "react";

type PageBandProps = {
  children: ReactNode;
};

export function PageBand({ children }: PageBandProps) {
  return (
    <div className="page-band">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {children}
      </div>
    </div>
  );
}
