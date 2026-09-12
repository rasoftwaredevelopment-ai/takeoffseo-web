import { absoluteUrl, brand, siteUrl } from "@/lib/site";

export const organizationId = `${siteUrl}#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: brand.name,
    legalName: brand.legalName,
    url: siteUrl,
    email: brand.email,
    telephone: brand.phoneTel,
    image: absoluteUrl("/icon.svg"),
    description: brand.tagline,
    areaServed: {
      "@type": "AdministrativeArea",
      name: brand.areaServed,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: brand.hours,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: brand.phoneTel,
      email: brand.email,
      areaServed: brand.areaServed,
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        description: brand.hours,
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  price?: string;
  priceCurrency?: string;
  priceSpecification?: Record<string, unknown>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": organizationId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: brand.areaServed,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(input.path),
      priceCurrency: input.priceCurrency ?? "AUD",
      ...(input.price ? { price: input.price } : {}),
      ...(input.priceSpecification
        ? { priceSpecification: input.priceSpecification }
        : {}),
    },
  };
}
