import { CalendarBlank, Clock, MapPin, GraduationCap, ArrowUpRight } from "@phosphor-icons/react";
import type { Drive } from "@/lib/drives";
import { logoMap } from "@/lib/logos";

export function DriveCard({ drive }: { drive: Drive }) {
  const logo = logoMap[drive.company];
  return (
    <div className="group rounded-2xl border border-border/70 bg-card p-5 hover:border-brand-blue/40 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-card border border-border overflow-hidden">
          {logo ? (
            <img src={logo} alt={`${drive.company} logo`} className="h-9 w-9 object-contain" loading="lazy" />
          ) : (
            <span className="text-primary font-bold">{drive.logoSeed}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="font-semibold text-brand-blue">{drive.company}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{drive.experience}</span>
            {drive.priority && (
              <span className="ml-1 rounded-md bg-brand-yellow/30 px-2 py-0.5 text-[10px] font-semibold text-brand-yellow-foreground">
                Company Priority
              </span>
            )}
          </div>
          <h3 className="mt-1.5 text-base font-semibold text-foreground leading-snug">{drive.role}</h3>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground">
            <Meta icon={<CalendarBlank weight="duotone" className="h-3.5 w-3.5" />} label={drive.date} />
            <Meta icon={<Clock weight="duotone" className="h-3.5 w-3.5" />} label={drive.time} />
            <Meta icon={<MapPin weight="duotone" className="h-3.5 w-3.5" />} label={drive.location} />
            <Meta icon={<GraduationCap weight="duotone" className="h-3.5 w-3.5" />} label={drive.eligibility} />
          </div>
        </div>
        <button className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-primary-foreground hover:brightness-110 transition">
          View details <ArrowUpRight weight="bold" className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="grid h-6 w-6 place-items-center rounded-md bg-secondary text-brand-blue">
        {icon}
      </span>
      {label}
    </span>
  );
}
