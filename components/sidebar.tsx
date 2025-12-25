"use client"

import { X, LayoutDashboard, BarChart3, Settings, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    { icon: HelpCircle, label: "Help", href: "/dashboard/help" },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard" && (pathname === "/dashboard" || pathname === "/")) return true
    if (href !== "/dashboard" && pathname.startsWith(href)) return true
    return false
  }

  // Swipe to close on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left to close
      onClose()
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out md:relative md:top-0 md:z-auto md:h-[calc(100vh-4rem)] md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          <nav className="hidden md:flex flex-col gap-2 p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${isActive(item.href)
                  ? "bg-sidebar-accent text-sidebar-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
              >
                <item.icon className="h-5 w-5 text-sidebar-primary transition-colors" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-1 p-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => onClose()}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${isActive(item.href)
                  ? "bg-sidebar-accent text-sidebar-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom section */}
          <div className="border-t border-sidebar-border p-4 mt-auto hidden md:block">
            <div className="rounded-lg bg-sidebar-accent p-4 hover:shadow-md transition-shadow">
              <p className="text-xs font-medium text-sidebar-foreground mb-2">Need help?</p>
              <p className="text-xs text-sidebar-foreground/70 mb-3">
                Check our documentation for guides and API reference.
              </p>
              <Button
                size="sm"
                className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground text-xs transition-transform hover:scale-105 active:scale-95"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
