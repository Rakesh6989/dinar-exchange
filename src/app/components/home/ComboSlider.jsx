"use client";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ComboCard from "./ComboCard";

const comboData = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PLAIN T-SHIRTS",
    price: 899,
    variants: "Available in 12+ colors | S to 5XL",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "POLO T-SHIRTS",
    price: 1399,
    variants: "Available in 10+ colors",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PLAIN T-SHIRTS",
    price: 899,
    variants: "Available in 12+ colors | S to 5XL",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PLAIN T-SHIRTS",
    price: 899,
    variants: "Available in 12+ colors | S to 5XL",
  },
  {
    image:
      "https://images.unsplash.com/photo-1746399716251-27b785673f2b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "REGULAR-FIT PYJAMAS",
    price: 1599,
    variants: "Available in 8+ colors",
  },
];

export default function ComboSlider() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          SUPER SAVING COMBOS
        </Typography>
        <Typography variant="subtitle2" textAlign="center" color="gray" mb={4}>
          Loved by 4+ millions
        </Typography>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true} // 🔁 THIS enables infinite loop
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            600: { slidesPerView: 2.2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {comboData.map((combo, index) => (
            <SwiperSlide key={index}>
              <ComboCard combo={combo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
