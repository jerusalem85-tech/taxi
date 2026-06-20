export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jerusalemtaxi.com/#business",
    name: "Jerusalem Taxi",
    alternateName: ["تاكسي القدس", "מונית ירושלים"],
    description: "Reliable taxi service in Jerusalem and throughout Israel - airport transfers, intercity travel, VIP service, and tourist tours available 24/7.",
    url: "https://jerusalemtaxi.com",
    telephone: "+972-50-224-6139",
    email: "info@jerusalemtaxi.com",
    image: "https://jerusalemtaxi.com/images/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jerusalem",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.7683,
      longitude: 35.2137,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₪150 - ₪1500",
    areaServed: [
      { "@type": "City", name: "Jerusalem" },
      { "@type": "City", name: "Tel Aviv" },
      { "@type": "City", name: "Haifa" },
      { "@type": "City", name: "Eilat" },
      { "@type": "City", name: "Nazareth" },
      { "@type": "City", name: "Bethlehem" },
    ],
    sameAs: ["https://wa.me/972502246139"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
