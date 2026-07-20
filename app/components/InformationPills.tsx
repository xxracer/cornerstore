"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
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

export default function InformationPills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="information-pills"
      className="bg-cream-deep py-20 md:py-28 lg:py-32"
      aria-labelledby="pills-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Information Pills</p>
            <h2 id="pills-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl">
              Quick reads on the topics families ask about most.
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue shadow-sm ring-1 ring-blue/8 transition-all hover:bg-cream-deep hover:shadow-md"
          >
            <BookOpen className="h-4 w-4" />
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((pill, index) => {
            const Icon = iconMap[pill.icon];
            return (
              <article
                key={pill.slug}
                className="reveal group flex flex-col rounded-2xl border border-blue/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sand/10 text-blue">
                    {Icon ? (
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    ) : null}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sand">{pill.tag}</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-blue-deep">{pill.title}</h3>
                <p className="mb-5 flex-grow text-ink-light">{pill.description}</p>

                <Link
                  href={`/articles/${pill.slug}`}
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
  );
}
