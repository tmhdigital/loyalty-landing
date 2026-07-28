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
          text: "The Rewaldo Business Dashboard is the web portal for merchant business owners to run their own loyalty program through points and tier systems: recording sales, managing staff accounts, building promotional campaigns, tracking customer activity, and reviewing performance reports — all from a browser, alongside the Business mobile app used at the counter.",
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
            "Open the Business Dashboard sign-up page and select Sign Up (this can alternatively be done from the merchant app).",
            "Enter your business contact details and create a password.",
            "Verify your account with the OTP sent to your email/phone (OTP Verification).",
          ],
        },
        { type: "h3", text: "Setting Up Shop Info" },
        {
          type: "p",
          text: "Complete your Shop Info in settings profile —> business name, Service category, Website Url, Digital Card logo and Cover Photo, and Company Information — so customers can recognise your store in the customer app.",
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
      ],
    },
    {
      title: "Dashboard Home",
      blocks: [
        { type: "p", text: "The Home screen summarises your business's loyalty performance for: " },
        {
          type: "ol",
          items: [
            "Weeklly performance by Date Chart",
            'Customer Chart by Month and Year for Revenue and Discount.',
            "Statistics for Total Sales, Total Memebers added, Total point issued and Rewards Redeemed for today, past week, past month and all time.",
            "Data for Recently added Members.",
          ],
        },
      ],
    },
    {
      title: "Sell Management",
      blocks: [
        {
          type: "p",
          text: "Use New Transaction at the point of sale to award points and apply rewards for a customer purchase:",
        },
        {
          type: "ol",
          items: [
            "Tap New Transaction from the home screen.",
            "Find the customer by entering their loyalty Card ID (e.g. XY9OWARA) and tapping Find, or by scanning their card/QR code.",
            "Enter the bill amount for the purchase.",
            "Based on your eligible tier and the purchase value, the sysytem will calculate the points to be issued and display them on the screen.",
            "If the customer has an available gift card or wants to redeem points, apply it: enter the points to redeem and tap Apply Calculation. The screen will show Available Points, Gift Card Available, and the Gross Value of Promotions applied.",
            "The Merchant can also apply a promotion saved by the customer.",
            "Review the calculated Point Redeemed value and the adjusted total and Submit Complete Transaction.",
            "The Customer will recieve a notification of the points redeemed to approve or decline. ",
            "Once customer approves, merchant can view the final amount in the summary.",
          ],
        },
        {
          type: "note",
          text: 'If the card code is not recognised, the app shows "Card not found" — double-check the code with the customer or ask them to show the code in their Rewaldo customer app.',
        },
        { type: "h3", text: "Total Summary & Checkout" },
        {
          type: "p",
          text: "The Total Summary screen displays the Customer Name, Card ID, Total Amount, Point Earned, Point Redeem, and Final Amount for review before completing the sale.",
        },
        {
          type: "ol",
          items: [
            "Confirm all details are correct.",
            "Tap Complete Transaction to finalise the sale.",
            "The Transaction Status will confirm success.",
          ],
        },
        { type: "h3", text: "Reviewing Sales Data" },
        {
          type: "p",
          text: "Customer details and purchase history can be reviewed using different filters and search options.",
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
          text: "Depending on your platform plan, tiers points thresholds and points accumulation rules may be managed centrally by the platform administrator or configurable directly from this screen. An audit trail of tier changes is available so you can see what has changed and when. Customer will be notified of any updates in points and tier system. The merchant must setup atleast one tier system to start the loyalty program.",
        },
      ],
    },
        {
      title: "Customer Management",
      blocks: [
        {
          type: "p",
          text: "Customer Management lists everyone enrolled in your loyalty program. Open a customer's record to review their tier, points balance, and purchase history — helpful for handling loyalty questions or disputes directly with your customers. Data can be filtered through search criteria and is exportable into an excel file  for further analysis.",
        },
      ],
    },
    {
      title: "Promotions and Discounts",
      blocks: [
        { type: "p", text: "Build promotional campaigns to drive repeat visits and reward loyal shoppers:" },
        {
          type: "ol",
          items: [
            "Open Promotion Management and start a new campaign.",
            "Choose a campaign type: Flash Sale, Seasonal, Loyalty, or Referral.",
            "Choose your target audience: All Customers, New Customers, Returning Customers, or Loyal Customers.",
            "Select Promotion by Date range or sepecific days in a week.",
            "Upload a Cutomized Sale's Pitch or Flyer/Banner to attract customers.",
            "Save the campaign — it will appear on your Campaigns List, where you can track and edit it.",
          ],
        },
        { type: "p", text: "Create customizable promotions for customers community:" },
        {
          type: "ol",
          items: [
            "By Map locations.",
            "For Customers that have Transactioned with the Merchant- under Five selection criterias (All Customers, New Customers, Returning Customers, or Loyal Customers)",
            "All Customers that have atleast x number of points earned.",
            "Customers located within a specific radius of the merchant's location.",
            "Include a Promotion message, upload a Flyer/Banner and send notifications.",
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
            "Choose your preferred visualisation: Bar Chart, Line Chart, Area Chart.",
            "Data can be extracted by customer by location, by city and membership status.",
            "Data can be extracted for revenue, visits, points redeemed and points accumulated.",
            "Data can be exported to Excel for further analysis.",
          ],
        },
      ],
    },
    {
      title: "Settings -> User Management",
      blocks: [
        {
          type: "p",
          text: "User Management lets you add and control staff accounts that can access this dashboard on your business's behalf.",
        },
        {
          type: "ul",
          items: [
            "Add a staff member with their Phone Number and contact details.",
            "Assign an access level of either Admin or User. Admin can access all features, while User has limited access.",
            "Review all staff accounts from the Dashboard listing.",
            "Accounts can be Activated, Deactivated, or deleted at any time.",
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
