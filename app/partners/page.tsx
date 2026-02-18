import Section from "@/components/Section";

function Step({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="card p-6">
      <div className="chip">Step {n}</div>
      <div className="mt-3 text-lg font-extrabold">{t}</div>
      <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">{d}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Section
        title="Become a Partner"
        desc="Join THE FOODIES in your city. Kitchens, Restaurants, Hotels, and Travel providers can onboard and start getting visibility."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Step n="1" t="Apply" d="Share your business details, city, service type, and contact." />
          <Step n="2" t="Verify" d="We review and verify details to protect brand trust." />
          <Step n="3" t="Launch" d="Go live and start receiving leads/orders as we expand." />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="card p-8">
            <div className="text-xl font-extrabold">Partner perks</div>
            <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--fg))]/70">
              <li>• Brand visibility under THE FOODIES</li>
              <li>• City-wise expansion strategy</li>
              <li>• WhatsApp-first support</li>
              <li>• Growth-focused listings & SEO pages</li>
            </ul>
          </div>
          <div className="card p-8">
            <div className="text-xl font-extrabold">Contact to onboard</div>
            <p className="mt-3 text-sm text-[rgb(var(--fg))]/60">Send your details on WhatsApp or email. We’ll respond with next steps.</p>
            <div className="mt-5 space-y-2 text-sm">
              <div><span className="font-semibold">WhatsApp:</span> 7357666696</div>
              <div><span className="font-semibold">Email:</span> a.ptheplayer@gmail.com</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
