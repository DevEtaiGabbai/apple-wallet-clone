"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "./rotate.css";

import FlipCards from "../rotatecards/FlipCards";
import SingleCard from "../rotatecards/SingleCard";
import FlipCards2 from "../rotatecards/FlipCards2";
import SingleCard2 from "../rotatecards/SingleCard2";

const Payment = () => {
  const [anyCardFlipped, setAnyCardFlipped] = useState(false);
  const [anyCardFlipped2, setAnyCardFlipped2] = useState(false);
  const [anyCardFlipped3, setAnyCardFlipped3] = useState(false);
  const [anyCardFlipped4, setAnyCardFlipped4] = useState(false);
  const [anyCardFlipped5, setAnyCardFlipped5] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`w-full relative py-[100px] max-md:py-[30px] px-[80px] max-tab:px-[40px]  max-md:px-[30px] ${anyCardFlipped || anyCardFlipped2 || anyCardFlipped3 || anyCardFlipped4 || anyCardFlipped5 ? 'dark-mode' : ''}`}>
      <div className={`dark-overlay ${anyCardFlipped || anyCardFlipped2 || anyCardFlipped3 || anyCardFlipped4 || anyCardFlipped5 ? 'show' : ''}`}></div>

      <div className="max-w-[1020px] w-full mx-auto">
        <div
          className="w-full mx-auto p-[120px] max-tab:p-[80px] max-md:py-[50px] max-md:px-[40px] bg-[#3295C9] rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2
            className="text-[96px] max-tab:text-[80px] max-md:text-[35px] font-bold leading-none tracking-[-5px] max-md:tracking-normal"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="text-white opacity-[0.9]">
              Payments <br />
              and Rewards
            </span>
            <br />
            <span className="opacity-[0.7]">
              Start here. <br />
              Pay anywhere.
            </span>
          </h2>
        </div>
        <div
          className="second w-full mx-auto flex max-md:flex-col-reverse justify-between max-tab:justify-center max-tab:gap-7 max-md:gap-1 pt-[10px] max-md:pt-[40px] px-[40px] overflow-hidden  bg-white rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="w-1/2 max-tab:w-auto ">
            <img
              src="/paymentcomponent/payment.jpg"
              alt="img"
              className="w-[400px] max-md:w-[200px] max-md:mx-auto h-[750px] max-md:h-[350px] max-tab:w-[270px] max-tab:h-[500px]"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
          <div className="flex items-center justify-end max-tab:justify-start w-1/2 max-md:w-full  max-tab:w-[60%] ">
            <h3
              className="text-[70px] max-tab:justify-self-start  max-tab:text-[56px] max-md:text-[32px] font-[700] leading-none"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span>Add a credit or debit card.</span>
              <br />
              <span className="text-[#3395C9]">With no added effort.</span>
            </h3>
          </div>
        </div>
        <div className="relative h-fit">
          <FlipCards onAnyCardFlipped={setAnyCardFlipped} />
          <SingleCard onAnyCardFlipped2={setAnyCardFlipped2} />
          <FlipCards2 onAnyCardFlipped3={setAnyCardFlipped3}/>
          <SingleCard2 onAnyCardFlipped5={setAnyCardFlipped5}/>
        </div>
      </div>
    </div>
  );
};

export default Payment;
