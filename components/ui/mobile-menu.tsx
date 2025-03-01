import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationLinks } from "./navigation-links"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"

  return (
    <div className="md:hidden border-t bg-background">
      <div className="container flex flex-col py-4 space-y-4">
        <NavigationLinks className="flex flex-col space-y-4" onClick={onClose} />
        <Link
          href={GITHUB_URL}
          target="_blank"
          className="text-sm font-medium transition-colors hover:text-primary px-4 py-2 hover:bg-gray-50 rounded-lg flex items-center gap-2"
          onClick={onClose}
        >
          <Github className="h-5 w-5" />
          GitHub
        </Link>
        <div className="px-4">
          <Button className="w-full" asChild>
            <Link href="#download" onClick={onClose}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

