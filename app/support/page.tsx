import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Support - GrappleHub',
  description: 'Get help with GrappleHub - FAQ, contact information, and support resources',
}

export default function Support() {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">Support</h1>

          <p className="text-xl text-gray-600 mb-8">
            Need help with GrappleHub? We're here to assist you.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Contact Us</h2>
          <p>For support inquiries, bug reports, or feature requests, please contact us:</p>
          <p className="text-lg">
            <strong>Email:</strong>{' '}
            <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">
              grapplehubapp@gmail.com
            </a>
          </p>
          <p className="text-gray-600">We typically respond within 24-48 hours.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I create a wrestler profile?</h3>
              <p className="text-gray-700">
                From the home screen, tap the "Wrestlers" tab, then tap the "+" button to add a new wrestler.
                Enter their name, birth year, gender, competition level, and weight class.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">How do I record a match?</h3>
              <p className="text-gray-700">
                First, create a tournament from the Tournaments tab. Then select the tournament and tap
                "Add Match" to record match results including opponent, result, method (pin, decision, etc.),
                and score.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Can I track multiple wrestlers?</h3>
              <p className="text-gray-700">
                Yes! GrappleHub is designed for parents, coaches, and athletes who need to track multiple
                wrestlers. Add as many wrestler profiles as you need.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What competition levels are supported?</h3>
              <p className="text-gray-700">
                GrappleHub supports Youth, High School, College, and Open/Senior competition levels.
                Weight classes automatically adjust based on the selected level and gender.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">How do I delete my account?</h3>
              <p className="text-gray-700">
                You can delete your account directly in the app: go to <strong>Profile</strong> tab, scroll to the bottom, and tap <strong>Delete Account</strong>. This will permanently delete your account and all associated data (wrestlers, tournaments, and matches). Alternatively, you can email us at{' '}
                <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">
                  grapplehubapp@gmail.com
                </a>{' '}
                with the subject "Account Deletion Request".
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-700">
                Yes. We use industry-standard encryption for data in transit and at rest. Your data is stored
                securely and is only accessible to you. See our{' '}
                <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a> for more details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Do you have a feature request or found a bug?</h3>
              <p className="text-gray-700">
                We'd love to hear from you! Email us at{' '}
                <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">
                  grapplehubapp@gmail.com
                </a>{' '}
                with your feedback, feature ideas, or bug reports.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">System Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>iOS 17.0 or later</li>
            <li>iPhone compatible</li>
            <li>Internet connection required for syncing</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">App Version</h2>
          <p className="text-gray-700">
            Current version information can be found in the app under Settings.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
            <p className="text-gray-700 mb-4">
              If you couldn't find the answer to your question, don't hesitate to reach out.
            </p>
            <a
              href="mailto:grapplehubapp@gmail.com"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}
