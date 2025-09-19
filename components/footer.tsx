import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "CUERPO ACTIVO", href: "/cuerpo-activo" },
    { name: "COMISIÓN DIRECTIVA", href: "/comision-directiva" },
    { name: "ASOCIAR", href: "/donaciones" },
  ]

  return (
    <footer className="bg-[#c12d2c] text-white">
      <div className="border-t border-red-800">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Logo and Quote */}
            <div className="sm:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo-bomberos-voluntarios-vdd.webp"
                  alt="Bomberos Voluntarios Villa del Dique"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </Link>
              <p className="text-white/90 italic leading-relaxed text-base lg:text-lg">
                "El bombero tiene una vocación de servicio que no se puede explicar con palabras."
              </p>
              <p className="text-white/80 text-sm lg:text-base">
                Estamos para resguardar vidas y bienes de nuestros vecinos desde 1986.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-lg">Contacto</h3>
              <div className="space-y-3">
                <div className="text-white/90">
                  <a href="tel:3546497497" className="hover:text-[#F59E0B] transition-colors text-sm lg:text-base">
                    (03546) 497497
                  </a>
                </div>
                <div className="text-white/90">
                  <a
                    href="https://share.google/ORWgl2NrFbhPukaKR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F59E0B] transition-colors text-sm lg:text-base"
                  >
                    Villa del Dique, Córdoba
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-lg">Navegación Rápida</h3>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/90 hover:text-[#F59E0B] transition-colors text-sm lg:text-base font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="border-t border-red-800 mt-8 pt-6 lg:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-white/90 text-sm lg:text-base">Síguenos:</span>
                <div className="flex gap-4">
                  <a
                    href="https://www.youtube.com/channel/UCmHD-2xFqu_2nC9kiUCRJgA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#F59E0B] transition-all duration-300 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/bomberosvilladeldique/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#F59E0B] transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <p className="text-white/90 text-sm lg:text-base">
                  © 2024 Bomberos Voluntarios Villa del Dique. Todos los derechos reservados.
                </p>
                <p className="text-white/70 mt-1 text-xs lg:text-sm">
                  Sitio Patrocinado y Desarrollado por{" "}
                  <a href="#" className="text-[#F59E0B] hover:underline font-medium">
                    Duality Domain
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
