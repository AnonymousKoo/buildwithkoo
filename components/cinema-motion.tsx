"use client";

import { useEffect, useState } from "react";

export function CinemaMotion() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const sync = () =>
      root.classList.toggle("cinema-paused", paused || media.matches);
    sync();
    media.addEventListener("change", sync);
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (paused || media.matches || event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty(
          "--scene-x",
          `${(event.clientX / window.innerWidth - 0.5) * 18}px`,
        );
        root.style.setProperty(
          "--scene-y",
          `${(event.clientY / window.innerHeight - 0.5) * 12}px`,
        );
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    const sections = Array.from(
      document.querySelectorAll("main > section:not(.engine-hero)"),
    );
    sections.forEach((section) => section.classList.add("reveal-section"));
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer?.unobserve(entry.target);
                }
              });
            },
            { rootMargin: "0px 0px -8%", threshold: 0.08 },
          )
        : null;
    if (observer) sections.forEach((section) => observer.observe(section));
    else sections.forEach((section) => section.classList.add("is-visible"));
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      sections.forEach((section) =>
        section.classList.remove("reveal-section", "is-visible"),
      );
      root.classList.remove("cinema-paused");
      root.style.removeProperty("--scene-x");
      root.style.removeProperty("--scene-y");
    };
  }, [paused]);
  return (
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={paused}
      onClick={() => setPaused(!paused)}
    >
      {paused ? "System motion off" : "Pause system motion"}{" "}
      <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
    </button>
  );
}
