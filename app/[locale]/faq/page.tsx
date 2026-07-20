import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const d = getDictionary(locale).pages.contact;
  return buildMetadata({
    locale,
    title: d.faqTitle,
    description: d.metaDescription,
    path: "/faq",
    og: "contact",
  });
}

export default function FaqPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const t = dict.pages.contact;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: dict.data.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow={t.faqEyebrow}
        title={t.faqTitle}
        body={t.heroBody}
        image="/img/contact-hero.jpg"
        alt="Frequently asked questions about OSAKA Workation"
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow={t.faqEyebrow}
          title={t.faqTitle}
          body={t.formCardBody}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {dict.data.faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-paper-line bg-white p-5 shadow-[0_18px_40px_-28px_rgba(15,15,15,0.25)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-brand-ink">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-orange transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}