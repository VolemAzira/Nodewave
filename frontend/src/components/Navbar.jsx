import React, { useState } from "react";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import Logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(toggleNavbar ? false : true);
  };

  return (
    <>
      <nav className="fixed w-full shadow-md z-10">
        <div className="flex items-center justify-between bg-black px-[40px] py-[28px] text-xl text-white">
          <img src={Logo} alt="" />
          <div className="hidden gap-[30px] md:items-center lg:flex">
            <a href="">Website</a>
            <a href="">Mobile Apps</a>
            <a href="">Portfolio</a>
            <Button>Make an APP</Button>
          </div>
          <div className="lg:hidden">
            {toggleNavbar ? (
              <img src={cross} alt="" onClick={handleToggleNavbar} width={30} />
            ) : (
              <img src={menu} alt="" onClick={handleToggleNavbar} width={30} />
            )}
          </div>
        </div>

        <div
          className={` ${
            toggleNavbar ? "block" : "hidden"
          } flex flex-col gap-[30px] bg-black py-10 text-center text-xl lg:hidden`}
        >
          <a href="" className="mx-4 border-b">
            Website
          </a>
          <a href="" className="mx-4 border-b">
            Mobile Apps
          </a>
          <a href="" className="mx-4 border-b">
            Portfolio
          </a>
          <a href="" className="mx-4 border-b">
            Make an APP
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
