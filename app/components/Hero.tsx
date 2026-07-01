"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
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
      className="relative overflow-hidden bg-cream"
      aria-labelledby="hero-headline"
    >
      {/* Soft background washes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[60vw] w-[60vw] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-sand-light/60 to-cream-deep/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[45vw] w-[45vw] -translate-x-1/3 translate-y-1/4 rounded-full bg-gradient-to-br from-sage-light/50 to-cream-deep/30 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:pt-14 md:pb-20 lg:gap-16 lg:px-8 lg:pt-16 lg:pb-24">
        {/* Text column */}
        <div className="reveal order-2 md:order-1">
          <p className="eyebrow mb-4">Cornerstone Home Health</p>

          <h1 id="hero-headline" className="display text-4xl sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Care that feels like family, delivered at home.
          </h1>

          <p className="lead mt-5 max-w-lg">
            Skilled nursing, therapy, and personal support across Rockport, Portland, Corpus Christi, and the Texas Coastal Bend.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary btn-lg">
              Request a free evaluation
            </a>
            <a href="#services" className="btn-ghost btn-lg">
              Explore services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-blue/8 pt-6 max-w-md">
            <div>
              <span className="block text-2xl font-bold text-blue sm:text-3xl">15+</span>
              <span className="text-xs text-ink-light sm:text-sm">Years serving the Coastal Bend</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-blue sm:text-3xl">24/7</span>
              <span className="text-xs text-ink-light sm:text-sm">On-call clinical support</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-blue sm:text-3xl">6+</span>
              <span className="text-xs text-ink-light sm:text-sm">Cities served in the region</span>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="reveal relative order-1 md:order-2" style={{ transitionDelay: "120ms" }}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-colored md:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero.jpg"
              alt="A caregiver and an older adult sharing a warm moment in a bright home"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
            {/* subtle inner vignette */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-blue/10" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-4 -left-4 max-w-[200px] rounded-2xl bg-white p-4 shadow-lg sm:-bottom-5 sm:-left-5 sm:p-5 lg:-bottom-6 lg:-left-6">
            <div className="mb-2 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-sand" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-semibold text-ink">Trusted by families across the Coastal Bend.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
