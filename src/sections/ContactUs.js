"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function ContactUs() {
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
    <main id="contact" ref={containers} className="w-full min-h-screen relative flex flex-col justify-center py-16 md:py-24 gap-8 md:gap-10 items-center scroll-mt-24">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <div className="reveal-item flex justify-center will-change-transform will-change-opacity gap-3 uppercase text-xs w-fit items-center">
        <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
        <p className="text-[#F9C02F] tracking-widest">Get in Touch</p>
        <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
      </div>
      
      <h1 className="reveal-item text-3xl sm:text-4xl md:text-5xl mb-4 font-extrabold text-[#D9D9D9] text-center leading-tight">
        Let's Build Something <span className="text-[#F9C02F] italic">Great</span>
      </h1>
      
      <p className="reveal-item text-center text-sm sm:text-base font-light text-[#D9D9D9]/80 max-w-[450px] w-full px-4 mb-4 leading-relaxed">
        Whether you have a product in mind, need engineering support, or just
        want to say hi, I'm always open to discussing new opportunities.
      </p>
      
      <div className="reveal-item relative w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-12 bg-[#070707] border border-[#f9c02f14] rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F9C02F]/10 rounded-full blur-[60px] pointer-events-none"></div>

        <form className="relative z-10 w-full space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#F9C02F] text-black font-mono font-bold py-3 px-6 sm:py-3.5 sm:px-8 uppercase tracking-[0.15em] text-xs hover:bg-[#e0ac26] transition-colors rounded-sm cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactUs;
