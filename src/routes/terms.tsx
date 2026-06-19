import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Silver Estate Resort" },
      { name: "description", content: "Terms governing your inquiry, bookings and use of Silver Estate Resort services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="bg-ivory py-20">
        <article className="mx-auto max-w-3xl px-6 text-foreground/85 space-y-6 leading-relaxed">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
          <Section title="1. Acceptance of Terms">
            By using the Silver Estate Resort website or submitting an inquiry, you agree to these
            terms and conditions. Please read them carefully.
          </Section>
          <Section title="2. Inquiry-Based Bookings">
            All event and room reservations at Silver Estate Resort are inquiry-based. We do not
            offer direct online booking. Bookings are confirmed only after written or verbal
            agreement with our management team and receipt of any applicable deposit.
          </Section>
          <Section title="3. Tariffs & Quotations">
            Quoted tariffs are subject to availability and may change based on date, season,
            décor, catering choices and applicable taxes.
          </Section>
          <Section title="4. Cancellation & Refunds">
            Cancellation and refund policies will be shared as part of your event agreement.
            Specific terms vary based on event scale and date.
          </Section>
          <Section title="5. Conduct of Guests">
            Guests are expected to conduct themselves with respect for the property, staff and
            fellow guests. We reserve the right to refuse service or remove guests engaged in
            disorderly conduct.
          </Section>
          <Section title="6. Liability">
            Silver Estate Resort is not responsible for loss, theft or damage of personal belongings.
            We recommend guests safeguard valuables at all times.
          </Section>
          <Section title="7. Photography">
            We may capture photographs and video of public spaces and events for our marketing
            with the host's consent. Please inform us in advance if you have any restrictions.
          </Section>
          <Section title="8. Modification of Terms">
            We reserve the right to update or modify these terms at any time. The latest version
            will always be available on this page.
          </Section>
          <Section title="9. Governing Law">
            These terms are governed by the laws of India. Any disputes shall be subject to the
            exclusive jurisdiction of courts in Tikamgarh, Madhya Pradesh.
          </Section>
          <Section title="10. Contact">
            For any clarifications, write to{" "}
            <a href={`mailto:${SITE.email}`} className="text-gold-dark hover:text-gold">{SITE.email}</a>{" "}
            or call <a href={`tel:${SITE.phoneRaw}`} className="text-gold-dark hover:text-gold">{SITE.phone}</a>.
          </Section>
        </article>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-foreground mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
