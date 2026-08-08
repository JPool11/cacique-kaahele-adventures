import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Destinos } from "@/components/home/Destinos";
import { Salidas } from "@/components/home/Salidas";
import { PorQue } from "@/components/home/PorQue";
import { Sorpresa } from "@/components/home/Sorpresa";
import { Galeria } from "@/components/home/Galeria";
import { Testimonios } from "@/components/home/Testimonios";
import { Stats } from "@/components/home/Stats";
import { Blog } from "@/components/home/Blog";
import { Faq, faqs } from "@/components/home/Faq";
import { Newsletter } from "@/components/home/Newsletter";

const title = "Cacique Kaahele | Agencia de turismo y viajes en Colombia 2026";
const description =
  "Viajes grupales a San Andrés, Caribe, Eje Cafetero, Tairona, México y más. Salidas 2026 con todo incluido, guías expertos y pagos fáciles.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Cacique Kaahele",
          description,
          url: "/",
          telephone: "+57 320 418 0019",
          email: "informacion@caciquekaahele.com",
          address: { "@type": "PostalAddress", streetAddress: "Cra. 10 #7-33", addressLocality: "Pital", addressRegion: "Huila", addressCountry: "CO" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "512" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Destinos />
      <Salidas />
      <PorQue />
      <Sorpresa />
      <Galeria />
      <Testimonios />
      <Stats />
      <Blog />
      <Faq />
      <Newsletter />
    </>
  );
}
