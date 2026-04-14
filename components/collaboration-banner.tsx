"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, CreditCard, Banknote } from "lucide-react"
import Link from "next/link"

export function CollaborationBanner() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-foreground" aria-labelledby="collaboration-heading">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-start lg:items-center">
            {/* Left Content */}
            <div>
              <span className="font-montserrat text-[10px] sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block">
                Tu Aporte Hace la Diferencia
              </span>
              <h2
                id="collaboration-heading"
                className="font-anton text-[10vw] sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] sm:leading-[0.95] mb-5 sm:mb-8"
              >
                COLABORA CON
                <br />
                <span className="text-primary">NUESTRA MISIÓN</span>
              </h2>
              
              <p className="font-poppins text-white/70 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Somos voluntarios. La mejor paga para nosotros es un <span className="text-white font-semibold">MUCHAS GRACIAS</span>. Tu aporte nos ayuda a equiparnos y continuar salvando vidas en nuestra comunidad.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 group"
                  asChild
                >
                  <Link href="/socios" className="flex items-center justify-center gap-2 sm:gap-3">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sm:hidden">DONAR</span>
                    <span className="hidden sm:inline">HACER UNA DONACIÓN</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-foreground font-montserrat font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-transparent transition-all duration-300"
                  asChild
                >
                  <Link href="/asociate" className="flex items-center justify-center gap-3">
                    ASOCIARSE
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Donation Methods */}
            <div className="space-y-4 sm:space-y-6">
              <div className="p-5 sm:p-8 border border-white/10 hover:border-primary/50 active:border-primary/50 transition-colors duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-2 sm:p-3 bg-primary/10 flex-shrink-0">
                    <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-white mb-1 sm:mb-2">
                      Transferencia Bancaria
                    </h3>
                    <p className="font-poppins text-white/60 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      Realizá tu donación directamente a nuestra cuenta bancaria de forma segura.
                    </p>
                    <Link 
                      href="/socios" 
                      className="font-montserrat text-xs sm:text-sm font-medium text-primary hover:text-primary/80 active:text-primary/80 transition-colors inline-flex items-center gap-2"
                    >
                      Ver datos bancarios
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 border border-white/10 hover:border-primary/50 active:border-primary/50 transition-colors duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-2 sm:p-3 bg-primary/10 flex-shrink-0">
                    <Banknote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-white mb-1 sm:mb-2">
                      Cuota de Socio
                    </h3>
                    <p className="font-poppins text-white/60 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      Convertite en socio activo con una cuota mensual accesible y apoyá nuestra labor continuamente.
                    </p>
                    <Link 
                      href="/asociate" 
                      className="font-montserrat text-xs sm:text-sm font-medium text-primary hover:text-primary/80 active:text-primary/80 transition-colors inline-flex items-center gap-2"
                    >
                      Conocer planes
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
