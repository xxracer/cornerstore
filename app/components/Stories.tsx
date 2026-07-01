"use client";

import { useEffect, useRef } from "react";

const stories = [
  {
    quote:
      "Cornerstone made it possible for my mother to stay in her own home after her surgery. The nurses were kind, thorough, and always on time.",
    author: "Family member",
    location: "Rockport",
  },
  {
    quote:
      "The therapy team helped my husband regain his confidence and mobility. We are grateful for the personalized attention.",
    author: "Spouse",
    location: "Portland",
  },
  {
    quote:
      "Knowing someone local answers the phone at any hour gave our family real peace of mind.",
    author: "Daughter",
    location: "Corpus Christi",
  },
];

export default function Stories() {
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
      id="stories"
      className="bg-cream-deep py-20 md:py-28 lg:py-32"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Stories</p>
          <h2 id="stories-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Real words from families we have served.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <blockquote
              key={index}
              className="reveal relative rounded-2xl bg-white p-6 shadow-sm sm:p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span
                className="pointer-events-none absolute left-4 top-4 font-serif text-7xl leading-none text-sand-light/60 sm:left-6 sm:top-6"
                aria-hidden="true"
              >
                “
              </span>
              <p className="relative z-10 mt-8 font-serif text-lg italic leading-relaxed text-ink">
                {story.quote}
              </p>
              <footer className="relative z-10 mt-6 text-sm font-medium text-ink-light">
                — {story.author},{" "}
                <cite className="not-italic text-sand">{story.location}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
