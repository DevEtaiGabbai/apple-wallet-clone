import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import "../payment/rotate.css";

const SportsCard = ({ onAnyCardFlipped10 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef3 = useRef(null);
  const backRef3 = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      if (typeof onAnyCardFlipped10 === "function") {
        onAnyCardFlipped10(newFlipped);
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
          if (typeof onAnyCardFlipped10 === "function") {
            onAnyCardFlipped10(false);
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
      if (typeof onAnyCardFlipped10 === "function") {
        onAnyCardFlipped10(false);
      }
    }
  };

  return (
    <div className="other-content">
      <div className="relative w-full mt-[30px]" style={{ zIndex: isFlipped ? 1001 : 998 }}>
        <div
          className={`flip-card-inner ${
            isFlipped ? "flipped-bottom-to-top flipped-card" : ""
          }`}  style={{ zIndex: isFlipped[1] ? 1001 : 998 }}
        >
          <div
            className="flip-card-front bg-white w-full h-[750px] max-tab:!h-[510px] max-md:!h-[580px] max-tab:relative rounded-[40px] flex  max-md:flex-col-reverse items-start justify-between gap-11 p-[80px] max-tab:px-[40px] max-md:px-[30px] px-[100px] overflow-hidden"
            ref={frontRef3}
          >
            <div className="self-center justify-self-center max-md:justify-self-start  max-tab:w-1/2 max-md:w-full">
              <h3
                className="text-[73px] max-tab:text-[56px] max-md:text-[30px] font-[700] self-center justify-self-center  leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#f26d5f]">
                Home key.
                </span>
                <br />
                <span className="text-black">Just show</span>
                <br />
                <span className="text-black">and go.</span>
              </h3>
            </div>
            <div className="flex items-center justify-end max-md:justify-center  max-tab:w-1/2 h-full max-tab:pr-9 max-md:pr-0 max-md:w-full">
              <img
                src="/paymentcomponent/homekey.jpg"
                alt="img"
                className="w-[300px] h-[500px] object-cover max-tab:w-[200px] max-md:mx-auto  max-tab:h-[320px] max-md:w-[150px]  max-md:h-[250px] rounded-[50px]"
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
            className="flip-card-back flip-card-back-bottom-to-top bg-white w-full rounded-3xl overflow-hidden flex max-md:flex-col items-center justify-center p-14 max-md:pt-[0px] max-tab:px-[40px] max-md:px-[25px]"
            ref={backRef3}
          >
            <div className="text-start flex max-md:flex-col gap-5 max-md:gap-20 items-center justify-center text-black px-3 w-full">
              <div className="w-[50%] max-md:w-full">
                <h2 className="self-start text-[21px] max-tab:text-[14px] font-[700]">
                  Loyalty and Rewards
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                  Easily manage all your credit and debit cards in one place.
                  Add, remove, or update your cards with just a few taps. Stay
                  on top of your finances and make informed decisions with ease.
                </p>
              </div>
              <div className="w-[50%] max-tab:pl-[30px] max-md:pl-0  max-md:w-full">
                <img
                  src="/paymentcomponent/endcard.jpg"
                  alt="check"
                  className="-mb-36 w-[400px] h-[700px] hidden max-tab:block max-md:-mb-40 max-md:mx-auto bg-transparent max-md:w-[200px] max-md:mx-auto"
                />
                  <img
                  src="/paymentcomponent/backhome.jpg"
                  alt="check"
                  className="-mb-36 w-[400px] h-[700px] max-tab:hidden max-md:-mb-40 max-md:mx-auto bg-transparent max-md:w-[200px] max-md:mx-auto"
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

export default SportsCard;
