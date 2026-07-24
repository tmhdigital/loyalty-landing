import DocsPage from "../components/docs/DocsPage";

const SECTIONS = [
  {
    title: "Introduction",
    blocks: [
      { type: "p", text: `TMH Digital (SMC-Private) Limited ("TMH Digital", "Company", "we", "our", or "us") values the trust placed in us by our customers, merchants and business partners. Protecting your privacy and safeguarding your personal information is an important part of our commitment to delivering secure and reliable digital services.` },
      { type: "strong", text: `This Privacy Policy explains how we collect, use, process, store, protect and disclose personal information when you use Rewaldo, TMH Digital's digital loyalty and rewards platform, including the Rewaldo Customer Application, Rewaldo Merchant Application, website and related services (collectively referred to as the "Services").` },
      { type: "p", text: "Rewaldo enable customers to discover participating merchants, earn and redeem loyalty rewards, access exclusive promotions and discounts, while enabling merchants to manage loyalty campaigns, customer engagement and promotional offers through a secure digital platform." },
      { type: "p", text: "By creating an account or using any of our Services, you acknowledge that you have read and understood this Privacy Policy." },
    ],
  },
  {
    title: "Scope",
    blocks: [
      { type: "p", text: "This Privacy Policy applies to:" },
      { type: "ul", items: [
        "Customers using the Rewaldo Customer Application.",
        "Merchants using the Rewaldo Merchant Application.",
        "Visitors to our website.",
        "Individuals communicating with TMH Digital through customer support channels.",
        "Users participating in promotions, loyalty programmes, surveys and marketing campaigns.",
      ] },
      { type: "p", text: "This Privacy Policy applies regardless of whether the Services are accessed through Android devices, Apple iOS devices, tablets or our website." },
    ],
  },
  {
    title: "Information We Collect",
    blocks: [
      { type: "p", text: "The information we collect depends on how you interact with our Services." },
      { type: "h3", text: "Customer Information" },
      { type: "p", text: "When creating or using a customer account, we may collect:" },
      { type: "ul", items: [
        "Full name", "Mobile number", "Email address", "Residential address (where applicable)",
        "Login credentials", "Profile photograph (optional)", "Loyalty membership information",
        "Customer preferences", "Customer support enquiries", "Feedback and survey responses",
      ] },
      { type: "h3", text: "Merchant Information" },
      { type: "p", text: "When registering a business on the Merchant Application, we may collect:" },
      { type: "ul", items: [
        "Business name", "Business category", "Business address", "Store locations", "Contact numbers",
        "Business email address", "Business logo", "Operating hours", "Website link",
        "Promotional campaigns", "Loyalty programme settings", "Merchant profile information",
      ] },
      { type: "h3", text: "Transaction Information" },
      { type: "p", text: "To administer loyalty programmes and promotions, we may collect:" },
      { type: "ul", items: [
        "Purchases made through participating merchants", "Discounts applied", "Reward points earned",
        "Reward points redeemed", "Promotional offers claimed", "Loyalty tier status", "QR code transactions",
        "Transaction date and time", "Participating merchant",
        "Transaction value where required to calculate loyalty points/rewards",
      ] },
      { type: "h3", text: "Device Information" },
      { type: "p", text: "When you use our Services, we may automatically collect technical information including:" },
      { type: "ul", items: [
        "Device model", "Operating system", "Device identifiers", "IP address", "Mobile network",
        "Application version", "Language settings", "Time zone", "Crash reports",
        "Diagnostic information", "Performance logs", "Security logs",
      ] },
      { type: "p", text: "This information helps us improve performance, maintain security and enhance the reliability of our Services." },
      { type: "h3", text: "Location Information" },
      { type: "p", text: "With your permission, TMH Digital may collect your approximate or precise location to:" },
      { type: "ul", items: [
        "Display nearby participating merchants.", "Show location-based offers.", "Improve merchant discovery.",
        "Assist with navigation.", "Validate certain transactions.", "Help prevent fraudulent activity.",
      ] },
      { type: "p", text: "You may disable location services through your device settings; however, certain features may not function correctly." },
    ],
  },
  {
    title: "How We Collect Information",
    blocks: [
      { type: "p", text: "We collect information through the following methods:" },
      { type: "h3", text: "Information You Provide" },
      { type: "p", text: "You provide information when you:" },
      { type: "ul", items: [
        "Register an account.", "Update your profile.", "Participate in loyalty programmes.",
        "Redeem rewards.", "Scan QR codes.", "Contact customer support.", "Complete surveys.",
        "Participate in competitions or promotional campaigns.",
      ] },
      { type: "h3", text: "Automatic Collection" },
      { type: "p", text: "When you use our Services, we automatically collect technical information relating to your device, application usage and system performance." },
      { type: "p", text: "This helps us improve our Services, diagnose technical issues and maintain security." },
      { type: "h3", text: "Third-Party Sources" },
      { type: "p", text: "We may receive information from trusted third-party service providers including payment providers, authentication providers, analytics providers and participating merchants where necessary to provide our Services." },
    ],
  },
  {
    title: "How We Use Your Information",
    blocks: [
      { type: "p", text: "We use personal information only for legitimate business purposes, including to:" },
      { type: "ul", items: [
        "Create and manage customer and merchant accounts.", "Authenticate users.", "Operate loyalty programmes.",
        "Calculate loyalty points.", "Process reward redemptions.", "Validate promotional offers.",
        "Process QR code transactions.", "Facilitate payments.", "Detect and prevent fraud.",
        "Respond to customer enquiries.", "Provide technical support.", "Improve our products and services.",
        "Monitor application performance.", "Personalize customer experiences.",
        "Recommend merchants and promotions.", "Send important service notifications.",
        "Conduct analytics and reporting.", "Comply with applicable legal obligations.",
        "Protect the rights, property and security of TMH Digital, its customers and merchants.",
      ] },
      { type: "p", text: "We will not use your information for purposes that are materially different from those described in this Privacy Policy without providing appropriate notice where required." },
    ],
  },
  {
    title: "Loyalty Programme",
    blocks: [
      { type: "strong", text: "Rewaldo is TMH Digital's multi-merchant loyalty and rewards ecosystem that enables customers to earn and redeem loyalty points and earn discounts across participating merchants." },
      { type: "p", text: "To administer loyalty programmes, we maintain information relating to:" },
      { type: "ul", items: [
        "Loyalty membership", "Reward points", "Redemption history", "Membership tiers",
        "Promotional eligibility", "Campaign participation", "Customer preferences", "Merchant interactions",
      ] },
      { type: "p", text: "This information enables us to deliver personalized rewards, improve customer engagement and administer loyalty programmes accurately." },
    ],
  },
  {
    title: "QR Code Processing",
    blocks: [
      { type: "p", text: "Rewaldo utilizes QR code technology to facilitate secure customer and merchant interactions." },
      { type: "p", text: "QR codes may be used for:" },
      { type: "ul", items: [
        "Customer identification", "Loyalty point accumulation", "Reward redemption", "Offer validation",
        "Transaction verification", "Visit confirmation", "Fraud prevention",
      ] },
      { type: "p", text: "QR code information is processed solely for operating the Services and improving transaction security." },
    ],
  },
  {
    title: "Payment Processing",
    blocks: [
      { type: "p", text: "TMH Digital may facilitate payments associated with subscriptions or other services through authorized third-party payment providers." },
      { type: "p", text: "Depending on the payment option selected, transactions may be processed through banks, payment gateways and digital wallet providers, including services such as KuickPay, Stripe, Easypaisa, JazzCash or other approved payment processors." },
      { type: "p", text: "TMH Digital does not store complete credit card numbers, debit card numbers, CVV codes or other sensitive payment authentication information on its own systems. Payment information is securely processed by the respective payment provider in accordance with its own privacy and security policies." },
    ],
  },
  {
    title: "Authentication and Account Security",
    blocks: [
      { type: "p", text: "To protect user accounts and maintain the integrity of our Services, TMH Digital supports multiple authentication methods, which may include:" },
      { type: "ul", items: [
        "Mobile Number and One-Time Password (OTP)", "Email and Password", "Google Sign-In", "Apple Sign-In",
        "Other secure authentication methods introduced from time to time",
      ] },
      { type: "p", text: "Users are responsible for maintaining the confidentiality of their account credentials and should immediately notify TMH Digital of any suspected unauthorized access or security breach involving their account." },
    ],
  },
  {
    title: "Device Permissions",
    blocks: [
      { type: "p", text: "Depending on the features you choose to use, the Applications may request permission to access certain functions of your device, including:" },
      { type: "ul", items: [
        "Camera – to scan QR codes and upload profile images.",
        "Photos and Media – to upload profile pictures or promotional content.",
        "Location – to identify nearby merchants and location-based offers.",
        "Notifications – to receive reward updates, promotional campaigns, security alerts and service announcements.",
        "Internet Access – to communicate securely with TMH Digital systems.",
      ] },
      { type: "p", text: "Permissions may be granted, denied or withdrawn at any time through your device settings. Disabling certain permissions may affect the availability of some features." },
    ],
  },
  {
    title: "Analytics and Service Improvement",
    blocks: [
      { type: "p", text: "To improve the quality, performance and reliability of our Services, TMH Digital may use analytics and diagnostic tools such as Google Analytics, Firebase Analytics, Firebase Crashlytics and similar technologies." },
      { type: "p", text: "These services help us:" },
      { type: "ul", items: [
        "Understand how users interact with our Applications.", "Identify and resolve technical issues.",
        "Improve application performance and stability.", "Measure feature usage.",
        "Enhance customer experience.", "Monitor security and system reliability.",
      ] },
      { type: "p", text: "Where reasonably practicable, analytics information is processed in an aggregated or pseudonymized form and is not intended to directly identify individual users." },
    ],
  },
  {
    title: "Marketing Communications",
    blocks: [
      { type: "p", text: "TMH Digital may communicate with customers and merchants regarding:" },
      { type: "ul", items: [
        "Loyalty programme updates", "Reward confirmations", "Promotional offers", "Merchant campaigns",
        "New features", "Product announcements", "Customer surveys", "Service notifications",
        "Security alerts", "Important policy updates",
      ] },
      { type: "p", text: "Communications may be delivered through email, SMS, push notifications, in-application messaging or other authorized communication channels." },
      { type: "p", text: "Users may opt out of receiving promotional communications at any time through the Application settings or by following the unsubscribe instructions included in such communications. Essential service and security notifications may continue to be sent where necessary for the operation of your account." },
    ],
  },
  {
    title: "Sharing of Information",
    blocks: [
      { type: "p", text: "TMH Digital does not sell or rent your personal information to third parties." },
      { type: "p", text: "We may share information only where necessary to provide the Services, comply with legal obligations or protect our legitimate business interests." },
      { type: "p", text: "Information may be shared with:" },
      { type: "h3", text: "Participating Merchants" },
      { type: "p", text: "To administer loyalty programmes and promotional offers, participating merchants may receive relevant customer information necessary to complete transactions and manage loyalty activities, including customer identification, loyalty status, reward transactions and redemption history associated with their business." },
      { type: "p", text: "Merchants are contractually required to use such information solely for the purposes of administering the Services." },
      { type: "h3", text: "Service Providers" },
      { type: "p", text: "We may engage trusted third-party service providers to assist in operating our Services, including providers of:" },
      { type: "ul", items: [
        "Cloud hosting", "Payment processing", "Authentication services", "Analytics",
        "Customer communications", "Technical support", "Infrastructure and security services",
      ] },
      { type: "p", text: "These providers are required to maintain appropriate safeguards for the information they process on our behalf." },
      { type: "h3", text: "Business Transfers" },
      { type: "p", text: "If TMH Digital undergoes a merger, acquisition, restructuring or sale of all or part of its business, personal information may be transferred as part of that transaction, subject to appropriate confidentiality obligations." },
      { type: "h3", text: "Legal Requirements" },
      { type: "p", text: "We may disclose information where required to:" },
      { type: "ul", items: [
        "Comply with applicable laws or lawful government requests.",
        "Protect the rights, safety or property of TMH Digital, our users or others.",
        "Prevent fraud or investigate suspected unlawful activities.",
        "Enforce our Terms of Use or other legal agreements.",
      ] },
    ],
  },
  {
    title: "Third-Party Services",
    blocks: [
      { type: "p", text: "Our Applications may integrate with third-party technologies and service providers including payment providers, authentication services, mapping services, notification services and cloud infrastructure providers." },
      { type: "p", text: "These third parties operate under their own privacy policies and terms of service. TMH Digital encourages users to review the privacy practices of these providers where applicable." },
    ],
  },
  {
    title: "Data Security",
    blocks: [
      { type: "p", text: "TMH Digital maintains appropriate technical and organizational safeguards to protect personal information against unauthorized access, loss, misuse, alteration or disclosure." },
      { type: "p", text: "Our security measures include, where appropriate:" },
      { type: "ul", items: [
        "Encryption of data during transmission.", "Secure hosting environments.", "Role-based access controls.",
        "System monitoring and logging.", "Security testing and software updates.",
        "Employee confidentiality obligations.", "Incident response procedures.",
      ] },
      { type: "p", text: "While we strive to protect your information using commercially reasonable safeguards, no method of electronic transmission or storage is completely secure. Users are encouraged to take reasonable precautions to protect their own devices and account credentials." },
    ],
  },
  {
    title: "Data Retention",
    blocks: [
      { type: "p", text: "TMH Digital retains personal information only for as long as necessary to provide the Services, administer loyalty programmes, comply with legal obligations, resolve disputes and enforce our agreements." },
      { type: "p", text: "When personal information is no longer required, it will be securely deleted, anonymized or otherwise disposed of using appropriate security procedures." },
      { type: "p", text: "Certain information may be retained for longer periods where required by applicable law or for legitimate business purposes such as fraud prevention, dispute resolution or regulatory compliance." },
    ],
  },
  {
    title: "Data Deletion Requests",
    blocks: [
      { type: "p", text: "You have the right to request deletion of your Rewaldo account and associated personal information at any time." },
      { type: "p", text: "You may submit a deletion request through:" },
      { type: "ul", items: [
        "The account settings within the TMH Digital Application (where available); or",
        "By contacting TMH Digital using the contact details provided in this Privacy Policy.",
      ] },
      { type: "p", text: "To protect your account, we may verify your identity before processing the request." },
      { type: "p", text: "Following verification, we will process your request within a reasonable period. Your personal information will be deleted or anonymized unless we are required to retain certain information to comply with legal obligations, resolve disputes, prevent fraud, protect our legitimate interests or enforce our agreements." },
      { type: "p", text: "Once deletion has been completed, certain features of the Services will no longer be available, and your account cannot be recovered." },
    ],
  },
  {
    title: "Your Privacy Rights",
    blocks: [
      { type: "p", text: "Subject to applicable laws, you may request to:" },
      { type: "ul", items: [
        "Access the personal information we hold about you.", "Correct inaccurate or incomplete information.",
        "Update your account information.",
        "Request deletion of your personal information where legally permissible.",
        "Withdraw consent where processing is based on consent.", "Opt out of promotional communications.",
        "Request information regarding how your personal information is processed.",
      ] },
      { type: "p", text: "TMH Digital may request reasonable proof of identity before acting on such requests." },
    ],
  },
  {
    title: "Children's Privacy",
    blocks: [
      { type: "p", text: "Our Services are intended for individuals who are legally capable of entering into binding agreements under applicable law." },
      { type: "p", text: "We do not knowingly collect personal information from children without the consent of a parent or legal guardian where such consent is required. If we become aware that personal information has been collected inappropriately, we will take reasonable steps to remove it from our systems." },
    ],
  },
  {
    title: "Changes to this Privacy Policy",
    blocks: [
      { type: "p", text: "TMH Digital may update this Privacy Policy periodically to reflect changes in our Services, technology, legal requirements or business operations." },
      { type: "p", text: "Where material changes are made, we will notify users through one or more of the following:" },
      { type: "ul", items: [
        "The TMH Digital Applications.", "Our website.", "Email.", "SMS.", "Push notifications.",
      ] },
      { type: "p", text: "The revised Privacy Policy will become effective from the date specified at the beginning of the document." },
    ],
  },
  {
    title: "Contact Us",
    blocks: [
      { type: "p", text: "If you have any questions, concerns or requests regarding this Privacy Policy or the processing of your personal information, please contact us:" },
      { type: "card", lines: [
        "TMH Digital (SMC-Private) Limited",
        "Email: contact@tmhdigital.com",
        "Website: www.rewaldo.com",
        "Registered Office: House # 2, Malik Street, Adjacent to Mera Ghar Orphenage, Main Service Road, Ghauri Town, Phase 3, Islamabad",
        "Customer Support: +92-320-0353396",
      ] },
    ],
  },
  {
    title: "Governing Law",
    blocks: [
      { type: "strong", text: "This Privacy Policy shall be governed by and interpreted in accordance with the laws of the Islamic Republic of Pakistan. Any disputes relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts of Pakistan." },
    ],
  },
  {
    title: "Acceptance of this Privacy Policy",
    blocks: [
      { type: "p", text: "By accessing or using the Rewaldo Customer Applications, Rewaldo Merchants Application, website or related Services, you acknowledge that you have read, understood and agree to this Privacy Policy." },
      { type: "p", text: "Where your consent is required for specific processing activities or device permissions, TMH Digital will request such consent through the appropriate mechanisms provided within the Applications." },
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <DocsPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="Privacy Policy for the Rewaldo Customer and Merchant Applications, operated by TMH Digital (SMC-Private) Limited."
      sections={SECTIONS}
    />
  );
};

export default PrivacyPolicy;
