"use client";
import { useEffect, useRef } from "react";

const GRAIN_SIZE = 200;

export default function GrainOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width  = GRAIN_SIZE;
    canvas.height = GRAIN_SIZE;

    let raf, tick = 0;

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (++tick % 5 !== 0) return;

      const img = ctx.createImageData(GRAIN_SIZE, GRAIN_SIZE);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = (Math.random() * 20) | 0;
      }
      ctx.putImageData(img, 0, 0);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9997,
          opacity: 0.32,
          mixBlendMode: "overlay",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9996,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.022) 3px, rgba(0,0,0,0.022) 4px)",
        }}
      />
    </>
  );
}
