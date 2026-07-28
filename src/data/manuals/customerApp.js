const manual = {
  slug: "customer-app",
  eyebrow: "User Manual",
  title: "Rewaldo Customer App",
  description:
    "A complete guide to earning, redeeming, and enjoying your rewards on the Rewaldo mobile customer application.",
  version: "Version 1.0",
  sections: [
    {
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "The Rewaldo Customer App is the mobile application that lets shoppers join their favourite retailers' loyalty programs, earn points on every purchase, redeem rewards, collect gift cards and vouchers, and discover promotions from merchants near them. This manual explains every screen and feature available to a customer, from creating an account to redeeming a reward at checkout.",
        },
      ],
    },
    {
      title: "Getting Started",
      blocks: [
        { type: "h3", text: "Installing the App" },
        {
          type: "p",
          text: "Download the Rewaldo customer app from the Apple App Store (iOS) or Google Play Store (Android) and install it on your device.",
        },
        { type: "h3", text: "Onboarding" },
        {
          type: "p",
          text: "The first time you open the app, a short onboarding walkthrough introduces the core benefits of the loyalty program. Tap through the introduction screens to reach the sign-in options.",
        },
        { type: "h3", text: "Creating an Account" },
        { type: "p", text: "You can join Rewaldo in two ways:" },
        {
          type: "ul",
          items: [
            "Sign Up — create a new account using your name, email/phone number, and a password. Password should contain 8 digits with special characters",
            "Sign Up with a Referral ID — if a friend invited you, enter their referral code during sign-up to link your account to them and unlock referral rewards for both of you.",
            "You will receive a OTP (One Time Password) on your registered email/phone number to verify your account. Enter the OTP on the Verify OTP screen to complete the sign-up process.",
          ],
        },
        { type: "h3", text: "Signing In" },
        {
          type: "ol",
          items: [
            "Open the app and select Sign In.",
            "Enter your registered email/phone number and password.",
            "Tap Sign In to reach your Home screen.",
          ],
        },
        { type: "h3", text: "Forgotten Password" },
        {
          type: "ol",
          items: [
            "On the sign-in screen, tap Forgot Password.",
            "Enter your registered email/phone number to receive a One-Time Password (OTP).",
            "Enter the OTP on the Verify OTP screen.",
            "Create a new password on the Create New Password screen and sign in with it.",
          ],
        },
        { type: "h3", text: "Location Access" },
        {
          type: "p",
          text: "The app requests permission to access your device location so it can show nearby merchants and calculate distances on the map. Allow location access for the best experience — you can still browse without it, but nearby-merchant recommendations will be limited.",
        },
      ],
    },
    {
      title: "Getting Around the App",
      blocks: [
        {
          type: "p",
          text: "The app is organised around four main tabs at the bottom of the screen:",
        },
        {
          type: "table",
          headers: ["Tab", "Purpose"],
          rows: [
            ["Home", "Dashboard with nearby merchants, service categories, and active promotions."],
            ["Merchants", "Search and browse all participating merchants and stores."],
            ["Wallet", "Your gift cards, points balance, vouchers, and transaction history."],
            ["Profile", "Password, My Membership, Transaction History, Refer Friends, Appearance, Notifications, Contact Us, Terms and Conditions, Privacy Policy, Submit App Feedback and Delete Account."],
          ],
        },
      ],
    },
    {
      title: "Home Screen",
      blocks: [
        {
          type: "p",
          text: "The Home screen is your starting point every time you open the app and includes:",
        },
        { type: "h3", text: "Nearby Merchants Map" },
        {
          type: "p",
          text: "A map preview shows participating merchants near your current location. Tap the map preview to open the full map and directions view.",
        },
        { type: "h3", text: "Service Categories" },
        {
          type: "p",
          text: "Merchant's Promotions are organised into categories so you can quickly find the type of business you're looking for:",
        },
        {
          type: "table",
          headers: ["Category"],
          rows: [
            ["Accessories"],
            ["Apparel and Footwear"],
            ["Education"],
            ["Electronics"],
            ["Food and Beverages"],
            ["Health and Beauty"],
            ["Home and Living"],
            ["Leisure and Entertainment"],
            ["Other Services"],
            ["Salons and Spas"],
            ["Toys and Gifts"],
            ["Travel and Tour"],
          ],
        },
        { type: "p", text: "Tap a category to see all merchants offering that type of service." },
        { type: "h3", text: "Special Promotions Carousel" },
        {
          type: "p",
          text: "An auto-scrolling carousel highlights active promotions and rewards from merchants you follow or that are near you. Tap any card to view the full offer details. It also shows the applied promos carousel at the bottom of screen.",
        },
      ],
    },
    {
      title: "Discovering Merchants",
      blocks: [
        { type: "h3", text: "Search & Browse" },
        {
          type: "ol",
          items: [
            "Open the Merchants tab.",
            "You can add merchants to favourite so you can filter out the favourite merchant from search.",
            "Use Search Merchants to find a specific store by name, or scroll the list of nearby merchants.",
            "Tap a merchant to open its details page.",
            "Use specific filters to search out specific merchants with location, distance, favourite merchants and Services.",
          ],
        },
        { type: "h3", text: "Merchant Details" },
        {
          type: "p",
          text: "The merchant details screen shows the store's description, address, contact information, active promotions, and a map location. From here you can view directions on the map details screen. User can view all information though merchant website.",
        },
      ],
    },
    {
      title: "My Wallet",
      blocks: [
        {
          type: "p",
          text: "The Wallet tab is where all your loyalty value lives — points, gift cards, vouchers, and transaction history.",
        },
        { type: "h3", text: "Points Balance" },
        {
          type: "p",
          text: "Your current point balance by Merchant is shown at the top of respective Merchants Wallet screen, reflecting points earned from purchases and adjusted for any points already redeemed.",
        },
        { type: "h3", text: "Gift Cards" },
        { type: "p", text: "The Gift Card list shows all gift cards issued to you. Each card is labelled as:" },
        {
          type: "ul",
          items: [
            "Earned — gift cards you have received but not yet used.",
            "Used — gift cards that have already been redeemed.",
          ],
        },
        { type: "p", text: "Use the search bar on the gift card list to quickly find a specific card." },
        { type: "h3", text: "Transaction History" },
        {
          type: "p",
          text: "Every purchase, points-earning event, and redemption is recorded in Transaction History, giving you a full audit trail of your loyalty activity.",
        },
      ],
    },
    {
      title: "Earning & Redeeming Points",
      blocks: [
        { type: "h3", text: "Earning Points" },
        {
          type: "p",
          text: "Earn loyalty points every time you make an eligible purchase from a participating business and unlock greater rewards as your loyalty grows:",
        },
        {
          type: "ol",
          items: [
            "Visit a participating merchant and purchase an eligible product or service. You will receive loyalty points based on the earning percentage associated with your current loyalty tier for that business",
            "Continue visiting and transacting with the same merchant to accumulate loyalty points. As your points increase, you may qualify for higher loyalty tiers, allowing you to earn points at higher rates on future purchases",
            "Each loyalty point earned has a redemption value of PKR 10, which can be redeemed in accordance with the business redemption policy",
            "To maintain your current loyalty tier, you should make at least one eligible purchase with the business every six months. If no qualifying transaction is recorded during this period, your loyalty tier may be downgraded, resulting in a lower points earning rate for future purchases",
          ],
        },
        { type: "h3", text: "Redeeming Points" },
        {
          type: "p",
          text: "When you want to use your points at checkout (in-store), you approve a redemption request from your app:",
        },
        {
          type: "ol",
          items: [
            "From the Wallet or the merchant's checkout (New Sale) flow, choose Redeem Points.",
            "Advise the Merchant the number of points you want to redeem.",
            "Confirm the Redemption Request that comes on your customer app. The request is sent in real time from the merchant's point-of-sale device for approval.",
            "Once the merchant confirms the transaction, your points balance and gift card wallet update automatically.",
          ],
        },
        {
          type: "note",
          text: "Redemption requests are delivered instantly using a live connection between your app and the merchant's device, so make sure you have an internet connection while checking out.",
        },
      ],
    },
    {
      title: "Special Promotions",
      blocks: [
        {
          type: "p",
          text: "The Special Promotions screen lists every active promotion available to you, sorted by relevance and merchant. Recently viewed promotions are saved so you can quickly return to an offer you were considering.",
        },
      ],
    },
    {
      title: "Referral Program",
      blocks: [
        { type: "p", text: "Invite friends to join Rewaldo and you can be rewarded once they sign up." },
        {
          type: "ol",
          items: [
            "Open Profile and select Refer a Friend.",
            "Share your personal referral link or code with a friend.",
            "Your friend enters your referral ID when they sign up (Sign Up with Referral ID).",
            "Once your friend purchases a paid membership you will receive your referral cash reward, that can be used to renew your next membership.",
            "Track everyone you've invited on the Referred Friends list.",
          ],
        },
      ],
    },
    {
      title: "Notifications",
      blocks: [
        {
          type: "p",
          text: "The app sends push notifications for new promotions, points earned, redemption confirmations, and account updates. Open the bell icon to view your Notifications list at any time.",
        },
        { type: "h3", text: "Notification Settings" },
        {
          type: "p",
          text: "From Profile → Notification Settings you can turn specific notification types on or off according to your preference.",
        },
      ],
    },
    {
      title: "Managing Your Profile",
      blocks: [
        { type: "h3", text: "Edit Profile" },
        { type: "p", text: "Update your name, photo, and contact details from Profile → Edit Profile Info." },
        { type: "h3", text: "Change Password" },
        { type: "p", text: "Go to Profile → Change Password, enter your current password, and set a new one." },
        { type: "h3", text: "Preferences" },
        { type: "p", text: "Set your preferred categories and communication preferences from the Preferences screen." },
        { type: "h3", text: "Membership" },
        {
          type: "p",
          text: "If your loyalty program includes a paid membership tier, the membership screen lets you view plan details and complete checkout for an upgraded membership. My Membership shows your current active plan.",
        },
        { type: "h3", text: "Contact Us, Privacy Policy & Terms" },
        {
          type: "p",
          text: "Support and legal information are always available from the Profile menu: Contact Us, Privacy Policy, and Terms & Conditions.",
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
              '"No Internet Connection" screen appears',
              "Check your Wi-Fi/mobile data and tap retry; the app requires a live connection for redemptions and real-time updates.",
            ],
            [
              "Gift card or voucher not showing",
              "Pull down to refresh the Wallet screen; if it still doesn't appear, contact support from Profile → Contact Us.",
            ],
            [
              "OTP not received",
              "Wait for given time and use the resend option on the Verify OTP screen; check that your registered phone/email is correct.",
            ],
            [
              "Points not updated after purchase",
              "Points typically post within a few minutes of the merchant completing the transaction; check Transaction History, then contact support if it persists.",
            ],
          ],
        },
        {
          type: "strong",
          text: "For any issue not covered here, reach out through Profile → Contact Us and our support team will assist you.",
        },
      ],
    },
  ],
};

export default manual;
