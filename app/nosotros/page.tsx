import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros - Bomberos Voluntarios Villa del Dique",
  description:
    "Conocé la historia de los Bomberos Voluntarios de Villa del Dique desde 1986. Nuestra institución, equipos, personal y compromiso con la comunidad.",
  keywords: "bomberos voluntarios, villa del dique, historia, institución, cuerpo activo, equipos, capacitación",
  openGraph: {
    title: "Nosotros - Bomberos Voluntarios Villa del Dique",
    description:
      "Conocé la historia de los Bomberos Voluntarios de Villa del Dique desde 1986. Nuestra institución, equipos, personal y compromiso con la comunidad.",
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
    description: "Conocé la historia de los Bomberos Voluntarios de Villa del Dique desde 1986.",
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

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-anton text-center text-[#c12d2c] mb-8">NOSOTROS</h1>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nuestra Institución fue inaugurada el día{" "}
                  <strong className="text-[#c12d2c] font-bold">16 de Octubre del año 1986</strong>, con una cantidad de
                  veinte bomberos aproximadamente, los cuales eran en su mayoría empleados municipales. Su primer Jefe
                  fue
                  <strong className="text-[#c12d2c] font-bold"> Crio. Giménez Nelson Osvaldo</strong> y su primer
                  Presidente de Comisión Directiva fue el{" "}
                  <strong className="text-[#c12d2c] font-bold">Sr. López Carlos</strong>.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  El primer vehículo liviano fue un rastreoje y el primer camión fue un Ford 600. En la actualidad
                  contamos con <strong className="text-[#c12d2c] font-bold">cuatro (4) unidades livianas</strong>, de
                  las cuales dos son de ataque rápido y de transporte de personal;{" "}
                  <strong className="text-[#c12d2c] font-bold">cuatro (4) unidades pesadas</strong>, de las cuales uno
                  (1) para incendio estructural y rescate vehicular, dos (2) para incendios forestales y uno (1) para
                  desagotes cloacales;{" "}
                  <strong className="text-[#c12d2c] font-bold">una (1) embarcación (semi-rígido)</strong>.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Contamos también con un{" "}
                  <strong className="text-[#c12d2c] font-bold">Cuerpo Activo de 29 bomberos, 4 Oficiales</strong> y un
                  Subof. Mayor en el Consejo Asesor y un Cabo 1° en Cuerpo Auxiliar.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Nuestra institución recibe un{" "}
                  <strong className="text-[#c12d2c] font-bold">subsidio Nacional y un subsidio Provincial</strong> por
                  año, destinados a gastos operativos de seguro del personal, flota automotriz y gastos fijos como luz,
                  internet, teléfono, combustibles, aceites y mejoras edilicias y automotoras.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  El Jefe del Cuerpo Activo cumple funciones como{" "}
                  <strong className="text-[#c12d2c] font-bold">Sub Coordinador de la Regional 7</strong>, una de las
                  doce regionales pertenecientes a la Federación de Bomberos de la Provincia de Córdoba.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Durante todo el año se capacita al personal en diferentes áreas:{" "}
                  <strong className="text-[#c12d2c] font-bold">
                    incendios forestales, incendio estructural, rescate en altura, rescate acuático y rescate vehicular
                  </strong>
                  . Además, contamos con personal en la{" "}
                  <strong className="text-[#c12d2c] font-bold">Brigada U.S.A.R. Arg. 10</strong> de la Federación de
                  Bomberos de la Provincia de Córdoba, y en los Departamentos de Socorrismo, Rescate Vehicular y Rescate
                  Acuático de la Regional 7.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Actualmente nos encontramos en el inicio de la obra de{" "}
                  <strong className="text-[#c12d2c] font-bold">nuevos vestuarios</strong>, realizada con aporte de la
                  Provincia y fondos propios, junto a eventos solidarios (locros, empanadas, bingos, etc.). A corto
                  plazo, necesitamos{" "}
                  <strong className="text-[#c12d2c] font-bold">
                    nuevas unidades pesadas, camión forestal, camión cisterna y renovación de equipos para rescate
                    acuático y en altura
                  </strong>
                  .
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Nuestra Institución está en{" "}
                  <strong className="text-[#c12d2c] font-bold">constante capacitación</strong> con el fin de que
                  nuestros bomberos sean cada vez más profesionales.
                </p>

                <blockquote className="border-l-4 border-[#c12d2c] pl-6 py-4 bg-red-50 rounded-r-lg">
                  <p className="text-gray-800 italic text-lg leading-relaxed">
                    <strong className="text-[#c12d2c] font-bold">
                      Estamos para resguardar vidas y bienes de nuestros vecinos.
                    </strong>{" "}
                    Hacemos el bien sin mirar a quién. De donde todo el mundo corre, nosotros vamos. El bombero tiene
                    una vocación de servicio que con palabras no se puede explicar. Somos voluntarios y la mejor paga
                    para nosotros es un <strong className="text-[#c12d2c] font-bold">MUCHAS GRACIAS</strong>.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-anton text-[#c12d2c] mb-6 text-center">GALERÍA DE FOTOS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ImageModal
                  src="/images/nosotros-1.webp"
                  alt="Grupo completo de Bomberos Voluntarios Villa del Dique en la Federación de Bomberos de Córdoba"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageModal
                  src="/images/nosotros-2.webp"
                  alt="Equipo de competencia de Bomberos Villa del Dique con trofeo de segundo puesto"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageModal
                  src="/images/nosotros-3.webp"
                  alt="Bomberos en operativo de emergencia con equipos completos"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageModal
                  src="/images/nosotros-4.webp"
                  alt="Cuatro bomberos en uniforme con cascos y equipamiento en el cuartel"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageModal
                  src="/images/nosotros-5.webp"
                  alt="Bomberos con trofeo en competencia de habilidades bomberiles"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageModal
                  src="/images/nosotros-6.webp"
                  alt="Dos bomberos celebrando segundo puesto en olimpiadas bomberiles"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
