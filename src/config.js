// Update these two URLs to point at your deployed dashboards.
// Every "Admin" / "Business" link and button on the landing page reads from here.
export const DASHBOARD_LINKS = {
  admin: "https://admin.rewaldo.com",
  business: "https://business.rewaldo.com",
};

// TODO: Rewaldo and Rewaldo: Business are not yet published on the Google
// Play Store / Apple App Store. Until the real listings go live, these
// point at the official WhatsApp / WhatsApp Business store pages as
// placeholders (per explicit instruction) so the download buttons and QR
// codes are fully functional for now. Replace with the real store URLs as
// soon as they exist — every download button and QR code on the page reads
// from here, so the QR codes will regenerate correctly on their own.
export const APP_LINKS = {
  customer: {
    android: "https://play.google.com/store/apps/details?id=com.whatsapp",
    ios: "https://apps.apple.com/us/app/whatsapp-messenger/id310633997",
  },
  business: {
    android: "https://play.google.com/store/apps/details?id=com.whatsapp.w4b",
    ios: "https://apps.apple.com/us/app/whatsapp-business/id1386412985",
  },
};
