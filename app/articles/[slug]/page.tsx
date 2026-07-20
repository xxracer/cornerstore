import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SchemaJsonLd from "../../components/SchemaJsonLd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://cornerstonehomehealth.net/articles/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <section className="bg-cream-deep py-16 md:py-24">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/articles"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-deep"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to articles
            </Link>
            <span className="eyebrow mb-4 block">{article.tag}</span>
            <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl">{article.title}</h1>
            <p className="body-large mt-5">{article.description}</p>
          </div>
        </section>

        <article className="py-12 md:py-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {article.content.map((section, index) => (
                <section key={index}>
                  {section.heading ? (
                    <h2 className="mb-4 text-2xl font-semibold text-blue-deep">{section.heading}</h2>
                  ) : null}
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="body-large mb-4 last:mb-0">{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="relative pl-7 text-ink-light">
                          <span className="absolute left-0 top-0 font-bold text-sage">✓</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-14 rounded-2xl border border-blue/8 bg-cream p-8">
              <h2 className="mb-3 text-xl font-semibold text-blue-deep">Ready to take the next step?</h2>
              <p className="body-large mb-6">
                Our team is here to answer questions and help you find the right care or opportunity.
              </p>
              <a href={article.cta.href} className="btn-primary inline-flex">
                {article.cta.text}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
