'use client';
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MobileFooter = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      title: "Shop and Learn",
      items: [
        { name: "Store", link: "/store" },
        { name: "Mac", link: "/mac" },
        { name: "iPad", link: "/ipad" },
        { name: "iPhone", link: "/iphone" },
        { name: "Watch", link: "/watch" },
        { name: "Vision", link: "/vision" },
        { name: "AirPods", link: "/airpods" },
        { name: "TV & Home", link: "/tv-home" },
        { name: "AirTag", link: "/airtag" },
        { name: "Accessories", link: "/accessories" },
        { name: "Gift Cards", link: "/gift-cards" },
      ],
    },
    {
      title: "Apple Wallet",
      items: [
        { name: "Wallet", link: "/wallet" },
        { name: "Apple Card", link: "/apple-card" },
        { name: "Apple Pay", link: "/apple-pay" },
        { name: "Apple Cash", link: "/apple-cash" },
      ],
    },
    {
      title: "Account",
      items: [
        { name: "Manage Your Apple ID", link: "/manage-your-apple-id" },
        { name: "Apple Store Account", link: "/apple-store-account" },
        { name: "iCloud.com", link: "/icloud-com" },
      ],
    },
    {
      title: "Entertainment",
      items: [
        { name: "Apple One", link: "/apple-one" },
        { name: "Apple TV+", link: "/apple-tv-plus" },
        { name: "Apple Music", link: "/apple-music" },
        { name: "Apple Arcade", link: "/apple-arcade" },
        { name: "Apple Fitness+", link: "/apple-fitness-plus" },
        { name: "Apple News+", link: "/apple-news-plus" },
        { name: "Apple Podcasts", link: "/apple-podcasts" },
        { name: "Apple Books", link: "/apple-books" },
      ],
    },
    {
      title: "Apple Store",
      items: [
        { name: "Find a Store", link: "/find-a-store" },
        { name: "Genius Bar", link: "/genius-bar" },
        { name: "Today at Apple", link: "/today-at-apple" },
        { name: "Group Reservations", link: "/group-reservations" },
        { name: "Apple Camp", link: "/apple-camp" },
        { name: "Apple Store App", link: "/apple-store-app" },
        { name: "Certified Refurbished", link: "/certified-refurbished" },
        { name: "Apple Trade In", link: "/apple-trade-in" },
        { name: "Financing", link: "/financing" },
        { name: "Carrier Deals at Apple", link: "/carrier-deals-at-apple" },
        { name: "Order Status", link: "/order-status" },
        { name: "Shopping Help", link: "/shopping-help" },
      ],
    },
    {
      title: "For Business",
      items: [
        { name: "Apple and Business", link: "/apple-and-business" },
        { name: "Shop for Business", link: "/shop-for-business" },
      ],
    },
    {
      title: "For Education",
      items: [
        { name: "Apple and Education", link: "/apple-and-education" },
        { name: "Shop for K-12", link: "/shop-for-k-12" },
        { name: "Shop for College", link: "/shop-for-college" },
      ],
    },
    {
      title: "For Healthcare",
      items: [
        { name: "Apple in Healthcare", link: "/apple-in-healthcare" },
        { name: "Health on Apple Watch", link: "/health-on-apple-watch" },
        { name: "Health Records on iPhone", link: "/health-records-on-iphone" },
      ],
    },
    {
      title: "For Government",
      items: [
        { name: "Shop for Government", link: "/shop-for-government" },
        { name: "Shop for Veterans and Military", link: "/shop-for-veterans-and-military" },
      ],
    },
    {
      title: "Apple Values",
      items: [
        { name: "Accessibility", link: "/accessibility" },
        { name: "Education", link: "/education" },
        { name: "Environment", link: "/environment" },
        { name: "Inclusion and Diversity", link: "/inclusion-and-diversity" },
        { name: "Privacy", link: "/privacy" },
        { name: "Racial Equity and Justice", link: "/racial-equity-and-justice" },
        { name: "Supply Chain", link: "/supply-chain" },
      ],
    },
    {
      title: "About Apple",
      items: [
        { name: "Newsroom", link: "/newsroom" },
        { name: "Apple Leadership", link: "/apple-leadership" },
        { name: "Career Opportunities", link: "/career-opportunities" },
        { name: "Investors", link: "/investors" },
        { name: "Ethics & Compliance", link: "/ethics-compliance" },
        { name: "Events", link: "/events" },
        { name: "Contact Apple", link: "/contact-apple" },
      ],
    }
  ];

  useEffect(() => {
    const newHeights = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[sections[index].title] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [expandedSection]);

  return (
    <main className="w-full bg-[#F5F5F7]">
      <div className="w-full max-w-[1024px] m-auto px-4">
        <div className="flex items-center w-fit gap-1 py-4">
          <Link href="/">
            <img
              className="w-4 h-4 bg-cover bg-gray-200"
              src="/apple-black.svg"
              alt="icons"
            />
          </Link>
          <IoIosArrowForward color="rgba(0, 0, 0, 0.72)" />
          <div className="text-black-57 font-[400] text-[12px]">
            <h6>wallet</h6>
          </div>
        </div>
        <div className="w-full flex flex-col font-mycustomfont pb-8">
          {sections.map((section, index) => (
            <div key={index} className="w-full flex flex-col mt-2 border-b border-gray-300">
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggleSection(section.title)}
              >
                <h5 className="font-[400] text-[12px] text-black-57">{section.title}</h5>
                {expandedSection === section.title ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  height: expandedSection === section.title ? `${heights[section.title]}px` : '0px'
                }}
                ref={el => contentRefs.current[index] = el}
              >
                {section.items.map((item, idx) => (
                  <Link key={idx} href={item.link}>
                    <h6
                      className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer py-1"
                    >
                      {item.name}
                    </h6>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="font-mycustomfont border-b border-gray-300">
          <p className="py-2 font-[400] text-[12px] text-black-56">
            More ways to shop:
            <a
              href="https://support.apple.com/en-us/111117"
              className="text-blue-500 underline"
            >
              Find an Apple Store
            </a>
            or
            <a
              href="https://support.apple.com/en-us/111117"
              className="text-blue-500 underline"
            >
              other retailer
            </a>
            near you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="font-mycustomfont text-black-56 text-[12px] font-[400] py-3">
          <div className="flex flex-col tab:flex-row justify-between">
            <div className="flex tab:hidden">
              <div className="py-4">
                <h6>United States</h6>
              </div>
            </div>
            <div>
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            </div>
            <div>
              <p className="hover:underline cursor-pointer">
                Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
              </p>
            </div>
            <div className="hidden tab:flex">
              <div className="px-4">
                <h6 className="hover:underline cursor-pointer">United States</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileFooter;
