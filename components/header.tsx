"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Heart, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cuerpo Activo", href: "/cuerpo-activo" },
    { name: "Comisión Directiva", href: "/comision-directiva" },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/logo-bomberos-voluntarios-vdd.webp"
                alt="Bomberos Voluntarios Villa del Dique"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-[50px] sm:h-[50px] object-contain"
              />
              <div className={`hidden sm:block transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
                <p className="font-montserrat font-bold text-sm leading-tight">BOMBEROS</p>
                <p className="font-montserrat text-xs opacity-70">Villa del Dique</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-montserrat text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold px-6 py-5 text-sm transition-all duration-300"
              >
                <Link href="/socios" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  DONAR
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={`lg:hidden transition-colors h-10 w-10 ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-foreground/90 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)} 
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-[320px] bg-foreground z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-bomberos-voluntarios-vdd.webp"
              alt="Bomberos Voluntarios Villa del Dique"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-montserrat font-bold text-white text-sm">BOMBEROS VDD</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:bg-white/10 h-10 w-10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Nav */}
        <nav className="px-4 py-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center justify-between py-4 text-white/80 hover:text-white active:text-primary transition-colors duration-200 font-montserrat text-base font-medium border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 space-y-3">
          {/* Emergency Call */}
          <a
            href="tel:3546497497"
            className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 text-white font-montserrat text-sm font-medium active:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            EMERGENCIAS: 497497
          </a>
          
          {/* Donate Button */}
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 text-white font-montserrat font-semibold py-5 text-sm"
          >
            <Link href="/socios" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
              <Heart className="h-4 w-4" />
              DONAR AHORA
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
