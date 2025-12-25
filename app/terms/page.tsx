import type { Metadata } from "next"
import { SectionHeader } from "@/components/ui/section-header"

export const metadata: Metadata = {
  title: "Terms & Conditions | SmartGalaxy Labs",
  description: "Terms and Conditions for SmartGalaxy Labs — terms governing use of our website and services.",
} 

export default function TermsPage() {
  return (
    <main className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Legal"
          title="Terms &amp; Conditions"
          description="The rules and guidelines that govern the use of SmartGalaxy Labs and its services. Please review them carefully."
        />

        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-card rounded-2xl border border-border p-8 prose prose-slate dark:prose-invert">
            <p className="text-lg font-semibold text-primary mb-4 text-center">
              Welcome to <strong>SmartGalaxy Labs</strong>. Please take a moment to review our Terms &amp; Conditions.
            </p>

            <p className="mb-4 text-center text-muted-foreground">
              By registering or using our site/app you agree to these terms. If you do not agree, please do not create an account.
            </p>

            <h2>Customer Agreement</h2>
            <p>
              This Customer Agreement is an agreement between you (Customer, User of this site) and SmartGalaxy Labs
              (Site, App, We, Us) that states the terms and conditions under which you may use the Site and receive
              SmartGalaxy Labs services, which may include delivery of product orders.
            </p>

            <p>
              These Terms &amp; Conditions and the Privacy Policy are effective upon acceptance during registration for
              new users and are otherwise effective from <strong>11 March 2021</strong> for all users.
            </p>

            <h2>Use of the Website / Mobile Application</h2>
            <p>
              Purchase of the software / Mobile Application is not free of charge. You are not allowed to bypass the
              registration process or access the system without buying the software license. SmartGalaxy Labs does not
              charge a fee for browsing the Website. SmartGalaxy Labs may, at its sole discretion, introduce new services
              and modify existing services, and may introduce or amend fees for such services.
            </p>

            <h2>Non-payment</h2>
            <p>
              SmartGalaxy Labs reserves the right to issue warnings, temporarily or permanently suspend or terminate your
              membership, and refuse access in case of non-payment of fees. SmartGalaxy Labs may also take legal action
              for non-payment. You shall not attempt to circumvent or manipulate the billing process or fees owed to
              SmartGalaxy Labs.
            </p>

            <h2>Your User Account</h2>
            <p>
              You agree to provide SmartGalaxy Labs with accurate and complete information as required for registration,
              including but not limited to your legal name, valid email id, billing and shipping addresses, telephone/mobile
              number, image, GPS location, and country code. This information is used for account creation and user
              validation to protect the application from fake users and profiles. We may read or collect contact numbers
              present on the mobile phone where required for certain app features to provide a better user experience.
            </p>

            <h2>Usage of the User's Email</h2>
            <p>
              SmartGalaxy Labs may send order confirmations and updates regarding order status using the email address
              provided by the customer at the time of ordering or account registration. The customer hereby consents to
              such communications in accordance with applicable guidelines in the respective country.
            </p>

            <h2>Arbitration</h2>
            <p>
              Any dispute arising between you and SmartGalaxy Labs during use of the Website or Mobile Application shall
              be referred to a sole Arbitrator, an independent and neutral third party identified by SmartGalaxy Labs.
              Arbitration proceedings shall be conducted in English.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold SmartGalaxy Labs and its associates harmless from claims and
              expenses, including attorney's fees, arising from a violation of this Agreement by you or through use of
              your account, to the maximum extent permitted by applicable law.
            </p>

            <h2>Privacy</h2>
            <p>
              Use of the Website and Mobile Application is governed by our Privacy Policy. For any further questions
              about this Agreement or the Website, please email us at
              <a href="mailto:smartgalaxylabs@gmail.com"> smartgalaxylabs@gmail.com</a>.
            </p>

            <p>These Terms and Conditions govern your use of SmartGalaxy Labs.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
