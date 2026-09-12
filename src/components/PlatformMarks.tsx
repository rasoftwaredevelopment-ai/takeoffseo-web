const platforms = [
  {
    name: "Google",
    mark: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="#4285F4"
          d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.4 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.3 0 10.1 0 12s.5 3.7 1.4 5.5l4-3.1z"
        />
        <path
          fill="#EA4335"
          d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8z"
        />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    mark: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="#34A853"
          d="M12 2C7.6 2 4 5.6 4 10.1 4 16.2 12 22 12 22s8-5.8 8-11.9C20 5.6 16.4 2 12 2z"
        />
        <circle cx="12" cy="10" r="3.1" fill="#FBBC05" />
        <circle cx="12" cy="10" r="1.5" fill="#4285F4" />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    mark: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M13.7 3.1a4.1 4.1 0 0 0-4.5 1.2L6.8 6.6A4 4 0 0 0 4 10.3v.3A4.1 4.1 0 0 0 2 14.4a4.1 4.1 0 0 0 4.2 4h.3a4 4 0 0 0 2.5 2.6 4.1 4.1 0 0 0 4.5-1.2l2.4-2.3A4 4 0 0 0 20 14.4v-.3a4.1 4.1 0 0 0 2-3.8 4.1 4.1 0 0 0-4.2-4h-.3A4 4 0 0 0 15 3.7a4.1 4.1 0 0 0-1.3-.6zm-.4 1.8c.3 0 .6.1.9.2l.1.1c.5.2.9.6 1.1 1.1l.3 1.1 1.1.3c.5.2.9.6 1.1 1.1a2.2 2.2 0 0 1-1 2.9l-1 .5.2 1.1a2.3 2.3 0 0 1-1.8 2.6l-1.1.2-.6 1a2.3 2.3 0 0 1-2.9 1 2.2 2.2 0 0 1-1.1-1.1l-.3-1.1-1.1-.3a2.2 2.2 0 0 1-1.1-1.1 2.2 2.2 0 0 1 1-2.9l1-.5-.2-1.1A2.3 2.3 0 0 1 9.8 8l1.1-.2.6-1a2.3 2.3 0 0 1 1.8-1z"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    mark: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2c.4 4.6 1.8 8 5.2 10C13.8 14 12.4 17.4 12 22c-.4-4.6-1.8-8-5.2-10C10.2 10 11.6 6.6 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    mark: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2 4.8 6.2v11.6L12 22l7.2-4.2V6.2L12 2zm0 2.3 4.8 2.8v3.2L12 13.1 7.2 10.3V7.1L12 4.3zM6.6 12.1l3.6 2.1v3.6l-3.6-2.1v-3.6zm7.2 2.1 3.6-2.1v3.6l-3.6 2.1v-3.6z"
        />
      </svg>
    ),
  },
] as const;

type PlatformMarksProps = {
  tone?: "on-dark" | "on-light";
};

export function PlatformMarks({ tone = "on-dark" }: PlatformMarksProps) {
  const toneClass =
    tone === "on-dark" ? "text-paper-200" : "text-ink-muted";

  return (
    <ul
      className={`platform-marks ${toneClass}`}
      aria-label="Where buyers search: Google, Google Maps, ChatGPT, Gemini, and Perplexity"
    >
      {platforms.map((platform) => (
        <li key={platform.name} className="platform-marks__item">
          {platform.mark}
          <span>{platform.name}</span>
        </li>
      ))}
    </ul>
  );
}
