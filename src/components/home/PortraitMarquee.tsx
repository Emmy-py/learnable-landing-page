"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const portraits = Array.from({ length: 7 }, (_, i) => `/images/hero/portrait-${i + 1}.png`);
// Several copies so the strip always overfills wide screens and loops seamlessly.
const COPIES = 4;
const items = Array.from({ length: COPIES }, () => portraits).flat();

const FRICTION = 0.94; // momentum decay per frame after a drag is released

export default function PortraitMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    let offset = 0;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let frame = 0;

    // The trailing gap is missing from offsetWidth, so add it back to avoid a seam jump.
    // offsetWidth also ignores the per-card scale transforms, so it stays stable.
    const getSetWidth = () =>
      (track.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0)) / COPIES;

    const render = () => {
      const setWidth = getSetWidth();
      offset = ((offset % setWidth) + setWidth) % setWidth;
      track.style.transform = `translate3d(${offset - setWidth}px,0,0)`;

      const box = container.getBoundingClientRect();
      const center = box.left + box.width / 2;
      const half = box.width / 2;
      for (const card of cards) {
        const r = card.getBoundingClientRect();
        const d = Math.max(-1.2, Math.min(1.2, (r.left + r.width / 2 - center) / half));
        // Concave curve: cards grow and turn toward the viewer at the edges.
        card.style.transform = `perspective(900px) rotateY(${d * 28}deg) scale(${1 + 0.55 * d * d})`;
        card.style.zIndex = String(Math.round(Math.abs(d) * 10));
      }
    };

    const glide = () => {
      if (dragging || Math.abs(velocity) < 0.1) return;
      offset += velocity;
      velocity *= FRICTION;
      render();
      frame = requestAnimationFrame(glide);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      velocity = 0;
      lastX = e.clientX;
      cancelAnimationFrame(frame);
      container.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      offset += dx;
      velocity = dx;
      render();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      frame = requestAnimationFrame(glide);
    };
    // Trackpad / shift+wheel sideways scrolling.
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      e.preventDefault();
      cancelAnimationFrame(frame);
      offset -= dx;
      render();
    };

    container.addEventListener("pointerdown", onDown);
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerup", onUp);
    container.addEventListener("pointercancel", onUp);
    container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", render);
    render();
    // Reveal only after the curve is applied, so the flat server-rendered row never flashes.
    container.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("pointerdown", onDown);
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerup", onUp);
      container.removeEventListener("pointercancel", onUp);
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", render);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ opacity: 0 }}
      className="relative flex h-[230px] cursor-grab transition-opacity duration-500 touch-pan-y items-center overflow-hidden select-none active:cursor-grabbing sm:h-[290px] lg:h-[340px]"
      aria-label="Learnable interns at work — drag to browse"
      role="img"
    >
      <div ref={trackRef} className="flex w-max gap-4 sm:gap-6 lg:gap-8">
        {items.map((src, i) => (
          <div
            key={i}
            className="relative h-[130px] w-[96px] shrink-0 overflow-hidden sm:h-[165px] sm:w-[120px] lg:h-[195px] lg:w-[140px]"
          >
            <Image
              src={src}
              alt=""
              fill
              draggable={false}
              sizes="(min-width:1024px) 220px, 160px"
              preload={i < 7}
              className="pointer-events-none scale-110 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
