import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Container2() {
  const features = [
    "Real-time data synchronization",
    "Advanced analytics dashboard",
    "Custom report generation",
    "API access and webhooks",
  ]

  return (
    <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-foreground mb-4">Platform Features</h2>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">{feature}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
