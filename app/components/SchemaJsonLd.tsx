import Script from "next/script";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://cornerstonehomehealth.net/#business",
      name: "Cornerstone Home Health",
      url: "https://cornerstonehomehealth.net/",
      telephone: "+1-361-727-2131",
      email: "info@cornerstonehomehealth.net",
      priceRange: "$$",
      image: "https://cornerstonehomehealth.net/images/og-home.jpg",
      description:
        "Joint Commission accredited home health agency providing skilled nursing, physical therapy, occupational therapy, speech therapy, medical social work, home health aide, and dementia care services in Rockport, Portland, Corpus Christi, and surrounding Texas Coastal Bend communities.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "110 HWY 35 N, Suite B",
        addressLocality: "Rockport",
        addressRegion: "TX",
        postalCode: "78382",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.0513562",
        longitude: "-97.041627",
      },
      areaServed: [
        { "@type": "City", name: "Rockport" },
        { "@type": "City", name: "Portland" },
        { "@type": "City", name: "Corpus Christi" },
        { "@type": "City", name: "Aransas Pass" },
        { "@type": "City", name: "Ingleside" },
        { "@type": "City", name: "Fulton" },
      ],
      sameAs: ["https://www.facebook.com/cornerstonehh2131/"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Health Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skilled Nursing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Physical Therapy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Occupational Therapy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Speech Therapy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dementia and Alzheimer's Care" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Health Aide Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Social Work" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://cornerstonehomehealth.net/#website",
      url: "https://cornerstonehomehealth.net/",
      name: "Cornerstone Home Health",
      publisher: { "@id": "https://cornerstonehomehealth.net/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://cornerstonehomehealth.net/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://cornerstonehomehealth.net/#webpage",
      url: "https://cornerstonehomehealth.net/",
      name: "Cornerstone Home Health | In-Home Care in Rockport, Portland & Corpus Christi, TX",
      isPartOf: { "@id": "https://cornerstonehomehealth.net/#website" },
      about: { "@id": "https://cornerstonehomehealth.net/#business" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://cornerstonehomehealth.net/images/og-home.jpg",
      },
    },
  ],
};

export default function SchemaJsonLd() {
  return (
    <Script
      id="schema-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
