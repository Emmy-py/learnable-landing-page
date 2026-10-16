"use client";

import Image from "next/image";
import SectionHeading, { Accent } from "../SectionHeading";
import { CarouselButtons, CarouselTrack, useCarousel } from "../Carousel";
import { testimonials } from "@/data/content";
import { reveal } from "@/components/motion/reveal";

function Stars() {
  return (
    <div className="flex gap-2 text-[#ffd400]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="size-6 transition-transform duration-500 ease-spring group-hover:scale-125"
          style={{ transitionDelay: `${i * 50}ms` }}
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, scroll } = useCarousel();

  return (
    <section id="testimonials" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid items-end gap-4 md:grid-cols-[1fr_1.3fr]">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <Accent>Learners</Accent>.
              <br />
              Proven by <Accent>Results</Accent>.
            </>
          }
        />
        <p {...reveal("right", 150)} className="text-muted md:pb-2">
          Hear from Learnable interns who’ve gone from learning the basics to building real products and stepping
          confidently into tech roles.
        </p>
      </div>

      <CarouselTrack trackRef={ref} className="mt-10 gap-3!">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            {...reveal("up", i * 120)}
            className="group flex min-h-64 w-[88%] shrink-0 snap-start flex-col rounded-xl bg-black p-5 text-white sm:w-[calc(50%-6px)] lg:w-[calc((100%-24px)/3)]"
          >
            <Stars />
            <blockquote className="mt-8 flex-1 text-[15px] leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image src={t.avatar} alt="" width={30} height={30} className="size-8 rounded-full object-cover" />
              <span className="text-xs">
                <span className="block text-sm">{t.name}</span>
                {t.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </CarouselTrack>

      <CarouselButtons tone="gray" onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="mt-10 justify-center" />
    </section>
  );
}
