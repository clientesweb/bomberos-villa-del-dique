import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users } from "lucide-react"
import Link from "next/link"

export function CollaborationBanner() {
  return (
    <section className="py-16 bg-[#c12d2c]" aria-labelledby="collaboration-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2
                id="collaboration-heading"
                className="font-anton text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#c12d2c] tracking-wide"
              >
                COLABORÁ CON NOSOTROS
              </h2>

              <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                Somos voluntarios y la mejor paga para nosotros es un{" "}
                <strong className="text-[#c12d2c] font-montserrat font-bold text-xl">MUCHAS GRACIAS</strong>. Tu aporte
                nos ayuda a seguir equipándonos y salvando vidas.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-[#c12d2c] hover:bg-[#a02525] text-white font-montserrat font-semibold px-10 py-4 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/socios" className="flex items-center gap-3">
                    <Heart className="h-6 w-6" />
                    HACER UNA DONACIÓN
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#c12d2c] text-[#c12d2c] hover:bg-[#c12d2c] hover:text-white font-montserrat font-semibold px-10 py-4 text-base bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/socios" className="flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    ASOCIARSE
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
