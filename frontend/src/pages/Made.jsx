import React from "react";
import List from "../assets/list.svg";
import Basket from "../assets/basket.svg";
import Book from "../assets/book.svg";
import shop from "../assets/shop.svg";
import company from "../assets/company.svg";
import cashier from "../assets/cashier.svg";
import chatt from "../assets/chatt.svg";
import workshop from "../assets/workshop.svg";
import hammer from "../assets/hammer.svg";
import Coding from "../assets/coding.png";
import Mobile from "../assets/mobile.png";

const Made = () => {
  return (
    <div className="mx-5 min-h-screen md:mx-[93px]">
      <main>
        <h1 className="mb-12 mt-36 text-center text-3xl font-semibold">
          Applications that can be made
        </h1>
        <section>
          <div className="flex flex-col justify-between gap-10 my-10 lg:flex-row">
            <div>
              <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-white">
                <img src={List} alt="" />
                Online Attendance
              </h3>
              <p className="mb-5">
                With the times, your team may be able to work in the office or
                outside the office. Get the accuracy of your team's work hours
                with your own company's special online attendance feature with
                features such as:
              </p>
              <ul className="list-disc pl-5">
                <li>Clock in and Clock Out attendance</li>
                <li>Face Photo</li>
                <li>Face Recognition</li>
                <li>Accurate time stamp down to seconds</li>
                <li>GPS location of employees</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-white">
                <img src={Basket} alt="" />
                Online Attendance
              </h3>
              <p className="mb-5">
                With the times, your team may be able to work in the office or
                outside the office. Get the accuracy of your team's work hours
                with your own company's special online attendance feature with
                features such as:
              </p>
              <ul className="list-disc pl-5">
                <li>Clock in and Clock Out attendance</li>
                <li>Face Photo</li>
                <li>Face Recognition</li>
                <li>Accurate time stamp down to seconds</li>
                <li>GPS location of employees</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-white">
                <img src={Book} alt="" />
                Online Attendance
              </h3>
              <p className="mb-5">
                With the times, your team may be able to work in the office or
                outside the office. Get the accuracy of your team's work hours
                with your own company's special online attendance feature with
                features such as:
              </p>
              <ul className="list-disc pl-5">
                <li>Clock in and Clock Out attendance</li>
                <li>Face Photo</li>
                <li>Face Recognition</li>
                <li>Accurate time stamp down to seconds</li>
                <li>GPS location of employees</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className="flex flex-wrap justify-center gap-5 lg:justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img src={shop} alt="" />
              </div>
              <div className="text-lg font-semibold text-white">E-commerce</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={company} alt="" />
              </div>
              <div className="text-lg font-semibold text-white">
                Company Profile
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={cashier} alt="" />
              </div>
              <div className="text-lg font-semibold text-white">Cashier</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={chatt} alt="" />
              </div>
              <div className="text-lg font-semibold text-white">Chat</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={workshop} alt="" />
              </div>
              <div className="text-lg font-semibold text-white">Workshop</div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={hammer} alt="" />
              </div>
              <div className="text-lg font-semibold text-white">
                Construction
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg font-semibold text-white">
                and many others
              </div>
            </div>
          </div>

          <div>
            <h1 className="mb-24 mt-36 text-center text-3xl font-semibold text-white">
              Start Creating Websites or Mobile Apps For You Now
            </h1>
            <div className="flex flex-col justify-around gap-10 lg:flex-row">
              <div className="flex justify-center rounded-lg bg-white">
                <div className="flex w-full flex-col items-center justify-center gap-5 p-10">
                  <h3 className="text-center text-3xl font-semibold text-zinc-800">
                    Mobile Apps
                  </h3>
                  <div>
                    <h3 className="text-center text-xl font-semibold text-zinc-800">
                      Start from
                    </h3>
                    <div className="text-center text-sm font-normal text-neutral-500 line-through decoration-red-500 decoration-2">
                      Rp 1.000.000
                    </div>
                    <div className="text-center text-sm font-medium text-zinc-800">
                      Rp, 500.000
                    </div>
                  </div>
                  <button className="w-40 rounded-3xl bg-teal-500 py-3">
                    Order Now
                  </button>
                </div>
                <div className="w-full">
                  <img src={Coding} className="w-full" />
                </div>
              </div>
              <div className="flex justify-center rounded-lg bg-white">
                <div className="flex w-full flex-col items-center justify-center gap-5 p-10">
                  <h3 className="text-center text-3xl font-semibold text-zinc-800">
                    Mobile Apps
                  </h3>
                  <div>
                    <h3 className="text-center text-xl font-semibold text-zinc-800">
                      Start from
                    </h3>
                    <div className="text-center text-sm font-medium text-zinc-800">
                      Rp, 999.000
                    </div>
                  </div>
                  <button className="w-40 rounded-3xl bg-teal-500 py-3">
                    Order Now
                  </button>
                </div>
                <div className="w-full">
                  <img src={Mobile} className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Made;
