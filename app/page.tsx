import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppStoreLinks from '@/components/AppStoreLinks'

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Track Your Wrestling Success
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                GrappleHub is the ultimate platform for tracking wrestling tournaments, matches, and athlete performance. Record results and manage wrestler profiles all in one place.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Track tournaments and matches</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Manage wrestler profiles and stats</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Access historical tournament data</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="GrappleHub App"
                width={300}
                height={300}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Features for Wrestling Coaches & Athletes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Track wrestler statistics, win-loss records, and performance trends over time.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tournament Tracking</h3>
              <p className="text-gray-600">
                Manage multiple tournaments, brackets, and match schedules effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <AppStoreLinks />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Wrestling Program?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download GrappleHub today and start tracking your success.
          </p>
          <a
            href="https://apps.apple.com/us/app/grapplehub/id6758177752"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition"
          >
            Download from App Store
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
