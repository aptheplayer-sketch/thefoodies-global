export default function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="py-14">
      <div className="container-pad">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
          {desc ? <p className="mt-2 text-white/70">{desc}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
