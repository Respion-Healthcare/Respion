"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero1.jpg",
    link: "/products/cpap/resmed-airsense-10-autoset-tripack",
  },

  {
    image: "/images/hero2.png",
    link: "/products/masks/resmed-airfit-n20",
  },

  {
    image: "/images/hero3.png",
    link: "/products/oxygen-concentrator",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full overflow-hidden bg-white">

      <div className="relative h-[250px] sm:h-[400px] lg:h-[720px] w-full">

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >

            <Link href={slides[current].link}>
              <Image
                src={slides[current].image}
                alt="Hero Banner"
                fill
                priority
                className="object-cover cursor-pointer"
              />
            </Link>

          </motion.div>

        </AnimatePresence>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-pink-500 to-blue-600 text-white flex items-center justify-center shadow-xl"
        >
          <ChevronLeft size={26} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-pink-500 to-blue-600 text-white flex items-center justify-center shadow-xl"
        >
          <ChevronRight size={26} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-white"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  )
}