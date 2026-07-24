import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Do customers need to download a new app for every store?",
    a: "No. One Rewaldo customer app holds a card for every business a person joins, so there's a single wallet instead of a separate app per store.",
  },
  {
    q: "What's the difference between the admin and business dashboards?",
    a: "The business dashboard is for a single merchant to run their own loyalty program. The admin dashboard is for the Rewaldo team to oversee every merchant, subscription package, and platform-wide setting.",
  },
  {
    q: "Can a business run more than one location?",
    a: "Yes. Subscription packages scale from a single storefront up to multi-location chains, with staff roles managed per location from the business dashboard.",
  },
  {
    q: "How do customers redeem a reward?",
    a: "Once a card is full, the customer redeems it from the app in one tap. The business receives an instant notification to fulfill the reward in-store.",
  },
];

const FAQItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-line py-6">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between text-left gap-4"
    >
      <span className="font-semibold text-ink text-[16px]">{q}</span>
      <span
        className={`shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-primary transition-transform ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        +
      </span>
    </button>
    <div
      className={`grid transition-all duration-300 ${
        isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
      style={{ display: "grid" }}
    >
      <p className="overflow-hidden text-muted text-[14.5px] leading-relaxed pr-8">{a}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-20 bg-[#FAFBFA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="mb-12">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              Common questions
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
