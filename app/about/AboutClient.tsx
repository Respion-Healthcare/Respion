"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"

export default function AboutPage() {

  const [counts, setCounts] = useState({
    locations: 0,
    staff: 0,
    trust: 0,
  })

  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += 1

      if (start <= 4) setCounts((p) => ({ ...p, locations: start }))
      if (start <= 12) setCounts((p) => ({ ...p, staff: start }))
      if (start <= 3) setCounts((p) => ({ ...p, trust: start }))

      if (start > 12) clearInterval(interval)
    }, 70)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>About Respion | Sleep Therapy Experts</title>
      </Head>

      <main className="bg-[#f9fbff] overflow-hidden">

        {/* ANIMATIONS */}
        <style jsx>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fade-up {
            animation: fadeUp 0.8s ease forwards;
          }

          .glow-card {
            background: linear-gradient(145deg, #ffffff, #f2f7ff);
            box-shadow: 0 10px 40px rgba(59,130,246,0.12);
          }

          .glow-card:hover {
            box-shadow: 0 20px 70px rgba(59,130,246,0.25);
            transform: translateY(-6px);
          }
        `}</style>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center fade-up">

          <div>
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              About Respion
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Bringing Better Sleep
              <br />
              <span className="text-blue-600">to Odisha & India</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
              Founded in July 2025, Respion was created to improve respiratory healthcare in India.
              We partner with global leaders like ResMed to deliver advanced sleep therapy solutions.
              <br /><br />
              We are more than a supplier — we are a team dedicated to helping patients breathe easier and live healthier lives.
            </p>

            {/* STATS */}
            <div className="flex gap-8 mt-10 flex-wrap">

              <div>
                <h3 className="text-3xl font-bold text-blue-600">3+</h3>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">{counts.locations}</h3>
                <p className="text-sm text-gray-500">Locations</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">{counts.staff}+</h3>
                <p className="text-sm text-gray-500">Staff</p>
              </div>

            </div>

          </div>

          <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/aboutus.webp"
              alt="Respion"
              fill
              className="object-cover"
            />
          </div>

        </section>

        {/* VISION */}
        <section className="max-w-7xl mx-auto px-6 py-16 fade-up">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What Drives Us Every Day
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Our Vision",
                text: "To become the most trusted sleep therapy brand in India by making care simple and accessible.",
                icon: "🎯"
              },
              {
                title: "Our Promise",
                text: "We treat every patient with honesty, transparent pricing, and genuine guidance.",
                icon: "🤝"
              },
              {
                title: "Our Mission",
                text: "Deliver reliable respiratory solutions with fast support and long-term care.",
                icon: "💙"
              },
            ].map((item, i) => (
              <div key={i} className="glow-card border border-blue-100 rounded-2xl p-6 transition-all duration-500">

                <div className="text-3xl mb-3">{item.icon}</div>

                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </section>

      {/* BRANCHES */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Presence Across India
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              {
                city: "Bangalore",
                phone: "7077720500",
                link: "https://www.google.com/search?q=respion+healthcare+pvt+ltd+bangalore&oq=respion+&gs_lcrp=EgZjaHJvbWUqDwgBECMYJxiABBiKBRjwBTIJCAAQIxgnGPAFMg8IARAjGCcYgAQYigUY8AUyBggCEEUYOzIGCAMQRRg5Mg8IBBAAGBQYhwIYyQMYgAQyCggFEAAYkgMYgAQyDQgGEC4YrwEYxwEYgAQyBwgHEAAYgAQyCQgIEAAYChiABDIHCAkQABiABNIBCDQ3MjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
  },
              { city: "Kolkata", phone: "7077718893",
                link: "https://www.google.com/search?q=respion+healthcare+pvt+ltd+kolkata&sca_esv=ea2b02c1f07b107e&sxsrf=ANbL-n45NylTTS3Pt52SHGhADmNAhq4j0w%3A1779100878639&ei=zuwKaojiJozA4-EP8Z_LkQQ&biw=1920&bih=953&ved=0ahUKEwiIgZCf08KUAxUM4DgGHfHPMkIQ4dUDCBI&uact=5&oq=respion+healthcare+pvt+ltd+kolkata&gs_lp=Egxnd3Mtd2l6LXNlcnAiInJlc3Bpb24gaGVhbHRoY2FyZSBwdnQgbHRkIGtvbGthdGEyBRAhGKABMgUQIRigAUjwJFDmBljgHHACeAGQAQCYAYkCoAGrDqoBAzItOLgBA8gBAPgBAZgCCqACkg_CAgoQABhHGNYEGLADwgIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQHCAgoQIxiABBiKBRgnwgIEECMYJ8ICCxAuGIAEGMcBGK8BwgIKEAAYgAQYFBiHAsICBRAAGIAEwgIJEAAYFhgeGMkDwgIGEAAYFhgewgICECbCAggQABiABBiiBMICBRAAGO8FmAMAiAYBkAYJugYECAEYGZIHBTIuMC44oAeAKbIHAzItOLgH_w7CBwcwLjEuNy4yyAc_gAgB&sclient=gws-wiz-serp" },
              { city: "Odisha", phone: "9937000606", 
                link: "https://www.google.com/search?q=respion+healthcare+pvt+ltd+bhubaneswar&sca_esv=ea2b02c1f07b107e&biw=1920&bih=953&sxsrf=ANbL-n7MRZGvlMaoz4iwqsooxc4etCbxfQ%3A1779102349056&ei=jfIKasaLA4uP4-EPj-vk4QE&llpgabe=CgkvbS8wM2N6cXM&oq=respion+healthcare+pvt+ltd+&gs_lp=Egxnd3Mtd2l6LXNlcnAiG3Jlc3Bpb24gaGVhbHRoY2FyZSBwdnQgbHRkICoCCAMyBBAjGCcyChAjGIAEGIoFGCcyCxAuGIAEGMcBGK8BMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGBYYHhjJAzIGEAAYFhgeSP4XUPoIWPoIcAJ4AZABAJgBxAGgAcQBqgEDMC4xuAEByAEA-AEBmAIDoALUAcICChAAGEcY1gQYsAOYAwCIBgGQBgWSBwUyLjAuMaAH4xCyBwMyLTG4B8sBwgcDMi0zyAcMgAgB&sclient=gws-wiz-serp" },
              { city: "Ranchi", phone: "8598000606", link: "https://www.google.com/search?q=respion+healthcare+pvt+ltd+ranchi&sca_esv=ea2b02c1f07b107e&biw=1920&bih=953&sxsrf=ANbL-n4ZdVaaGvHTFGzlxZp0m1nSxqMSQg%3A1779102287406&ei=T_IKav68GIGb4-EPgvOeyQ4&oq=respion+healthcare+pvt+ltd+ranch&gs_lp=Egxnd3Mtd2l6LXNlcnAiIHJlc3Bpb24gaGVhbHRoY2FyZSBwdnQgbHRkIHJhbmNoKgIIADIKECMYgAQYigUYJzIGEAAYFhgeMgUQABjvBTIFEAAY7wUyBRAAGO8FMggQABiABBiiBEjULlCuB1j9InAFeAGQAQCYAfIBoAGmC6oBBTAuNC4zuAEByAEA-AEBmAIMoAKFDMICChAAGEcY1gQYsAPCAgQQIxgnwgILEC4YgAQYxwEYrwHCAgoQABiABBgUGIcCwgIFEAAYgATCAgkQABgWGB4YyQPCAgIQJsICCxAAGIAEGIoFGIYDwgIHECMYsAIYJ8ICDRAuGIAEGA0YxwEYrwHCAgYQABgeGA3CAhwQLhiABBgNGMcBGK8BGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYFugYGCAEQARgUkgcFNS4xLjagB-82sgcFMC4xLja4B-4LwgcHMC4zLjUuNMgHSYAIAQ&sclient=gws-wiz-serp" },
              { city: "Patna", phone: "9937127194", link: "https://www.google.com/search?q=respion+healthcare+pvt+ltd+patna&sca_esv=ea2b02c1f07b107e&biw=1920&bih=953&sxsrf=ANbL-n6r-Na32sdVH2s703XZnAu4vtFYMw%3A1779102312100&ei=aPIKarvkBeTH4-EPltaFqA8&ved=0ahUKEwi7uNPK2MKUAxXk4zgGHRZrAfUQ4dUDCBI&uact=5&oq=respion+healthcare+pvt+ltd+patna&gs_lp=Egxnd3Mtd2l6LXNlcnAiIHJlc3Bpb24gaGVhbHRoY2FyZSBwdnQgbHRkIHBhdG5hMgsQLhiABBjHARivATIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSJowUIAHWL4ZcAN4AZABAJgB0AGgAf8KqgEFMC4zLjS4AQPIAQD4AQGYAgugAvsWwgIKEAAYRxjWBBiwA8ICChAjGIAEGIoFGCfCAgQQIxgnwgIKEAAYgAQYFBiHAsICBRAAGIAEwgIJEAAYFhgeGMkDwgIGEAAYFhgewgICECbCAgsQABiABBiKBRiGA5gDAIgGAZAGBboGBggBEAEYFJIHCTMuMS42LjctMaAH9ECyBwUwLjEuNrgHvQvCBwcwLjEuOC4yyAc-gAgB&sclient=gws-wiz-serp" },
              { city: "Guwahati", phone: "7077718891", link: "https://www.google.com/search?q=respion+healthcare+pvt+ltd+guwahati&sca_esv=ea2b02c1f07b107e&biw=1920&bih=953&sxsrf=ANbL-n4hhoLaITGxfJdkSnL_PVQlNcgKtw%3A1779102508673&ei=LPMKaojeKKqVg8UPvIj7wAo&oq=respion+healthcare+pvt+ltd+gu&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXJlc3Bpb24gaGVhbHRoY2FyZSBwdnQgbHRkIGd1KgIIAjIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSM1FUKEIWN4ycAN4AZABAJgBiAKgAdYHqgEDMi00uAEByAEA-AEBmAIHoAKPCMICChAAGEcY1gQYsAPCAgoQIxiABBiKBRgnwgIKEAAYgAQYFBiHAsICBRAAGIAEwgIJEAAYFhgeGMkDwgIGEAAYFhgemAMAiAYBkAYCkgcFMy4wLjSgB4MYsgcDMi00uAf8B8IHBzAuNC4xLjLIByGACAE&sclient=gws-wiz-serp" },
              { city: "Mumbai", phone: "7077718897", link: "" },
            ].map((b, i) => (

              <a
                key={i}
                href={b.link ? b.link : `tel:${b.phone}`}
                target={b.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="border rounded-xl p-5 hover:shadow-lg transition block"
              >
                <h3 className="font-semibold">{b.city}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Click to View Location
                </p>
                <p className="text-blue-600 font-semibold">
                  📞 {b.phone}
                </p>
              </a>

            ))}

          </div>

        </div>

      </section>
      </main>
    </>
  )
}