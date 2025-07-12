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
    image: "https://images.unsplash.com/photo-1602810315761-dce6a6b06638",
  },
  {
    name: "Hemant Rajput",
    rating: 4.2,
    date: "2 June 2025",
    review:
      "Oversized t-shirts are really good, especially the printed ones. Super comfortable.",
    image: "https://images.unsplash.com/photo-1600181953601-c9b93f56c90d",
  },
  {
    name: "Ayan",
    rating: 4.3,
    date: "6 April 2025",
    review:
      "I ordered boxers & I must say, its quality was really good. Comfortable and worth it.",
    image: "https://images.unsplash.com/photo-1600181911899-b7fb60c4800b",
  },
  {
    name: "Ketan T",
    rating: 4.2,
    date: "5 March 2025",
    review: "Cargo is good and better than market products. Go for it.",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1c5",
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
