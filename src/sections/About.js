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
    <main ref={containers} className="w-full min-h-screen relative flex justify-center py-18 gap-10 items-center">
      <div class="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      <div className='reveal-item border-[0.5px] h-fit border-[#f9c02f14]  '>
        <img src="/model/my-pic.png" alt="adeelahmed" className='h-[450px]' />
      </div>
      <div>
        <div  className="reveal-item flex justify-center mb-6 will-change-transform will-change-opacity gap-3 uppercase text-xs w-fit items-center">
          <div className="w-8  h-[.5px] bg-[#F9C02F]"></div>
          <p className="text-[#F9C02F] tracking-widest">About Me</p>
        </div>
        <div>
          <h1 className="reveal-item text-4xl md:text-5xl mb-8 font-extrabold text-[#D9D9D9] ">
            Builder of <span className='text-[#F9C02F] '>Modern</span> Web <br /> Application.
          </h1>
          <p className="reveal-item mb-4  text-xm font-light text-[#D9D9D9] w-[650px]  ">
          I'am <span className='text-[#F9C02F]'>Adeel Ahmed</span>, a full-stack web developer focused on building moderm, scalable, and high-performance web applications. I bridge the gap between design and engineering, combining a product builder mindset with a startup-level seriousness.
          </p>
          <p className="reveal-item text-xm font-light text-[#D9D9D9] w-[650px]  ">
            My approach integrates engineering and business hybird thinking. I don't just write code; I build products that help businesses succeed online, focusing on conversion and user experince.
          </p>
        </div>
        <div className='reveal-item flex flex-col mt-10 '>
          <h2 className='text-[#F9C02F] text-lg bold'>Technical Arsenal</h2>
          <div className='flex gap-15 text-[white] ml-5 marker:text-[#F9C02F]'>
             <ul className=' list-disc list'>
              <li><p>Next JS</p></li>
              <li><p>Tailwind CSS</p></li>
              <li><p>React JS</p></li>
              <li><p>Express JS</p></li>
              <li><p>PostgreSQL</p></li>
             </ul>
             <ul className='list-disc  '>
              <li><p>Node JS</p></li>
              <li><p>MongoDb</p></li>
              <li><p>Prisma ORM</p></li>
              <li><p>Rest API</p></li>
              <li><p>System Design</p></li>
             </ul>
          </div>
        </div>
        <div className="reveal-item flex flex-wrap items-center gap-7 mt-[48px] animate-[fadeUp_0.9s_0.85s_forwards]">
            <Link
              href="#"
              className="inline-block bg-[#F9C02F] text-[#0A0A0A] font-sans text-[12px] font-semibold tracking-[0.14em] uppercase px-5 py-2 sm:px-9 sm:py-5 no-underline border-none cursor-pointer transition-all hover:opacity-80"
            >
              Get in Touch
            </Link>
            <Link
              href="#"
              className="text-[0.78rem] tracking-[0.12em] uppercase text-[#717171] no-underline flex items-center gap-2 transition-colors hover:text-white"
            >
              See my Work
            </Link>
          </div>
      </div>
    </main>
  )
}

export default About
