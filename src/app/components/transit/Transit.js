"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "../payment/rotate.css";
import ExpressCard from "../rotatecards/ExpressCard";
import BoardingCard from "../rotatecards/BoardingCard";
import ThemeCard from "../rotatecards/ThemeCard";
import SportsCard from "../rotatecards/SportsCard";

const Transit = () => {
  const [anyCardFlipped7, setAnyCardFlipped7] = useState(false);
  const [anyCardFlipped8, setAnyCardFlipped8] = useState(false);
  const [anyCardFlipped9, setAnyCardFlipped9] = useState(false);

  const [anyCardFlipped6, setAnyCardFlipped6] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`w-full relative py-[100px] px-[80px] max-tab:px-[40px] max-md:px-[28px] ${anyCardFlipped6 || anyCardFlipped7 || anyCardFlipped8 || anyCardFlipped9 ? 'dark-mode' : ''}`}>
      <div className={`dark-overlay ${anyCardFlipped6 || anyCardFlipped7 || anyCardFlipped8 || anyCardFlipped9  ? 'show' : ''}`}></div>

      <div className="max-w-[1020px] w-full mx-auto">
        <div
          className="w-full mx-auto p-[120px] max-tab:p-[80px] max-md:px-[20px] max-md:py-[40px] bg-[#50BE3D] rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2
            className="text-[96px] max-tab:text-[80px] max-md:text-[40px] font-bold leading-none tracking-[-5px] max-md:tracking-normal"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="text-white opacity-[0.9]">
              Transit <br className="hidden max-tab:block" /> and Tickets
            </span>
            <br />
            <span className="opacity-[0.7] text-[#835A00]">
              Your even more
              <br />
              mobile device.
            </span>
          </h2>
        </div>
        <div className="relative h-fit">
          <ExpressCard onAnyCardFlipped6={setAnyCardFlipped6} />
          <BoardingCard onAnyCardFlipped7={setAnyCardFlipped7} />
          <ThemeCard onAnyCardFlipped8={setAnyCardFlipped8} />
          <SportsCard onAnyCardFlipped9={setAnyCardFlipped9} />
        </div>
      </div>
    </div>
  );
};

export default Transit;
