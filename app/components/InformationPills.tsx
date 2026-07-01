"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartPulse, Brain, Pill, ShieldCheck, Users, Home } from "lucide-react";

const pills = [
  {
    icon: HeartPulse,
    tag: "Skilled nursing",
    title: "What does skilled nursing care include at home?",
    description:
      "Many families wonder what a home health nurse actually does. From wound care and IV therapy to medication management and vitals monitoring, skilled nursing keeps patients safe without leaving home.",
    href: "#contact",
  },
  {
    icon: Brain,
    tag: "Memory care",
    title: "How to care for a loved one with Alzheimer's or dementia",
    description:
      "Caring for someone with memory loss can feel overwhelming. Learn how routine, communication, and professional support can help families in Rockport, Portland, and Corpus Christi.",
    href: "#contact",
  },
  {
    icon: Pill,
    tag: "Medication safety",
    title: "Medication management for seniors at home",
    description:
      "Missed doses and medication conflicts are common risks for older adults. Discover how home health teams help organize, monitor, and administer medications safely.",
    href: "#contact",
  },
  {
    icon: ShieldCheck,
    tag: "Accreditation",
    title: "What Joint Commission accreditation means for your family",
    description:
      "Not every home health agency meets national quality and safety standards. Accreditation means your loved one's care is held to strict, regularly reviewed guidelines.",
    href: "#contact",
  },
  {
    icon: Users,
    tag: "Family caregivers",
    title: "10 practical tips for family caregivers",
    description:
      "Balancing work, family, and caregiving is exhausting. These tips can help caregivers protect their own health while supporting a parent, spouse, or aging relative.",
    href: "#contact",
  },
  {
    icon: Home,
    tag: "Recovery",
    title: "Recovering from surgery at home with therapy support",
    description:
      "Physical and occupational therapy at home helps patients rebuild strength, balance, and confidence after surgery, reducing the risk of falls and readmissions.",
    href: "#contact",
  },
];

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
            href="/schedule"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue shadow-sm ring-1 ring-blue/8 transition-all hover:bg-cream-deep hover:shadow-md"
          >
            <BookOpen className="h-4 w-4" />
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pills.map((pill, index) => (
            <article
              key={pill.title}
              className="reveal group flex flex-col rounded-2xl border border-blue/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sand/10 text-blue">
                  <pill.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sand">{pill.tag}</span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-blue-deep">{pill.title}</h3>
              <p className="mb-5 flex-grow text-ink-light">{pill.description}</p>

              <a
                href={pill.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-all group-hover:gap-2"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
