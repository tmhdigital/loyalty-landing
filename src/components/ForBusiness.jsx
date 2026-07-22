import { DASHBOARD_LINKS } from "../config";
import { TierIcon, AnalyticsIcon, ShieldIcon, TagIcon } from "./icons";
import Reveal from "./Reveal";

const ForBusiness = () => {
  return (
    <section id="for-business" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Dashboards
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              Built for two kinds of control
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Merchants run their loyalty program day to day. Platform admins
              oversee every business on Rewaldo. Each gets its own dashboard.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business dashboard card */}
          <Reveal>
            <div className="h-full relative overflow-hidden rounded-3xl border border-line p-9 lg:p-10 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primaryLight text-primary flex items-center justify-center mb-6">
                <TagIcon />
              </div>
              <h3 className="text-[24px] font-bold text-secondary mb-3">
                Business dashboard
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-7">
                For merchant owners and staff. Configure your loyalty card,
                publish promotions, manage staff access, and track redemptions
                for your own storefronts.
              </p>
              <ul className="space-y-3 mb-9">
                {[
                  "Design point & stamp rules per card",
                  "Publish and schedule promotions",
                  "View your own sales & redemption reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={DASHBOARD_LINKS.business}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-pill bg-primary text-white font-semibold text-[15px] hover:bg-primaryDark shadow-soft transition-colors"
              >
                Go to business dashboard
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          {/* Admin dashboard card */}
          <Reveal delay={100}>
            <div className="h-full relative overflow-hidden rounded-3xl bg-secondary p-9 lg:p-10 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-primary flex items-center justify-center mb-6">
                <ShieldIcon />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-3">
                Admin dashboard
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-7">
                For the Rewaldo platform team. Approve and manage every
                business on the platform, oversee subscription packages, and
                monitor the system end to end.
              </p>
              <ul className="space-y-3 mb-9">
                {[
                  "Manage merchant accounts & subscription packages",
                  "Platform-wide analytics and audit logs",
                  "Control roles, permissions, and access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={DASHBOARD_LINKS.admin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-pill bg-white text-secondary font-semibold text-[15px] hover:bg-primaryLight transition-colors"
              >
                Go to admin dashboard
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
