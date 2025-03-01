import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const GITHUB_URL = "https://github.com/AnunnakisLabs/nakiWallet"

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-700 to-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Send Money Instantly with Blockchain Technology
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                A Venmo-style payment app powered by blockchain, with embedded wallets and seamless fiat-to-USDC
                conversion. Created by team Anunakis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 w-full sm:w-auto">
                Download App <Download className="ml-2 h-4 w-4 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto inline-flex items-center"
                asChild
              >
                <Link href={GITHUB_URL} target="_blank">
                  <Github className="mr-2 h-4 w-4 shrink-0" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative h-[500px] w-[250px] sm:h-[600px] sm:w-[300px] overflow-hidden rounded-[40px] border-[8px] border-black bg-black shadow-xl">
              <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0201.PNG-rNPnt0BmiC7NIhuwAaC1o7miX9rQAF.png"
                  alt="App Home Screen"
                  width={300}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute top-0 inset-x-0 h-6 w-40 mx-auto rounded-b-2xl bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

