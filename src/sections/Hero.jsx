import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaRupeeSign,
  FaSmile,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiDocumentText, HiBadgeCheck } from "react-icons/hi";

function Hero({ t }) {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-white to-[#f8f2ff]"
    >
      <div className="absolute left-0 top-0 h-full w-[120px] lg:w-[180px] opacity-30 bg-[radial-gradient(#2f6bff_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24 pt-10 pb-20">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[15px] font-black mb-5">
              {t.hero.badge}
            </span>

            <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.25] font-black text-[#07142f] tracking-[-1px]">
              {t.hero.title1}
              <br />
              <span className="text-blue-700">{t.hero.title2}</span>
              <br />
              {t.hero.title3}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-[1.8] max-w-[720px]">
              {t.hero.desc}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7 max-w-[700px]">
              {[
                [
                  <FaBolt />,
                  "Fast & Reliable",
                  "Service",
                  "bg-blue-100 text-blue-700",
                ],
                [
                  <FaShieldAlt />,
                  "Secure",
                  "Your Data",
                  "bg-blue-100 text-blue-700",
                ],
                [
                  <FaHeadset />,
                  "Expert Support",
                  "Always Here",
                  "bg-blue-100 text-blue-700",
                ],
                [
                  <FaRupeeSign />,
                  "Affordable",
                  "Best Prices",
                  "bg-green-100 text-green-700",
                ],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-3 sm:p-4 shadow-[0_8px_24px_rgba(15,23,42,0.09)] border border-slate-100 flex items-center gap-3"
                >
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-lg ${item[3]}`}
                  >
                    {item[0]}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-[13px] font-black text-[#07142f] leading-tight">
                      {item[1]}
                    </h4>

                    <p className="text-[11px] sm:text-[12px] text-slate-500">
                      {item[2]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 mt-7 max-w-[680px]">
              <a
                href="https://wa.me/919188549181"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-base sm:text-[20px] font-black shadow-xl shadow-green-200"
              >
                <FaWhatsapp />
                {t.hero.whatsapp}
              </a>

              <a
                href="tel:+919964508658"
                className="bg-white border-2 border-blue-600 text-blue-700 px-6 sm:px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-base sm:text-[20px] font-black"
              >
                <FaPhoneAlt />
                {t.hero.call}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative pt-4 mb-12 lg:mb-0">
            <div className="rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
              <img
                src="/images/csc-hero.webp"
                alt="CSC Thalappuzha Service Center"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>

            {/* Statistics */}
            <div className="lg:absolute -bottom-6 left-4 right-4 lg:left-9 lg:right-9 bg-[#06142f] text-white rounded-2xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4 lg:mt-0">
              <div className="sm:border-r border-white/20">
                <FaSmile className="mx-auto text-xl sm:text-2xl text-blue-300 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">5000+</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Happy Customers
                </p>
              </div>

              <div className="sm:border-r border-white/20">
                <HiDocumentText className="mx-auto text-xl sm:text-2xl text-blue-300 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">100+</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Services
                </p>
              </div>

              <div className="sm:border-r border-white/20">
                <HiBadgeCheck className="mx-auto text-xl sm:text-2xl text-green-300 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">10+</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Years Experience
                </p>
              </div>

              <div>
                <FaMapMarkerAlt className="mx-auto text-xl sm:text-2xl text-yellow-400 mb-2" />
                <h3 className="text-lg sm:text-2xl font-black">100%</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Trusted Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;