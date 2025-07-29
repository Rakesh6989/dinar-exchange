'use client'

import { useEffect, useRef, useState } from 'react'
// import { ExpandMoreIcon, AutoAwesomeIcon, TrendingUpIcon, SecurityIcon, GroupIcon } from 'lucide-react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // for AutoAwesomeIcon
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security'; // for SecurityIcon
import GroupIcon from '@mui/icons-material/Group'; // for GroupIcon

export default function HeroSection() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)
  const paraRef = useRef(null)
  const ctaRef = useRef(null)
  const featuresRef = useRef(null)
  const backgroundRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
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
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
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
            className={`text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 tracking-tight leading-tight transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
              }`}
            style={{ animationDelay: '0.1s' }}
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
          <AutoAwesomeIcon className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Subheading with Typewriter Effect */}
        <h2
          ref={subHeadingRef}
          className={`mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-orange-300 tracking-wide transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          style={{ animationDelay: '0.3s' }}
        >
          Your Premier Hub for Iraqi Dinar Transactions
        </h2>

        {/* Enhanced Description */}
        <p
          ref={paraRef}
          className={`mt-8 max-w-4xl mx-auto text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed font-light transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          style={{ animationDelay: '0.6s' }}
        >
          At Dinar Exchange Australia, we stand as your <span className="text-orange-400 font-semibold">reliable and trusted partner</span> in
          navigating the intricate world of the Iraqi Dinar. Whether you are an experienced investor in collectible currency items or a
          hobby currency collector seeking to comprehend Iraqi currency dynamics, our platform is tailored to your diverse needs.
        </p>

        {/* Call to Action Buttons */}
        <div
          ref={ctaRef}
          className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          style={{ animationDelay: '0.8s' }}
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
        <div
          ref={featuresRef}
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          style={{ animationDelay: '1.0s' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: feature.delay }}
            >
              <feature.icon className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-semibold text-sm">{feature.text}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ExpandMoreIcon className="w-6 h-6 text-orange-400" />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
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