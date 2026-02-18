import Image from "next/image";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="THE FOODIES" width={compact ? 120 : 180} height={52} priority />
      {!compact && (
        <span className="hidden md:block text-xs text-white/60 tracking-widest">
          FOOD • HOTELS • TRAVEL • BULK
        </span>
      )}
    </div>
  );
}
