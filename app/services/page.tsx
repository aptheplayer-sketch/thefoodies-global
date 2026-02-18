import Section from "@/components/Section";
import Cta from "@/components/Cta";

function Block({ id, title, points }: { id: string; title: string; points: string[] }) {
  return (
    <div id={id} className="card p-8 scroll-mt-24">
      <div className="text-2xl font-extrabold tracking-tight">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--fg))]/70">
        {points.map(p => <li key={p}>• {p}</li>)}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Section title="Services" desc="Everything THE FOODIES offers — designed to look premium for customers and work smoothly for partners.">
        <div className="grid gap-4">
          <Block id="tiffin" title="Tiffin & Meal Plans" points={[
            "Subscription-first operations for predictable demand",
            "Flexible weekly / monthly plans",
            "Delivery-friendly packaging guidance",
            "Bulk add-ons for offices and events"
          ]} />
          <Block id="hotels" title="Hotels & Restaurants" points={[
            "Partner listings with clean categories",
            "Menu & highlights (coming soon)",
            "Location & city expansion model",
            "Customer trust + quality verification"
          ]} />
          <Block id="travel" title="Travel" points={[
            "Local travel partners onboarded city-wise",
            "Trip assistance and bookings (coming soon)",
            "Corporate travel support option"
          ]} />
          <Block id="bulk" title="Bulk & Corporate Orders" points={[
            "Bulk ordering workflow",
            "Scheduling + delivery planning",
            "Priority support for corporate clients"
          ]} />
        </div>

        <div className="mt-8">
          <Cta title="Want your service listed?" desc="Tell us your city and service type — we’ll guide you through onboarding." />
        </div>
      </Section>
    </div>
  );
}
