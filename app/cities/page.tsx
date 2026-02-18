import Section from "@/components/Section";

const cities = [
  "Jaipur", "Delhi", "Mumbai", "Pune", "Bengaluru", "Hyderabad", "Ahmedabad",
  "Chandigarh", "Lucknow", "Indore", "Kolkata", "Chennai"
];

export default function Page() {
  return (
    <div>
      <Section
        title="Cities"
        desc="We expand partner-by-partner. If your city is not listed, message us to launch there."
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {cities.map(c => (
            <div key={c} className="card p-5">
              <div className="text-base font-extrabold">{c}</div>
              <div className="mt-1 text-sm text-[rgb(var(--fg))]/60">Partner onboarding available</div>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-8">
          <div className="text-xl font-extrabold">Add your city</div>
          <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">Send: City + Service type + Your name + Phone.</p>
          <div className="mt-5 text-sm"><span className="font-semibold">WhatsApp:</span> 7357666696</div>
        </div>
      </Section>
    </div>
  );
}
