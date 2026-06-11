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
      {/* Background dots */}
      <div className="absolute left-0 top-0 h-full w-[120px] lg:w-[180px] opacity-30 bg-[radial-gradient(#2f6bff_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-black mb-5">
              {t.hero.badge}
            </span>

            <h1 className="text-[30px] sm:text-[42px] lg:text-[52px] leading-tight font-black text-[#07142f] tracking-[-1px]">
              {t.hero.title1}
              <br />
              <span className="text-blue-700">{t.hero.title2}</span>
              <br />
              {t.hero.title3}
            </h1>

            <p className="mt-5 text-sm sm:text-lg text-slate-600 leading-relaxed max-w-[720px]">
              {t.hero.desc}
            </p>

            {/* FEATURES (2x2 GRID FIX) */}
            <div className="grid grid-cols-2 gap-3 mt-7">
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
                  className="bg-white rounded-xl p-4 shadow-md border border-slate-100 flex items-center gap-3"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${item[3]}`}
                  >
                    {item[0]}
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-[#07142f] leading-tight">
                      {item[1]}
                    </h4>
                    <p className="text-xs text-slate-500">{item[2]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <a
                href="https://wa.me/919188549181"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-base sm:text-lg font-black shadow-lg"
              >
                <FaWhatsapp />
                {t.hero.whatsapp}
              </a>

              <a
                href="tel:+919964508658"
                className="bg-white border-2 border-blue-600 text-blue-700 px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-base sm:text-lg font-black"
              >
                <FaPhoneAlt />
                {t.hero.call}
              </a>
            </div>

            {/* MARQUEE */}
            <div className="mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#06142f] via-blue-700 to-[#06142f] py-2">
              <div className="whitespace-nowrap animate-[marquee_18s_linear_infinite] text-white font-bold text-xs sm:text-sm px-2">
                ⭐ ALL KERALA GOVERNMENT & ONLINE SERVICES AVAILABLE AT CSC THALAPPUZHA & CHUNGAM ⭐
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/csc-hero.webp"
                alt="CSC Thalappuzha Service Center"
                className="w-full h-[240px] sm:h-[380px] lg:h-[520px] object-cover"
              />
            </div>

            {/* STATS */}
            <div className="bg-[#06142f] text-white rounded-2xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">

              <div>
                <FaSmile className="mx-auto text-xl sm:text-2xl text-blue-300 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">5000+</h3>
                <p className="text-xs text-slate-300">Happy Customers</p>
              </div>

              <div>
                <HiDocumentText className="mx-auto text-xl sm:text-2xl text-blue-300 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">100+</h3>
                <p className="text-xs text-slate-300">Services</p>
              </div>

              <div>
                <HiBadgeCheck className="mx-auto text-xl sm:text-2xl text-green-300 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">10+</h3>
                <p className="text-xs text-slate-300">Years Experience</p>
              </div>

              <div>
                <FaMapMarkerAlt className="mx-auto text-xl sm:text-2xl text-yellow-400 mb-2" />
                <h3 className="text-xl sm:text-3xl font-black">100%</h3>
                <p className="text-xs text-slate-300">Trusted Service</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;