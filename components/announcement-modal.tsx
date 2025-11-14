"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from 'lucide-react'

interface AnnouncementModalProps {
  imageSrc: string
  imageAlt: string
  storageKey?: string
}

export function AnnouncementModal({ imageSrc, imageAlt, storageKey = "announcement-closed" }: AnnouncementModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const hasClosedAnnouncement = localStorage.getItem(storageKey)
    if (!hasClosedAnnouncement) {
      setIsOpen(true)
    }
  }, [storageKey])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(storageKey, "true")
  }

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200 flex items-center justify-center"
          aria-label="Cerrar anuncio"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image container with scroll if needed */}
        <div className="flex-1 overflow-y-auto">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={800}
            height={1000}
            className="w-full h-auto block"
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
          />
        </div>

        {/* Close button footer */}
        <div className="bg-gray-50 px-4 py-3 text-center border-t">
          <button
            onClick={handleClose}
            className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
