import React from "react";

export default function AboutUs() {
  return (
    (<div
      id="aboutus-section"
      className="p-5 mx-auto rounded-md  h-[30rem] overflow-hidden">
      <div
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          What is Actually TeamUp?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        At Team Up, we believe in the power of collaboration to turn ideas into reality. 
        Our platform connects individuals, teams, and organizations to foster seamless partnerships and innovative solutions. With a focus on efficiency, inclusivity, and community, we aim to revolutionize the way people work together. 
        Join us on our mission to empower teamwork and unlock limitless potential.
        </p>
      </div>
    </div>)
  );
}
