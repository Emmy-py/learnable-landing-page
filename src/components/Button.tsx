import Link from "next/link";

type Variant = "solid" | "outline" | "arrow";

const base =
  "group btn-shine inline-flex items-center justify-center rounded-full text-sm font-medium transition duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-white hover:bg-brand-dark px-7 py-3",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white px-7 py-3",
  arrow: "bg-brand text-white hover:bg-brand-dark gap-4 py-1.5 pl-6 pr-1.5",
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Button({
  href,
  variant = "solid",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {variant === "arrow" && (
        <span className="grid size-9 place-items-center rounded-full bg-white text-brand transition-transform duration-500 ease-out-expo group-hover:rotate-45">
          <ArrowIcon className="size-5" />
        </span>
      )}
    </Link>
  );
}
