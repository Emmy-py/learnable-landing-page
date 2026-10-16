"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <nav className="enter-down mx-auto flex max-w-[1100px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-5 text-sm text-navy lg:flex xl:gap-7">
          {navLinks.map((link, i) => {
            const active = link.href === pathname;
            return (
              <li key={link.label} className="enter-down" style={{ "--enter-delay": `${150 + i * 60}ms` } as React.CSSProperties}>
                <Link
                  href={link.href}
                  className={`relative border-b pb-1 transition-colors ${
                    active
                      ? "border-navy"
                      : "border-transparent after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-500 after:ease-out-expo hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Button href="/apply" variant="arrow" className="hidden! lg:inline-flex!">
          Get Started
        </Button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-full text-navy hover:bg-card lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="enter-down border-t border-black/5 bg-white px-4 pb-6 shadow-lg sm:px-6 lg:hidden">
          <ul className="flex flex-col py-2 text-navy">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-black/5 py-3 ${link.href === pathname ? "font-semibold" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/apply" variant="arrow" className="mt-4 w-full justify-between!">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
