import { DASHBOARD_LINKS } from "../config";
import Reveal from "./Reveal";

const CTABanner = () => {
  return (
    <section className="px-6 lg:px-10 pb-24">
      <Reveal>
        <div className="max-w-7xl mx-auto rounded-3xl bg-secondary px-8 py-14 lg:px-16 lg:py-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />

          <h2 className="relative text-[28px] sm:text-[36px] font-bold text-white leading-tight max-w-2xl mx-auto">
            Ready to put your loyalty program on Rewaldo?
          </h2>
          <p className="relative mt-4 text-white/70 max-w-xl mx-auto text-[15px]">
            Jump straight into the dashboard that matches your role.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DASHBOARD_LINKS.business}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-pill bg-primary text-white font-semibold text-[15px] hover:bg-primaryDark shadow-soft transition-colors"
            >
              Business dashboard
            </a>
            <a
              href={DASHBOARD_LINKS.admin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-pill bg-white text-secondary font-semibold text-[15px] hover:bg-primaryLight transition-colors"
            >
              Admin dashboard
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTABanner;
