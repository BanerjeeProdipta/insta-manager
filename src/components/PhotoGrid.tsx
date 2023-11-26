"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const imagesArr = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

const PhotoGrid: React.FC = () => {
  const boxHeight = 400;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElem = container.current;

    if (!containerElem) return;

    const totalHeight = boxHeight * imagesArr.length;

    gsap.set(".img", {
      y: (i) => i * boxHeight,
    });

    const initialImages = containerElem.querySelectorAll(".img");

    initialImages.forEach((image) => {
      const clone = image.cloneNode(true) as HTMLImageElement;
      clone.style.top = `${boxHeight * imagesArr.length}px`;
      containerElem.appendChild(clone);
    });

    const imgs = containerElem.querySelectorAll(".img");
    console.log(imgs);

    const animationTimeline = gsap.to(containerElem, {
      duration: 30,
      y: `-=${totalHeight}`,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => parseFloat(y) % totalHeight),
      },
      repeat: -1,
    });

    // Pause the animation on container hover
    containerElem.addEventListener("mouseenter", () => {
      if (animationTimeline) {
        animationTimeline.pause();
      }
    });

    // Resume the animation when hovering ends
    containerElem.addEventListener("mouseleave", () => {
      if (animationTimeline) {
        animationTimeline.play();
      }
    });

    // Scroll functionality
    const handleScroll = (event: WheelEvent) => {
      if (animationTimeline) {
        animationTimeline.pause();

        gsap.to(containerElem, {
          y: `-=${event.deltaY}`,
          duration: 0.5,
          onComplete: () => {
            animationTimeline?.play();
          },
        });
      }
    };

    containerElem.addEventListener("wheel", handleScroll);

    return () => {
      containerElem.removeEventListener("mouseenter", () => {
        if (animationTimeline) {
          animationTimeline.pause();
        }
      });

      containerElem.removeEventListener("mouseleave", () => {
        if (animationTimeline) {
          animationTimeline.play();
        }
      });

      containerElem.removeEventListener("wheel", handleScroll);

      if (animationTimeline) {
        animationTimeline.kill();
      }
    };
  }, []);

  return (
    <div
      ref={container}
      className="w-full relative  flex flex-col items-center justify-center "
    >
      {imagesArr.map((image, index) => (
        <Image
          key={index}
          src={image}
          loading="lazy"
          alt={`Image ${index}`}
          width={260}
          height={400}
          className="img grayscale absolute hover:grayscale-0 transition-all hover:bg-secondary duration-300 py-1"
          style={{ height: `${boxHeight}px` }}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
