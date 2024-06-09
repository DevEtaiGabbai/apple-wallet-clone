import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import "../payment/rotate.css";

const BoardingCard = ({ onAnyCardFlipped7 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef3 = useRef(null);
  const backRef3 = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      if (typeof onAnyCardFlipped7 === "function") {
        onAnyCardFlipped7(newFlipped);
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
          if (typeof onAnyCardFlipped7 === "function") {
            onAnyCardFlipped7(false);
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
      if (typeof onAnyCardFlipped7 === "function") {
        onAnyCardFlipped7(false);
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
            className="flip-card-front max-tab:relative bg-white w-full h-[750px] max-tab:!h-[510px] rounded-[40px] flex flex-row-reverse items-start justify-between gap-7 p-[80px] px-[100px] max-tab:px-[50px] max-md:px-[30px] overflow-hidden"
            ref={frontRef3}
          >
            <div className="self-center justify-self-center">
              <h3
                className="text-[73px] max-tab:text-[56px] max-md:text-[40px] font-[700] self-center justify-self-center leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#50BE3D]">Boarding Passes</span>
                <br />
                <span className="text-black">Earlier</span>
                <br />
                <span className="text-black">on the Fly.</span>
              </h3>
            </div>
            <div className="flex items-center justify-end  h-full">
              <img
                src="/paymentcomponent/jahaz.png"
                alt="img"
                className="w-[600px] h-[600px] max-tab:w-[390px] max-md:hidden  max-tab:h-[390px] object-cover rounded-[50px]"
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
                  Boarding Passes
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                  After you add your airline passes to Wallet, just show up at
                  your gate and present your screen to board - no need to unlock
                  your iPhone.` And receive timely flight information and
                  notifications along the way. You&apos;re cleared for a smooth
                  boarding.
                </p>
              </div>
              <div className="w-[50%] max-md:hidden">
                <img
                  src="/paymentcomponent/boarding.jpg"
                  alt="check"
                  className="-mb-36 bg-transparent "
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

export default BoardingCard;
