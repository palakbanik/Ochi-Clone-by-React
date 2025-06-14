import React from "react";

function LandingPage() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textStructure mt-40 px-20">
          <div className="masker">
            <h1 className="uppercase text-8xl leading-none tracking-tighter font-['Founders Grotesk'] font-medium">
              We Create
            </h1>
          </div>
          <div className="masker">
            <h1 className="uppercase text-8xl leading-none tracking-tighter font-['Founders Grotesk'] font-medium">
              eye-opening
            </h1>
          </div>
          <div className="masker">
            <h1 className="uppercase text-8xl leading-none tracking-tighter font-['Founders Grotesk'] font-medium">
              presentations
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
