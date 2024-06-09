"use client";
import React, { useEffect, useRef, useState } from 'react';
import { IoIosAddCircleOutline, IoMdClose } from 'react-icons/io';
import '../payment/rotate.css';

const SingleCard2 = ({ onAnyCardFlipped5 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef3 = useRef(null);
  const backRef3 = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      if (typeof onAnyCardFlipped5 === 'function') {
        onAnyCardFlipped5(newFlipped);
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
          if (typeof onAnyCardFlipped5 === 'function') {
            onAnyCardFlipped5(false);
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
      if (typeof onAnyCardFlipped5 === 'function') {
        onAnyCardFlipped5(false);
      }
    }
  };

  return (
    <div className='other-content'>
      <div className="relative w-full mt-[30px]" style={{ zIndex: isFlipped ? 1001 : 998 }}>
        <div className={`flip-card-inner ${isFlipped ? "flipped-bottom-to-top" : ""}`} style={{ zIndex: isFlipped[1] ? 1001 : 998 }}>
          <div
            className="flip-card-front bg-[#222222] w-full  max-tab:relative h-[750px] max-tab:!h-[550px] max-md:!h-[630px] rounded-[40px] flex max-md:flex-col max-md:items-center max-md:justify-center  items-start max-tab:items-center justify-center gap-7 max-tab:gap-9 p-[80px] px-[40px] max-md:px-0  overflow-hidden"
            ref={frontRef3}
          >
            <div className='one w-[50%] max-md:w-full flex flex-col max-md:gap-1 max-md:px-[30px]  items-center max-tab:items-end max-md:items-end justify-center'  data-aos="fade-up"
                data-aos-duration="1500">
                <div className='w-full max-md:gap-1 max-tab:w-[100px] max-md:w-[90px] flex max-md:justify-end  items-end justify-end'  data-aos="fade-up"
                data-aos-duration="1500">
                <img src="/paymentcomponent/1.png" alt="" /></div>
                <div className='w-full max-tab:w-[100px] max-md:w-[90px] flex max-md:gap-1 max-md:justify-end items-end justify-end'  data-aos="fade-up"
                data-aos-duration="1500">
                <img src="/paymentcomponent/1.png" alt="" />
                <img src="/paymentcomponent/1.png" alt="" /></div>
                <div className='w-full max-tab:w-[100px] max-md:w-[90px] flex  max-md:gap-1 max-md:justify-end items-end justify-end'  data-aos="fade-up"
                data-aos-duration="1500">
                <img src="/paymentcomponent/1.png" alt="" />
                <img src="/paymentcomponent/1.png" alt="" />
                <img src="/paymentcomponent/1.png" alt="" /></div>
                <div className='w-full max-tab:w-[100px] max-md:w-[90px] flex max-md:gap-1 max-md:justify-end items-end justify-end'  data-aos="fade-up"
                data-aos-duration="1500">
                <img src="/paymentcomponent/1.png" alt="" />
                <img src="/paymentcomponent/1.png" alt="" />
                <img src="/paymentcomponent/1.png" alt="" /></div>
              

         </div>
            <div className='two w-[50%] max-md:w-full flex max-md:justify-start max-md:px-[30px] items-end justify-center h-[90%]'>
            <h3
                className="text-[70px]  justify-self-start max-tab:text-[55px] max-md:text-[30px] font-[700] leading-none "
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                
                <span className="text-[#3395C9]">Loyalty.</span> <br />
                <span className="text-[#3395C9]">and rewards.</span>

                <br />
                <span>You reep</span>
                <br />
                <span>What you see</span>
              </h3>

            </div>
            <div className="flex items-center justify-end w-full px-7 absolute bottom-9 -right-2">
              <IoIosAddCircleOutline
                size={33}
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
                 Loyalty and Rewards
                </h2>
                <p className="text-[#6E6E73] text-[21px] max-tab:text-[14px] font-[600] mt-4">
                Add your favorite coffee shop, drugstore, or retail rewards cards to Wallet, and next time you’re at checkout, just tap and pay to receive and redeem rewards.7 Never lose another card, another point, or another free double latte again. It’s the perfect way to get all your points across.
                </p>
              </div>
              <div className="w-[50%] max-md:hidden"> 
                <img src="/paymentcomponent/89.jpg" alt="check" className="-mb-36 max-tab:-mb-40 max-tab:ml-9 max-tab:!w-[250px]" />
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

export default SingleCard2;