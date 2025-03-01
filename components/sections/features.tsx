import { CreditCard, Send, Shield, Zap, RefreshCw, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Send,
      title: "Instant Transfers",
      description: "Send money to friends and family instantly with just a few taps.",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Add funds via debit card, bank transfer, PayPal, or cryptocurrency.",
    },
    {
      icon: Shield,
      title: "Secure Wallet",
      description: "Embedded wallet management powered by Privy for maximum security.",
    },
    {
      icon: RefreshCw,
      title: "Fiat-to-USDC Conversion",
      description: "Seamlessly convert your dollars to USDC stablecoin with Bridge API.",
    },
    {
      icon: Zap,
      title: "NFC Payments",
      description: "Send and receive money by simply tapping phones together.",
    },
    {
      icon: Users,
      title: "Social Feed",
      description: "See what your friends are buying and share your own purchases.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need in One App</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Send, receive, and manage your money with powerful blockchain technology that's as easy to use as
              traditional payment apps.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 p-3">
                <feature.icon className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

