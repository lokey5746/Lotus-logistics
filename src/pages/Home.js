import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Tag from "./Tag";
import Services from "./Services";
import Partners from "./Partners";
import Review from "./Review";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Tag />
      <Review />
      <Services />
      <Partners />
    </>
  );
}

export default Home;
