import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'LK Python Learning', description: 'Learn Python, practice coding, and build your skills with LK Python Learning.' }
export const viewport: Viewport = { themeColor: '#08111f', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
