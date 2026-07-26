const manual = {
  slug: "admin-dashboard",
  eyebrow: "User Manual",
  title: "Rewaldo Admin Dashboard",
  description:
    "Platform operations, configuration, and analytics guide for the Rewaldo Admin Dashboard.",
  version: "Version 1.0",
  sections: [
    {
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "The Rewaldo Admin Dashboard is the web-based control centre for the platform operator. It gives administrators full oversight of every merchant and customer on the platform, the tools to configure the loyalty program itself (tiers, promotions, membership plans), and reporting, notification, and audit tools for running the platform day to day.",
        },
        {
          type: "note",
          text: "This manual covers the Admin Dashboard used by the platform operator. Individual merchants and business owners should refer to the separate Business Dashboard manual, which covers their own store's tools only.",
        },
      ],
    },
    {
      title: "Getting Started",
      blocks: [
        { type: "h3", text: "Signing In" },
        {
          type: "ol",
          items: [
            "Open the Admin Dashboard in your web browser.",
            "Enter your administrator email and password on the Login screen.",
            "Tap Login to reach the dashboard Home.",
          ],
        },
        { type: "h3", text: "Forgotten Password" },
        {
          type: "ol",
          items: [
            "Select Forgot Password on the login screen.",
            "Enter your registered email to receive a one-time password (OTP).",
            "Verify the OTP on the Verify OTP screen.",
            "Set a new password on the Set Password screen and sign in.",
          ],
        },
        { type: "h3", text: "Changing Your Password" },
        {
          type: "p",
          text: "Once logged in, you can update your password at any time from Profile → Change Password.",
        },
      ],
    },
    {
      title: "Dashboard Home",
      blocks: [
        {
          type: "p",
          text: "The Home screen presents platform-wide performance at a glance, using bar and line charts to visualise trends such as merchant activity, customer growth, and sales volume over time. Use this as your daily starting point before drilling into a specific management area.",
        },
      ],
    },
    {
      title: "Merchant Management",
      blocks: [
        {
          type: "p",
          text: "Merchant Management is where administrators review and manage every business registered on the platform.",
        },
        {
          type: "ul",
          items: [
            "View merchant details including phone number and contact information.",
            "Create a new merchant account and assign a sales representative to it. Allow the merchant to update missing information through profile updates in business dashboard.",
            "Filter and review merchants based on search critera.",
            "Approve or reject merchant applications or take action on merchants that need to be deactivated.",
            "Export data into excel file for offline analysis.",
          ],
        },
        {
          type: "note",
          text: "Only approved, Active merchants appear to customers browsing the Merchants tab in the customer app.",
        },
      ],
    },
    {
      title: "Customer Profile",
      blocks: [
        {
          type: "p",
          text: "Customer Profile lists every customer registered across the platform. Open a Customer Profile to review their loyalty tier, loyalty points balance and activity history — useful for resolving support enquiries or investigating account issues. Adminitrators can also export data for analaysis.",
        },
      ],
    },
    {
      title: "Point & Tier System",
      blocks: [
        {
          type: "p",
          text: "The Tier System screen lets administrators define the loyalty tiers customers can progress through as they earn points. The platform ships with a five-tier structure:",
        },
        {
          type: "table",
          headers: ["Tier"],
          rows: [
            ["Gold Basic"],
            ["Gold Plus"],
            ["Platinum"],
            ["Platinum Plus"],
            ["Diamond"],
          ],
        },
        {
          type: "p",
          text: "For each tier you can configure the point thresholds and benefits that apply once a customer reaches that level. An Audit Logs tab within Tier System keeps a record of every change made to the tier configuration.",
        },
        {
          type: "p",
          text: "THIS FEATURE IS CURRENTLY UNAVAILABLE TO COMPANY.",
        },
      ],
    },
    {
      title: "Reporting & Analytics",
      blocks: [
        {
          type: "p",
          text: "Reporting & Analytics gives administrators deep visibility into platform performance:",
        },
        {
          type: "ul",
          items: [
            "Accounting Reports — including Cash Collection and Cash Receivable summaries and revenue per user report.",
            "Merchant Report — activity and engagement broken down by merchant.",
            "Customer Report — activity and engagement broken down by customer.",
            "Filter reports by All Customers, All Merchants, or All Metrics.",
            "Choose your preferred visualisation: Bar Chart, Line Chart, Area Chart, or a raw Data Table.",
            "Export data to Excel for offline analysis.",
          ],
        },
      ],
    },
    {
      title: "Membership Plans",
      blocks: [
        {
          type: "p",
          text: 'Membership Plans define the paid tiers merchants or customers can subscribe to on the platform, including plan features and pricing. If no plans have been configured yet, the screen will display "No membership plans available" until one is added.',
        },
      ],
    },
    {
      title: "Promotion Management",
      blocks: [
        {
          type: "p",
          text: "Promotion Management is where admins build and launch marketing campaigns that appear to customers as promotions.",
        },
        { type: "h3", text: "Creating a Campaign" },
        {
          type: "ol",
          items: [
            "Open Promotion Management and select New Campaign.",
            "Choose a campaign type: Flash Sale, Seasonal, Loyalty, or Referral.",
            "Select the target audience: All Customers, New Customers, Returning Customers, Loyal Customers, or VIP Customers.",
            "Select Promotion Days to define when the campaign is active.",
            "Upload any campaign artwork (Click to Upload) and save the campaign.",
          ],
        },
        {
          type: "p",
          text: "All active and past campaigns are listed on the Promotions List, where you can review performance and edit or cancel a campaign.",
        },
        {
          type: "p",
          text: "THIS FEATURE IS FOR LIMITED USE ONLY FOR COMPANY PERSONAL CAMPAIGNS.",
        },
      ],
    },
    {
      title: "Support Messages",
      blocks: [
        {
          type: "p",
          text: "Support Messages is the admin inbox for enquiries submitted by merchants and customers through their respective Contact Us screens. Review and respond to messages from this screen to resolve platform support tickets.",
        },
      ],
    },
    {
      title: "Push Notifications",
      blocks: [
        {
          type: "p",
          text: "Send Push Notifications lets admins broadcast a message directly to mobile app users.",
        },
        {
          type: "ol",
          items: [
            "Open Push Notifications and select Send Push Notifications.",
            "Enter the notification Body text.",
            "Choose Send To: Customers, Merchants, or both.",
            "Narrow the audience further by City, Country, or membership type if needed.",
            "Filter recipients by Status (Active/Inactive) to avoid notifying inactive accounts.",
          ],
        },
      ],
    },
    {
      title: "Sales Rep Portal",
      blocks: [
        {
          type: "p",
          text: "The Sales Rep Portal supports a referral-based sales structure: each sales representative has a Referral ID, which they share with prospective merchants or customers. The portal tracks Customers Referred by each rep, allowing admins to measure referral performance.",
        },
        {
          type: "p",
          text: "The sales rep can onboard a cash customer through an exclusive procedure where he activates an customer account instently, collects cash and deposits it with accounts. Accountant will mark receipt in the app to clear sales repreceivable account.",
        },
      ],
    },
    {
      title: "Audit Logs",
      blocks: [
        {
          type: "p",
          text: "Audit Logs provide a chronological record of significant actions taken across the platform (such as changes to tiers, merchants, or promotions), supporting accountability and troubleshooting.",
        },
      ],
    },
    {
      title: "Profile & Account Settings",
      blocks: [
        {
          type: "p",
          text: "From Profile, administrators can update their own account details, review notifications, and access the platform's Privacy Policy and Terms & Conditions.",
        },
      ],
    },
    {
      title: "User Management",
      blocks: [
        {
          type: "p",
          text: "User Management controls the internal administrator and staff accounts that have access to this dashboard (separate from merchants and customers). From here you can:",
        },
        {
          type: "ul",
          items: [
            "Add new admin/staff users (Administrator, Sales Representative, View User and Admin Fin) and assign their contact phone number.",
            "Access levels are pre-assigned based on roles.",
            "Review and update existing accounts from the Dashboard listing.",
          ],
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
              "OTP not received during login recovery",
              "Wait a minute and use resend on the Verify OTP screen; confirm the registered admin email is correct.",
            ],
            [
              "Merchant not appearing to customers",
              "Check its status in Merchant Management — only merchants marked Active are visible in the customer app.",
            ],
            [
              "Campaign not showing in the customer app",
              "Confirm the Promotion Days include the current date and that the campaign has been saved (visible on the Promotions List).",
            ],
            [
              '"No membership plans available"',
              "This means no membership plan has been configured yet — create one from Membership Plans.",
            ],
          ],
        },
      ],
    },
  ],
};

export default manual;
