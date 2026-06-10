function FaqSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I apply for a PAN Card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit CSC Thalappuzha with Aadhaar Card, Photo and required details. We will assist you with PAN Card application.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for Aadhaar Update?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aadhaar Number, Mobile Number and supporting proof documents are required.",
        },
      },
      {
        "@type": "Question",
        name: "Can I apply for a Passport through CSC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CSC Thalappuzha provides passport application assistance and appointment booking support.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide Kerala PSC services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We assist with Kerala PSC One Time Registration, profile updates and applications.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide online certificate services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We assist with Income Certificate, Birth Certificate, Caste Certificate and other government certificates.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

export default FaqSchema;