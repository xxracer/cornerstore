import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Schedule a consultation",
  description:
    "Request a free care evaluation with Cornerstone Home Health. Serving Rockport, Portland, Corpus Christi, and the Texas Coastal Bend.",
  alternates: { canonical: "https://cornerstonehomehealth.net/schedule" },
};

export default function SchedulePage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">Schedule a consultation</p>
            <h1 className="section-title text-4xl sm:text-5xl">Request a free care evaluation.</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            <form className="rounded-3xl border border-blue/8 bg-cream p-6 sm:p-8 lg:p-10">
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
                <label htmlFor="message" className="label">Tell us more about your needs</label>
                <textarea id="message" name="message" rows={4} className="input" />
              </div>

              <button type="submit" className="btn-primary btn-lg w-full">
                Request evaluation
              </button>

              <p className="mt-4 text-sm text-muted">
                If this is a medical emergency, call{" "}
                <a href="tel:911" className="font-semibold text-blue">911</a>{" "}
                first.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
