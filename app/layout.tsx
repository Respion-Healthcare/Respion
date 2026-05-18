import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://Respion.in"),

  title: {
    default: "Respion | CPAP, BiPAP & Sleep Apnea Machines India",
    template: "%s | Respion",
  },

  description:
    "Respion provides CPAP machines, BiPAP machines, oxygen concentrators and sleep apnea equipment online in India.",

  keywords: [
    "CPAP Machine India",
    "BiPAP Machine India",
    "Sleep Apnea Machine",
    "Oxygen Concentrator India",
    "Respion",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Respion - CPAP & BiPAP Machines",
    description:
      "Buy CPAP, BiPAP machines and sleep apnea equipment online in India.",
    url: "https://Respion.in",
    siteName: "Respion",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-91XR73J4XT"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-91XR73J4XT');
  `}
</Script>
      </head>

      <body className="m-0 p-0">
        <CartProvider>
          <Header />

          <div className="pt-[70px] lg:pt-[95px]">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}