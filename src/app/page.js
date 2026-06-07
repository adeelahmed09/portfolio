import LoadingSuspense from "@/components/utils/LoadingSuspense";
import About from "@/sections/About";
import ContactUs from "@/sections/ContactUs";
import Hero from "@/sections/Hero";
import Project from "@/sections/Project";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    
    <div className="w-screen  px-24  py-36">
        <Hero />
        <About/>
        <Project/>
        <ContactUs/>
      </div>
  );
}
