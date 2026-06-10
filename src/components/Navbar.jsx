import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar({ lang, setLang, t }) {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const menu = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.faq, href: "#faq" },
    { label: "Reviews", href: "#reviews" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (!section) return;

    const navbarHeight = 110;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setActive(href);
    setOpen(false);
    window.history.pushState(null, "", href);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";

      menu.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop - 140;
          if (window.scrollY >= top) {
            current = item.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#06142f] text-white text-sm hidden md:block">
        <div className="max-w-[1640px] mx-auto px-6 lg:px-24 py-3 flex justify-between items-center">
          <div className="flex items-center gap-8 font-semibold">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              Thalappuzha, Kerala
            </span>

            <span className="h-5 w-px bg-white/20" />

            <span className="flex items-center gap-2">
              <FaClock className="text-yellow-400" />
              Mon - Sat: 9:00 AM - 6:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-white/80">Follow Us:</span>
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3"
          >
            <div className="text-[34px] sm:text-[42px] lg:text-[48px] leading-none font-black tracking-tight">
              <span className="text-blue-700">C</span>
              <span className="text-green-600">S</span>
              <span className="text-blue-700">C</span>
            </div>

            <div className="text-left">
              <h1 className="text-lg sm:text-xl lg:text-[25px] leading-tight font-black text-blue-700">
                Thalappuzha
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Digital Service Center
              </p>
            </div>
          </button>

          <ul className="hidden lg:flex items-center gap-10 font-bold text-[#07142f]">
            {menu.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`hover:text-blue-700 transition pb-2 ${
                    active === item.href
                      ? "text-blue-700 border-b-4 border-blue-700"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "ml" ? "en" : "ml")}
              className="flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-black"
            >
              <FaGlobe />
              {t.nav.toggle}
            </button>

            <a
              href="https://wa.me/919188549181"
              target="_blank"
              className="bg-green-500 text-white px-7 py-3 rounded-xl flex items-center gap-3 font-black shadow-lg shadow-green-200"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t px-5 py-5 shadow-xl">
            <div className="flex flex-col gap-4 font-bold">
              {menu.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left ${
                    active === item.href ? "text-blue-700" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;