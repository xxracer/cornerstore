import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Cornerstone Home Health. Joint Commission accredited home health agency serving Rockport, Portland, Corpus Christi, and the Texas Coastal Bend.",
  alternates: { canonical: "https://cornerstonehomehealth.net/about" },
};

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">About us</p>
            <h1 className="section-title text-4xl sm:text-5xl">About Cornerstone Home Health</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/caregiver.jpg"
                alt="Nurse with a patient during a home visit"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="body-large">
                Cornerstone Home Health was built on a simple belief: patients recover better, live fuller, and stay longer at home when care is delivered with skill and genuine compassion.
              </p>
              <p className="body-large">
                We serve Rockport, Portland, Corpus Christi, and surrounding Coastal Bend communities with physician-directed skilled nursing, rehabilitation therapies, and personal support services.
              </p>
              <p className="body-large">
                Whether the need is short-term recovery after surgery or ongoing management of a chronic condition, our team coordinates every visit around the patient and their family.
              </p>
              <ul className="space-y-3 text-ink-light">
                <li className="pl-7 relative">
                  <span className="absolute left-0 font-bold text-sage">✓</span>
                  Physician orders and personalized care plans
                </li>
                <li className="pl-7 relative">
                  <span className="absolute left-0 font-bold text-sage">✓</span>
                  Licensed nurses, therapists, aides, and social workers
                </li>
                <li className="pl-7 relative">
                  <span className="absolute left-0 font-bold text-sage">✓</span>
                  24/7 on-call clinical support
                </li>
                <li className="pl-7 relative">
                  <span className="absolute left-0 font-bold text-sage">✓</span>
                  Local ownership and community roots
                </li>
              </ul>
              <a href="/contact" className="btn-primary inline-block">Contact us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
