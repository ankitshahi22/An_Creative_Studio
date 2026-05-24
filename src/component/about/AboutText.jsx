"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function AboutText() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: "lines",
    });

    split.lines.forEach((line) => {
      const wrapper = document.createElement("div");

      wrapper.style.overflow = "hidden";

      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
      ease: "power4.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h2 ref={textRef} className="w-[80%] mx-auto text-lg">
      create professional video edits that combine storytelling, cinematic
      visuals, and smooth motion design to deliver engaging content that stands
      out. From color grading and transitions to pacing and sound
      synchronization, I focus on creating polished videos that capture
      attention and leave a lasting impression while bringing each client’s
      vision to life with creativity and precision.
    </h2>
  );
}
