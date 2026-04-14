import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asociate - Bomberos Voluntarios Villa del Dique",
  description:
    "Sumate a los Bomberos Voluntarios de Villa del Dique. Tu aporte nos ayuda a seguir equipándonos y salvando vidas. Conoce cómo asociarte y colaborar con nuestra institución.",
  keywords: "asociate, voluntario, donaciones, colaborar, bomberos voluntarios, villa del dique, ayuda, equipamiento",
  openGraph: {
    title: "Asociate - Bomberos Voluntarios Villa del Dique",
    description:
      "Sumate a los Bomberos Voluntarios de Villa del Dique. Tu aporte nos ayuda a seguir equipándonos y salvando vidas.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar/asociate",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-asociate-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Asociate - Bomberos Voluntarios Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asociate - Bomberos Voluntarios Villa del Dique",
    description: "Tu aporte nos ayuda a seguir equipandonos y salvando vidas.",
    images: ["/images/og-image-asociate-voluntarios-vdd.jpg"],
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
}

export default function AsociatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
              FORMA PARTE
            </p>
            <h1 className="font-anton text-[13vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] text-foreground leading-[0.9] sm:leading-[0.95] mb-5 sm:mb-8">
              <span className="block">SUMATE A</span>
              <span className="block text-primary">NUESTRA FAMILIA</span>
            </h1>
            <p className="font-poppins text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Estamos trabajando en una nueva plataforma para que puedas asociarte 
              y colaborar con los Bomberos Voluntarios de Villa del Dique de manera 
              más fácil y directa.
            </p>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-center">
              {/* Left Column */}
              <div>
                <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  PROXIMAMENTE
                </p>
                <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
                  NUEVA PLATAFORMA DE SOCIOS
                </h2>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Pronto tendrás disponible toda la información sobre cómo formar parte 
                  de nuestra institución, con opciones de pago automático y beneficios 
                  exclusivos para socios.
                </p>
                <Link 
                  href="/socios"
                  className="inline-flex items-center gap-3 font-poppins text-xs sm:text-sm font-medium text-foreground hover:text-primary active:text-primary transition-colors group"
                >
                  MIENTRAS TANTO, DONA AHORA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Column - Contact Card */}
              <div className="bg-foreground text-background p-6 sm:p-8 md:p-10">
                <h3 className="font-anton text-xl sm:text-2xl mb-4 sm:mb-6">CONTACTANOS</h3>
                <p className="font-poppins text-sm sm:text-base text-background/70 mb-6 sm:mb-8 leading-relaxed">
                  Si querés asociarte o tenés alguna consulta, podés contactarnos directamente.
                </p>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/10 mb-4 sm:mb-6">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-poppins text-[10px] sm:text-xs text-background/50 mb-0.5 sm:mb-1">EMERGENCIAS</p>
                    <p className="font-anton text-lg sm:text-xl">(03546) 497497</p>
                  </div>
                </div>
                <a 
                  href="tel:03546497497"
                  className="inline-flex items-center justify-center w-full py-3 sm:py-4 bg-primary text-primary-foreground font-poppins text-xs sm:text-sm font-medium tracking-wider hover:bg-primary/90 active:bg-primary/80 transition-colors"
                >
                  LLAMAR AHORA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center">
                <p className="font-anton text-3xl sm:text-4xl md:text-5xl text-foreground mb-1 sm:mb-2">40</p>
                <p className="font-poppins text-[10px] sm:text-sm text-muted-foreground">Años de servicio</p>
              </div>
              <div className="text-center">
                <p className="font-anton text-3xl sm:text-4xl md:text-5xl text-foreground mb-1 sm:mb-2">24/7</p>
                <p className="font-poppins text-[10px] sm:text-sm text-muted-foreground">Disponibilidad</p>
              </div>
              <div className="text-center">
                <p className="font-anton text-3xl sm:text-4xl md:text-5xl text-foreground mb-1 sm:mb-2">100%</p>
                <p className="font-poppins text-[10px] sm:text-sm text-muted-foreground">Voluntarios</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-anton text-xl sm:text-3xl md:text-4xl text-primary-foreground mb-4 sm:mb-6 leading-tight">
              MIENTRAS ESPERAMOS, TU AYUDA ES VITAL
            </h2>
            <p className="font-poppins text-sm sm:text-base text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Cada donación nos permite seguir equipándonos y capacitándonos para 
              proteger a nuestra comunidad.
            </p>
            <Link
              href="/socios"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-background text-foreground font-poppins text-xs sm:text-sm font-medium tracking-wider hover:bg-background/90 active:bg-background/80 transition-colors"
            >
              VER OPCIONES DE DONACIÓN
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
