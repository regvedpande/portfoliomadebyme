import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeRegistry } from "@/components/theme-registry"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Regved Pande | .NET Full Stack Developer",
  description:
    "Portfolio of Regved Pande - .NET Full Stack Developer with 2+ years building ASP.NET Core Web APIs, Azure-hosted services, React front ends, SQL Server workflows, WCF/SOAP integrations, BizTalk routing, and AI-assisted delivery for insurance, fintech, compliance, and CRM platforms.",
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
          content="Portfolio of Regved Pande - .NET Full Stack Developer with 2+ years building ASP.NET Core Web APIs, Azure-hosted services, React front ends, SQL Server workflows, WCF/SOAP integrations, BizTalk routing, and AI-assisted delivery for insurance, fintech, compliance, and CRM platforms."
        />
        <meta name="keywords" content="Regved Pande, .NET Full Stack Developer, ASP.NET Core, C#, React, SQL Server, EF Core, WCF, SOAP, BizTalk, Azure Functions, Semantic Kernel, Portfolio" />
        <meta property="og:title" content="Regved Pande | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Regved Pande - .NET Full Stack Developer with 2+ years building ASP.NET Core Web APIs, Azure-hosted services, React front ends, SQL Server workflows, WCF/SOAP integrations, BizTalk routing, and AI-assisted delivery for insurance, fintech, compliance, and CRM platforms."
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

