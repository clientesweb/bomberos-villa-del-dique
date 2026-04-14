import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cuerpo Activo - Bomberos Voluntarios Villa del Dique",
  description:
    "Conoce a nuestro Cuerpo Activo: jefatura, suboficiales, bomberos y consejo asesor. 35+ bomberos comprometidos con la seguridad de Villa del Dique.",
  keywords: "cuerpo activo, bomberos, jefatura, suboficiales, villa del dique, personal, equipo",
  openGraph: {
    title: "Cuerpo Activo - Bomberos Voluntarios Villa del Dique",
    description:
      "Conoce a nuestro Cuerpo Activo: jefatura, suboficiales, bomberos y consejo asesor. 35+ bomberos comprometidos con la seguridad de Villa del Dique.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar/cuerpo-activo",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-cuerpo-activo-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Cuerpo Activo - Bomberos Voluntarios Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuerpo Activo - Bomberos Voluntarios Villa del Dique",
    description: "Conoce a nuestro Cuerpo Activo: 35+ bomberos comprometidos con la seguridad de Villa del Dique.",
    images: ["/images/og-image-cuerpo-activo-bomberos-voluntarios-vdd.jpg"],
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

const jefatura = [
  { cargo: "Jefe Cuerpo Activo", nombre: "Sgto. Acuña Uriel" },
  { cargo: "Sub Jefe Cuerpo Activo", nombre: "Sgto. Villafañe Eduardo" },
]

const suboficiales = [
  "Sub Of. Mayor: Acuña Ariel",
  "Sub Of. Ppal.: Sánchez Germán",
  "Sgto.: Rivarola Federico",
  "Cabo 1ro: Peralta Carla",
  "Cabo 1ro: Acuña Francisco",
  "Cabo: Marín Marcos",
  "Cabo: Moyano Matías",
  "Cabo: Acuña Jorge",
  "Cabo: Romero Brenda",
]

const bomberos = [
  "B.V. Peralta Tomás",
  "B.V. Cabanillas Emanuel",
  "B.V. Álvarez Pablo",
  "B.V. Martínez Florencia",
  "B.V. Bustos Facundo",
  "B.V. Coria Cintia",
  "B.V. Ruiz Facundo",
  "B.V. Oliva Micaela",
  "B.V. Overoffe Samira",
  "B.V. Peralta Facundo",
  "B.V. Peralta Guadalupe",
  "B.V. Acuña Yamil",
  "B.V. Palacios Jonathan",
  "B.V. Daghero Vanina",
  "B.V. Olivares Constanza",
  "B.V. Vieyra Sasha",
]

const consejoAsesor = [
  "Crio.: Torres Claudio",
  "Sub Crio.: Vogel Esteban",
  "Sub Crio.: Barrera Fabián",
  "Of. Ayte.: Coria Sebastián",
  "Sub Of. Mayor: Acuña Ariel",
]

const galleryImages = [
  { src: "/images/cuerpo-activo-1.webp", alt: "Grupo completo del Cuerpo Activo en uniforme deportivo" },
  { src: "/images/cuerpo-activo-2.webp", alt: "Bomberos en equipo completo de protección durante entrenamiento" },
  { src: "/images/cuerpo-activo-3.webp", alt: "Bomberas voluntarias en equipo de protección completo" },
  { src: "/images/cuerpo-activo-4.webp", alt: "Cuerpo Activo en la Federación de Bomberos Voluntarios de Córdoba" },
  { src: "/images/cuerpo-activo-5.webp", alt: "Foto grupal nocturna del Cuerpo Activo en el cuartel" },
  { src: "/images/cuerpo-activo-6.webp", alt: "Bombero voluntario con trofeo en competencia" },
]

export default function CuerpoActivoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
              NUESTRO EQUIPO
            </p>
            <h1 className="font-anton text-[13vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] text-foreground leading-[0.9] sm:leading-[0.95] mb-5 sm:mb-8">
              <span className="block">CUERPO</span>
              <span className="block text-primary">ACTIVO</span>
            </h1>
            <p className="font-poppins text-sm sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Más de 35 bomberos comprometidos con la seguridad de Villa del Dique. 
              Capacitados y disponibles las 24 horas del día, los 365 días del año.
            </p>
          </div>
        </section>

        {/* Jefatura */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              01
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-background mb-8 sm:mb-12">
              JEFATURA
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-background/20">
              {jefatura.map((miembro, index) => (
                <div key={index} className="bg-foreground p-5 sm:p-8 md:p-10">
                  <p className="font-poppins text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-background/50 mb-2 sm:mb-3">
                    {miembro.cargo.toUpperCase()}
                  </p>
                  <p className="font-anton text-xl sm:text-2xl text-background">
                    {miembro.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suboficiales */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              02
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              SUBOFICIALES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {suboficiales.map((suboficial, index) => (
                <div key={index} className="bg-secondary p-4 sm:p-5 border-l-2 border-primary">
                  <p className="font-poppins text-xs sm:text-sm text-foreground">{suboficial}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bomberos */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              03
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              BOMBEROS VOLUNTARIOS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {bomberos.map((bombero, index) => (
                <div key={index} className="bg-background p-3 sm:p-4">
                  <p className="font-poppins text-xs sm:text-sm text-foreground">{bombero}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consejo Asesor */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              04
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              CONSEJO ASESOR
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {consejoAsesor.map((miembro, index) => (
                <div key={index} className="bg-secondary p-4 sm:p-5 border-l-2 border-muted-foreground">
                  <p className="font-poppins text-xs sm:text-sm text-foreground">{miembro}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cuerpo Auxiliar */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              05
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              CUERPO AUXILIAR
            </h2>
              <div className="bg-background p-4 sm:p-6 border-l-2 border-primary max-w-sm">
              <p className="font-poppins text-sm sm:text-base text-foreground">Cabo 1ro: Chanquía Verónica</p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              MULTIMEDIA
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              VIDEO DEL CUERPO ACTIVO
            </h2>
            <div className="aspect-video bg-foreground overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/images/portada-video-cuerpo-activo.webp"
                preload="metadata"
              >
                <source src="/videos/cuerpo-activo.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-foreground">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              GALERIA
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-background mb-8 sm:mb-12">
              FOTOS DEL EQUIPO
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
              {galleryImages.map((image, index) => (
                <ImageModal
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
