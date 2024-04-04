import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="whitespace-nowrap w-full text-6xl font-bold text-white">
      <h1 id="hero" ref={textRef} className="text-center">
        Prodipta Banerjee
        <br />
        <span className="text-lg font-normal">
          Software Engineer [Frontend]
        </span>
        <br />
        <span className="text-sm font-light">
          Crafting delightful web experiences with passion and precision.
        </span>
      </h1>
    </div>
  );
};

export default Hero;
