"use client";
import { hoveredImageAtom } from "@/app/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Background = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredImageIndex] = useAtom(hoveredImageAtom);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const moveBlob = (event: MouseEvent) => {
      const blob = document.getElementById("blob-container");
      if (!blob) return;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      blob.style.transition = "left 0.1s ease-out, top 0.1s ease-out";
      blob.style.left = mouseX + "px";
      blob.style.top = mouseY + "px";
    };

    document.addEventListener("mousemove", moveBlob);

    return () => {
      document.removeEventListener("mousemove", moveBlob);
    };
  }, []);

  useEffect(() => {
    const backgroundImage = document.querySelector(".bg-contain");

    if (hoveredImageIndex !== null) {
      gsap.fromTo(
        backgroundImage,
        {
          backgroundPosition: "-100%",
          opacity: 0,
          x: -400,
        },
        {
          duration: 0.5,
          backgroundPosition: "center",
          opacity: 1,
          x: -500,
        }
      );
    } else {
      gsap.fromTo(
        backgroundImage,
        {
          backgroundPosition: "center",
          opacity: 1,
          x: -500,
        },
        {
          duration: 0.5,
          backgroundPosition: "-100%",
          opacity: 0,
          x: -400,
        }
      );
    }
  }, [hoveredImageIndex]);

  console.log({ hoveredImageIndex });

  if (isClient)
    return (
      <div>
        <div id="blob-container" className="relative pointer-events-none">
          <div className="w-44 h-44 rounded-full bg-lime-500 blur-3xl absolute transform -translate-x-1/2 -translate-y-1/2 filter bg-blend-multiply"></div>
        </div>
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top,transparent 5px, #0c0a09 65px ), linear-gradient(to left, transparent 5px,#0c0a09 65px )",
            backgroundSize: "100px 100px ",
          }}
        />
        {hoveredImageIndex && (
          <div
            className="absolute z-0 lg:block hidden inset-0 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(/resized/${hoveredImageIndex}.jpg)`,
            }}
          ></div>
        )}
      </div>
    );

  return <></>;
};

export default Background;
