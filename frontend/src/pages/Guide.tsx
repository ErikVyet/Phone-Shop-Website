import HeroSection from "../components/guide/HeroSection";
import BuyerSection from "../components/guide/BuyerSection";
import SellerSection from "../components/guide/SellerSection";
import SafetySection from "../components/guide/SafetySection";
import { ThemeContext } from "../contexts/ThemeContext";
import React, { useContext } from "react";

export default function Guide() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="w-full px-6 md:px-12 lg:px-20 space-y-28">
        <HeroSection />
        <BuyerSection />
        <SellerSection />
        <SafetySection />
      </div>
    </div>
  );
}