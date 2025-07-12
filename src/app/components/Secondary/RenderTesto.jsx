"use client";

import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const sampleTestimonials = [
  {
    name: "Harshul",
    rating: 4.1,
    date: "1 July 2025",
    review:
      "Bought two pyjama pants and both had a perfect fit and color. The fabric quality is pretty good.",
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=387&auto=format&fit=crop&ixlib=rbd-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hemant Rajput",
    rating: 4.2,
    date: "2 June 2025",
    review:
      "Oversized t-shirts are really good, especially the printed ones. Super comfortable.",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ayan",
    rating: 4.3,
    date: "6 April 2025",
    review:
      "I ordered boxers & I must say, its quality was really good. Comfortable and worth it.",
    image: "https://images.unsplash.com/photo-1563389234808-52344934935c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ketan T",
    rating: 4.2,
    date: "5 March 2025",
    review: "Cargo is good and better than market products. Go for it.",
    image: "https://images.unsplash.com/photo-1622445270936-5dcb604970e7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function RenderTesto({ testimonials = sampleTestimonials }) {
  return (
    <Box py={10} sx={{ backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          BEYOUNGSTERS APPROVED
        </Typography>
        <Typography align="center" sx={{ mb: 4, color: "#666", fontSize: 14 }}>
          Real reviews from real people
        </Typography>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true} // 🔁 Infinite Loop Enabled
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
