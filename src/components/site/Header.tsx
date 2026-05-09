import { Link } from "@tanstack/react-router";
import { Briefcase, BellRing, Globe2, ExternalLink } from "lucide-react";
import logo from "@/assets/walkins-logo.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center overflow-hidden">
        <img src={logo} alt="Walkins logo" className="h-full w-full object-contain" />
      </span>
      <span className="text-lg font-bold text-foreground tracking-tight">Walkins</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
          <Link to="/drives" className="group relative flex items-center gap-2 hover:text-foreground transition-colors">
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.18_258)] to-[oklch(0.5_0.22_265)] text-white shadow-[0_6px_14px_-6px_oklch(0.5_0.22_265/0.6),inset_0_1px_0_oklch(1_0_0/0.35)] ring-1 ring-white/20 group-hover:-translate-y-0.5 transition-transform">
              <Briefcase className="h-4 w-4" strokeWidth={2.25} />
              <span className="pointer-events-none absolute inset-x-1.5 top-0.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/40 to-transparent" />
            </span>
            Walk-in Drives
            <span className="absolute -bottom-1 left-10 right-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-blue to-transparent transition-transform group-hover:scale-x-100" />
          </Link>
          <a href="#alerts" className="group relative flex items-center gap-2 hover:text-foreground transition-colors">
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 text-white shadow-[0_6px_14px_-6px_oklch(0.7_0.18_60/0.65),inset_0_1px_0_oklch(1_0_0/0.4)] ring-1 ring-white/25 group-hover:-translate-y-0.5 transition-transform">
              <BellRing className="h-4 w-4" strokeWidth={2.25} />
              <span className="pointer-events-none absolute inset-x-1.5 top-0.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-background" />
            </span>
            Job Alerts
            <span className="absolute -bottom-1 left-10 right-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-amber-500 to-transparent transition-transform group-hover:scale-x-100" />
          </a>
          <Link to="/blogs" className="group relative flex items-center gap-2 hover:text-foreground transition-colors">
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-[0_6px_14px_-6px_oklch(0.65_0.16_165/0.6),inset_0_1px_0_oklch(1_0_0/0.4)] ring-1 ring-white/25 group-hover:-translate-y-0.5 transition-transform">
              <Globe2 className="h-4 w-4" strokeWidth={2.25} />
              <span className="pointer-events-none absolute inset-x-1.5 top-0.5 h-1/3 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent" />
            </span>
            Blogs
            <span className="absolute -bottom-1 left-10 right-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-transparent transition-transform group-hover:scale-x-100" />
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:inline-flex items-center rounded-full bg-brand-yellow px-4 py-2 text-sm font-semibold text-brand-yellow-foreground shadow-sm hover:brightness-95 transition">
            Post a Drive
          </button>
          <button className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition">
            Login
          </button>
          <a href="#recruiters" className="hidden lg:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
            For Recruiters <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
