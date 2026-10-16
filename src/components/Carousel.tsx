"use client";

import { useRef } from "react";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export function useCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  return { ref, scroll };
}

export function CarouselButtons({
  onPrev,
  onNext,
  tone = "dark",
  className = "",
}: {
  onPrev: () => void;
  onNext: () => void;
  tone?: "dark" | "gray";
  className?: string;
}) {
  const btn = `grid size-11 place-items-center rounded-full text-white transition-opacity hover:opacity-80 sm:size-12 ${
    tone === "dark" ? "bg-black" : "bg-[#6b6b6b]"
  }`;
  return (
    <div className={`flex gap-2 ${className}`}>
      <button type="button" onClick={onPrev} aria-label="Previous" className={btn}>
        <Chevron dir="left" />
      </button>
      <button type="button" onClick={onNext} aria-label="Next" className={btn}>
        <Chevron dir="right" />
      </button>
    </div>
  );
}

export function CarouselTrack({
  trackRef,
  children,
  className = "",
}: {
  trackRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      ref={trackRef}
      className={`no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
