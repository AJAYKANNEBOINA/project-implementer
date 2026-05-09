import { Calendar, Clock, MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import type { Drive } from "@/lib/drives";

export function DriveCard({ drive }: { drive: Drive }) {
  return (
    <div className="group rounded-2xl border border-border/70 bg-card p-5 hover:border-brand-blue/40 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary font-bold">
          {drive.logoSeed}
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
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{drive.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{drive.time}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{drive.location}</span>
            <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5" />{drive.eligibility}</span>
          </div>
        </div>
        <button className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition">
          View details <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
