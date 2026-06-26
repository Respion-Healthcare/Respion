"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  HeartHandshake,
  Award,
  TrendingUp,
  Stethoscope,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Upload,
  Mail,
} from "lucide-react";

export default function CareersPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const openings = [
    {
      title: "Sales Executive",
      location: "Bhubaneswar",
      type: "Full Time",
      icon: Briefcase,
    },
    {
      title: "Clinical Application Specialist",
      location: "Bangalore",
      type: "Full Time",
      icon: Stethoscope,
    },
    {
      title: "Service Engineer",
      location: "Kolkata",
      type: "Full Time",
      icon: Award,
    },
    {
      title: "Customer Support Executive",
      location: "Remote",
      type: "Full Time",
      icon: Users,
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Grow with one of India's fastest-growing respiratory healthcare companies.",
    },
    {
      icon: HeartHandshake,
      title: "Positive Culture",
      description: "Collaborative environment with experienced healthcare professionals.",
    },
    {
      icon: Award,
      title: "Performance Rewards",
      description: "Recognition and rewards for outstanding performance.",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work alongside talented people who love what they do.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">

<section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-32 pb-24">

  {/* Background Blur */}
  <div className="absolute inset-0">
    <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70" />
    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-3xl opacity-60" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-5 py-2 text-sm font-semibold tracking-wide">
          CAREERS AT RESPION HEALTHCARE
        </span>

        <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Build a Career
          <span className="text-blue-600"> That Makes a Difference</span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
          At Respion Healthcare, we're committed to improving lives through
          respiratory care solutions. Join our growing team and contribute to
          meaningful healthcare innovations across India.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <a
            href="#jobs"
            className="rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            Explore Jobs
          </a>

          <a
            href="#apply"
            className="rounded-full border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-50 transition"
          >
            Apply Now
          </a>

        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">8+</h2>
            <p className="mt-2 text-gray-500">
              Branch Locations
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">20+</h2>
            <p className="mt-2 text-gray-500">
              Open Positions
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">100%</h2>
            <p className="mt-2 text-gray-500">
              Growth Focused
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="bg-white rounded-[32px] border border-gray-200 shadow-xl p-10">

        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why Work With Us?
        </h2>

        <div className="space-y-6">

          {[
            "Work with India's leading respiratory healthcare company",
            "Career development and continuous learning",
            "Competitive salary & performance incentives",
            "Professional and collaborative work culture",
            "Hands-on exposure to advanced medical devices",
            "Opportunity to make a positive impact on patient care",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-4 items-start"
            >
              <CheckCircle className="text-blue-600 mt-1 w-6 h-6 flex-shrink-0" />

              <p className="text-gray-600 leading-7">
                {item}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-100 p-6">

          <h3 className="font-bold text-gray-900">
            Currently Hiring
          </h3>

          <div className="mt-5 space-y-3">

            {[
              "Sales Executive",
              "Biomedical Service Engineer",
              "Clinical Application Specialist",
              "Customer Support Executive",
              "Digital Marketing Executive",
            ].map((job) => (
              <div
                key={job}
                className="flex justify-between items-center"
              >
                <span className="text-gray-700">
                  {job}
                </span>

                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}