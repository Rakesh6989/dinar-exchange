"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

export default function HeroSlide({ img, title, subtitle, offer, cta }) {
  return (
    <Box sx={{ position: "relative", width: "100%", height: { xs: 400, md: 500 } }}>
      {/* Image */}
      <Image src={img} alt="Slide Image" layout="fill" objectFit="cover" priority />

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Left Text */}
            <Box>
              <Typography variant="h4" fontWeight="bold">{title}</Typography>
              <Typography variant="body1" mt={1}>{subtitle}</Typography>
            </Box>

            {/* Right Offer */}
            <Box textAlign="center">
              <Typography variant="caption">PREMIUM FABRIC | TRENDY PRINTS</Typography>
              <Typography variant="h5" fontWeight="bold" my={1}>
                {offer}
              </Typography>
              <Button variant="contained" color="warning">
                {cta}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
