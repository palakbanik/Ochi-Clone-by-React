import React from "react";
import BtnFile from "../atom/BtnFile";

function About() {
  return (
    <>
      <div className="w-full py-20 bg-[#CDEA68] text-black rounded-tr-3xl rounded-tl-3xl p-20">
        <h1 className="font-[Neue_Montreal] text-[3vw] leading-[3.7vw] tracking-tight">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>
        <div className="w-full border-t-[1px] mt-20 border-[#9bb055] flex gap-5 pt-10">
          <div className="w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <BtnFile />
          </div>
          <img
            className="w-1/2 h-[35vw] bg-[#c4da73] rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="About page image"
          />
        </div>
      </div>
    </>
  );
}

export default About;
