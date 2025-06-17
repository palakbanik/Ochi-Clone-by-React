import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
      <div className="w-full h-screen pt-1">
        <div className="textStructure mt-52 px-20">
          {["we create", "eye-opening", "presentations"].map((item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex items-center">
                  {index === 1 && (
                    <div className="w-[8vw] h-[5vw] bg-red-500 rounded-lg mr-5"></div>
                  )}
                  <h1
                    key={index}
                    className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-['Founders_Grotesk_X-Cond_Bold'] font-medium"
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t-[1px] border-zinc-800 mt-20 flex  justify-between items-center py-4 px-20">
          {[
            "For public and privets companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="text-base font-light tracking-tight leading-none"
            >
              {item}
            </p>
          ))}

          <div className="start flex items-center gap-5">
            <div className="uppercase font-light text-sm border-[2px] px-5 py-1 rounded-full border-zinc-400 cursor-pointer">
              start the project
            </div>
            <div className="w-8 h-8 rounded-full border-[2px] border-zinc-400">
              <span className="rotate-[45deg] grid  place-items-center">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
