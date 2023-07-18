import React from "react";
import hero from "../assets/img/Hero.png";

function Hero() {
  return (
    <section className="relative">
      <figure>
        <img src={hero} alt="" className="w-full" />
      </figure>
      <div className="hidden md:block md:max-w-6xl mx-auto w-full">
        <div className="space-y-20 max-w-xs absolute md:top-52 text-white">
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold">Sea Freight</h2>
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui dui,
              morbi justo posuere eget massa mauris platea.
            </p>
          </div>
          <a
            href=""
            className="bg-purple px-8 py-3 rounded-sm shadow-md inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
