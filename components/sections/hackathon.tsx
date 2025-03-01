import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HackathonSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Hackathon
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built at Celestia Mammothon</h2>
            <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Naki was developed during the Celestia Mammothon Hacker House in Costa Rica, February 2025. We're proud to
              be part of this innovative blockchain ecosystem.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%209.45.41%E2%80%AFPM-Ri4ueueOkmRqSWyLZStzq7cSt0ryf0.png"
                alt="Celestia Mammothon Hacker House Costa Rica 2025"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%209.49.52%E2%80%AFPM-pspzA3joV0LoFwjLq4xv6ZW341EDjk.png"
                alt="Celestia Mammothon Event Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="https://celestia.org"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border border-white bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 backdrop-blur-sm transition-colors"
            >
              Learn more about Celestia
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

