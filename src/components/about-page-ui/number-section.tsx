"use client"

import React from "react"
import { NumberTicker } from "@/components/ui/number-ticker"

export default function NumberSection() {
  const stats = [
    { value: 60, suffix: "+", label: "Happy customers" },
    { value: 8, suffix: "K+", label: "Hours spent on craft" },
    { value: 4.6, suffix: "", label: "Review rate", decimalPlaces: 1 },
  ]

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-5xl flex justify-center gap-16 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center"
          >
            <h3
              className="text-4xl font-bold md:text-5xl
              bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100
              bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimalPlaces ?? 0}
              />
              {stat.suffix}
            </h3>
            <p
              className="mt-2 text-sm
              bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100
              bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
