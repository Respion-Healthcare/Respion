"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Mail,
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

        {/* 4 Columns (removed Our Company) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.8fr] gap-14 xl:gap-20">

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
            {/* Footer Extra Links */}
            <div className="mt-10 pt-6 border-t border-blue-200 space-y-3 text-[15px] text-gray-600">

              <Link href="/terms" className="block hover:text-blue-700 transition">
                Terms & Conditions
              </Link>

              <Link href="/privacy" className="block hover:text-blue-700 transition">
                Privacy Policy
              </Link>

                <Link href="/shipping" className="block hover:text-blue-700 transition">
                Shipping Policy
              </Link>

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
            {/* Extra Links */}
            <div className="mt-10 pt-6 border-t border-blue-200 space-y-3 text-[15px] text-gray-600">
              <Link href="/blogs" className="block hover:text-blue-700 transition">
                Blogs
              </Link>

            </div>
          </div>

          {/* Contact Us + Branches Combined */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-blue-700 mb-8">
            Contact Us
          </h3>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10 text-sm text-gray-700">

            {/* Bangalore */}
            <div>
              <p className="font-semibold text-black">Bangalore</p>
              <p className="mb-2">7077720500</p>

              <p className="leading-6">
                702, 13th Cross Rd, 1st Phase, J. P. Nagar,<br />
                Bengaluru, Karnataka 560078
              </p>
            </div>

            {/* Odisha */}
            <div>
              <p className="font-semibold text-black">Odisha</p>
              <p className="mb-2">9937000606</p>

              <p className="leading-6">
                Plot No 331 A, Saheed Nagar,<br />
                Bhubaneswar, Odisha 751007
              </p>
            </div>

            {/* Patna */}
            <div>
              <p className="font-semibold text-black">Patna</p>
              <p className="mb-2">9937127194</p>

              <p className="leading-6">
                Plot No - MH 750, Sandalpur Rd,<br />
                Bajrangpuri, Patna, Bihar 800006
              </p>
            </div>

            {/* Kolkata */}
            <div>
              <p className="font-semibold text-black">Kolkata</p>
              <p className="mb-2">7077718893</p>

              <p className="leading-6">
                1st Floor, 13/B, Flat No-3, Kalighat,<br />
                Kolkata, West Bengal 700026
              </p>
            </div>

            {/* Ranchi */}
            <div>
              <p className="font-semibold text-black">Ranchi</p>
              <p className="mb-2">8598000606</p>

              <p className="leading-6">
                Plot No 114, Old A G Colony, Kadru,<br />
                Ranchi, Jharkhand 834002
              </p>
            </div>

            {/* Guwahati */}
            <div>
              <p className="font-semibold text-black">Guwahati</p>
              <p className="mb-2">7077718891</p>

              <p className="leading-6">
                House No 5, MA Path, Baninagar,<br />
                Guwahati, Assam 781008
              </p>
            </div>

          </div>
        </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-blue-200 py-5 text-center text-[15px] text-black bg-[#f8f8f8]">
        Copyright © 2025 Respion | All Rights Reserved.
      </div>
    </footer>
  )
}