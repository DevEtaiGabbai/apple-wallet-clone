"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import "../payment/rotate.css";

const SingleCard = ({ onAnyCardFlipped2 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef3 = useRef(null);
  const backRef3 = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      if (typeof onAnyCardFlipped2 === "function") {
        onAnyCardFlipped2(newFlipped);
      }
      return newFlipped;
    });
  };

  const setBackHeight = (frontRef, backRef) => {
    if (frontRef.current && backRef.current) {
      const frontHeight = frontRef.current.offsetHeight;
      backRef.current.style.height = `${frontHeight}px`;
    }
  };

  const setCardHeights = () => {
    if (frontRef3.current && backRef3.current) {
      const frontHeight3 = frontRef3.current.offsetHeight;
      const backHeight3 = frontRef3.current.offsetHeight;

      frontRef3.current.style.height = `${frontHeight3}px`;
      backRef3.current.style.height = `${backHeight3}px`;
    }
  };

  useEffect(() => {
    setBackHeight(frontRef3, backRef3);
    setCardHeights();
    const handleResize = () => {
      setBackHeight(frontRef3, backRef3);
      setCardHeights();
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsFlipped(false);
          if (typeof onAnyCardFlipped2 === "function") {
            onAnyCardFlipped2(false);
          }
        }
      });
    });

    if (frontRef3.current) observer.observe(frontRef3.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      if (frontRef3.current) observer.unobserve(frontRef3.current);
    };
  }, []);

  useEffect(() => {
    setBackHeight(frontRef3, backRef3);
    setCardHeights();
  }, [isFlipped]);

  const handleClickOutside = (event) => {
    if (
      frontRef3.current &&
      !frontRef3.current.contains(event.target) &&
      backRef3.current &&
      !backRef3.current.contains(event.target)
    ) {
      setIsFlipped(false);
      if (typeof onAnyCardFlipped2 === "function") {
        onAnyCardFlipped2(false);
      }
    }
  };

  return (
    <div className="other-content">
      <div className="relative w-full mt-[30px] " style={{ zIndex: isFlipped ? 1001 : 998 }}>
        <div
          className={`flip-card-inner ${
            isFlipped ? "flipped-bottom-to-top" : ""
          }`}
          style={{ zIndex: isFlipped[1] ? 1001 : 998 }}>
          <div
            className="flip-card-front bg-[#222222] max-tab:relative w-full  bg-[url(/paymentcomponent/bgmobi.jpg)] max-md:!h-[450px]  max-tab:bg-center max-tab:bg-cover h-[750px] max-tab:!h-[550px]    rounded-[40px] flex items-start justify-center gap-7 p-[80px] max-md:py-[40px] max-md:px-[30px] pb-0 overflow-hidden"
            ref={frontRef3}
          >
            <h3
              className="text-[80px] max-tab:text-[56px] max-md:text-[30px] max-md:text-start font-[700] leading-none max-md:leading-9 text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span className="text-[#3395C9]">Apple Pay Letter.</span>
              <br />
              <span>
                Easily Pay <br className="hidden max-md:block" /> Over time
              </span>
            </h3>
            <div className="flex items-center justify-end w-full px-7 absolute bottom-9 -right-2">
              <IoIosAddCircleOutline
                size={33}
                className="cursor-pointer"
                onClick={handleFlip}
              />
            </div>
          </div>
          <div
            className="flip-card-back flip-card-back-bottom-to-top bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center p-7"
            ref={backRef3}
          >
            <div className="text-start flex gap-5 items-center justify-center text-black px-3 w-full">
              <div className="w-[50%]">
                <h2 className="self-start text-[21px] max-tab:text-[16px] font-[700]">
                  Apple Pay Later
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] max-md:text-[14px] font-[600] mt-4">
                  With Apple Pay Later, you can split your purchases into
                  smaller payments with no interest or fees. Simply choose Apple
                  Pay and then tap the Pay Later tab when you&apos;re checking
                  out online or in apps on your iPhone or iPad. You&apos;ll find
                  out in moments if you&apos;re approved. And you manage
                  everything in Wallet, with built-in tools to help support
                  healthy financial habits. From last-minute school supplies to
                  long-overdue kitchenware upgrades, it&apos;s a great way to
                  spread out your spending.
                </p>
              </div>
              <div className="w-[50%] max-tab:flex max-tab:justify-end max-tab:pr-9">
                <img
                  src="/paymentcomponent/check.jpg"
                  alt="check"
                  className="-mb-36 max-tab:w-[270px] "
                />
              </div>
              <div className="absolute bottom-9 right-5">
                <IoMdClose
                  size={30}
                  className="cursor-pointer"
                  onClick={handleFlip}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
