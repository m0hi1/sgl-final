import type { Metadata } from "next"
import { SectionHeader } from "@/components/ui/section-header"

export const metadata: Metadata = {
  title: "Refund & Cancellation | SmartGalaxy Labs",
  description: "Refund and cancellation policy for SmartGalaxy Labs describing subscription and refund terms.",
} 

export default function RefundPage() {
  return (
    <main className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Support"
          title="Refund &amp; Cancellation"
          description="Our subscription and cancellation terms — everything you need to know about refunds and cancellations."
        />

        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-card rounded-2xl border border-border p-8 prose prose-slate dark:prose-invert">
            <p className="text-lg font-semibold text-primary mb-4 text-center">
              Our focus is complete customer satisfaction. Please read the subscription details carefully.
            </p>

            <p className="mb-4 text-center text-muted-foreground">
              We offer a Free Membership Plan for trial; upgrading to Prime continues access to core features.
            </p>

            <h2>Cancellation</h2>
            <p>
              In case of dissatisfaction with our services, clients may stop using their ongoing Prime Membership Plan at
              any time and deactivate their account from our platform. However, cancellation does not automatically
              entitle the customer to a refund, particularly when services have already been used during the trial period
              and the customer subsequently upgraded to a paid Prime Membership Plan to continue using the services.
            </p>

            <h2>Terms and Conditions</h2>
            <ul>
              <li>Trial periods provide limited functionality. Core features require subscription to a paid plan.</li>
              <li>Users must register and login using a valid email address or phone number; otherwise the application may not function correctly.</li>
              <li>Subscriptions last for the specified period; we are not obligated to issue refunds for active subscriptions.</li>
            </ul>

            <h2>Subscriptions Policy</h2>
            <p>
              Subscription durations are fixed to the period purchased. If you subscribe to our application, we do not
              guarantee refunds except as required by applicable law or specific refund terms listed at the time of
              purchase. If you have issues subscribing, please contact us at <a href="mailto:smartgalaxylabs@gmail.com">smartgalaxylabs@gmail.com</a>.
            </p>

            <p>
              We provide payment methods to subscribe to our application and reserve the right to change subscription
              prices at our discretion.
            </p>

            <h2>Final Decision</h2>
            <p>
              In case of any discrepancy with the above conditions regarding refunds and cancellations, the decision of
              SmartGalaxy Labs will be final and binding.
            </p>

            <p>
              For any further questions about this policy or our website, email us at <a href="mailto:smartgalaxylabs@gmail.com">smartgalaxylabs@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
