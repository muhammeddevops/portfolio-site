import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Testimonials,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        {/* </div> */}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Testimonials /> */}

        <div className="relative z-0">
          {/* <Contact />
          <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
