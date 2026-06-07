import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      id: "ygocar",
      title: "ygocar.com",
      category: "Flagship Project • Car Marketplace",
      description: "A full-fledged car marketplace platform to buy, sell, and rent vehicles. Built as a serious production-level system focusing on scale, performance, and user experience.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
      featured: true,
      tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    },
    // Adding a placeholder project to show grid system
    {
      id: "portfolio-v2",
      title: "Portfolio V2",
      category: "Personal Brand",
      description: "A premium, minimal personal portfolio website built with Next.js App Router and Tailwind CSS, focusing on a strong visual hierarchy.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
      featured: false,
      tags: ["Next.js", "Tailwind CSS"],
    }
  ];

  return (
    <div className="w-screen min-h-screen px-6 md:px-16 pt-32 pb-16 relative">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col mt-8">
        
        <div className="flex justify-start gap-3 uppercase text-xs w-fit items-center mb-6">
          <div className="w-8 h-[.5px] bg-[#F9C02F]"></div>
          <p className="text-[#F9C02F] tracking-widest">Selected Works</p>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D9D9D9] mb-16">
          Products I've <span className="text-[#F9C02F] italic">Built.</span>
        </h1>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
              
              {/* Project Image */}
              <Link href={`/projects/${project.id}`} className="w-full md:w-3/5 group relative overflow-hidden bg-[#111] border border-[#f9c02f14] aspect-[16/10]">
                {/* Temporary placeholder image logic. In reality, you'd use your actual project screenshots */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
              </Link>

              {/* Project Info */}
              <div className="w-full md:w-2/5 flex flex-col">
                <p className="text-[#F9C02F] text-xs tracking-widest uppercase mb-3">{project.category}</p>
                <h2 className="text-3xl font-bold text-[#D9D9D9] mb-6">{project.title}</h2>
                <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1 border border-[#333] text-[#D9D9D9]">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="w-fit text-[0.8rem] tracking-[0.15em] uppercase text-[#F9C02F] no-underline flex items-center gap-3 transition-all hover:gap-5"
                >
                  View Case Study <span className="text-lg">→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
