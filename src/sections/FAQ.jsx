import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "PAN Card ലഭിക്കാൻ എത്ര ദിവസം എടുക്കും?",
    answer: "സാധാരണയായി 7 മുതൽ 15 പ്രവൃത്തി ദിവസങ്ങൾ വരെ എടുക്കും.",
  },
  {
    question: "ആധാർ അപ്ഡേറ്റ് ചെയ്യാൻ എന്തൊക്കെ രേഖകൾ വേണം?",
    answer: "ആധാർ കാർഡ്, മൊബൈൽ നമ്പർ, ആവശ്യമായ പ്രൂഫ് ഡോക്യുമെന്റുകൾ.",
  },
  {
    question: "പാസ്പോർട്ട് അപേക്ഷയ്ക്ക് സഹായം ലഭിക്കുമോ?",
    answer: "അതെ. പുതിയ പാസ്പോർട്ട്, റിന്യൂവൽ, തത്കാൽ സേവനങ്ങൾ ലഭ്യമാണ്.",
  },
  {
    question: "ഇൻഷുറൻസ് സേവനങ്ങൾ ലഭ്യമാണോ?",
    answer: "ലൈഫ്, ഹെൽത്ത്, വാഹന ഇൻഷുറൻസ് എന്നിവ ലഭ്യമാണ്.",
  },
  {
    question: "WhatsApp വഴി സേവനങ്ങൾ ചോദിക്കാമോ?",
    answer: "അതെ. എല്ലാ സേവനങ്ങൾക്കും നേരിട്ട് WhatsApp വഴി ബന്ധപ്പെടാം.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-blue-700 font-black tracking-widest text-sm">
            ••• FAQ •••
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#07142f] mt-2">
            പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ
          </h2>

          <p className="text-slate-500 mt-3">
            ഉപഭോക്താക്കൾ കൂടുതലായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f8fbff] rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full p-5 sm:p-6 flex justify-between items-center gap-4 text-left"
              >
                <span className="font-bold text-base sm:text-lg text-[#07142f]">
                  {faq.question}
                </span>

                <FiChevronDown
                  size={24}
                  className={`transition shrink-0 ${active === index ? "rotate-180" : ""}`}
                />
              </button>

              {active === index && (
                <div className="px-5 sm:px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;