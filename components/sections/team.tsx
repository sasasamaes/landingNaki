import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
  github: string
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Francisco Campos Diaz",
      role: "Full Stack Developer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fran-MyATmuUD98py9HnhRu3eAvNhzmoRhw.jpeg",
      github: "https://github.com/sasasamaes",
    },
    {
      name: "Anouk Rímola",
      role: "Blockchain Developer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anouk-5V83ymg1PWem8kOMpiuqpxCf22d0be.png",
      github: "https://github.com/AnoukRImola",
    },
    {
      name: "Ruben Abarca",
      role: "Web3 Developer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ruben-AekwL5DLBb5icxHC73J7AJBujqjQfJ.png",
      github: "https://github.com/espaciofuturoio",
    },
  ]

  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Anunakis</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented team behind Naki, building the future of blockchain payments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative flex flex-col items-center space-y-4">
              <div className="relative h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
              <Link
                href={member.github}
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

