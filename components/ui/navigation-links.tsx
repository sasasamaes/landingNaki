import Link from "next/link"

interface NavigationLinksProps {
  className?: string
  onClick?: () => void
}

export function NavigationLinks({ className, onClick }: NavigationLinksProps) {
  return (
    <nav className={className}>
      <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary" onClick={onClick}>
        Features
      </Link>
      <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary" onClick={onClick}>
        How It Works
      </Link>
      <Link href="#team" className="text-sm font-medium transition-colors hover:text-primary" onClick={onClick}>
        Team
      </Link>
      <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary" onClick={onClick}>
        FAQ
      </Link>
      <Link
        href="https://nakis-organization.gitbook.io/nakis-organization-docs"
        target="_blank"
        className="text-sm font-medium transition-colors hover:text-primary"
        onClick={onClick}
      >
        Docs
      </Link>
    </nav>
  )
}

