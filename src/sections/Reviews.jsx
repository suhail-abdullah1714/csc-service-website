import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Kumar",
    review:
      "Very fast PAN card service. Staff was helpful and guided me throughout the process.",
  },
  {
    name: "Amina",
    review:
      "Aadhaar update was completed quickly. Highly recommended service center.",
  },
  {
    name: "Suresh",
    review:
      "Excellent customer support and affordable service charges.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-32 bg-[#f8fbff] py-16 sm:py-20">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-24">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-blue-700 font-black tracking-widest text-sm">
            ••• CUSTOMER REVIEWS •••
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#07142f] mt-2">
            What Our Customers Say
          </h2>

          <p className="text-slate-500 mt-3">
            Trusted by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                “{review.review}”
              </p>

              <h4 className="font-black text-[#07142f]">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;