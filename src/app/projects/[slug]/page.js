import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailPage({ params }) {
  // In a real application, you would fetch the project data based on the slug.
  // Using static data for the flagship project representation.
  const project = {
    title: "ygocar.com",
    category: "Car Marketplace Platform",
    overview: "A flagship production-level system designed for users to seamlessly buy, sell, and rent vehicles. The platform bridges complex business logic with a sleek, user-friendly interface.",
    role: "Full-stack Developer & Designer",
    timeline: "2023 - Present",
    techStack: ["Next.js App Router", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma ORM"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Advanced filtering and search functionality",
      "Secure user authentication and authorization",
      "Admin dashboard for inventory management",
      "Optimized performance and SEO",
    ]
  };

  return (
    <div className="w-screen min-h-screen pt-32 pb-16 relative">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(rgba(249,192,47,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,192,47,0.02)_1px,transparent_1px)]"></div>
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 mt-8 mb-16">
        <Link href="/projects" className="text-[#717171] hover:text-[#F9C02F] text-xs uppercase tracking-widest transition-colors mb-12 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#D9D9D9] mb-6">{project.title}</h1>
        <p className="text-[#F9C02F] tracking-widest uppercase text-sm">{project.category}</p>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[21/9] max-h-[70vh] relative bg-[#111] mb-16 border-y border-[#f9c02f14]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-[#F9C02F] text-sm tracking-widest uppercase mb-4">Project Overview</h2>
            <p className="text-[#D9D9D9] font-light leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-[#F9C02F] text-sm tracking-widest uppercase mb-4">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#D9D9D9] font-light text-sm">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#F9C02F] shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-[#717171] text-xs tracking-widest uppercase mb-2">Role</h3>
            <p className="text-[#D9D9D9] text-sm">{project.role}</p>
          </div>
          <div>
            <h3 className="text-[#717171] text-xs tracking-widest uppercase mb-2">Timeline</h3>
            <p className="text-[#D9D9D9] text-sm">{project.timeline}</p>
          </div>
          <div>
            <h3 className="text-[#717171] text-xs tracking-widest uppercase mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="text-[10px] uppercase tracking-wider px-3 py-1 border border-[#333] text-[#D9D9D9]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-[#222]">
            <a 
              href="https://ygocar.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[#0A0A0A] bg-[#F9C02F] text-xs font-bold tracking-widest uppercase px-6 py-4 transition-opacity hover:opacity-80 w-full justify-center"
            >
              Visit Live Site <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
