import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Instagram } from "lucide-react"

export function NewsSection() {
  const instagramReels = [
    {
      id: 1,
      url: "https://www.instagram.com/bomberosvilladeldique/",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/felicitaciones-indendencia.jpg-GZBaBpNejqC4SyyyhKjJkVMrordWat.jpeg",
      title:
        "¡Felicitaciones a los bomberos y bomberas de Villa del Dique por la participación en IX Desafío Bomberil!",
      subtitle: "Municipalidad de Villa del Dique",
      date: "14 de septiembre 2025",
    },
    {
      id: 2,
      url: "https://www.instagram.com/bomberosvilladeldique/",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/llego-el-dia-pz8vUtJZFctm35qIu65Fa2Uhrg7pHR.png",
      title: "¡LLEGÓ EL DÍA! ACOMPAÑANOS A ESTE NUEVO DESAFÍO",
      subtitle: "IX DESAFÍO DE HABILIDADES BOMBERILES 2025",
      date: "13 de septiembre 2025",
    },
    {
      id: 3,
      url: "https://www.instagram.com/bomberosvilladeldique/",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/habilidades-bomberiles-2025-6FlGtwcKKSEFgQAemjZcYR3HHMEs6S.png",
      title: "ACOMPAÑANOS ESTE 13 Y 14 DE SEPTIEMBRE",
      subtitle: "EN LA IX EDICIÓN DE HABILIDADES BOMBERILES 2025",
      date: "12 de septiembre 2025",
    },
  ]

  return (
    <section className="py-16 bg-background" aria-labelledby="news-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="news-heading"
            className="font-anton text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#c12d2c] tracking-wide"
          >
            NOTICIAS
          </h2>

          <p className="font-montserrat font-semibold text-center text-muted-foreground mb-12 text-lg">
            Seguí nuestras actividades y eventos en Instagram
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {instagramReels.map((reel) => (
              <article key={reel.id}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative"
                      aria-label={`Ver ${reel.title} en Instagram`}
                    >
                      <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <img
                          src={reel.thumbnail || "/placeholder.svg"}
                          alt={`${reel.title} - Bomberos Voluntarios Villa del Dique`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#c12d2c]/20 group-hover:bg-[#c12d2c]/40 transition-colors duration-300" />
                        <div className="absolute top-4 right-4">
                          <ExternalLink className="h-6 w-6 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-montserrat font-semibold text-lg text-foreground group-hover:text-[#c12d2c] transition-colors duration-300 leading-tight mb-2">
                          {reel.title}
                        </h3>
                        <p className="font-poppins text-sm text-[#c12d2c] font-medium mb-1">{reel.subtitle}</p>
                        <p className="font-poppins text-xs text-muted-foreground">{reel.date}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#c12d2c] hover:bg-[#a02525] text-white font-montserrat font-semibold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://www.instagram.com/bomberosvilladeldique/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram className="h-5 w-5" />
                SEGUINOS EN INSTAGRAM
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
