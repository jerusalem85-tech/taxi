export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Jerusalem Taxi",
    alternateName: ["تاكسي القدس", "מונית ירושלים"],
    description: "Reliable taxi service in Jerusalem and throughout Israel - airport transfers, intercity travel, VIP service, and tourist tours available 24/7.",
    url: "https://jerusalemtaxi.com",
    telephone: "+972-50-224-6139",
    email: "info@jerusalemtaxi.com",
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jerusalem",
      addressCountry: "IL",
    },
    openingHours: "Mo-Su",
    priceRange: "₪150-₪1500",
    sameAs: [
      "https://wa.me/972502246139",
    ],
    availableLanguage: ["Arabic", "Hebrew", "English"],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Airport Transfer",
        description: "Transfers to and from Ben Gurion Airport",
      },
      {
        "@type": "Offer",
        name: "Intercity Travel",
        description: "Transportation between major cities in Israel",
      },
      {
        "@type": "Offer",
        name: "Tourist Tours",
        description: "Guided tours to Dead Sea, Masada, Galilee, and more",
      },
      {
        "@type": "Offer",
        name: "VIP Service",
        description: "Luxury transportation for business and special events",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
