import Section from "@/components/Section";

export default function Page() {
  return (
    <div>
      <Section title="Terms" desc="Starter terms text — replace with your final legal version.">
        <div className="card p-8 space-y-4 text-sm text-[rgb(var(--fg))]/70">
          <p>By using THE FOODIES, you agree to provide accurate information and follow platform policies.</p>
          <p>Partners are responsible for service delivery quality, timing, and compliance in their city.</p>
          <p>THE FOODIES may update features and policies to improve safety and operations.</p>
        </div>
      </Section>
    </div>
  );
}
