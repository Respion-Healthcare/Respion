"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import ProductBannerCard from "./ProductBannerCard"
import { products as allProducts } from "@/lib/products"

/* ANIMATIONS */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ProductBannerGrid() {
  const bannerProducts = [
    "resmed-airfit-f20-full-face-mask",
    "resmed-lumis-100-vpap-st",
    "resmed-lumis-150-vpap-st",
    "airmini-autoset-cpap-device",
    "airsense-11-autoset-4g-tripack",
    "airsense-11-autoset-single-pack",
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-16 lg:py-24 bg-gray-100">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-blue-700">
          Featured Medical Equipment
        </h2>

        <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
          Explore our most trusted CPAP, BiPAP, and respiratory care products.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {bannerProducts.map((slug, index) => {
          const product = allProducts.find((p) => p.slug === slug)
          if (!product) return null

          return (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="will-change-transform"
            >
              <Link href={`/products/${product.category}/${product.slug}`}>
                <ProductBannerCard product={product} />
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

    </section>
  )
}