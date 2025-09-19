import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cuerpo Activo - Bomberos Voluntarios Villa del Dique",
  description:
    "Conocé a nuestro Cuerpo Activo: jefatura, suboficiales, bomberos y consejo asesor. 35+ bomberos comprometidos con la seguridad de Villa del Dique.",
  keywords: "cuerpo activo, bomberos, jefatura, suboficiales, villa del dique, personal, equipo",
  openGraph: {
    title: "Cuerpo Activo - Bomberos Voluntarios Villa del Dique",
    description:
      "Conocé a nuestro Cuerpo Activo: jefatura, suboficiales, bomberos y consejo asesor. 35+ bomberos comprometidos con la seguridad de Villa del Dique.",
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
    description: "Conocé a nuestro Cuerpo Activo: 35+ bomberos comprometidos con la seguridad de Villa del Dique.",
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

export default function CuerpoActivoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-anton text-center text-[#c12d2c] mb-8">CUERPO ACTIVO</h1>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              {/* Jefatura */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-4 border-b-2 border-red-200 pb-2">JEFATURA</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800">Jefe Cuerpo Activo</h3>
                    <p className="text-gray-700">Sgto. Acuña Uriel</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800">Sub Jefe Cuerpo Activo</h3>
                    <p className="text-gray-700">Sgto. Villafañe Eduardo</p>
                  </div>
                </div>
              </div>

              {/* Suboficiales */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-4 border-b-2 border-red-200 pb-2">SUBOFICIALES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Sub Of. Mayor: Acuña Ariel</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Sub Of. Ppal.: Sanchez Germán</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Sgto.: Rivarola Federico</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Cabo 1°: Peralta Carla</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Cabo 1°: Acuña Francisco</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Cabo: Marín Marcos</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Cabo: Moyano Matías</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Cabo: Acuña Jorge</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium">Cabo: Romero Brenda</p>
                  </div>
                </div>
              </div>

              {/* Bomberos */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-4 border-b-2 border-red-200 pb-2">BOMBEROS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
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
                  ].map((bombero, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-700">{bombero}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consejo Asesor */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-4 border-b-2 border-red-200 pb-2">
                  CONSEJO ASESOR
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium">Crio.: Torres Claudio</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium">Sub Crio.: Vogel Esteban</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium">Sub Crio.: Barrera Fabián</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium">Of. Ayte.: Coria Sebastián</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium">Sub Of. Mayor: Acuña Ariel</p>
                  </div>
                </div>
              </div>

              {/* Cuerpo Auxiliar */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-4 border-b-2 border-red-200 pb-2">
                  CUERPO AUXILIAR
                </h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-medium">Cabo 1°: Chanquia Verónica</p>
                </div>
              </div>
            </div>

            {/* Video and Photos Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-anton text-[#c12d2c] mb-6 text-center">GALERÍA MULTIMEDIA</h2>

              {/* Video Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Video del Cuerpo Activo</h3>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
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

              {/* Photos Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fotos del Cuerpo Activo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ImageModal
                    src="/images/cuerpo-activo-1.webp"
                    alt="Grupo completo del Cuerpo Activo en uniforme deportivo"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <ImageModal
                    src="/images/cuerpo-activo-2.webp"
                    alt="Bomberos en equipo completo de protección durante entrenamiento"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <ImageModal
                    src="/images/cuerpo-activo-3.webp"
                    alt="Bomberas voluntarias en equipo de protección completo"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <ImageModal
                    src="/images/cuerpo-activo-4.webp"
                    alt="Cuerpo Activo en la Federación de Bomberos Voluntarios de Córdoba"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <ImageModal
                    src="/images/cuerpo-activo-5.webp"
                    alt="Foto grupal nocturna del Cuerpo Activo en el cuartel"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <ImageModal
                    src="/images/cuerpo-activo-6.webp"
                    alt="Bombero voluntario con trofeo en competencia"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
