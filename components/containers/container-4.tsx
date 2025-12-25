import { Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Container4() {
  return (
    <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Total Users</p>
          <h2 className="text-2xl font-semibold text-foreground">2,543</h2>
        </div>
        <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center">
          <Users className="h-5 w-5 text-secondary" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">+124 this week</p>
    </Card>
  )
}
