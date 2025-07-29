'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'

gsap.registerPlugin(ScrollTrigger)

export default function TopNavbar() {
  const logoRef = useRef(null)

  useEffect(() => {
    const el = logoRef.current

    gsap.fromTo(
      el,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'restart none none reset', // ensures re-animation
        },
      }
    )
  }, [])

  return (
    <div className="bg-white shadow-md w-full py-3 px-6 flex flex-col sm:flex-row justify-between items-center relative z-10">
      {/* Logo */}
      <div
        ref={logoRef}
        className="flex items-center text-2xl font-extrabold text-blue-800 tracking-tight"
      >
        Dinar{' '}
        <span className="text-gray-400 font-extrabold -mx-1 italic mx-1">ex</span>
        <span className="text-blue-800">change</span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 sm:mt-0 text-sm text-black font-medium">
        <div className="flex items-center gap-2">
          <PhoneIphoneIcon className="!text-orange-500" fontSize="small" />
          <span>0417 460 236</span>
        </div>
        <div className="flex items-center gap-2">
          <LocalPhoneIcon className="!text-orange-500" fontSize="small" />
          <span>1300 856 881</span>
        </div>
        <div className="flex items-center gap-2">
          <EmailIcon className="!text-orange-500" fontSize="small" />
          <span>dinars@dinarexchange.com.au</span>
        </div>
      </div>

    


    </div>
  )
}
