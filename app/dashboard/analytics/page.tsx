"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"

const analyticsData = [
  { month: "Jan", revenue: 4000, users: 2400 },
  { month: "Feb", revenue: 5200, users: 2800 },
  { month: "Mar", revenue: 6100, users: 3200 },
  { month: "Apr", revenue: 7200, users: 3800 },
  { month: "May", revenue: 8900, users: 4200 },
  { month: "Jun", revenue: 9800, users: 5100 },
]

const categoryData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 20 },
]

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"]

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="grid gap-6 p-4 md:p-6">
        <FadeIn>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">Track your performance metrics and insights</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Revenue Chart */}
          <FadeIn delay={0.1}>
            <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>

          {/* User Growth Chart */}
          <FadeIn delay={0.2}>
            <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>Active users by month</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Category Distribution */}
        <FadeIn delay={0.3}>
          <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Sales breakdown by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Key Metrics */}
        <FadeIn delay={0.4}>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Total Revenue", value: "$45,231" },
              { label: "Active Users", value: "21,845" },
              { label: "Conversion Rate", value: "3.24%" },
              { label: "Avg. Session", value: "2m 34s" },
            ].map((metric) => (
              <Card key={metric.label} className="bg-card border-card-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-2">
                  <CardDescription className="text-xs text-muted-foreground">{metric.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
