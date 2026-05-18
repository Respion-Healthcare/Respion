"use client"

import Image from "next/image"
import { getFinalPrice } from "@/lib/pricing"
import { Product } from "@/lib/products"

interface Props {
  product: Product
}

export default function ProductBannerCard({ product }: Props) {
  return (
    <div
      className="group rounded-3xl overflow-hidden
                 bg-gradient-to-r from-[#6aa6c1] to-[#6faac6]
                 shadow-md hover:shadow-xl transition duration-300
                 min-h-[220px] flex items-center"
    >
      <div className="flex w-full h-full">

        {/* LEFT CONTENT */}
        <div className="w-[60%] p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
          
          {/* CATEGORY */}
          <p className="text-[11px] sm:text-xs uppercase tracking-wide text-white/70 mb-1">
            {product.category}
          </p>

          {/* NAME */}
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black leading-snug">
            {product.name}
          </h3>

          {/* PRICE */}
          <p className="mt-3 text-lg sm:text-xl font-bold text-orange-500">
            ₹{getFinalPrice(product).toLocaleString("en-IN")}
          </p>

          {/* BUTTON */}
          <button
            className="mt-4 bg-blue-700 hover:bg-blue-800
                       text-white text-sm px-5 py-2 rounded-full
                       w-fit transition"
          >
            Shop now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[40%] relative flex items-center justify-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={220}
            height={180}
            className="object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

      </div>
    </div>
  )
}