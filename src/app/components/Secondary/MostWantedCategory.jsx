"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function MostWantedCategory({ categories }) {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" textAlign="center" mb={4}>
          MOST WANTED CATEGORIES
        </Typography>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <p className="text-white font-bold text-sm py-2 bg-black">
                <span className="text-yellow-400 text-lg mr-1">|</span> {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
}
