"use client";
import { Box, Typography, Link, Container } from "@mui/material";

export default function TopBar() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", py: 1, p: 2.5  }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          fontSize: 14,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography variant="body2">
          Shop Now with Free Shipping on All Items with Sitare Wargi!
        </Typography>

        <Typography variant="body2">
          <Link
            href="/track-order"
            underline="none"
            color="inherit"
            fontWeight="bold"
          >
            TRACK ORDER
          </Link>{" "}
          /{" "}
          <Link
            href="/payments"
            underline="none"
            color="inherit"
            fontWeight="bold"
          >
            PAYMENT
          </Link>
        </Typography>

        <Typography variant="body2">
          <Link
            href="/login"
            underline="none"
            color="inherit"
            fontWeight="bold"
          >
            LOG IN
          </Link>{" "}
          /{" "}
          <Link
            href="/signup"
            underline="none"
            color="inherit"
            fontWeight="bold"
          >
            SIGNUP
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
