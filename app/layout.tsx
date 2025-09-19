import type React from "react"
import type { Metadata } from "next"
import { Anton } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { EmergencyButton } from "@/components/emergency-button"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bomberosvoluntariosvilladeldique.com.ar"),
  title: {
    default: "Bomberos Voluntarios Villa del Dique - Protegiendo Vidas desde 1986",
    template: "%s | Bomberos Voluntarios Villa del Dique",
  },
  description:
    "Asociación de Bomberos Voluntarios de Villa del Dique. Estamos para resguardar vidas y bienes de nuestros vecinos desde 1986. Servicio de emergencias 24/7 - Tel: (03546) 497497",
  keywords: [
    "bomberos voluntarios",
    "villa del dique",
    "emergencias",
    "rescate",
    "incendios",
    "córdoba",
    "argentina",
    "donaciones",
    "voluntariado",
  ],
  authors: [{ name: "Bomberos Voluntarios Villa del Dique" }],
  creator: "Duality Domain",
  publisher: "Bomberos Voluntarios Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.bomberosvoluntariosvilladeldique.com.ar",
    siteName: "Bomberos Voluntarios Villa del Dique",
    title: "Bomberos Voluntarios Villa del Dique - Protegiendo Vidas desde 1986",
    description:
      "Asociación de Bomberos Voluntarios de Villa del Dique. Estamos para resguardar vidas y bienes de nuestros vecinos desde 1986.",
    images: [
      {
        url: "/images/og-image-bomberos-voluntarios-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Bomberos Voluntarios Villa del Dique - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bomberos Voluntarios Villa del Dique",
    description: "Estamos para resguardar vidas y bienes de nuestros vecinos desde 1986",
    images: ["/images/og-image-bomberos-voluntarios-vdd.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon-bomberos-voluntarios-vdd.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/favicon-bomberos-voluntarios-vdd.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/favicon-bomberos-voluntarios-vdd.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#DC2626",
    "color-scheme": "light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bomberos VDD",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#c12d2c" />
        <meta name="msapplication-TileColor" content="#c12d2c" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans ${anton.variable} ${montserrat.variable} ${poppins.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <EmergencyButton />
        <Analytics />
      </body>
    </html>
  )
}
