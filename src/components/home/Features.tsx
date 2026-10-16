import Image from "next/image";
import SectionHeading, { Accent } from "../SectionHeading";
import { features } from "@/data/content";

type Feature = (typeof features)[number];

function FeatureCard({ f }: { f: Feature }) {
  return (
    <article className="flex flex-col rounded-2xl bg-peach p-5 sm:p-6">
      <h3 className="max-w-80 text-xl leading-snug sm:text-[22px]">
        <span className="mr-1">{f.icon}</span>
        {f.title}
      </h3>
      <p className="mt-3 text-sm text-muted sm:text-[15px]">{f.description}</p>
      {"bullets" in f && f.bullets && (
        <div className="mt-1 text-sm text-muted sm:text-[15px]">
          Includes:
          <ul className="ml-1">
            {f.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6 flex flex-1 items-end justify-center">
        <Image src={f.image} alt="" width={340} height={205} className="h-auto w-full max-w-[340px]" />
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Features"
        title={
          <>
            Everything You Need to <Accent>Succeed</Accent> in Tech — In One Place!
          </>
        }
      />
      <p className="mx-auto mt-3 max-w-[620px] text-center text-muted">
        Learnable combines training, mentorship, real projects, and career support into one focused learning experience.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-[1fr_1.35fr]">
        <FeatureCard f={features[0]} />
        <FeatureCard f={features[1]} />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-[1.45fr_1fr]">
        <FeatureCard f={features[2]} />
        <FeatureCard f={features[3]} />
      </div>
    </section>
  );
}
