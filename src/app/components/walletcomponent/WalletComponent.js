'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
const WalletComponent = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS when component mounts
      }, []); // Empty dependency array ensures this runs only once when the component mounts
    
  return (
    <div className='w-full  py-[100px] max-md:py-[50px] max-tab:pb-[40px] px-[80px] max-tab:px-[70px] max-md:px-[20px]'>
        <div className='max-w-[1024px] w-full mx-auto'>
        <img src="/walletcomponent/wallet.png" alt="img" className='w-[112px] max-md:w-[80px] max-md:h-[25px] h-[31px] mx-auto' data-aos="fade-up" data-aos-duration="1500"/>
        <h1 className='text-[115px] text-center my-[30px] max-md:my-[20px] max-tab:my-[20px] leading-none font-[600] max-tab:text-[80px] max-md:text-[48px]' data-aos="fade-up" data-aos-duration="1500">Carry <br className='hidden max-md:block' /> one thing. <br /> Everything.</h1>
        <img src="/walletcomponent/mobilewallet.png" alt="img" className='mx-auto mt-[120px] max-tab:mt-[80px] max-md:mt-[40px] w-[520px] h-[1066px] max-tab:w-[360px] max-tab:h-[737px] max-md:w-[280px] max-md:h-[580px]' data-aos="fade-up" data-aos-duration="1500"/>
        <p className='text-[32px] max-tab:text-[28px] max-md:w-[280px] max-md:mx-auto  max-md:text-[21px]  font-[600] decoration-solid decoration-[#1D1D1F] tracking-[1px]  text-center max-md:text-start max-md:leading-[24px] mt-[80px]   max-md:mt-[50px] font-mycustomfont leading-[34px] opacity-[0.8]' data-aos="fade-up" data-aos-duration="1500">The Wallet app lives right on your iPhone. It’s where  you <br className='block max-tab:hidden' /> securely keep your credit and debit cards, driver’s license or <br className='block max-tab:hidden' /> state ID, transit cards, event tickets, keys, and more — all in <br className='block max-tab:hidden' /> one place. And it all works with iPhone or Apple Watch, so <br className='block max-tab:hidden' /> you can take less with you but always bring more.</p>
        </div>
    </div>
  )
}

export default WalletComponent