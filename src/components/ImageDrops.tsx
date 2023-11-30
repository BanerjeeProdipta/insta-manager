"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const imagesArr = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

const PhotoGrid: React.FC = () => {
  const boxHeight = 600;
  const numberOfBoxes = imagesArr.length;
  const container = useRef<HTMLDivElement>(null);
  const containerHeight = container.current?.clientHeight || 800;
  const numberOfBoxesToFitScreen = Math.ceil(
    containerHeight / (numberOfBoxes * boxHeight)
  );

  while (imagesArr.length < numberOfBoxesToFitScreen) {
    imagesArr.push(...imagesArr);
  }
  useEffect(() => {
    if (!container.current) return;

    const totalHeight = numberOfBoxes * boxHeight;

    gsap.set(".img", {
      y: (i) => i * boxHeight - totalHeight,
    });

    gsap.to(".img", {
      duration: 50,
      y: `+=${totalHeight * 2}`,
      ease: "none",
      repeat: -1,
    });
  }, [numberOfBoxes]);

  return (
    <div
      ref={container}
      className="w-full flex flex-col relative -top-96 h-screen max-h-[800px] overflow-hidden"
    >
      {imagesArr.map((image, index) => (
        <Image
          key={index}
          src={image}
          loading="lazy"
          alt={`Image ${index}`}
          width={400}
          height={600}
          className="img grayscale my-1 absolute hover:grayscale-0 transition-all hover:bg-secondary duration-300"
          style={{ padding: 1, height: boxHeight }}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
