"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { TextGenerateEffect_sub } from "./TextGenerateEffect";

export default function WhyUs() {
  return (
    (<div
      id="whyus-section"
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-2 mb-2 p-5 lg:p-0 md:mt-5 md:mb-5 lg:mt-10 lg:md-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Where Collaboration Meets Innovation
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Team Up brings individuals and teams together, creating opportunities to connect, collaborate, and innovate. 
            Empower your ideas and projects by teaming up with the right people.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Team Up. Build Better.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Join a platform that helps you find like-minded collaborators to achieve your goals. Together, we can turn visions into reality.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Uniting Visionaries to Shape the Future
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Team Up is more than a platform; it’s a movement to inspire collective growth and innovation. We bridge the gap between talent and opportunity, creating a community where every idea finds its perfect team.
          </p>
        </div>
      </WobbleCard>
      <div className="col-span-1 lg:col-span-3 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
        <TextGenerateEffect_sub />
      </div>
    </div>)
  );
}
