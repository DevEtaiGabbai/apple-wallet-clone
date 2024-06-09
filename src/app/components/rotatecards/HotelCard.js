"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import "../payment/rotate.css";

const HotelCard = ({ onAnyCardFlipped11 }) => {
  const [isFlipped, setIsFlipped] = useState([false, false]);

  const frontRef1 = useRef(null);
  const backRef1 = useRef(null);
  const frontRef2 = useRef(null);
  const backRef2 = useRef(null);

  const handleFlip = (index) => {
    setIsFlipped((prev) => {
      const newFlipped = [false, false];
      newFlipped[index] = !prev[index];
      if (typeof onAnyCardFlipped11 === "function") {
        onAnyCardFlipped11(newFlipped.some((flip) => flip));
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
          if (typeof onAnyCardFlipped11 === "function") {
            onAnyCardFlipped11(false);
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
      if (typeof onAnyCardFlipped11 === "function") {
        onAnyCardFlipped11(false);
      }
    }
  };

  return (
    <div className="other-content">
      <div className="w-full flex max-md:flex-col max-tab:gap-[30px] max-tab:items-center mt-[30px] justify-between">
        <div className="relative w-[48%] max-md:w-full" style={{ zIndex: isFlipped[0] ? 1001 : 998 }}>
          <div className={`flip-card-inner ${isFlipped[0] ? "flipped" : ""}`}>
            <div
              className="flip-card-front max-tab:!h-[500px] max-tab:relative bg-[#222222] w-full rounded-[40px] flex items-center justify-center flex-col gap-7 p-20 max-tab:px-[40px] max-tab:pt-[15px] pb-0 overflow-hidden"
              ref={frontRef1}
            >
              <h3
                className="text-[40px] max-tab:text-[35px] self-start justify-self-start font-[700] leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#F26D5F]">Hotel key.</span>
                <br />
                <span>A new level of</span>
                <br />
                <span>room service</span>
              </h3>

              <img
                src="/paymentcomponent/hotelcard.jpg"
                alt="Balance"
                className="max-xtab:hidden -mb-9"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <img
                src="/paymentcomponent/tav2.jpg"
                alt="Balance"
                className="hidden max-tab:block -mb-14"
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
              className="flip-card-back bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center p-7"
              ref={backRef1}
            >
              <div className="text-start flex flex-col items-center justify-center text-black px-3 max-tab:px-1 w-full">
                <h2 className="self-start text-[21px] max-tab:text-[14px] font-[700]">
                  Hotel Key
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                  Now at select hotels you can add your hotel key to Wallet
                  right after making a reservation. So you can skip the lobby
                  and head straight to your room. 15 You can also use your
                  iPhone or Apple Watch to access the pool, fitness club,
                  business center, and more. And your key can be updated in real
                  time if you change your reservation or extend your stay. If
                  your a repeat customer, a single key in Wallet can allow you
                  to check in and unlock your room for all upcoming stays at
                  hotels within the same brand.
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

        <div className="relative w-[48%] max-md:w-full" style={{ zIndex: isFlipped[1] ? 1001 : 998 }}>
          <div className={`flip-card-inner ${isFlipped[1] ? "flipped" : ""}`}>
            <div
              className="flip-card-front  bg-[#222222] w-full h-full rounded-[40px] flex items-center justify-center flex-col gap-7 p-20 max-tab:px-[40px] max-tab:pt-[15px] pb-0 overflow-hidden"
              ref={frontRef2}
            >
              <h3
                className="text-[40px] self-start justify-self-start max-tab:text-[35px] font-[700] leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#F26D5F]">Car key.</span>
                <br />
                <span>Leave the keys.</span>
                <br />
                <span>Take the wheels</span>
              </h3>
              <img
                src="/paymentcomponent/watch.jpg"
                alt="Balance"
                className="max-xtab:hidden -mb-9"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <img
                src="/paymentcomponent/employwatch.jpg"
                alt="Balance"
                className="hidden max-tab:block -mb-9"
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
              className="flip-card-back bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center p-7 px-14 max-tab:px-9"
              ref={backRef2}
            >
              <div className="text-start flex flex-col items-center justify-center text-black px-3 max-tab:px-0 w-full">
                <h2 className="self-start text-[21px] max-tab:text-[14px] font-[700]">
                  <span className="text-black">Car keys.</span>
                 
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                  Once your digital car key is stored in Wallet, you be able
                  to unlock and start your car, open the trunk - even preheat
                  the cabin - with just your iPhone or Apple Watch. 1 Sharing
                  keys with friends or family is easy, too. You can send keys
                  through messaging apps, customize controls for new drivers,
                  and share and revoke keys. Learn more about car keys in Wallet
                  ›
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
      {isFlipped.some(flip => flip) && <div className="dark-overlay"></div>}
    </div>
  );
};

export default HotelCard;