import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Using Inter for professional marketing agency look
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "SmartGalaxy Labs | Software Solutions & Digital Marketing",
  description:
    "Your all-in-one business partner. We provide Mobile App Development, Website Development, Digital Marketing, SEO, Cloud Hosting, Software Development, and Industrial Training at affordable prices.",
  keywords: [
    "software development",
    "mobile app development",
    "digital marketing",
    "SEO",
    "website development",
    "Flutter training",
    "cloud hosting",
    "India",
  ],
  authors: [{ name: "SmartGalaxy Labs" }],
  openGraph: {
    title: "SmartGalaxy Labs | Software Solutions & Digital Marketing",
    description: "Software solutions to real-life problems with quality services at affordable prices",
    type: "website",
  },
    
}

export const viewport: Viewport = {
  themeColor: "#4338ca",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
