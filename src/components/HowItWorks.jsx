import { ScanIcon } from "./icons";
import Reveal from "./Reveal";

const CUSTOMER_STEPS = [
  {
    title: "Membership plan",
    desc: "Three custom tiers to grow into as you use the app.",
  },
  {
    title: "Explore",
    desc: "Browse hundreds of merchants and discover offers near you.",
  },
  {
    title: "Shop & earn",
    desc: "Collect loyalty points every time you spend.",
  },
  {
    title: "Unlock tiers",
    desc: "Earn more rewards as your loyalty grows.",
  },
  {
    title: "Redeem",
    desc: "Convert eligible loyalty points into cash through a secure approval process.",
  },
];

const BUSINESS_STEPS = [
  {
    title: "Join free",
    desc: "Become a merchant partner at no joining cost.",
  },
  {
    title: "Showcase your business",
    desc: "Promote your products, services and offers.",
  },
  {
    title: "Engage customers",
    desc: "Launch targeted campaigns for new, returning, loyal and VIP customers.",
  },
  {
    title: "Reward loyalty",
    desc: "Drive repeat visits with points, rewards and tier upgrades.",
  },
  {
    title: "Track performance",
    desc: "Monitor sales, revenue and campaign performance through real-time dashboards.",
  },
];

const StepList = ({ steps }) => (
  <ol className="space-y-6">
    {steps.map((step, i) => (
      <li key={step.title} className="flex gap-5">
        <div className="shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-semibold text-[15px]">
          {i + 1}
        </div>
        <div>
          <h4 className="font-semibold text-ink text-[17px] mb-1">{step.title}</h4>
          <p className="text-muted text-[15px] leading-relaxed">{step.desc}</p>
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
              <ol className="space-y-6">
                {BUSINESS_STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-[15px]">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-[17px] mb-1">{step.title}</h4>
                      <p className="text-white/70 text-[15px] leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
