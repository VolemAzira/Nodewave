import React from "react";
import Logo from "../assets/logo.png";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import yt from "../assets/yt.svg";
import linkedin from "../assets/linkedin.svg";
import ig from "../assets/ig.svg";

const Footer = () => {
  return (
    <div className="mt-12 py-5">
      <main className="flex flex-col items-center justify-center gap-8">
        <img src={Logo} alt="" />
        <div className="text-center text-xl font-semibold text-white">
          PT NODEWAVE SOLUSI TEKNOLOGI
        </div>
        <div className="text-center text-xl font-semibold text-white">
          Graha Pena Surabaya
          <br />
          Jl. Ahmad Yani no. 88 Surabaya
          <br />
          Phone : +62811258280
          <br />
          Email : support@nodewave.id
        </div>
        <div className="flex gap-5">
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={yt} alt="" />
          <img src={linkedin} alt="" />
          <img src={ig} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Footer;
