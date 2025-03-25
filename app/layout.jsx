import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeRegistry } from "@/components/theme-registry"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Regved Pande | Full-Stack Developer",
  description:
    "Professional portfolio of Regved Pande, showcasing expertise in .NET, Java, Python, and AI/ML technologies",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources to prevent layout shifts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Add meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Professional portfolio of Regved Pande, showcasing expertise in .NET, Java, Python, and AI/ML technologies"
        />
        <meta name="keywords" content="Regved Pande, Full-Stack Developer, .NET, Java, Python, AI/ML, Portfolio" />
        <meta property="og:title" content="Regved Pande | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Professional portfolio of Regved Pande, showcasing expertise in .NET, Java, Python, and AI/ML technologies"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  )
}



import './globals.css'