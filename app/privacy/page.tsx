import Section from "@/components/Section";

export default function Page() {
  return (
    <div>
      <Section title="Privacy Policy" desc="Starter privacy policy text — replace with your final legal version.">
        <div className="card p-8 space-y-4 text-sm text-[rgb(var(--fg))]/70">
          <p>We collect information you share with us (name, phone, email, city, service type) for onboarding and support.</p>
          <p>We do not sell your personal data. We may share necessary details with partners to fulfill service requests.</p>
          <p>For questions, contact: a.ptheplayer@gmail.com</p>
        </div>
      </Section>
    </div>
  );
}
