import Link from 'next/link'
import React from 'react'

const AppleCash = () => {
  return (
    <div className='w-full min-h-[50px] py-[15px] text-center  flex items-center justify-center bg-black text-white px-20 max-tab:px-10 max-md:px-[20px]'>
        <p className='text-[14px]'>Now send and receive money with <br className='hidden max-tab:block'/> Apple Cash right in Wallet. <Link className='text-[#2997FF]' href="/">Learn more →</Link></p> 
    </div>
  )
}

export default AppleCash