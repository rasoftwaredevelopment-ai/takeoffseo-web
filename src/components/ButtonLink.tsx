import type { ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  inverse: "btn-inverse",
  inverseSolid: "btn-inverse-solid",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${variants[variant]} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
