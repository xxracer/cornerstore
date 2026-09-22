import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";
import LeadForm from "../components/LeadForm";

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
            <div className="rounded-3xl border border-blue/8 bg-cream p-6 sm:p-8 lg:p-10">
              <LeadForm submitLabel="Request evaluation" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
