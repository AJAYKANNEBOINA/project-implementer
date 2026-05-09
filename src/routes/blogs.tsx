import { createFileRoute } from "@tanstack/react-router";
import { Eye, Share2 } from "lucide-react";
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

type BlogPost = {
  title: string;
  excerpt: string;
  url: string;
  category: string;
  date: string;
  author: string;
  avatar: string;
  cover: string;
  views: number;
  shares: number;
};

const blogPosts: BlogPost[] = [
  {
    title: "How to Prepare for Walk-In Interviews as a Fresher",
    excerpt: "A step-by-step guide for freshers covering research, resume tips, dress code and follow-ups before your big day.",
    url: "https://softat.co.in/prepare-for-walk-in-interviews-as-a-fresher-step-by-step-guide/",
    category: "Freshers",
    date: "12 Mar 2026",
    author: "Aarav Mehta",
    avatar: "https://i.pravatar.cc/80?img=12",
    cover: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=70",
    views: 184230,
    shares: 412,
  },
  {
    title: "How Freshers Can Nail Walk-In Interviews",
    excerpt: "Practical tips on presenting yourself, handling spontaneous questions and standing out in walk-ins.",
    url: "https://content.timesjobs.com/how-freshers-can-nail-walk-in-interviews/articleshow/113434449.cms",
    category: "Interview Tips",
    date: "28 Jan 2026",
    author: "Ayushi Rathore",
    avatar: "https://i.pravatar.cc/80?img=47",
    cover: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=70",
    views: 96540,
    shares: 218,
  },
  {
    title: "How to Prepare for a Walk-In Interview",
    excerpt: "What to wear, what to carry, and the exact prep checklist trusted by lakhs of candidates across India.",
    url: "https://www.naukri.com/blog/how-to-prepare-for-a-walk-in-interview/",
    category: "Checklist",
    date: "26 Jun 2025",
    author: "Naukri Editors",
    avatar: "https://i.pravatar.cc/80?img=33",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=70",
    views: 4596679,
    shares: 1240,
  },
  {
    title: "Ace Your Next Walk-in Interview: Tips & Guide",
    excerpt: "An updated playbook on what walk-ins look like today and how to win them on the spot.",
    url: "https://internshala.com/blog/what-is-a-walk-in-interview/",
    category: "Guide",
    date: "23 Apr 2025",
    author: "Riya Sharma",
    avatar: "https://i.pravatar.cc/80?img=49",
    cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=70",
    views: 312770,
    shares: 503,
  },
  {
    title: "Walk-in Interview Preparation Tips & Questions",
    excerpt: "Common questions asked at walk-ins along with sample answers and confidence boosters.",
    url: "https://www.foundit.in/career-advice/walk-in-interview/",
    category: "Q&A",
    date: "29 Apr 2025",
    author: "Karan Verma",
    avatar: "https://i.pravatar.cc/80?img=15",
    cover: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=70",
    views: 78460,
    shares: 167,
  },
  {
    title: "Guide to Prepare for a Walk-in Job Interview",
    excerpt: "Meaning, tips and the end-to-end process of walk-in hiring explained for Indian job seekers.",
    url: "https://apna.co/career-central/tips-to-prepare-for-a-walk-in-interview-a-quick-guide/",
    category: "Process",
    date: "13 Mar 2025",
    author: "Priyanka Bakhtani",
    avatar: "https://i.pravatar.cc/80?img=45",
    cover: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=70",
    views: 156320,
    shares: 289,
  },
];

function formatCount(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border bg-card p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="overflow-hidden rounded-xl bg-brand-yellow/30 ring-1 ring-brand-yellow/60">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground/70">{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h3 className="mt-2 text-lg font-bold text-foreground leading-snug group-hover:text-brand-blue transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.excerpt} ...</p>
      <div className="mt-5 flex items-center justify-between pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={post.avatar}
            alt={post.author}
            loading="lazy"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
          />
          <span className="truncate text-sm font-medium text-foreground">{post.author}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex flex-col items-center leading-tight">
            <Eye className="h-4 w-4" />
            <span className="mt-0.5">{formatCount(post.views)}</span>
          </span>
          <span className="flex flex-col items-center leading-tight">
            <Share2 className="h-4 w-4" />
            <span className="mt-0.5">{post.shares}</span>
          </span>
        </div>
      </div>
    </a>
  );
}

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
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
