import React from "react";
import { Works, Tech, Testimonials } from "./index";
import { SectionWrapper } from "../hoc";

const Portfolio = () => {
  return (
    <div className="mt-12 bg-hero-pattern bg-cover bg-no-repeat">
      <div className="bg-bg1 bg-cover bg-no-repeat bg-center">
        <Tech />
      </div>
      <div className="bg-bg2 bg-cover bg-no-repeat bg-center">
        <Works />
      </div>
      <div className="bg-bg3 bg-cover bg-no-repeat bg-center"></div>
    </div>
  );
};

export default Portfolio;
