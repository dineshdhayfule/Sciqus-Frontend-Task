import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Container5() {
  return (
    <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Export Data</Button>
        <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
          View Details
        </Button>
      </div>
    </Card>
  )
}
