"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"

interface NewsItem {
  id: number
  url: string
  thumbnail: string
  title: string
  date: string
  category: string
}

export function NewsSection() {
  const news: NewsItem[] = [
    {
      id: 1,
      url: "https://www.instagram.com/p/DXDnW67jegQ/",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accidente-vehicular-IL4NgQGvpzedG55E1fnn8HseCTPW5s.jpg",
      title: "Accidente Vehicular - Ruta Provincial N° 5 (Km 106)",
      date: "12 ABR 2026",
      category: "INTERVENCIÓN"
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DXDW8TNDSFp/?img_index=1",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INTERVENCI%C3%93N-4Wl0hnus8zY22W64BC5PG9YxWNumZO.jpg",
      title: "Rescate de felino atrapado en alambre de púas - Bulevar Hipólito Yrigoyen",
      date: "12 ABR 2026",
      category: "INTERVENCIÓN"
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DW9oasRkU_c/",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-de-mayo-asado-d3iTlJPyD7MOHoqCEZPxjEq0GAQACk.jpg",
      title: "Primer Concurso Alma de Asador - 1 de Mayo en el Centro Cultural Pato Carret",
      date: "01 MAY 2026",
      category: "EVENTO"
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/DW2ZFyYkmQj/",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/operacion-practica-zD9ccrD6zIGBDnmyQDuirGSS83QS5h.jpg",
      title: "Práctica Operativa - Técnicas de rescate con cuerda en estación GNC BARALE",
      date: "30 MAR 2026",
      category: "PRÁCTICA"
    },
    {
      id: 5,
      url: "https://www.instagram.com/p/DWpwt1NDbQD/?img_index=1",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acto-protocolar-2-abril-g8AEa5WLr5fmbdmb7i7FoNwuqyWh4y.jpg",
      title: "Acto Protocolar - Día del Veterano y de los Caídos en la Guerra de Malvinas",
      date: "02 ABR 2026",
      category: "INSTITUCIONAL"
    }
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-secondary" aria-labelledby="news-heading">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 mb-10 sm:mb-16">
            <div>
              <span className="font-montserrat text-[10px] sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block">
                Mantente Informado
              </span>
              <h2
                id="news-heading"
                className="font-anton text-[11vw] sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.9] sm:leading-[0.95]"
              >
                NOVEDADES
              </h2>
            </div>
            
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-montserrat font-semibold px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm transition-all duration-300 group"
            >
              <a 
                href="https://www.instagram.com/bomberosvilladeldique/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3"
              >
                <Instagram className="h-4 w-4" />
                <span className="sm:hidden">INSTAGRAM</span>
                <span className="hidden sm:inline">SEGUINOS EN INSTAGRAM</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* News Grid - Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="sm:hidden -mx-5 px-5">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {news.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[280px] snap-start bg-card border border-border active:border-primary transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 p-1.5">
                      <ExternalLink className="h-3 w-3 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-montserrat text-[10px] font-semibold tracking-[0.1em] text-primary">
                        {item.category}
                      </span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span className="font-poppins text-[10px] text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    
                    <h3 className="font-montserrat font-semibold text-sm text-foreground leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid md:grid-cols-2 gap-4 sm:gap-6">
            {news.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-card border border-border hover:border-primary transition-all duration-300 overflow-hidden ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`grid ${index === 0 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10] md:aspect-auto md:min-h-[300px]' : 'aspect-[16/10]'}`}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-300" />
                    
                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 bg-background/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-5 sm:p-6 md:p-8 flex flex-col justify-between ${index === 0 ? 'md:py-10 lg:py-12' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="font-montserrat text-[10px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.15em] text-primary">
                          {item.category}
                        </span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="font-poppins text-[10px] sm:text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className={`font-montserrat font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight ${
                        index === 0 ? 'text-xl sm:text-2xl md:text-3xl' : 'text-base sm:text-lg md:text-xl'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mt-4 sm:mt-6 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <span className="font-montserrat text-xs sm:text-sm font-medium">Ver en Instagram</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
