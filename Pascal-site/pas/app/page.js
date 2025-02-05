"use client";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
export default function Home() {
  return (
    <main className="main">
      <Banner />
      <Promo />
    </main>
  );
}
