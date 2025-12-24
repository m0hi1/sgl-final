import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

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
    "Grow Your Business with Performance-Driven Digital Marketing",
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <Script id="cal-embed" strategy="afterInteractive">
            {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init"); Cal("init", "` + (process.env.NEXT_PUBLIC_CAL_NAMESPACE ?? "smartgalaxylabs") + `", {origin:"https://app.cal.com"});`}
          </Script>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
