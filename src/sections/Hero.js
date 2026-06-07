"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const containers = useRef(null)
  useGSAP(() => {
  gsap.fromTo(".reveal-item", 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      stagger: 0.2, // This adds a 0.2s delay between each item
      ease: "power2.out" 
    }
  );
}, { scope: containers });
  return (
    <main ref={containers} className="flex flex-col md:flex-row w-full relative h-full">
      <div class="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      <div  className="w-full md:w-1/2 relative">
        <div  className="reveal-item flex justify-center will-change-transform will-change-opacity gap-3 uppercase text-xs w-fit items-center">
          <div className="w-8  h-[.5px] bg-[#F9C02F]"></div>
          <p className="text-[#F9C02F] tracking-widest">Full-stack Developer</p>
        </div>
        <div   className="mt-8 ">
          <h1 className="reveal-item text-4xl md:text-5xl font-extrabold text-[#D9D9D9] ">
            <span>Your Business</span>
            <br />
            <span>Deserves a</span>
            <br />
            <span className="text-[#F9C02F] italic">Better Online</span>
            <br />
            <span>Presence.</span>
          </h1>
          <h3 className="reveal-item uppercase text-[#D9D9D9] text-sm mt-3 tracking-widest">
            You're on the right spot
          </h3>
          <div className="reveal-item my-7 w-12 h-[.5] bg-[#D9D9D9]"></div>
          <p className="reveal-item text-xm text-[#D9D9D9] w-full md:w-[380px]">
            I'm <span className=" font-bold  ">Adeel Ahmed</span> — I build
            fast, conversion-focused web experiences that help businesses find
            their clients online. Not templates. Real products.
          </p>
          <div className="reveal-item flex flex-wrap items-center gap-7 mt-[48px] animate-[fadeUp_0.9s_0.85s_forwards]">
            <Link
              href="/contact"
              className="inline-block bg-[#F9C02F] text-[#0A0A0A] font-sans text-[12px] font-semibold tracking-[0.14em] uppercase px-5 py-2 sm:px-9 sm:py-5 no-underline border-none cursor-pointer transition-all hover:opacity-80"
            >
              Let's Work Together
            </Link>
            <Link
              href="/projects"
              className="text-[0.78rem] tracking-[0.12em] uppercase text-[#717171] no-underline flex items-center gap-2 transition-colors hover:text-white"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-full mx-auto relative flex items-center">
        {/* The Accent Line */}
        <div className="hidden md:block absolute left-0 top-[20%] bottom-0 w-px z-[3] bg-gradient-to-b from-transparent via-[#f9c02f4d] to-transparent"></div>
        <div className="hidden md:block absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(249,192,47,0.12)_0%,_transparent_70%)] pointer-events-none z-[1]"></div>
        {/* Image Container */}
        <div className="reveal-item relative z-[15] w-full h-full flex items-end md:items-end justify-center ">
          <Image
            src="/model/my-pic.png"
            alt="Adeel Ahmed"
            width={500}
            height={600}
            className="w-auto max-h-[450px] md:max-h-[550px] object-contain md:object-bottom object-center block brightness-[0.96] contrast-[1.04]"
          />

          {/* Fades */}
          <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-[var(--bg)] to-transparent z-[3]"></div>
          <div className="absolute top-0 bottom-0 left-0 w-[120px] bg-gradient-to-r from-[var(--bg)] to-transparent z-[3]"></div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
