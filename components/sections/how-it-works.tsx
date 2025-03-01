export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Create an Account",
      description: "Sign up in seconds with just your email and phone number. No complicated setup required.",
    },
    {
      number: 2,
      title: "Add Funds",
      description: "Connect your bank account, debit card, or add cryptocurrency directly to your wallet.",
    },
    {
      number: 3,
      title: "Send & Receive",
      description: "Transfer money instantly to friends and family using their username, phone number, or NFC.",
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Fast, and Secure</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our app combines the ease of traditional payment apps with the security and efficiency of blockchain
              technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

