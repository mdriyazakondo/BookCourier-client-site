import React from "react";
import {
  FaTruck,
  FaClock,
  FaBox,
  FaGlobe,
  FaGift,
  FaRedo,
} from "react-icons/fa";

import Container from "../../../shared/Container/Container";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Book Delivery",
      desc: "Get your favorite books delivered safely and quickly right to your doorstep.",
      icon: FaTruck,
    },
    {
      id: 2,
      title: "Express Delivery",
      desc: "Experience lightning‑fast delivery with our express 1–2 day service.",
      icon: FaClock,
    },
    {
      id: 3,
      title: "Pickup Service",
      desc: "We will collect books directly from your location—easy and convenient.",
      icon: FaBox,
    },
    {
      id: 4,
      title: "International Shipping",
      desc: "Send books worldwide with reliable, trackable international shipping.",
      icon: FaGlobe,
    },
    {
      id: 5,
      title: "Gift Wrapping",
      desc: "Perfectly wrapped gifts with premium packaging and personalized notes.",
      icon: FaGift,
    },
    {
      id: 6,
      title: "Subscription Plans",
      desc: "Enjoy monthly book delivery plans designed for regular readers.",
      icon: FaRedo,
    },
  ];

  return (
    <Container>
      <section className="pt-14 bg-linear-to-b from-white to-green-50">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900">
              Our Premium Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide a complete book courier experience—faster, safer, and
              more convenient.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <article
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  className="group bg-white border border-green-100 hover:shadow-xl hover:-translate-y-1 transform transition-all rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-linear-to-br from-green-200 to-green-400 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-green-900" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                      {s.desc}
                    </p>

                    <button
                      aria-label={`Learn More — ${s.title}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-700 group-hover:underline"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
