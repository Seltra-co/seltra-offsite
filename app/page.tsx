"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import NavCards from "@/components/NavCards";
import AboutOffsite from "@/components/AboutOffsite";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashDismiss = () => {
    setShowSplash(false);
  };

  return (
    <main>
      {showSplash && <SplashScreen onDismiss={handleSplashDismiss} />}
      <Hero />
      <NavCards />
      <AboutOffsite />
    </main>
  );
}
