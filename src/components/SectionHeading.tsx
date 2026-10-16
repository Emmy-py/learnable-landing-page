export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-brand">{children}</span>;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className="text-sm text-navy sm:text-base">{eyebrow}</p>
      <h2 className="mt-2 text-2xl leading-tight font-normal tracking-tight sm:text-3xl lg:text-[34px]">
        {title}
      </h2>
    </div>
  );
}
