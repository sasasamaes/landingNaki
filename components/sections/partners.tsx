import Link from "next/link"
import Image from "next/image"

export function PartnersSection() {
  const partners = [
    {
      name: "Asociación Blockchain Costa Rica",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asoBlockchain.jpg-xgwtph5rUkkyLGyXXoYSyjNl6UUhtP.jpeg",
      url: "https://www.blockchaincostarica.org",
    },
    {
      name: "Dojo Coding",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dojoCoding.jpg-cDi0LmEGGf9YQjSL4ZwxksItN0N60x.jpeg",
      url: "https://dojocoding.com",
    },
    {
      name: "Cumulo.pro",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cumulo-CMH8nu5fqO8Ee511CGflWPCuL0CGW8.png",
      url: "https://cumulo.pro",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Partners</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to collaborate with leading organizations in blockchain and technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center justify-items-center">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url}
                target="_blank"
                className="relative h-24 w-full transition-transform hover:scale-105"
              >
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

