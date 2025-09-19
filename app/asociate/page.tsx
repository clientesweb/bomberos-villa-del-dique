import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Construction } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asociate - Bomberos Voluntarios Villa del Dique",
  description:
    "Sumate a los Bomberos Voluntarios de Villa del Dique. Tu aporte nos ayuda a seguir equipándonos y salvando vidas. Conocé cómo asociarte y colaborar con nuestra institución.",
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
    description: "Tu aporte nos ayuda a seguir equipándonos y salvando vidas.",
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
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <Construction className="w-24 h-24 text-[#c12d2c] mx-auto mb-6" />

              <h1 className="text-4xl md:text-5xl font-anton text-[#c12d2c] mb-6">ASOCIATE</h1>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Próximamente en Desarrollo</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Estamos trabajando en una nueva plataforma para que puedas asociarte y colaborar con los Bomberos
                  Voluntarios de Villa del Dique de manera más fácil y directa.
                </p>
              </div>

              <div className="text-gray-600 space-y-4">
                <p>Mientras tanto, puedes contactarnos directamente:</p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#c12d2c]">Teléfono de Emergencias: (03546) 497497</p>
                </div>
                <p className="text-sm">
                  Pronto tendrás disponible toda la información sobre cómo formar parte de nuestra institución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
