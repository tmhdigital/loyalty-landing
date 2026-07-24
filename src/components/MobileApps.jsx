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
  { icon: CatalogueIcon, label: "Product & service catalogue" },
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
    <div className="px-5 pt-1 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <img
          src={businessIcon}
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
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary text-white text-[7px] font-bold flex items-center justify-center">
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
      {STAT_CARDS.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="rounded-2xl border border-primary/50 px-3.5 py-2.5 text-ink/70 [&_svg]:w-[18px] [&_svg]:h-[18px]"
        >
          <p className="text-[10px] text-muted leading-tight mb-2">{label}</p>
          <div className="flex items-center gap-1.5">
            <Icon />
            <span className="text-[13.5px] font-bold text-ink leading-tight">{value}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="px-5 mt-4">
      <div className="rounded-2xl bg-primaryLight p-4">
        <p className="text-[13px] font-bold text-ink mb-2.5">Weekly Sell</p>
        <div className="relative h-[3px] rounded-full bg-white/70 mb-3">
          <div className="absolute left-0 top-0 h-full w-1/6 rounded-full bg-primary" />
        </div>
        <div className="flex items-center gap-4">
          <div
            className="relative w-[72px] h-[72px] shrink-0 rounded-full"
            style={{ background: WEEKLY_SELL_GRADIENT }}
          >
            <div className="absolute inset-[9px] rounded-full bg-white flex items-center justify-center">
              <span className="text-[13px] font-bold text-ink">{WEEKLY_SELL_TOTAL}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {WEEKLY_SELL.map(({ day, color }) => (
              <div key={day} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                <span className="text-[10px] text-ink/70">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <BottomNav items={["Home", "Sales", "Customers", "Profile"]} active="Home" />
  </PhoneMockup>
);

const MobileApps = () => {
  return (
    <section id="mobile-apps" className="py-16 lg:py-20 bg-[#FAFBFA]">
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
