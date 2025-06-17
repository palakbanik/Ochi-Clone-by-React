import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import EyesSection from "./components/EyesSection";
import Featured from "./components/Featured";

const App = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <EyesSection />
        <Featured />
      </div>
    </>
  );
};

export default App;
