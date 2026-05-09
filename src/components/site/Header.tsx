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
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/drives" className="group flex items-center gap-2 hover:text-foreground transition-colors">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-500/10 text-brand-blue ring-1 ring-blue-500/20 group-hover:bg-blue-500/15 transition">
              <Briefcase className="h-3.5 w-3.5" fill="currentColor" strokeWidth={1.5} />
            </span>
            Walk-in Drives
          </Link>
          <a href="#alerts" className="group flex items-center gap-2 hover:text-foreground transition-colors">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-amber-400/15 text-amber-600 ring-1 ring-amber-400/30 group-hover:bg-amber-400/25 transition">
              <BellRing className="h-3.5 w-3.5" fill="currentColor" strokeWidth={1.5} />
            </span>
            Job Alerts
          </a>
          <Link to="/blogs" className="group flex items-center gap-2 hover:text-foreground transition-colors">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/15 transition">
              <Globe2 className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            Blogs
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
