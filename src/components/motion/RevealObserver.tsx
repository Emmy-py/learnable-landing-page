"use client";

import { useEffect } from "react";

const PENDING = "[data-reveal]:not([data-revealed])";

/**
 * Marks every `data-reveal` element `data-revealed` once it scrolls into view.
 * Mounted once in the root layout; picks up elements added later (client
 * navigation, state changes) via a MutationObserver.
 *
 * It usually watches each element's *parent*: a hidden element may be fully clipped
 * (wipe) or translated off-screen (drive), and IntersectionObserver would
 * never report those as visible.
 */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target.matches(PENDING)) entry.target.setAttribute("data-revealed", "");
          for (const child of entry.target.children) {
            if (child.matches(PENDING)) child.setAttribute("data-revealed", "");
          }
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    // Page-level parents are "visible" from the start, so watch the element itself there.
    const observe = (el: Element) => {
      const parent = el.parentElement;
      io.observe(parent && !parent.matches("main, body") ? parent : el);
    };
    const observeAll = (root: ParentNode) => root.querySelectorAll(PENDING).forEach(observe);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(PENDING)) observe(node);
          observeAll(node);
        });
      }
    });
    // Wait until the page has fully loaded (and so finished hydrating) before tagging
    // elements, otherwise React sees `data-revealed` as a hydration mismatch.
    const start = () => {
      observeAll(document);
      mo.observe(document.body, { childList: true, subtree: true });
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
