// Knowledge base fed to the AI chatbot as system context so it only answers
// using real information about Rewaldo (no invented facts). This content is
// grounded against the actual backend/app source (loyalty tier logic,
// digital card model, membership/subscription model) — not just the
// marketing copy — so keep it in sync with real product behavior if that
// logic changes.

import { DASHBOARD_LINKS } from "../config";

export const REWALDO_KNOWLEDGE = `
# About Rewaldo
Rewaldo is a digital loyalty and rewards platform. It replaces traditional
plastic loyalty cards with a single digital wallet: one app holds a loyalty
card for every business a customer joins, instead of a separate card or app
per store. Every business that joins runs its own promotions and rewards
program from a single dashboard.

# Loyalty points and tiers (IMPORTANT — read carefully)
Each business/merchant on Rewaldo has its own separate digital card, points
balance, and tier rules for a given customer:
- A customer's points are tracked per merchant, not globally. Shopping at
  Business A earns points on that business's card; those points are
  separate from points earned at Business B.
- Loyalty tiers (e.g. Silver/Gold/Platinum-style tiers) are NOT a fixed,
  platform-wide system. Each individual merchant creates and configures
  their own tiers from their business dashboard — including the tier name,
  the points threshold to reach it, the reward for reaching it, and how
  points are earned/redeemed at that tier. Two different merchants can have
  completely different tier structures.
- A customer's tier at a given business depends entirely on the points
  and spend they've accumulated at THAT specific business, measured
  against the rules that business set. There is no universal "you unlock
  tier 2 at X points" rule that applies everywhere — it varies by merchant.
- Do NOT say things like "you can unlock up to three membership tiers" as
  if it's a fixed platform rule — this is incorrect. Tiers are entirely
  merchant-defined and vary business to business.

# Membership plan (separate from loyalty tiers — do not confuse the two)
Rewaldo's customer app also has an optional "Membership" — this is a paid
subscription plan for extra app features/benefits, similar to a
subscription tier for the app itself. It is completely separate from a
business's loyalty points/tier system.
- New customers get a 30-day free trial period on membership (their first
  30 days), after which it may become a paid plan if the loyalty program
  includes a paid membership tier.
- Membership plans/subscriptions are managed and configured by the Rewaldo
  platform admin team, not by individual merchants.
- Referral cash rewards a customer earns can be used toward renewing their
  next membership.
- This is unrelated to how many points a customer has or what tier they've
  reached at any given business — a customer can be a free member and still
  earn points and reach tiers at the businesses they shop at.

# For customers
- One wallet, every store: no plastic cards, no paper stamps, nothing to
  leave at home.
- Loyalty points: purchases at a business automatically turn into points
  on that business's card, tracked separately per merchant.
- Merchant-defined tiers: as a customer earns more points/spends more at a
  specific business, they can move up that business's own tiers (set by
  that business) and unlock better rewards there.
- Rewards & redemption: to redeem points at checkout, the customer tells
  the merchant how many points to redeem; the merchant's point-of-sale
  sends a redemption request to the customer's app in real time; the
  customer confirms it there, and the points balance and gift card wallet
  update automatically. This approval step prevents misuse of loyalty
  points.
- Referral rewards: customers can invite friends and earn a cash reward
  once the friend purchases a paid membership; the reward can be used
  toward the customer's own next membership renewal.
- Nearby offers & promotions: merchants publish live offers from their
  dashboard and customers see them the moment they open the app, along with
  Google Maps integration to find nearby deals.
- Push notifications: reward reminders and new promotions are sent directly
  to customers, timed to bring them back before a card or offer expires.
- Gift cards: gift cards issued to a customer show as "Earned" (received,
  not yet used) or "Used" (already redeemed) in the app.
- Transaction history: every purchase, points-earning event, and redemption
  is recorded for a full audit trail.
- Customer app highlights: hundreds of partner merchants, one digital
  wallet, merchant-specific tiers and rewards, instant loyalty points,
  favourite merchants, Google Maps integration, nearby offers, points
  redemption, and a secure digital experience.
- How it works for customers, in short: 1) explore hundreds of merchants
  and nearby offers, 2) shop and earn loyalty points per business with
  every purchase, 3) move up that business's own tiers as points/spend
  grow, 4) redeem eligible points at checkout through the real-time
  approval flow, 5) optionally use the app's Membership plan (30-day free
  trial) for extra app benefits.

# For businesses / merchants
- Free to join: no joining cost for merchant partners.
- Showcase the business: merchants can promote their products, services,
  and offers through a digital business profile.
- Targeted marketing campaigns: businesses can launch campaigns aimed at
  new, returning, loyal, and VIP customer segments.
- Loyalty & tier management: each business designs and configures its own
  loyalty points rules and its own tiers (tier names, points thresholds,
  rewards, accumulation and redemption rules) from its dashboard — this is
  entirely up to the individual merchant, not a fixed platform default.
- Promotions that update live: offers and discounts published from the
  dashboard appear instantly in the customer app.
- Reporting & analytics: redemption rates, repeat-visit trends, top
  rewards, sales, revenue, and campaign performance — tracked in real time
  for owners and platform admins.
- Business app highlights: free merchant onboarding, digital business
  profile, link-through to the business's own website, targeted marketing
  campaigns, customer segmentation, custom loyalty & tier management, a
  digital rewards engine, revenue & profit dashboards, and business
  analytics & reporting.
- How it works for businesses: 1) join free with no joining cost,
  2) showcase the business and its offers, 3) configure its own loyalty
  points and tier rules, 4) engage customers with targeted campaigns for
  new, returning, loyal, and VIP segments, 5) track performance through
  real-time dashboards.
- Business benefits at a glance: accelerated customer footfall, improved
  profit margins, targeted marketing campaigns, and performance reporting
  dashboards.

# Dashboards
Rewaldo has two separate dashboards:
- Business dashboard — for merchant owners and staff to configure their own
  loyalty card, points rules, and tiers; publish promotions; manage staff
  access; and track redemptions for their own storefronts. Available at
  ${DASHBOARD_LINKS.business}
- Admin dashboard — for the Rewaldo platform team to approve and manage
  every merchant on the platform, oversee customer membership/subscription
  plans, control roles and permissions, and monitor the whole system with
  platform-wide analytics and audit logs. Available at ${DASHBOARD_LINKS.admin}

# Security & access
Role-based access control means admins, merchant owners, and staff each see
only the tools their role needs. The redemption flow (merchant sends a
redemption request from checkout, customer confirms it in the app) is
specifically designed to prevent misuse of loyalty points.

# Mobile apps
- "Rewaldo" — the customer app. Free to start; the optional Membership
  plan includes a 30-day free trial for its first 30 days.
- "Rewaldo: Business" — the merchant app, free to join, for managing a
  loyalty program on the go.
Both apps can be downloaded via the links and QR codes on the landing
page's "Mobile apps" section.

# Frequently asked questions
Q: Do customers need to download a new app for every store?
A: No. One Rewaldo customer app holds a card for every business a person
joins, so there's a single wallet instead of a separate app per store.

Q: What's the difference between the admin and business dashboards?
A: The business dashboard is for a single merchant to run their own
loyalty program, including their own points and tier rules. The admin
dashboard is for the Rewaldo team to oversee every merchant, customer
membership plans, and platform-wide settings.

Q: How do customers redeem their points?
A: At checkout, the customer tells the merchant how many points to redeem.
The merchant's point-of-sale sends a redemption request to the customer's
app in real time, and the customer confirms it there — then the points
balance and gift card wallet update automatically. This approval step
prevents misuse of loyalty points.

Q: How do loyalty tiers work — is there a fixed set of tiers for everyone?
A: No. Every business sets up its own tiers from its dashboard — its own
tier names, points thresholds, and rewards. A customer's tier at a
business depends only on the points/spend built up at that specific
business, under that business's own rules. It's not a single fixed
tier system that applies the same way everywhere.

Q: What is the "Membership" plan, and is it the same as loyalty tiers?
A: No — they're different things. Membership is an optional, paid app
subscription (with a 30-day free trial for new customers) that's separate
from a business's own loyalty points and tiers. A customer earns points
and moves up a business's tiers by shopping there, regardless of their
membership status.

# Contact
For anything the chatbot can't answer, or to talk to a real person, the
customer can use the WhatsApp button on the site to chat directly with the
Rewaldo team, or a business can fill out the merchant inquiry form on the
site to get in touch.
`.trim();

// Short list of starter questions shown as tappable suggestions before the
// visitor has typed anything.
export const SUGGESTED_QUESTIONS = [
  "How does Rewaldo work for customers?",
  "Is it free for businesses to join?",
  "How do I redeem my loyalty points?",
  "How do loyalty tiers work?",
  "What's the Membership plan?",
  "What's the difference between the two dashboards?",
];