import { Geist, Geist_Mono } from "next/font/google";
import type { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <EmblaCarousel key={index} slides={SLIDES} options={OPTIONS} />
      ))}
    </div>
  );
}
