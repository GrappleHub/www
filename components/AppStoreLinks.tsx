'use client'

import QRCode from 'qrcode.react'

export default function AppStoreLinks() {
  return (
    <div className="bg-gradient-to-r from-secondary to-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Download GrappleHub Today
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* QR Code */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <QRCode 
                value="https://apps.apple.com/us/app/grapplehub"
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
          </div>
          
          {/* App Store Badges */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Scan QR Code or Download:</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/us/app/grapplehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.82.75-1.82 1.82 0 1.07.91 1.82 1.82 1.82 1.07 0 1.82-.91 1.82-1.82 0-1.07-.91-1.82-1.82-1.82zm0 3.14c-.73 0-1.32-.59-1.32-1.32s.59-1.32 1.32-1.32 1.32.59 1.32 1.32-.59 1.32-1.32 1.32zm2.5-9.78H6.32c-1.23 0-2.14 1.06-2.14 2.29v10.44c0 1.23.91 2.29 2.14 2.29h13.23c1.23 0 2.14-1.06 2.14-2.29V8.35c0-1.23-.91-2.29-2.14-2.29zm-1.07 12.73H7.39V8.97h11.09v9.43z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://apps.apple.com/us/app/grapplehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Get on the App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
