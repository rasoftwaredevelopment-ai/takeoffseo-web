import { howWeWorkCaption, howWeWorkSteps } from "@/lib/site";

export function HowWeWorkDiagram() {
  return (
    <figure>
      <svg
        viewBox="0 0 800 160"
        className="hidden h-auto w-full text-navy md:block"
        role="img"
        aria-labelledby="how-we-work-diagram-title"
      >
        <title id="how-we-work-diagram-title">
          See the gaps, fix your site and Google profile, then show what moved
        </title>
        <defs>
          <linearGradient id="takeoff-horizon" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#C17A3A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#165C3F" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M32 128 C 200 128, 280 96, 400 72 S 620 28, 768 24"
          fill="none"
          stroke="#C9BBA6"
          strokeWidth="2"
        />
        <path d="M32 136 H768" fill="none" stroke="#E7DCC9" strokeWidth="1" />
        {howWeWorkSteps.map((step, index) => {
          const x = 56 + index * 248;
          const y = 112 - index * 28;
          return (
            <g key={step.name}>
              <circle cx={x} cy={y} r="10" fill="#0B1A2B" />
              <circle cx={x} cy={y} r="4" fill="#C17A3A" />
              <text
                x={x + 20}
                y={y - 6}
                fill="#0B1A2B"
                fontSize="18"
                fontFamily="var(--font-serif), Georgia, serif"
              >
                {step.name}
              </text>
              <text x={x + 20} y={y + 16} fill="#3D3830" fontSize="13">
                {step.line}
              </text>
            </g>
          );
        })}
      </svg>
      <ol className="grid gap-3 md:hidden">
        {howWeWorkSteps.map((step) => (
          <li key={step.name} className="card p-4">
            <p className="font-medium text-navy">{step.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{step.line}</p>
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-muted">
        {howWeWorkCaption}
      </figcaption>
    </figure>
  );
}
