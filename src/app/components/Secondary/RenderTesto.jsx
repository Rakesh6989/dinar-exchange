import React, { useEffect, useRef, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const TestimonialShowcase = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { id: 1, name: "David", rating: 5, text: "Great company to deal with never let me down on my orders and always answer the phone or email when I need them", date: "May 9, 2025", avatar: "D", color: "from-blue-500 to-purple-600" },
    { id: 2, name: "Rod M.", rating: 5, text: "Very professional team to deal with. highly recommend Dinar Exchange...", date: "Apr 19, 2025", avatar: "R", color: "from-emerald-500 to-teal-600" },
    { id: 3, name: "Mike P.", rating: 5, text: "Excellent service will deal with again. Kept me informed every step of the way", date: "Apr 9, 2025", avatar: "M", color: "from-orange-500 to-red-600" },
    { id: 4, name: "Grant Arends", rating: 5, text: "Dinar Exchange is a reliable partner...", date: "Recent", avatar: "G", color: "from-indigo-500 to-blue-600" },
    { id: 5, name: "Melikhaya Gwanya", rating: 5, text: "Dinar Exchange values its customers...", date: "Recent", avatar: "M", color: "from-pink-500 to-rose-600" },
    { id: 6, name: "Lesley Brown", rating: 5, text: "I have been using Dinar Exchange for over 4yrs...", date: "Recent", avatar: "L", color: "from-violet-500 to-purple-600" }
  ];

  const stats = [
    { icon: EmojiEventsIcon, value: "4.8", label: "Overall Rating", suffix: "★" },
    { icon: GroupsIcon, value: "10K+", label: "Happy Clients" },
    { icon: TrendingUpIcon, value: "99%", label: "Success Rate" }
  ];

  const renderStars = (rating) => Array(5).fill(0).map((_, i) => (
    <StarIcon key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
  ));

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen p-8">
      <div ref={containerRef} className="container mx-auto">
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-6">
            <EmojiEventsIcon className="text-yellow-400" />
            <span>Verified Client Reviews</span>
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-4">Customer Excellence</h1>
          <p className="text-gray-300 max-w-xl mx-auto">Discover why thousands of clients trust Dinar Exchange for their currency needs</p>
          <div className="flex items-center justify-center mt-6 gap-4">
            <span className="text-4xl font-bold">4.8</span>
            <div className="flex">{renderStars(5)}</div>
            <span className="text-gray-400">Based on Real Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} ref={el => statsRef.current[index] = el} className="bg-white/10 p-6 rounded-xl text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 inline-flex p-4 rounded-xl mb-4">
                <stat.icon className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">{stat.value}{stat.suffix}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(currentSlide * 3, (currentSlide + 1) * 3).map((t, index) => (
              <div key={t.id} ref={el => cardsRef.current[index] = el} className="bg-white/10 p-6 rounded-2xl relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <FormatQuoteIcon className="text-white text-4xl" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${t.color} flex items-center justify-center text-white font-bold`}>{t.avatar}</div>
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <div className="flex">{renderStars(t.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">"{t.text}"</p>
                <div className="text-gray-400 text-xs mt-2">{t.date}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button onClick={prevSlide} className="bg-white/10 p-2 rounded-full">
              <ChevronLeftIcon className="text-white" />
            </button>
            <div className="flex gap-2">
              {Array(Math.ceil(testimonials.length / 3)).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-purple-500 w-6' : 'bg-white/30'}`}
                ></button>
              ))}
            </div>
            <button onClick={nextSlide} className="bg-white/10 p-2 rounded-full">
              <ChevronRightIcon className="text-white" />
            </button>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Clients</h2>
            <p className="text-purple-100 mb-6">Experience the reliability and professionalism that has earned us a 4.8-star rating</p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold">Get Started Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialShowcase;
