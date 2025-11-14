import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { ActiveCorpsSection } from "@/components/active-corps-section"
import { NewsSection } from "@/components/news-section"
import { CollaborationBanner } from "@/components/collaboration-banner"
import { Footer } from "@/components/footer"
// import { AnnouncementModal } from "@/components/announcement-modal" // Disabled announcement modal temporarily

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bomberos Voluntarios Villa del Dique - Protegiendo Vidas desde 1986",
  description:
    "Asociación de Bomberos Voluntarios de Villa del Dique, Córdoba. Servicio de emergencias 24/7. Rescate, incendios forestales y estructurales. Tel: (03546) 497497. Desde 1986 al servicio de la comunidad.",
  keywords: [
    "bomberos voluntarios villa del dique",
    "emergencias villa del dique",
    "bomberos córdoba",
    "rescate villa del dique",
    "incendios forestales",
    "emergencias 24/7",
    "bomberos argentina",
    "servicio emergencias córdoba",
    "rescate acuático",
    "bomberos voluntarios córdoba",
  ],
  openGraph: {
    title: "Bomberos Voluntarios Villa del Dique - Protegiendo Vidas desde 1986",
    description:
      "Servicio de emergencias 24/7 en Villa del Dique, Córdoba. Rescate, incendios forestales y estructurales. Desde 1986 al servicio de la comunidad.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Bomberos Voluntarios Villa del Dique - Inicio",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bomberos Voluntarios Villa del Dique",
    description: "Servicio de emergencias 24/7 en Villa del Dique, Córdoba. Desde 1986 protegiendo vidas.",
    images: ["/images/og-image-bomberos-voluntarios-vdd.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.bomberosvoluntariosvilladeldique.com.ar",
  },
}

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
