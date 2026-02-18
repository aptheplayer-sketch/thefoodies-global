import Link from "next/link";

export default function Cta({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-6 p-8 md:grid-cols-3 md:items-center">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold tracking-tight">{title}</div>
          <p className="mt-2 text-[rgb(var(--fg))]/60">{desc}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link href="/contact" className="btn-primary w-full md:w-auto">Talk to us</Link>
          <Link href="/partners" className="btn-ghost w-full md:w-auto">Become a Partner</Link>
        </div>
      </div>
    </div>
  );
}
