import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { offers, retainerFaqs, retainerPage } from "@/lib/site";

const offer = offers.retainer;

export const metadata: Metadata = {
  title: retainerPage.title,
  description: retainerPage.lede,
  alternates: { canonical: offer.href },
};

export default function MonthlyRetainerPage() {
  return (
    <ServicePage
      offer={offer}
      title={retainerPage.title}
      lede={retainerPage.lede}
      includes={[
        "Agreed priority Google and AI work each month.",
        "Clear priorities drawn from the Audit or Foundation.",
        "A plain report on what we did and what changed.",
        "Ads only if scoped separately.",
      ]}
      process={[
        {
          title: "Confirm the monthly figure",
          body: "From A$2,000–2,500 depending on the site. Terms sit in the proposal.",
        },
        {
          title: "Work the priorities",
          body: "The jobs you want found for come first.",
        },
        {
          title: "Report",
          body: "A short written update each month.",
        },
      ]}
      faqs={retainerFaqs}
    />
  );
}
