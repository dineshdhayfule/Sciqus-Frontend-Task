"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Container1() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { title: "Revenue Growth", value: "$24.5K", change: "+12.5%" },
    { title: "Active Users", value: "12,543", change: "+8.2%" },
    { title: "Conversion Rate", value: "3.24%", change: "+2.1%" },
  ]

  return (
    <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Key Metric</p>
          <h2 className="text-2xl font-semibold text-foreground">{slides[currentSlide].title}</h2>
        </div>
        <TrendingUp className="h-5 w-5 text-accent" />
      </div>

      <div className="mb-6">
        <p className="text-3xl font-bold text-foreground mb-1">{slides[currentSlide].value}</p>
        <p className="text-sm font-medium text-accent">{slides[currentSlide].change}</p>
      </div>

      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "bg-primary w-6" : "bg-border"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Card>
  )
}
