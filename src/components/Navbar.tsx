"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

    tl.to(".green", { rotation: 360 });
    tl.to(".purple", { rotation: 360 });
    tl.to(".orange", { rotation: 360 });
  }, []);

  return (
    <nav>
      <div className="flex items-center space-x-4 relative h-20relative h-20 text-xl font-bold text-lime-400 p-4">
        <h1>Pixi Wall</h1>
      </div>
    </nav>
  );
};

export default Navbar;
