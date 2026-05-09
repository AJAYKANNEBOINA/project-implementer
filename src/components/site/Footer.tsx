import { Logo } from "./Header";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const cols = [
  { title: "Company", links: ["About Us", "Careers", "Press", "Contact Us"] },
  { title: "Job Seekers", links: ["All Walk-ins", "By Category", "By Location", "Job Alerts", "Resume Builder"] },
  { title: "Employers", links: ["Post a Walk-in", "Pricing", "Bulk Hiring", "For Recruiters"] },
  { title: "Resources", links: ["Blog", "Help Center", "Privacy Policy", "Terms of Use"] },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="[&_a]:text-primary-foreground [&_span:last-child]:text-primary-foreground">
              <Logo />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              India's largest walk-in drives platform connecting candidates with hiring companies in real-time.
            </p>
            <div className="mt-5 flex gap-3 text-primary-foreground/70">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary-foreground transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60">
          <p>© 2026 Walkins.com — All rights reserved.</p>
          <p>Made with care for India's hiring community</p>
        </div>
      </div>
    </footer>
  );
}
