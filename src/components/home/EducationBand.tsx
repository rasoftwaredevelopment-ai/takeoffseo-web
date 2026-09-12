import { CinematicBand } from "@/components/home/CinematicBand";
import { education } from "@/lib/home";
import type { PhotoKey } from "@/lib/home";

export function EducationBand() {
  return (
    <div>
      <CinematicBand
        kicker={education.eyebrow}
        title={education.title}
        body={education.lede}
        photo="garden-path"
        photoAlt="Formal garden path — the ground local visibility is built on"
      />
      {education.surfaces.map((surface) => (
        <CinematicBand
          key={surface.id}
          kicker={surface.kicker}
          title={surface.title}
          titleAs="h3"
          body={surface.body}
          photo={surface.image as PhotoKey}
          photoAlt={surface.imageAlt}
        />
      ))}
    </div>
  );
}
