import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const handleClick = () => {
    const ul = document.querySelector(".nav ul");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    nav.style.display = "block";
    ul.classList.add("block");
    ul.classList.remove("nn");
    menu.classList.add("nn");
  };

  const handleDelete = () => {
    const ul = document.querySelector(".nav ul");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    nav.classList.remove("block");
    ul.classList.remove("block");
    ul.classList.add("nn");
    menu.classList.remove("nn");
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const navBar = {
    backgroundColor: scrollPosition > 0 ? "white" : "transparent",
    boxShadow:
      scrollPosition > 0 ? "2px 3px 1px rgba(140, 140, 140, 0.176)" : "",
    transition: scrollPosition > 0 ? "0.4s ease-out" : "",
    marginTop: scrollPosition > 0 ? "-25px" : "",
    zIndex: scrollPosition > 0 ? 100 : 10,
  };

  return (
    <div className="navigation z-10">
      <div
        style={navBar}
        className="navBar fixed top-0 px-32 items-center flex justify-between"
      >
        <div className="logo mt-12">
          <NavLink to="/">
            <img src="./logo-light.png" alt="LeSigma" />
          </NavLink>
        </div>
        <img
          onClick={handleClick}
          className="none menu cursor-pointer w-10 h-10 mt-10"
          src="./menu.svg"
          alt=""
        />
        <div className="nav mt-12 flex justify-around">
          <ul className="flex nn gap-5 text-md font-normal">
            <img
              onClick={handleDelete}
              className="none delete cursor-pointer w-10 h-10 mt-10"
              src="./x.svg"
              alt=""
            />
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "acTive" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={(nav) => (nav.isActive ? "acTive" : "")}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={(nav) => (nav.isActive ? "acTive" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={(nav) => (nav.isActive ? "acTive" : "")}
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="barre mx-5 h-6"></div>
          <div className="icon -mt-3 flex gap-5">
            <li>
              <NavLink to="#">
                <img
                  className="w-5 h-5 mt-3"
                  src="./facebook-black.svg"
                  alt=""
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img
                  className="w-5 h-5 mt-3"
                  src="./twitter-black.svg"
                  alt=""
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img
                  className="w-5 h-5 mt-3"
                  src="./basketball-black.svg"
                  alt=""
                />
              </NavLink>
            </li>
          </div>
        </div>
      </div>
      <div className="nav_text text-center w-1/2 pt-80">
        <h1 className="text-6xl font-bold">We Have Achieve Biggest Goal</h1>
        <p className="text-gray-500 my-10 text-lg">
          We are LeSigma agency, our strategists will help you set an objective
          and choose your tools, developing a plan that is custom built for your
          business.
        </p>
        <NavLink
          className="account py-4 px-8 text-white hover:bg-black"
          to="/accuont"
        >
          Grap Your Account
        </NavLink>
      </div>
      <div className="svg">
        <svg
          className="z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="192"
          viewBox="0 0 1920 192"
          preserveAspectRatio="none"
        >
          <path
            data-name="Path 2449"
            d="M1920,192V0L0,192Z"
            fill="rgba(255,255,255,0.33)"
          ></path>
          <path
            data-name="Path 2450"
            d="M1920,165.96V3.72L0,165.96Z"
            transform="translate(0 26.04)"
            fill="#fff"
          ></path>
          <path
            data-name="Path 2451"
            d="M1920,178.07V1.99L0,178.07Z"
            transform="translate(0 13.93)"
            fill="rgba(255,255,255,0.33)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
