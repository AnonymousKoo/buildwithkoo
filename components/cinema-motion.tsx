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
          `${(event.clientX / window.innerWidth - 0.5) * 12}px`,
        );
        root.style.setProperty(
          "--scene-y",
          `${(event.clientY / window.innerHeight - 0.5) * 8}px`,
        );
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
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
      {paused ? "Motion off" : "Pause motion"}{" "}
      <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
    </button>
  );
}
