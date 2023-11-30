/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const VerticalPhotoLoopAnimation: React.FC = () => {
  useEffect(() => {
    const startAnim = () => {
      const pictures = document.querySelectorAll<HTMLDivElement>(".picture");
      const totalHeight =
        document.querySelector<HTMLDivElement>(".pictures")?.offsetHeight || 0;

      pictures.forEach(function (picture) {
        const pictureHeight = picture.offsetHeight;
        const pictureOffset = picture.offsetTop;
        const pictureDistance = pictureHeight + pictureOffset;

        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none", duration: 15 },
        });
        tl.to(
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

    const pictures = document.querySelectorAll<HTMLImageElement>(".picture");

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
  }, []);

  return (
    <div className="wrapper w-full h-96 flex flex-col justify-center items-center lg:h-screen overflow-hidden">
      <div className="pictures">
        {[...Array(6)].map((item, index) => (
          <Image
            key={index}
            width={180}
            height={320}
            alt="random img"
            className="picture grayscale hover:grayscale-0 transition-colors duration-150"
            id="picture1"
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
};

export default VerticalPhotoLoopAnimation;
