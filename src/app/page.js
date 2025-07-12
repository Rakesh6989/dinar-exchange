"use client";

import TopBar from "./components/home/Topbar";
import Navbar from "./components/home/Navbar";
import dynamic from "next/dynamic";
import { Container, Box } from "@mui/material";
import RenderTesto from "./components/Secondary/RenderTesto";
import ProductList from "./components/home/ProductList";
import Footer from "./components/home/Footer";
const HeroSlider = dynamic(() => import("./components/home/HeroSlider"), {
  loading: () => <p>Loading slider...</p>,
});
const MostWantedCategory = dynamic(
  () => import("./components/Secondary/MostWantedCategory"),
  {
    loading: () => <p>Loading Awaited Categories...</p>,
  }
);
const ComboSlider = dynamic(() => import("./components/home/ComboSlider"), {
  loading: () => <p>Loading combos...</p>,
});

const FeatureCard = dynamic(() => import("./components/Secondary/FeatureCard"));

function Page() {
  const features = [
    {
      icon: "https://plus.unsplash.com/premium_photo-1681487966346-cb4a0c7a2a72?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Easy Returns",
      subtitle: "and Refunds",
    },
    {
      icon: "/icons/global-fashion.png",
      title: "Global Fashion",
      subtitle: "Made in India",
    },
    {
      icon: "/icons/trusted.png",
      title: "Trusted by",
      subtitle: "50 Lakh + Customers",
    },
  ];
  const categoryData = [
    {
      title: "SHIRTS",
      image:
        "https://images.unsplash.com/photo-1629426958003-35a5583b2977?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "TROUSERS",
      image:
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "OVERSIZED T-SHIRTS",
      image:
        "https://images.unsplash.com/photo-1618354691601-bbbffce17563?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "CARGOS",
      image:
        "https://images.unsplash.com/photo-1593032457869-54c8efaa3c24?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "POLOS",
      image:
        "https://images.unsplash.com/photo-1520974735194-87b192836d67?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "JEANS",
      image:
        "https://images.unsplash.com/photo-1622448526942-f0ad58ae0c2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "PRINTED T-SHIRTS",
      image:
        "https://images.unsplash.com/photo-1591047139829-0ef13b8f3c5f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "JOGGERS",
      image:
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "PLAIN T-SHIRTS",
      image:
        "https://images.unsplash.com/photo-1602810318491-5501f58e4b18?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "BOXERS",
      image:
        "https://images.unsplash.com/photo-1600180758890-593f5b02a2e3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      <HeroSlider />
      <ComboSlider />

      <div className="flex flex-col items-center gap-6 py-6">
        <p className="text-sm text-center text-gray-800 font-medium">
          NO COST | 3 EASY EMIs – Activate at Checkout
        </p>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
            }}
          >
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </Box>
        </Container>
      </div>
      <MostWantedCategory categories={categoryData} />
      <RenderTesto />
      <ProductList />
    </div>
  );
}

export default Page;
