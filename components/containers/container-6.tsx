"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Container6() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = [
    { name: "Sarah Chen", role: "Product Manager", text: "Incredible platform that transformed our workflow." },
    { name: "Marcus Johnson", role: "Data Analyst", text: "The analytics tools are unmatched in the industry." },
    { name: "Emily Rodriguez", role: "CTO", text: "Best integration with our existing systems." },
    { name: "Alex Patel", role: "Director", text: "Support team is responsive and knowledgeable." },
  ]

  return (
    <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-sm font-medium text-foreground mb-3 italic">"{testimonials[currentSlide].text}"</p>
      <p className="text-sm font-semibold text-foreground mb-1">{testimonials[currentSlide].name}</p>
      <p className="text-xs text-muted-foreground mb-4">{testimonials[currentSlide].role}</p>

      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length)}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-xs text-muted-foreground">
          {currentSlide + 1} / {testimonials.length}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentSlide((p) => (p + 1) % testimonials.length)}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}
