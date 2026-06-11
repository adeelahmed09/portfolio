import LoadingSuspense from "@/components/utils/LoadingSuspense";
import About from "@/sections/About";
import ContactUs from "@/sections/ContactUs";
import Hero from "@/sections/Hero";
import Project from "@/sections/Project";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-24 md:py-36 space-y-16 md:space-y-32 overflow-x-hidden">
        <Hero />
        <About/>
        <Project/>
        <ContactUs/>
      </div>
  );
}
