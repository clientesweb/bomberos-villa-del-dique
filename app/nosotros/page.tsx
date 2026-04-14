import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros - Bomberos Voluntarios Villa del Dique",
  description:
    "Conoce la historia de los Bomberos Voluntarios de Villa del Dique desde 1986. Nuestra institución, equipos, personal y compromiso con la comunidad.",
  keywords: "bomberos voluntarios, villa del dique, historia, institución, cuerpo activo, equipos, capacitación",
  openGraph: {
    title: "Nosotros - Bomberos Voluntarios Villa del Dique",
    description:
      "Conoce la historia de los Bomberos Voluntarios de Villa del Dique desde 1986. Nuestra institución, equipos, personal y compromiso con la comunidad.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar/nosotros",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-nosotros-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Nosotros - Bomberos Voluntarios Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros - Bomberos Voluntarios Villa del Dique",
    description: "Conoce la historia de los Bomberos Voluntarios de Villa del Dique desde 1986.",
    images: ["/images/og-image-nosotros-bomberos-voluntarios-vdd.jpg"],
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

const equipamiento = [
  { cantidad: "4", descripcion: "Unidades livianas (2 de ataque rápido y transporte)" },
  { cantidad: "4", descripcion: "Unidades pesadas (estructural, forestales, desagotes)" },
  { cantidad: "1", descripcion: "Embarcación semi-rígido" },
  { cantidad: "29", descripcion: "Bomberos en el Cuerpo Activo" },
  { cantidad: "4", descripcion: "Oficiales" },
]

const capacitaciones = [
  "Incendios forestales",
  "Incendio estructural",
  "Rescate en altura",
  "Rescate acuático",
  "Rescate vehicular",
]

const galleryImages = [
  { src: "/images/nosotros-1.webp", alt: "Grupo completo de Bomberos Voluntarios Villa del Dique" },
  { src: "/images/nosotros-2.webp", alt: "Equipo de competencia con trofeo de segundo puesto" },
  { src: "/images/nosotros-3.webp", alt: "Bomberos en operativo de emergencia" },
  { src: "/images/nosotros-4.webp", alt: "Bomberos en uniforme con cascos y equipamiento" },
  { src: "/images/nosotros-5.webp", alt: "Bomberos con trofeo en competencia" },
  { src: "/images/nosotros-6.webp", alt: "Celebrando segundo puesto en olimpíadas bomberiles" },
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
              DESDE 1986
            </p>
            <h1 className="font-anton text-[13vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] text-foreground leading-[0.9] sm:leading-[0.95]">
              <span className="block">NUESTRA</span>
              <span className="block text-primary">HISTORIA</span>
            </h1>
          </div>
        </section>

        {/* Historia - Parte 1 */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
              <div>
                <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  LOS INICIOS
                </p>
                <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-8">
                  16 DE OCTUBRE DE 1986
                </h2>
              </div>
              <div className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4 sm:space-y-6">
                <p>
                  Nuestra Institución fue inaugurada el día <strong className="text-foreground">16 de Octubre 
                  del año 1986</strong>, con una cantidad de veinte bomberos aproximadamente, los cuales 
                  eran en su mayoría empleados municipales.
                </p>
                <p>
                  Su primer Jefe fue <strong className="text-foreground">Crio. Giménez Nelson Osvaldo</strong> y 
                  su primer Presidente de Comisión Directiva fue el <strong className="text-foreground">Sr. López Carlos</strong>.
                </p>
                <p>
                  El primer vehículo liviano fue un rastreador y el primer camión fue un Ford 600.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipamiento */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
              RECURSOS
            </p>
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-background mb-8 sm:mb-12">
              EQUIPAMIENTO ACTUAL
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {equipamiento.map((item, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 sm:pl-6">
                  <p className="font-anton text-3xl sm:text-4xl md:text-5xl text-primary mb-1 sm:mb-2">{item.cantidad}</p>
                  <p className="font-poppins text-xs sm:text-sm text-background/70 leading-snug">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financiamiento y Capacitacion */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
              {/* Financiamiento */}
              <div>
                <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  FINANCIAMIENTO
                </p>
                <h2 className="font-anton text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6">
                  SUBSIDIOS Y RECURSOS
                </h2>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Nuestra institución recibe un subsidio Nacional y un subsidio Provincial por año, 
                  destinados a gastos operativos de seguro del personal, flota automotriz y gastos 
                  fijos como luz, internet, teléfono, combustibles, aceites y mejoras edilicias y automotoras.
                </p>
              </div>

              {/* Capacitacion */}
              <div>
              <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                FORMACIÓN
              </p>
            <h2 className="font-anton text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6">
              CAPACITACIÓN CONTINUA
            </h2>
                <div className="space-y-2 sm:space-y-3">
                  {capacitaciones.map((cap, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4">
                      <span className="font-anton text-sm sm:text-base text-primary">{String(index + 1).padStart(2, '0')}</span>
                      <span className="font-poppins text-sm sm:text-base text-muted-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional y Brigadas */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
              <div>
                <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  REGIONAL 7
                </p>
            <h2 className="font-anton text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6">
              FEDERACIÓN DE BOMBEROS
            </h2>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed">
                  El Jefe del Cuerpo Activo cumple funciones como Sub Coordinador de la Regional 7, 
                  una de las doce regionales pertenecientes a la Federación de Bomberos de la Provincia de Córdoba.
                </p>
              </div>
              <div>
                <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  BRIGADAS ESPECIALES
                </p>
                <h2 className="font-anton text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6">
                  U.S.A.R. ARG. 10
                </h2>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Contamos con personal en la Brigada U.S.A.R. Arg. 10 de la Federación de Bomberos 
                  de la Provincia de Córdoba, y en los Departamentos de Socorrismo, Rescate Vehicular 
                  y Rescate Acuático de la Regional 7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-anton text-lg sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-tight mb-5 sm:mb-8">
              &ldquo;ESTAMOS PARA RESGUARDAR VIDAS Y BIENES DE NUESTROS VECINOS. 
              HACEMOS EL BIEN SIN MIRAR A QUIEN.&rdquo;
            </blockquote>
            <p className="font-poppins text-xs sm:text-base text-primary-foreground/70 leading-relaxed">
              De donde todo el mundo corre, nosotros vamos. El bombero tiene una vocación de servicio 
              que con palabras no se puede explicar. Somos voluntarios y la mejor paga para nosotros 
              es un MUCHAS GRACIAS.
            </p>
          </div>
        </section>

        {/* Necesidades */}
        <section className="py-12 sm:py-20 px-5 sm:px-6 lg:px-12 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center">
              <div>
                <p className="font-poppins text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  PROYECTOS
                </p>
                <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
                  NECESIDADES ACTUALES
                </h2>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  Actualmente nos encontramos en el inicio de la obra de nuevos vestuarios, realizada 
                  con aporte de la Provincia y fondos propios, junto a eventos solidarios.
                </p>
                <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed">
                  A corto plazo, necesitamos: nuevas unidades pesadas, camión forestal, camión cisterna 
                  y renovación de equipos para rescate acuático y en altura.
                </p>
              </div>
              <div className="bg-foreground text-background p-6 sm:p-8 md:p-10">
                <p className="font-poppins text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
                  TU AYUDA ES VITAL
                </p>
                <p className="font-anton text-xl sm:text-2xl text-background mb-4 sm:mb-6">
                  CADA DONACIÓN CUENTA
                </p>
                <p className="font-poppins text-sm sm:text-base text-background/70 mb-6 sm:mb-8 leading-relaxed">
                  Con tu aporte podemos seguir equipándonos y capacitándonos para proteger a nuestra comunidad.
                </p>
                <a 
                  href="/socios"
                  className="inline-flex items-center justify-center w-full py-3 sm:py-4 bg-primary text-primary-foreground font-poppins text-xs sm:text-sm font-medium tracking-wider hover:bg-primary/90 active:bg-primary/80 transition-colors"
                >
                  DONAR AHORA
                </a>
              </div>
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
              NUESTRA HISTORIA EN IMÁGENES
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
