import DocsPage from "../../components/docs/DocsPage";

export const metadata = {
  title: "Terms and Conditions — Rewaldo",
  description:
    "Terms and Conditions governing use of the Rewaldo Customer App, Rewaldo Business App and related services, operated by TMH Digital (SMC-Private) Limited.",
};

const SECTIONS = [
  {
    title: "Introduction",
    blocks: [
      { type: "p", text: `Welcome to Rewaldo, a digital loyalty and rewards platform owned and operated by TMH Digital (SMC-Private) Limited ("TMH Digital", "Company", "we", "our" or "us").` },
      { type: "p", text: "Rewaldo is designed to connect customers with participating merchants through a unified digital loyalty ecosystem that enables users to earn and redeem loyalty rewards, access exclusive offers, participate in promotional campaigns and enjoy other membership benefits." },
      { type: "p", text: `These Terms and Conditions ("Terms") govern your access to and use of the Rewaldo Customer App, Rewaldo Business App, Business Rewaldo website (dashboard) and all related products and services (collectively, the "Services").` },
      { type: "p", text: "By creating an account, accessing or using the Services, you acknowledge that you have read, understood and agree to be legally bound by these Terms and our Privacy Policy." },
      { type: "strong", text: "If you do not agree with these Terms, you must discontinue use of the Services immediately." },
    ],
  },
  {
    title: "Definitions",
    blocks: [
      { type: "p", text: "For purposes of these Terms:" },
      { type: "ul", items: [
        "Application means the Rewaldo Customer App and Rewaldo Business App.",
        "Customer means an individual registered to use the Rewaldo Customer App.",
        "Merchant means a business approved by TMH Digital to participate in the Rewaldo platform.",
        "Membership means an active customer account registered within Rewaldo.",
        "Loyalty Points mean promotional reward points earned through eligible activities conducted on the Rewaldo platform.",
        "Rewards include discounts, promotional offers or other incentives made available through participating merchants.",
        "QR Code means a machine-readable code generated or recognized by the Rewaldo platform for validating transactions, earning points or redeeming rewards.",
        "Services means all products, software, mobile applications, websites and digital services provided by TMH Digital under the Rewaldo brand.",
      ] },
    ],
  },
  {
    title: "Eligibility",
    blocks: [
      { type: "p", text: "To use the Services you must:" },
      { type: "ul", items: [
        "Be legally capable of entering into a binding agreement under applicable law.",
        "Register using accurate and complete information.",
        "Maintain only one personal customer account unless expressly authorized by TMH Digital.",
        "Maintain the confidentiality of your login credentials.",
      ] },
      { type: "p", text: "TMH Digital reserves the right to refuse registration or terminate any account that does not satisfy these eligibility requirements." },
    ],
  },
  {
    title: "Rewaldo Membership",
    blocks: [
      { type: "p", text: "Membership provides access to the features and benefits available through the Rewaldo platform." },
      { type: "p", text: "Membership benefits may include:" },
      { type: "ul", items: [
        "Participation in loyalty programmes.",
        "Earning loyalty points.",
        "Redeeming loyalty points and rewards.",
        "Access to promotional campaigns.",
        "Exclusive member offers.",
        "Personalized recommendations.",
        "Digital membership identification.",
        "Merchant discovery services.",
      ] },
      { type: "p", text: "Membership benefits may vary depending on campaigns, participating merchants and programme enhancements introduced by TMH Digital." },
      { type: "p", text: "Membership is personal to the registered user and may not be assigned, transferred, sold or shared with another person." },
    ],
  },
  {
    title: "Complimentary 30-Day Membership",
    blocks: [
      { type: "p", text: "TMH Digital may, at its sole discretion, offer users a complimentary thirty (30) day membership to experience the Rewaldo platform." },
      { type: "p", text: "The complimentary membership is intended solely for genuine first-time users. This offer may be terminated at any time at the sole discretion of TMH Digital." },
      { type: "p", text: "Users must not:" },
      { type: "ul", items: [
        "Create multiple accounts to obtain additional complimentary memberships.",
        "Use false or misleading information during registration.",
        "Register accounts on behalf of other individuals without authorization.",
        "Attempt to manipulate the complimentary membership programme through any technical or fraudulent means.",
      ] },
      { type: "p", text: "If TMH Digital determines, acting reasonably, that a user has abused or attempted to abuse the complimentary membership programme, it may immediately suspend or permanently terminate the relevant account(s), revoke any associated benefits or loyalty points, and restrict future access to the Services without prior notice or compensation." },
      { type: "p", text: "TMH Digital's determination regarding abuse of the complimentary membership programme shall be final." },
    ],
  },
  {
    title: "Customer Accounts",
    blocks: [
      { type: "p", text: "Customers are responsible for:" },
      { type: "ul", items: [
        "Maintaining accurate account information.",
        "Protecting their passwords and authentication credentials.",
        "Updating information when changes occur.",
        "Ensuring all activity performed through their account is authorized.",
      ] },
      { type: "p", text: "Customers must notify TMH Digital immediately if they suspect unauthorized access to their account." },
      { type: "p", text: "TMH Digital is not responsible for losses arising from a user's failure to maintain the security of their account credentials." },
    ],
  },
  {
    title: "Merchant Accounts",
    blocks: [
      { type: "p", text: "Businesses wishing to participate in Rewaldo must complete the merchant registration process and provide accurate business information." },
      { type: "p", text: "Merchants agree to:" },
      { type: "ul", items: [
        "Maintain accurate business information.",
        "Honour valid promotions published through Rewaldo.",
        "Conduct business ethically and lawfully.",
        "Provide accurate pricing.",
        "Ensure promotional content is truthful.",
        "Respond to customer enquiries in a timely manner.",
        "Maintain appropriate standards of customer service.",
      ] },
      { type: "p", text: "TMH Digital reserves the right to approve, suspend or terminate merchant participation where these Terms are violated or where continued participation may adversely affect the integrity or reputation of the Rewaldo platform." },
    ],
  },
  {
    title: "Loyalty Programme",
    blocks: [
      { type: "p", text: "Rewaldo operates a multi-merchant digital loyalty programme." },
      { type: "p", text: "Customers may earn loyalty points by completing eligible transactions with participating merchants or by participating in promotional campaigns made available through the platform." },
      { type: "p", text: "The number of points awarded for a transaction shall be determined in accordance with the applicable campaign, merchant programme or promotional rules in effect at the time of the transaction." },
      { type: "p", text: "TMH Digital reserves the right to modify point calculations, introduce new reward structures, revise programme rules or discontinue promotional campaigns as part of the ongoing enhancement of the Rewaldo platform." },
      { type: "p", text: "Unless expressly stated otherwise:" },
      { type: "ul", items: [
        "Loyalty points are not legal tender.",
        "Loyalty points cannot be exchanged for cash.",
        "Loyalty points cannot be sold, traded or transferred.",
        "Loyalty points do not constitute property, electronic money or any financial instrument.",
      ] },
      { type: "p", text: "TMH Digital may reverse or cancel loyalty points that have been awarded as a result of system errors, duplicate transactions, fraudulent activity or misuse of the platform." },
    ],
  },
  {
    title: "Rewards and Redemption",
    blocks: [
      { type: "p", text: "Rewards made available through Rewaldo are offered by participating merchants or TMH Digital as part of promotional programmes." },
      { type: "p", text: "Availability of rewards may vary depending on:" },
      { type: "ul", items: [
        "Merchant participation.",
        "Promotional campaigns.",
        "Geographic location.",
        "Inventory availability.",
        "Programme eligibility.",
      ] },
      { type: "p", text: "Customers are responsible for reviewing any conditions applicable to individual rewards before redemption." },
      { type: "p", text: "TMH Digital reserves the right to substitute, modify, suspend or discontinue rewards, promotional offers or loyalty campaigns where reasonably necessary for operational, commercial or legal reasons." },
      { type: "p", text: "Rewards redeemed through the platform are intended solely for the registered member and may not be resold, assigned or exchanged for cash unless expressly authorized by TMH Digital." },
    ],
  },
  {
    title: "QR Code Usage",
    blocks: [
      { type: "p", text: "The Rewaldo platform utilizes QR Code technology to facilitate secure and efficient interactions between customers and participating merchants." },
      { type: "p", text: "QR Codes may be used for purposes including:" },
      { type: "ul", items: [
        "Customer identification.",
        "Verification of eligible transactions.",
        "Awarding loyalty points.",
        "Redeeming rewards and promotional offers.",
        "Confirming campaign participation.",
        "Preventing fraudulent or duplicate transactions.",
      ] },
      { type: "p", text: "Users shall not:" },
      { type: "ul", items: [
        "Copy, duplicate or reproduce QR Codes without authorization.",
        "Alter or manipulate QR Codes.",
        "Use screenshots, cloned or unauthorized QR Codes to obtain benefits.",
        "Attempt to bypass the intended operation of the QR Code system.",
        "Use automated tools or software to generate or simulate QR Code transactions.",
      ] },
      { type: "p", text: "Any misuse of QR Code functionality shall constitute a material breach of these Terms and may result in immediate suspension or permanent termination of the relevant account, cancellation of loyalty points, and any other action deemed appropriate by TMH Digital." },
    ],
  },
  {
    title: "Purchases and Payment Collection",
    blocks: [
      { type: "p", text: "The Rewaldo platform may facilitate payments for membership programmes or other services offered through the Applications." },
      { type: "p", text: "Payments may be collected through authorized payment methods supported by TMH Digital, including but not limited to:" },
      { type: "ul", items: [
        "Credit Cards.",
        "Debit Cards.",
        "Mobile Payment Services.",
        "Payment Gateways.",
        "Any additional payment methods introduced by TMH Digital from time to time.",
      ] },
      { type: "p", text: "All payments are subject to successful authorization by the applicable payment service provider." },
      { type: "p", text: "TMH Digital reserves the right to decline, suspend or cancel any transaction where fraud, unauthorized activity, technical failure or violation of these Terms is reasonably suspected." },
    ],
  },
  {
    title: "Membership Fees",
    blocks: [
      { type: "p", text: "Where membership plans or premium features are offered, the applicable fees shall be clearly communicated before purchase." },
      { type: "p", text: "Unless otherwise stated:" },
      { type: "ul", items: [
        "Membership fees are payable in advance.",
        "Prices may be revised by TMH Digital from time to time.",
        "Applicable taxes shall be charged where required by law.",
        "Membership benefits become available only after successful payment confirmation.",
      ] },
      { type: "p", text: "Customers may pay their membership fee in cash where an online payment mechanism is not available or the customer does not have an active service. TMH Digital will activate the service promptly once payment is collected by a company representative. If automatic renewal is offered for any membership, users will be informed of the renewal terms before enrolment and may cancel future renewals through the available account management options." },
    ],
  },
  {
    title: "Refund and Cancellation Policy",
    blocks: [
      { type: "p", text: "TMH Digital is committed to providing fair and transparent payment practices." },
      { type: "h3", text: "Membership Fees" },
      { type: "p", text: "Membership fees or other service fees paid to TMH Digital are generally non-refundable once the applicable membership or service has been activated, except where:" },
      { type: "ul", items: [
        "Required by applicable law.",
        "A duplicate payment has been processed.",
        "Payment has been collected in error.",
        "TMH Digital determines, at its sole discretion, that a refund is appropriate.",
      ] },
      { type: "h3", text: "Merchant Transactions" },
      { type: "p", text: "Purchases of products or services from participating merchants are transactions between the customer and the respective merchant." },
      { type: "p", text: "TMH Digital is not the seller of merchant products or services and is not responsible for refunds relating to:" },
      { type: "ul", items: [
        "Product quality.",
        "Incorrect orders.",
        "Pricing disputes.",
        "Delivery issues.",
        "Warranties.",
        "Customer dissatisfaction with merchant products or services.",
      ] },
      { type: "p", text: "Refund requests relating to merchant transactions should be submitted directly to the relevant merchant in accordance with that merchant's applicable policies." },
      { type: "h3", text: "Failed Transactions" },
      { type: "p", text: "Where a payment has been successfully debited from a user's payment account but the corresponding transaction could not be completed due to a verified technical failure attributable to the Rewaldo platform, TMH Digital will use reasonable efforts to either:" },
      { type: "ul", items: [
        "Complete the intended transaction.",
        "Facilitate an appropriate refund through the original payment method.",
      ] },
      { type: "p", text: "Refund processing times may vary depending upon the applicable payment provider or financial institution." },
    ],
  },
  {
    title: "Promotions and Marketing Campaigns",
    blocks: [
      { type: "p", text: "TMH Digital and participating merchants may periodically introduce promotional campaigns through the Rewaldo platform." },
      { type: "p", text: "Promotions may include:" },
      { type: "ul", items: [
        "Discounts.",
        "Cashback offers.",
        "Referral programmes.",
        "Limited-time campaigns.",
        "Seasonal promotions.",
        "Contests.",
        "Member-exclusive offers.",
      ] },
      { type: "p", text: "Each promotion may include specific eligibility criteria, participation requirements and validity periods." },
      { type: "p", text: "TMH Digital reserves the right to modify, suspend or discontinue any promotional campaign where reasonably necessary due to operational, commercial, legal or technical considerations." },
    ],
  },
  {
    title: "Customer Responsibilities",
    blocks: [
      { type: "p", text: "Customers agree to:" },
      { type: "ul", items: [
        "Provide accurate and current registration information.",
        "Use the Services only for lawful purposes.",
        "Maintain the confidentiality of their account credentials.",
        "Comply with all programme rules.",
        "Use QR Codes only as intended.",
        "Respect the rights of merchants and other users.",
        "Promptly report suspected unauthorized account activity.",
        "Refrain from attempting to interfere with or disrupt the operation of the Services.",
      ] },
      { type: "p", text: "Customers shall not:" },
      { type: "ul", items: [
        "Create multiple accounts to obtain additional membership benefits.",
        "Misuse the complimentary thirty (30) day membership programme.",
        "Impersonate another person or business.",
        "Submit false information.",
        "Exploit software defects or security vulnerabilities.",
        "Attempt unauthorized access to any part of the platform.",
        "Interfere with other users' accounts.",
        "Use automated tools, bots or scripts to interact with the platform.",
        "Engage in fraudulent earning or redemption of loyalty points.",
        "Engage in any activity that could damage the reputation, integrity or security of Rewaldo or TMH Digital.",
      ] },
      { type: "p", text: "TMH Digital reserves the right to immediately suspend or terminate accounts found to be in breach of these obligations." },
    ],
  },
  {
    title: "Merchant Responsibilities",
    blocks: [
      { type: "p", text: "Participating merchants acknowledge and agree that they are solely responsible for:" },
      { type: "ul", items: [
        "The quality of products and services offered.",
        "Pricing and promotional accuracy.",
        "Compliance with applicable consumer protection laws.",
        "Honouring valid rewards and promotional offers published through Rewaldo.",
        "Maintaining accurate business information.",
        "Customer service relating to their products and services.",
        "Compliance with applicable taxation obligations.",
        "Ensuring that employees authorized to use the Merchant App comply with these Terms.",
      ] },
      { type: "p", text: "Merchants shall not:" },
      { type: "ul", items: [
        "Publish misleading or deceptive promotions.",
        "Manipulate loyalty transactions.",
        "Artificially generate customer activity.",
        "Misuse customer information.",
        "Discriminate against Rewaldo members entitled to valid promotions.",
        "Engage in any conduct that could adversely affect the reputation or integrity of the Rewaldo platform.",
      ] },
      { type: "p", text: "TMH Digital may suspend or terminate a merchant's participation where these obligations are breached." },
    ],
  },
  {
    title: "Fraud Prevention",
    blocks: [
      { type: "p", text: "TMH Digital is committed to maintaining the integrity of the Rewaldo platform." },
      { type: "p", text: "We reserve the right to investigate any activity that appears fraudulent, abusive or inconsistent with normal platform usage." },
      { type: "p", text: "Examples include:" },
      { type: "ul", items: [
        "Duplicate customer accounts.",
        "Misuse of complimentary memberships.",
        "Manipulation of loyalty points.",
        "Unauthorized QR Code usage.",
        "False transactions.",
        "Collusion between customers and merchants.",
        "Use of automated systems.",
        "Account sharing.",
        "Any attempt to circumvent the intended operation of the Services.",
      ] },
      { type: "p", text: "Where fraudulent or abusive activity is identified or reasonably suspected, TMH Digital may:" },
      { type: "ul", items: [
        "Suspend or terminate accounts.",
        "Reverse loyalty points.",
        "Cancel rewards.",
        "Refuse future participation.",
        "Suspend merchant accounts.",
        "Recover losses where permitted by law.",
        "Report unlawful conduct to the appropriate authorities.",
      ] },
    ],
  },
  {
    title: "Intellectual Property",
    blocks: [
      { type: "p", text: "All intellectual property rights relating to the Rewaldo platform, including but not limited to:" },
      { type: "ul", items: [
        "Software.",
        "Source code.",
        "Trademarks.",
        "Logos.",
        "Graphics.",
        "User interfaces.",
        "Databases.",
        "Content.",
        "Documentation.",
        "Text.",
        "Designs.",
        "Promotional materials.",
        "Proprietary technologies,",
      ] },
      { type: "p", text: "are owned by or licensed to TMH Digital and are protected by applicable intellectual property laws." },
      { type: "p", text: "Nothing contained in these Terms grants users any ownership interest in the Rewaldo platform or its intellectual property." },
      { type: "p", text: "Users are granted a limited, non-exclusive, non-transferable and revocable licence to access and use the Services solely for their intended purposes and in accordance with these Terms." },
      { type: "p", text: "Users shall not copy, reproduce, modify, reverse engineer, distribute, sell, sublicense or otherwise exploit any part of the Services without the prior written consent of TMH Digital." },
    ],
  },
  {
    title: "User Generated Content",
    blocks: [
      { type: "p", text: "Where the Rewaldo platform permits users to upload, submit or publish content, including reviews, comments, ratings, photographs, business information or promotional material, users remain solely responsible for the content they submit." },
      { type: "p", text: "By submitting content through the Services, users represent and warrant that:" },
      { type: "ul", items: [
        "They own or have the necessary rights to submit the content.",
        "The content is accurate and lawful.",
        "The content does not infringe the intellectual property or privacy rights of any third party.",
        "The content is not defamatory, offensive, misleading or unlawful.",
      ] },
      { type: "p", text: "Users grant TMH Digital a non-exclusive, worldwide, royalty-free licence to use, reproduce, publish, display and distribute such content solely for operating, improving and promoting the Rewaldo platform." },
      { type: "p", text: "TMH Digital reserves the right, but assumes no obligation, to remove or restrict access to any content that it reasonably considers inappropriate, unlawful or inconsistent with these Terms." },
    ],
  },
  {
    title: "Privacy",
    blocks: [
      { type: "p", text: "The collection, processing, storage and disclosure of personal information are governed by the Rewaldo Privacy Policy, which forms an integral part of these Terms." },
      { type: "p", text: "By using the Services, users acknowledge that they have read and understood the Privacy Policy and consent to the processing of their personal information as described therein." },
    ],
  },
  {
    title: "Suspension and Termination",
    blocks: [
      { type: "p", text: "TMH Digital reserves the right, at its sole discretion, to suspend, restrict or terminate any customer or merchant account where it reasonably believes that:" },
      { type: "ul", items: [
        "These Terms have been violated.",
        "False, inaccurate or misleading information has been provided.",
        "Fraudulent or abusive activity has occurred.",
        "The security or integrity of the platform has been compromised.",
        "Unlawful activities have been undertaken.",
        "Continued participation may adversely affect TMH Digital, participating merchants or other users.",
      ] },
      { type: "p", text: "Upon suspension or termination, TMH Digital may:" },
      { type: "ul", items: [
        "Suspend access to the Services.",
        "Revoke membership benefits.",
        "Cancel loyalty points or rewards obtained through misuse or fraud.",
        "Remove user-generated content where appropriate.",
        "Take any other action reasonably necessary to protect the platform and its users.",
      ] },
      { type: "p", text: "Termination of an account shall not affect any rights or obligations accrued prior to the date of termination." },
    ],
  },
  {
    title: "Service Availability",
    blocks: [
      { type: "p", text: "TMH Digital will use commercially reasonable efforts to provide reliable access to the Rewaldo platform." },
      { type: "p", text: "However, uninterrupted availability cannot be guaranteed." },
      { type: "p", text: "The Services may occasionally be unavailable due to:" },
      { type: "ul", items: [
        "Scheduled maintenance.",
        "Software updates.",
        "Security enhancements.",
        "Telecommunications failures.",
        "Internet service disruptions.",
        "Third-party service interruptions.",
        "Force majeure events.",
        "Circumstances beyond the reasonable control of TMH Digital.",
      ] },
      { type: "p", text: "TMH Digital shall not be liable for temporary interruptions, delays or unavailability of the Services resulting from such circumstances." },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    blocks: [
      { type: "p", text: `The Rewaldo platform is provided on an "as is" and "as available" basis.` },
      { type: "p", text: "To the maximum extent permitted by applicable law, TMH Digital disclaims all express or implied warranties, including but not limited to warranties relating to:" },
      { type: "ul", items: [
        "Merchant products or services.",
        "Uninterrupted availability.",
        "Accuracy of promotional content.",
        "Merchant inventory.",
        "Fitness for a particular purpose.",
        "Merchant performance.",
        "Compatibility with every device.",
        "Freedom from technical errors.",
      ] },
      { type: "p", text: "TMH Digital does not guarantee that:" },
      { type: "ul", items: [
        "Every promotion will always remain available.",
        "Every merchant will continue participating in the platform.",
        "Rewards will always be available.",
        "The Services will operate without interruption or technical issues.",
      ] },
    ],
  },
  {
    title: "Limitation of Liability",
    blocks: [
      { type: "p", text: "To the fullest extent permitted by applicable law, TMH Digital shall not be liable for any indirect, incidental, consequential, exemplary, punitive or special damages arising out of or relating to:" },
      { type: "ul", items: [
        "Use of the Services.",
        "Inability to access the Services.",
        "Merchant products or services.",
        "Promotional campaigns.",
        "Loss of loyalty points due to fraud or misuse.",
        "Unauthorized account access caused by user negligence.",
        "Interruptions beyond TMH Digital's reasonable control.",
        "Third-party services integrated with the platform.",
      ] },
      { type: "strong", text: "TMH Digital's aggregate liability arising from or relating to the Services shall, to the extent permitted by law, not exceed the amount paid by the user directly to TMH Digital for the specific Service giving rise to the claim during the twelve (12) months immediately preceding the event giving rise to the claim." },
      { type: "p", text: "Nothing in these Terms limits or excludes liability that cannot be excluded under applicable law." },
    ],
  },
  {
    title: "Indemnification",
    blocks: [
      { type: "p", text: "Users agree to indemnify, defend and hold harmless TMH Digital, its directors, officers, employees, affiliates and business partners from and against any claims, liabilities, damages, losses, costs or expenses (including reasonable legal fees) arising from:" },
      { type: "ul", items: [
        "Violation of these Terms.",
        "Misuse of the Services.",
        "Fraudulent activities.",
        "Infringement of intellectual property rights.",
        "Unlawful conduct.",
        "Breach of applicable laws.",
        "Negligent or intentional acts or omissions.",
      ] },
    ],
  },
  {
    title: "Force Majeure",
    blocks: [
      { type: "p", text: "TMH Digital shall not be liable for any delay or failure in performing its obligations where such delay or failure results from events beyond its reasonable control, including but not limited to:" },
      { type: "ul", items: [
        "Natural disasters.",
        "Acts of government.",
        "War.",
        "Terrorism.",
        "Civil unrest.",
        "Strikes or labour disputes.",
        "Power failures.",
        "Internet outages.",
        "Cyber-attacks.",
        "Epidemics or pandemics.",
        "Failures of third-party infrastructure.",
      ] },
      { type: "p", text: "TMH Digital will use reasonable efforts to resume normal operations as soon as practicable." },
    ],
  },
  {
    title: "Changes to the Services",
    blocks: [
      { type: "p", text: "TMH Digital continually enhances and improves the Rewaldo platform." },
      { type: "p", text: "Accordingly, TMH Digital reserves the right to:" },
      { type: "ul", items: [
        "Introduce new features.",
        "Modify loyalty programme rules.",
        "Add or remove participating merchants.",
        "Improve security features.",
        "Discontinue obsolete functionality.",
        "Enhance user experience.",
        "Introduce new membership plans or services.",
      ] },
      { type: "p", text: "Where changes materially affect users, reasonable notice will be provided through the Application, website or other appropriate communication channels." },
    ],
  },
  {
    title: "Amendments to these Terms",
    blocks: [
      { type: "p", text: "TMH Digital may revise these Terms from time to time to reflect changes in law, technology, business operations or the Services." },
      { type: "p", text: "The latest version of these Terms will always be available through the Rewaldo platform." },
      { type: "p", text: "Continued use of the Services following publication of revised Terms constitutes acceptance of those revisions." },
    ],
  },
  {
    title: "Governing Law",
    blocks: [
      { type: "strong", text: "These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan." },
    ],
  },
  {
    title: "Dispute Resolution",
    blocks: [
      { type: "p", text: "TMH Digital encourages users to first contact Customer Support to resolve any concern or dispute arising from the use of the Services." },
      { type: "p", text: "If a dispute cannot be resolved amicably, it shall be submitted to the competent courts of Pakistan, which shall have exclusive jurisdiction over matters arising from these Terms, unless otherwise required by applicable law." },
    ],
  },
  {
    title: "Electronic Communications",
    blocks: [
      { type: "p", text: "By creating an account and using the Services, users consent to receive electronic communications from TMH Digital, including notices, disclosures, service announcements, promotional communications (subject to applicable preferences) and other information relating to the operation of the Services." },
      { type: "p", text: "Electronic communications shall satisfy any legal requirement that such communications be in writing." },
    ],
  },
  {
    title: "Severability",
    blocks: [
      { type: "p", text: "If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal or unenforceable, the remaining provisions shall remain in full force and effect." },
      { type: "p", text: "Any invalid or unenforceable provision shall be interpreted, to the extent possible, in a manner that best reflects the original intent of the parties while remaining consistent with applicable law." },
    ],
  },
  {
    title: "Waiver",
    blocks: [
      { type: "p", text: "No failure or delay by TMH Digital in exercising any right or remedy under these Terms shall constitute a waiver of that right or remedy." },
      { type: "p", text: "Any waiver shall be effective only if made in writing and signed by an authorized representative of TMH Digital." },
    ],
  },
  {
    title: "Entire Agreement",
    blocks: [
      { type: "p", text: "These Terms and Conditions, together with the Rewaldo Privacy Policy and any additional policies or programme rules expressly incorporated by reference, constitute the entire agreement between TMH Digital and the user concerning the use of the Services and supersede all prior understandings, representations or agreements relating to the same subject matter." },
    ],
  },
  {
    title: "Contact Information",
    blocks: [
      { type: "p", text: "For any questions regarding these Terms or the Rewaldo platform, please contact:" },
      { type: "card", lines: [
        "TMH Digital (SMC-Private) Limited",
        "Email: contact@rewaldo.com",
        "Website: www.rewaldo.com",
        "Customer Support: contact@rewaldo.com",
        "Registered Office: House # 2, Malik Street, Adjacent to Mera Ghar Orphenage, Main Service Road, Ghauri Town, Phase 3, Islamabad",
      ] },
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <DocsPage
      eyebrow="Legal"
      title="Terms and Conditions"
      description="Terms and Conditions governing use of the Rewaldo Customer App, Rewaldo Business App and related services, operated by TMH Digital (SMC-Private) Limited."
      sections={SECTIONS}
    />
  );
}
