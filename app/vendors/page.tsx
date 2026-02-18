import Section from "@/components/Section";

export default function Page() {
  return (
    <div>
      <Section
        title="Vendors"
        desc="Packaging, raw material suppliers, and service vendors can join to support partners across cities."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Packaging", "Bagasse trays, lids, containers, stickers, and delivery essentials."],
            ["Ingredients", "Reliable suppliers for spices, groceries, and daily needs."],
            ["Services", "Logistics, printing, branding, and support services."]
          ].map(([t, d]) => (
            <div key={t} className="card p-6">
              <div className="text-lg font-extrabold">{t}</div>
              <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-8">
          <div className="text-xl font-extrabold">Register as vendor</div>
          <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">
            Send your catalog + cities served + pricing on WhatsApp/email. We’ll verify and list you.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <div><span className="font-semibold">WhatsApp:</span> 7357666696</div>
            <div><span className="font-semibold">Email:</span> a.ptheplayer@gmail.com</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
