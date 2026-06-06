import React from "react";

function ContactUs() {
  return (
    <main className="w-full min-h-screen relative flex flex-col justify-center py-18 gap-10 items-center">
      <div class="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      <div className="reveal-item flex justify-center will-change-transform will-change-opacity gap-3 uppercase text-xs w-fit items-center">
        <div className="w-8  h-[.5px] bg-[#F9C02F]"></div>
        <p className="text-[#F9C02F] tracking-widest">Get in Touch</p>
        <div className="w-8  h-[.5px] bg-[#F9C02F]"></div>
      </div>
      <h1 className="reveal-item text-4xl md:text-5xl mb-4 font-extrabold text-[#D9D9D9] ">
        Let's Build Something{" "}
        <span className="text-[#F9C02F] italic">Great</span>
      </h1>
      <p className="reveal-item text-center text-xm font-light text-[#D9D9D9] w-[450px]  ">
        Whether you have a product in mind, need engineering support, or just
        want to say hi, I'm always open to discussing new opportunites
      </p>
      <div class="relative w-full max-w-3xl mx-auto p-8 md:p-12 bg-[#070707] border border-[#f9c02f14] rounded-xl overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 w-48 h-48 bg-[#F9C02F]/10 rounded-full blur-[60px] pointer-events-none"></div>

        <form class="relative z-10 w-full space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div class="flex flex-col">
              <label class="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                class="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                class="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label class="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry"
              class="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase font-semibold mb-3">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              class="bg-transparent border-b border-[#D9D9D9]/20 pb-3 text-[#D9D9D9] placeholder-[#333333] focus:outline-none focus:border-[#F9C02F] transition-colors text-sm resize-none"
            ></textarea>
          </div>

          <div class="flex justify-end pt-4">
            <button
              type="submit"
              class="bg-[#F9C02F] text-black font-mono font-bold py-3.5 px-8 uppercase tracking-[0.15em] text-xs hover:bg-[#e0ac26] transition-colors"
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
