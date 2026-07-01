"use client";

import { useEffect, useRef } from "react";

const locations = [
  { name: "Rockport, TX", href: "https://www.google.com/maps/dir/Hwy+35+N,+Rockport,+TX+78382" },
  { name: "Portland, TX", href: undefined },
  { name: "Corpus Christi, TX", href: undefined },
  { name: "Aransas Pass, TX", href: undefined },
  { name: "Ingleside, TX", href: undefined },
  { name: "Fulton, TX", href: undefined },
];

export default function Locations() {
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
      id="locations"
      className="py-20 md:py-28 lg:py-32"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="reveal">
          <p className="eyebrow mb-4">Service area</p>
          <h2 id="locations-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Home health across the Coastal Bend.
          </h2>
          <p className="body-large mt-5">
            We proudly serve patients and families in Aransas, Nueces, and San Patricio counties.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {locations.map((location) => (
              <li key={location.name}>
                {location.href ? (
                  <a
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline decoration-sand decoration-2 underline-offset-4 hover:text-blue-deep"
                  >
                    {location.name}
                  </a>
                ) : (
                  <span className="text-ink-light">{location.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-3xl border border-blue/8 bg-white p-6 shadow-lg sm:p-8 lg:p-10" style={{ transitionDelay: "120ms" }}>
          <div className="mb-6">
            <span className="eyebrow mb-1">Office</span>
            <address className="not-italic text-ink">
              110 HWY 35 N, Suite B
              <br />
              Rockport, Texas 78382
            </address>
          </div>
          <div className="mb-6">
            <span className="eyebrow mb-1">Phone</span>
            <a href="tel:+13617272131" className="block text-2xl font-bold text-blue">
              361-727-2131
            </a>
          </div>
          <div className="mb-8">
            <span className="eyebrow mb-1">Hours</span>
            <p className="text-ink">
              Office: Monday–Friday, 8am–5pm
              <br />
              Clinical care: 24/7 on-call
            </p>
          </div>
          <a
            href="https://www.google.com/maps/dir/Hwy+35+N,+Rockport,+TX+78382"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full text-center sm:w-auto"
          >
            Get directions
          </a>
        </div>
      </div>
    </section>
  );
}
