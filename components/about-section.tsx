"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Clock } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Compromiso",
      description: "Protegemos vidas y bienes con dedicación absoluta"
    },
    {
      icon: Users,
      title: "Voluntariado",
      description: "Un equipo unido por la vocación de servicio"
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Disponibles las 24 horas, los 365 días del año"
    }
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start mb-12 sm:mb-20">
            <div>
              <span className="font-montserrat text-[10px] sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block">
                Nuestra Historia
              </span>
              <h2
                id="about-heading"
                className="font-anton text-[11vw] sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.9] sm:leading-[0.95]"
              >
                DESDE 1986
                <br />
                <span className="text-primary">AL SERVICIO</span>
                <br />
                DE LA COMUNIDAD
              </h2>
            </div>
            
            <div className="lg:pt-12">
              <p className="font-poppins text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Somos la Asociación de Bomberos Voluntarios de Villa del Dique, una institución fundada con el compromiso de proteger la vida, los bienes y el entorno de nuestra comunidad. Cada día, hombres y mujeres voluntarios trabajan incansablemente para mantener segura nuestra región.
              </p>
              
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-montserrat font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 group"
              >
                <Link href="/nosotros" className="flex items-center justify-center sm:justify-start gap-3">
                  CONOCER MÁS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 border border-border hover:border-primary active:border-primary transition-colors duration-300"
              >
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6" />
                <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="font-poppins text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
