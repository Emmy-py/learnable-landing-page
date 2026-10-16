import Image from "next/image";
import SectionHeading, { Accent } from "../SectionHeading";
import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="How It Works"
        title={
          <>
            From Application to <Accent>Employment</Accent>
          </>
        }
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-8">
        {steps.map((s) => (
          <article key={s.step} className={`flex flex-col overflow-hidden rounded-xl text-white ${s.bg}`}>
            <div className="p-5">
              <span className="inline-block rounded-full bg-white px-4 py-1 text-sm text-navy">{s.step}</span>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-4 text-[15px]">{s.description}</p>
            </div>
            <div className="mt-auto flex justify-center px-5 pt-6">
              <Image src={s.image} alt="" width={295} height={160} className="h-40 w-auto object-contain object-bottom" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
