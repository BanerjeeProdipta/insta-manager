"use client";

function LandingPage() {
  return (
    <div className="space-y-12 py-12 flex h-screen max-h-[50rem] items-center flex-col justify-between">
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
  );
}

export default LandingPage;
