"use client"
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Project() {
  gsap.registerPlugin(ScrollTrigger);
   const containers = useRef(null);
  
    useGSAP(
      () => {
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
          },
        );
      },
      { scope: containers },
    );
  return (
    <main id="work" ref={containers} className="w-full min-h-screen relative flex flex-col py-16 md:py-24 gap-10 justify-center scroll-mt-24">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <h1 className="reveal-item text-3xl sm:text-4xl md:text-5xl mb-4 font-extrabold text-[#D9D9D9]">
        Projects I've <span className="text-[#F9C02F] italic">Built</span>
      </h1>
      
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
        <div className="reveal-item w-full lg:w-1/2 h-[220px] sm:h-[320px] lg:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl border border-[#f9c02f14]">
          <img
            src="/ygo-project.png"
            className="w-full h-full object-cover object-left"
            alt="Ygo Cars project screen"
          />
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
          <div className="reveal-item flex gap-4 uppercase items-center mb-4">
            <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
            <p className="text-[#F9C02F] tracking-widest text-xs">
              Flagship Project * Car Marketplace
            </p>
          </div>
          
          <h1 className="reveal-item text-3xl md:text-4xl mb-4 font-extrabold text-[#D9D9D9]">
            Ygo <span className="text-[#F9C02F] italic">Cars</span>
          </h1>
          
          <p className="reveal-item text-sm sm:text-base font-light text-[#D9D9D9]/80 max-w-[480px] w-full leading-relaxed">
            A full-fledged car marketplace platform to buy, sell, and rent
            vehicles. Built for production-level system performance, focusing on
            scale, performance, and user experience.
          </p>
          
          <div className="mt-6 reveal-item">
            <p className="text-[#F9C02F] tracking-widest text-xs font-semibold mb-2">
              Tech Stack
            </p>
            <ul className="flex flex-wrap gap-2 uppercase text-xs font-light text-[#D9D9D9]">
              <li className="border border-[#f9c02f30] px-2.5 py-1 rounded bg-[#f9c02f05]">Next.js</li>
              <li className="border border-[#f9c02f30] px-2.5 py-1 rounded bg-[#f9c02f05]">Node.js</li>
              <li className="border border-[#f9c02f30] px-2.5 py-1 rounded bg-[#f9c02f05]">Prisma ORM</li>
              <li className="border border-[#f9c02f30] px-2.5 py-1 rounded bg-[#f9c02f05]">PostgreSQL</li>
            </ul>
          </div>
          
          <div className="reveal-item mt-8 flex items-center gap-2">
            <a 
              href="https://ygocars.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F9C02F] tracking-widest font-semibold hover:underline flex items-center gap-2 text-sm"
            >
              VIEW THE PROJECT
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
