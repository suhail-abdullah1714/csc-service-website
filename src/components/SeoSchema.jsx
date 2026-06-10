function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CSC Thalappuzha",
    telephone: "+919188549181",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Thalappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },

    areaServed: [
      "Thalappuzha",
      "Mananthavady",
      "Wayanad",
    ],

    openingHours: "Mo-Sa 09:00-18:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default SeoSchema;