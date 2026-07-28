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
    title: "Loyalty Points & Rewards",
    desc: "Purchases turn into points or rewards automatically, tracked per card so progress toward the next reward is always visible.",
  },
  {
    icon: TagIcon,
    title: "Promotions that update live",
    desc: "Merchants publish offers and discounts from their dashboard, and customers see them the moment they open the app.",
  },
  {
    icon: ReferralIcon,
    title: "Referral rewards",
    desc: "Customers invite friends and get cash rewards — to be used for next membership plan renewal.",
  },
  {
    icon: TierIcon,
    title: "Tiered loyalty programs",
    desc: "Businesse creates a loyalty program from a single storefront, and customers can see their progress toward the next tier in real time.",
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
    <section id="features" className="py-16 lg:py-20">
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
              <div className="group relative h-full rounded-2xl border border-line bg-white p-6 shadow-[0_14px_34px_-14px_rgba(20,102,63,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_54px_-18px_rgba(20,102,63,0.36)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primaryLight to-emerald-100 text-primary shadow-[0_10px_20px_-6px_rgba(20,102,63,0.35)] transition-all duration-300 group-hover:from-primary group-hover:to-primaryDark group-hover:text-white group-hover:shadow-[0_14px_26px_-6px_rgba(20,102,63,0.5)]">
                  <Icon />
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-ink">{title}</h3>
                <p className="text-[14px] leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;