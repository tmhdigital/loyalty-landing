import {
  ScanIcon,
  UserPlusIcon,
  SearchIcon,
  ShoppingBagIcon,
  AnalyticsIcon,
  WalletIcon,
  StorefrontIcon,
  MegaphoneIcon,
  UsersIcon,
  GiftIcon,
} from "./icons";
import Reveal from "./Reveal";

const CUSTOMER_STEPS = [
  {
    icon: UserPlusIcon,
    title: "Membership plan",
    desc: "Three custom tiers to grow into as you use the app.",
  },
  {
    icon: SearchIcon,
    title: "Explore",
    desc: "Browse hundreds of merchants and discover offers near you.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Shop & earn",
    desc: "Collect loyalty points every time you spend.",
  },
  {
    icon: AnalyticsIcon,
    title: "Unlock tiers",
    desc: "Earn more rewards as your loyalty grows.",
  },
  {
    icon: WalletIcon,
    title: "Redeem",
    desc: "Convert eligible loyalty points into cash through a secure approval process.",
  },
];

const BUSINESS_STEPS = [
  {
    icon: StorefrontIcon,
    title: "Join free",
    desc: "Become a merchant partner at no joining cost.",
  },
  {
    icon: MegaphoneIcon,
    title: "Showcase your business",
    desc: "Promote your products, services and offers.",
  },
  {
    icon: UsersIcon,
    title: "Engage customers",
    desc: "Launch targeted campaigns for new, returning, loyal and VIP customers.",
  },
  {
    icon: GiftIcon,
    title: "Reward loyalty",
    desc: "Drive repeat visits with points, rewards and tier upgrades.",
  },
  {
    icon: AnalyticsIcon,
    title: "Track performance",
    desc: "Monitor sales, revenue and campaign performance through real-time dashboards.",
  },
];

const StepList = ({ steps, dark }) => (
  <ol className="space-y-6">
    {steps.map(({ icon: Icon, title, desc }, i) => (
      <li key={title} className="flex gap-5">
        <div
          className={`shrink-0 relative w-11 h-11 rounded-full flex items-center justify-center ${
            dark ? "bg-white/10 text-primary" : "bg-secondary text-white"
          }`}
        >
          <Icon />
          <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
            {i + 1}
          </span>
        </div>
        <div>
          <h4 className={`font-semibold text-[17px] mb-1 ${dark ? "text-white" : "text-ink"}`}>
            {title}
          </h4>
          <p className={`text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
            {desc}
          </p>
        </div>
      </li>
    ))}
  </ol>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-[#FAFBFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              How it works
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              Two sides, one loop
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Customers collect and redeem. Businesses configure and track.
              Rewaldo keeps both in sync.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10">
          <Reveal>
            <div className="h-full p-8 lg:p-10 rounded-3xl bg-white border border-line shadow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primaryLight text-primary flex items-center justify-center">
                  <ScanIcon />
                </div>
                <p className="font-semibold text-secondary text-[18px]">For customers</p>
              </div>
              <StepList steps={CUSTOMER_STEPS} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full p-8 lg:p-10 rounded-3xl bg-secondary text-white shadow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/10 text-primary flex items-center justify-center">
                  <ScanIcon />
                </div>
                <p className="font-semibold text-white text-[18px]">For businesses</p>
              </div>
              <StepList steps={BUSINESS_STEPS} dark />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
