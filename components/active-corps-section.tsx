import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ActiveCorpsSection() {
  const stats = [
    {
      icon: Users,
      number: "25+",
      label: "Bomberos Activos",
    },
    {
      icon: Shield,
      number: "16",
      label: "Años de Servicio",
    },
    {
      icon: Award,
      number: "100%",
      label: "Compromiso",
    },
  ]

  return (
    <section className="py-16 bg-muted/50" aria-labelledby="active-corps-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="active-corps-heading"
              className="font-anton text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#c12d2c] tracking-wide"
            >
              CUERPO ACTIVO
            </h2>

            <p className="font-montserrat font-semibold text-muted-foreground text-lg max-w-2xl mx-auto">
              Profesionales comprometidos con la seguridad de nuestra comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-[#c12d2c]/10 rounded-full">
                      <stat.icon className="h-8 w-8 text-[#c12d2c]" />
                    </div>
                    <div className="font-anton text-3xl font-bold text-[#c12d2c]">{stat.number}</div>
                    <div className="font-montserrat font-semibold text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="font-montserrat font-semibold text-2xl text-foreground">Preparados para servir</h3>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Nuestro Cuerpo Activo está integrado por jefatura, suboficiales y bomberos que día a día se preparan
                  para responder a emergencias en Villa del Dique y la región.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-montserrat font-semibold text-2xl text-foreground">Compromiso y vocación</h3>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Con capacitación constante y vocación de servicio, trabajamos unidos para{" "}
                  <strong className="text-[#c12d2c] font-montserrat font-semibold">resguardar vidas y bienes</strong> de
                  nuestra comunidad las 24 horas del día.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  className="bg-[#c12d2c] hover:bg-[#a02525] text-white font-montserrat font-semibold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/cuerpo-activo" className="flex items-center gap-3">
                    CONOCÉ A NUESTRO EQUIPO
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative group">
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0 relative">
                    <Image
                      src="/images/cuerpo-activo.webp"
                      alt="Cuerpo Activo de Bomberos Voluntarios Villa del Dique en formación"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c12d2c] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#c12d2c] rounded-full opacity-30 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
