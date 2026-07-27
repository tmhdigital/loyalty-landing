import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import MobileApps from "../components/MobileApps";
import Benefits from "../components/Benefits";
import ForBusiness from "../components/ForBusiness";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import MerchantInquiryForm from "../components/MerchantInquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <MobileApps />
      <Benefits />
      <ForBusiness />
      <FAQ />
      <CTABanner />
      <MerchantInquiryForm />
    </>
  );
}
