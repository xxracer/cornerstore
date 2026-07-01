"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const highlights = [
  "Physician orders and personalized care plans",
  "Licensed nurses, therapists, aides, and social workers",
  "24/7 on-call clinical support",
  "Local ownership and community roots",
];

export default function About() {
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
      id="about"
      className="py-20 md:py-28 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="reveal grid grid-cols-[1.25fr_0.75fr] items-end gap-3">
          <Image
            src="/images/caregiver.jpg"
            alt="Nurse smiling with a patient during a home visit"
            width={560}
            height={700}
            className="rounded-2xl shadow-md"
          />
          <Image
            src="/images/nurse.jpg"
            alt="Caregiver reviewing care notes with a family member"
            width={360}
            height={450}
            className="-translate-y-8 rounded-2xl shadow-md"
          />
        </div>

        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <p className="eyebrow mb-4">About us</p>
          <h2 id="about-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl">
            There is no better place to heal than where you feel safest.
          </h2>
          <p className="body-large mt-5">
            Cornerstone Home Health was built on a simple belief: patients recover better, live fuller, and stay longer at home when care is delivered with skill and genuine compassion.
          </p>
          <p className="body-large mt-4">
            We serve Rockport, Portland, Corpus Christi, and surrounding Coastal Bend communities with physician-directed skilled nursing, rehabilitation therapies, and personal support services.
          </p>

          <ul className="mt-8 mb-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="relative pl-7 text-ink-light">
                <span className="absolute left-0 top-0 font-bold text-sage">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary">
            Get to know our team
          </a>
        </div>
      </div>
    </section>
  );
}
