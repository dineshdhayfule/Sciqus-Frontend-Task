"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="grid gap-6 p-4 md:p-6 max-w-2xl">
        <FadeIn>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
        </FadeIn>

        {/* Account Settings */}
        <FadeIn delay={0.1}>
          <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <Input placeholder="John Doe" className="bg-background border-input text-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input placeholder="john@example.com" className="bg-background border-input text-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company" className="bg-background border-input text-foreground" />
              </div>
              <Button className="bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground mt-4">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Notification Preferences */}
        <FadeIn delay={0.2}>
          <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Control how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Email Notifications", description: "Receive updates via email" },
                { label: "Push Notifications", description: "Get notifications on your device" },
                { label: "Marketing Emails", description: "Receive special offers and updates" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <label htmlFor={`checkbox-${item.label.replace(/\s+/g, '-').toLowerCase()}`} className="cursor-pointer">
                    <input
                      id={`checkbox-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                      type="checkbox"
                      className="w-4 h-4"
                      defaultChecked
                      aria-label={item.label}
                    />
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </FadeIn>

        {/* Privacy & Security */}
        <FadeIn delay={0.3}>
          <Card className="bg-card border-card-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Change Password</label>
                <Input
                  type="password"
                  placeholder="Current password"
                  className="bg-background border-input text-foreground"
                />
                <Input type="password" placeholder="New password" className="bg-background border-input text-foreground" />
                <Input
                  type="password"
                  placeholder="Confirm password"
                  className="bg-background border-input text-foreground"
                />
              </div>
              <Button className="bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground transition-transform hover:scale-105 active:scale-95">
                Update Password
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
