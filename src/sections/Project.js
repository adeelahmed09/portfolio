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
    <main ref={containers} className="w-full min-h-screen relative flex flex-col py-18 gap-10 justify-center ">
      <div class="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      <h1 className="reveal-item text-4xl md:text-5xl mb-4 font-extrabold text-[#D9D9D9] ">
        Project I've <span className="text-[#F9C02F] italic">Built</span>
      </h1>
      <div className="w-full max-h-[450px] h-[400px] flex gap-10 ">
        <div className="reveal-item w-1/2 h-full  ">
          <img
            src="/ygo-project.png"
            className="w-full shadow-2xl h-full rounded-2xl overflow-hidden object-cover object-left  "
            alt="project"
          />
        </div>
        <div className="w-1/2  flex flex-col justify-center  h-full m">
          <div className="reveal-item flex gap-5 uppercase items-center mb-4">
            <div className="w-8  h-[.5px] bg-[#F9C02F]"></div>
            <p className="text-[#F9C02F] tracking-widest">
              Flagship Project * Car MarketPlace
            </p>
          </div>
          <h1 className="reveal-item text-3xl md:text-4xl mb-4 font-extrabold text-[#D9D9D9] ">
            Ygo
            <span className="text-[#F9C02F] italic">Cars</span>
          </h1>
          <p className="reveal-item  text-xm font-light text-[#D9D9D9] w-[450px]">
            A full-fledged car marketplace paltfom to buy, sell and rent
            vehicles. Built for production-level system performance focusing on
            scale, perfomance, and user experince.
          </p>
          <div className="mt-5 reveal-item">
            <p className="text-[#F9C02F] tracking-widest">
            Tech Stack
          </p>
          <ul className="flex gap-2 uppercase mt-1.5 text-xm  font-light text-[#D9D9D9]">
            <li className="border-2 border-[#f9c02f14] px-1.5 py-0.5 rounded">Next Js</li>
            <li className="border-2 border-[#f9c02f14] px-1.5 py-0.5 rounded">Node Js</li>
            <li className="border-2 border-[#f9c02f14] px-1.5 py-0.5 rounded">Prisma ORM</li>
            <li className="border-2 border-[#f9c02f14] px-1.5 py-0.5 rounded">PostgreSQL</li>
          </ul>
          </div>
          <div className="reveal-item mt-8 flex gap-1">
            <a href={"https://ygocars.com"} className="text-[#F9C02F] tracking-widest">
              VIWE THE PROJECT
            </a>
            <div className="flex text-[#F9C02F] item-center">
              →
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
