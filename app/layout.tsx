import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import type React from "react"
import { Youtube, Instagram, Twitter, FileText, PinIcon } from "lucide-react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "TrueStoic",
  description: "Explore the wisdom of Stoicism",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
            <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
              <Link href="/" className="text-2xl font-bold">
                TrueStoic
              </Link>
              <div className="flex items-center space-x-4">
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-primary">
                      Blog
                    </Link>
                  </li>
                    {/* <li>
                      <Link href="#" className="hover:text-primary">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-primary">
                        Contact
                      </Link>
                    </li> */}
                </ul>
                <ModeToggle />
              </div>
            </nav>
          </header>
          <main className="pt-16">{children}</main>
          <footer className="py-8 bg-muted">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-4 font-semibold">About Us</h3>
                  <p>TrueStoic is dedicated to exploring and sharing the wisdom of Stoicism.</p>
                </div>
                <div>
                  <h3 className="mb-4 font-semibold">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="hover:text-primary">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-primary">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-primary">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-primary">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 font-semibold">Connect</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center hover:text-primary">
                        <Youtube size={18} className="mr-2" /> YouTube
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center hover:text-primary">
                        <Instagram size={18} className="mr-2" /> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center hover:text-primary">
                        <FileText size={18} className="mr-2" /> Medium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center hover:text-primary">
                        <Twitter size={18} className="mr-2" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center hover:text-primary">
                        <PinIcon size={18} className="mr-2" /> Pinterest
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p>&copy; 2025 TrueStoic. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

