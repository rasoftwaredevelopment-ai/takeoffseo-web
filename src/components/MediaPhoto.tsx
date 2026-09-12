import { media, type PhotoKey } from "@/lib/home";

type MediaPhotoProps = {
  photo: PhotoKey;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function MediaPhoto({
  photo,
  alt,
  className = "",
  imgClassName = "h-full w-full object-cover",
  priority = false,
}: MediaPhotoProps) {
  const asset = media.photos[photo];

  return (
    <picture className={className}>
      <source media="(max-width: 768px)" srcSet={asset.src800} type="image/webp" />
      <source srcSet={asset.src} type="image/webp" />
      <img
        src={asset.src}
        alt={alt}
        className={imgClassName}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
