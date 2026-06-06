import React from "react";

export default function ContactPage() {
  return (
    <div className="w-screen min-h-screen px-6 md:px-16 pt-32 pb-16 relative flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <div className="max-w-3xl w-full mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex justify-center gap-3 uppercase text-xs w-fit items-center mb-6">
            <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
            <p className="text-[#F9C02F] tracking-widest">Get In Touch</p>
            <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D9D9D9] mb-6">
            Let's Build Something <span className="text-[#F9C02F] italic">Great.</span>
          </h1>
          <p className="text-[#A1A1A1] text-sm md:text-base max-w-lg leading-relaxed">
            Whether you have a product in mind, need engineering support, or just want to say hi, I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="bg-[#0a0a0ab3] border border-[#f9c02f14] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_rgba(249,192,47,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
          
          <form className="flex flex-col gap-6 relative z-10" action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#717171] text-xs uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="bg-transparent border-b border-[#333] py-3 text-[#D9D9D9] focus:outline-none focus:border-[#F9C02F] transition-colors placeholder-[#333]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[#717171] text-xs uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="bg-transparent border-b border-[#333] py-3 text-[#D9D9D9] focus:outline-none focus:border-[#F9C02F] transition-colors placeholder-[#333]"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="subject" className="text-[#717171] text-xs uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="bg-transparent border-b border-[#333] py-3 text-[#D9D9D9] focus:outline-none focus:border-[#F9C02F] transition-colors placeholder-[#333]"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="message" className="text-[#717171] text-xs uppercase tracking-widest">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                className="bg-transparent border-b border-[#333] py-3 text-[#D9D9D9] focus:outline-none focus:border-[#F9C02F] transition-colors resize-none placeholder-[#333]"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-8 bg-[#F9C02F] text-[#0A0A0A] text-xs font-bold tracking-[0.14em] uppercase py-5 px-8 transition-opacity hover:opacity-80 w-full md:w-fit self-center md:self-end"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
