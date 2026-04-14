import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comision Directiva - Bomberos Voluntarios Villa del Dique",
  description:
    "Conoce a la Comisión Directiva de los Bomberos Voluntarios de Villa del Dique. Autoridades principales, vocales titulares y miembros que administran nuestra institución.",
  keywords:
    "comisión directiva, autoridades, presidente, tesorera, vocales, bomberos voluntarios, villa del dique, administración",
  openGraph: {
    title: "Comision Directiva - Bomberos Voluntarios Villa del Dique",
    description:
      "Conoce a la Comisión Directiva de los Bomberos Voluntarios de Villa del Dique. Autoridades principales, vocales titulares y miembros que administran nuestra institución.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar/comision-directiva",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-comision-directiva-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Comision Directiva - Bomberos Voluntarios Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comision Directiva - Bomberos Voluntarios Villa del Dique",
    description: "Conoce a la Comisión Directiva que administra nuestra institución desde 1986.",
    images: ["/images/og-image-comision-directiva-bomberos-voluntarios-vdd.jpg"],
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

const autoridadesPrincipales = [
  { cargo: "Presidente", nombre: "Ortiz Rodríguez María del Luján" },
  { cargo: "Secretario", nombre: "Flores Oscar Eduardo" },
  { cargo: "Tesorera", nombre: "Ramírez María Gloria" },
]

const vocalesTitulares = [
  "Grangetto Roberto",
  "Cuello Ramón Héctor",
  "Pérez Silvia Noemí",
  "Pereyra Roxana Edith",
  "García Yanina Águeda",
]

const vocalesSuplentes = [
  "Avilés Damián Andrés",
  "Tisera Norma Cecilia",
]

const revisoresTitulares = [
  "Gaspero Sandra Irene",
  "Corvalan Sonia",
  "Schmit Marcelo",
]

const funciones = [
  "Administración y gestión de recursos de la institución",
  "Organización de eventos y actividades de recaudación",
  "Coordinación con autoridades locales y provinciales",
  "Supervisión del mantenimiento de equipos e instalaciones",
  "Apoyo logístico al Cuerpo Activo",
]

export default function ComisionDirectivaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
              NUESTRA ORGANIZACION
            </p>
            <h1 className="font-anton text-[13vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] text-foreground leading-[0.9] sm:leading-[0.95] mb-5 sm:mb-8">
              <span className="block">COMISIÓN</span>
              <span className="block text-primary">DIRECTIVA</span>
            </h1>
            <p className="font-poppins text-sm sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              La Comisión Directiva es el órgano de gobierno que administra y gestiona 
              los recursos de nuestra institución desde 1986.
            </p>
          </div>
        </section>

        {/* Autoridades Principales */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              01
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              AUTORIDADES PRINCIPALES
            </h2>
            <div className="grid sm:grid-cols-3 gap-px bg-border">
              {autoridadesPrincipales.map((autoridad, index) => (
                <div key={index} className="bg-background p-5 sm:p-8">
                  <p className="font-poppins text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-2 sm:mb-3">
                    {autoridad.cargo.toUpperCase()}
                  </p>
                  <p className="font-anton text-base sm:text-xl text-foreground leading-tight">
                    {autoridad.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vocales Titulares */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              02
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              VOCALES TITULARES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {vocalesTitulares.map((vocal, index) => (
                <div key={index} className="bg-background p-4 sm:p-6 border-l-2 border-primary">
                  <p className="font-poppins text-sm sm:text-base text-foreground">{vocal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vocales Suplentes */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              03
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              VOCALES SUPLENTES
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {vocalesSuplentes.map((vocal, index) => (
                <div key={index} className="bg-secondary p-4 sm:p-6 border-l-2 border-muted-foreground">
                  <p className="font-poppins text-sm sm:text-base text-foreground">{vocal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revisores de Cuenta */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              04
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              FUNCIONES DE LA COMISIÓN
            </h2>
            
            <div className="mb-6 sm:mb-8">
              <p className="font-poppins text-[10px] sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-3 sm:mb-4">
                TITULARES
              </p>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                {revisoresTitulares.map((revisor, index) => (
                  <div key={index} className="bg-background p-4 sm:p-6 border-l-2 border-primary">
                    <p className="font-poppins text-sm sm:text-base text-foreground">{revisor}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-poppins text-[10px] sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-3 sm:mb-4">
                SUPLENTE
              </p>
              <div className="bg-background p-4 sm:p-6 border-l-2 border-muted-foreground max-w-sm">
                <p className="font-poppins text-sm sm:text-base text-foreground">Carolina Aviles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Funciones */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              RESPONSABILIDADES
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-background mb-8 sm:mb-12">
              FUNCIONES DE LA COMISION
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {funciones.map((funcion, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="font-anton text-primary text-base sm:text-xl flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="font-poppins text-sm sm:text-base text-background/80 leading-relaxed">
                    {funcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
