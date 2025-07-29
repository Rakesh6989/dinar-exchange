import React, { useEffect, useRef, useState } from 'react';

const DinarExchangeWebsite = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate GSAP animations with CSS transitions and transforms
    setIsLoaded(true);
    
    // Hero animation
    const heroElements = heroRef.current?.children;
    if (heroElements) {
      Array.from(heroElements).forEach((el, i) => {
        setTimeout(() => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        }, i * 200);
      });
    }

    // Services stagger animation
    const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
    if (serviceCards) {
      serviceCards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transform = 'translateY(0)';
          card.style.opacity = '1';
        }, 500 + i * 150);
      });
    }

    // Features animation
    const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
    if (featureItems) {
      featureItems.forEach((item, i) => {
        setTimeout(() => {
          item.style.transform = 'translateX(0)';
          item.style.opacity = '1';
        }, 1000 + i * 100);
      });
    }
  }, []);

  // Material-UI style SVG icons
  const TrendingUpIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28L12 14.87l-1.03.6-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11L12 7.13M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
    </svg>
  );

  const GroupIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.18 7c-.8 0-1.54.37-2.01.99l-.01.01L14 10.5v8l-5.5-1.5v-7L7 8.5c-.28-.28-.61-.42-1-.42s-.72.14-1 .42L3.5 10 2 8.5l2.5-2.5c.28-.28.61-.42 1-.42s.72.14 1 .42L8.5 7.5 10 6c.47-.62 1.21-.99 2.01-.99 1.18 0 2.25.71 2.78 1.77L17.5 14H20v8h-4z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-6 h-6 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11C15.4,11 16,11.4 16,12V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V12C8,11.4 8.4,11 9,11V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  const LockIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="w-5 h-5 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  );

  const services = [
    {
      title: "Dinar Exchange Services",
      items: [
        {
          icon: <TrendingUpIcon />,
          title: "Effortless Conversions",
          description: "Experience the convenience of converting Australian Dollars (AUD) to Iraqi dinars with precision and efficiency."
        },
        {
          icon: <GlobeIcon />,
          title: "Market Insights",
          description: "Stay well-informed about the ever-changing dinar value with our regularly updated information, allowing you to make well-informed decisions based on current market trends."
        }
      ]
    },
    {
      title: "Iraqi Dinar Revaluation Updates",
      items: [
        {
          icon: <StarIcon />,
          title: "Stay Informed",
          description: "Our platform keeps you ahead of the latest developments in the revaluation of the Iraqi Dinar, offering comprehensive news coverage and expert analysis."
        },
        {
          icon: <AwardIcon />,
          title: "Stay Updated on the Iraqi Dinar Revaluation",
          description: "Get the latest updates, official announcements, and breaking news that could impact the market. Don't miss a beat—follow us for real-time insights!"
        },
        {
          icon: <GroupIcon />,
          title: "Expert Commentary",
          description: "Explore specialist commentary on the potential impact of the revaluation on the forex market and the global economy, providing valuable insights for strategic decision-making."
        }
      ]
    },
    {
      title: "Dinar Investment Resources",
      items: [
        {
          icon: <ShieldIcon />,
          title: "Educational Resources",
          description: "Access a treasure trove for those considering the Iraqi Dinar as an investment. Delve into its history, potential revaluation scenarios, and prospects, empowering you with the knowledge needed for informed investment decisions."
        },
        {
          icon: <ClockIcon />,
          title: "Latest News",
          description: "Stay updated with the latest news and announcements surrounding the Iraqi Dinar revaluation, ensuring you are well-equipped to navigate the complexities of the ever-evolving financial landscape."
        }
      ]
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <ShieldIcon />,
      title: "Transparency at Its Core",
      description: "Our commitment to transparency ensures that every transaction is clear, reliable, and aligned with your expectations. You can trust our platform to provide accurate results."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Reliable Updates",
      description: "Stay ahead of the curve with reliable updates on the Iraqi Dinar revaluation and broader market trends. Our platform ensures that you are well-informed and equipped to make timely decisions."
    },
    {
      icon: <GroupIcon />,
      title: "Expert Guidance",
      description: "Access expert insights and guidance from seasoned professionals in the field."
    }
  ];

  const offerings = [
    { icon: <ClockIcon />, text: "Instant Ordering Facility" },
    { icon: <CheckCircleIcon />, text: "100% Guaranteed Timely Delivery" },
    { icon: <AwardIcon />, text: "Reputation" },
    { icon: <LockIcon />, text: "Secure Online Payment Methods - PayPal" },
    { icon: <GroupIcon />, text: "24/7 Customer Service" },
    { icon: <GlobeIcon />, text: "Local Australian Based Company" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dinar Exchange Australia
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <MenuIcon />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center" ref={heroRef}>
          <h1 
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform translate-y-20 opacity-0 transition-all duration-1000"
            style={{transitionDelay: isLoaded ? '0ms' : '1000ms'}}
          >
            Iraqi Dinar
          </h1>
          <h2 
            className="text-3xl md:text-5xl font-light mb-8 text-gray-300 transform translate-y-20 opacity-0 transition-all duration-1000"
            style={{transitionDelay: isLoaded ? '200ms' : '1000ms'}}
          >
            Exchange Excellence
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed transform translate-y-20 opacity-0 transition-all duration-1000"
            style={{transitionDelay: isLoaded ? '400ms' : '1000ms'}}
          >
            Your trusted Melbourne-based partner for secure Iraqi Dinar transactions across Australia and New Zealand
          </p>
          <div 
            className="flex flex-col md:flex-row gap-6 justify-center items-center transform translate-y-20 opacity-0 transition-all duration-1000"
            style={{transitionDelay: isLoaded ? '600ms' : '1000ms'}}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Start Trading
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRightIcon />
              </div>
            </button>
            <button className="border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Comprehensive Range of Services
            </h2>
          </div>
          
          <div className="space-y-16" ref={servicesRef}>
            {services.map((section, sectionIndex) => (
              <div key={sectionIndex} className="service-card transform translate-y-20 opacity-0 transition-all duration-800">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-300">
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-blue-300">{item.title}</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Dinar Exchange Australia?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Dinar Exchange is a Melbourne-based local company assisting customers all over Australia and New Zealand to secure Iraqi Dinars safely and securely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 w-full" ref={featuresRef}>
            {whyChooseFeatures.map((feature, index) => (
              <div 
                key={index}
                className="feature-item text-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform opacity-0 hover:scale-105 w-full"
                style={{
                  transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${1000 + index * 100}ms`
                }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dinar Exchange Offers
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              When buying Iraqi Dinar on the internet, buying from a company you can trust is the most important thing. Dinar Exchange is one of the largest and most experienced companies selling Iraqi Dinar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="flex items-center p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {offering.icon}
                </div>
                <span className="text-lg font-medium text-gray-200">{offering.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Now Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20 hover:border-blue-400/50 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Iraqi Dinar Notes Visual */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start gap-4 mb-8">
                  <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-lg p-4 w-40 h-24 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="text-white text-xs font-bold mb-1">IRAQI DINAR</div>
                    <div className="text-white text-lg font-bold">1000</div>
                    <div className="text-green-200 text-xs">Central Bank of Iraq</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg p-4 w-40 h-24 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="text-white text-xs font-bold mb-1">IRAQI DINAR</div>
                    <div className="text-white text-lg font-bold">10000</div>
                    <div className="text-blue-200 text-xs">Central Bank of Iraq</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center lg:text-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BUY YOUR IRAQI DINAR NOW
                </h2>
                <button className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-white">
                  Click Here
                </button>
                <div className="mt-4 flex justify-center lg:justify-end">
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-semibold transition-all z-110 relative duration-300 transform hover:scale-105 flex items-center gap-2">
                    📞 Call me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Rating Header */}
          <div className="text-center mb-16">
            <div className="text-gray-400 text-lg mb-2">Overall rating</div>
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-5xl font-bold text-white">4.8</span>
              <div className="text-yellow-400 text-3xl">★</div>
            </div>
            <div className="text-gray-300 text-lg">Based On Real "Verified Client Reviews"</div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Excellent service will deal with again. Kept me informed every step of the way"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mike P.</div>
                    <div className="text-gray-400 text-sm">Apr 9, 2025</div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Really appreciate all the support I have received from Dinar exchange ... a great and caring team .. thanks for your ongoing support..highly recommended."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    R
                  </div>
                  <div>
                    <div className="text-white font-semibold">Rachel C.</div>
                    <div className="text-gray-400 text-sm">Apr 7, 2025</div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Very happy with the service Thank you Dinar Exchange I highly recommend if you are looking to purchase Iraqi dinar in Australia"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    G
                  </div>
                  <div>
                    <div className="text-white font-semibold">Greg</div>
                    <div className="text-gray-400 text-sm">Mar 31, 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Invest in Iraqi Dinar?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the potential opportunities and strategic advantages of Iraqi Dinar investment with our comprehensive market analysis and expert insights.
          </p>
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
            Explore Investment Opportunities
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 border-t border-blue-600/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
            
            {/* Company Information */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-blue-400 pb-2 inline-block">
                Company Information
              </h3>
              <ul className="space-y-3">
                {['About Us', 'FAQ\'s', 'Resource', 'Blog', 'Contact Us', 'Iraqi Dinar Security Features', 'Austrac Enrolment'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="group-hover:border-b border-blue-400 transition-all duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Currencies we supply */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-blue-400 pb-2 inline-block">
                Currencies we supply
              </h3>
              <ul className="space-y-3">
                {['Buy Iraqi Dinar', 'Buy Zimbabwe Dollars'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block group flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:border-b border-blue-400 transition-all duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Connected */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-blue-400 pb-2 inline-block">
                Stay Connected
              </h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-sky-500 hover:bg-sky-400 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <span>Twitter</span>
                </a>
              </div>
            </div>

            {/* Countries We Operate */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-blue-400 pb-2 inline-block">
                Countries We Operate
              </h3>
              <div className="space-y-3">
                {['Australia', 'New Zealand'].map((country, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className="group-hover:text-blue-400 transition-colors duration-300">{country}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-blue-400 pb-2 inline-block">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Tel:</div>
                    <div className="font-semibold group-hover:text-blue-400 transition-colors duration-300">1300 856 881</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.5V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">M:</div>
                    <div className="font-semibold group-hover:text-blue-400 transition-colors duration-300">0417 460 236</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Fax:</div>
                    <div className="font-semibold group-hover:text-blue-400 transition-colors duration-300">1300 857 881</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300 group">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">E:</div>
                    <div className="font-semibold group-hover:text-blue-400 transition-colors duration-300 break-all">
                      dinars@dinarexchange.com.au
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-blue-600/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <div className="text-gray-300 text-sm mb-2">
                  Copyright © 2022 - 2025 Oz Trading Group Pty Ltd DinarExchange.com.au All rights reserved.
                </div>
                <div className="text-gray-400 text-xs">
                  Dinar exchange is not an investment company. Any information found on this site should not be taken as investment advice.
                </div>
              </div>
              
              {/* Back to Top Button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DinarExchangeWebsite;