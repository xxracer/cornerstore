"use client";

import { useEffect, useRef, useState } from "react";

const promises = [
  "No obligation consultation",
  "We coordinate with your physician",
  "Most major insurance plans accepted",
];

const inquiryOptions = [
  { value: "", label: "Select an option", disabled: true },
  { value: "myself", label: "Myself" },
  { value: "family", label: "A family member" },
  { value: "patient-guardian", label: "A relative or guardian of a patient" },
  { value: "current-patient", label: "I am a current patient" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
    // In production, wire this to a server action or API endpoint.
  };

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

        <form
          onSubmit={handleSubmit}
          className="reveal rounded-3xl border border-blue/8 bg-cream p-6 sm:p-8 lg:p-10"
          aria-label="Care evaluation request"
          style={{ transitionDelay: "120ms" }}
        >
          {submitted ? (
            <div className="rounded-2xl bg-sage/10 p-6 text-center">
              <span className="mb-2 block text-2xl">✓</span>
              <h3 className="mb-2 text-xl font-semibold text-blue-deep">Thank you</h3>
              <p className="text-ink-light">We have received your request and will call you soon.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold text-blue underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="field">
                  <label htmlFor="first-name" className="label">
                    First name <span aria-label="required">*</span>
                  </label>
                  <input type="text" id="first-name" name="first_name" required autoComplete="given-name" className="input" />
                </div>
                <div className="field">
                  <label htmlFor="last-name" className="label">
                    Last name <span aria-label="required">*</span>
                  </label>
                  <input type="text" id="last-name" name="last_name" required autoComplete="family-name" className="input" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="phone" className="label">
                  Phone number <span aria-label="required">*</span>
                </label>
                <input type="tel" id="phone" name="phone" required autoComplete="tel" placeholder="(361) 555-0100" className="input" />
              </div>

              <div className="field">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" placeholder="you@example.com" className="input" />
              </div>

              <div className="field">
                <label htmlFor="inquiry" className="label">
                  I am interested in care for <span aria-label="required">*</span>
                </label>
              <select id="inquiry" name="inquiry" required defaultValue="" className="input">
                {inquiryOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))}
              </select>
              </div>

              <div className="field">
                <label htmlFor="message" className="label">Tell us more about your needs</label>
                <textarea id="message" name="message" rows={4} className="input" />
              </div>

              <button type="submit" className="btn-primary btn-lg w-full">
                Request evaluation
              </button>

              <p className="mt-4 text-sm text-muted">
                If this is a medical emergency, call{" "}
                <a href="tel:911" className="font-semibold text-blue hover:text-blue-deep">911</a>{" "}
                first.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
