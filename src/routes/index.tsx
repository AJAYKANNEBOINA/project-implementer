import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, MapPin, Calendar, FileCheck, Navigation, Bell, ShieldCheck, Clock3, Users, Zap } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DriveCard } from "@/components/site/DriveCard";
import { drives } from "@/lib/drives";
import { partnerLogos } from "@/lib/logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Walkins — Walk in. Walk out hired." },
      { name: "description", content: "A curated directory of walk-in interviews from India's most trusted IT, banking and BPM companies. Discover, filter and apply in real-time." },
      { property: "og:title", content: "Walkins — Walk in. Walk out hired." },
      { property: "og:description", content: "Curated walk-in drives from India's top employers. Verified, daily-updated, free." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Drives />
        <Why />
        <Employers />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            14 active walk-in drives this month
          </span>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Walk in. <br />
            Walk out <span className="text-brand-blue">hired.</span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground max-w-lg">
            A curated directory of walk-in interviews from India's most trusted IT, banking and BPM companies — discover, filter and apply in real-time.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/drives" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition">
              Find a drive <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#partners" className="inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition">
              Our partners
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Verified employers", "Updated daily", "100% free"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-blue" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img src={heroOffice} alt="Modern office lobby" width={1280} height={832} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-5 left-5 sm:left-8 rounded-2xl bg-card border border-border shadow-md px-4 py-3 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold text-sm">14</span>
            <div>
              <p className="text-sm font-semibold text-foreground">Top hiring partners</p>
              <p className="text-xs text-muted-foreground">Featured this fortnight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="bg-section-soft border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">HIRING PARTNERS</p>
        <div className="mt-2 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Logos sourced live from Google.</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Every brand mark below is fetched on the fly from Google's brand index — no manual uploads, always up to date.
          </p>
        </div>
        <div className="mt-10 marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <div key={`${p.name}-${i}`} className="shrink-0 w-44 h-24 grid place-items-center rounded-2xl border border-border bg-card p-5 hover:shadow-sm transition">
                <img src={p.src} alt={`${p.name} logo`} loading="lazy" className="max-h-12 max-w-[70%] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Drives() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground">OPEN WALK-IN DRIVES</p>
      <div className="mt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Show up. Get hired.</h2>
        <Link to="/drives" className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition">
          Browse all drives <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {drives.slice(0, 6).map((d) => <DriveCard key={d.id} drive={d} />)}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="/drives"
          className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground bg-gradient-to-b from-[oklch(0.68_0.2_258)] to-brand-blue shadow-[0_10px_30px_-10px_oklch(0.62_0.22_260/0.6),inset_0_1px_0_oklch(1_0_0/0.35)] ring-1 ring-brand-blue/40 hover:shadow-[0_18px_40px_-12px_oklch(0.62_0.22_260/0.7),inset_0_1px_0_oklch(1_0_0/0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          View all walk-in drives
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

const features = [
  { icon: MapPin, title: "Location-Based Drive Feed", desc: "Get personalized drive recommendations based on your current location and preferences.", accent: "from-blue-500/15 to-blue-500/0" },
  { icon: Calendar, title: "Daily Walk-In Calendar", desc: "Never miss an opportunity with our comprehensive calendar of daily walk-in events.", accent: "from-amber-400/20 to-amber-400/0" },
  { icon: FileCheck, title: "Document Checklist", desc: "Know exactly what to carry — resume, ID, certificates, photos — for every drive.", accent: "from-emerald-500/15 to-emerald-500/0" },
  { icon: Navigation, title: "Map-Based Directions", desc: "Get turn-by-turn directions to interview venues with accurate timing estimates.", accent: "from-violet-500/15 to-violet-500/0" },
  { icon: Bell, title: "Instant Drive Alerts", desc: "Receive real-time notifications when new walk-in opportunities match your criteria.", accent: "from-rose-500/15 to-rose-500/0" },
  { icon: ShieldCheck, title: "Verified Company Posts", desc: "All drive postings are verified to ensure authentic opportunities and prevent fraud.", accent: "from-cyan-500/15 to-cyan-500/0" },
];

const whyStats = [
  { value: "14+", label: "Active drives" },
  { value: "120K", label: "Job seekers" },
  { value: "850+", label: "Hiring partners" },
  { value: "4.8★", label: "Candidate rating" },
];

function Why() {
  return (
    <section className="relative bg-section-soft border-y border-border/60 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.62_0.22_260/0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            WHY WALKINS
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Built for the way India <span className="text-brand-blue">actually hires.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to land your next job, faster than ever before — verified drives, real-time alerts and end-to-end prep tools in one place.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_oklch(0.62_0.22_260/0.35)] hover:border-brand-blue/40"
            >
              <div className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} blur-2xl opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-[oklch(0.55_0.22_260)] text-primary-foreground shadow-[0_8px_20px_-8px_oklch(0.62_0.22_260/0.6)] ring-1 ring-white/20">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono text-muted-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="relative mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand-blue opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-border bg-card overflow-hidden">
          {whyStats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-6 text-center ${i > 0 ? "border-l border-border/60" : ""} ${i >= 2 ? "sm:border-l border-l border-t sm:border-t-0 border-border/60" : ""}`}
            >
              <p className="text-3xl font-bold text-foreground tracking-tight">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const empFeatures = [
  { icon: Clock3, title: "Post in Minutes", desc: "Quick & easy job posting", accent: "from-amber-400/25 to-amber-400/0" },
  { icon: MapPin, title: "Local Reach", desc: "Target candidates nearby", accent: "from-blue-500/20 to-blue-500/0" },
  { icon: Users, title: "Quality Candidates", desc: "Verified job seekers", accent: "from-emerald-500/20 to-emerald-500/0" },
  { icon: Zap, title: "Instant Visibility", desc: "Go live immediately", accent: "from-violet-500/20 to-violet-500/0" },
];

const empStats = [
  { value: "48 hrs", label: "Avg. time to hire" },
  { value: "95%", label: "Verified applicants" },
  { value: "0", label: "Posting fees" },
];

function Employers() {
  return (
    <section id="recruiters" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[oklch(0.18_0.04_260)] via-[oklch(0.22_0.06_260)] to-[oklch(0.16_0.04_260)] p-10 sm:p-16 shadow-[0_30px_80px_-30px_oklch(0.62_0.22_260/0.5)]">
        {/* Decorative orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1_0_0/0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1_0_0/0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide text-brand-yellow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            FOR EMPLOYERS
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Need to Hire{" "}
            <span className="bg-gradient-to-r from-brand-yellow to-amber-300 bg-clip-text text-transparent">
              Fast?
            </span>
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
            Post your walk-in drive and reach local candidates instantly. No waiting, no delays — find the right talent today.
          </p>
        </div>

        <div className="relative mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {empFeatures.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20"
            >
              <div className={`pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-gradient-to-br ${f.accent} blur-2xl opacity-80`} />
              <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-[oklch(0.55_0.22_260)] text-primary-foreground shadow-[0_8px_20px_-8px_oklch(0.62_0.22_260/0.7)] ring-1 ring-white/20">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-4 text-base font-semibold text-white">{f.title}</h3>
              <p className="relative mt-1 text-xs text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-12 flex flex-col items-center gap-6">
          <button className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-brand-yellow-foreground bg-gradient-to-b from-brand-yellow to-amber-400 shadow-[0_18px_40px_-12px_oklch(0.85_0.18_85/0.6),inset_0_1px_0_oklch(1_0_0/0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            Post a Walk-In Drive — It's Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <div className="grid grid-cols-3 gap-8 sm:gap-12 pt-2">
            {empStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
