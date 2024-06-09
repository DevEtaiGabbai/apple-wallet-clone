"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineArrowLeft, AiOutlineRight } from "react-icons/ai"; // Import the right arrow icon

const MobileMenu = ({ isOpen, onClose }) => {
  const [currentMenu, setCurrentMenu] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);

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
    Mac: [
      {
        heading: "Explore Mac",
        items: [
          "Explore all Mac",
          "MacBook Air",
          "MacBook Pro",
          "IMac",
          "Mac Mini",
          "Mac Studio",
          "Mac Pro",
          "Compare Mac",
          "Mac Does That",
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
    iPad: [
      {
        heading: "Explore iPad",
        items: [
          "Explore all iPad",
          "iPad Pro",
          "iPad Air",
          "iPad",
          "iPad Mini",
          "Apple Pencil",
          "Keyboards",
          "Compare iPad",
          "Why iPad",
        ],
      },
      {
        heading: "Shop iPad",
        items: ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"],
      },
      {
        heading: "More From iPad",
        items: [
          "iPad Support",
          "AppleCare+ for iPad",
          "iPad OS 17",
          "Apps by Apple",
          "iCloud+",
          "Education",
        ],
      },
    ],
    iPhone: [
      {
        heading: "Explore iPhone",
        items: [
          "Explore all iPhone",
          "iPhone 15 Pro",
          "iPhone 15",
          "iPhone 14",
          "iPhone 13",
          "iPhone SE",
          "Keyboards",
          "Compare iPhone",
          "Switch From Android",
        ],
      },
      {
        heading: "Shop iPhone",
        items: [
          "Shop iPhone",
          "iPhone Accessories",
          "Apple Trade In",
          "Carrier Deals at Apple",
          "Financing",
        ],
      },
      {
        heading: "More From iPhone",
        items: [
          "iPhone Support",
          "AppleCare+ for iPhone",
          "OS 17",
          "Apps by Apple",
          "iPhone Privacy",
          "iCloud+",
          "Wallet, Pay, Card",
          "Siri",
        ],
      },
    ],
    Watch: [
      {
        heading: "Explore Watch",
        items: [
          "Explore all Apple Watch",
          "Apple Watch Series 9",
          "Apple Watch Ultra 2",
          "Apple Watch SE",
          "Apple Watch Nike",
          "Apple Watch Hermes",
          "Compare Watch",
          "Why Apple Watch",
        ],
      },
      {
        heading: "Shop Watch",
        items: [
          "Shop Apple Watch",
          "Apple Watch Studio",
          "Apple Trade In",
          "Carrier Deals at Apple",
          "Financing",
        ],
      },
      {
        heading: "More From Watch",
        items: [
          "Watch Support",
          "AppleCare+ for Watch",
          "Watch OS 17",
          "Apps by Apple",
          "iCloud+",
        ],
      },
    ],
    AirPods: [
      {
        heading: "Explore AirPods",
        items: [
          "Explore all AirPods",
          "AirPods Pro",
          "AirPods",
          "AirPods Max",
          "AirPods Accessories",
          "Compare AirPods",
          "Why AirPods",
        ],
      },
      {
        heading: "Shop AirPods",
        items: [
          "Shop AirPods",
          "AirPods Accessories",
          "Apple Trade In",
          "Financing",
        ],
      },
      {
        heading: "More From AirPods",
        items: [
          "AirPods Support",
          "AppleCare+ for AirPods",
          "Apps by Apple",
          "iCloud+",
        ],
      },
    ],
    "Tv & Home": [
      {
        heading: "Explore TV & Home",
        items: [
          "Explore all TV & Home",
          "Apple TV 4K",
          "HomePod",
          "HomePod mini",
          "Apple TV App",
          "Apple TV+",
          "Compare TV & Home",
          "Why TV & Home",
        ],
      },
      {
        heading: "Shop TV & Home",
        items: [
          "Shop TV & Home",
          "TV & Home Accessories",
          "Apple Trade In",
          "Financing",
        ],
      },
      {
        heading: "More From TV & Home",
        items: [
          "TV & Home Support",
          "AppleCare+ for TV & Home",
          "Apps by Apple",
          "iCloud+",
        ],
      },
    ],
    Entertainment: [
      {
        heading: "Entertainment",
        items: [
          "Explore Entertainment",
          "Apple One",
          "Apple Podcasts",
          "App Store",
        ],
      },
      {
        heading: "Support",
        items: [
          "Explore Entertainment",
          "Apple One",
          "Apple Podcasts",
          "App Store",
        ],
      },
    ],
    Accessories: [
      {
        heading: "Shop all Accessories",
        items: [
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "AirPods",
          "TV & Home",
        ],
      },
      {
        heading: "Explore Accessories",
        items: [
          "Made by Apple",
          "Beats by Dr. Dre",
          "AirTag",
        ],
      },
    ],
    Support: [
      {
        heading: "Explore Support",
        items: [
          "Explore all Support",
          "Apple Support",
          "Product Support",
          "Service & Repair",
          "Warranty & AppleCare",
          "Contact Support",
        ],
      },
      {
        heading: "Shop Support",
        items: [
          "Shop Support",
          "Support Accessories",
          "Apple Trade In",
          "Financing",
        ],
      },
      {
        heading: "More From Support",
        items: [
          "Support Support",
          "AppleCare+ for Support",
          "Apps by Apple",
          "iCloud+",
        ],
      },
    ],
  };

  const smallFontItems = [
    "Compare Mac",
    "Mac Does That",
    "Compare iPad",
    "Why iPad",
    "Compare iPhone",
    "Switch From Android",
    "Compare Watch",
    "Why Apple Watch",
    "Compare TV & Home",
    "Why TV & Home",
  ];

  return (
    <div
      className={`bg-[#161617] w-full pb-[150px] z-[1000] fixed top-0 left-0 transition-transform duration-300 ease-in-out ${
        isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
      style={{ height: '100vh', overflowY: 'auto' }} // Set fixed height and make it scrollable
    >
      <header className="w-full px-4 py-2 text-white flex justify-between items-center">
        <Link href="/">
          {/* <img src="/iconwhite.svg" alt="icons" className="w-8 h-8" /> */}
        </Link>
        <div className="flex items-center pt-5 space-x-4">
          {/* <BiSearch className="text-2xl" />
          <HiOutlineShoppingBag className="text-2xl" /> */}
          <button onClick={onClose}>
            <RxCross1 className="text-2xl" />
          </button>
        </div>
      </header>
      <div className="px-4 py-2">
        {/* <span className="text-xl">Menu</span> */}
      </div>
      <div className={`transition-transform h-fit duration-300 ${submenuVisible ? '-translate-x-full' : 'translate-x-0'}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="p-4 pl-[50px] flex justify-between items-center group" onClick={() => handleMenuClick(item)}>
            <span className="text-[28px] font-[600]">{item}</span>
            <AiOutlineRight className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> {/* Add right arrow icon */}
          </div>
        ))}
      </div>
      <div className={`absolute top-0 py-5 left-0 w-full bg-[#161617] transition-transform duration-300 ${submenuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        {currentMenu && submenuItems[currentMenu] && (
          <div className="w-full">
            <div className="flex items-center justify-between w-full pr-5">
              <button onClick={handleBackClick} className="p-4">
                <AiOutlineArrowLeft className="text-2xl text-white" />
              </button>
              <button onClick={onClose}>
                <RxCross1 className="text-2xl" />
              </button>
            </div>
            {submenuItems[currentMenu].map((column, index) => (
              <div key={index} className="p-10">
                {column.heading && (
                  <h3 className={`mb-5 ${column.heading === "Shop" || column.heading === "Entertainment" || column.heading.includes("Explore") ? (column.heading === "Explore Accessories" ? 'text-[17px] font-[400] text-[#86868B]' : 'text-[27px] font-bold') : 'text-xl'}`}>
                    {column.heading}
                  </h3>
                )}
                {column.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/${currentMenu.toLowerCase().replace(/ & /g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block mb-5 ${
                      smallFontItems.includes(item) || column.heading === "Explore Accessories"
                        ? "text-[17px] font-[600] text-white"
                        : column.heading === "Shop" || column.heading === "Entertainment" || column.heading.includes("Explore")
                        ? "text-[27px] font-semibold text-white"
                        : column.heading === "Shop all Accessories"
                        ? "text-[27px] font-semibold text-white"
                        : "text-[17px] font-[600] text-white"
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
  );
};

export default MobileMenu;