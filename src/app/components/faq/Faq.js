"use client";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import "../payment/rotate.css";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Apple Wallet?",
    answer: `Apple Wallet is an app on iPhone and Apple Watch that securely and conveniently organizes your credit and debit cards, transit passes, boarding passes, tickets, identity cards, keys, rewards cards, and more — all in one place.`,
  },
  {
    question: "How safe is Apple Wallet?",
    answer: `In a word, very. Your cards are securely associated with your Apple ID to help you add and manage your cards and passes across devices. For added security, iCloud encrypts your Wallet data when it’s sent over the internet and stores it in an encrypted format when it’s on Apple servers.`,
  },
  {
    question: "How do I use Apple Wallet?",
    answer: `It’s easy to use different cards and passes in Apple Wallet. Some passes can automatically appear based on time and location, like a boarding pass when you arrive at the airport.<br><br>
      If you have a credit, debit, prepaid, store, or rewards card in Wallet that works with Apple Pay, just double-click the Home button to open Wallet and use your card from the reader. On iPhone X or later, double-click the side button. <a href="https://support.apple.com" target="_blank" style="color: blue;">Learn more</a><br><br>
      You can also use Express Transit without having to wake or unlock your phone. <a href="https://support.apple.com" target="_blank" style="color: blue;">Learn more</a><br><br>
      You can even use your iPhone or Apple Watch as a home, car, and hotel key. <a href="https://support.apple.com" target="_blank" style="color: blue;">Learn more</a>`,
  },
  {
    question: "What is the difference between Apple Pay and Apple Wallet?",
    answer: `Apple Wallet is an app on iPhone and Apple Watch that securely and conveniently organizes your credit and debit cards, transit passes, boarding passes, tickets, identity cards, keys, rewards cards, and more — all in one place.`,
  },
  // Add more FAQs here
];

const Faq = () => {
  const [anyCardFlipped2, setAnyCardFlipped2] = useState(false);
  const [anyCardFlipped3, setAnyCardFlipped3] = useState(false);
  const [anyCardFlipped6, setAnyCardFlipped6] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setHeight(0);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [openIndex]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`w-full bg-white relative py-[100px] pb-[100px] px-[80px] max-tab:px-[40px] max-md:px-[5px] ${
        anyCardFlipped6 ? "dark-mode show" : ""
      } ${anyCardFlipped2 ? "dark-mode" : ""} ${anyCardFlipped3 ? "dark-mode" : ""}`}
    >
      {anyCardFlipped6 && <div className="dark-overlay"></div>}

      {anyCardFlipped2 && <div className="dark-overlay show"></div>}
      {anyCardFlipped3 && <div className="dark-overlay "></div>}

      <div className="max-w-[1120px] w-full mx-auto">
        <h1 className="text-center max-md:leading-[40px] text-[80px] max-tab:text-[60px] max-md:text-[40px] font-[700]">
          Questions? Answers.
        </h1>
        <div
          className="w-full mx-auto bg-white py-[40px] max-md:py-[50px] max-md:px-[30px] max-tab:p-[80px] rounded-[30px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {faqs.map((faq, index) => (
            <div key={index} className={`flex flex-col mb-4 pb-8 border-b ${index === 0 ? "custom-styling-1" : ""} ${index === 2 ? "custom-styling-3" : ""}`}>
              <div
                className="question w-full flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className={`text-[24px] ${index === 2 || index === 0 ? "max-tab:text-[22px] max-md:text-[20px]" : "max-tab:text-[20px] max-md:text-[18px]"} font-[600]`}>
                  {faq.question}
                </h3>
                <span>
                  {openIndex === index ? (
                    <FaChevronUp size={30} color="grey" />
                  ) : (
                    <FaChevronDown size={30} color="grey" />
                  )}
                </span>
              </div>
              <div
                className="answer overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  height: openIndex === index ? `${height}px` : "0px",
                }}
                ref={openIndex === index ? answerRef : null}
              >
                {index === 0 || index === 2 ? (
                  <p
                    className="mt-4 text-[17px] max-tab:text-[15px] max-md:text-[14px]"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                ) : (
                  <p className="mt-4 text-[17px] max-tab:text-[15px] max-md:text-[14px]">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-fit"></div>
      </div>
    </div>
  );
};

export default Faq;
