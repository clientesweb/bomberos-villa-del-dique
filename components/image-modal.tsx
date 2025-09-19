"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ImageModal({ src, alt, width, height, className, priority }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer group relative overflow-hidden rounded-lg">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className={`${className} group-hover:scale-105 transition-transform duration-300`}
            priority={priority}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
              <span className="text-sm font-medium text-gray-800">Click para ampliar</span>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-10 right-0 z-50 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5 text-gray-800" />
          </button>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
