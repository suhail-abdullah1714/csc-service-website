import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 bg-white py-16 sm:py-20">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-blue-700 font-black tracking-widest text-sm">
            ••• CONTACT US •••
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#07142f] mt-2">
            ഞങ്ങളെ ബന്ധപ്പെടുക
          </h2>

          <p className="text-slate-500 mt-3">
            സേവനങ്ങൾക്കായി നേരിട്ട് വിളിക്കാം അല്ലെങ്കിൽ WhatsApp ചെയ്യാം
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Contact Info */}
          <div className="bg-[#f8fbff] rounded-3xl p-5 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <div className="space-y-6">
              {[
                [
                  <FaMapMarkerAlt />,
                  "Serving Wayanad",
                  "Thalappuzha & Chungam",
                  "bg-blue-100 text-blue-700",
                ],

                [
                  <FaPhoneAlt />,
                  "Phone",
                  "+91 99645 08658",
                  "bg-green-100 text-green-700",
                ],

                [
                  <FaEnvelope />,
                  "Email",
                  "safacsctlp@gmail.com",
                  "bg-purple-100 text-purple-700",
                ],

                [
                  <FaClock />,
                  "Working Hours",
                  "Mon - Sat: 9:00 AM - 7:00 PM",
                  "bg-orange-100 text-orange-700",
                ],
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0 ${item[3]}`}
                  >
                    {item[0]}
                  </div>

                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-[#07142f]">
                      {item[1]}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base break-words">
                      {item[2]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <a
                href="https://wa.me/919188549181"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl flex items-center justify-center gap-3 font-black transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="tel:+919964508658"
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex items-center justify-center gap-3 font-black transition"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)] min-h-[320px] sm:min-h-[420px]">
            <iframe
              title="CSC Thalappuzha Location"
              src="https://www.google.com/maps?q=Thalappuzha%20Wayanad%20Kerala&output=embed"
              className="w-full h-full min-h-[320px] sm:min-h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;