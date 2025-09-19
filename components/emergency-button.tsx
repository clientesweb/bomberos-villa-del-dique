"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        asChild
      >
        <a href="tel:100" className="flex items-center justify-center gap-2">
          <Phone className="h-6 w-6" />
          <span className="hidden sm:inline font-montserrat">100</span>
        </a>
      </Button>
    </div>
  )
}
