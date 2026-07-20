import { ScanIcon } from "./icons";

const CUSTOMER_STEPS = [
  {
    title: "Join a business",
    desc: "Scan a QR code in-store or search the business inside the Rewaldo app to add its digital card to your wallet.",
  },
  {
    title: "Collect points on every visit",
    desc: "Checkout adds points or stamps to that card automatically. Your progress bar updates in real time.",
  },
  {
    title: "Redeem a reward",
    desc: "Once a card is full, redeem it in one tap — the business gets an instant notification to fulfill it.",
  },
];

const BUSINESS_STEPS = [
  {
    title: "Set up your loyalty program",
    desc: "Pick a subscription package, define your points rules, and design your card from the business dashboard.",
  },
  {
    title: "Launch promotions",
    desc: "Publish limited-time offers and discounts that appear instantly to every customer holding your card.",
  },
  {
    title: "Track performance",
    desc: "Watch redemptions, repeat visits, and referral growth from the same dashboard, no spreadsheets required.",
  },
];

const StepList = ({ steps }) => (
  <ol className="space-y-8">
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
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#FAFBFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10">
          <div className="p-8 lg:p-10 rounded-3xl bg-white border border-line shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primaryLight text-primary flex items-center justify-center">
                <ScanIcon />
              </div>
              <p className="font-semibold text-secondary text-[18px]">For customers</p>
            </div>
            <StepList steps={CUSTOMER_STEPS} />
          </div>

          <div className="p-8 lg:p-10 rounded-3xl bg-secondary text-white shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 text-primary flex items-center justify-center">
                <ScanIcon />
              </div>
              <p className="font-semibold text-white text-[18px]">For businesses</p>
            </div>
            <ol className="space-y-8">
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
