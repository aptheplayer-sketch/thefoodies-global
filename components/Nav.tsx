import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partners" },
  { href: "/vendors", label: "Vendors" },
  { href: "/cities", label: "Cities" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,9,12,0.75)] backdrop-blur">
      <div className="container-pad flex items-center justify-between py-3">
        <Link href="/" className="hover:opacity-90">
          <Logo compact />
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold text-white/70 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/partners" className="btn-ghost hidden md:inline-flex">Become a Partner</Link>
          <Link href="/contact" className="btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
