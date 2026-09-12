import Image from "next/image";

type TeachingDiagramProps = {
  src: string;
  /** Lesson in words. Empty only if the image is decorative. */
  alt: string;
  title: string;
  caption: string;
  priority?: boolean;
};

export function TeachingDiagram({
  src,
  alt,
  title,
  caption,
  priority = false,
}: TeachingDiagramProps) {
  return (
    <figure className="mt-10">
      <p className="font-serif text-2xl text-navy sm:text-3xl">{title}</p>
      <div className="mt-4 overflow-hidden rounded-sm border border-line bg-paper-50 shadow-card">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={720}
          className="h-auto w-full"
          priority={priority}
        />
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
