import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Why us",
  description:
    "Cornerstone Home Health is Joint Commission accredited, locally staffed, and built around family. Learn why families across the Coastal Bend choose us.",
  alternates: { canonical: "https://cornerstonehomehealth.net/why-us" },
};

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

export default function WhyUsPage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">Why families choose us</p>
            <h1 className="section-title text-4xl sm:text-5xl">Local care. National standards. Personal attention.</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="rounded-2xl border border-blue/8 bg-white p-6 shadow-sm sm:p-8"
                >
                  <span className="mb-4 block text-3xl font-bold leading-none text-sand">{reason.number}</span>
                  <h2 className="mb-3 text-xl font-semibold text-blue-deep">{reason.title}</h2>
                  <p className="text-base leading-relaxed text-ink-light">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-blue p-8 text-white sm:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Experience the Cornerstone difference.</h2>
                <p className="mb-8 text-white/85">
                  Whether you need skilled nursing, therapy, memory care, or help for a family caregiver, we are ready to listen and build a plan around you.
                </p>
                <a href="/contact" className="btn-white inline-flex">Schedule a consultation</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
