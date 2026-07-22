import {
  CardIcon,
  StampIcon,
  TagIcon,
  ReferralIcon,
  TierIcon,
  AnalyticsIcon,
  BellIcon,
  ShieldIcon,
} from "./icons";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: CardIcon,
    title: "Digital loyalty cards",
    desc: "Every customer gets one wallet holding a card for each business they join — no plastic, no paper, nothing to leave at home.",
  },
  {
    icon: StampIcon,
    title: "Points & stamps",
    desc: "Purchases turn into points or stamps automatically, tracked per card so progress toward the next reward is always visible.",
  },
  {
    icon: TagIcon,
    title: "Promotions that update live",
    desc: "Merchants publish offers and discounts from their dashboard, and customers see them the moment they open the app.",
  },
  {
    icon: ReferralIcon,
    title: "Referral rewards",
    desc: "Customers invite friends and both sides get credited automatically — no codes to track by hand.",
  },
  {
    icon: TierIcon,
    title: "Packages & subscriptions",
    desc: "Businesses choose a plan tier that fits their size, from a single storefront to a multi-location chain.",
  },
  {
    icon: AnalyticsIcon,
    title: "Reporting & analytics",
    desc: "Redemption rates, repeat-visit trends, and top rewards, laid out for owners and platform admins alike.",
  },
  {
    icon: BellIcon,
    title: "Push notifications",
    desc: "Reward reminders and new promotions reach customers directly, timed to bring them back before a card expires.",
  },
  {
    icon: ShieldIcon,
    title: "Role-based access",
    desc: "Admins, merchant owners, and staff each see exactly the tools their role needs — nothing more.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Platform
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              Everything a loyalty program needs, built in
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              One backend, three connected experiences: the customer app,
              the business dashboard, and the admin control center.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="group h-full p-6 rounded-2xl border border-line hover:border-primary/40 hover:shadow-card transition-all bg-white">
                <div className="w-12 h-12 rounded-xl bg-primaryLight text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon />
                </div>
                <h3 className="font-semibold text-ink text-[17px] mb-2">{title}</h3>
                <p className="text-[14px] text-muted leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
