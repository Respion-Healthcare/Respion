"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {

  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accessoryOpen, setAccessoryOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  const { cart } = useCart()

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    setSearchQuery("")
  }

  useEffect(() => {
    setProductsOpen(false)
    setAccessoryOpen(false)
  }, [pathname])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
        setAccessoryOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const closeMobileMenu = () => setMobileOpen(false)

  return (

   <header className={`fixed top-0 left-0 w-full z-50 bg-white border-b`}>

    <div className="max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between">
        <Link href="/" className="text-4xl font-serif font-semibold text-blue-700">
          Respion
        </Link>

        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-8 text-gray-700 font-medium relative">

          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* PRODUCTS */}
          <div className="relative">

            <button onClick={() => setProductsOpen(!productsOpen)} className="flex items-center gap-1 hover:text-blue-600">
              Products
              <ChevronDown className={`w-4 h-4 ${productsOpen ? "rotate-180" : ""}`} />
            </button>

           {productsOpen && (
  <div className="absolute left-0 top-full w-[1100px] bg-white shadow-2xl rounded-2xl border p-8 flex gap-10">

    {/* LEFT SIDE - CATEGORIES */}
    <div className="grid grid-cols-3 gap-10 flex-1 text-sm">

      {/* Devices */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-3">
          Resmed BIPAP/CPAP Devices
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li><Link href="/products/cpap-machine">BIPAP Machines</Link></li>
          <li><Link href="/products/cpap-machine">CPAP Machines</Link></li>
          <li><Link href="/products/oxygen-concentrator">Oxygen Machine</Link></li>
        </ul>

        <h3 className="font-semibold text-blue-600 mt-6 mb-3">
          Rental Products
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li><Link href="/products/rental">CPAP & BIPAP Rental</Link></li>
        </ul>
      </div>

      {/* Masks */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-3">
          CPAP & BIPAP Masks
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li><Link href="/products/nasal-mask">Nasal Mask</Link></li>
          <li><Link href="/products/nasal-pillow-mask">Nasal Pillow Mask</Link></li>
          <li><Link href="/products/full-face-mask">Full Face Mask</Link></li>
        </ul>
      </div>

      {/* Accessories */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-3">
          Accessories
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li><Link href="/products/hose-pipes-tubes">Hose Pipes & Tubes</Link></li>
          <li><Link href="/products/filters-cleaners">Filters & Cleaners</Link></li>
          <li><Link href="/products/humidifier-bottle">Humidifiers & Bottles</Link></li>
          <li><Link href="/products/mask-headgear">Frames & Headgear</Link></li>
          <li><Link href="/products/mask-cushion">Mask Cushions</Link></li>
          <li><Link href="/products/mask-clips">Mask Pad & Clips</Link></li>
        </ul>
      </div>

      {/* BEST SELLING */}
      <div className="col-span-3 border-t pt-6 mt-4">
        <h3 className="font-semibold text-blue-600 mb-3">
          Hot & Best Selling Products
        </h3>

        <ul className="grid grid-cols-3 gap-2 text-gray-600">
          <li><Link href="/products/resmed-airfit-n20-nasal-mask">AirFit N20 Nasal Mask</Link></li>
          <li><Link href="/products/resmed-airsense-10-autoset-tripack">AirSense 10 AutoSet</Link></li>
          <li><Link href="/products/resmed-airstart10-auto-cpap">AirStart 10 CPAP</Link></li>
          <li><Link href="/products/resmed-airfit-f20-full-face-mask">AirFit F20 Mask</Link></li>
          <li><Link href="/products/resmed-lumis-100-vpap-st">Lumis 100 VPAP</Link></li>
          <li><Link href="/products/resmed-lumis-150-vpap-st">Lumis 150 VPAP</Link></li>
        </ul>
      </div>

    </div>

    {/* RIGHT SIDE - PROMO BANNERS */}
    <div className="w-[280px] flex flex-col gap-5">

      {/* Banner 1 */}
      <div className="rounded-xl overflow-hidden shadow-md group cursor-pointer">
        <img
          src="/images/banner1.webp" // replace with your image
          alt="Airfit N20"
          className="w-full h-[140px] object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="p-3 bg-white">
          <p className="text-sm font-semibold text-gray-800">
            Resmed AirFit™ N20
          </p>
          <button className="text-xs text-blue-600 mt-1">
            SHOP NOW →
          </button>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="rounded-xl overflow-hidden shadow-md group cursor-pointer">
        <img
          src="/images/Product5.webp" // replace with your image
          alt="AirSense 10"
          className="w-full h-[140px] object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="p-3 bg-white">
          <p className="text-sm font-semibold text-gray-800">
            AirSense™ 10 AutoSet
          </p>
          <button className="text-xs text-blue-600 mt-1">
            SHOP NOW →
          </button>
        </div>
      </div>

    </div>

  </div>
)}
          </div>

          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blogs">Blogs</Link>
 <Link href="/career">Career</Link>
        </nav>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center bg-gray-100 border border-black rounded-full px-5 h-[44px] w-[320px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-sm text-black"
          />
          <Search onClick={handleSearch} className="w-4 h-4 cursor-pointer" />
        </div>

        {/* ICONS */}
        <div className="hidden lg:flex items-center gap-6">

          <Link href="/wishlist"><Heart className="w-6 h-6" /></Link>

          <Link href="/cart">
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          <Link href="/account"><User className="w-6 h-6" /></Link>

        </div>

        {/* MOBILE */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-7 h-7" />
        </button>

      </div>
  {mobileOpen && (
  <div className="lg:hidden fixed top-[70px] left-0 w-full bg-white z-50 shadow-lg border-t">

    <div className="px-4 py-4 space-y-5">

      {/* SEARCH */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 h-[40px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search products..."
          className="flex-1 bg-transparent outline-none text-sm"
        />
        <Search onClick={handleSearch} className="w-4 h-4 text-gray-500" />
      </div>

      {/* LINKS */}
      <div className="flex flex-col text-[15px] font-medium text-gray-800">

        <Link href="/" onClick={closeMobileMenu} className="py-2 border-b">Home</Link>
        {/* PRODUCTS */}
        <div className="py-2 border-b">
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex items-center justify-between w-full"
          >
            Products
            <ChevronDown className={`w-4 h-4 ${productsOpen ? "rotate-180" : ""}`} />
          </button>

          {productsOpen && (
            <div className="mt-3 pl-3 space-y-2 text-sm text-gray-600">
              <Link href="/products/nasal-mask" onClick={closeMobileMenu}>Nasal Mask</Link>
              <Link href="/products/full-face-mask" onClick={closeMobileMenu}>Full Face Mask</Link>
              <Link href="/products/cpap-machine" onClick={closeMobileMenu}>CPAP Machines</Link>
            </div>
          )}
        </div>

        <Link href="/about" onClick={closeMobileMenu} className="py-2 border-b">About</Link>
        <Link href="/contact" onClick={closeMobileMenu} className="py-2 border-b">Contact</Link>
        <Link href="/blogs" onClick={closeMobileMenu} className="py-2">Blogs</Link>

      </div>

      {/* ICONS */}
      <div className="flex justify-around pt-4 border-t">
        <Link href="/wishlist"><Heart className="w-5 h-5" /></Link>

        <Link href="/cart" className="relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        <Link href="/account"><User className="w-5 h-5" /></Link>
      </div>

    </div>

  </div>
)}
    </header>
  )
}