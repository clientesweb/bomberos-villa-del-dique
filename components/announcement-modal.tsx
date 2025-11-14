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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="relative w-full h-auto bg-white rounded-lg shadow-2xl overflow-hidden my-auto">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 sm:p-2.5 transition-colors duration-200 flex items-center justify-center"
          aria-label="Cerrar anuncio"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="relative w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={1200}
            height={1500}
            className="w-full h-auto block"
            priority
            quality={95}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 80vw"
          />
        </div>

        <div className="bg-gray-50 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-center border-t">
          <button
            onClick={handleClose}
            className="text-sm sm:text-base font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
