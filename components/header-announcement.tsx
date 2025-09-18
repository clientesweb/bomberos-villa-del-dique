"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeaderAnnouncement() {
  const announcements = [
    "Emergencias 24/7: (03546) 497497 - Siempre listos para ayudar",
    "Capacitación constante para proteger a nuestra comunidad",
    "Tu donación nos ayuda a salvar vidas - Alias: bomberos.villa.dique",
    "Únete como voluntario - Vocación de servicio desde 2008",
    "Protegemos vidas y bienes en Villa del Dique y la región",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [announcements.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
  }

  return (
    <div className="bg-[#a02625] text-white py-2 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Anuncio anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex-1 text-center">
            <p className="text-sm md:text-base font-medium animate-fade-in">{announcements[currentIndex]}</p>
          </div>

          <button
            onClick={goToNext}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Siguiente anuncio"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-1 gap-1">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Ir al anuncio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
