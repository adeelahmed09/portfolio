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
    <main id="home" ref={containers} className="flex flex-col lg:flex-row w-full relative min-h-[calc(100vh-120px)] items-center gap-12 lg:gap-0">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center">
        <div className="reveal-item flex justify-start will-change-transform will-change-opacity gap-3 uppercase text-xs w-fit items-center">
          <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
          <p className="text-[#F9C02F] tracking-widest">Full-stack Developer</p>
        </div>
        <div className="mt-6 md:mt-8">
          <h1 className="reveal-item text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#D9D9D9] leading-tight">
            <span>Your Business</span>
            <br />
            <span>Deserves a</span>
            <br />
            <span className="text-[#F9C02F] italic">Better Online</span>
            <br />
            <span>Presence.</span>
          </h1>
          <h3 className="reveal-item uppercase text-[#D9D9D9] text-xs sm:text-sm mt-3 tracking-widest">
            You're on the right spot
          </h3>
          <div className="reveal-item my-6 sm:my-7 w-12 h-[0.5px] bg-[#D9D9D9]"></div>
          <p className="reveal-item text-sm sm:text-base text-[#D9D9D9]/80 max-w-[450px] w-full leading-relaxed">
            I'm <span className="font-bold text-[#D9D9D9]">Adeel Ahmed</span> — I build
            fast, conversion-focused web experiences that help businesses find
            their clients online. Not templates. Real products.
          </p>
          <div className="reveal-item flex flex-wrap items-center gap-4 sm:gap-7 mt-8 md:mt-12">
            <Link
              href="#contact"
              className="inline-block bg-[#F9C02F] text-[#0A0A0A] font-sans text-xs font-bold tracking-[0.14em] uppercase px-6 py-3.5 sm:px-9 sm:py-5 no-underline border-none cursor-pointer transition-all hover:bg-[#e0ac26] rounded-sm"
            >
              Let's Work Together
            </Link>
            <Link
              href="#work"
              className="text-xs sm:text-[0.78rem] tracking-[0.12em] uppercase text-[#717171] no-underline flex items-center gap-2 transition-colors hover:text-[#D9D9D9] font-medium"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-full mx-auto relative flex items-center justify-center mt-6 lg:mt-0">
        {/* The Accent Line */}
        <div className="hidden lg:block absolute left-0 top-[20%] bottom-0 w-px z-[3] bg-gradient-to-b from-transparent via-[#f9c02f4d] to-transparent"></div>
        <div className="hidden lg:block absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(249,192,47,0.12)_0%,_transparent_70%)] pointer-events-none z-[1]"></div>
        
        {/* Image Container */}
        <div className="reveal-item relative z-[15] w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[480px] h-auto flex items-end justify-center">
          <Image
            src="/model/my-pic.png"
            alt="Adeel Ahmed"
            width={500}
            height={600}
            priority
            className="w-full h-auto object-contain block brightness-[0.96] contrast-[1.04]"
          />

          {/* Fades */}
          <div className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[120px] md:h-[180px] bg-gradient-to-t from-[#0a0a0a] to-transparent z-[3]"></div>
          <div className="absolute top-0 bottom-0 left-0 w-[40px] sm:w-[80px] md:w-[120px] bg-gradient-to-r from-[#0a0a0a] to-transparent z-[3]"></div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
