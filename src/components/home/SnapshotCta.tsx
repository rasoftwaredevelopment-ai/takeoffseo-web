import { ButtonLink } from "@/components/ButtonLink";
import { CinematicBand } from "@/components/home/CinematicBand";
import { homeCopy } from "@/lib/home";
import type { PhotoKey } from "@/lib/home";
import { brand, routes } from "@/lib/site";

type SnapshotCtaProps = {
  title: string;
  body: string;
  photo?: PhotoKey;
  video?: string;
  poster?: string;
};

export function SnapshotCta({
  title,
  body,
  photo,
  video,
  poster,
}: SnapshotCtaProps) {
  return (
    <CinematicBand
      kicker="Free Visibility Snapshot"
      title={title}
      body={body}
      photo={photo}
      photoAlt="SEQ outdoor living — the work a Snapshot is written against"
      video={video}
      poster={poster}
      size="cta"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href={routes.snapshot} variant="inverseSolid">
          {homeCopy.primaryCta}
        </ButtonLink>
        <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
          {homeCopy.phoneCta}
        </a>
      </div>
    </CinematicBand>
  );
}
