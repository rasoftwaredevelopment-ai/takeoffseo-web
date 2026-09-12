import { howWeWorkCaption, howWeWorkSteps } from "@/lib/site";

export function HowWeWorkDiagram() {
  return (
    <figure className="mt-10">
      <p className="font-serif text-2xl text-navy">How we work</p>
      <svg
        viewBox="0 0 800 168"
        className="mt-4 hidden h-auto w-full text-navy md:block"
        role="img"
        aria-label="Audit, implement, and measure path on your website and Google Business Profile"
      >
        <title>
          Audit, implement, and measure path on your website and Google Business
          Profile
        </title>
        <path
          d="M36 148 C 210 148, 290 108, 410 78 S 630 28, 768 18"
          fill="none"
          stroke="#C9843A"
          strokeWidth="2.2"
        />
        <path d="M36 152 H768" fill="none" stroke="#E8DCC8" strokeWidth="1" />
        {howWeWorkSteps.map((step, index) => {
          const x = 64 + index * 248;
          const y = 116 - index * 28;
          return (
            <g key={step.name}>
              <circle cx={x} cy={y} r="10" fill="#0B1A2B" />
              <circle cx={x} cy={y} r="4" fill="#C9843A" />
              <text
                x={x + 20}
                y={y - 6}
                fill="#0B1A2B"
                fontSize="20"
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
      <ol className="mt-4 grid gap-3 md:hidden">
        {howWeWorkSteps.map((step) => (
          <li key={step.name} className="card p-4">
            <p className="font-serif text-xl text-navy">{step.name}</p>
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
