import React from "react";

function Marquee() {
  return (
    <>
      <div className="w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
        <div className="text border-t-2 border-b-2 border-zinc-300 text-white flex overflow-hidden whitespace-nowrap gap-10">
          <h1 className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold pb-2 ">
            we are ochi
          </h1>
          <h1 className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold pb-2">
            we are ochi
          </h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
