import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, CreditCard, Building2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Socios - Bomberos Voluntarios Villa del Dique",
  description:
    "Sumate como socio de los Bomberos Voluntarios de Villa del Dique. Tu aporte mensual nos ayuda a mantener el equipamiento y seguir protegiendo a la comunidad.",
  keywords: "socios bomberos, donaciones, apoyo bomberos, cuota mensual, bomberos villa del dique, colaborar bomberos",
  openGraph: {
    title: "Socios - Bomberos Voluntarios Villa del Dique",
    description:
      "Sumate como socio de los Bomberos Voluntarios de Villa del Dique. Tu aporte mensual nos ayuda a mantener el equipamiento y seguir protegiendo a la comunidad.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar/socios",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-socios-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Socios - Bomberos Voluntarios Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socios - Bomberos Voluntarios Villa del Dique",
    description: "Sumate como socio y ayudanos a proteger a la comunidad de Villa del Dique.",
    images: ["/images/og-image-socios-bomberos-voluntarios-vdd.jpg"],
  },
}

const donationOptions = [
  {
    title: "Aporte Mensual",
    amount: "$2.000",
    description: "Contribución mensual para gastos operativos",
    link: "https://mpago.la/2moaugj",
  },
  {
    title: "Aporte Simple",
    amount: "$5.000",
    description: "Donación única para equipamiento",
    link: "https://mpago.la/18QqEn3",
  },
  {
    title: "Aporte Solidario",
    amount: "$10.000",
    description: "Ayuda para mantenimiento de unidades",
    link: "https://mpago.la/1hvsChc",
  },
  {
    title: "Aporte Especial",
    amount: "$15.000",
    description: "Contribución para mejoras edilicias",
    link: "https://mpago.la/2BSWXhw",
  },
]

const benefits = [
  "Formas parte del equipo que salva vidas",
  "Contribuís al mantenimiento del equipamiento",
  "Ayudas a sostener los gastos operativos",
  "Apoyo en mejoras edilicias del cuartel",
  "Renovación de unidades y herramientas",
  "Capacitación continua del personal",
]

export default function SociosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
              TU APORTE NOS DA FUERZA
            </p>
            <h1 className="font-anton text-[13vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] text-foreground leading-[0.9] sm:leading-[0.95] mb-5 sm:mb-8">
              <span className="block">SUMATE COMO</span>
              <span className="block text-primary">SOCIO</span>
            </h1>
            <p className="font-poppins text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Ser socio es ser parte del equipo que protege a tu familia, tu casa y tu pueblo. 
              Cuando ayudás a los bomberos, te ayudás a vos mismo.
            </p>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              POR QUÉ SER SOCIO
            </p>
            <h2 className="font-anton text-xl sm:text-2xl md:text-3xl lg:text-4xl text-background mb-8 sm:mb-12 max-w-xl leading-tight">
              CADA VEZ QUE SUENA LA SIRENA, SALIMOS TODOS
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-background/10">
              <div className="bg-foreground p-5 sm:p-8">
                <p className="font-poppins text-sm sm:text-base text-background/80 leading-relaxed">
                  Los que apagan el fuego y los que colaboran desde su casa. 
                  En cada incendio, rescate o emergencia, hay un pedacito de tu colaboración presente.
                </p>
              </div>
              <div className="bg-foreground p-5 sm:p-8">
                <p className="font-poppins text-sm sm:text-base text-background/80 leading-relaxed">
                  Un pueblo que apoya a sus bomberos, es un pueblo fuerte y solidario. 
                  Villa del Dique somos todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              TU APORTE AYUDA A
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              HACER LA DIFERENCIA
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="font-anton text-base sm:text-xl text-primary flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="font-poppins text-sm sm:text-base text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary">
                MERCADO PAGO
              </p>
            </div>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              OPCIONES DE APORTE
            </h2>
            
            {/* Mobile: Horizontal scroll */}
            <div className="sm:hidden -mx-5 px-5 mb-6">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {donationOptions.map((option, index) => (
                  <div key={index} className="flex-shrink-0 w-[240px] snap-start bg-background p-5 flex flex-col">
                    <p className="font-poppins text-[10px] tracking-[0.1em] text-muted-foreground mb-2">
                      {option.title.toUpperCase()}
                    </p>
                    <p className="font-anton text-3xl text-foreground mb-2">{option.amount}</p>
                    <p className="font-poppins text-xs text-muted-foreground mb-5 flex-grow">
                      {option.description}
                    </p>
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-foreground text-background font-poppins text-xs font-medium tracking-wider active:bg-foreground/80 transition-colors"
                    >
                      DONAR
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {donationOptions.map((option, index) => (
                <div key={index} className="bg-background p-5 sm:p-6 flex flex-col h-full">
                  <p className="font-poppins text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-2">
                    {option.title.toUpperCase()}
                  </p>
                  <p className="font-anton text-3xl sm:text-4xl text-foreground mb-2 sm:mb-3">{option.amount}</p>
                  <p className="font-poppins text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    {option.description}
                  </p>
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 bg-foreground text-background font-poppins text-xs sm:text-sm font-medium tracking-wider hover:bg-foreground/90 transition-colors"
                  >
                    DONAR
                  </a>
                </div>
              ))}
            </div>

            {/* Monto Libre */}
            <div className="mt-6 sm:mt-8 bg-primary p-5 sm:p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <p className="font-poppins text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-primary-foreground/70 mb-2">
                    MONTO LIBRE
                  </p>
                  <p className="font-anton text-xl sm:text-2xl md:text-3xl text-primary-foreground mb-2 sm:mb-3 leading-tight">
                    DONA EL MONTO QUE DESEES
                  </p>
                  <p className="font-poppins text-xs sm:text-base text-primary-foreground/80">
                    ¿Querés colaborar con otro monto? Podés hacerlo ingresando el importe que desees.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end">
                  <a
                    href="https://link.mercadopago.com.ar/donabomberosvdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-background text-foreground font-poppins text-xs sm:text-sm font-medium tracking-wider hover:bg-background/90 active:bg-background/80 transition-colors"
                  >
                    DONAR AHORA
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Transfer */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary">
                    TRANSFERENCIA BANCARIA
                  </p>
                </div>
                <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
                  DATOS PARA DEPOSITO
                </h2>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Si preferís hacer una transferencia bancaria, podés usar los siguientes datos. 
                  No olvides enviarnos el comprobante.
                </p>
              </div>

              <div className="bg-secondary p-5 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <p className="font-poppins text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-1">
                      RAZÓN SOCIAL
                    </p>
                    <p className="font-poppins text-sm sm:text-base text-foreground font-medium">
                      Asoc. de Bomberos Voluntarios Villa del Dique
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-1">
                      CUIT
                    </p>
                    <p className="font-poppins text-sm sm:text-base text-foreground font-medium">
                      30-68453063-4
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-1">
                      CBU
                    </p>
                    <p className="font-poppins text-sm sm:text-base text-foreground font-medium break-all">
                      0200333311000046034587
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-1">
                      ALIAS
                    </p>
                    <p className="font-poppins text-sm sm:text-base text-foreground font-medium">
                      BOMBEROS.VDD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-anton text-xl sm:text-2xl md:text-3xl lg:text-4xl text-background mb-4 sm:mb-6 leading-tight">
              SER SOCIO ES SER PARTE DEL EQUIPO QUE SALVA VIDAS
            </p>
            <p className="font-poppins text-xs sm:text-base text-background/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Cada aporte, por más pequeño que sea, nos ayuda a seguir cumpliendo nuestra misión 
              de proteger a la comunidad de Villa del Dique.
            </p>
            <p className="font-anton text-base sm:text-xl text-primary">
              GRACIAS POR TU COMPROMISO Y SOLIDARIDAD
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
