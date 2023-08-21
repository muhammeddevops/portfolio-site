import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin } from "../assets";
import { FaGithub } from "react-icons/fa";

import { cv } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/cvNew.pdf"); // Path to CV file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "JSbyMKdotComCV.pdf"; // Replace with desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the CV:", error);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain rounded-lg"
            />
            <p className="hidden sm:block text-white text-[18px] font-bold cursor-pointer flex">
              Muhammed Khan
            </p>
          </Link>
        </div>

        <div className=" gap-7  flex">
          <a
            className=" pt-3"
            href="https://www.linkedin.com/in/muhammed-khan-63b009234/"
            target="_blank"
          >
            <img src={linkedin} alt="cv-icon" className="max-w-[35px] " />
          </a>

          <button onClick={handleDownloadCV}>
            <img src={cv} alt="cv-icon" className="max-w-[35px]  pt-3" />
          </button>
          <a
            className="pt-3"
            href="https://github.com/muhammeddevops"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <div className="flex">
          <ul className="list-none hidden lg:flex flex-row gap-10">
            <li
              className={`${
                active === "Home" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Home")}
            >
              <Link to="/">Home</Link>
            </li>

            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <Link to={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl lg:hidden`}
          >
            <ul className="list-none flex  justify-end items-start flex-col gap-4">
              <li
                className={`${
                  active === "Home" ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive("Home")}
              >
                <Link to="/">Home</Link>
              </li>

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
