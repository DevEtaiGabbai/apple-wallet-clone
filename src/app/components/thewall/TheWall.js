"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "../payment/rotate.css";

const TheWall = () => {
  const [anyCardFlipped2, setAnyCardFlipped2] = useState(false);
  const [anyCardFlipped3, setAnyCardFlipped3] = useState(false);
  const [anyCardFlipped6, setAnyCardFlipped6] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`w-full relative py-[0px] pb-[100px] px-[80px] max-tab:px-[40px] max-md:px-[28px] ${
        anyCardFlipped6 ? "dark-mode show" : ""
      }     ${anyCardFlipped2 ? "dark-mode" : ""}  ${
        anyCardFlipped3 ? "dark-mode" : ""
      }`}
    >
      {anyCardFlipped6 && <div className="dark-overlay"></div>}

      {anyCardFlipped2 && <div className="dark-overlay show"></div>}
      {anyCardFlipped3 && <div className="dark-overlay "></div>}

      <div className="max-w-[1020px] w-full mx-auto">
        <div
          className="w-full mx-auto bg-white p-[120px] max-md:py-[50px] max-md:px-[30px] max-tab:p-[80px] max-tab:px-[40px]  rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="/thewall/applelogo.jpg" alt="" className="mx-auto max-tab:w-[100px] max-tab:w-[100px] max-md:w-[50px] max-md:h-[60px] max-md:mx-0 max-md:object-cover" />
          <h2
            className="text-[80px] max-tab:text-[56px] max-md:text-start max-md:mt-5 text-center  max-md:text-[40px] font-[600] leading-none tracking-[-5px] max-md:tracking-normal"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="opacity-[0.9] text-black mt-2">
              The wall <br />
              around Wallet
            </span>
          </h2>
          <p className="text-[21px] max-md:text-[14px] font-[600] text-center max-md:text-start px-10 max-tab:px-1 mt-5">
            Wallet takes full advantage of the privacy and security built into
            iPhone, which is designed to protect your identity and keep what`s
            yours yours. When you make a purchase, Apple Pay uses a unique
            transaction code, so your card number is never shared with a
            merchant or put on Apple servers. And there`s no need to carry
            physical cards or touch buttons in stores. So it`s safe to say
            you`ll feel safer.
          </p>
        </div>
        <div className="relative h-fit"></div>
      </div>
    </div>
  );
};

export default TheWall;
