"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Heart } from "lucide-react"
import Link from "next/link"

export function HeroBanner() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nner-bomberos-voluntarios-villa-del-dique-XyjPcsZqDufhWUhZu6JughVKBuW1sA.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-6xl">
          <h1 className="font-anton font-bold mb-4 sm:mb-6 lg:mb-8 text-balance leading-[0.9] sm:leading-[0.95] lg:leading-tight">
            <span className="block text-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 sm:mb-2">
              ESTAMOS PARA
            </span>
            <span
              className="block text-white animate-pulse-glow text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 sm:mb-2 font-black"
              style={{
                textShadow:
                  "2px 2px 4px rgba(193,45,44,0.8), 4px 4px 8px rgba(193,45,44,0.6), 6px 6px 12px rgba(193,45,44,0.4)",
                animation: "pulse-red 2s ease-in-out infinite alternate",
              }}
            >
              RESGUARDAR VIDAS
            </span>
          </h1>

          <p className="font-montserrat font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 text-white/95 text-shadow max-w-4xl mx-auto px-2">
            Bomberos Voluntarios Villa del Dique - Desde 1986 al servicio de la comunidad
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto btn-hover"
              asChild
            >
              <a href="tel:3546497497" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">(03546) 497497</span>
                <span className="sm:hidden">Llamar Emergencia</span>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#c12d2c] font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto btn-hover"
              asChild
            >
              <Link href="/socios" className="flex items-center justify-center gap-2">
                <Heart className="h-5 w-5" />
                Donar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-red {
          0% {
            text-shadow: 2px 2px 4px rgba(193,45,44,0.8), 4px 4px 8px rgba(193,45,44,0.6), 6px 6px 12px rgba(193,45,44,0.4);
          }
          100% {
            text-shadow: 2px 2px 8px rgba(193,45,44,1), 4px 4px 16px rgba(193,45,44,0.8), 6px 6px 24px rgba(193,45,44,0.6);
          }
        }
      `}</style>
    </section>
  )
}
