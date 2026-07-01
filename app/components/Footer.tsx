"use client";

import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Patient Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/schedule", label: "Schedule Consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-deep text-white/80">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <a href="/" className="flex items-center gap-3" aria-label="Cornerstone Home Health home">
            <Image
              src="/images/logo-light.png"
              alt="Cornerstone Home Health"
              width={180}
              height={48}
              className="h-10 w-auto"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Compassionate, skilled home health care for families across Rockport, Portland, Corpus Christi, and the Texas Coastal Bend.
          </p>
          <a
            href="https://www.jointcommission.org/accreditation-and-certification/health-care-settings/home-care/joint-commission-home-care-accreditation/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white"
          >
            <Image
              src="/images/goldseal.png"
              alt="Joint Commission Gold Seal of Approval"
              width={64}
              height={64}
              className="h-14 w-auto rounded-lg"
            />
            <span>Joint Commission Accredited</span>
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 text-base font-semibold text-white">Quick links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-base font-semibold text-white">Contact</h3>
          <address className="not-italic leading-relaxed">
            110 HWY 35 N, Suite B
            <br />
            Rockport, TX 78382
          </address>
          <a href="tel:+13617272131" className="mt-2 block text-white transition-colors hover:text-sand">
            361-727-2131
          </a>
          <a
            href="https://www.facebook.com/cornerstonehh2131/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-white underline decoration-sand decoration-2 underline-offset-4"
          >
            Follow us on Facebook
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl px-4 py-6 text-sm text-white/55 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Cornerstone Home Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
