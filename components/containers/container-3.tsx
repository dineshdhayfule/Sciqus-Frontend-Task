"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Container3() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { month: "October", value: "7,645" },
    { month: "November", value: "8,923" },
    { month: "December", value: "9,534" },
  ]

  return (
    <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-foreground mb-4">Monthly Performance</h2>
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">{slides[currentSlide].month}</p>
        <p className="text-3xl font-bold text-foreground mb-1">{slides[currentSlide].value}</p>
        <p className="text-xs text-muted-foreground">Total transactions</p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1 text-center">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-6" : "bg-border w-2"
                }`}
              />
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}
