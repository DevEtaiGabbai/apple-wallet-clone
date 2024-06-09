"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MobileHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
    setSubmenuVisible(true);
  };

  const handleBackClick = () => {
    setSubmenuVisible(false);
    setCurrentMenu(null);
  };

  const menuItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Tv & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  const submenuItems = {
    Store: [
      {
        heading: "Shop",
        items: [
          "Shop the Latest",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "Accessories",
        ],
      },
      {
        heading: "Quick Links",
        items: ["Find a Store", "Order Status", "Apple Trade In", "Financing"],
      },
      {
        heading: "Shop Special Stores",
        items: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veterans and Military",
          "Government",
        ],
      },
    ],
    // Add other menu item submenus here...
  };

  return (
    <>
      <header className="bg-[#161617] w-full px-4 py-2 text-white flex justify-between items-center">
        <Link href="/">
          <img src="/iconwhite.svg" alt="icons" className="w-8 h-8" />
        </Link>
        <div className="flex items-center space-x-4">
          <BiSearch className="text-2xl" />
          <HiOutlineShoppingBag className="text-2xl" />
          <button onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <RxCross1 className="text-2xl" /> : <HiBars3 className="text-2xl" />}
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="bg-[#161617] w-full text-white fixed top-0 left-0 h-full z-50 overflow-y-auto transition-all">
          <div className="px-4 py-2 flex justify-between items-center">
            {submenuVisible ? (
              <button onClick={handleBackClick}>
                <AiOutlineArrowLeft className="text-2xl" />
              </button>
            ) : (
              <span className="text-xl">Menu</span>
            )}
            <button onClick={handleMobileMenuToggle}>
              <RxCross1 className="text-2xl" />
            </button>
          </div>
          <div className={`transition-transform duration-300 ${submenuVisible ? '-translate-x-full' : 'translate-x-0'}`}>
            {menuItems.map((item, index) => (
              <div key={index} className="p-4" onClick={() => handleMenuClick(item)}>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className={`transition-transform duration-300 ${submenuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            {currentMenu && submenuItems[currentMenu] && (
              <div>
                {submenuItems[currentMenu].map((column, index) => (
                  <div key={index} className="p-4">
                    {column.heading && (
                      <h3 className={`mb-2 ${column.heading === "Shop" || column.heading === "Explore" ? 'text-[27px] font-bold' : 'text-xl'}`}>
                        {column.heading}
                      </h3>
                    )}
                    {column.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`/${currentMenu.toLowerCase().replace(/ & /g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block mb-1 ${
                          column.heading === "Shop" || column.heading === "Explore"
                            ? "text-[27px] font-semibold text-white"
                            : "text-[17px] font-normal text-gray-400"
                        }`}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
