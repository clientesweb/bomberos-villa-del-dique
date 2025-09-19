import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comisión Directiva - Bomberos Voluntarios Villa del Dique",
  description:
    "Conocé a la Comisión Directiva de los Bomberos Voluntarios de Villa del Dique. Autoridades principales, vocales titulares y miembros que administran nuestra institución.",
  keywords:
    "comisión directiva, autoridades, presidente, tesorera, vocales, bomberos voluntarios, villa del dique, administración",
  openGraph: {
    title: "Comisión Directiva - Bomberos Voluntarios Villa del Dique",
    description:
      "Conocé a la Comisión Directiva de los Bomberos Voluntarios de Villa del Dique. Autoridades principales, vocales titulares y miembros que administran nuestra institución.",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar/comision-directiva",
    siteName: "Bomberos Voluntarios Villa del Dique",
    images: [
      {
        url: "/images/og-image-comision-directiva-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Comisión Directiva - Bomberos Voluntarios Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comisión Directiva - Bomberos Voluntarios Villa del Dique",
    description: "Conocé a la Comisión Directiva que administra nuestra institución desde 1986.",
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

export default function ComisionDirectivaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-anton text-center text-[#c12d2c] mb-8">COMISIÓN DIRECTIVA</h1>

            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Presidente y Tesorera */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-6 border-b-2 border-red-200 pb-2">
                  AUTORIDADES PRINCIPALES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-[#c12d2c]">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Presidente</h3>
                    <p className="text-lg text-gray-700">Sr. Cuello Ramón</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tesorera</h3>
                    <p className="text-lg text-gray-700">Sra. Ortiz María</p>
                  </div>
                </div>
              </div>

              {/* Vocales Titulares */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-6 border-b-2 border-red-200 pb-2">
                  VOCALES TITULARES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Flores Oscar", "Grangetto Roberto", "Pérez Silvia", "Pereyra Roxana"].map((vocal, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-800">{vocal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Otros Miembros */}
              <div className="mb-8">
                <h2 className="text-2xl font-anton text-[#c12d2c] mb-6 border-b-2 border-red-200 pb-2">
                  OTROS MIEMBROS
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-center">
                    Más ocho (8) miembros en diferentes puestos dentro de la comisión.
                  </p>
                </div>
              </div>

              {/* Información adicional */}
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Funciones de la Comisión Directiva</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Administración y gestión de recursos de la institución</li>
                  <li>• Organización de eventos y actividades de recaudación</li>
                  <li>• Coordinación con autoridades locales y provinciales</li>
                  <li>• Supervisión del mantenimiento de equipos e instalaciones</li>
                  <li>• Apoyo logístico al Cuerpo Activo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
