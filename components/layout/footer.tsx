import { Wallet, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"

  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Wallet className="h-6 w-6 text-purple-700" />
              <span>Naki</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The future of payments is here. Send, receive, and manage your money with blockchain technology. Created
              by team Anunakis.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://nakis-organization.gitbook.io/nakis-organization-docs"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href={GITHUB_URL}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-muted-foreground hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Naki by Anunakis. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href={GITHUB_URL} target="_blank" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

