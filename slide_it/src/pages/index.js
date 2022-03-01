import React, { useState, useEffect } from "react";
import Sidebar from "../components/LandingPage/Sidebar/SideIndex";
import Navbar from "../components/LandingPage/Navbar/NavIndex";
import MainSection from "../components/LandingPage/MainSection/MainIndex";
import InfoSection from "../components/LandingPage/InfoSection/InfoIndex";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/LandingPage/InfoSection/data";
import Services from "../components/LandingPage/Services/ServiceIndex";
import Footer from "../components/LandingPage/Footer/FooterIndex";

import { io } from "socket.io-client";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />

      <Services />
      <InfoSection {...homeObjFour} />
      <Footer></Footer>
    </>
  );
};

export default Home;
