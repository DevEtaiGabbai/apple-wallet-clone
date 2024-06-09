import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import "../payment/rotate.css";

const ExpressCard = ({ onAnyCardFlipped6 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef3 = useRef(null);
  const backRef3 = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      if (typeof onAnyCardFlipped6 === "function") {
        onAnyCardFlipped6(newFlipped);
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
          if (typeof onAnyCardFlipped6 === "function") {
            onAnyCardFlipped6(false);
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
      if (typeof onAnyCardFlipped6 === "function") {
        onAnyCardFlipped6(false);
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
            className="flip-card-front bg-[url(/paymentcomponent/waves.jpg)]  max-tab:bg-cover max-md:bg-local max-md:bg-opacity-40 max-md:bg-left w-full h-[750px] max-tab:!h-[510px] max-tab:relative rounded-[40px] flex items-start justify-between gap-7 p-[80px] max-tab:pl-[35px] px-[100px] overflow-hidden"
            ref={frontRef3}
          >
            <div className="self-center justify-self-center max-tab:justify-self-start max-tab:self-end">
              <h3
                className="text-[73px] max-tab:text-[56px] max-md:text-[40px] font-[700] self-center justify-self-center max-tab:justify-self-start max-tab:self-end leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#50be3d]">
                  Express <br /> Mode
                </span>
                <br />
                <span className="text-white">Tap. Ride</span>
                <br />
                <span className="text-white">Done.</span>
              </h3>
            </div>
            <div className="flex items-center justify-end w-1/2 h-full">
              <img
                src="/paymentcomponent/10.png"
                alt="img"
                className="max-tab:w-[270px] max-tab:hidden -mb-[200px] max-tab:h-[500px] rounded-[50px]"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
            <div className="flex items-center justify-end w-full px-7 absolute bottom-9 -right-2">
              <IoIosAddCircleOutline
                size={33}
                color="white"
                className="cursor-pointer"
                onClick={handleFlip}
              />
            </div>
          </div>
          <div
            className="flip-card-back flip-card-back-bottom-to-top bg-white w-full rounded-3xl overflow-hidden flex items-center justify-center p-14 max-md:px-3"
            ref={backRef3}
          >
            <div className="text-start flex gap-5 items-center justify-center text-black px-3 w-full">
              <div className="w-[50%] max-md:w-full">
                <h2 className="self-start text-[21px] max-tab:text-[14px] font-[700]">
                  Express Mode
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                  Set your card to Express Mode, then just tap and hop on to
                  ride the next train or bus.&quot; Breeze through the turnstiles by
                  holding your iPhone or Apple Watch to the reader. And add
                  value through Apple Pay without going to a vending machine or
                  kiosk. Happy trails and rails.
                </p>
              </div>
              <div className="w-[50%] max-md:hidden">
                <img
                  src="/paymentcomponent/watch2.jpg"
                  alt="check"
                  className="-mb-36 bg-transparent max-md:hidden"
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

export default ExpressCard;
