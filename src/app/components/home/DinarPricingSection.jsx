'use client'

import { useState, useEffect } from 'react'
// import { ShoppingCart, Shield, Star, TrendingUp, Phone, MessageCircle, CheckCircle, Zap, Award, Lock } from 'lucide-react'





import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LockIcon from '@mui/icons-material/Lock';


export default function DinarPricingSection() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activePromo, setActivePromo] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Rotating promotional messages
    const promoInterval = setInterval(() => {
      setActivePromo(prev => (prev + 1) % 3)
    }, 3000)

    return () => clearInterval(promoInterval)
  }, [])

  const pricingData = [
    { amount: '25,000 IQD', price: '$186', popular: false, savings: null },
    { amount: '50,000 IQD', price: '$281', popular: false, savings: '$15' },
    { amount: '75,000 IQD', price: '$325', popular: false, savings: '$35' },
    { amount: '100,000 IQD', price: '$381', popular: true, savings: '$50' },
    { amount: '200,000 IQD', price: '$656', popular: false, savings: '$125' },
    { amount: '500,000 IQD', price: '$1,875', popular: false, savings: '$350' },
    { amount: '1,000,000 IQD', price: '$2,800', popular: false, savings: '$750' }
  ]

  const promoMessages = [
    { icon: FlashOnIcon, text: 'FLASH SALE: 15% OFF on orders above $500!', color: 'from-red-500 to-orange-500' },
    { icon: EmojiEventsIcon, text: 'BEST RATES GUARANTEED - Beat any competitor!', color: 'from-blue-500 to-purple-500' },
    { icon: TrendingUpIcon, text: 'LIVE RATES: Updated every 30 minutes!', color: 'from-green-500 to-teal-500' }
  ];


  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 tracking-tight">
              Buy Iraqi Dinars
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg blur-xl opacity-20 animate-pulse" />
          </div>

          {/* Rotating Promo Banner */}
          <div className="relative h-16 mb-8 overflow-hidden rounded-2xl">
            {promoMessages.map((promo, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${promo.color} transform transition-all duration-700 ${activePromo === index ? 'translate-y-0 opacity-100' : index < activePromo ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'
                  }`}
              >
                <promo.icon className="w-6 h-6 text-white mr-3 animate-bounce" />
                <span className="text-white font-bold text-lg">{promo.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${item.popular
                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400 shadow-2xl shadow-yellow-500/30'
                : 'bg-white/10 border-white/20 hover:border-blue-400/50'
                } backdrop-blur-xl`}>

                {/* Savings Badge */}
                {item.savings && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    SAVE {item.savings}
                  </div>
                )}

                {/* Amount */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.amount}</h3>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {item.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Authentic Currency
                  </div>
                  <div className="flex items-center">
                    <SecurityIcon className="w-4 h-4 text-blue-400 mr-2" />
                    100% Genuine
                  </div>
                  <div className="flex items-center">
                    <LockIcon className="w-4 h-4 text-purple-400 mr-2" />
                    Secure Delivery
                  </div>
                </div>

                {/* Order Button */}
                <button className={`w-full py-3 px-4 rounded-xl font-bold text-white transform transition-all duration-300 ${item.popular
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-red-500 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600'
                  } hover:scale-105 active:scale-95`}>
                  <div className="flex items-center justify-center">
                    <ShoppingCartIcon className="w-4 h-4 mr-2" />
                    Order Now
                  </div>
                </button>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : ''
                  }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Buying Info */}
          <div className={`relative p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`} style={{ animationDelay: '0.8s' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <TrendingUpIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  BUYING DINAR NOW
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  We guarantee the best rate for buying Iraqi Dinar.
                  <span className="font-semibold"> Real-time pricing</span> with
                  <span className="font-semibold"> instant confirmation</span>.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>

          {/* Right Card - Guarantee */}
          <div className={`relative p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} style={{ animationDelay: '1.0s' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <SecurityIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  OUR GUARANTEE
                  <EmojiEventsIcon className="w-6 h-6 ml-2 text-yellow-400" />
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Certificate of authenticity that guarantees the dinars are
                  <span className="font-semibold"> not counterfeit</span>.
                  <span className="font-semibold"> 100% Money-back guarantee</span>.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400/60 rounded-full animate-bounce" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-ping" />
          </div>
        </div>

        {/* Contact Section */}
        <div className={`mt-12 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center space-x-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-gray-300 text-lg">
              Limited Stock for 2 Mil Plus Orders Please{' '}
              <span className="text-red-400 font-bold cursor-pointer hover:text-red-300 transition-colors">
                Call
              </span>{' '}
              or Text{' '}
              <span className="text-blue-400 font-bold">0417460236</span>
            </div>

            <div className="flex space-x-4">
              <button className="p-3 bg-green-500 hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110 active:scale-95">
                <PhoneIcon className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 active:scale-95">
                <ChatBubbleOutlineIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
          
          .animate-float-gentle {
            animation: float-gentle 4s ease-in-out infinite;
          }
        `}</style>
    </section>
  )
}