import { CardIcon, GiftIcon, TierIcon, MapPinIcon, UsersIcon, AnalyticsIcon, MegaphoneIcon } from "./icons";
import Reveal from "./Reveal";

const CUSTOMER_BENEFITS = [
  { icon: GiftIcon, label: "Loyalty that pays cash" },
  { icon: CardIcon, label: "Unlimited brands, one wallet" },
  { icon: TierIcon, label: "30 days free membership" },
  { icon: MapPinIcon, label: "Rewards across all major cities" },
];

const BUSINESS_BENEFITS = [
  { icon: UsersIcon, label: "Accelerate customer footfall" },
  { icon: AnalyticsIcon, label: "Improve profit margins" },
  { icon: MegaphoneIcon, label: "Targeted marketing campaigns" },
  { icon: TierIcon, label: "Performance reporting & dashboards" },
];

const BenefitList = ({ items, dark }) => (
  <ul className="space-y-4">
    {items.map(({ icon: Icon, label }) => (
      <li key={label} className="flex items-center gap-3.5">
        <span
          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center [&_svg]:w-[18px] [&_svg]:h-[18px] ${
            dark ? "bg-white/10 text-primary" : "bg-primaryLight text-primary"
          }`}
        >
          <Icon />
        </span>
        <span className={`text-[15px] font-medium ${dark ? "text-white/90" : "text-ink"}`}>
          {label}
        </span>
      </li>
    ))}
  </ul>
);

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Benefits
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              One platform, endless rewards
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              The loyalty journey is simple, smart, and seamless — a customer
              receives a digital loyalty card, earns points through
              purchases, unlocks rewards and cashback, receives personalized
              promotions, and builds lasting loyalty. Here's what that means
              for each side of Rewaldo.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full p-8 lg:p-10 rounded-3xl border border-line hover:shadow-card transition-shadow">
              <p className="font-semibold text-secondary text-[18px] mb-7">For customers</p>
              <BenefitList items={CUSTOMER_BENEFITS} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full p-8 lg:p-10 rounded-3xl bg-secondary hover:shadow-card transition-shadow">
              <p className="font-semibold text-white text-[18px] mb-7">For merchants</p>
              <BenefitList items={BUSINESS_BENEFITS} dark />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
