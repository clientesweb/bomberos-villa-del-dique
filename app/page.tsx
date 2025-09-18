import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { ActiveCorpsSection } from "@/components/active-corps-section"
import { NewsSection } from "@/components/news-section"
import { CollaborationBanner } from "@/components/collaboration-banner"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <AboutSection />
        <ActiveCorpsSection />
        <NewsSection />
        <CollaborationBanner />
      </main>
      <Footer />
    </div>
  )
}
