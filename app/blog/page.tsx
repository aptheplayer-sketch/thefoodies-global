import Section from "@/components/Section";
import Link from "next/link";

const posts = [
  { slug: "launching-soon", title: "THE FOODIES is launching soon", date: "2026-02-16", excerpt: "Partners & vendors onboarding starts now. Here's what to expect." },
  { slug: "partner-standards", title: "Partner standards that build trust", date: "2026-02-16", excerpt: "How we keep quality high while scaling city-by-city." },
  { slug: "seo-for-local-business", title: "SEO basics for local food businesses", date: "2026-02-16", excerpt: "A simple checklist to rank better and get more orders." },
];

export default function Page() {
  return (
    <div>
      <Section title="Blog" desc="Updates, growth tips, and announcements from THE FOODIES.">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card block p-6 transition hover:-translate-y-1">
              <div className="text-xs text-[rgb(var(--fg))]/60">{p.date}</div>
              <div className="mt-2 text-lg font-extrabold">{p.title}</div>
              <p className="mt-2 text-sm text-[rgb(var(--fg))]/60">{p.excerpt}</p>
              <div className="mt-4 text-sm font-semibold">Read →</div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
