"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { AppPreviewSection } from "@/components/sections/app-preview"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { FAQSection } from "@/components/sections/faq"
import { HackathonSection } from "@/components/sections/hackathon"
import { PartnersSection } from "@/components/sections/partners"
import { TeamSection } from "@/components/sections/team"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppPreviewSection />
        <HowItWorksSection />
        <TeamSection /> {/* Added Team Section */}
        <FAQSection />
        <HackathonSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}

