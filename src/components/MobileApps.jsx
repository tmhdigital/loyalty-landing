"use client";

import { useEffect, useRef, useState } from "react";
import { APP_LINKS } from "../config";
import AppDownloadCard from "./AppDownloadCard";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import {
  WalletIcon,
  TierIcon,
  MapPinIcon,
  TagIcon,
  GiftIcon,
  ShieldIcon,
  StorefrontIcon,
  CatalogueIcon,
  MegaphoneIcon,
  UsersIcon,
  AnalyticsIcon,
  StarIcon,
  HeartIcon,
  HandshakeIcon,
  PieChartIcon,
  BellIcon,
  ShoppingBagIcon,
  UserPlusIcon,
} from "./icons";
/* ---------------------------------------------------
   Animation helpers
--------------------------------------------------- */

// Fires `inView = true` once the element scrolls into viewport
function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Animated number counter (points, stats, etc.)
function CountUp({ value, duration = 1200, decimals = 0, active, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    const numeric =
      typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(numeric * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, value, duration]);

  return (
    <>
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

// One-time keyframes block for the whole section
const MockupAnimationStyles = () => (
  <style>{`
    @keyframes float-phone {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes float-phone-alt {
      0%, 100% { transform: translateY(-6px); }
      50% { transform: translateY(6px); }
    }
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes donut-in {
      from { opacity: 0; transform: scale(0.4) rotate(-120deg); }
      to { opacity: 1; transform: scale(1) rotate(0deg); }
    }
    @keyframes pulse-badge {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    @keyframes shine-sweep {
      0% { transform: translateX(-120%) rotate(20deg); }
      60%, 100% { transform: translateX(220%) rotate(20deg); }
    }
    .animate-float-phone { animation: float-phone 5.5s ease-in-out infinite; }
    .animate-float-phone-alt { animation: float-phone-alt 6.5s ease-in-out infinite; }
    .animate-fade-up { animation: fade-up 0.6s ease-out forwards; }
    .animate-donut-in { animation: donut-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .animate-pulse-badge { animation: pulse-badge 1.6s ease-in-out infinite; }
    .animate-shine { animation: shine-sweep 3.2s ease-in-out infinite; }
  `}</style>
);

const CUSTOMER_FEATURES = [
  { icon: StorefrontIcon, label: "Hundreds of partner merchants" },
  { icon: WalletIcon, label: "One digital loyalty wallet" },
  { icon: TierIcon, label: "Tier-based rewards" },
  { icon: StarIcon, label: "Instant loyalty points" },
  { icon: HeartIcon, label: "Favourite merchants" },
  { icon: MapPinIcon, label: "Google Maps integration" },
  { icon: TagIcon, label: "Nearby offers" },
  { icon: GiftIcon, label: "Cash point redemption" },
  { icon: ShieldIcon, label: "Secure digital experience" },
];

const BUSINESS_FEATURES = [
  { icon: HandshakeIcon, label: "Free merchant onboarding" },
  { icon: StorefrontIcon, label: "Digital business profile" },
  { icon: CatalogueIcon, label: "Drill down to business website" },
  { icon: MegaphoneIcon, label: "Targeted marketing campaigns" },
  { icon: UsersIcon, label: "Customer segmentation" },
  { icon: TierIcon, label: "Loyalty & tier management" },
  { icon: GiftIcon, label: "Digital rewards engine" },
  { icon: AnalyticsIcon, label: "Revenue & profit dashboards" },
  { icon: PieChartIcon, label: "Business analytics & reporting" },
];

const WEEKLY_SELL = [
  { day: "Sat", value: 8, color: "#6366F1" },
  { day: "Sun", value: 6, color: "#34D399" },
  { day: "Mon", value: 5, color: "#F59E0B" },
  { day: "Tue", value: 7, color: "#22D3EE" },
  { day: "Wed", value: 4, color: "#A78BFA" },
  { day: "Thu", value: 6, color: "#3B82F6" },
  { day: "Fri", value: 3, color: "#F87171" },
];

const WEEKLY_SELL_TOTAL = WEEKLY_SELL.reduce((sum, d) => sum + d.value, 0);

const STAT_CARDS = [
  { icon: ShoppingBagIcon, label: "Total Sales", value: "84,320.00" },
  { icon: UserPlusIcon, label: "New Members", value: "58" },
  { icon: StarIcon, label: "Points Issued", value: "12,450" },
  { icon: GiftIcon, label: "Points Redeemed", value: "4,820" },
];

const WEEKLY_SELL_GRADIENT = (() => {
  let acc = 0;
  const stops = WEEKLY_SELL.map(({ value, color }) => {
    const start = (acc / WEEKLY_SELL_TOTAL) * 360;
    acc += value;
    const end = (acc / WEEKLY_SELL_TOTAL) * 360;
    return `${color} ${start}deg ${end}deg`;
  });
  return `conic-gradient(${stops.join(", ")})`;
})();

const StatusRow = () => (
  <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-ink/70">
    <span>9:41</span>
    <div className="flex gap-1 items-center">
      <span className="w-3 h-2 rounded-[2px] bg-ink/40" />
      <span className="w-3 h-2 rounded-[2px] bg-ink/40" />
      <span className="w-4 h-2 rounded-[2px] bg-ink/60" />
    </div>
  </div>
);

const BottomNav = ({ items, active }) => (
  <div className="mt-auto border-t border-line px-3 py-3 flex items-center justify-between">
    {items.map((label) => (
      <div key={label} className="flex flex-col items-center gap-1 w-12 group/nav">
        <span
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            label === active ? "bg-primary scale-125" : "bg-line group-hover/nav:bg-primary/50"
          }`}
        />
        <span
          className={`text-[9px] font-medium truncate w-full text-center transition-colors duration-300 ${
            label === active ? "text-primary" : "text-muted"
          }`}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

const CustomerAppScreen = () => {
  const [ref, inView] = useInView(0.4);
  const offers = [
    ["Pizza Hut", "20% OFF"],
    ["Khaadi", "15% OFF"],
    ["McDonald's", "10% OFF"],
  ];

  return (
    <div ref={ref} className="[perspective:1200px]">
      <div className="animate-float-phone transition-transform duration-500 hover:scale-[1.03] hover:-rotate-1">
        <PhoneMockup>
          <StatusRow />
          <div className="px-5 pt-3 pb-4 flex items-center justify-between">
            <div>
              <p className="text-[15px] font-semibold text-ink">Hi, Ayesha!</p>
              <p className="text-[11.5px] text-muted">Welcome back to Rewaldo</p>
            </div>
            <span className="w-8 h-8 rounded-full bg-primaryLight" />
          </div>

          <div className="relative mx-5 rounded-2xl bg-gradient-to-br from-primary via-primary to-primaryDark p-4 text-white shadow-soft overflow-hidden">
            {/* shine sweep overlay */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white/10 blur-md animate-shine" />
            </div>

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10.5px] uppercase tracking-wide text-white/70">
                  Your points
                </p>
                <p className="text-[22px] font-bold leading-tight">
                  <CountUp value={4700} active={inView} />
                </p>
              </div>
              <span className="text-[10.5px] font-semibold bg-white/15 px-2.5 py-1 rounded-pill">
                Gold Member
              </span>
            </div>
            <div className="relative mt-3">
              <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white transition-[width] duration-[1400ms] ease-out"
                  style={{ width: inView ? "66%" : "0%" }}
                />
              </div>
              <p className="mt-1.5 text-[10.5px] text-white/70">
                9,300 points to reach Platinum
              </p>
            </div>
          </div>

          <div className="px-5 mt-4">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[12.5px] font-semibold text-ink">Nearby offers</p>
              <p className="text-[10.5px] text-primary font-medium">View all</p>
            </div>
            <div className="space-y-2">
              {offers.map(([merchant, offer], i) => (
                <div
                  key={merchant}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAFBFA] border border-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft cursor-pointer ${
                    inView ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${300 + i * 140}ms` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-primaryLight text-primary text-[10px] font-bold flex items-center justify-center">
                      {merchant[0]}
                    </span>
                    <span className="text-[12px] font-medium text-ink">{merchant}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-primary">{offer}</span>
                </div>
              ))}
            </div>
          </div>

          <BottomNav items={["Home", "Explore", "Wallet", "Offers", "Profile"]} active="Home" />
        </PhoneMockup>
      </div>
    </div>
  );
};

const BusinessAppScreen = () => {
  const [ref, inView] = useInView(0.4);

  return (
    <div ref={ref} className="[perspective:1200px]">
      <div className="animate-float-phone-alt transition-transform duration-500 hover:scale-[1.03] hover:rotate-1">
        <PhoneMockup>
          <StatusRow />
          <div className="px-5 pt-1 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src="/merchant-app-icon-512.png"
                alt=""
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-[13px] font-bold text-ink leading-tight">Merchant Partner</p>
                <p className="text-[9.5px] text-muted leading-tight">Lahore, Pakistan</p>
              </div>
            </div>
            <span className="relative w-7 h-7 rounded-full border border-line flex items-center justify-center text-ink/70 [&_svg]:w-4 [&_svg]:h-4">
              <BellIcon />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary text-white text-[7px] font-bold flex items-center justify-center animate-pulse-badge">
                1
              </span>
            </span>
          </div>

          <div className="px-5 flex items-center justify-between">
            <p className="text-[19px] font-bold text-ink">Statistics</p>
            <span className="text-[10px] font-medium text-ink border border-line rounded-pill px-3 py-1.5">
              All Time ⌄
            </span>
          </div>
          <p className="px-5 mt-1 text-[10.5px] text-muted">Range: All Time</p>

          <div className="px-5 mt-3 grid grid-cols-2 gap-2.5">
            {STAT_CARDS.map(({ icon: Icon, label, value }, i) => {
              const decimals = value.includes(".") ? 2 : 0;
              return (
                <div
                  key={label}
                  className={`rounded-2xl border border-primary/50 px-3.5 py-2.5 text-ink/70 [&_svg]:w-[18px] [&_svg]:h-[18px] transition-all duration-200 hover:shadow-soft hover:-translate-y-0.5 ${
                    inView ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <p className="text-[10px] text-muted leading-tight mb-2">{label}</p>
                  <div className="flex items-center gap-1.5">
                    <Icon />
                    <span className="text-[13.5px] font-bold text-ink leading-tight">
                      <CountUp value={value} active={inView} decimals={decimals} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-5 mt-4">
            <div className="rounded-2xl bg-primaryLight p-4">
              <p className="text-[13px] font-bold text-ink mb-2.5">Weekly Sell</p>
              <div className="relative h-[3px] rounded-full bg-white/70 mb-3 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-primary transition-[width] duration-[1200ms] ease-out"
                  style={{ width: inView ? "16.6%" : "0%" }}
                />
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`relative w-[72px] h-[72px] shrink-0 rounded-full ${
                    inView ? "animate-donut-in" : "opacity-0"
                  }`}
                  style={{ background: WEEKLY_SELL_GRADIENT }}
                >
                  <div className="absolute inset-[9px] rounded-full bg-white flex items-center justify-center">
                    <span className="text-[13px] font-bold text-ink">
                      <CountUp value={WEEKLY_SELL_TOTAL} active={inView} duration={900} />
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {WEEKLY_SELL.map(({ day, color }, i) => (
                    <div
                      key={day}
                      className={`flex items-center gap-1.5 ${
                        inView ? "animate-fade-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${400 + i * 80}ms` }}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: color }}
                      />
                      <span className="text-[10px] text-ink/70">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <BottomNav items={["Home", "Sales", "Customers", "Profile"]} active="Home" />
        </PhoneMockup>
      </div>
    </div>
  );
};

const MobileApps = () => {
  return (
    <section id="mobile-apps" className="py-16 lg:py-20 bg-[#FAFBFA]">
      <MockupAnimationStyles />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Mobile apps
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              Rewaldo, wherever you are
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              One app for customers to discover, earn, and redeem rewards.
              One app for merchants to run their whole loyalty program. Both
              free to get started.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          <AppDownloadCard
            icon="/customer-app-icon-512.png"
            iconAlt="Rewaldo Customer app icon"
            eyebrow="Customer app"
            name="Rewaldo"
            badge="Start free for 30 days"
            description="Earn rewards wherever you go. Discover new experiences, collect points, unlock exclusive benefits, and enjoy personalized offers from your favorite brands — all in one intelligent loyalty app."
            features={CUSTOMER_FEATURES}
            links={APP_LINKS.customer}
            screen={<CustomerAppScreen />}
          />

          <AppDownloadCard
            icon="/merchant-app-icon-512.png"
            iconAlt="Rewaldo: Business app icon"
            eyebrow="Business app"
            name="Rewaldo: Business"
            badge="No cost to join"
            description="Join a growing network of merchants and connect with customers through intelligent loyalty, targeted campaigns, and measurable business performance — all at no cost to join."
            features={BUSINESS_FEATURES}
            links={APP_LINKS.business}
            screen={<BusinessAppScreen />}
            dark
          />
        </div>
      </div>
    </section>
  );
};

export default MobileApps;