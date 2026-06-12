import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const serviceCategories = [
  {
    title: "Identity Services",
    services: [
      "PAN Card New Application",
      "PAN Card Correction",
      "PAN Card Reprint",
      "e-PAN Download",
      "Aadhaar Update (Biometric Required)",
      "Aadhaar Print",
      "Aadhaar PVC Card",
      "Voter ID Registration",
      "Voter ID Correction",
      "Passport Application",
      "Passport Renewal",
    ],
  },

  {
    title: "Certificate Services",
    services: [
      "Birth Certificate",
      "Death Certificate",
      "Income Certificate",
      "Caste Certificate",
      "Community Certificate",
      "Domicile Certificate",
      "Residence Certificate",
      "Marriage Certificate",
      "Non-Creamy Layer Certificate",
      "Disability Certificate",
      "Legal Heir Certificate",
    ],
  },

  {
    title: "Vehicle & RTO Services",
    services: [
      "Learner's License",
      "Driving License New",
      "Driving License Renewal",
      "Duplicate Driving License",
      "RC Transfer",
      "Vehicle Tax Payment",
      "Challan Payment",
      "Pollution Certificate Assistance",
    ],
  },

  {
    title: "Banking Services",
    services: [
      "AEPS Cash Withdrawal (Biometric Required)",
      "AEPS Balance Enquiry (Biometric Required)",
      "Mini Statement (Biometric Required)",
      "Money Transfer",
      "Account Opening Assistance",
      "Pension Services",
    ],
  },

  {
    title: "Loan Services",
    services: [
      "Personal Loan Assistance",
      "Gold Loan Assistance",
      "Home Loan Assistance",
      "Education Loan Assistance",
      "Business Loan Assistance",
      "Vehicle Loan Assistance",
      "Two Wheeler Loan Assistance",
      "Agriculture Loan Assistance",
      "Mudra Loan Assistance",
      "PMEGP Loan Assistance",
      "KSWDC Loan Application",
      "KSWDC Loan Renewal",
      "Kudumbashree Loan Assistance",
      "Loan Project Report Preparation",
      "Loan Eligibility Check",
      "Loan Documentation Support",
      "Loan Application Submission",
      "EMI Calculation Assistance",
      "Credit Score Guidance",
    ],
  },

  {
    title: "Insurance Services",
    services: [
      "Life Insurance",
      "Health Insurance",
      "Vehicle Insurance",
      "Bike Insurance",
      "Car Insurance",
      "Personal Accident Insurance",
      "Travel Insurance",
    ],
  },

  {
    title: "Utility Bill Services",
    services: [
      "Electricity Bill Payment",
      "Water Bill Payment",
      "Mobile Recharge",
      "DTH Recharge",
      "Broadband Recharge",
      "FASTag Recharge",
    ],
  },

  {
    title: "Education Services",
    services: [
      "Scholarship Application",
      "University Admission",
      "Exam Registration",
      "Certificate Verification",
      "Student Loan Assistance",
    ],
  },

  {
    title: "Government Services",
    services: [
      "Ration Card New",
      "Ration Card Update",
      "Ration Card Member Addition",
      "PM Kisan Registration",
      "E-Shram Card",
      "Labour Card",
      "Ayushman Bharat",
      "ABHA Card Registration",
      "Old Age Pension",
      "Widow Pension",
      "Disability Pension",
      "Sthree Suraksha Pension",
      "Life Certificate (Jeevan Pramaan - Biometric)",
      "PM Shram Yogi Maan-dhan (PM-SYM)",
    ],
  },

  {
    title: "Business Services",
    services: [
      "GST Registration",
      "GST Filing Assistance",
      "Income Tax Return (IT Return) Filing",
      "UDYAM Registration",
      "MSME Registration",
      "Food Safety Registration (FSSAI)",
      "Legal Metrology Registration",
      "Legal Metrology Renewal",
      "Pollution Control Board Certificate",
      "Pollution Control Board Consent Renewal",
      "Trade License Assistance",
    ],
  },

  {
    title: "Kerala Services",
    services: [
      "Kerala PSC One Time Registration",
      "Kerala PSC Application",
      "KSEB Bill Payment",
      "Kerala Water Authority Bill Payment",
      "Nativity Certificate",
      "One and the Same Certificate",
      "KSFE Chitty / Loan Payment",
      "Subhiksha Keralam Registration",
      "Agriculture Portal Registrations",
    ],
  },

  {
    title: "Property Services",
    services: [
      "Land Tax Payment",
      "Property Tax Payment",
      "Encumbrance Certificate (EC)",
      "Possession Certificate",
      "Panchayat Building Tax (Sanchaya)",
    ],
  },

  {
    title: "NRI & Travel Services",
    services: [
      "Train Ticket Booking",
      "Flight Ticket Booking",
      "Bus Ticket Booking",
      "Hotel Booking",
      "NORKA ID Registration",
      "Police Clearance Certificate (PCC)",
      "Certificate Attestation",
      "Visa Application Assistance",
      "NORKA Welfare Registration",
    ],
  },

  {
    title: "Employment & Competitive Exam Services",
    services: [
      "Employment Exchange Registration",
      "Government Job Application",
      "National Career Service Registration",
      "Kerala PSC One Time Registration",
      "Kerala PSC Application",
      "RRB Application",
      "Indian Army Recruitment Application",
      "Indian Navy Recruitment Application",
      "Indian Air Force Recruitment Application",
      "SSC Application",
      "UPSC Application",
      "Competitive Exam Registration",
      "Resume Preparation",
    ],
  },

  {
    title: "Digital & Documentation Services",
    services: [
      "Online Form Filling",
      "Document Scanning",
      "Printing Services",
      "Photocopy Services",
      "Passport Size Photo",
      "DigiLocker Assistance",
      "PDF Conversion",
    ],
  },

  {
    title: "Police & Permission Services",
    services: [
      "Accident GD Entry Assistance",
      "Lost Certificate Assistance",
      "Tele-Law Legal Consultation",
      "Mike Permission",
      "Vehicle Mike Permission",
      "Event Permission",
      "Procession Permission",
    ],
  },
];

function AllServices() {
  const [active, setActive] = useState(0);

  return (
    <section id="all-services" className="scroll-mt-24 bg-[#f8fbff] py-14 sm:py-20">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-blue-700 font-black tracking-widest text-xs sm:text-sm">
            ••• ALL SERVICES •••
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#07142f] mt-2">
            ഞങ്ങൾ നൽകുന്ന എല്ലാ സേവനങ്ങളും
          </h2>

          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            സേവനങ്ങൾ category-wise ആയി കാണാം
          </p>

          <div className="w-12 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className={`w-full flex items-center justify-between px-5 py-4 font-black text-left transition-colors ${
                  active === index
                    ? "bg-blue-700 text-white"
                    : "text-[#07142f]"
                }`}
              >
                {category.title}
                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="p-5">
                  <div className="grid grid-cols-1 gap-3">
                    {category.services.map((service, i) => (
                      <div
                        key={i}
                        className="bg-[#f8fbff] border border-slate-100 rounded-2xl px-4 py-3 flex items-center gap-3"
                      >
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${service.includes("Biometric") ? "bg-amber-500" : "bg-green-500"}`} />
                        <span className="font-semibold text-slate-700 text-sm">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/919188549181?text=Hi, I need help with services under ${category.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-black flex items-center justify-center gap-3 text-sm transition-colors"
                  >
                    <FaWhatsapp />
                    ഈ Category-ക്കായി WhatsApp ചെയ്യുക
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Two Column */}
        <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <div className="bg-white rounded-3xl p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 max-h-[800px] overflow-y-auto sticky top-28">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-left transition ${
                  active === index
                    ? "bg-blue-700 text-white"
                    : "text-[#07142f] hover:bg-blue-50"
                }`}
              >
                {category.title}
                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 h-fit">
            <h3 className="text-2xl font-black text-[#07142f] mb-6">
              {serviceCategories[active]?.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {serviceCategories[active]?.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#f8fbff] border border-slate-100 rounded-2xl px-4 py-4 flex items-center gap-3"
                >
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${service.includes("Biometric") ? "bg-amber-500" : "bg-green-500"}`} />
                  <span className="font-semibold text-slate-700 text-sm xl:text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/919188549181?text=Hi, I need help with services under ${serviceCategories[active]?.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-black flex items-center justify-center gap-3 transition-colors"
            >
              <FaWhatsapp />
              ഈ Category-ക്കായി WhatsApp ചെയ്യുക
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllServices;