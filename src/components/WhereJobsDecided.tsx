import { whereJobsCaption, workSurfaces } from "@/lib/site";

const icons = [
  <path
    key="search"
    d="M14 14h8M18 10v8M32 34a12 12 0 1 0-8.5 8.5L36 46"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  />,
  <path
    key="maps"
    d="M24 8c-7 0-12 5.4-12 12.2 0 9.3 12 19.8 12 19.8s12-10.5 12-19.8C36 13.4 31 8 24 8zm0 16.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
    fill="currentColor"
  />,
  <path
    key="ai"
    d="M10 30h28v8H10zM16 20h16l4 10H12l4-10zM20 14h8v6h-8z"
    fill="currentColor"
  />,
];

export function WhereJobsDecided() {
  return (
    <figure className="mt-10">
      <div
        className="grid gap-4 md:grid-cols-3"
        role="img"
        aria-label="Where jobs get decided: Google search, Maps, and AI answers"
      >
        {workSurfaces.map((surface, index) => (
          <div key={surface.title} className="card-hover p-6">
            <svg
              viewBox="0 0 48 48"
              className="h-10 w-10 text-forest"
              aria-hidden
            >
              {icons[index]}
            </svg>
            <h3 className="mt-5 font-serif text-2xl text-navy">
              {surface.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{surface.body}</p>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-muted">
        {whereJobsCaption}
      </figcaption>
    </figure>
  );
}
