"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent successfully ✅")

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        alert("Failed to send ❌")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong ❌")
    }
  }

  return (
    <main className="pt-[120px] min-h-screen bg-gray-100">

      {/* TOP SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          We're always eager to hear from you!
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          You can call us in working time or visit our office.
          All mails will get the response within 24 hours.
          <br />
          Love to hear from you!
        </p>

       {/* CONTACT INFO ROW */}
<div className="grid md:grid-cols-3 gap-12 mt-16 text-left">

  {/* REGISTERED ADDRESS */}
  <div className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition">
    <MapPin className="text-blue-500 w-7 h-7 mt-1 group-hover:scale-110 transition" />

    <div>
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
        Registered Address
      </p>

      <p className="text-gray-600 leading-relaxed mt-2">
        Plot No. 331 A, Saheed Nagar,
        <br />
        Bhubaneswar, Odisha 751007
      </p>

      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mt-5">
        Corporate Office
      </p>

      <p className="text-gray-600 leading-relaxed mt-2">
        702, 13th Cross Rd, 1st Phase,
        <br />
        J. P. Nagar,
        <br />
        Bengaluru, Karnataka 560078
      </p>

      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mt-5">
        Head Office
      </p>

      <p className="text-gray-600 leading-relaxed mt-2">
        1st Floor, 13/B, Flat No-3,
        <br />
        Kalighat,
        <br />
        Kolkata, West Bengal 700026
      </p>
    </div>
  </div>

  {/* CONTACT */}
  <a
    href="tel:+919937144165"
    className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition"
  >
    <Phone className="text-blue-500 w-7 h-7 mt-1 group-hover:scale-110 transition" />

    <div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        Contact
      </h3>

      <p className="text-gray-600">
        Toll Free:
        <br />
        <span className="font-medium text-gray-800 underline underline-offset-4">
          +91 9937144165
        </span>
      </p>
    </div>
  </a>

  {/* EMAIL */}
  <a
    href="mailto:enquiry@respion.in"
    className="flex items-start gap-4 group hover:bg-white p-4 rounded-xl transition"
  >
    <Mail className="text-blue-500 w-7 h-7 mt-1 group-hover:scale-110 transition" />

    <div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        Email Us
      </h3>

      <p className="text-gray-600">
        Email:
        <br />
        <span className="font-medium text-gray-800 underline underline-offset-4">
          enquiry@respion.in
        </span>
      </p>
    </div>
  </a>

</div>

{/* EMAIL DEPARTMENTS */}
<section className="py-14">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      Email Directory
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {/* HR */}
      <a
        href="mailto:hr.respion@gmail.com"
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition hover:-translate-y-1"
      >
        <Mail className="w-12 h-12 mx-auto mb-5" />

        <h3 className="text-2xl font-semibold mb-4">
          HR Enquiries
        </h3>

        <p className="text-lg break-all">
          hr.respion@gmail.com
        </p>
      </a>

      {/* SALES */}
      <a
        href="mailto:sales.respion@gmail.com"
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition hover:-translate-y-1"
      >
        <Mail className="w-12 h-12 mx-auto mb-5" />

        <h3 className="text-2xl font-semibold mb-4">
          Sales Enquiries
        </h3>

        <p className="text-lg break-all">
          sales.respion@gmail.com
        </p>
      </a>

      {/* GENERAL */}
      <a
        href="mailto:enquiry.respion@gmail.com"
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition hover:-translate-y-1"
      >
        <Mail className="w-12 h-12 mx-auto mb-5" />

        <h3 className="text-2xl font-semibold mb-4">
          General Enquiries
        </h3>

        <p className="text-lg break-all">
          enquiry.respion@gmail.com
        </p>
      </a>

    </div>
  </div>
</section>
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

      {/* FORM SECTION */}
      <section className="relative max-w-5xl mx-auto px-6 pb-28">

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 
                        w-[750px] h-[350px] 
                        bg-blue-300/40 rounded-full blur-[120px] opacity-70" />

        <div className="relative">

          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-14">
            Ask us anything here
          </h2>

          <div className="relative rounded-3xl p-[2px] 
                          bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 
                          shadow-2xl shadow-blue-300/40">

            <div className="bg-white/90 backdrop-blur-2xl 
                            rounded-3xl p-10 md:p-14">

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-4 rounded-full border border-gray-300"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-4 rounded-full border border-gray-300"
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-4 rounded-full border border-gray-300"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full p-4 rounded-full border border-gray-300"
                  />
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full p-6 rounded-2xl border border-gray-300 resize-none"
                />

                {/* BUTTON */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 
                               text-white px-12 py-4 rounded-full"
                  >
                    Send Message
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}