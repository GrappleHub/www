'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GrappleHub</h3>
            <p className="text-gray-300">
              Track wrestling tournaments, matches, and athlete performance with ease.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-secondary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-secondary transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-secondary transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              <a 
                href="mailto:elarssen91@gmail.com"
                className="hover:text-secondary transition"
              >
                elarssen91@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} GrappleHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
