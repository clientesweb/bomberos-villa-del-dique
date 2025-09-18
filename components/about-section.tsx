"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [currentTagIndex, setCurrentTagIndex] = useState(0)
  const tags = ["COMPROMISO", "VOCACIÓN DE SERVICIO", "VOLUNTARIADO"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % tags.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [tags.length])

  return (
    <section className="py-12 md:py-16 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <h2
                id="about-heading"
                className="font-anton text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 md:mb-8 text-[#c12d2c] tracking-wide"
              >
                ¿QUIÉNES SOMOS?
              </h2>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Column */}
                <div className="space-y-6">
                  <p className="font-poppins text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left px-2 lg:px-0">
                    Somos la Asociación de Bomberos Voluntarios de Villa del Dique, institución inaugurada en 2008 con
                    el compromiso de proteger la vida, los bienes y el entorno de nuestra comunidad.
                  </p>

                  <Button
                    asChild
                    className="mx-auto lg:mx-0 bg-[#c12d2c] hover:bg-[#a02525] text-white font-montserrat font-semibold px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base transition-all duration-300 hover:shadow-lg flex w-fit"
                  >
                    <Link href="/nosotros" className="flex items-center gap-2">
                      LEER MÁS
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Tags Column with Automatic Slider */}
                <div className="flex flex-col items-center lg:items-end space-y-4">
                  <div className="relative w-full max-w-sm">
                    <div className="overflow-hidden rounded-lg bg-gradient-to-r from-[#c12d2c]/5 to-[#c12d2c]/10 p-1">
                      <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentTagIndex * 100}%)` }}
                      >
                        {tags.map((tag, index) => (
                          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center py-4 px-6">
                            <span className="bg-[#c12d2c] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-montserrat font-semibold text-xs md:text-sm lg:text-base text-center shadow-lg whitespace-nowrap">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center mt-3 space-x-2">
                      {tags.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentTagIndex ? "bg-[#c12d2c] w-6" : "bg-[#c12d2c]/30 hover:bg-[#c12d2c]/50"
                          }`}
                          onClick={() => setCurrentTagIndex(index)}
                          aria-label={`Mostrar ${tags[index]}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <p className="font-montserrat text-xs md:text-sm text-muted-foreground/70 italic">
                      Desde 2008 al servicio de la comunidad
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
