import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { DASHBOARD_LINKS } from "../config";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Rewaldo" className="h-8 w-auto mb-4" />
          <p className="text-muted text-[14px] leading-relaxed max-w-xs">
            The digital loyalty platform connecting customers and local
            businesses through one wallet.
          </p>
        </div>

        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">Product</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary">How it works</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">Dashboards</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li><a target="_blank" href={DASHBOARD_LINKS.business} className="hover:text-primary">Business dashboard</a></li>
            <li><a target="_blank" href={DASHBOARD_LINKS.admin} className="hover:text-primary">Admin dashboard</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">Company</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li><a href="#" className="hover:text-primary">Contact us</a></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy policy</Link></li>
            <li><a href="#" className="hover:text-primary">Terms of service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Rewaldo. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">Powered by TMH Digital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
