import type { Metadata } from "next";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CinematicHero } from "@/components/home/CinematicHero";
import { EducationBand } from "@/components/home/EducationBand";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HowTakeoffHelps } from "@/components/home/HowTakeoffHelps";
import { SnapshotCta } from "@/components/home/SnapshotCta";
import { SnapshotDoor } from "@/components/home/SnapshotDoor";
import { JsonLd } from "@/components/JsonLd";
import { homeCopy, homeFaqs, snapshotCtas } from "@/lib/home";
import { faqJsonLd } from "@/lib/schema";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${homeCopy.h1}` },
  description: `${homeCopy.subline} Free Visibility Snapshot. ${brand.locationLabel}.`,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <CinematicHero />
      <SnapshotCta
        title={snapshotCtas[0].title}
        body={snapshotCtas[0].body}
        photo={snapshotCtas[0].photo}
      />
      <EducationBand />
      <SnapshotCta
        title={snapshotCtas[1].title}
        body={snapshotCtas[1].body}
        video={snapshotCtas[1].video}
      />
      <HowTakeoffHelps />
      <SnapshotDoor />
      <AboutTeaser />
      <HomeFaq />
      <SnapshotCta
        title={snapshotCtas[2].title}
        body={snapshotCtas[2].body}
        photo={snapshotCtas[2].photo}
      />
    </div>
  );
}
