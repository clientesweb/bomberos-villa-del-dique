import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, ArrowUpRight, Phone, MapPin } from "lucide-react"

export function Footer() {
  const navigation = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cuerpo Activo", href: "/cuerpo-activo" },
    { name: "Comisión Directiva", href: "/comision-directiva" },
    { name: "Asociarse", href: "/asociate" },
    { name: "Donar", href: "/socios" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Mobile Emergency Banner */}
        <div className="sm:hidden mb-10 p-5 bg-primary/5 border-l-2 border-primary">
          <p className="font-montserrat font-semibold text-foreground text-sm mb-1">Emergencias 24/7</p>
          <a 
            href="tel:3546497497" 
            className="font-anton text-3xl text-primary active:text-primary/80 transition-colors"
          >
            (03546) 497497
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 sm:mb-6">
              <Image
                src="/images/logo-bomberos-voluntarios-vdd.webp"
                alt="Bomberos Voluntarios Villa del Dique"
                width={50}
                height={50}
                className="w-12 h-12 sm:w-[60px] sm:h-[60px] object-contain"
              />
              <div>
                <p className="font-montserrat font-bold text-foreground text-sm sm:text-base">BOMBEROS VOLUNTARIOS</p>
                <p className="font-poppins text-xs sm:text-sm text-muted-foreground">Villa del Dique</p>
              </div>
            </Link>
            <p className="font-poppins text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mb-6 sm:mb-8">
              Estamos para resguardar vidas y bienes de nuestros vecinos. Desde 1986 al servicio de la comunidad con compromiso, vocación y dedicación.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/bomberosvilladeldique/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary active:border-primary hover:text-primary active:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmHD-2xFqu_2nC9kiUCRJgA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary active:border-primary hover:text-primary active:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="font-montserrat font-semibold text-foreground text-sm sm:text-base mb-4 sm:mb-6">Navegación</h3>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-poppins text-sm sm:text-base text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="font-montserrat font-semibold text-foreground text-sm sm:text-base mb-4 sm:mb-6">Contacto</h3>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="tel:3546497497" 
                className="flex items-center gap-3 font-poppins text-sm sm:text-base text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 group"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>(03546) 497497</span>
                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://share.google/ORWgl2NrFbhPukaKR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 font-poppins text-sm sm:text-base text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 group"
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                <span>Villa del Dique, Córdoba, Argentina</span>
                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            </div>

            {/* Emergency Highlight - Desktop */}
            <div className="hidden sm:block mt-6 sm:mt-8 p-5 sm:p-6 bg-primary/5 border-l-2 border-primary">
              <p className="font-montserrat font-semibold text-foreground text-sm mb-1">Emergencias 24/7</p>
              <a 
                href="tel:3546497497" 
                className="font-anton text-xl sm:text-2xl text-primary hover:text-primary/80 transition-colors"
              >
                (03546) 497497
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center sm:gap-4">
            <p className="font-poppins text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © 2024 Bomberos Voluntarios Villa del Dique. Todos los derechos reservados.
            </p>
            <p className="font-poppins text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
              Desarrollado por{" "}
              <a 
                href="#" 
                className="text-foreground hover:text-primary active:text-primary transition-colors font-medium"
              >
                Duality Domain
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
