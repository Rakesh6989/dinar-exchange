'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

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
  const itemsRef = useRef([])
  const cartRef = useRef(null)
  const [active, setActive] = useState('Home')
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const nav = navRef.current
    const items = itemsRef.current
    const cart = cartRef.current

    // Initial load animation
    const tl = gsap.timeline()
    
    tl.fromTo(nav, 
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(items,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      "-=0.3"
    )
    .fromTo(cart,
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
      "-=0.2"
    )

    // Scroll-based hide/show animation
    let lastScrollY = window.scrollY
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        if (isVisible) {
          gsap.to(nav, {
            y: -80,
            duration: 0.3,
            ease: 'power2.inOut'
          })
          setIsVisible(false)
        }
      } else {
        // Scrolling up - show navbar with animation
        if (!isVisible) {
          gsap.fromTo(nav,
            { y: -80 },
            { 
              y: 0, 
              duration: 0.5, 
              ease: 'power3.out',
              onComplete: () => {
                // Add a subtle bounce effect when navbar reappears
                gsap.fromTo(items,
                  { y: -10, opacity: 0.7 },
                  { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
                )
              }
            }
          )
          setIsVisible(true)
        }
      }
      
      lastScrollY = currentScrollY
    }

    // Intersection Observer for more precise visibility detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When navbar comes into view, add a subtle glow effect
            gsap.to(nav, {
              boxShadow: '0 4px 20px rgba(6, 50, 137, 0.3)',
              duration: 0.5
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (nav) observer.observe(nav)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isVisible])

  // Enhanced click animation for nav items
  const handleItemClick = (item, index) => {
    setActive(item)
    
    // Add click animation
    gsap.fromTo(itemsRef.current[index],
      { scale: 1 },
      { 
        scale: 1.1, 
        duration: 0.1, 
        yoyo: true, 
        repeat: 1,
        ease: 'power2.inOut'
      }
    )
  }

  // Cart hover animation
  const handleCartHover = () => {
    gsap.to(cartRef.current, {
      scale: 1.1,
      rotation: 10,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleCartLeave = () => {
    gsap.to(cartRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <nav
      ref={navRef}
      className="bg-[#063289] text-white w-full shadow-lg px-6 py-3 flex items-center justify-between sticky top-0 z-40 transition-all duration-300"
    >
      {/* Nav Links */}
      <div className="flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {navItems.map((item, index) => (
          <button
            key={item}
            ref={el => itemsRef.current[index] = el}
            onClick={() => handleItemClick(item, index)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 relative transform hover:scale-105 ${
              active === item
                ? 'bg-orange-500 text-white shadow-lg'
                : 'hover:text-orange-400 hover:bg-white/10'
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
      <div 
        ref={cartRef}
        className="relative group cursor-pointer transform transition-transform duration-300"
        onMouseEnter={handleCartHover}
        onMouseLeave={handleCartLeave}
      >
        <ShoppingCartIcon fontSize="medium" />
        <span className="absolute -top-2 -right-2 bg-white text-blue-900 text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-md animate-bounce">
          0
        </span>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
          View Cart
        </span>
      </div>
    </nav>
  )
}