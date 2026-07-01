"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why us" },
  { href: "#information-pills", label: "Information Pills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-blue/5 transition-all duration-300 ${
        scrolled ? "bg-cream/95 shadow-[0_4px_20px_rgba(28,35,50,0.06)]" : "bg-cream/80"
      }`}
      style={{ backdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sand"
          aria-label="Cornerstone Home Health home"
        >
          <div className="relative h-7 w-[92px] overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-blue/8 transition-shadow group-hover:shadow-md">
            <Image
              src="/images/logo.png"
              alt="Cornerstone Home Health"
              fill
              className="object-contain p-1"
              sizes="92px"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-ink-light transition-colors hover:bg-cream-deep hover:text-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+13617272131"
            className="hidden items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue shadow-sm ring-1 ring-blue/8 transition-all hover:bg-cream-deep hover:shadow-md md:inline-flex"
            aria-label="Call 361-727-2131"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.04.37 2.05.71 3.02a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.06-1.28a2 2 0 0 1 2.11-.45c.97.34 1.98.58 3.02.71A2 2 0 0 1 21.98 16.92z" />
            </svg>
            <span>361-727-2131</span>
          </a>

          <a href="#contact" className="btn-primary hidden text-sm sm:inline-flex">
            Schedule a visit
          </a>

          <button
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-blue/8 transition-all hover:bg-cream-deep lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-cream/98 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: "blur(16px)" }}
      >
        <nav className="flex h-full flex-col p-5" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3.5 text-lg font-medium text-ink-light transition-colors hover:bg-cream-deep hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <a href="tel:+13617272131" className="btn-secondary text-center">
              Call 361-727-2131
            </a>
            <a href="#contact" className="btn-primary text-center" onClick={() => setOpen(false)}>
              Schedule a visit
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
