"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

// Anti-spam: one submission per browser per 24 hours.
const COOLDOWN_KEY = "chh-lead-submitted-at";
const COOLDOWN_MS = 24 * 60 * 60 * 1000;

function wasRecentlySubmitted(): boolean {
  try {
    const last = Number(localStorage.getItem(COOLDOWN_KEY));
    return last > 0 && Date.now() - last < COOLDOWN_MS;
  } catch {
    return false;
  }
}

const inquiryOptions = [
  { value: "", label: "Select an option", disabled: true },
  { value: "myself", label: "Myself" },
  { value: "family", label: "A family member" },
  { value: "patient-guardian", label: "A relative or guardian of a patient" },
  { value: "current-patient", label: "I am a current patient" },
  { value: "other", label: "Other" },
];

export default function LeadForm({
  showInquiry = false,
  submitLabel = "Request evaluation",
}: {
  showInquiry?: boolean;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (wasRecentlySubmitted()) setStatus("success");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (wasRecentlySubmitted()) {
      setBlocked(true);
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const endpoint = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          // no-cors + text/plain avoids the CORS preflight; Apps Script still receives the body.
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            ...data,
            page: window.location.pathname,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        console.warn("NEXT_PUBLIC_SHEETS_WEBHOOK_URL is not set; skipping submission.");
      }
      try {
        localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
      } catch {
        // private mode: cooldown simply won't persist
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-sage/10 p-6 text-center" role="status" aria-live="polite">
        <span className="mb-2 block text-2xl">✓</span>
        <h3 className="mb-2 text-xl font-semibold text-blue-deep">Thank you</h3>
        <p className="text-ink-light">
          We have received your request and will call you soon. If you need to reach us before
          that, call 361-727-2131.
        </p>
      </div>
    );
  }

  if (blocked) {
    return (
      <div className="rounded-2xl bg-sand/10 p-6 text-center" role="alert">
        <p className="text-ink-light">
          You already sent a request recently. We will call you soon — or reach us directly at{" "}
          <a href="tel:+13617272131" className="font-semibold text-blue">361-727-2131</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Care evaluation request">
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

      {showInquiry && (
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
      )}

      <div className="field">
        <label htmlFor="message" className="label">Tell us more about your needs</label>
        <textarea id="message" name="message" rows={4} className="input" />
      </div>

      <button type="submit" className="btn-primary btn-lg w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-blue-deep" role="alert">
          Something went wrong. Please call us at 361-727-2131 instead.
        </p>
      )}

      <p className="mt-4 text-sm text-muted">
        If this is a medical emergency, call{" "}
        <a href="tel:911" className="font-semibold text-blue hover:text-blue-deep">911</a>{" "}
        first.
      </p>
    </form>
  );
}