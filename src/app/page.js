"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import dynamic from "next/dynamic";
import { Container, Box } from "@mui/material";
import RenderTesto from "./components/Secondary/RenderTesto";
import ProductList from "./components/home/DinarExchange";
import Footer from "./components/home/Footer";
import { useRef } from "react";
import DinarPricingSection from "./components/home/DinarPricingSection";
const MainNavBar = dynamic(() => import("./components/home/MainNavBar"), {
  loading: () => <p>Loading slider...</p>,
});

import HeroSection from "./components/home/HeroSection";

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
      Icon: LocalShippingIcon,
      title: "Free Delivery",
      subtitle: "Across India",
    },
    {
      Icon: CreditCardIcon,
      title: "No Cost EMI",
      subtitle: "3 Easy Payments",
    },
    {
      Icon: SupportAgentIcon,
      title: "24/7 Support",
      subtitle: "We're here to help",
    },
  ];

  const scrollTargetRef = useRef(null);


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
      <MainNavBar />

      <HeroSection />

      <DinarPricingSection />      <RenderTesto />
      <ProductList ref={scrollTargetRef} />
    </div>
  );
}

export default Page;
