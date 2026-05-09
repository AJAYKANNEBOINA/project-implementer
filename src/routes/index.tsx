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
  { icon: MapPin, title: "Location-Based Drive Feed", desc: "Get personalized drive recommendations based on your current location and preferences." },
  { icon: Calendar, title: "Daily Walk-In Calendar", desc: "Never miss an opportunity with our comprehensive calendar of daily walk-in events." },
  { icon: FileCheck, title: "Document Checklist", desc: "Know exactly what to carry — resume, ID, certificates, photos — for every drive." },
  { icon: Navigation, title: "Map-Based Directions", desc: "Get turn-by-turn directions to interview venues with accurate timing estimates." },
  { icon: Bell, title: "Instant Drive Alerts", desc: "Receive real-time notifications when new walk-in opportunities match your criteria." },
  { icon: ShieldCheck, title: "Verified Company Posts", desc: "All drive postings are verified to ensure authentic opportunities and prevent fraud." },
];

function Why() {
  return (
    <section className="bg-section-soft border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose WALKINS?</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to land your next job, faster than ever before.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-sm transition">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-brand-blue">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const empFeatures = [
  { icon: Clock3, title: "Post in Minutes", desc: "Quick & easy job posting" },
  { icon: MapPin, title: "Local Reach", desc: "Target candidates nearby" },
  { icon: Users, title: "Quality Candidates", desc: "Verified job seekers" },
  { icon: Zap, title: "Instant Visibility", desc: "Go live immediately" },
];

function Employers() {
  return (
    <section id="recruiters" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-3xl border border-border bg-card p-10 sm:p-14">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-brand-blue">FOR EMPLOYERS</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            Need to Hire <span className="text-brand-blue">Fast?</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Post your walk-in drive and reach local candidates instantly. No waiting, no delays — find the right talent today.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {empFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border p-5 text-center">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-secondary text-brand-blue">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition">
            Post a Walk-In Drive — It's Free
          </button>
        </div>
      </div>
    </section>
  );
}
