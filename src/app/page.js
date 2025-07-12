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
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "CARGOS",
      image:
        "https://images.unsplash.com/photo-1471575266009-b52cd3a488c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "POLOS",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "JEANS",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "PRINTED T-SHIRTS",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "JOGGERS",
      image:
        "https://images.unsplash.com/photo-1563389234808-52344934935c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "PLAIN T-SHIRTS",
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "BOXERS",
      image:
        "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
