import React from "react";
import Button from "../components/Button";
import code from "../assets/code.svg";
import bg from "../assets/bg.png";
import head from "../assets/head.svg";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="h-screen" style={backgroundStyle}>
      <main className="flex items-center h-screen">
        <section className="flex items-start md:mx-[93px]">
          <img src={code} className="" alt="" />
          <div className="flex flex-col gap-10 pt-5">
            <div className="text-white text-5xl font-semibold">
              Make Your Own
              <br />
              Website and Mobile Application
              <br />
              <div className="flex">
                With Nodewave <img src={head} alt="" />
              </div>
            </div>
            <div>
              <Button>Get Started Now</Button>
            </div>
            <p className="text-2xl max-w-[910px]">
              Create Mobile Applications and Websites for Companies or Your
              Business Have a transparent pricing, easy and straightforward
              development process
            </p>
          </div>
        </section>
      </main>
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-black/60 w-full h-[150px] z-5"></div>
    </div>
  );
};

export default Hero;
