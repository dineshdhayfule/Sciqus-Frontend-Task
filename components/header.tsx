"use client"

import { Menu, Settings, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/dashboard" && (pathname === "/dashboard" || pathname === "/")) {
      return true
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <h1 className="text-lg font-semibold text-foreground hidden sm:block">Platform</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/dashboard"
            className={`text-sm font-medium transition-colors ${isActive("/dashboard") && pathname === "/dashboard"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/analytics"
            className={`text-sm font-medium transition-colors ${isActive("/dashboard/analytics")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className={`text-sm font-medium transition-colors ${isActive("/dashboard/settings")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            Settings
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
