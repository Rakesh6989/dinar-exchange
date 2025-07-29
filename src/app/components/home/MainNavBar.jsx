'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const navItems = [
  'Home',
  'Buy Iraqi Dinar',
  'Buy Zimbabwe Dollar',
  'About Us',
  'Testimonials',
  'FAQs',
  'Blog',
  'Contact Us',
  'Login',
]

export default function MainNavBar() {
  const navRef = useRef(null)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
  }, [])

  return (
    <nav
      ref={navRef}
      className="bg-[#063289] text-white w-full shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-40"
    >
      {/* Nav Links */}
      <div className="flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 relative ${
              active === item
                ? 'bg-orange-500 text-white shadow-lg'
                : 'hover:text-orange-400'
            }`}
          >
            {item}
            {active === item && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-full animate-pulse"></span>
            )}
          </button>
        ))}
      </div>

      {/* Cart */}
      <div className="relative group cursor-pointer">
        <ShoppingCartIcon fontSize="medium" />
        <span className="absolute -top-2 -right-2 bg-white text-blue-900 text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
          0
        </span>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Cart
        </span>
      </div>
    </nav>
  )
}
