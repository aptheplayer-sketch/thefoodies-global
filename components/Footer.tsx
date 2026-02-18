import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgb(var(--bg))]">
      <div className="container-pad py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-xl font-extrabold tracking-tight">THE FOODIES</div>
            <p className="mt-2 text-sm text-white/70">
              Multi-service platform for Food, Hotels/Restaurants, Travel and Bulk Orders.
              Built to scale partner-by-partner across India.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">Fast onboarding</span>
              <span className="chip">Quality checks</span>
              <span className="chip">Support on WhatsApp</span>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--fg))]/70">
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/services">Services</Link></li>
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/partners">Partners</Link></li>
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/vendors">Vendors</Link></li>
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/cities">Cities</Link></li>
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--fg))]/70">
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-[rgb(var(--fg))]" href="/terms">Terms</Link></li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black p-4 text-white shadow-soft">
              <div className="text-sm font-bold">Support</div>
              <div className="mt-2 text-sm text-white/80">Phone/WhatsApp: <span className="font-semibold text-white">7357666696</span></div>
              <div className="mt-1 text-sm text-white/80">Email: <span className="font-semibold text-white">a.ptheplayer@gmail.com</span></div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} THE FOODIES. All rights reserved.</div>
          <div>Made with ❤️ in India.</div>
        </div>
      </div>
    </footer>
  );
}
