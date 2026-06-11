"use client"
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

function Nav() {
    //Classes 
    const buttonClasses = "hover:text-[#F9C02F] transition-colors translate-0.3"
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
    const linesRef = useRef([])

    useEffect(() => {
        if (!menuRef.current) return
        if (open) {
            gsap.killTweensOf(menuRef.current)
            gsap.to(menuRef.current, { x: 0, autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
            gsap.to(linesRef.current[0], { rotate: 45, y: 8, duration: 0.25, background: '#F9C02F' })
            gsap.to(linesRef.current[1], { autoAlpha: 0, duration: 0.18 })
            gsap.to(linesRef.current[2], { rotate: -45, y: -8, duration: 0.25, background: '#F9C02F' })
        } else {
            gsap.killTweensOf(menuRef.current)
            gsap.to(menuRef.current, { x: 120, autoAlpha: 0, duration: 0.28, ease: 'power2.in' })
            gsap.to(linesRef.current[0], { rotate: 0, y: 0, duration: 0.2, background: '#D9D9D9' })
            gsap.to(linesRef.current[1], { autoAlpha: 1, duration: 0.15 })
            gsap.to(linesRef.current[2], { rotate: 0, y: 0, duration: 0.2, background: '#D9D9D9' })
        }
    }, [open])

    function handleLinkClick() {
        setOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-16 py-4 md:py-7 border-b border-[#f9c02f14] bg-[#0a0a0ab3] backdrop-blur-[12px]">
            <h1 className='text-[#F9C02F] font-semibold text-[19px]'>
                Adeel Ahmed
            </h1>
            <ul className='hidden md:flex gap-12 text-[#6B6B6B] items-center  font-extralight text-sm uppercase'>
                <li>
                    <Link href="#work" className={buttonClasses}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link href="#about" className={buttonClasses}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className='px-7 text-black py-1.5 uppercase bg-[#F9C02F] hover:bg-[#e0ac26] transition-colors font-medium rounded-sm'>
                        Hire Me
                    </Link>
                </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
                <button
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(v => !v)}
                    className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1"
                >
                    <span ref={el => linesRef.current[0] = el} className="block w-6 h-[2px] bg-[#D9D9D9] transition-all" />
                    <span ref={el => linesRef.current[1] = el} className="block w-6 h-[2px] bg-[#D9D9D9] transition-all" />
                    <span ref={el => linesRef.current[2] = el} className="block w-6 h-[2px] bg-[#D9D9D9] transition-all" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`md:hidden fixed top-[64px] right-4 w-[220px] bg-[#0a0a0ab3] backdrop-blur-md rounded-md p-4 z-40 shadow-lg ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
                style={{ transform: 'translateX(120px)', opacity: 0 }}
            >
                <ul className='flex flex-col gap-4 text-[#D9D9D9] font-extralight text-sm uppercase'>
                    <li>
                        <Link href="#work" onClick={handleLinkClick} className='block hover:text-[#F9C02F] transition-colors'>Work</Link>
                    </li>
                    <li>
                        <Link href="#about" onClick={handleLinkClick} className='block hover:text-[#F9C02F] transition-colors'>About</Link>
                    </li>
                    <li>
                        <Link href="#contact" onClick={handleLinkClick} className='block w-full text-center px-4 text-black py-2 uppercase bg-[#F9C02F] hover:bg-[#e0ac26] transition-colors font-medium rounded-sm'>Hire Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
