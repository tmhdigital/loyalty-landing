const manual = {
  slug: "business-dashboard",
  eyebrow: "User Manual",
  title: "Rewaldo Business Dashboard",
  description:
    "Manage sales, staff, promotions, and performance from the web with the Rewaldo Business Dashboard.",
  version: "Version 1.0",
  sections: [
    {
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "The Rewaldo Business Dashboard is the web portal for merchant business owners to run their own loyalty program day to day: recording sales, managing staff accounts, building promotional campaigns, tracking customer activity, and reviewing performance reports — all from a browser, alongside the Business mobile app used at the counter.",
        },
        {
          type: "note",
          text: "This manual covers the Business Dashboard used by individual merchants. Platform-wide administration across all merchants is handled separately in the Admin Dashboard manual.",
        },
      ],
    },
    {
      title: "Getting Started",
      blocks: [
        { type: "h3", text: "Creating Your Business Account" },
        {
          type: "ol",
          items: [
            "Open the Business Dashboard sign-up page and select Sign Up.",
            "Enter your business contact details and create a password.",
            "Verify your account with the OTP sent to your email/phone (OTP Verification).",
          ],
        },
        { type: "h3", text: "Setting Up Shop Info" },
        {
          type: "p",
          text: "Complete your Shop Info profile — business name, category, logo, and description — so customers can recognise your store in the customer app.",
        },
        { type: "h3", text: "Signing In" },
        {
          type: "ol",
          items: [
            "Go to Login and enter your registered email and password.",
            "Select Sign In to reach your Business Dashboard Home.",
          ],
        },
        { type: "h3", text: "Forgotten Password" },
        {
          type: "ol",
          items: [
            "Select Forgot Password on the login screen.",
            "Enter your registered email to receive an OTP and complete Verify OTP.",
            "Set a new password on the Set Password screen (a Reset Success confirmation will appear).",
          ],
        },
        { type: "h3", text: "Subscription & Billing" },
        {
          type: "p",
          text: "If your plan requires payment, checkout is handled securely and you'll land on a Success or Failed confirmation page depending on the payment outcome. If a payment fails, you can retry from your account settings.",
        },
      ],
    },
    {
      title: "Dashboard Home",
      blocks: [
        {
          type: "p",
          text: "The Home screen summarises your business's loyalty performance — sales, points issued, points redeemed, and new customer growth — giving you the same at-a-glance view available on the Business mobile app, now on a full desktop screen for deeper review.",
        },
      ],
    },
    {
      title: "Sell Management",
      blocks: [
        { type: "p", text: "Sell Management is where sales are recorded and reviewed from the web dashboard:" },
        {
          type: "ol",
          items: [
            "Open Sell Management and select New Sell to record a sale.",
            'Scan a barcode using "Ready to scan barcode..." or enter sale details manually.',
            "Filter the sales list by Merchants or by All Months to review historical activity.",
          ],
        },
        {
          type: "note",
          text: "For counter transactions with customers present, staff typically use the Business mobile app; Sell Management on the web dashboard is best for reviewing and reconciling sales already recorded.",
        },
      ],
    },
    {
      title: "Customer Management",
      blocks: [
        {
          type: "p",
          text: "Customer Management lists everyone enrolled in your store's loyalty program. Open a customer's record to review their tier, points balance, and purchase history — helpful for handling loyalty questions or disputes directly with your customers.",
        },
      ],
    },
    {
      title: "Point & Tier System",
      blocks: [
        { type: "p", text: "The Point & Tier System screen shows the loyalty tiers your customers can progress through:" },
        {
          type: "table",
          headers: ["Tier"],
          rows: [["Gold Basic"], ["Gold Plus"], ["Platinum"], ["Platinum Plus"], ["Diamond"]],
        },
        {
          type: "p",
          text: "Depending on your platform plan, tier thresholds and benefits may be managed centrally by the platform administrator or configurable directly from this screen. An audit trail of tier changes is available so you can see what has changed and when.",
        },
      ],
    },
    {
      title: "Promotion Management",
      blocks: [
        { type: "p", text: "Build promotional campaigns to drive repeat visits and reward loyal shoppers:" },
        {
          type: "ol",
          items: [
            "Open Promotion Management and start a new campaign.",
            "Choose a campaign type: Flash Sale, Seasonal, Loyalty, or Referral.",
            "Choose your target audience: All Customers, New Customers, Returning Customers, or Loyal Customers.",
            "Select Promotion Days to set when the campaign runs.",
            "Save the campaign — it will appear on your Campaigns List, where you can track and edit it.",
          ],
        },
      ],
    },
    {
      title: "User Management",
      blocks: [
        {
          type: "p",
          text: "User Management lets you add and control staff accounts that can access this dashboard on your business's behalf.",
        },
        {
          type: "ul",
          items: [
            "Add a staff member with their Phone Number and contact details.",
            "Assign an access level such as Full to control what each staff account can do.",
            "Review all staff accounts from the Dashboard listing.",
          ],
        },
      ],
    },
    {
      title: "Reporting & Analytics",
      blocks: [
        {
          type: "p",
          text: "Reporting & Analytics gives business owners visibility into how their loyalty program is performing:",
        },
        {
          type: "ul",
          items: [
            "Customer Report — activity and engagement by customer, including Customer Name lookups.",
            "All Metrics filter to review every tracked KPI in one place.",
            "Choose your preferred visualisation: Bar Chart, Line Chart, Area Chart, or Data Table.",
          ],
        },
      ],
    },
    {
      title: "Notifications",
      blocks: [
        {
          type: "p",
          text: "The Notifications screen keeps you informed of important account and platform updates, including customer redemption activity relevant to your store.",
        },
      ],
    },
    {
      title: "Profile & Account Settings",
      blocks: [
        { type: "h3", text: "Change Password" },
        { type: "p", text: "Update your login credentials at any time from Profile → Change Password." },
        { type: "h3", text: "Privacy Policy & Terms" },
        {
          type: "p",
          text: "The platform's Privacy Policy and Terms and Conditions are always accessible from the dashboard menu.",
        },
      ],
    },
    {
      title: "Troubleshooting & Support",
      blocks: [
        {
          type: "table",
          headers: ["Issue", "What to do"],
          rows: [
            [
              "Payment checkout ends on the Failed page",
              "Retry checkout from your subscription/billing settings; contact support if the charge shows on your bank statement but the plan hasn't activated.",
            ],
            [
              "Barcode won't scan in Sell Management",
              "Ensure good lighting and that your camera permission is enabled for the browser; you can also enter the sale manually.",
            ],
            [
              "Tier changes aren't visible to customers",
              "Confirm the change was saved and check the audit trail; some tier settings may be managed at the platform level by the admin team.",
            ],
            [
              "Staff account can't access a feature",
              "Review their assigned access level in User Management and adjust if Full access is required.",
            ],
          ],
        },
      ],
    },
  ],
};

export default manual;
