"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Image
      src="/MousePointer.svg"
      alt=""
      className="pointer-events-none fixed z-9999 rotate-230"
      width={18}
      height={18}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(50%, 50%)",
      }}
    />
  );
}
