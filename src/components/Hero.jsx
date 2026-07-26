import LoyaltyCardStack from "./LoyaltyCardStack";
import Reveal from "./Reveal";
import { DASHBOARD_LINKS } from "../config";

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-primaryLight blur-3xl" />
        <div className="absolute top-40 -right-40 w-[380px] h-[380px] rounded-full bg-primaryLight blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-primaryLight text-primaryDark text-[13px] font-semibold mb-6">
              Digital loyalty, done simply
            </span>
            <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.08] font-bold text-secondary">
              One Platform. Endless Rewards.
              <span className="text-primary"> Stronger Customer Loyalty.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted max-w-xl">
              Rewaldo replaces Traditional Plastic cards with a digital loyalty wallet.
              Customers collect loyalty Points, and every business
              they visit runs their own promotions and rewards from a
              single app.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={DASHBOARD_LINKS.business}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-pill bg-primary text-white font-semibold text-[15px] shadow-soft hover:bg-primaryDark transition-colors"
              >
                Open business dashboard
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 flex-wrap">
              <div>
                <p className="text-2xl font-bold text-secondary">1</p>
                <p className="text-sm text-muted">wallet for every store card</p>
              </div>
              <div className="w-px h-9 bg-line" />
              <div>
                <p className="text-2xl font-bold text-secondary">0</p>
                <p className="text-sm text-muted">Traditional Plastic Cards to lose</p>
              </div>
              <div className="w-px h-9 bg-line" />
              <div>
                <p className="text-2xl font-bold text-secondary">24/7</p>
                <p className="text-sm text-muted">live promotions & tracking</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <LoyaltyCardStack />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
