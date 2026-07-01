"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Joint Commission accredited",
    description:
      "We meet rigorous national standards for quality and safety in home care, so families can trust the care their loved ones receive.",
  },
  {
    number: "02",
    title: "Coastal Bend born and staffed",
    description:
      "Our caregivers live here. They understand the local health network, the rhythm of coastal life, and the value of showing up on time.",
  },
  {
    number: "03",
    title: "Care built around family",
    description:
      "We do not just treat a chart. We listen to patients, support caregivers, and communicate clearly with physicians and loved ones.",
  },
  {
    number: "04",
    title: "Available when you need us",
    description:
      "Home health needs do not follow office hours. Our team is reachable around the clock for questions, concerns, and urgent changes.",
  },
];

export default function WhyUs() {
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
      id="why-us"
      className="bg-blue py-20 text-white md:py-28 lg:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4 text-sand">Why families choose us</p>
          <h2 id="why-heading" className="section-title text-3xl text-white sm:text-4xl lg:text-5xl">
            Local care. National standards. Personal attention.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-8"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="mb-4 block text-3xl font-bold leading-none text-sand">
                {reason.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold">{reason.title}</h3>
              <p className="text-white/80 text-base leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
