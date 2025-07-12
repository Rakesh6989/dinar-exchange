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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-stretch ">
          {categories.map((item, i) => (
            <div
              key={i}
              className="bg-white mb-5 rounded-xl overflow-hidden shadow-md flex flex-col h-full"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <p className="text-white font-bold text-sm py-2 bg-black text-center">
                <span className="text-yellow-400 text-lg mr-1">|</span> {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
}
