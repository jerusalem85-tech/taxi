export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "@id": "https://jerusalemtaxi.com/#business",
        name: "Jerusalem Taxi",
        alternateName: ["تاكسي القدس", "מונית ירושלים"],
        description:
          "Reliable 24/7 taxi service in Jerusalem and throughout Israel - airport transfers, intercity travel, VIP service, and tourist tours.",
        url: "https://jerusalemtaxi.com/",
        telephone: "+972-54-833-8706",
        email: "info@jerusalemtaxi.com",
        image: "https://jerusalemtaxi.com/images/og-image.jpg",
        logo: "https://jerusalemtaxi.com/favicon.svg",
        priceRange: "₪150 - ₪1500",
        currenciesAccepted: "ILS",
        paymentAccepted: "Cash, Credit Card",
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
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          { "@type": "City", name: "Jerusalem" },
          { "@type": "City", name: "Tel Aviv" },
          { "@type": "City", name: "Haifa" },
          { "@type": "City", name: "Eilat" },
          { "@type": "City", name: "Nazareth" },
          { "@type": "City", name: "Bethlehem" },
        ],
        availableLanguage: ["English", "Arabic", "Hebrew"],
        sameAs: ["https://wa.me/972548338706"],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Airport Transfer",
            description: "Transfers to and from Ben Gurion Airport, available 24/7.",
          },
          {
            "@type": "Offer",
            name: "Intercity Travel",
            description: "Transportation between major cities in Israel.",
          },
          {
            "@type": "Offer",
            name: "Tourist Tours",
            description: "Guided tours to the Dead Sea, Masada, Galilee, and more.",
          },
          {
            "@type": "Offer",
            name: "VIP Service",
            description: "Luxury transportation for business and special events.",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://jerusalemtaxi.com/#website",
        url: "https://jerusalemtaxi.com/",
        name: "Jerusalem Taxi",
        publisher: { "@id": "https://jerusalemtaxi.com/#business" },
        inLanguage: ["en", "ar", "he"],
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
