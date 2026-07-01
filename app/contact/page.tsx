import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact Cornerstone Home Health in Rockport, Texas. Call 361-727-2131 or request a free care evaluation for home health services.",
  alternates: { canonical: "https://cornerstonehomehealth.net/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">Contact us</p>
            <h1 className="section-title text-4xl sm:text-5xl">We take our patients' health seriously.</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-8">
              <div>
                <span className="eyebrow mb-1">Office</span>
                <address className="not-italic text-ink">
                  110 HWY 35 N, Suite B
                  <br />
                  Rockport, Texas 78382
                </address>
              </div>
              <div>
                <span className="eyebrow mb-1">Phone</span>
                <a href="tel:+13617272131" className="block text-3xl font-bold text-blue">
                  361-727-2131
                </a>
              </div>
              <div>
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
                className="btn-secondary inline-block"
              >
                Get directions
              </a>
            </div>

            <div className="rounded-3xl border border-blue/8 bg-white p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-blue-deep">Send us a message</h2>
              <p className="mb-6 text-ink-light">
                If this is a medical emergency, call{" "}
                <a href="tel:911" className="font-semibold text-blue">911</a>{" "}
                first.
              </p>
              <a href="tel:+13617272131" className="btn-primary inline-block w-full text-center">
                Call 361-727-2131
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
