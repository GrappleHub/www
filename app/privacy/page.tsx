import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - GrappleHub',
  description: 'GrappleHub Privacy Policy',
}

export default function Privacy() {
  return (
    <>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8"><strong>Last Updated: January 21, 2026</strong></p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Introduction</h2>
          <p>Welcome to GrappleHub. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information You Provide</h3>
          <p>When you use GrappleHub, we may collect the following information that you voluntarily provide:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Account Information:</strong> Name, email address, and authentication credentials (via Apple Sign-In)</li>
            <li><strong>Profile Information:</strong> Display name and any optional profile details you choose to provide</li>
            <li><strong>Wrestling Data:</strong> Tournament information, wrestler profiles, match results, scores, and notes</li>
            <li><strong>Video Content:</strong> Match videos you choose to upload and store</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information Automatically Collected</h3>
          <p>When you use the App, we may automatically collect certain information:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers</li>
            <li><strong>Usage Data:</strong> App features used, time spent in the app, interaction patterns</li>
            <li><strong>Log Data:</strong> Error logs, crash reports, and performance data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information from Third-Party Services</h3>
          <p>We may receive information from third-party services you connect to the App:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Apple Sign-In:</strong> Name and email address provided by Apple</li>
            <li><strong>Cloud Storage:</strong> File metadata from iCloud or Google Drive when you connect these services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Provide Services:</strong> Enable you to track tournaments, matches, and wrestler performance</li>
            <li><strong>Store Your Data:</strong> Save your tournament data, match information, and videos</li>
            <li><strong>Authenticate Users:</strong> Verify your identity and maintain account security</li>
            <li><strong>Improve the App:</strong> Analyze usage patterns to enhance features and user experience</li>
            <li><strong>Fix Issues:</strong> Debug errors, crashes, and technical problems</li>
            <li><strong>Communicate:</strong> Send important updates about the app or your account</li>
            <li><strong>Comply with Laws:</strong> Meet legal obligations and enforce our Terms of Service</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">How We Share Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers</h3>
          <p>We may share information with third-party service providers who help us operate the app:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Cloud Storage Providers:</strong> iCloud, Google Drive (only if you choose to use these services)</li>
            <li><strong>Authentication Services:</strong> Apple Sign-In for user authentication</li>
            <li><strong>Hosting Services:</strong> Server infrastructure to run the app</li>
            <li><strong>Analytics Services:</strong> To understand app usage and improve performance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
          <p>We may disclose your information if required by law or to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Comply with legal processes (subpoenas, court orders)</li>
            <li>Enforce our Terms of Service</li>
            <li>Protect our rights, property, or safety</li>
            <li>Prevent fraud or security issues</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">With Your Consent</h3>
          <p>We may share information with third parties when you explicitly consent to such sharing.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Your Content</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Ownership</h3>
          <p>You retain all rights to the content you create and upload to GrappleHub, including:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Tournament and match data</li>
            <li>Wrestler profiles and statistics</li>
            <li>Videos and notes</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Storage</h3>
          <p>Your content may be stored:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>On Your Device:</strong> Local app storage</li>
            <li><strong>Our Servers:</strong> Secure cloud infrastructure for data synchronization</li>
            <li><strong>Your Cloud Storage:</strong> iCloud or Google Drive (if you choose to connect these services)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Responsibility</h3>
          <p>You are responsible for:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Ensuring you have the right to upload and share content</li>
            <li>Obtaining necessary consents before uploading videos of others (especially minors)</li>
            <li>Complying with applicable laws regarding recording and sharing videos</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Data Security</h2>
          <p>We implement reasonable security measures to protect your information:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Encryption:</strong> Data is encrypted in transit using industry-standard protocols (HTTPS/TLS)</li>
            <li><strong>Authentication:</strong> Secure authentication through Apple Sign-In</li>
            <li><strong>Access Controls:</strong> Limited access to your data by authorized personnel only</li>
            <li><strong>Regular Updates:</strong> Security patches and updates to address vulnerabilities</li>
          </ul>
          <p className="font-semibold text-red-600">However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Data Retention</h2>
          <p>We retain your information for as long as necessary to provide our services:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Active Accounts:</strong> Your data is retained while your account is active</li>
            <li><strong>Deleted Accounts:</strong> Data is deleted within 30 days of account deletion (unless required by law)</li>
            <li><strong>Backups:</strong> Some data may persist in backup systems for up to 90 days</li>
          </ul>
          <p>You can request deletion of your account and data at any time by contacting us at <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a>.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Access and Portability</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Request a copy of your personal data</li>
            <li>Export your tournament and match data from the app</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Correction</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Update or correct inaccurate information in your profile or account settings</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Deletion</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Request deletion of your account and associated data</li>
            <li>Delete individual matches, tournaments, or videos at any time</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Restriction</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Limit how we process your personal information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Objection</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Object to certain processing of your personal information</li>
          </ul>

          <p>To exercise these rights, contact us at <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a>.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Children's Privacy</h2>
          <p>GrappleHub is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
          <p><strong>If you are under 13:</strong> Do not use this app or provide any information.</p>
          <p><strong>If you are a parent or guardian:</strong> If you believe your child under 13 has provided us with personal information, please contact us immediately at <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a>, and we will delete such information.</p>
          <p><strong>Users aged 13-17:</strong> We recommend obtaining parental consent before using the app, especially when uploading videos containing minors.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Third-Party Services</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Apple Sign-In</h3>
          <p>We use Apple Sign-In for authentication. Apple's Privacy Policy applies to information collected through this service: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.apple.com/legal/privacy/</a></p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cloud Storage (Optional)</h3>
          <p>If you choose to connect cloud storage services:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>iCloud:</strong> Apple's Privacy Policy applies</li>
            <li><strong>Google Drive:</strong> Google's Privacy Policy applies</li>
          </ul>
          <p>We do not control and are not responsible for the privacy practices of these third-party services.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics (If Applicable)</h3>
          <p>We may use analytics services to understand app usage. If we do, we will update this policy with details about what analytics services we use and what data they collect.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.</p>
          <p>By using GrappleHub, you consent to the transfer of your information to the United States and other countries where we operate.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">California Privacy Rights</h2>
          <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Right to Know:</strong> What personal information we collect, use, disclose, and sell</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Right to Opt-Out:</strong> We do not sell personal information</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a>.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">European Privacy Rights (GDPR)</h2>
          <p>If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Legal Basis for Processing</h3>
          <p>We process your personal data based on:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Contract:</strong> To provide the services you've requested</li>
            <li><strong>Legitimate Interest:</strong> To improve and secure our services</li>
            <li><strong>Consent:</strong> When you've given explicit consent</li>
            <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your GDPR Rights</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Right of access, rectification, and erasure</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
          </ul>
          <p>Contact us at <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a> to exercise your rights.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Cookies and Tracking Technologies</h2>
          <p>GrappleHub does not currently use cookies. If we implement cookies or similar tracking technologies in the future, we will update this policy and notify you.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Do Not Track</h2>
          <p>Our app does not respond to "Do Not Track" signals. We do not track users across third-party websites or apps.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Posting the updated policy in the app</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an in-app notification (if applicable)</li>
            <li>Emailing you (if we have your email address)</li>
          </ul>
          <p>Your continued use of the app after changes indicates acceptance of the updated Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
          <p><strong>Email:</strong> <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a></p>
          <p><strong>App:</strong> GrappleHub</p>
          <p>We will respond to your inquiry within 30 days.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Summary</h2>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <p className="font-semibold">What we collect:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>Account information (name, email)</li>
                <li>Wrestling data you create (tournaments, matches, videos)</li>
                <li>Device and usage information</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold">Why we collect it:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>To provide the app's core functionality</li>
                <li>To store and sync your data</li>
                <li>To improve the app and fix issues</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold">What we don't do:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>We don't sell your data to third parties</li>
                <li>We don't share your information except as described in this policy</li>
                <li>We don't track you across other apps or websites</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold">Your rights:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>You own your content</li>
                <li>You can delete your data anytime</li>
                <li>You can export your data</li>
                <li>You can contact us with privacy questions</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-12 mb-8">
            <p className="text-center text-gray-700">
              <strong>By using GrappleHub, you acknowledge that you have read and understood this Privacy Policy.</strong>
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}
