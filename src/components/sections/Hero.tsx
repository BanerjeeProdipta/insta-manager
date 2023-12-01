// Hero.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const text = gsap.getById("hero");

    if (text) {
      gsap.from(text, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      id="hero"
      className="whitespace-nowrap max-w-xl text-6xl font-bold text-white"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et urna
      eu risus dapibus fringilla.
    </div>
  );
};

export default Hero;
