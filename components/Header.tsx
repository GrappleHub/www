'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg">GH</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">GrappleHub</span>
          </Link>
          
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-secondary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-secondary transition">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-secondary transition">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
