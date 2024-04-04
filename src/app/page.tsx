"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NextPage } from "next";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const verticalScrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const firstVerticalContext = gsap.timeline({
      scrollTrigger: {
        trigger: ".first",
        start: "top top",
        endTrigger: ".divD",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / 3,
          duration: { min: 0.25, max: 0.3 },
          delay: 0,
          ease: "power1.inOut",
        },
      },
    });

    return () => {
      firstVerticalContext.revert();
    };
  }, []);

  return (
    <div ref={mainRef}>
      <div
        className="relative w-full lg:max-w-5xl overflow-hidden"
        ref={verticalScrollRef}
      >
        <section className="h-screen text-2xl flex justify-center items-center">
          <Hero />
        </section>
        <section className="h-screen text-2xl flex justify-center items-center">
          <Gallery />
        </section>
        <section className="h-screen text-2xl flex justify-center items-center">
          C
        </section>
        <section className="h-screen text-2xl flex justify-center items-center">
          C
        </section>
      </div>
    </div>
  );
};

export default Home;
