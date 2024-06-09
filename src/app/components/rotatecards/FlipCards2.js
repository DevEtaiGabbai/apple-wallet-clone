"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import "../payment/rotate.css";

const FlipCards2 = ({ onAnyCardFlipped3 }) => {
  const [isFlipped, setIsFlipped] = useState([false, false]);

  const frontRef1 = useRef(null);
  const backRef1 = useRef(null);
  const frontRef2 = useRef(null);
  const backRef2 = useRef(null);

  const handleFlip = (index) => {
    setIsFlipped((prev) => {
      const newFlipped = [false, false];
      newFlipped[index] = !prev[index];
      if (typeof onAnyCardFlipped3 === "function") {
        onAnyCardFlipped3(newFlipped.some((flip) => flip));
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
    if (
      frontRef1.current &&
      backRef1.current &&
      frontRef2.current &&
      backRef2.current
    ) {
      const frontHeight1 = frontRef1.current.offsetHeight;
      const backHeight1 = backRef1.current.offsetHeight;

      frontRef2.current.style.height = `${frontHeight1}px`;
      backRef2.current.style.height = `${backHeight1}px`;
    }
  };

  useEffect(() => {
    setBackHeight(frontRef1, backRef1);
    setBackHeight(frontRef2, backRef2);
    setCardHeights();
    const handleResize = () => {
      setBackHeight(frontRef1, backRef1);
      setBackHeight(frontRef2, backRef2);
      setCardHeights();
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsFlipped([false, false]);
          if (typeof onAnyCardFlipped3 === "function") {
            onAnyCardFlipped3(false);
          }
        }
      });
    });

    if (frontRef1.current) observer.observe(frontRef1.current);
    if (frontRef2.current) observer.observe(frontRef2.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      if (frontRef1.current) observer.unobserve(frontRef1.current);
      if (frontRef2.current) observer.unobserve(frontRef2.current);
    };
  }, []);

  useEffect(() => {
    setBackHeight(frontRef1, backRef1);
    setBackHeight(frontRef2, backRef2);
    setCardHeights();
  }, [isFlipped]);

  const handleClickOutside = (event) => {
    if (
      frontRef1.current &&
      !frontRef1.current.contains(event.target) &&
      backRef1.current &&
      !backRef1.current.contains(event.target) &&
      frontRef2.current &&
      !frontRef2.current.contains(event.target) &&
      backRef2.current &&
      !backRef2.current.contains(event.target)
    ) {
      setIsFlipped([false, false]);
      if (typeof onAnyCardFlipped3 === "function") {
        onAnyCardFlipped3(false);
      }
    }
  };

  return (
    <div className="other-content">
      <div className="w-full flex max-md:flex-col  max-tab:gap-[30px] max-tab:items-center mt-[30px] justify-between">
        <div
          className="relative w-[48%] max-md:w-full"
          style={{ zIndex: isFlipped[0] ? 1001 : 998 }}
        >
          <div className={`flip-card-inner ${isFlipped[0] ? "flipped" : ""}`}>
            <div
              className="flip-card-front pt-[100px] bg-[#222222] max-md:h-[450px] max-md:relative w-full rounded-[40px] flex items-center max-md:justify-between max-md:pt-[50px]  justify-center flex-col gap-7  p-7 px-[80px]  max-tab:px-[50px] max-tab:items-start pb-0 overflow-hidden max-tab:h-[500px]"
              ref={frontRef1}
            >
              <h3
                className="text-[40px] self-start  max-md:self-start max-md:justify-self-start  max-tab:text-[30px] font-[700] leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#3395C9]">Apple Cash.</span>
                <br />
                <span>The Bucks</span>
                <br />
                <span>Start here</span>
              </h3>

              <img
                src="/paymentcomponent/balance.jpg"
                alt="Balance"
                className="max-xtab:hidden -mb-9 max-tab:self-center max-tab:justify-self-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <img
                src="/paymentcomponent/balance2.jpg"
                alt="Balance"
                className="hidden max-xtab:block -mb-9 max-md:-mb-5  max-tab:self-center max-tab:justify-self-center max-md:w-[200px]"
                data-aos="fade-up"
                data-aos-duration="1500"
              />

              <div className="flex items-center justify-end w-full px-7 absolute bottom-9 -right-2">
                <IoIosAddCircleOutline
                  size={33}
                  className="cursor-pointer"
                  onClick={() => handleFlip(0)}
                />
              </div>
            </div>
            <div
              className="flip-card-back bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center px-[50px]"
              ref={backRef1}
            >
              <div className="text-start flex flex-col items-center justify-center text-black px-3 max-md:py-[50px] w-full">
                <h2 className="self-start text-[21px] max-tab:text-[16px] font-[700]">
                  Apple Cash
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[13px] font-[600] mt-4">
                  Apple Cash is a digital card that lives right in Wallet,
                  making it easy to send and receive money in Messages or
                  Wallet.* Your Apple Cash can be spent in stores, online, and
                  in apps with Apple Pay. You can send recurring payments to
                  other people for things like rent, internet, or groceries -
                  and set up auto reload to top up your balance whenever you run
                  low. You can also share funds with your kids on their own
                  Apple Cash card, giving them the perfect amount of financial
                  freedom — with built-in protections for your peace of mind.
                </p>
                <div className="absolute bottom-9 right-5">
                  <IoMdClose
                    size={30}
                    className="cursor-pointer"
                    onClick={() => handleFlip(0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative w-[48%] max-md:w-full"
          style={{ zIndex: isFlipped[1] ? 1001 : 998 }}
        >
          <div className={`flip-card-inner ${isFlipped[1] ? "flipped" : ""}`}>
            <div
              className="flip-card-front bg-white w-full rounded-[40px] flex items-center justify-center flex-col gap-7 p-7 pb-0 overflow-hidden max-tab:h-[500px]"
              ref={frontRef2}
            >
              <h3
                className="text-[40px]  max-tab:text-[30px] font-[700] leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <br />
                <span className="text-[#3395C9]">Apple Card.</span>
                <br />
                <span className="text-black">A different kind </span>
                <span className="text-black">of credit card.</span>
              </h3>
              <img
                src="/paymentcomponent/img6.jpg"
                alt="Balance"
                className="max-xtab:hidden -mb-9"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <img
                src="/paymentcomponent/applecard.jpg"
                alt="Balance"
                className="hidden max-xtab:block -mb-9 max-tab:self-center max-tab:justify-self-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              />

              <div className="flex items-center justify-end w-full px-7 absolute bottom-9 -right-2">
                <IoMdAdd
                  size={30}
                  color="white"
                  className="cursor-pointer bg-black rounded-[50%]"
                  onClick={() => handleFlip(1)}
                />
              </div>
            </div>
            <div
              className="flip-card-back bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center p-7 px-14 max-tab:px-[35px]"
              ref={backRef2}
            >
              <div className="text-start flex flex-col items-center justify-center text-black px-3 w-full">
                <h2 className="self-start text-[21px] max-tab:text-[16px] font-[700]">
                  Apple Pay
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[16px] font-[600] mt-4">
                  Apple Pay is the easy, secure way to pay in stores or online.
                  Pay for a ride, a pizza, or even a new sofa — with just a
                  touch or a glance. And checking out in stores is safer than
                  using physical cards since you don&apos;t have to touch any
                  buttons or exchange cash. It&apos;s no work, all pay.
                </p>
                <Link className="self-start mt-3 text-blue-700" href="/">
                  Learn more about Apple Pay →
                </Link>

                <div className="absolute bottom-9 right-5">
                  <IoMdClose
                    size={30}
                    className="cursor-pointer"
                    onClick={() => handleFlip(1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards2;
