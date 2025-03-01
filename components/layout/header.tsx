"use client"

import { useState } from "react"
import { Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { Logo } from "@/components/ui/logo"
import { NavigationLinks } from "@/components/ui/navigation-links"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <NavigationLinks className="hidden md:flex gap-6" />

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={GITHUB_URL}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
          <Button asChild>
            <Link href="#download">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </header>
  )
}

