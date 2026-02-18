import Section from "@/components/Section";

export default function Page() {
  return (
    <div>
      <Section title="Contact" desc="Tell us what you want to launch — we’ll guide you.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-8">
            <div className="text-xl font-extrabold">Fast contact</div>
            <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">
              Message on WhatsApp for quickest response. Share: City + Service type + Name + Phone.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div><span className="font-semibold">WhatsApp:</span> 7357666696</div>
              <div><span className="font-semibold">Email:</span> a.ptheplayer@gmail.com</div>
            </div>
          </div>

          <div className="card p-8">
            <div className="text-xl font-extrabold">Business hours</div>
            <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">Support is available daily. We respond as fast as possible.</p>
            <div className="mt-5 space-y-2 text-sm">
              <div><span className="font-semibold">Availability:</span> 9 AM – 9 PM</div>
              <div><span className="font-semibold">Location:</span> India</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
