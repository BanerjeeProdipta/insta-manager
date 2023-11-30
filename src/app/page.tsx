"use client";

import VerticalPhotoLoopAnimation from "@/components/VerticalPhotoLoopAnimation";

function LandingPage() {
  return (
    <div className="flex mx-auto justify-center flex-col md:flex-row container max-w-4xl items-center w-full selection:bg-lime-300 selection:text-lime-900 ">
      <VerticalPhotoLoopAnimation />

      <div className="space-y-12  px-6 bg-stone-800/80 md:bg-transparent py-12 flex lg:h-screen lg:max-h-[50rem] flex-col">
        <div className="space-y-2">
          <h2>Welcome to Our World</h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-loose tracking-wide">
            Explore the Extraordinary, Experience the Unforgettable.
          </p>
        </div>

        <div className="space-y-2">
          <h2>Discover Adventure</h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-loose tracking-wide">
            Embark on thrilling journeys and create unforgettable memories.
          </p>
        </div>

        <div className="space-y-2">
          <h2>Join Our Community</h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-loose tracking-wide">
            Connect with like-minded adventurers and share your experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
