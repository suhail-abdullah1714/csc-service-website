import {
  FaIdCard,
  FaPassport,
  FaUniversity,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const services = [
  {
    title: "PAN Card",
    image: "/images/pan-card.webp",
    icon: <FaIdCard />,
    desc: "New PAN & Correction",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Aadhaar",
    image: "/images/aadhaar-card.webp",
    icon: <FaIdCard />,
    desc: "Update & Download",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Passport",
    image: "/images/passport.webp",
    icon: <FaPassport />,
    desc: "New & Renewal",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Certificates",
    image: "/images/certificate.webp",
    icon: <HiDocumentText />,
    desc: "Income, Birth, Caste",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Banking",
    image: "/images/banking.webp",
    icon: <FaUniversity />,
    desc: "AEPS & Transfer",
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Insurance",
    image: "/images/insurance.webp",
    icon: <FaShieldAlt />,
    desc: "Life & Health",
    color: "bg-red-100 text-red-600",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-14 sm:py-20"
    >
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-blue-700 font-black tracking-widest text-xs sm:text-sm">
            ••• OUR SERVICES •••
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#07142f] mt-2">
            Popular Services
          </h2>

          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            CSC വഴി ലഭ്യമായ പ്രധാന സേവനങ്ങൾ
          </p>

          <div className="w-12 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-all duration-300 flex flex-col min-h-[250px] sm:min-h-[430px]"
            >
              <div className="relative h-20 sm:h-40 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                <div
                  className={`absolute -bottom-4 sm:-bottom-7 left-2 sm:left-6 w-9 h-9 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-3xl border-2 sm:border-4 border-white shadow-lg ${service.color}`}
                >
                  {service.icon}
                </div>
              </div>

              <div className="p-2 sm:p-6 pt-6 sm:pt-10 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-xl font-black text-[#07142f] mb-1 sm:mb-3 leading-tight">
                  {service.title}
                </h3>

                <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <a
                  href={`https://wa.me/919188549181?text=Hi, I need help with ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-6 bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919188549181"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-5 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

      {/* Floating Call */}
      <a
        href="tel:+919964508658"
        className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition"
      >
        📞
      </a>
    </section>
  );
}

export default Services;