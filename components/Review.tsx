"use client"

import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import { useRef } from "react"

const reviews = [
  {
    name: "Sunil Behera",
    review:
      "Really appreciate the professional and timely support. Initially it was difficult to adjust with the CPAP machine, but the team guided me through settings and mask changes. Now I’m comfortable using it.",
    rating: 5,
  },
  {
    name: "Rashmi Ranjan Rout",
    review:
      "Customer support is excellent. My family member is using a BiPAP machine and the experience has been smooth so far. Highly professional and reliable service.",
    rating: 5,
  },
  {
    name: "Bhim Charan Marndi",
    review:
      "Very responsible and active support from the team. Truly thankful to the technical staff for their help and guidance.",
    rating: 5,
  },
  {
    name: "Shivam Dwivedi",
    review:
      "Best service with affordable pricing. The demo was explained perfectly and made everything easy to understand.",
    rating: 5,
  },
  {
    name: "Suman Kumar Bhuyan",
    review:
      "Excellent response from the team. Very satisfied with the installation and service. Would definitely recommend for medical equipment support.",
    rating: 5,
  },
  {
    name: "Pranay Kumar",
    review:
      "Great support from staff. They explained the machine usage clearly and even responded late at night, which was very helpful.",
    rating: 5,
  },
  {
    name: "Sandeep",
    review:
      "Good service and very polite behavior. They even assisted late at night. Really appreciate the support.",
    rating: 5,
  },
]

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -420 : 420,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-24 px-6 lg:px-20">

      <div className="relative z-10">

        {/* Heading */}
        <header className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-gray-500 text-sm font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Our Customers
          </h2>

          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Honest feedback from people who have experienced our products.
          </p>
        </header>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={() => scroll("left")}
            className="bg-white border h-12 w-12 rounded-full shadow hover:bg-gray-900 hover:text-white transition"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="bg-white border h-12 w-12 rounded-full shadow hover:bg-gray-900 hover:text-white transition"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>
        </div>

        {/* Reviews */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {reviews.map((item, index) => (
            <article
              key={index}
              className="
                min-w-[340px]
                md:min-w-[400px]
                rounded-3xl
                border
                bg-white
                p-8
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-400
                group
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-6">

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-gray-300 group-hover:text-gray-500 transition" />
              </div>

              {/* Review */}
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                “{item.review}”
              </p>

              {/* Bottom */}
              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="h-12 w-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                  {item.name.charAt(0)}
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Verified Customer
                  </p>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}