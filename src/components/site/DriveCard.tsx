import { MapPin, CalendarBlank, Clock } from "@phosphor-icons/react";
import type { Drive } from "@/lib/drives";
import { logoMap } from "@/lib/logos";

export function DriveCard({ drive }: { drive: Drive }) {
  const logo = logoMap[drive.company];
  const salary = drive.salary ?? "₹ 4 - 9 LPA";
  const mode = drive.mode ?? "Hybrid";
  const posted = drive.postedDaysAgo ?? 1;
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover:border-brand-blue/40 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-brand-blue leading-tight">{drive.role}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{drive.company}</p>
        </div>
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-card overflow-hidden">
          {logo ? (
            <img src={logo} alt={`${drive.company} logo`} className="h-7 w-7 object-contain" loading="lazy" />
          ) : (
            <span className="text-xs font-bold text-primary">{drive.logoSeed}</span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm text-foreground">
        <MapPin weight="regular" className="h-4 w-4 text-muted-foreground" />
        {drive.location}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        {drive.priority && (
          <Pill dotClass="bg-brand-yellow" className="bg-brand-yellow/20 text-brand-yellow-foreground">
            Company Priority
          </Pill>
        )}
        <Pill dotClass="bg-brand-blue" className="bg-brand-blue/10 text-brand-blue">
          {mode}
        </Pill>
        <span className="rounded-full bg-secondary px-3 py-1 font-medium text-foreground">
          {salary}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CalendarBlank weight="duotone" className="h-3.5 w-3.5 text-brand-blue" />
          {drive.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock weight="duotone" className="h-3.5 w-3.5 text-brand-blue" />
          {drive.time}
        </span>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Posted {posted} day{posted === 1 ? "" : "s"} ago
      </p>
    </div>
  );
}

function Pill({
  children,
  className,
  dotClass,
}: {
  children: React.ReactNode;
  className: string;
  dotClass: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      {children}
    </span>
  );
}
