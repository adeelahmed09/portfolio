import Link from 'next/link'
import React from 'react'

function Nav() {
    //Classes 
    const buttonClasses = "hover:text-[#F9C02F] transition-colors translate-0.3"
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-16 py-7 border-b border-[#f9c02f14] bg-[#0a0a0ab3] backdrop-blur-[12px]">
        <h1 className='text-[#F9C02F] font-semibold text-[19px]'>
            Adeel Ahmed
        </h1>
        <ul className='flex gap-12 text-[#6B6B6B] items-center  font-extralight text-sm uppercase'>
            <li>
                <Link href={"#"} className={buttonClasses}>
                    Work
                </Link>
            </li>
            <li>
                <Link href={"#"} className={buttonClasses}>
                    About 
                </Link>
            </li>
            <li>
                <Link href={"#"} className={buttonClasses}>
                    Service
                </Link>
            </li>
            <li>
                <button className='px-7 text-black py-1.5 uppercase bg-[#F9C02F]'>
                    Hire Me
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
