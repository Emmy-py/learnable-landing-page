"use client";

import { useState } from "react";

export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.question}
            className={`rounded-xl border transition-colors ${isOpen ? "border-brand" : "border-transparent"}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left text-sm sm:text-[15px]"
            >
              {item.question}
              <span className="relative size-4 shrink-0" aria-hidden>
                <span className="absolute top-1/2 left-0 h-px w-4 bg-ink" />
                <span
                  className={`absolute top-0 left-1/2 h-4 w-px bg-ink transition-transform ${isOpen ? "scale-y-0" : ""}`}
                />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden px-3 text-xs text-muted sm:text-sm">
                <span className="block pb-4">{item.answer}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
