"use client";
import React, { useState } from "react";
import Header from "./components/header.js/Header";
import AppleCash from "./components/header.js/AppleCash";
import WalletComponent from "./components/walletcomponent/WalletComponent";
import Payment from "./components/payment/Payment";
import useIntersectionObserver from "./components/useIntersectionObserver/useIntersectionObserver"; // Adjust the path accordingly
import Identity from "./components/identity/Identity";
import Transit from "./components/transit/Transit";
import Keys from "./components/keys/Keys";
import Finance from "./components/finance/Finance";
import FinanceDetails from "./components/financedetails/FinanceDetails";
import Footer from "./components/footer/Footer";
import TheWall from "./components/thewall/TheWall";
import Faq from "./components/faq/Faq";

const Page = () => {
  const [bgColor, setBgColor] = useState("#D9D6CC");

  const sections = [
    { id: "section1", bgColor: "#D9D6CC" },
    { id: "section2", bgColor: "#3295C9" },
    { id: "section3", bgColor: "#FCAD00" },
    { id: "section4", bgColor: "#50BE3D" },
    { id: "section5", bgColor: "#F26D5F" },
    { id: "section6", bgColor: "#D9D5CB" },
    { id: "section7", bgColor: "#6A5ACD" },
    { id: "section8", bgColor: "#6A5ACD" },

  ];

  useIntersectionObserver(setBgColor, sections);

  return (
    <div className="relative">
      <Header />
      <AppleCash />
      <div
        className="w-full"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 1.5s ease",
        }}
      >
        <div id="section1">
          <WalletComponent />
        </div>
        <div id="section2">
          <Payment />
        </div>
        <div id="section3" className="">
          <Identity />
        </div>
        <div id="section4" className="">
          <Transit />
        </div>
        <div id="section5" className="">
          <Keys />
        </div>
        <div id="section6" className=" ">
          <TheWall/>
        </div>
        <div  className=" ">
        <Faq/>
        </div>
        <div >
          <Finance />
        </div>
        <div >
          <FinanceDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
