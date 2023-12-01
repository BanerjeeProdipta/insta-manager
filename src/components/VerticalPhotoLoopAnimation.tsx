"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useAtom } from "jotai";
import { hoveredImageAtom } from "@/app/atoms";

const VerticalPhotoLoopAnimation: React.FC = () => {
  const animationRef = useRef<gsap.core.Timeline>();
  const [, setHoveredImageId] = useAtom(hoveredImageAtom);

  useEffect(() => {
    const pictures = document.querySelectorAll<HTMLImageElement>(".picture");

    const startAnim = () => {
      const totalHeight =
        document.querySelector<HTMLDivElement>(".pictures")?.offsetHeight || 0;

      // Create a single timeline to handle all animations
      animationRef.current = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none", duration: 15 },
      });

      pictures.forEach(function (picture) {
        const pictureHeight = picture.offsetHeight;
        const pictureOffset = picture.offsetTop;
        const pictureDistance = pictureHeight + pictureOffset;

        if (animationRef.current)
          // Add animations to the main timeline for each picture
          animationRef.current.to(
            picture,
            {
              y: `-=${totalHeight}`,
              modifiers: {
                y: function (y) {
                  y = parseFloat(y);
                  if (y < -pictureDistance) {
                    y += totalHeight;
                  }
                  return y + "px";
                },
              },
            },
            0
          );
      });
    };

    let counter = 0;
    pictures.forEach(function (picture) {
      if ((picture as HTMLImageElement).complete) {
        incrementCounter();
      } else {
        picture.addEventListener("load", incrementCounter);
      }
    });

    function incrementCounter() {
      counter++;
      if (counter === pictures.length) {
        startAnim();
      }
    }

    return () => {
      // Clean up the animation when the component unmounts
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  if (animationRef)
    return (
      <div
        className="wrapper w-full h-96 flex flex-col justify-center items-center lg:h-screen overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="pictures">
          {[...Array(6)].map((item, index) => (
            <Image
              key={index}
              width={140}
              height={240}
              alt="random img"
              onMouseEnter={() => setHoveredImageId(index + 1)}
              onMouseLeave={() => setHoveredImageId(null)}
              className="picture static z-10 grayscale hover:grayscale-0 drop-shadow-lg transition-colors duration-150"
              id={`picture${index}`}
              src={`/resized/${index + 1}.jpg`}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          ))}
        </div>
      </div>
    );

  return <></>;
};

export default VerticalPhotoLoopAnimation;
