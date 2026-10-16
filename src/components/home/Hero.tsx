import Button from "../Button";
import PortraitMarquee from "./PortraitMarquee";

function Circled({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="relative inline-block">
      <svg
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        className="draw-in pointer-events-none absolute -inset-x-[8%] -inset-y-[18%] hidden h-[136%] w-[116%] text-brand sm:block"
        style={{ "--draw-delay": `${delay}ms` } as React.CSSProperties}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden
      >
        <path pathLength={1} d="M30 8C75-2 170 2 192 22c14 14-30 32-95 34C35 58 0 46 6 30 11 16 45 6 110 5" />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="pt-10 pb-12 sm:pt-16">
      <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-8">
        <h1 className="enter-up relative mx-auto max-w-[520px] text-[32px] leading-[1.15] font-normal tracking-tight sm:text-5xl lg:text-[44px]">
          <span aria-hidden style={{ "--enter-delay": "900ms" } as React.CSSProperties} className="pop-float absolute -top-5 left-0 size-5 rounded-full bg-[#ef3a0c] sm:-top-6 sm:-left-6 sm:size-8" />
          Turning <Circled delay={600}>Beginners</Circled> Into <Circled delay={950}>Job-Ready</Circled> Professionals
          <span aria-hidden style={{ "--enter-delay": "1150ms" } as React.CSSProperties} className="pop-float absolute right-0 -bottom-3 size-5 rounded-full bg-brand sm:-right-8 sm:bottom-2 sm:size-8" />
        </h1>
        <p className="enter-up mx-auto mt-6 max-w-[380px] text-base text-muted sm:text-lg" style={{ "--enter-delay": "250ms" } as React.CSSProperties}>
          A 6–9 month real work tech training program from Genesys Tech Hub — where beginners become industry-ready
          builders.
        </p>
      </div>

      <div className="mt-4">
        <PortraitMarquee />
      </div>

      <div style={{ "--enter-delay": "450ms" } as React.CSSProperties} className="enter-up mx-auto mt-8 flex max-w-[1100px] flex-col items-stretch justify-center gap-3 px-4 sm:flex-row sm:items-center">
        <Button href="/apply">Apply Now</Button>
        <Button href="/partnership" variant="outline">
          Sponsor a Talent
        </Button>
      </div>
    </section>
  );
}
