'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)
  const paraRef = useRef(null)
  const ctaRef = useRef(null)
  const featuresRef = useRef([])
  const backgroundRef = useRef(null)
  const particlesRef = useRef([])
  const sparkleRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    const heading = headingRef.current
    const subHeading = subHeadingRef.current
    const para = paraRef.current
    const cta = ctaRef.current
    const features = featuresRef.current
    const sparkle = sparkleRef.current
    const scrollIndicator = scrollIndicatorRef.current
    const particles = particlesRef.current

    // Initial load animation
    const tl = gsap.timeline()
    
    tl.fromTo(heading, 
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subHeading,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(para,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(cta,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.3'
    )
    .fromTo(features,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    )

    // Continuous sparkle rotation
    gsap.to(sparkle, {
      rotation: 360,
      duration: 3,
      ease: 'none',
      repeat: -1
    })

    // Scroll indicator bounce
    gsap.to(scrollIndicator, {
      y: 10,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })

    // Particles floating animation
    particles.forEach((particle, index) => {
      if (particle) {
        gsap.to(particle, {
          y: -20,
          rotation: 360,
          duration: 3 + Math.random() * 4,
          ease: 'none',
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 3
        })
      }
    })

    // Scroll-triggered animations that fire every time section enters viewport
    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      onEnter: () => {
        const tl = gsap.timeline()
        
        tl.fromTo(heading,
          { y: 50, opacity: 0.3, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(subHeading,
          { x: -40, opacity: 0.3 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(para,
          { y: 30, opacity: 0.3 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(cta.children,
          { scale: 0.7, opacity: 0.3, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.5'
        )
        .fromTo(features,
          { y: 40, opacity: 0.3, scale: 0.8, rotationY: 45 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            rotationY: 0,
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'back.out(1.7)' 
          },
          '-=0.6'
        )
      },
      onEnterBack: () => {
        const tl = gsap.timeline()
        
        tl.fromTo(heading,
          { y: -50, opacity: 0.3, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(subHeading,
          { x: 40, opacity: 0.3 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(para,
          { y: -30, opacity: 0.3 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(cta.children,
          { scale: 0.7, opacity: 0.3, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.5'
        )
        .fromTo(features,
          { y: -40, opacity: 0.3, scale: 0.8, rotationY: -45 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            rotationY: 0,
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'back.out(1.7)' 
          },
          '-=0.6'
        )
      },
      onLeave: () => {
        gsap.to([heading, subHeading, para, cta, ...features], {
          opacity: 0.3,
          scale: 0.95,
          duration: 0.3,
          ease: 'power2.inOut'
        })
      },
      onLeaveBack: () => {
        gsap.to([heading, subHeading, para, cta, ...features], {
          opacity: 0.3,
          scale: 0.95,
          duration: 0.3,
          ease: 'power2.inOut'
        })
      }
    })

    // Additional scroll trigger for individual feature cards hover-like effect
    features.forEach((feature, index) => {
      if (feature) {
        ScrollTrigger.create({
          trigger: feature,
          start: 'top 95%',
          end: 'bottom 5%',
          onEnter: () => {
            gsap.fromTo(feature,
              { rotationX: 45, transformOrigin: 'center bottom' },
              { rotationX: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out' }
            )
          },
          onEnterBack: () => {
            gsap.fromTo(feature,
              { rotationX: -45, transformOrigin: 'center top' },
              { rotationX: 0, duration: 0.6, delay: index * 0.1, ease: 'power2.out' }
            )
          }
        })
      }
    })

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const rect = container?.getBoundingClientRect()
      if (rect) {
        const newPosition = {
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        }
        setMousePosition(newPosition)

        // Parallax effect for heading
        gsap.to(heading, {
          x: newPosition.x * 20,
          y: newPosition.y * 20,
          duration: 1,
          ease: 'power2.out'
        })

        // Parallax for particles
        particles.forEach((particle, index) => {
          if (particle) {
            gsap.to(particle, {
              x: newPosition.x * (10 + index * 5),
              y: newPosition.y * (10 + index * 5),
              duration: 1.5,
              ease: 'power2.out'
            })
          }
        })
      }
    }

    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const features = [
    { icon: SecurityIcon, text: 'Secure Transactions', delay: '0.9s' },
    { icon: TrendingUpIcon, text: 'Market Insights', delay: '1.1s' },
    { icon: GroupIcon, text: 'Expert Support', delay: '1.3s' }
  ]

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center flex items-center justify-center"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(255, 165, 0, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        {/* Main Heading with Enhanced Animation */}
        <div className="relative mb-8">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 tracking-tight leading-tight"
          >
            Welcome to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Dinar Exchange
              </span>
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-orange-300">Australia</span>
          </h1>

          {/* Sparkle Effect */}
          <AutoAwesomeIcon 
            ref={sparkleRef}
            className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400" 
          />
        </div>

        {/* Subheading */}
        <h2
          ref={subHeadingRef}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-orange-300 tracking-wide"
        >
          Your Premier Hub for Iraqi Dinar Transactions
        </h2>

        {/* Enhanced Description */}
        <p
          ref={paraRef}
          className="mt-8 max-w-4xl mx-auto text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed font-light"
        >
          At Dinar Exchange Australia, we stand as your <span className="text-orange-400 font-semibold">reliable and trusted partner</span> in
          navigating the intricate world of the Iraqi Dinar. Whether you are an experienced investor in collectible currency items or a
          hobby currency collector seeking to comprehend Iraqi currency dynamics, our platform is tailored to your diverse needs.
        </p>

        {/* Call to Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            <span className="relative z-10">Start Trading</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <button className="group px-8 py-4 border-2 border-orange-400 text-orange-400 font-bold rounded-full transform transition-all duration-300 hover:bg-orange-400 hover:text-white hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <feature.icon className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-semibold text-sm">{feature.text}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ExpandMoreIcon className="w-6 h-6 text-orange-400" />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  )
}