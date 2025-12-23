import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Heart, Users, Shield, Flame } from "lucide-react"
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
    icon: Users,
    color: "bg-blue-50 border-blue-200",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Aporte Simple",
    amount: "$5.000",
    description: "Donación única para equipamiento",
    link: "https://mpago.la/18QqEn3",
    icon: Heart,
    color: "bg-green-50 border-green-200",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Aporte Solidario",
    amount: "$10.000",
    description: "Ayuda para mantenimiento de unidades",
    link: "https://mpago.la/1hvsChc",
    icon: Shield,
    color: "bg-yellow-50 border-yellow-200",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
  },
  {
    title: "Cuota Anual",
    amount: "$12.000",
    description: "Pago anual anticipado de socio",
    link: "https://mpago.la/2hEbbC7",
    icon: Flame,
    color: "bg-orange-50 border-orange-200",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
  },
  {
    title: "Aporte Especial",
    amount: "$15.000",
    description: "Contribución para mejoras edilicias",
    link: "https://mpago.la/2BSWXhw",
    icon: Shield,
    color: "bg-red-50 border-red-200",
    buttonColor: "bg-red-600 hover:bg-red-700",
  },
  {
    title: "Donación Monto Libre",
    amount: "A elección",
    description: "¿Querés colaborar con otro monto? Podés hacerlo ingresando el importe que desees.",
    link: "https://link.mercadopago.com.ar/donabomberosvdd",
    icon: Heart,
    color: "bg-purple-50 border-purple-200",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
]

const benefits = [
  "Formás parte del equipo que salva vidas",
  "Contribuís al mantenimiento del equipamiento",
  "Ayudás a sostener los gastos operativos",
  "Apoyo en mejoras edilicias del cuartel",
  "Renovación de unidades y herramientas",
  "Capacitación continua del personal",
]

export default function SociosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-anton text-[#c12d2c] mb-6">SUMATE COMO SOCIO</h1>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-4 text-balance">
                Tu aporte nos da fuerza. Sumate a los Bomberos de Villa del Dique.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Ser socio es ser parte del equipo que protege a tu familia, tu casa y tu pueblo. Cuando ayudás a los
                bomberos, te ayudás a vos mismo.
              </p>
            </div>

            {/* Motivational Messages */}
            <div className="bg-gradient-to-r from-[#c12d2c] to-red-700 rounded-lg shadow-xl p-8 mb-12 text-white">
              <h2 className="text-2xl md:text-3xl font-anton text-center mb-6">¿POR QUÉ SER SOCIO?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-lg leading-relaxed">
                    Cada vez que suena la sirena, salimos todos: los que apagan el fuego y los que colaboran desde su
                    casa.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-lg leading-relaxed">
                    En cada incendio, rescate o emergencia, hay un pedacito de tu colaboración presente.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-lg leading-relaxed">
                    Un pueblo que apoya a sus bomberos, es un pueblo fuerte y solidario.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-lg leading-relaxed">
                    Villa del Dique somos todos. Tu aporte ayuda a mantener el cuartel, el equipamiento y la esperanza.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-anton text-[#c12d2c] text-center mb-8">TU APORTE AYUDA A:</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Options */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-anton text-[#c12d2c] text-center mb-8">OPCIONES DE APORTE</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donationOptions.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <Card
                      key={index}
                      className={`${option.color} border-2 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-4">
                          <Icon className="w-12 h-12 text-[#c12d2c]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
                        <p className="text-3xl font-anton text-[#c12d2c] mb-3">{option.amount}</p>
                        <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                        <Button
                          asChild
                          className={`w-full ${option.buttonColor} text-white font-semibold py-6 text-lg`}
                        >
                          <a href={option.link} target="_blank" rel="noopener noreferrer">
                            Pagar con Mercado Pago
                          </a>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Final Call to Action */}
            <div className="bg-[#c12d2c] rounded-lg shadow-xl p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-anton mb-4">
                SER SOCIO ES SER PARTE DEL EQUIPO QUE SALVA VIDAS
              </h2>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Cada aporte, por más pequeño que sea, nos ayuda a seguir cumpliendo nuestra misión de proteger a la
                comunidad de Villa del Dique. Gracias por tu compromiso y solidaridad.
              </p>
              <p className="text-xl font-semibold">¡Sumate hoy y hacé la diferencia!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
