const manual = {
  slug: "business-app",
  eyebrow: "User Manual",
  title: "Rewaldo Business App",
  description:
    "In-store point-of-sale guide for issuing points and rewards using the Rewaldo mobile business (merchant) application.",
  version: "Version 1.0",
  sections: [
    {
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "The Rewaldo Business App is the point-of-sale companion app used by retail staff to issue loyalty points, redeem customer rewards, look up customer loyalty accounts, and track daily sales performance — all from a mobile device at the counter.",
        },
        {
          type: "note",
          text: "This manual covers the Business (Merchant) mobile app. Business owners who need web-based reporting, staff management, and campaign tools should also refer to the Business Dashboard manual.",
        },
      ],
    },
    {
      title: "Getting Started",
      blocks: [
        { type: "h3", text: "Creating a Business Account" },
        {
          type: "ol",
          items: [
            "Install the Rewaldo Business app and select Sign Up.",
            "Enter your business contact details and create a password.",
            "Verify your account using the OTP sent to your registered phone/email.",
          ],
        },
        { type: "h3", text: "Setting Up Your Shop Information" },
        { type: "p", text: "Immediately after sign-up you'll be asked to complete your Shop Information:" },
        {
          type: "ul",
          items: [
            "Enter Business Name.",
            "Select Your Service (business category).",
            "Upload Your Company Logo (Take a Photo or Choose from Gallery).",
            "Enter your Country.",
            "Write About Us — a short description of your business.",
          ],
        },
        { type: "p", text: "Tap Continue once your shop profile is complete." },
        { type: "h3", text: "Signing In" },
        {
          type: "ol",
          items: [
            "Open the app and select Sign In.",
            "Enter your registered email/phone number and password.",
            "Allow location access so the app can attach your shop's location for nearby-merchant discovery in the customer app.",
          ],
        },
        { type: "h3", text: "Forgotten Password" },
        {
          type: "ol",
          items: [
            "Tap Forgot Password on the sign-in screen.",
            "Enter your registered email/phone to receive an OTP and complete verification on the Verify OTP screen.",
            "Set a new password on the Reset Password screen.",
          ],
        },
      ],
    },
    {
      title: "Home Dashboard",
      blocks: [
        {
          type: "p",
          text: "The Home screen gives you an at-a-glance view of your store's loyalty performance, with a date filter — Today, Last 7 Days, Last 30 Days, or All Time — applied across all statistics:",
        },
        {
          type: "table",
          headers: ["Metric", "Description"],
          rows: [
            ["Revenue", "Total sales value recorded through the app for the selected period."],
            ["Discount", "Total value of discounts applied through promotions."],
            ["Points Issued", "Total loyalty points awarded to customers."],
            ["Points Redeemed", "Total loyalty points customers have redeemed in-store."],
            ["New Members", "Number of new customers who joined your loyalty program."],
            ["Customer Chart", "Visual breakdown of customer activity over the selected period."],
          ],
        },
        {
          type: "p",
          text: "Your shop's city and country (as set in Shop Information) are also displayed on the dashboard header.",
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
      title: "Customer Details",
      blocks: [
        {
          type: "ol",
          items: [
            "Open Customer Details from the main menu.",
            "Use Search by Customer Name to find a specific loyalty member, or browse the list.",
            "Tap View on any customer to open their full profile, including loyalty tier, points balance, and purchase history.",
          ],
        },
        {
          type: "p",
          text: 'If no results are found, the screen displays "No customers found" — check the spelling of the name or ask the customer for their loyalty Card ID instead.',
        },
      ],
    },
    {
      title: "Notifications",
      blocks: [
        {
          type: "p",
          text: "The Notifications screen keeps merchants informed about redemption requests from customers, subscription updates, and system announcements. Redemption requests submitted from the customer app arrive here in real time for review.",
        },
      ],
    },
    {
      title: "Profile & Settings",
      blocks: [
        { type: "h3", text: "Edit Profile" },
        { type: "p", text: "Update your account name, photo, and shop details from Profile → Change Profile Info." },
        { type: "h3", text: "Change Password" },
        { type: "p", text: "Go to Profile → Change Password to update your login credentials." },
        { type: "h3", text: "Contact Us, Privacy Policy & Terms" },
        {
          type: "p",
          text: "Support and legal information are available from the profile menu at all times: Contact Us, Privacy Policy, and Terms & Conditions.",
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
              '"Card not found" when finding a customer',
              "Confirm the Card ID with the customer, or ask them to show their code from the Rewaldo customer app; retry the Find action.",
            ],
            [
              "No internet connection",
              "The No Internet screen appears automatically; transactions and redemption requests require a live connection, so reconnect and retry.",
            ],
            [
              "Checkout fails on Total Summary",
              "Tap Cancel and re-enter the transaction; if the error persists, contact support with the Transaction Status message shown.",
            ],
            [
              'Merchant report shows "No data available"',
              "This is expected if there have been no sales in the selected date range — try a wider filter such as All Time.",
            ],
          ],
        },
        {
          type: "p",
          text: "For issues not listed here, contact support from the Contact Us screen in your profile menu.",
        },
      ],
    },
  ],
};

export default manual;
