"use client";

import Image from "next/image";
import Button from "../Button";
import SectionHeading, { Accent } from "../SectionHeading";
import { CarouselButtons, CarouselTrack, useCarousel } from "../Carousel";
import { projects } from "@/data/content";
import { hoverZoom, reveal } from "@/components/motion/reveal";

export default function StudentWorks() {
  const { ref, scroll } = useCarousel();

  return (
    <section id="projects" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Student Works"
          title={
            <>
              Built by <Accent>Learnable Interns</Accent>
            </>
          }
        />
        <CarouselButtons onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="hidden sm:flex" />
      </div>

      <CarouselTrack trackRef={ref} className="mt-10">
        {projects.map((p, i) => (
          <article
            key={p.title}
            {...reveal("up", i * 120)}
            className="group flex w-[85%] shrink-0 snap-start flex-col rounded-[28px] bg-card p-4 sm:w-[calc(50%-8px)] lg:w-[386px]"
          >
            <div className="relative aspect-[359/306] w-full overflow-hidden rounded-2xl">
              <Image src={p.image} alt={`${p.title} cover`} fill sizes="(min-width:1024px) 360px, 85vw" className={`object-cover object-left ${hoverZoom}`} />
            </div>
            <h3 className="mt-4 text-2xl">{p.title}</h3>
            <p className="mt-1 text-muted">{p.cohort}</p>
            <p className="mt-4 flex-1 text-sm sm:text-base">{p.description}</p>
            <Button href="/hall-of-fame" className="mt-6 w-full py-4! text-base">
              View Project
            </Button>
          </article>
        ))}
      </CarouselTrack>
    </section>
  );
}
