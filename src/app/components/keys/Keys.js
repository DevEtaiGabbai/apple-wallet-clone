"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "../payment/rotate.css";

import KeyCard from "../rotatecards/KeyCard";
import HotelCard from "../rotatecards/HotelCard";

const Keys = () => {
  const [anyCardFlipped10, setAnyCardFlipped10] = useState(false);
  const [anyCardFlipped11, setAnyCardFlipped11] = useState(false);
  const [anyCardFlipped3, setAnyCardFlipped3] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`w-full relative py-[0px] pb-[100px] px-[80px] max-tab:px-[40px] max-md:px-[28px] ${anyCardFlipped10 || anyCardFlipped11  ? 'dark-mode' : ''}`}>
      <div className={`dark-overlay ${anyCardFlipped10 || anyCardFlipped11  ? 'show' : ''}`}></div>

      <div className="max-w-[1020px] w-full mx-auto">
        <div
          className="w-full mx-auto p-[120px] max-md:py-[50px] max-md:px-[30px] max-tab:p-[80px] bg-[#F26D5F] rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2
            className="text-[96px] max-tab:text-[80px] max-md:text-[40px] font-bold leading-none tracking-[-5px] max-md:tracking-normal"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="text-white opacity-[0.9]">Keys</span>
            <br />
            <span className="opacity-[0.7] text-[#6F352F]">Now with less key</span>
          </h2>
        </div>
        <div className="relative h-fit">
          <KeyCard onAnyCardFlipped10={setAnyCardFlipped10} />
          <HotelCard onAnyCardFlipped11={setAnyCardFlipped11} />
        </div>
      </div>
    </div>
  );
};

export default Keys;
