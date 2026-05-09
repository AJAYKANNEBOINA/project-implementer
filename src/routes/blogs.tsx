import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ExternalLink } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Walk-in Drive Blogs & Interview Tips — Walkins" },
      { name: "description", content: "Curated blogs and guides on walk-in interviews — preparation tips, checklists, and questions from India's top career platforms." },
      { property: "og:title", content: "Walk-in Drive Blogs & Interview Tips — Walkins" },
      { property: "og:description", content: "Hand-picked articles to help you crack your next walk-in interview." },
    ],
  }),
  component: BlogsPage,
});

const blogPosts = [
  {
    title: "How to Prepare for Walk-In Interviews as a Fresher",
    source: "Softat",
    excerpt: "A step-by-step guide for freshers covering research, resume tips, dress code and follow-ups.",
    readTime: "6 min read",
    url: "https://softat.co.in/prepare-for-walk-in-interviews-as-a-fresher-step-by-step-guide/",
    tag: "Freshers",
  },
  {
    title: "How Freshers Can Nail Walk-In Interviews",
    source: "TimesJobs",
    excerpt: "Practical tips on presenting yourself, handling spontaneous questions and standing out in walk-ins.",
    readTime: "5 min read",
    url: "https://content.timesjobs.com/how-freshers-can-nail-walk-in-interviews/articleshow/113434449.cms",
    tag: "Interview Tips",
  },
  {
    title: "How to Prepare for a Walk-In Interview",
    source: "Naukri",
    excerpt: "What to wear, what to carry, and the exact prep checklist trusted by lakhs of candidates.",
    readTime: "8 min read",
    url: "https://www.naukri.com/blog/how-to-prepare-for-a-walk-in-interview/",
    tag: "Checklist",
  },
  {
    title: "Ace Your Next Walk-in Interview: Tips & Guide",
    source: "Internshala",
    excerpt: "An updated playbook on what walk-ins look like today and how to win them on the spot.",
    readTime: "8 min read",
    url: "https://internshala.com/blog/what-is-a-walk-in-interview/",
    tag: "Guide",
  },
  {
    title: "Walk-in Interview Preparation Tips & Questions",
    source: "foundit",
    excerpt: "Common questions asked at walk-ins along with sample answers and confidence boosters.",
    readTime: "7 min read",
    url: "https://www.foundit.in/career-advice/walk-in-interview/",
    tag: "Q&A",
  },
  {
    title: "Guide to Prepare for a Walk-in Job Interview",
    source: "Apna",
    excerpt: "Meaning, tips and the end-to-end process of walk-in hiring explained for Indian job seekers.",
    readTime: "6 min read",
    url: "https://apna.co/career-central/tips-to-prepare-for-a-walk-in-interview-a-quick-guide/",
    tag: "Process",
  },
];

function BlogsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">FROM THE BLOG</p>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Walk-in drive insights & tips.</h1>
            <p className="text-sm text-muted-foreground max-w-md">
              Hand-picked articles from India's top career platforms to help you crack your next walk-in.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-brand-blue">
                    <BookOpen className="h-3 w-3" /> {post.tag}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground leading-snug group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-xs font-medium text-muted-foreground">{post.source}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                    Read <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
