"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroBanner() {
  return (
    <section className="relative min-h-[100svh] bg-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/cuerpo-activo.webp"
          alt="Bomberos Voluntarios Villa del Dique en accion"
          fill
          className="object-cover opacity-40 sm:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-b from-foreground via-foreground/40 to-foreground/80 sm:from-foreground/80 sm:via-foreground/60 sm:to-foreground" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex items-end sm:items-center px-5 sm:px-6 lg:px-12 pb-8 sm:pb-0 pt-24 sm:pt-20">
          <div className="w-full max-w-4xl">
            {/* Badge */}
            <div className="mb-4 sm:mb-8">
              <span className="inline-block text-primary font-montserrat font-semibold text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Desde 1986 al servicio de la comunidad
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-anton text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] text-white leading-[0.9] sm:leading-[0.95] mb-4 sm:mb-8">
              <span className="block">ESTAMOS PARA</span>
              <span className="block"><span className="text-primary">RESGUARDAR</span> VIDAS</span>
            </h1>

            {/* Subtitle - Hidden on mobile, shown on larger screens */}
            <p className="hidden sm:block font-poppins text-white/70 text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-12 leading-relaxed">
              Bomberos Voluntarios de Villa del Dique. Protegemos vidas, bienes y el entorno de nuestra comunidad. Tu apoyo hace posible nuestra labor.
            </p>

            {/* CTA Buttons - Stacked on mobile */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 group"
                asChild
              >
                <Link href="/socios" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  DONAR AHORA
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-foreground font-montserrat font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-transparent transition-all duration-300"
                asChild
              >
                <a href="tel:3546497497" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sm:hidden">EMERGENCIAS</span>
                  <span className="hidden sm:inline">EMERGENCIAS: (03546) 497497</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="sm:hidden flex justify-center pb-6">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
