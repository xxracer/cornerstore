"use client";

import { useEffect, useRef } from "react";
import LeadForm from "./LeadForm";

const promises = [
  "No obligation consultation",
  "We coordinate with your physician",
  "Most major insurance plans accepted",
];

export default function Contact() {
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
      id="contact"
      className="bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="reveal">
          <p className="eyebrow mb-4">Get started</p>
          <h2 id="contact-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Request a free care evaluation.
          </h2>
          <p className="body-large mt-5">
            Tell us a little about your situation. A member of our team will follow up to answer questions and help you understand whether home health is the right next step.
          </p>

          <div className="mt-8 space-y-3">
            {promises.map((promise) => (
              <div key={promise} className="flex items-center gap-3 text-ink-light">
                <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage-light text-xs font-bold text-blue-deep">
                  ✓
                </span>
                {promise}
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal rounded-3xl border border-blue/8 bg-cream p-6 sm:p-8 lg:p-10"
          style={{ transitionDelay: "120ms" }}
        >
          <LeadForm showInquiry submitLabel="Request evaluation" />
        </div>
      </div>
    </section>
  );
}
