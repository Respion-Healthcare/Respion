import type { Metadata } from "next"

import BestSellingSection from "@/components/BestSellingSection"
import DealOfTheDay from "@/components/DealOfTheDaySection"
import Hero from "@/components/Hero"
import ProductBannerGrid from "@/components/ProductBannerGrid"
import ReviewsSection from "@/components/Review"
import ShopCategories from "@/components/ShopCategories"
import LocationSEOSection from "@/components/LocationSEOSection"

export const metadata: Metadata = {
  title: "Buy CPAP, BiPAP & Oxygen Concentrators in India | Respion",
  description:
    "Buy CPAP machines, BiPAP machines, and oxygen concentrators online in India at best prices. Trusted sleep apnea equipment provider - Respion.",
  keywords: [
    "CPAP Machine India",
    "BiPAP Machine India",
    "Oxygen Concentrator India",
    "Sleep Apnea Machine",
    "CPAP price India",
  ],
  openGraph: {
    title: "Respion - CPAP, BiPAP & Oxygen Concentrators",
    description:
      "Buy sleep apnea machines and oxygen concentrators online in India.",
    url: "https://Respion.in",
    siteName: "Respion",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      
      {/* ✅ H1 for SEO (VERY IMPORTANT) */}
      <h1 className="sr-only">
        Buy CPAP, BiPAP Machines & Oxygen Concentrators in India
      </h1>

      <Hero />
      <ProductBannerGrid />
      <ShopCategories /> 
      <DealOfTheDay />
      <BestSellingSection />
      {/* <LocationSEOSection /> */}
      <ReviewsSection />

    </main>
  )
}