import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - GrappleHub',
  description: 'GrappleHub Terms of Service',
}

export default function Terms() {
  return (
    <>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8"><strong>Last Updated: January 27, 2026</strong></p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using GrappleHub ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. Description of Service</h2>
          <p>GrappleHub is a mobile application that allows users to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Track wrestling tournaments and matches</li>
            <li>Record match results and statistics</li>
            <li>Upload and store match videos</li>
            <li>Manage wrestler profiles and performance data</li>
            <li>Access historical tournament and match information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Eligibility</h2>
          <p>You must be at least 18 years of age to create an account and use this App. GrappleHub is designed for parents, guardians, and coaches to track the wrestling performance of athletes, including minors. The App is not intended for children to use directly.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. Account Registration</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Account Creation</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>You may be required to create an account using Apple Sign-In or other authentication methods</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activities that occur under your account</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Account Information</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>You agree to provide accurate, current, and complete information</li>
            <li>You agree to update your information to keep it accurate and current</li>
            <li>We reserve the right to suspend or terminate accounts with false or misleading information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. User Content</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Your Content</h3>
          <p>You retain ownership of all content you upload to the App, including:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Match videos</li>
            <li>Tournament information</li>
            <li>Wrestler profiles</li>
            <li>Match statistics and notes</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.2 License Grant</h3>
          <p>By uploading content, you grant GrappleHub a non-exclusive, worldwide, royalty-free license to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Store and process your content to provide the service</li>
            <li>Display your content back to you within the App</li>
            <li>Back up your content for data protection purposes</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Content Restrictions</h3>
          <p>You agree NOT to upload content that:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Violates any laws or regulations</li>
            <li>Infringes on intellectual property rights of others</li>
            <li>Contains malware, viruses, or harmful code</li>
            <li>Is hateful, threatening, or harassing</li>
            <li>Contains personal information of minors without parental consent</li>
            <li>Is pornographic or sexually explicit</li>
            <li>Promotes violence or illegal activities</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.4 Content Removal</h3>
          <p>We reserve the right to remove any content that violates these Terms without prior notice.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">6. Video Content and Storage</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Video Uploads</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>You are responsible for all videos you upload to the App</li>
            <li>Videos should only contain content you have the right to share</li>
            <li>Match videos should respect the privacy of all participants</li>
            <li>You should obtain consent from wrestlers (or their parents/guardians if minors) before uploading videos</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Storage</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Videos may be stored on cloud services (iCloud, Google Drive, or our servers)</li>
            <li>We are not responsible for data loss due to cloud service failures</li>
            <li>You are responsible for maintaining backups of important content</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Storage Limits</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>We may impose storage limits on video uploads</li>
            <li>We reserve the right to delete old content to manage storage capacity</li>
            <li>You will be notified before any content deletion when possible</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">7. Privacy</h2>
          <p>Your use of the App is also governed by our Privacy Policy. Please review our <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a> to understand our practices.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">8. Prohibited Uses</h2>
          <p>You agree NOT to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Use the App for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to the App or related systems</li>
            <li>Interfere with or disrupt the App's functionality</li>
            <li>Use automated systems (bots, scrapers) to access the App</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Remove or modify any copyright, trademark, or proprietary notices</li>
            <li>Impersonate another person or entity</li>
            <li>Share your account credentials with others</li>
            <li>Use the App to harass, abuse, or harm others</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">9. Intellectual Property</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">9.1 App Ownership</h3>
          <p>GrappleHub, including all software, designs, text, graphics, and other content (excluding user content), is owned by us or our licensors and is protected by copyright, trademark, and other laws.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Trademarks</h3>
          <p>GrappleHub and related logos are trademarks. You may not use these without our prior written permission.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Limited License</h3>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">10. Third-Party Services</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">10.1 Third-Party Integration</h3>
          <p>The App may integrate with third-party services such as:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Apple Sign-In</li>
            <li>iCloud storage</li>
            <li>Google Drive</li>
            <li>Payment processors (if applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">10.2 Third-Party Terms</h3>
          <p>Your use of third-party services is subject to their respective terms and conditions. We are not responsible for third-party services.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">11. Disclaimers</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">11.1 No Warranties</h3>
          <p className="font-semibold">THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">11.2 Service Availability</h3>
          <p>We do not guarantee that:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>The App will be available at all times without interruption</li>
            <li>The App will be error-free or secure</li>
            <li>Any defects will be corrected</li>
            <li>The App will meet your specific requirements</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">11.3 Data Accuracy</h3>
          <p>We are not responsible for:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Accuracy of user-entered data</li>
            <li>Loss of data due to technical issues</li>
            <li>Errors in statistics or calculations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">12. Limitation of Liability</h2>
          <p className="font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
            <li>ANY LOSS OF PROFITS, REVENUE, DATA, OR USE</li>
            <li>ANY DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE APP</li>
            <li>ANY DAMAGES ARISING FROM USER CONTENT OR THIRD-PARTY SERVICES</li>
          </ul>
          <p className="font-semibold">OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO USE THE APP IN THE PAST 12 MONTHS, OR $100, WHICHEVER IS LESS.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">13. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless GrappleHub and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Your use of the App</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your user content</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">14. Termination</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">14.1 By You</h3>
          <p>You may stop using the App at any time. You can delete your account and all associated data directly within the app by going to Profile &gt; Delete Account, or by contacting us.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">14.2 By Us</h3>
          <p>We may suspend or terminate your access to the App at any time, with or without notice, for:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Violation of these Terms</li>
            <li>Fraudulent or illegal activity</li>
            <li>Extended periods of inactivity</li>
            <li>Any reason at our sole discretion</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">14.3 Effect of Termination</h3>
          <p>Upon termination:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Your right to use the App will immediately cease</li>
            <li>We may delete your account and content</li>
            <li>You remain responsible for any obligations incurred before termination</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">15. Children's Privacy &amp; COPPA Compliance</h2>
          <p>GrappleHub accounts may only be created by users who are 18 years of age or older. The App is designed for parents, guardians, and coaches to track the performance of wrestlers, including minors.</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>No direct use by children:</strong> Children under 18 should not create accounts or use the App directly</li>
            <li><strong>Parental control:</strong> All data about minor wrestlers is entered and controlled by the adult account holder</li>
            <li><strong>COPPA compliance:</strong> We do not knowingly collect personal information directly from children under 13</li>
            <li><strong>Parental rights:</strong> Parents/guardians can review, modify, or delete their children's wrestler profiles at any time</li>
          </ul>
          <p>If we learn that a child under 13 has created an account without parental consent, we will delete the account promptly. Contact us at <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a> if you believe a child has created an account.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">16. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Posting the updated Terms in the App</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an in-app notification or email (if applicable)</li>
          </ul>
          <p>Your continued use of the App after changes constitutes acceptance of the new Terms.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">17. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">18. Dispute Resolution</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">18.1 Informal Resolution</h3>
          <p>Before filing a claim, you agree to contact us to attempt to resolve the dispute informally.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">18.2 Arbitration</h3>
          <p>Any disputes arising from these Terms or the App shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court, except that you may assert claims in small claims court if they qualify.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">18.3 Class Action Waiver</h3>
          <p>You agree to resolve disputes on an individual basis and waive any right to participate in a class action lawsuit or class-wide arbitration.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">19. Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">20. Entire Agreement</h2>
          <p>These Terms, along with our Privacy Policy, constitute the entire agreement between you and GrappleHub regarding the use of the App and supersede any prior agreements.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">21. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:grapplehubapp@gmail.com" className="text-secondary hover:underline">grapplehubapp@gmail.com</a></p>
          <p><strong>App:</strong> GrappleHub</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">22. App-Specific Terms</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">22.1 Tournament Data</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Tournament and match data you create is yours</li>
            <li>You may export your data at any time</li>
            <li>We may aggregate anonymous statistics for service improvement</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">22.2 Video Content</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Videos are stored securely but we cannot guarantee absolute security</li>
            <li>You are responsible for obtaining necessary permissions before recording or uploading videos of wrestling matches</li>
            <li>Videos containing minors should only be uploaded with appropriate parental/guardian consent</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">22.3 Statistics and Scoring</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Match statistics are for informational purposes only</li>
            <li>We are not responsible for errors in scoring or statistics</li>
            <li>Official match records should be verified with tournament organizers</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mt-12 mb-8">
            <p className="text-center text-gray-700">
              <strong>By using GrappleHub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}
