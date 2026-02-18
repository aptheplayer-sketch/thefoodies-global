import Section from "@/components/Section";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Section title="SEO basics for local food businesses" desc="Posted by THE FOODIES">
        <article className="card p-8 max-w-none">
          <p className="muted">
            This is starter content. Replace with your real story, images, and city-specific details.
          </p>
          <h3 className="mt-6 text-lg font-extrabold">What’s happening</h3>
          <p className="mt-2 text-sm text-[rgb(var(--fg))]/70">
            THE FOODIES is building a premium multi-service experience for customers and a simple growth path for partners.
            We’re onboarding city-by-city, focusing on quality, trust, and consistent operations.
          </p>
          <h3 className="mt-6 text-lg font-extrabold">How to join</h3>
          <p className="mt-2 text-sm text-[rgb(var(--fg))]/70">
            Send your details on WhatsApp: <span className="font-semibold">7357666696</span> or email: <span className="font-semibold">a.ptheplayer@gmail.com</span>.
          </p>
          <div className="mt-6">
            <Link href="/partners" className="btn-primary">Become a Partner</Link>
          </div>
        </article>
      </Section>
    </div>
  );
}
