import type { Metadata } from "next"
import { SectionHeader } from "@/components/ui/section-header"

export const metadata: Metadata = {
  title: "Privacy Policy | SmartGalaxy Labs",
  description: "Privacy policy for SmartGalaxy Labs outlining how we collect, use, and protect your information.",
} 

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Privacy"
          title="Privacy Policy"
          description="How we collect, use, and protect your information. Your privacy matters — here’s how we handle your data."
        />

        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-card rounded-2xl border border-border p-8 prose prose-slate dark:prose-invert">
            <p className="text-lg font-semibold text-primary mb-4 text-center">
              Welcome to <strong>SmartGalaxy Labs</strong>. Your privacy is very important to us.
            </p>

            <p className="mb-4 text-center text-muted-foreground">
              We insist upon the highest standards for secure transactions and customer information privacy — please read
              this policy carefully before using our site or app.
            </p>

            <h2>Website Visitors</h2>
            <p>
              SmartGalaxy Labs collects non-personally-identifying information of the sort that web browsers and
              servers typically make available, such as the browser type, language preference, referring site, and the
              date and time of each visitor request. The purpose in collecting non-personally identifying information is
              to better understand how visitors use its website. From time to time, SmartGalaxy Labs may release
              non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the
              usage of its website.
            </p>

            <p>
              SmartGalaxy Labs also collects potentially personally-identifying information like Internet Protocol (IP)
              addresses for logged in users.
            </p>

            <p>
              We store and process your information, such as address information including your mobile number along with
              financial data if any, using stringent security measures. As a visitor to our site or mobile application,
              you are advised to please read the Privacy Policy carefully.
            </p>

            <h2>Gathering of Personally-Identifying Information</h2>
            <p>
              By creating an account & accessing the services provided by SmartGalaxy Labs, you agree to the collection
              and use of your data in the manner provided in this Privacy Policy. If you have any objections to your
              information being stored and processed, please do not use our website and mobile app.
            </p>

            <p>
              We collect user data like your legal name, valid email id, telephone/mobile number, location, address,
              image, billing and shipping addresses, GPS location, country code, which is used for new account creation
              and further user validation to protect our application from fake users and fake profiles. We may also read
              or collect the contact numbers present in the phone when using the mobile app; this is required for certain
              app features (for example, placing an order for one of your contacts) and to provide a better user
              experience.
            </p>

            <p>
              If you contact us directly, we may receive additional information about you such as your name, email
              address, phone number, the contents of the message and/or attachments you may send us, and any other
              information you may choose to provide.
            </p>

            <p>
              When you register for an Account, we may ask for your contact information, including items such as name,
              image, company name, address, email address, and telephone number.
            </p>

            <h2>How We Use Information</h2>
            <ul>
              <li>
                To send communication regarding the status of orders, offers, discounts, upcoming events, advertisements,
                relevant policies, terms, conditions, and feedback.
              </li>
              <li>For internal purposes such as auditing, data analysis, and research to improve services and customer communication.</li>
              <li>You allow us to publish the content you create on this site indefinitely.</li>
            </ul>

            <p>
              By accessing this Website or the Mobile App you agree that SmartGalaxy Labs will not be liable for any
              direct or indirect or consequential loss, damages or compensation arising from the use of the information
              and material contained in this Website or from your access of other material on the internet via web links
              for this Website or the Mobile App.
            </p>

            <p>
              We reserve exclusive rights to modify or amend any condition in this document which will be informed to you
              via the website. Our privacy policy is subject to change at any time without notice. To make sure you are
              aware of any changes, please review this policy periodically via our website. By visiting the website you
              agree to be bound by the terms and conditions of this Policy. If you do not agree please do not use or access
              our Website and Application.
            </p>

            <h2>Payment Gateway</h2>
            <p>
              SmartGalaxy Labs uses third party payment processor services to assist it in securely processing your
              payment transaction. Payment gateways' use of your personal information is governed by their respective
              privacy policies which may or may not contain privacy protections as protective as our Privacy Policy. We
              recommend reviewing the Payment Gateway’s Privacy Policy if you wish to learn more.
            </p>

            <h2>Contact</h2>
            <p>For any further questions about this Agreement or the Website please email us at <a href="mailto:smartgalaxylabs@gmail.com">smartgalaxylabs@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
