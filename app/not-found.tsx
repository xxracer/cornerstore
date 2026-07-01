import Link from "next/link";

export const metadata = {
  title: "Page not found | Cornerstone Home Health",
  description:
    "We could not find that page. Return to Cornerstone Home Health for in-home care in Rockport, Portland, and Corpus Christi.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
      <div className="max-w-md">
        <span className="mb-4 block text-6xl font-bold text-blue">404</span>
        <h1 className="mb-4 text-3xl font-bold text-blue-deep">Page not found</h1>
        <p className="mb-8 text-ink-light">
          We could not find the page you were looking for. Let us get you back to care that feels like home.
        </p>
        <Link href="/" className="btn-primary">
          Return home
        </Link>
      </div>
    </div>
  );
}
