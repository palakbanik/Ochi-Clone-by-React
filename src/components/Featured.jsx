import { span } from "framer-motion/client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import BtnFile from "../atom/BtnFile";

function Featured() {
  const imgLinks = [
    "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
    "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
    // "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
    // "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
    // "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
    // "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg",
    // "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
    // "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
    // "https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1101.jpg",
  ];
  const imgNames = [
    "AH2 & Matt Horn",
    "Fyde",
    // "Vise",
    // "All Things Go",
    // "Trawa",
    // "Black Book",
    // "Premium Blend",
    // "Softstart",
    // "Officevibe",
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
          <div className="cards w-full flex gap-16 mt-10">
            {[
              imgLinks.map((item, index) => {
                return (
                  <div className="cardContainer w-1/2 h-[80vh]">
                    <div className="card w-full h-full rounded-xl overflow-hidden">
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
