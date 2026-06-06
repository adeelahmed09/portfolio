"use client";
import React, { useState } from "react";

export default function CopyablePrompt() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const promptText = `Please take a deep analysis of my portfolio project and create additional pages like "About Us", "Contact Us", "Projects", etc.

I want you to follow the exact color palette, typography, and styling to make the design minimalistic and premium.

Here are my details to include:
Skills: Full-stack Development, Next.js, Tailwind CSS, Node.js, MongoDB, Prisma ORM, PostgreSQL.

Main Portfolio Project:
Please feature "ygocar.com" prominently as my main portfolio project and make it look professional and compelling. 

Additional Context:
Google has the full resources of my portfolio. I am attaching screenshots of my current portfolio and ygocar.com for your reference.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="mt-20 p-6 bg-[#1a1a1a] rounded-lg border border-[#333] max-w-3xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#F9C02F] font-semibold text-lg tracking-wide uppercase">Portfolio Enhancement AI Prompt</h3>
        <button
          onClick={handleCopy}
          aria-live="polite"
          aria-label="Copy portfolio enhancement prompt to clipboard"
          className="bg-[#F9C02F] text-[#0A0A0A] px-4 py-2 text-sm font-bold uppercase tracking-wider rounded hover:opacity-80 transition-opacity"
        >
          {error ? "Failed to Copy" : copied ? "Copied!" : "Copy Prompt"}
        </button>
      </div>
      <pre className="text-[#D9D9D9] text-sm whitespace-pre-wrap font-sans bg-[#0A0A0A] p-4 rounded border border-[#222]">
        {promptText}
      </pre>
    </div>
  );
}
