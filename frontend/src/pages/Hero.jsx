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
      <main className="mx-5 flex h-screen items-center md:mx-[93px]">
        <section className=" flex max-w-[910px] items-start justify-center">
          <img src={code} className="" alt="" />
          <div className="flex flex-col gap-10 pt-5">
            <div className="text-2xl font-semibold text-white md:text-5xl">
              Make Your Own Website and Mobile Application
              <div className="flex">
                With Nodewave <img src={head} alt="" />
              </div>
            </div>
            <div>
              <Button>Get Started Now</Button>
            </div>
            <p className="md:text-2xl">
              Create Mobile Applications and Websites for Companies or Your
              Business Have a transparent pricing, easy and straightforward
              development process
            </p>
          </div>
        </section>
      </main>
      <div className="z-5 absolute bottom-0 h-[150px] w-full bg-gradient-to-t from-black to-black/60"></div>
    </div>
  );
};

export default Hero;
