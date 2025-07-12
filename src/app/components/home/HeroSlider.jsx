import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1629426958003-35a5583b2977?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "REGULAR FIT PRINTED T-SHIRTS",
    subtitle: "Never go out of trends",
    offer: "BUY ANY 3 AT ₹998",
    cta: "SHOP NOW",
  },
  {
    img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OVERSIZED STREETWEAR",
    subtitle: "New age fashion for Gen Z",
    offer: "BUY ANY 2 AT ₹888",
    cta: "EXPLORE",
  },
  {
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OVERSIZED STREETWEAR",
    subtitle: "New age fashion for Gen Z",
    offer: "BUY ANY 2 AT ₹999",
    cta: "EXPLORE",
  },
    {
    img: "https://images.unsplash.com/photo-1701119527218-ceed8ec844e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OVERSIZED STREETWEAR",
    subtitle: "New age fashion for Gen Z",
    offer: "BUY ANY 3 AT ₹1008",
    cta: "EXPLORE",
  },
];

export default function HeroSlider() {
  return (
    <Swiper autoplay={{ delay: 2000 }} modules={[Autoplay]} loop={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <HeroSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
