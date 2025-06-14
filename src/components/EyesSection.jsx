import React, { useEffect, useState } from "react";

function EyesSection() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.mouseX;
      let mouseY = e.mouseY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-10">
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
              <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
                <div
                  className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
              <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
                <div
                  className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EyesSection;
