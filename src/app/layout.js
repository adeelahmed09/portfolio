import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/sections/Nav";
import LoadingSuspense from "@/components/utils/LoadingSuspense";
import { Suspense } from "react";

export const metadata = {
  title: "Adeel Ahmed | Full Stack Developer",
  description: "I help businesses get found online..",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full w-screen overflow-x-hidden flex flex-col bg-[#0a0a0a]">
        <Suspense fallback={<LoadingSuspense />}>
          <Nav />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
