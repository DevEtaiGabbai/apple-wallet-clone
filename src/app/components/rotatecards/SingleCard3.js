import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircleOutline, IoMdClose } from "react-icons/io";
import "../payment/rotate.css";

const SingleCard3 = ({ onAnyCardFlipped6 }) => {
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
          }`}
          style={{ zIndex: isFlipped[1] ? 1001 : 998 }}>
          <div
            className="flip-card-front bg-white w-full h-[750px] max-tab:!h-[520px] max-md:!h-[480px] max-tab:relative rounded-[40px] flex max-md:flex-col items-start justify-between gap-7 p-[80px] px-[80px] max-tab:pl-[40px] max-md:px-[30px] max-md:pt-[50px] overflow-hidden"
            ref={frontRef3}
          >
            <div className="self-center justify-self-center max-md:w-full">
              <h3
                className="text-[73px] max-tab:text-[56px] max-md:text-[30px] font-[700] self-center justify-self-center leading-none"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span className="text-[#FCAD00]">
                  Driver <br className="max-md:hidden"/> License
                </span>
                <br />
                <span className="text-[#FCAD00]">and state iD.</span>
                <br />
                  <span className="text-black">Now on Iphone.</span>
              </h3>
            </div>
            <div className="flex items-center justify-end w-1/2 max-md:w-full max-md:px-[35px]">
              <img
                src="/paymentcomponent/10.jpg"
                alt="img"
                className="w-[380px] h-[750px] max-tab:w-[270px] max-tab:h-[500px] rounded-[50px]"
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
            className="flip-card-back flip-card-back-bottom-to-top bg-white w-full rounded-3xl overflow-hidden flex  items-center justify-center p-14 max-tab:px-10"
            ref={backRef3}
          >
            <div className="text-start flex max-md:flex-col gap-5 items-center justify-center text-black px-3 max-md:px-0 w-full">
              <div className="w-[50%] max-md:w-full">
                <h2 className="self-start text-[21px] max-tab:text-[14px] max-md:text-[13px] font-[700]">
                  Driver`s License and State ID
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] max-md:text-[13px] font-[600] mt-4 max-md:mt-1">
                  Add your driver&apos;s license or state ID to Wallet, and with just
                  a tap of your iPhone or Apple Watch you can present your ID at
                  select | TSA checkpoints without handing over your device.&apos;
                  You can even tap to present your ID on iPhone at
                  age-restricted events and venues.&apos; The security of Face ID and
                  Touch ID means only you can show your ID. When apps need to
                  verify your age or identity, they see only the necessary data
                  — not your whole ID. You can review which identity details are
                  being requested and then choose whether to present that
                  information.
                </p>
              </div>
              <div className="w-[50%] max-tab:pl-[50px] max-md:hidden">
                <img
                  src="/paymentcomponent/89.jpg"
                  alt="check"
                  className="-mb-36 max-tab:hidden"
                />
                 <img
                  src="/paymentcomponent/tab.jpg"
                  alt="check"
                  className="-mb-36 hidden max-tab:block" 
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

export default SingleCard3;
