import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Silver Estate Resort" },
      { name: "description", content: "How Silver Estate Resort collects, uses and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-ivory py-20">
        <article className="mx-auto max-w-3xl px-6 prose-luxe text-foreground/85 space-y-6 leading-relaxed">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
          <Section title="1. Overview">
            Silver Estate Resort ("we", "our", "us") respects your privacy. This policy describes
            how we collect, use and safeguard information shared through our website and inquiries.
          </Section>
          <Section title="2. Information We Collect">
            We collect details you voluntarily provide through inquiry and contact forms — name,
            email, phone, event type, date, guest count, and any message or special requirements.
          </Section>
          <Section title="3. How We Use Information">
            Information is used solely to respond to your inquiry, plan your event, send confirmations
            and improve our service. We do not sell or rent your information to third parties.
          </Section>
          <Section title="4. Data Storage">
            Inquiry data is stored securely and accessed only by authorised members of the
            Silver Estate Resort management and wedding concierge teams.
          </Section>
          <Section title="5. Cookies">
            Our website may use essential cookies to enable basic site functionality and
            performance analytics. You may disable cookies in your browser settings.
          </Section>
          <Section title="6. Third-Party Services">
            We may use trusted third-party services (such as embedded maps) which have their own
            privacy policies.
          </Section>
          <Section title="7. Your Rights">
            You may request access to, correction of, or deletion of your personal information at
            any time by writing to us.
          </Section>
          <Section title="8. Contact">
            For any privacy-related queries, contact us at{" "}
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
