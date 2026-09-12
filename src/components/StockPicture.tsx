type StockName = "night-city" | "office-desk";

const stocks: Record<
  StockName,
  { alt: string; widths: number[] }
> = {
  "night-city": {
    alt: "",
    widths: [800, 1280, 1920],
  },
  "office-desk": {
    alt: "",
    widths: [800, 1280, 1920],
  },
};

type StockPictureProps = {
  name: StockName;
  className?: string;
  sizes?: string;
};

export function StockPicture({
  name,
  className,
  sizes = "100vw",
}: StockPictureProps) {
  const stock = stocks[name];
  const webp = stock.widths
    .map((width) => `/images/bands/${name}-${width}.webp ${width}w`)
    .join(", ");
  const jpg = stock.widths
    .map((width) => `/images/bands/${name}-${width}.jpg ${width}w`)
    .join(", ");
  const fallback = `/images/bands/${name}-1280.jpg`;

  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <source type="image/jpeg" srcSet={jpg} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={fallback} alt={stock.alt} className={className} />
    </picture>
  );
}
