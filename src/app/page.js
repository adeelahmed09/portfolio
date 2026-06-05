import LoadingSuspense from "@/components/utils/LoadingSuspense";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    
    <div className="w-screen  px-16  py-36">
        <Hero />
      </div>
  );
}
