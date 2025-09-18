"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeaderAnnouncement } from "./header-announcement"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const menuItems = [
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "CUERPO ACTIVO", href: "/cuerpo-activo" },
    { name: "COMISIÓN DIRECTIVA", href: "/comision-directiva" },
    { name: "ASOCIAR", href: "/donaciones" },
  ]

  return (
    <>
      <HeaderAnnouncement />

      <header className="bg-[#c12d2c] border-b border-red-800 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between py-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-red-800 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link href="/" className="flex-1 flex justify-center">
              <Image
                src="/images/logo-bomberos-voluntarios-vdd.webp"
                alt="Bomberos Voluntarios Villa del Dique"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-center py-4 lg:py-6">
            <div className="flex items-center gap-4 lg:gap-8 xl:gap-12">
              {/* Left Menu Items */}
              <div className="flex items-center gap-3 lg:gap-6">
                <Link
                  href="/nosotros"
                  className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base xl:text-lg tracking-wide"
                >
                  NOSOTROS
                </Link>
                <Link
                  href="/cuerpo-activo"
                  className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base xl:text-lg tracking-wide"
                >
                  CUERPO ACTIVO
                </Link>
              </div>

              {/* Centered Logo */}
              <Link href="/" className="mx-4 lg:mx-8">
                <Image
                  src="/images/logo-bomberos-voluntarios-vdd.webp"
                  alt="Bomberos Voluntarios Villa del Dique"
                  width={90}
                  height={90}
                  className="object-contain lg:w-[100px] lg:h-[100px]"
                />
              </Link>

              {/* Right Menu Items */}
              <div className="flex items-center gap-3 lg:gap-6">
                <Link
                  href="/comision-directiva"
                  className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base xl:text-lg tracking-wide"
                >
                  COMISIÓN DIRECTIVA
                </Link>
                <Link
                  href="/donaciones"
                  className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base xl:text-lg tracking-wide"
                >
                  ASOCIAR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />

          {/* Menú deslizante */}
          <div className="fixed top-0 left-0 h-full w-80 bg-[#c12d2c] z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-red-800">
              <Image
                src="/images/logo-bomberos-voluntarios-vdd.webp"
                alt="Bomberos Voluntarios Villa del Dique"
                width={100}
                height={100}
                className="object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-white hover:bg-red-800 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="py-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-white hover:bg-red-800 hover:text-yellow-300 transition-all duration-200 text-lg font-semibold border-b border-red-800/30 tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm text-center">
                Estamos para resguardar vidas y bienes de nuestros vecinos
              </p>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
