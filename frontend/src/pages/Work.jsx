import React from "react";
import bg2 from "../assets/bg2.png";
const Work = () => {
  return (
    <div className="mx-5 mt-32 flex min-h-screen items-center justify-center md:mx-[93px]">
      <main>
        <h1 className="mb-10 text-center text-3xl font-semibold text-white">
          Our Works
        </h1>
        <section className="flex flex-col gap-5 lg:flex-row">
          <div
            className="flex max-h-[520px] max-w-[873px] flex-col items-center justify-center gap-5 rounded-2xl p-5 py-[95px] lg:flex-row"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="max-w-[557px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/f4f8/b76b/3623b4c5114fc10c95d01a049094d1d6?Expires=1694995200&Signature=My4p94yzT1NuxXvGUSppwAWDDKYfr3PbpAd5enG-VkloMa7TSJtR5lgAzJAKnXiGRgDdF4S6une3EJQTjSO5zu39K0rlc2op4zxY6WjI4a~gdzC4btQwSbMKRdssLDq5vrGNfkJWvNwkAKOjhfvueGy1xGRTYQY0Am0MWtZokRR5~Z~S7wkQcl6CXIDjhY96GIZMbAaFumB3lbRXu1uJJdYtoRRP7qfI6OWDFR7VBTkZ0qaI4jKoeNT95LOri8nUfmxpzDjVH3VWxRJsU6rUY5jS3LUhloQIoAU~bD7Fggq~NKGmxHJmOn1P7-9g7essJv~~K0tWJY9h4oRADCrj0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h2 className="mb-3 text-center text-3xl font-semibold text-white">
                Rayu Motor
              </h2>
              <p className="text-xl">
                AC Service Workshop that has implemented online registration to
                make it easier for consumers, mechanics, and sales
              </p>
            </div>
          </div>
          <div
            className="flex max-h-[520px] max-w-[873px] flex-col items-center justify-center gap-5 rounded-2xl p-5 lg:flex-row"
            style={{
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/d452/2d7f/fdc9937f7bd63afaff8f87e10ae8baa7?Expires=1694995200&Signature=KT3SfBWDC~55ps2S0RW4u7Xyli851xoKnzRWHiWCr7arg9nlsoVUfAqkkssAZZgdJ5tI2wuCa67jNVum9YO2WojbJkfPTZiE-jF6UtS9qx89jdrMp1xqQ5DAPE27q~FwkpXaV24e5cyZXhjHScqbHwMIpyqQeX8xBJqmNcmpMjb9TtcCWCOBTRqf8QaaD0wa0PGLPsgRiAKPwX-nlaZNn368byMzLLvgU4f2aPRoeKYVCHBcr~5jEQkjyDqpgX5IYdj8f7~iFc2U3b~t86ObPSVczcMsjTNtuvqgdVn7qez3lTrcckoX3G1IbE0r4EcdUwlGdRolGGLMOhrauZcLwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
            }}
          >
            <div className="max-w-[557px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/dd17/b03d/57651b33ac2c2b0cf87c7e4796463bc9?Expires=1694995200&Signature=NUTTjDCZJGS~exbIUWIUQ7OTsLuhD2Btw73sc2SHs5u-~r4E6lOLMag4x59jvpD2IhF4iZ6i2t0LNfjVk5gIXZA90Eq65JB1NNoSwcagVx4~VKXiGGb1cXhzkrjIWMU1JNK8QgtDbYxflsHdKEkxuubd6W-0LDaPm5~hn82X8w9Rid1hIXTXNDu9ZfumGUusf2Nn7u1-Us-tFhB7j48fr4MenfUwZgYf2IJd7GujaDMsgoaBz0IqBNUy3Ao32eoxRmbfSMVVIQ2AIFmxhVSIiKEe4ye2R0nEleh49Qmc601MLajGtovJshdr9b9n9c~BRhH2p9zLltMXd6xGE22XfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h2 className="mb-3 text-center text-3xl font-semibold text-white">
                Jasabung
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                quisquam pariatur expedita natus dicta cum.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
