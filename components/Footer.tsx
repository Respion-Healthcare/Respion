"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f5f5] border-t border-blue-200">

      {/* Top Blue Line */}
      <div className="h-[2px] w-full bg-blue-600"></div>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 py-14">

        {/* 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 xl:gap-20">

          {/* Brand Section */}

    {/* Brand Section */}
    <div>
      <h2 className="text-5xl font-serif font-semibold text-blue-700 mb-6">
        Respion
      </h2>

      <p className="text-gray-700 text-[15px] leading-8">
        Respion provides trusted respiratory care products,
        empowering users with quality equipment, expert support,
        and convenient online assistance.
      </p>

      <div className="flex items-center gap-4 mt-8">

        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <Facebook className="w-4 h-4" />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.879v1.91h.041c.401-.76 1.379-1.561 2.839-1.561 3.037 0 3.6 2 3.6 4.59V22h-3v-6.721c0-1.602-.029-3.661-2.231-3.661-2.232 0-2.571 1.744-2.571 3.543V22h-3V8z" />
          </svg>
        </a>

        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <Youtube className="w-4 h-4" />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <Instagram className="w-4 h-4" />
        </a>

      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
        Quick links
      </h3>

      <ul className="space-y-4 text-[17px] text-gray-600">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/products">BIPAP Machines</Link></li>
        <li><Link href="/products">CPAP Masks</Link></li>
        <li><Link href="/products">Accessories</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
        Our Company
      </h3>

      <ul className="space-y-4 text-[17px] text-gray-600">
        <li><Link href="/terms">Terms & Conditions</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/shipping">Shipping Policy</Link></li>
        <li><Link href="/blogs">Our Blogs</Link></li>
        <li><Link href="/sitemap">Sitemap</Link></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
        Contact Us
      </h3>

      <div className="space-y-5 text-gray-700 text-[15px]">

        <div className="flex gap-3 items-start">
          <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

          <div>
            <p className="font-semibold">
              Corporate Office Address
            </p>

            <p className="leading-7">
              702, 13th Cross Rd, 1st Phase,
              J.P Nagar, Bengaluru,
              Karnataka, 560078
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <Mail className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

          <a
            href="mailto:respionhealthcare@gmail.com"
            className="hover:text-blue-700 transition duration-300"
          >
            respionhealthcare@gmail.com
          </a>
        </div>

      </div>
    </div>

    {/* BRANCH NUMBERS = 5TH COLUMN */}
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 mb-6">
        Branches
      </h3>

      <div className="space-y-4 text-[15px]">

        <div className="flex justify-between gap-4">
          <span>Bangalore</span>
          <a
            href="tel:7077720500"
            className="hover:text-blue-700"
          >
            7077720500
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <span>Kolkata</span>
          <a
            href="tel:7077718893"
            className="hover:text-blue-700"
          >
            7077718893
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <span>Odisha</span>
          <a
            href="tel:9937000606"
            className="hover:text-blue-700"
          >
            9937000606
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <span>Ranchi</span>
          <a
            href="tel:8598000606"
            className="hover:text-blue-700"
          >
            8598000606
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <span>Patna</span>
          <a
            href="tel:9937127194"
            className="hover:text-blue-700"
          >
            9937127194
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <span>Guwahati</span>
          <a
            href="tel:7077718891"
            className="hover:text-blue-700"
          >
            7077718891
          </a>
        </div>

      </div>
    </div>

  </div>
</div>

      {/* Bottom Copyright */}
      <div className="border-t border-blue-200 py-5 text-center text-[15px] text-black bg-[#f8f8f8]">
        Copyright © 2026 Respion | All Rights Reserved.
      </div>
    </footer>
  )
}