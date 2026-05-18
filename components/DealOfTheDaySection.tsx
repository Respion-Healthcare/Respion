"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { products as allProducts } from "@/lib/products"
import { getFinalPrice } from "@/lib/pricing"

export default function DealOfTheDay() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState(32330)

  const dealSlugs = [
    "oxymed-portable-oxygen-concentrator",
    "oxymed-oxygen-concentrator-5lpm",
    "oxymed-10ltr-oxygen-concentrator",
    "philips-everflo-oxygen-concentrator",
    "resmed-airmini-f30-setup-pack",
  ]

  /* TIMER */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0")
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0")
  const seconds = String(timeLeft % 60).padStart(2, "0")

  /* SCROLL */
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section className="px-6 lg:px-20 py-14 bg-white">

      {/* 🔷 BORDER CONTAINER */}
      <div className="border border-blue-400 rounded-xl p-6 relative">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">

          <h2 className="text-2xl font-semibold">
            Daily Deal Of The Day
          </h2>

          {/* TIMER */}
          <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            End in: {hours}:{minutes}:{seconds}
          </div>

          <div className="flex-1 border-t border-blue-300 ml-4" />
        </div>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-18px] top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow"
        >
          <ChevronRight size={18} />
        </button>

        {/* PRODUCTS ROW */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto no-scrollbar"
        >
          {dealSlugs.map((slug) => {
            const product = allProducts.find((p) => p.slug === slug)
            if (!product) return null

            const finalPrice = getFinalPrice(product)

            return (
              <Link
                key={product.id}
                href={`/products/${product.category}/${product.slug}`}
                className="min-w-[220px] group"
              >

                {/* ITEM */}
                <div className="relative">

                  {/* DISCOUNT */}
                  {product.offer?.type === "percentage" && (
                    <span className="bg-red-500 text-white text-xs px-2 py-[2px] rounded">
                      -{product.offer.value}%
                    </span>
                  )}

                  {/* CATEGORY */}
                  <p className="text-[10px] text-gray-400 uppercase mt-2">
                    {product.category}
                  </p>

                  {/* NAME */}
                  <h3 className="text-sm mt-1 text-gray-800 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* PRICE */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-red-500 font-semibold">
                      ₹{finalPrice.toLocaleString("en-IN")}
                    </span>

                    {product.offer && (
                      <span className="text-gray-400 text-xs line-through">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* IMAGE */}
                  <div className="mt-4 h-[160px] flex items-center justify-center">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={160}
                      height={140}
                      className="object-contain group-hover:scale-105 transition"
                    />
                  </div>

                </div>

              </Link>
            )
          })}
        </div>
        {/* 🔷 DEAL BOX */}
<div className="border border-blue-400 rounded-xl p-6 relative">
  {/* existing deal code */}
</div>

{/* 🔽 ADD THIS BELOW */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

  {[
    "resmed-airfit-n20-nasal-mask",
    "resmed-airsense-10-autoset-tripack"
  ].map((slug) => {
    const product = allProducts.find(p => p.slug === slug)
    if (!product) return null

    return (
      <Link
        key={slug}
        href={`/products/${product.category}/${product.slug}`}
        className="flex justify-between items-center 
                   bg-gradient-to-r from-[#9cc6d8] to-[#c6dbe5]
                   rounded-2xl p-6 shadow-md hover:shadow-lg transition"
      >

        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs text-gray-600 uppercase">
            {product.category}
          </p>

          <h3 className="text-lg font-semibold mt-1">
            {product.name}
          </h3>

          <p className="text-xl font-bold text-red-500 mt-2">
            ₹{getFinalPrice(product).toLocaleString("en-IN")}
          </p>

          <button className="mt-3 bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
            Shop now
          </button>
        </div>

        {/* IMAGE */}
        <div className="w-[140px] flex justify-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={140}
            height={120}
            className="object-contain"
          />
        </div>

      </Link>
    )
  })}

</div>
      </div>
    </section>
  )
}