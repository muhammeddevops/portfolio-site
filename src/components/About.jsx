import React from "react";
import { Overview, Experience } from "./index";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="bg-bg5 bg-hero-pattern bg-cover bg-no-repeat bg-center mt-12">
      <Overview />
      <Experience />
    </div>
  );
};

export default About;
