import { IoIosArrowForward } from "react-icons/io";
import React from "react";

const Finance = () => {
  const financeItems = [
    {
      id: 1,
      title: "Apple Pay",
      subtitle: "Pay the Apple way.",
      button: "Learn more",
      imgUrl: "/finance/apple_pay.jpg",
    },
    {
      id: 2,
      title: "Apple Card",
      subtitle: "The simplicity of Apple. In a credit card.",
      button: "Learn more",
      imgUrl: "/finance/apple_card.jpg",
    },
    {
      id: 3,
      title: "Apple Cash",
      subtitle: (
        <>
          <div>Send it.</div>
          <div>Spend it. Stash it.</div>
        </>
      ),
      button: "Learn more",
      imgUrl: "/finance/apple_cash.jpg",
    },
  ];

  const bgColors = ["bg-[#007AFF]", "bg-[#FFFFFF]", "bg-[#1E1E1F]"];
  const textColors = ["text-white", "text-black", "text-white"];

  return (
    <main className="pb-[100px] w-full bg-[#E8E8ED]">
      <div className="w-full max-w-[1024px] m-auto">
        <h1 className="text-center font-mycustomfont font-[600] text-[64px] text-[#1d1d1f] py-[50px] max-md:text-[48px] max-tab:text-[56px]">
          More for your finances.
        </h1>
        <div className="flex flex-col md:flex-row w-full gap-6 p-4 justify-center items-center font-mycustomfont">
          {financeItems.map((item, index) => (
            <div
              key={item.id}
              className={`w-[322px] min-h-[380px] flex flex-col justify-center items-center rounded-[23px] p-4 ${
                bgColors[index % bgColors.length]
              } ${textColors[index % textColors.length]}`}
            >
              <div className="text-[21px] font-[600]">{item.title}</div>
              <div className="text-[28px] font-[600] text-center">{item.subtitle}</div>
              {item.button && (
                <button
                  className={`mt-2 flex items-center px-4 py-2 rounded hover:underline ${
                    index === 1 ? "text-[#1d1d1f]" : "text-[#f5f5f7]"
                  }`}
                >
                  {item.button}
                  <IoIosArrowForward className={`ml-1 ${index === 1 ? "text-black" : "text-white"}`} />
                </button>
              )}
              <img src={item.imgUrl} alt={item.title} className="mt-2 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Finance;
