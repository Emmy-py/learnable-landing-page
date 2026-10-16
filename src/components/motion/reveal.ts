export type RevealKind = "up" | "down" | "left" | "right" | "zoom" | "blur" | "wipe" | "wipe-up" | "corner-tl" | "corner-br";

/**
 * Props that make an element animate in when it scrolls into view.
 * Usage: `<div {...reveal("up", 120)}>` — see `[data-reveal]` in globals.css and RevealObserver.
 */
export function reveal(kind: RevealKind = "up", delay = 0) {
  return {
    "data-reveal": kind,
    style: { "--reveal-delay": `${delay}ms` } as React.CSSProperties,
  };
}

/** Image zoom on hover, for images inside a `group` wrapper with overflow hidden. */
export const hoverZoom = "transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.07]";
