import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import "../payment/rotate.css";

const ThemeCard = ({ onAnyCardFlipped8 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef3 = useRef(null);
  const backRef3 = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      if (typeof onAnyCardFlipped8 === "function") {
        onAnyCardFlipped8(newFlipped);
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
          if (typeof onAnyCardFlipped8 === "function") {
            onAnyCardFlipped8(false);
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
      if (typeof onAnyCardFlipped8 === "function") {
        onAnyCardFlipped8(false);
      }
    }
  };

  return (
    <div className="other-content">
      <div className="relative w-full mt-[30px]" style={{ zIndex: isFlipped ? 1001 : 998 }}>
        <div
          className={`flip-card-inner ${
            isFlipped ? "flipped-bottom-to-top flipped-card" : ""
          }`} style={{ zIndex: isFlipped[1] ? 1001 : 998 }}
        >
          <div
            className="flip-card-front bg-white w-full h-[750px] max-tab:!h-[510px] max-md:!h-[480px] max-tab:relative rounded-[40px] flex max-md:flex-col items-start justify-between gap-7 max-md:gap-1 p-[80px] px-[100px] max-md:pt-[40px] max-md:px-[30px] max-tab:pl-[50px] overflow-hidden"
            ref={frontRef3}
          >
            <div className="self-center max-md:self-start max-md:justify-self-start justify-self-center">
              <h3
                className="text-[73px] max-tab:text-[56px] max-md:text-[35px] font-[700] self-center justify-self-center leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#50BE3D] ">Theme Parks</span>
                <br />
                <span className="text-black">Your Ticket</span>
                <br />
                <span className="text-black">to ride,</span>
                <br />

                <span className="text-black">enter,eat,</span>
                <br />

                <span className="text-black">and smile</span>
              </h3>
            </div>
            <div className="flex items-center justify-end w-1/2 max-md:w-full h-full">
              <img
                src="/paymentcomponent/themecard.jpg"
                alt="img"
                className="w-[600px] h-[600px] max-tab:w-[270px] -mb-[200px] max-md:-mb-[40px] max-md:w-[200px] max-md:mx-auto max-md:object-contain max-tab:h-[500px] rounded-[50px]"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
            <div className="flex items-center justify-end w-full px-7 absolute bottom-9 -right-2">
              <IoIosAddCircleOutline
                size={33}
                color="black"
                className="cursor-pointer"
                onClick={handleFlip}
              />
            </div>
          </div>
          <div
            className="flip-card-back flip-card-back-bottom-to-top bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center p-14 max-md:px-[30px]"
            ref={backRef3}
          >
            <div className="text-start flex gap-5 items-center justify-center text-black px-3 w-full">
              <div className="w-[50%] max-md:w-full">
                <h2 className="self-start text-[21px] max-tab:text-[14px] font-[700]">
                  Theme Parks
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                  Your trip to Walt Disney World just got even happier. Set up
                  your Disney MagicMobile pass in Wallet and get easy access to
                  features like entering the park with just your iPhone or Apple
                  Watch, redeeming your spot in a virtual queue, and connecting
                  to Disney PhotoPass. You can even charge purchases to your
                  Disney Resort hotel room. It&apos;s a small world at your
                  fingertips.
                </p>
              </div>
              <div className="w-[50%] max-md:hidden">
                <img
                  src="/paymentcomponent/themei.jpg"
                  alt="check"
                  className="-mb-36 w-[380px] bg-transparent max-tab:w-[250px]"
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
      {isFlipped && <div className="dark-overlay"></div>}
    </div>
  );
};

export default ThemeCard;
