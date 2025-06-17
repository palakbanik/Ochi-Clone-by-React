import React from "react";
import { GoDotFill } from "react-icons/go";
import BtnFile from "../atom/BtnFile";

function Featured() {
  const imgLinks = [
    "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
    "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg",
    "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
    "https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1101.jpg",
  ];
  const imgNames = [
    "AH2 & Matt Horn",
    "FYDE",
    "VISE",
    "ALL THING GO",
    "TRAWA",
    "BLACK BOOK",
    "PREMIUM BLEND",
    "SOFTSTAR",
    "OFFICEVIBE",
  ];
  return (
    <>
      <div className="w-full py-10">
        <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-20">
          <h1 className="text-8xl font-['Neue Montreal'] tracking-tight">
            Featured projects
          </h1>
        </div>

        <div className="px-20">
          <div className="cards w-full grid grid-cols-2 gap-10 mt-10">
            {[
              imgLinks.map((item, index) => {
                return (
                  <div className="cardContainer w-full h-[80vh]">
                    <div className="flex items-center gap-5 justify-start mb-3">
                      <GoDotFill />
                      {imgNames.map((name, index) => {
                        return <p key={index}>{name}</p>;
                      })}
                    </div>
                    <div className="card w-full cursor-pointer rounded-xl overflow-hidden">
                      <img
                        key={index}
                        className="w-full h-full bg-cover"
                        src={item}
                        alt=""
                      />
                    </div>
                  </div>
                );
              }),
            ]}
          </div>
        </div>
        <BtnFile />
      </div>
    </>
  );
}

export default Featured;
