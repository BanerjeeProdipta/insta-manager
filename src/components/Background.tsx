"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Background = () => {
  const pathName = usePathname();
  const isEditPage = pathName === "/edit";

  useEffect(() => {
    const moveBlob = (event: MouseEvent) => {
      const blob = document.getElementById("blob-container");
      if (!blob) return;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      blob.style.transition = "left 0.2s ease-out, top 0.2s ease-out";
      blob.style.left = mouseX + "px";
      blob.style.top = mouseY + "px";
    };

    document.addEventListener("mousemove", moveBlob);

    return () => {
      document.removeEventListener("mousemove", moveBlob);
    };
  }, []);

  return (
    <div className="cursor">
      <div id="blob-container" className="relative pointer-events-none">
        <div className="w-44 h-44 rounded-full bg-lime-500 blur-3xl absolute transform -translate-x-1/2 -translate-y-1/2 filter bg-blend-multiply"></div>
      </div>
      {!isEditPage && (
        <div
          id="background"
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top,transparent 5px, #0c0a09 65px ), linear-gradient(to left, transparent 5px,#0c0a09 65px )",
            backgroundSize: "100px 100px ",
          }}
        />
      )}
    </div>
  );
};

export default Background;
