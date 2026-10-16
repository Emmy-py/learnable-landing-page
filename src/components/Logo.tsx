import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Learnable home" className={`inline-block leading-[0.9] font-semibold text-navy ${className}`}>
      <span className="block text-xl tracking-tight">Learn</span>
      <span className="flex items-center text-xl tracking-tight">
        <span className="mr-0.5 inline-block size-[0.6em] rounded-full bg-brand" />
        able
      </span>
    </Link>
  );
}
