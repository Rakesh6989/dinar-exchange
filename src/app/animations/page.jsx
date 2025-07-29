// __define-ocg__
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const cursorRef = useRef(null);

  // Hero animation on load
  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  // Scroll-based animation for about section
  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  // Cursor trail effect
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none mix-blend-difference z-50"
        style={{ top: 0, left: 0 }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex items-center justify-center h-screen text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Bold Digital Experience<br /> by Trionn Inspired
        </h1>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-32 px-6 max-w-3xl mx-auto text-lg text-gray-300"
      >
        <p>
          We craft immersive digital experiences with a focus on motion, interactivity, and elegant design. Whether you’re building a portfolio or a brand, every scroll feels alive.
        </p>
      </section>
    </main>
  );
}
