import Link from "next/link";
import Section from "@/components/Section";
import Cta from "@/components/Cta";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-6">
      <div className="text-3xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-[rgb(var(--fg))]/60">{label}</div>
    </div>
  );
}

function ServiceCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="card block p-6 transition hover:-translate-y-1">
      <div className="text-lg font-extrabold">{title}</div>
      <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">{desc}</p>
      <div className="mt-4 text-sm font-semibold">Explore →</div>
    </Link>
  );
}

export default function Page() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.10),transparent_45%),radial-gradient(circle_at_90%_30%,rgba(0,0,0,0.08),transparent_40%),radial-gradient(circle_at_40%_90%,rgba(0,0,0,0.06),transparent_45%)]" />
        <div className="container-pad relative py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="chip">Launching soon for Partners & Vendors</div>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              One brand. <span className="underline decoration-black/20 underline-offset-8">Many services.</span>
            </h1>
            <p className="mt-5 text-lg text-[rgb(var(--fg))]/60">
              THE FOODIES connects customers with trusted partners for Tiffin, Hotels/Restaurants, Travel and Bulk Orders.
              Built to scale city-by-city — with quality checks, fast onboarding, and simple operations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/partners" className="btn-primary">Join as Partner</Link>
              <Link href="/vendors" className="btn-ghost">Register as Vendor</Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">India-first</span>
              <span className="chip">Subscription ready</span>
              <span className="chip">Bulk orders</span>
              <span className="chip">Premium brand feel</span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
            <Stat value="4+" label="Core service categories" />
            <Stat value="24×7" label="Partner onboarding support" />
            <Stat value="PAN India" label="Scale via partners" />
          </div>
        </div>
      </section>

      <Section
        title="Services that grow with you"
        desc="Start with one city — expand to many. We keep the experience clean for customers and simple for partners."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <ServiceCard title="Tiffin & Meal Plans" desc="Daily tiffins, subscription model, predictable operations and demand planning." href="/services#tiffin" />
          <ServiceCard title="Hotels & Restaurants" desc="Discover partner listings, menu highlights, and order flow ready for growth." href="/services#hotels" />
          <ServiceCard title="Travel & Bookings" desc="Trips, rentals, and travel assistance — designed for local partners to serve fast." href="/services#travel" />
          <ServiceCard title="Bulk & Corporate Orders" desc="Office meals, events, and bulk deliveries with clear scheduling & control." href="/services#bulk" />
        </div>
      </Section>

      <Section
        title="Why partners choose THE FOODIES"
        desc="We focus on brand trust, smooth onboarding, and visibility — so your business grows."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Fast onboarding", "Submit details, get reviewed, go live — no complicated process."],
            ["Quality + trust", "Brand standards + verification so customers order with confidence."],
            ["Simple operations", "Clear flow + tracking so your team stays in control."],
            ["City expansion", "Grow city-by-city with partners and vendors."],
            ["Support system", "WhatsApp-first support for fast issue resolution."],
            ["SEO ready", "Dedicated pages + sitemap so Google can index properly."],
          ].map(([t, d]) => (
            <div key={t} className="card p-6">
              <div className="text-base font-extrabold">{t}</div>
              <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Cta
            title="Ready to go live in your city?"
            desc="If you’re a kitchen, restaurant, hotel, or travel partner — let’s onboard you and launch together."
          />
        </div>
      </Section>
    </div>
  );
}
