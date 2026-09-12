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
        photo="outdoor-living"
        photoAlt="Australian outdoor-living house at dusk — the ground local visibility is built on"
        overlay="heavy"
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
          overlay={surface.id === "maps" ? "default" : "heavy"}
        />
      ))}
    </div>
  );
}
