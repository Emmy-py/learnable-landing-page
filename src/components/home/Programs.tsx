"use client";

import Image from "next/image";
import Button from "../Button";
import SectionHeading, { Accent } from "../SectionHeading";
import { CarouselButtons, CarouselTrack, useCarousel } from "../Carousel";
import { programs } from "@/data/content";

export default function Programs() {
  const { ref, scroll } = useCarousel();

  return (
    <section id="programs" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Our Programs"
          title={
            <>
              Choose a <Accent>Path</Accent>. Start <Accent>Building</Accent>.
            </>
          }
        />
        <CarouselButtons onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="hidden sm:flex" />
      </div>

      <CarouselTrack trackRef={ref} className="mt-10">
        {programs.map((p) => (
          <article
            key={p.title}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-[28px] bg-card p-4 sm:w-[calc(50%-8px)] lg:w-[386px]"
          >
            <h3 className="pt-6 text-center text-xl sm:text-2xl">{p.title}</h3>
            <div className="relative mt-8 aspect-[359/282] w-full overflow-hidden rounded-lg">
              <Image src={p.image} alt="" fill sizes="(min-width:1024px) 360px, 85vw" className="object-cover object-left" />
            </div>
            <p className="mt-6 flex-1 px-2 text-center text-sm sm:text-base">{p.description}</p>
            <Button href="/programs" className="mt-6 w-full py-4! text-base">
              View curriculum
            </Button>
          </article>
        ))}
      </CarouselTrack>
    </section>
  );
}
