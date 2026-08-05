"use client";

import { useEffect, useRef } from "react";
import {
  Stethoscope,
  Clock,
  MapPin,
  HeartHandshake,
  Briefcase,
  Plus,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Skilled nursing",
    description:
      "Registered nurses and licensed vocational nurses provide wound care, IV therapy, injections, tube feedings, medication management, and close monitoring of changing conditions.",
    link: "#contact",
    linkText: "Ask about nursing care",
  },
  {
    icon: Clock,
    title: "Physical, occupational \u0026 speech therapy",
    description:
      "Rehabilitation at home helps patients rebuild strength, balance, mobility, and communication after surgery, illness, or injury.",
    link: "#contact",
    linkText: "Learn about therapy",
  },
  {
    icon: MapPin,
    title: "Dementia \u0026 Alzheimer's care",
    description:
      "Specialized support for memory-related conditions, focusing on safety, routine, communication, and family education through every stage.",
    link: "#contact",
    linkText: "Explore memory care",
  },
  {
    icon: HeartHandshake,
    title: "Home health aides",
    description:
      "Trained aides assist with bathing, dressing, grooming, light meal preparation, and daily activities under nurse supervision.",
    link: "#contact",
    linkText: "Meet our aides",
  },
  {
    icon: Briefcase,
    title: "Medical social work",
    description:
      "Our social workers connect families to community resources, entitlements, counseling, and the emotional support needed during complex care.",
    link: "#contact",
    linkText: "Talk to a social worker",
  },
  {
    icon: Plus,
    title: "Not sure what you need?",
    description:
      "Tell us what is happening. We will help you understand your options, coordinate with your physician, and build a plan that fits.",
    link: "#contact",
    linkText: "Start a conversation",
    cta: true,
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = gridRef.current?.parentElement?.parentElement;
    const cards = gridRef.current?.querySelectorAll(".service-card");
    const reveals = section?.querySelectorAll(".reveal");



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

    cards?.forEach((el) => observer.observe(el));
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-white py-20 md:py-28 lg:py-32" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">What we do</p>
          <h2 id="services-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Complete care, right at your doorstep.
          </h2>
          <p className="body-large mt-4">
            Every plan begins with a conversation. From skilled nursing to personal daily support, we build care around the patient and the people who love them.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card reveal group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                service.cta
                  ? "border-transparent bg-blue text-white"
                  : "border-blue/8 bg-cream"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {!service.cta && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201, 166, 107, 0.25), transparent 40%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              )}

              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.cta ? "bg-white/10 text-white" : "bg-sand/10 text-blue"}`}>
                <service.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>

              <h3 className={`mb-3 text-xl font-semibold ${service.cta ? "text-white" : "text-blue-deep"}`}>
                {service.title}
              </h3>
              <p className={`mb-4 text-base leading-relaxed ${service.cta ? "text-white/85" : "text-ink-light"}`}>
                {service.description}
              </p>

              {service.cta ? (
                <a href={service.link} className="inline-flex btn-white">
                  {service.linkText}
                </a>
              ) : (
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1 font-semibold text-blue transition-all hover:gap-2"
                >
                  {service.linkText}
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
