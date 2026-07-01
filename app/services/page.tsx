import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaJsonLd from "../components/SchemaJsonLd";
import {
  Stethoscope,
  Clock,
  MapPin,
  HeartHandshake,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient services",
  description:
    "Skilled nursing, physical therapy, dementia care, home health aides, and medical social work in Rockport, Portland, Corpus Christi, and the Coastal Bend.",
  alternates: { canonical: "https://cornerstonehomehealth.net/services" },
};

const services = [
  {
    icon: Stethoscope,
    title: "Skilled nursing",
    description:
      "Registered nurses and licensed vocational nurses provide wound care, IV therapy, injections, tube feedings, medication management, and close monitoring of changing conditions.",
  },
  {
    icon: Clock,
    title: "Physical, occupational \u0026 speech therapy",
    description:
      "Rehabilitation at home helps patients rebuild strength, balance, mobility, and communication after surgery, illness, or injury.",
  },
  {
    icon: MapPin,
    title: "Dementia \u0026 Alzheimer's care",
    description:
      "Specialized support for memory-related conditions, focusing on safety, routine, communication, and family education through every stage.",
  },
  {
    icon: HeartHandshake,
    title: "Home health aides",
    description:
      "Trained aides assist with bathing, dressing, grooming, light meal preparation, and daily activities under nurse supervision.",
  },
  {
    icon: Briefcase,
    title: "Medical social work",
    description:
      "Our social workers connect families to community resources, entitlements, counseling, and the emotional support needed during complex care.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-4">Patient services</p>
            <h1 className="section-title text-4xl sm:text-5xl">Home health services across the Coastal Bend.</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-blue/8 bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sand/10 text-blue">
                    <service.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h2 className="mb-3 text-2xl font-semibold text-blue-deep">{service.title}</h2>
                  <p className="text-ink-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
