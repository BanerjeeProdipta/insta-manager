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
      <h1>Pixiwall</h1>
      {/* <div className="box h-20 w-20 green rounded bg-green-400"></div>
      <div className="box h-20 w-20 purple rounded bg-purple-400"></div>
      <div className="box h-20 w-20 orange rounded bg-orange-400"></div> */}
    </nav>
  );
};

export default Navbar;
