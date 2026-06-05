"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LoadingSuspense() {
  const container = useRef(null);
  const dots = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Staggered animation: Dots move like one big unit
    tl.to(dots.current, {
      y: -20,
      stagger: {
        each: 0.1,
        from: "start",
      },
      duration: 0.5,
      ease: "power2.out",
    })
    .to(dots.current, {
      y: 0,
      stagger: {
        each: 0.1,
        from: "start",
      },
      duration: 0.5,
      ease: "power2.in",
    });
  }, { scope: container });

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] backdrop-blur-sm">
      <div ref={container} className="flex gap-4 mb-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (dots.current[i] = el)}
            className="w-4 h-4 rounded-full bg-[#F9C02F]"
          />
        ))}
      </div>
      
      <h1 className="text-4xl font-serif italic text-[#F9C02F] tracking-widest animate-pulse">
        Loading...
      </h1>
    </div>
  );
}