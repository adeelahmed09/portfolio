import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    "Next.js (App Router)",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "REST APIs",
    "Basic system design understanding",
  ];

  return (
    <div className="w-screen min-h-screen px-6 md:px-16 pt-32 pb-16 relative">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-start mt-8">
        
        {/* Left Col - Image */}
        <div className="w-full md:w-1/3 relative">
          <div className="w-full aspect-[3/4] relative border border-[#f9c02f14] bg-[#0a0a0ab3] overflow-hidden">
             <Image
                src="/model/my-pic.png"
                alt="Adeel Ahmed"
                fill
                className="object-cover object-top brightness-[0.96] contrast-[1.04]"
              />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_rgba(249,192,47,0.12)_0%,_transparent_70%)] pointer-events-none z-[1]"></div>
        </div>

        {/* Right Col - Text */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="flex justify-start gap-3 uppercase text-xs w-fit items-center mb-6">
            <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
            <p className="text-[#F9C02F] tracking-widest">About Me</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D9D9D9] mb-8">
            Builder of <span className="text-[#F9C02F] italic">Modern</span> Web Applications.
          </h1>

          <div className="space-y-6 text-[#D9D9D9] font-light leading-relaxed text-sm md:text-base">
            <p>
              I'm <strong>Adeel Ahmed</strong>, a full-stack web developer focused on building modern, scalable, and high-performance web applications. I bridge the gap between design and engineering, combining a product builder mindset with a startup-level seriousness.
            </p>
            <p>
              My approach integrates engineering and business hybrid thinking. I don't just write code—I build products that help businesses succeed online, focusing on conversion and user experience.
            </p>
          </div>

          <h2 className="text-[#F9C02F] text-lg mt-12 mb-6 tracking-wide">Technical Arsenal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[#D9D9D9] text-sm">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F9C02F]"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-6">
            <Link
              href="/contact"
              className="inline-block bg-[#F9C02F] text-[#0A0A0A] font-sans text-[12px] font-semibold tracking-[0.14em] uppercase px-8 py-4 no-underline border-none cursor-pointer transition-all hover:opacity-80"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="text-[0.78rem] tracking-[0.12em] uppercase text-[#717171] no-underline transition-colors hover:text-white"
            >
              See My Work
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
