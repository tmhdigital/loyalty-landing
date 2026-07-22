import customerIcon from "../assets/customer-app-icon-512.png";
import businessIcon from "../assets/merchant-app-icon-512.png";
import { APP_LINKS } from "../config";
import AppDownloadCard from "./AppDownloadCard";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import {
  WalletIcon,
  TierIcon,
  MapPinIcon,
  GiftIcon,
  ShieldIcon,
  StorefrontIcon,
  CatalogueIcon,
  MegaphoneIcon,
  UsersIcon,
  AnalyticsIcon,
} from "./icons";

const CUSTOMER_FEATURES = [
  { icon: StorefrontIcon, label: "Hundreds of partner merchants" },
  { icon: WalletIcon, label: "One digital loyalty wallet" },
  { icon: TierIcon, label: "Tier-based rewards" },
  { icon: MapPinIcon, label: "Nearby offers, Google Maps built in" },
  { icon: GiftIcon, label: "Cash point redemption" },
  { icon: ShieldIcon, label: "Secure digital experience" },
];

const BUSINESS_FEATURES = [
  { icon: StorefrontIcon, label: "Free merchant onboarding" },
  { icon: CatalogueIcon, label: "Product & service catalogue" },
  { icon: MegaphoneIcon, label: "Targeted marketing campaigns" },
  { icon: UsersIcon, label: "Customer segmentation" },
  { icon: GiftIcon, label: "Digital rewards engine" },
  { icon: AnalyticsIcon, label: "Revenue & profit dashboards" },
];

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
      <div key={label} className="flex flex-col items-center gap-1 w-12">
        <span
          className={`w-2 h-2 rounded-full ${label === active ? "bg-primary" : "bg-line"}`}
        />
        <span
          className={`text-[9px] font-medium truncate w-full text-center ${
            label === active ? "text-primary" : "text-muted"
          }`}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

const CustomerAppScreen = () => (
  <PhoneMockup>
    <StatusRow />
    <div className="px-5 pt-3 pb-4 flex items-center justify-between">
      <div>
        <p className="text-[15px] font-semibold text-ink">Hi, Ayesha!</p>
        <p className="text-[11.5px] text-muted">Welcome back to Rewaldo</p>
      </div>
      <span className="w-8 h-8 rounded-full bg-primaryLight" />
    </div>

    <div className="mx-5 rounded-2xl bg-gradient-to-br from-primary via-primary to-primaryDark p-4 text-white shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10.5px] uppercase tracking-wide text-white/70">Your points</p>
          <p className="text-[22px] font-bold leading-tight">4,700</p>
        </div>
        <span className="text-[10.5px] font-semibold bg-white/15 px-2.5 py-1 rounded-pill">
          Gold Member
        </span>
      </div>
      <div className="mt-3">
        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-white" />
        </div>
        <p className="mt-1.5 text-[10.5px] text-white/70">9,300 points to reach Platinum</p>
      </div>
    </div>

    <div className="px-5 mt-4">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[12.5px] font-semibold text-ink">Nearby offers</p>
        <p className="text-[10.5px] text-primary font-medium">View all</p>
      </div>
      <div className="space-y-2">
        {[
          ["Pizza Hut", "20% OFF"],
          ["Khaadi", "15% OFF"],
          ["McDonald's", "10% OFF"],
        ].map(([merchant, offer]) => (
          <div
            key={merchant}
            className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAFBFA] border border-line"
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
);

const BusinessAppScreen = () => (
  <PhoneMockup>
    <StatusRow />
    <div className="px-5 pt-3 pb-4">
      <p className="text-[15px] font-semibold text-ink">Welcome back,</p>
      <p className="text-[11.5px] text-muted">Merchant Partner!</p>
    </div>

    <div className="mx-5 rounded-2xl bg-secondary p-4 text-white">
      <p className="text-[10.5px] uppercase tracking-wide text-white/60">Total revenue</p>
      <div className="flex items-end justify-between mt-1">
        <p className="text-[19px] font-bold leading-tight">PKR 1,248,750</p>
        <span className="text-[10.5px] font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-pill">
          +18.6%
        </span>
      </div>
      <p className="text-[10px] text-white/50 mt-0.5">vs last 30 days</p>
    </div>

    <div className="px-5 mt-4 grid grid-cols-2 gap-2.5">
      {[
        ["Total customers", "4,850", "+12.4%"],
        ["Repeat customers", "2,160", "+15.7%"],
        ["Total orders", "6,320", "+10.3%"],
        ["Points redeemed", "285,600", "+19.8%"],
      ].map(([label, value, delta]) => (
        <div key={label} className="rounded-xl border border-line px-3 py-2.5">
          <p className="text-[9.5px] text-muted leading-tight">{label}</p>
          <p className="text-[13.5px] font-bold text-ink leading-tight mt-0.5">{value}</p>
          <p className="text-[9.5px] font-semibold text-primary">{delta}</p>
        </div>
      ))}
    </div>

    <div className="px-5 mt-4">
      <p className="text-[12.5px] font-semibold text-ink mb-2.5">Recent campaigns</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAFBFA] border border-line">
          <span className="text-[11.5px] font-medium text-ink">Weekend Offer · 20% off</span>
          <span className="text-[9.5px] font-semibold text-primary bg-primaryLight px-2 py-0.5 rounded-pill">
            Active
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAFBFA] border border-line">
          <span className="text-[11.5px] font-medium text-ink">VIP Special</span>
          <span className="text-[9.5px] font-semibold text-muted bg-line px-2 py-0.5 rounded-pill">
            Completed
          </span>
        </div>
      </div>
    </div>

    <BottomNav items={["Home", "Customers", "Campaigns", "Rewards", "More"]} active="Home" />
  </PhoneMockup>
);

const MobileApps = () => {
  return (
    <section id="mobile-apps" className="py-24 lg:py-32 bg-[#FAFBFA]">
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
            icon={customerIcon}
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
            icon={businessIcon}
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
