"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HorizontalLoopAnimation = () => {
  const numberOfBoxes = 20;
  const container = useRef<HTMLDivElement>(null);
  const containerWidth = container.current?.clientWidth || 1000;
  const boxWidth = Math.floor(containerWidth / numberOfBoxes);

  useEffect(() => {
    if (!container.current) return;

    gsap.set(".box", {
      x: (i) => i * boxWidth,
    });

    gsap.to(".box", {
      duration: 5,
      ease: "none",
      x: `+=${containerWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % x),
      },
      repeat: -1,
    });
  }, [boxWidth, containerWidth]);

  return (
    <div ref={container} className="h-20 overflow-hidden">
      <div className="flex relative transition-all -left-32 duration-500 ease-in-out">
        {[...Array(numberOfBoxes)].map((_, index) => (
          <div
            key={index}
            className={`box absolute h-20 bg-secondary text-white text-center text-lg`}
            style={{ width: boxWidth }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLoopAnimation;
