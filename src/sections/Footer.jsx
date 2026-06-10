import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#06142f] text-white">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              CSC Thalappuzha
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Digital Service Center providing PAN Card, Aadhaar, Passport,
              Insurance, Banking and Government Services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>

            <div className="space-y-4 text-slate-300">
              <p className="flex items-center gap-2">
                <FaPhoneAlt />
                +91 99645 08658
              </p>

              <p className="flex items-center gap-2">
                <FaWhatsapp />
                WhatsApp Support
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Thalappuzha, Wayanad
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919964508658"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-slate-400 text-sm">
          © 2026 CSC Thalappuzha. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;