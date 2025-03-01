import Image from "next/image"

export function AppPreviewSection() {
  const screenshots = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0203.PNG-DozJ8uzLBwvp9oOgAprtlbvYfhsw6n.png",
      alt: "Send Money Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0205.PNG-Vkkeb26V6HnzTtDqvHKxBH8k2cEiDm.png",
      alt: "NFC Payment Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0209.PNG-eXb66PLHPTBmMqgmXpz0HaofFqLx1r.png",
      alt: "Add Money Screen",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">App Preview</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See the App in Action</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the intuitive interface and powerful features of our payment app.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 py-12 px-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative h-[400px] w-[200px] sm:h-[500px] sm:w-[250px] overflow-hidden rounded-[30px] border-[6px] border-black bg-black shadow-xl"
            >
              <Image
                src={screenshot.src || "/placeholder.svg"}
                alt={screenshot.alt}
                width={250}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

