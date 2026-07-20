import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";
import {
  ArrowRight,
  HeartPulse,
  Brain,
  Pill,
  ShieldCheck,
  Users,
  Home,
  Briefcase,
  CalendarDays,
} from "lucide-react";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Read helpful articles about home health, skilled nursing, dementia care, medication safety, caregiver tips, and career opportunities at Cornerstone Home Health.",
  alternates: { canonical: "https://cornerstonehomehealth.net/articles" },
};

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  HeartPulse,
  Brain,
  Pill,
  ShieldCheck,
  Users,
  Home,
  Briefcase,
  CalendarDays,
};

export default function ArticlesPage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">Information Pills</p>
            <h1 className="section-title text-4xl sm:text-5xl">Helpful reads for families and caregivers.</h1>
            <p className="body-large mt-5 max-w-2xl">
              Quick, practical guidance on home health, memory care, medication safety, and more.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const Icon = iconMap[article.icon];
                return (
                  <article
                    key={article.slug}
                    className="group flex flex-col rounded-2xl border border-blue/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sand/10 text-blue">
                        {Icon ? <Icon className="h-5 w-5" strokeWidth={1.75} /> : null}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-sand">{article.tag}</span>
                    </div>
                    <h2 className="mb-3 text-xl font-semibold text-blue-deep">{article.title}</h2>
                    <p className="mb-5 flex-grow text-ink-light">{article.description}</p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-all group-hover:gap-2"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
