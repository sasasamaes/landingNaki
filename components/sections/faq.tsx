import { ChevronRight } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "What is USDC and why do you use it?",
      answer:
        "USDC is a stablecoin that's pegged to the US dollar, meaning 1 USDC = $1 USD. We use it because it combines the stability of the dollar with the speed and security of blockchain technology.",
    },
    {
      question: "How secure is my money?",
      answer:
        "Very secure! We use Privy for embedded wallet management, which provides enterprise-grade security. Your funds are protected by blockchain technology and modern encryption standards.",
    },
    {
      question: "Are there any fees?",
      answer:
        "Basic transfers between users are free. There's a small fee for fiat-to-USDC conversion (typically 1%) and for withdrawals to external bank accounts.",
    },
    {
      question: "Do I need to understand blockchain to use the app?",
      answer:
        "Not at all! We've designed the app to be as simple as Venmo or Cash App. All the blockchain technology works behind the scenes - you just send and receive money as usual.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about our blockchain payment app.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{faq.question}</h3>
                <ChevronRight className="h-5 w-5" />
              </div>
              <div className="mt-2">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

