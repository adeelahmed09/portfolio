"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function ContactUs() {
  const containers = useRef(null);
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: null
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ submitting: true, succeeded: false, error: null });
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xpqejjra", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const data = await response.json();
        setState({ 
          submitting: false, 
          succeeded: false, 
          error: data.errors ? data.errors.map(err => err.message).join(", ") : "Something went wrong. Please try again." 
        });
      }
    } catch (err) {
      setState({ submitting: false, succeeded: false, error: "Network error. Please check your connection and try again." });
    }
  };

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

        {state.succeeded ? (
          <div className="relative z-10 w-full py-12 flex flex-col items-center justify-center text-center space-y-4 animate-[photoReveal_0.5s_ease_out]">
            <div className="w-16 h-16 rounded-full bg-[#F9C02F]/10 flex items-center justify-center text-[#F9C02F] text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-[#D9D9D9]">Message Sent Successfully!</h3>
            <p className="text-[#A3A3A3] max-w-sm text-sm">
              Thank you for reaching out. I have received your message and will get back to you as soon as possible.
            </p>
            <button 
              onClick={() => setState({ submitting: false, succeeded: false, error: null })}
              className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#F9C02F] hover:underline cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 w-full space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col">
                <label className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
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
                  name="email"
                  required
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
                name="subject"
                required
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
                name="message"
                required
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm resize-none"
              ></textarea>
            </div>

            {state.error && (
              <p className="text-red-500 text-xs text-right">
                {state.error}
              </p>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#F9C02F] disabled:opacity-50 disabled:cursor-not-allowed text-black font-mono font-bold py-3 px-6 sm:py-3.5 sm:px-8 uppercase tracking-[0.15em] text-xs hover:bg-[#e0ac26] transition-colors rounded-sm cursor-pointer"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default ContactUs;
