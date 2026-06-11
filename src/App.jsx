import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ServiceSearchBar from "./sections/ServiceSearchBar";
import Services from "./sections/Services";
import AllServices from "./sections/AllServices";
import FAQ from "./sections/FAQ";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import SeoContent from "./sections/SeoContent";
import Footer from "./sections/Footer";
import FaqSchema from "./components/FaqSchema";

import { content } from "./data/content";

function App() {
  const [lang, setLang] = useState("ml");
  const t = content[lang];

  const siteUrl = "https://www.cscthalappuzha.in";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CSC Thalappuzha",
    description:
      "CSC Thalappuzha provides PAN Card, Aadhaar Update, Passport Assistance, Certificates, Kerala PSC, Banking, Insurance, Ticket Booking, ABHA Card and Government online services in Wayanad.",
    telephone: "+919188549181",
    image: `${siteUrl}/images/csc-hero.jpg`,
    url: siteUrl,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thalappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: ["Thalappuzha", "Mananthavady", "Wayanad", "Kerala"],
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: [],
  };

  return (
    <>
      <Helmet>
        <title>
         CSC Thalappuzha | PAN Card, Aadhaar, Passport, Kerala PSC &
         Government Services
      </title>

      <meta
         name="google-site-verification"
         content="rM9fhv29A2f0ytqH2QHEJ7Hhktukue1rAirhT0xt0eo"
      />

      <meta
         name="description"
         content="CSC Thalappuzha provides PAN Card, Aadhaar Update, Passport, Income Certificate, Birth Certificate, Kerala PSC, Banking, Insurance, ABHA Card, Ticket Booking, GST Registration and Government Services in Wayanad."
      />

  <meta
    name="keywords"
    content="CSC Thalappuzha, CSC Wayanad, Online Service Center Wayanad, PAN Card Service Wayanad, Aadhaar Update Thalappuzha, Passport Service Wayanad, Kerala PSC Application Wayanad, Income Certificate Wayanad, Birth Certificate Wayanad, Akshaya Centre Thalappuzha, Government Services Wayanad, E Seva Centre Wayanad, ABHA Card Registration, Ticket Booking Wayanad, GST Registration Wayanad"
  />

        <meta name="author" content="CSC Thalappuzha" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English, Malayalam" />

        <meta name="geo.region" content="IN-KL" />
        <meta
          name="geo.placename"
          content="Thalappuzha, Mananthavady, Wayanad, Kerala"
        />

        <meta
          property="og:title"
          content="CSC Thalappuzha | Digital Service Center in Wayanad"
        />
        <meta
          property="og:description"
          content="PAN Card, Aadhaar, Passport, Certificates, Kerala PSC, Banking, Insurance and Government Online Services in Thalappuzha, Wayanad."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/csc-hero.jpg`} />
        <meta property="og:url" content={siteUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CSC Thalappuzha | Online Service Center"
        />
        <meta
          name="twitter:description"
          content="Online CSC services including PAN Card, Aadhaar, Passport, Certificates, Banking, Insurance and Kerala PSC services."
        />
        <meta name="twitter:image" content={`${siteUrl}/images/csc-hero.jpg`} />

        <link rel="canonical" href={siteUrl} />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <ServiceSearchBar />
      <Services lang={lang} />
      <AllServices />
      <FAQ />
      <Reviews />
      <Contact />
      <SeoContent />
      <Footer />
      <FaqSchema />
    </>
  );
}

export default App;