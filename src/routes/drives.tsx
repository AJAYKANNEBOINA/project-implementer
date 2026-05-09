import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Search, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { DriveCard } from "@/components/site/DriveCard";
import { drives } from "@/lib/drives";

export const Route = createFileRoute("/drives")({
  head: () => ({
    meta: [
      { title: "All Walk-in Drives — Walkins" },
      { name: "description", content: "Browse all walk-in drives across India. Filter by location, experience, salary and work mode to find the perfect match." },
      { property: "og:title", content: "All Walk-in Drives — Walkins" },
      { property: "og:description", content: "Find your next walk-in drive. Verified employers across India, updated daily." },
    ],
  }),
  component: DrivesPage,
});

const locations = ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Chennai", "Delhi NCR"];
const experiences = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5-8 years", "8-12 years", "12+ years"];

function DrivesPage() {
  const [query, setQuery] = useState("");
  const [loc, setLoc] = useState("");
  const [selectedLocs, setSelectedLocs] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string>("");

  const filtered = useMemo(() => {
    return drives.filter((d) => {
      if (query && !`${d.role} ${d.company}`.toLowerCase().includes(query.toLowerCase())) return false;
      if (loc && !d.location.toLowerCase().includes(loc.toLowerCase())) return false;
      if (selectedLocs.length && !selectedLocs.some((l) => d.location.includes(l))) return false;
      if (selectedExp && d.experience !== selectedExp) return false;
      return true;
    });
  }, [query, loc, selectedLocs, selectedExp]);

  const toggleLoc = (l: string) =>
    setSelectedLocs((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <p className="mt-6 text-xs font-semibold tracking-widest text-muted-foreground">ALL WALK-IN DRIVES</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Find your next walk-in drive
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Filter by location, experience, salary and work mode to find the perfect match.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Skills / Roles / Companies"
                className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              />
            </div>
            <div className="relative sm:w-72">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                placeholder="Location"
                className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              />
            </div>
            <button className="rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition">
              Search
            </button>
          </div>
        </section>

        <section className="bg-section-soft border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[260px_1fr] gap-8">
            <aside className="rounded-2xl border border-border bg-card p-5 h-fit">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Filters</h3>
                <button
                  onClick={() => { setSelectedLocs([]); setSelectedExp(""); }}
                  className="text-xs text-brand-blue hover:underline"
                >
                  Clear all
                </button>
              </div>
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-foreground mb-3">Location</h4>
                <ul className="space-y-2 max-h-44 overflow-y-auto pr-1">
                  {locations.map((l) => (
                    <li key={l}>
                      <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                        <input type="checkbox" checked={selectedLocs.includes(l)} onChange={() => toggleLoc(l)} className="accent-brand-blue" />
                        {l}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Experience</h4>
                <ul className="space-y-2">
                  {experiences.map((e) => (
                    <li key={e}>
                      <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                        <input
                          type="radio"
                          name="exp"
                          checked={selectedExp === e}
                          onChange={() => setSelectedExp(e)}
                          className="accent-brand-blue"
                        />
                        {e}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">OPEN WALK-IN DRIVES</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">{filtered.length} walk-ins available</h2>
              <div className="mt-6 space-y-4">
                {filtered.map((d) => <DriveCard key={d.id} drive={d} />)}
                {filtered.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
                    No walk-ins match your filters.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
