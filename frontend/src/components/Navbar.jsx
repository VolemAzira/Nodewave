import React from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-black py-[28px] px-[40px] text-white flex justify-between items-center text-xl fixed w-full z-10">
      <img src={Logo} alt="" />
      <div className="flex gap-[30px] items-center">
        <a href="">Website</a>
        <a href="">Mobile Apps</a>
        <a href="">Portfolio</a>
        <Button>Make an APP</Button>
      </div>
    </nav>
  );
};

export default Navbar;
