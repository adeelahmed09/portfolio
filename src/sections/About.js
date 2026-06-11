"use client"
import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);
function About() {
  const containers = useRef(null);

useGSAP(() => {
  gsap.fromTo(
    ".reveal-item",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containers.current,
        start: "top 80%", // animation starts when top of container reaches 80% of viewport
        end: "top 50%",
        toggleActions: "play none none none",
        once: true, // play only once
      },
    }
  );
}, { scope: containers });
  return (
    <main id="about" ref={containers} className="w-full min-h-screen relative flex flex-col lg:flex-row justify-center py-16 md:py-24 gap-10 lg:gap-16 items-center scroll-mt-24">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <div className="reveal-item border-[0.5px] border-[#f9c02f14] overflow-hidden rounded-2xl max-w-[280px] sm:max-w-[360px] lg:max-w-[450px] w-full shadow-2xl flex-shrink-0">
        <img src="/model/my-pic.png" alt="adeelahmed" className="w-full h-auto object-cover" />
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="reveal-item flex justify-start mb-6 will-change-transform will-change-opacity gap-3 uppercase text-xs w-fit items-center">
          <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
          <p className="text-[#F9C02F] tracking-widest">About Me</p>
        </div>
        <div>
          <h1 className="reveal-item text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 font-extrabold text-[#D9D9D9] leading-tight">
            Builder of <span className="text-[#F9C02F]">Modern</span> Web <br className="hidden sm:inline" /> Applications.
          </h1>
          <p className="reveal-item mb-4 text-sm sm:text-base font-light text-[#D9D9D9]/85 max-w-[650px] w-full leading-relaxed">
            I'm <span className="text-[#F9C02F]">Adeel Ahmed</span>, a full-stack web developer focused on building modern, scalable, and high-performance web applications. I bridge the gap between design and engineering, combining a product builder mindset with a startup-level seriousness.
          </p>
          <p className="reveal-item text-sm sm:text-base font-light text-[#D9D9D9]/85 max-w-[650px] w-full leading-relaxed">
            My approach integrates engineering and business hybrid thinking. I don't just write code; I build products that help businesses succeed online, focusing on conversion and user experience.
          </p>
        </div>
        
        <div id="services" className="reveal-item flex flex-col mt-10 scroll-mt-28">
          <h2 className="text-[#F9C02F] text-lg font-bold mb-4">Technical Arsenal & Services</h2>
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-2 text-white ml-5">
             <ul className="list-disc space-y-1.5 text-sm sm:text-base text-[#D9D9D9]/80 marker:text-[#F9C02F]">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>React.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
             </ul>
             <ul className="list-disc space-y-1.5 text-sm sm:text-base text-[#D9D9D9]/80 marker:text-[#F9C02F]">
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Prisma ORM</li>
              <li>REST APIs</li>
              <li>System Design</li>
             </ul>
          </div>
        </div>
        
        <div className="reveal-item flex flex-wrap items-center gap-4 sm:gap-7 mt-8 md:mt-12">
          <Link
            href="#contact"
            className="inline-block bg-[#F9C02F] text-[#0A0A0A] font-sans text-xs font-bold tracking-[0.14em] uppercase px-6 py-3.5 sm:px-9 sm:py-5 no-underline border-none cursor-pointer transition-all hover:bg-[#e0ac26] rounded-sm"
          >
            Get in Touch
          </Link>
          <Link
            href="#work"
            className="text-xs sm:text-[0.78rem] tracking-[0.12em] uppercase text-[#717171] no-underline flex items-center gap-2 transition-colors hover:text-[#D9D9D9] font-medium"
          >
            See my Work
          </Link>
        </div>
      </div>
    </main>
  )
}

export default About
