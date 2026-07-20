import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Cornerstone Home Health. We are hiring a full-time LVN, PRN LVN/RN, PRN PT/PTA, and PRN Home Health Aide in Rockport, Portland, Corpus Christi, and the Coastal Bend.",
  alternates: { canonical: "https://cornerstonehomehealth.net/careers" },
};

const openings = [
  {
    title: "Full-time LVN",
    description:
      "Licensed Vocational Nurse for full-time home health visits across the Coastal Bend. Provide skilled nursing care, medication management, and patient education under physician direction.",
  },
  {
    title: "PRN LVN/RN",
    description:
      "PRN Licensed Vocational Nurse or Registered Nurse for flexible home health visits. Ideal for clinicians who want control over their schedule while making a direct impact on patient care.",
  },
  {
    title: "PRN PT/PTA",
    description:
      "PRN Physical Therapist or Physical Therapist Assistant to help patients rebuild strength, balance, and mobility after surgery, illness, or injury in the comfort of home.",
  },
  {
    title: "PRN Home Health Aide",
    description:
      "PRN Home Health Aide to assist patients with bathing, dressing, grooming, light meal preparation, and daily activities under nurse supervision.",
  },
];

const benefits = [
  "Locally owned, Joint Commission accredited agency",
  "Flexible scheduling with PRN and full-time options",
  "Supportive clinical leadership and 24/7 on-call backup",
  "Competitive pay based on experience and role",
  "Mileage reimbursement for patient visits",
  "Make a real difference in your own community",
];

export default function CareersPage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">Careers</p>
            <h1 className="section-title text-4xl sm:text-5xl">Join our team.</h1>
            <p className="body-large mt-5 max-w-2xl">
              We are hiring caring, skilled professionals who want to deliver home health with compassion and clinical excellence across the Coastal Bend.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="rounded-2xl border border-blue/8 bg-white p-8 shadow-sm"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-blue-deep">{job.title}</h2>
                  <p className="text-ink-light">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl border border-blue/8 bg-cream p-8 sm:p-10">
                <h2 className="mb-6 text-2xl font-semibold text-blue-deep">Why work with us</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-ink-light">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-blue p-8 text-white sm:p-10">
                <h2 className="mb-4 text-2xl font-semibold">How to apply</h2>
                <p className="mb-6 text-white/85">
                  Call our office or send a message through our contact form. Let us know which position interests you and the best time to reach you. We look forward to learning more about you.
                </p>
                <a href="/contact" className="btn-white inline-flex">
                  Apply today
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
