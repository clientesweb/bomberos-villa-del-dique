"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Heart } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
              className="block text-[#c12d2c] animate-pulse-glow text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 sm:mb-2 font-black"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 6px 6px 12px rgba(0,0,0,0.4)",
              }}
            >
              RESGUARDAR VIDAS
            </span>
            <span className="block text-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Y BIENES DE NUESTROS VECINOS
            </span>
          </h1>

          <p className="font-montserrat font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 text-white/95 text-shadow max-w-4xl mx-auto px-2">
            Bomberos Voluntarios Villa del Dique - Desde 2008 al servicio de la comunidad
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

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#c12d2c] font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto btn-hover"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donar Ahora
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md mx-4">
                <DialogHeader>
                  <DialogTitle className="text-center text-[#c12d2c] text-xl font-montserrat font-semibold">
                    Datos para Donación
                  </DialogTitle>
                  <DialogDescription className="text-center text-base font-poppins">
                    Tu aporte nos ayuda a seguir salvando vidas
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="text-center space-y-3 bg-gray-50 p-4 rounded-lg">
                    <p className="text-base font-poppins">
                      <strong className="text-[#c12d2c]">Alias:</strong> bomberos.villa.dique
                    </p>
                    <p className="text-base font-poppins">
                      <strong className="text-[#c12d2c]">Nombre:</strong> Sociedad De Bomberos Voluntarios De Villa
                    </p>
                    <p className="text-base font-poppins">
                      <strong className="text-[#c12d2c]">CUIT/CUIL:</strong> 30-66868497-8
                    </p>
                    <p className="text-base font-poppins">
                      <strong className="text-[#c12d2c]">Entidad:</strong> Mercado Pago
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
