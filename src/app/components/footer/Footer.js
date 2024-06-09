import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <main className="w-full bg-[#F5F5F7]">
      <div className="w-full bg-[#F5F5F7] max-md:hidden">
      <div className="w-full max-w-[1024px] m-auto px-4 ">
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
        <div className="w-full flex flex-col md:flex-row font-mycustomfont pb-8">
          <div className="w-full md:w-[20%] gap-1 flex flex-col">
            <h5 className="font-[600] text-[12px] text-black-57">Shop and Learn</h5>
            {[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "Vision",
              "AirPods",
              "TV & Home",
              "AirTag",
              "Accessories",
              "Gift Cards",
            ].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
            <h5 className="font-[600] text-[12px] text-black-57 pt-3">Apple Wallet</h5>
            {["Wallet", "Apple Card", "Apple Pay", "Apple Cash"].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
          </div>
          <div className="w-full md:w-[20%] gap-1 flex flex-col mt-4 md:mt-0">
            <h5 className="font-[600] text-[12px] text-black-57">Account</h5>
            {["Manage Your Apple ID", "Apple Store Account", "iCloud.com"].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
            <h5 className="font-[600] text-[12px] text-black-57 pt-3">Entertainment</h5>
            {[
              "Apple One",
              "Apple TV+",
              "Apple Music",
              "Apple Arcade",
              "Apple Fitness+",
              "Apple News+",
              "Apple Podcasts",
              "Apple Books",
            ].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
          </div>
          <div className="w-full md:w-[20%] gap-1 flex flex-col mt-4 md:mt-0">
            <h5 className="font-[600] text-[12px] text-black-57">Apple Store</h5>
            {[
              "Find a Store",
              "Genius Bar",
              "Today at Apple",
              "Group Reservations",
              "Apple Camp",
              "Apple Store App",
              "Certified Refurbished",
              "Apple Trade In",
              "Financing",
              "Carrier Deals at Apple",
              "Order Status",
              "Shopping Help",
            ].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
          </div>
          <div className="w-full md:w-[20%] gap-1 flex flex-col mt-4 md:mt-0">
            <h5 className="font-[600] text-[12px] text-black-57">For Business</h5>
            {["Apple and Business", "Shop for Business"].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
            <h5 className="font-[600] text-[12px] text-black-57 pt-3">For Education</h5>
            {["Apple and Education", "Shop for K-12", "Shop for College"].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
            <h5 className="font-[600] text-[12px] text-black-57 pt-3">For Healthcare</h5>
            {["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"].map(
              (item, index) => (
                <h6
                  key={index}
                  className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
                >
                  {item}
                </h6>
              )
            )}
            <h5 className="font-[600] text-[12px] text-black-57 pt-3">For Government</h5>
            {["Shop for Government", "Shop for Veterans and Military"].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
          </div>
          <div className="w-full md:w-[20%] gap-1 flex flex-col mt-4 md:mt-0">
            <h5 className="font-[600] text-[12px] text-black-57">Apple Values</h5>
            {[
              "Accessibility",
              "Education",
              "Environment",
              "Inclusion and Diversity",
              "Privacy",
              "Racial Equity and Justice",
              "Supply Chain",
            ].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
            <h5 className="font-[600] text-[12px] text-black-57 pt-3">About Apple</h5>
            {[
              "Newsroom",
              "Apple Leadership",
              "Career Opportunities",
              "Investors",
              "Ethics & Compliance",
              "Events",
              "Contact Apple",
            ].map((item, index) => (
              <h6
                key={index}
                className="font-[400] text-[12px] text-black-56 hover:underline cursor-pointer"
              >
                {item}
              </h6>
            ))}
          </div>
        </div>
        <div className="font-mycustomfont tab:border-b border-[black-56] border-solid">
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

        <div className="font-mycustomfont text-black-56 text-[12px] font-[400] tab:py-3">
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
      </div>
      <div className="hidden max-md:block">
        <MobileFooter/>
      </div>
    </main>
  );
};

export default Footer;
