"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "../payment/rotate.css";
import SingleCard3 from "../rotatecards/SingleCard3";
import EmployCards from "../rotatecards/EmployCards";

const Identity = () => {
  const [anyCardFlipped2, setAnyCardFlipped2] = useState(false);
  const [anyCardFlipped3, setAnyCardFlipped3] = useState(false);
  const [anyCardFlipped6, setAnyCardFlipped6] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`w-full relative py-[100px] max-tab:py-[0px] px-[80px] max-tab:px-[40px] max-md:px-[28px] ${anyCardFlipped2 || anyCardFlipped3 || anyCardFlipped6 ? 'dark-mode' : ''}`}>
      <div className={`dark-overlay ${anyCardFlipped2 || anyCardFlipped3 || anyCardFlipped6 ? 'show' : ''}`}></div>

      <div className="max-w-[1020px] w-full mx-auto">
        <div
          className="w-full mx-auto p-[120px] max-md:px-[25px] max-md:p-[40px]  max-tab:p-[80px] bg-[#FCAD00] rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2
            className="text-[96px] max-tab:text-[80px] max-md:text-[40px] font-bold leading-none tracking-[-5px] max-md:tracking-normal"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="text-white opacity-[0.9]">
              Identity Cards
            </span>
            <br />
            <span className="opacity-[0.7] text-[#835A00]">
              Always on hand.
              <br />
              Or wrist.
            </span>
          </h2>
        </div>
        <SingleCard3 onAnyCardFlipped6={setAnyCardFlipped6} />
        <div className="relative h-fit">
          <EmployCards onAnyCardFlipped2={setAnyCardFlipped2} />
        </div>
      </div>
    </div>
  );
};

export default Identity;
