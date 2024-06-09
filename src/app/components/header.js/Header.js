"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu"; // Adjust the import path as needed
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const headerRef = useRef(null);
  const submenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setSubmenuVisible(false);
  };

  useEffect(() => {
    if (submenuVisible && submenuRef.current) {
      setSubmenuHeight(submenuRef.current.scrollHeight);
    } else {
      setSubmenuHeight(0);
    }
  }, [submenuVisible, activeMenu]);

  const getColumnCount = (menu) => {
    if (menu === "Accessories" || menu === "Entertainment") {
      return "grid-cols-2";
    }
    return "grid-cols-3";
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
          "IPad",
          "IPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "Accessories",
        ],
      },
      {
        heading: "Quick Links",
        items: ["Find a Store", "Order Status", "Apple Trade in", "Financing"],
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
        items: ["Find a Store", "Order Status", "Apple Trade in", "Financing"],
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
        items: ["Shop iPad", "iPad Accessories", "Apple Trade in", "Financing"],
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
          "Apple Trade in",
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
          "Wallet,Pay,Card",
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
          "Apple Trade in",
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
          "Wallet,Pay,Card",
          "Siri",
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
          "Apple Trade in",
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
          "Apple Trade in",
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
          "App Sore",
        ],
      },
      {
        heading: "Support",
        items: [
          "Explore Entertainment",
          "Apple One",
          "Apple Podcasts",
          "App Sore",
        ],
      },
    ],
    Accessories: [
      {
        heading: "Shop Accessories",
        items: [
          "Accessories Option 1",
          "Accessories Option 2",
          "Accessories Option 1",
          "Accessories Option 2",
          "Accessories Option 1",
          "Accessories Option 2",
        ],
      },
      {
        heading: "Explore Accessories",
        items: [
          "Accessories Option 1",
          "Accessories Option 2",
          "Accessories Option 1",
          "Accessories Option 2",
          "Accessories Option 1",
          "Accessories Option 2",
        ],
      },
    ],
    Support: [
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
          "Apple Trade in",
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
    <>
      <header
        ref={headerRef}
        className="bg-[#161617] w-full relative px-20 max-tab:px-10 max-md:px-[15px]"
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto flex lg:gap-5 font-thin items-center max-tab:justify-between text-white max-w-[1024px] text-sm ">
          <div className="flex items-center w-fit">
            <Link href="/">
              <img src="/iconwhite.svg" alt="icons" />
            </Link>
          </div>
          <div className="flex items-center justify-between w-[90%]  max-tab:hidden max-md:hidden">
            {menuItems.map((item, index) => (
              <div
                key={index}
                id={`menu-${index}`}
                className="relative p-1.5 text-nowrap max-tab:hidden"
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <Link href={`/${item.toLowerCase().replace(/ & /g, "-")}`}>
                  {item}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-4 max-tab:gap-3 items-center w-[10%] max-tab:w-fit">
            <Link className="p-1.5" href="/">
              <BiSearch className="text-base max-md:text-[20px] max-tab:text-lg" />
            </Link>
            <Link className="p-1.5" href="/">
              <HiOutlineShoppingBag className="text-base max-md:text-[20px] max-tab:text-lg" />
            </Link>
            <button
              className="p-1.5 hidden max-md:text-[20px] max-tab:block relative z-50"
              onClick={handleMobileMenuToggle}
            >
              <div
                className={`icon-container ${
                  isMobileMenuOpen ? "rotate-45" : ""
                }`}
              >
                {isMobileMenuOpen ? (
                  <RxCross1 className="text-base max-tab:text-lg" />
                ) : (
                  <HiBars3 className="text-base max-tab:text-lg" />
                )}
              </div>
            </button>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={handleMobileMenuToggle}
            />
          </div>
        </div>
        <div
          ref={submenuRef}
          className="absolute w-full top-[75%] left-0 overflow-hidden bg-[#161617] text-white z-50 transition-all duration-500 ease-in-out "
          style={{
            height: submenuVisible ? `${submenuHeight}px` : "0",
            marginTop: submenuVisible ? "10px" : "0", // Adjust margin-top as needed
          }}
        >
          <div className="container mx-auto max-w-[1024px] px-0 max-tab:px-10 max-md:px-0 pb-11 pt-6">
            <div
              className={`grid ${getColumnCount(
                activeMenu
              )} gap-1 py-4 z-50 max-w-fit`}
            >
              {activeMenu &&
                submenuItems[activeMenu] &&
                submenuItems[activeMenu].map((column, index) => (
                  <div key={index} className="flex flex-col">
                    {column.heading && (
                      <h3 className="text-gray-400 text-[12px] mb-2 px-4">
                        {column.heading}
                      </h3>
                    )}
                    {column.items &&
                      column.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={`/${activeMenu
                            .toLowerCase()
                            .replace(/ & /g, "-")}/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className={`block px-4 py-[2px] text-nowrap ${
                            index === 0 && !smallFontItems.includes(item)
                              ? "text-[23px] font-[600]"
                              : "text-[12px]"
                          } ${smallFontItems.includes(item) ? "" : ""}`}
                        >
                          {item}
                        </Link>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </header>
      <div className="bg-[#161617] leading-none max-h-fit w-full  border-b-[0.5px] border-solid border-[grey] border-opacity-[0.4] px-[88px] max-tab:px-10 max-md:px-[24px]">
        <div className="max-w-[1024px] mx-auto ">
          <Link className="px-1.5 text-[19px] font-[600] text-white" href="/">
            <h1>Wallet</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
