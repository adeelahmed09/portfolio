import LoadingSuspense from "@/components/utils/LoadingSuspense";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import CopyablePrompt from "@/components/prompt/CopyablePrompt";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-screen px-16 py-36">
      <Hero />
      <CopyablePrompt />
    </div>
  );
}
