"use client";

import { useState } from "react";
import Link from "next/link";
import { DASHBOARD_LINKS } from "../config";
import { useAdminAuth } from "../context/AdminAuthContext";
import AdminLoginModal from "./AdminLoginModal";
import ContactModal from "./ContactModal";

const Footer = () => {
  const { isAdmin, logout } = useAdminAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <img src="/logo.png" alt="Rewaldo" className="h-8 w-auto mb-4" />
          <p className="text-muted text-[14px] leading-relaxed max-w-xs">
            The digital loyalty platform connecting customers and local
            businesses through one wallet.
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">Product</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li><a href="/#features" className="hover:text-primary">Features</a></li>
            <li><a href="/#how-it-works" className="hover:text-primary">How it works</a></li>
            <li><a href="/#mobile-apps" className="hover:text-primary">Mobile apps</a></li>
            <li><a href="/#benefits" className="hover:text-primary">Benefits</a></li>
            <li><a href="/#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">Dashboards</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li><a target="_blank" rel="noopener noreferrer" href={DASHBOARD_LINKS.business} className="hover:text-primary">Business dashboard</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href={DASHBOARD_LINKS.admin} className="hover:text-primary">Admin dashboard</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">User manuals</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li><Link href="/manuals/customer-app" className="hover:text-primary">Customer app</Link></li>
            <li><Link href="/manuals/business-app" className="hover:text-primary">Business app</Link></li>
            <li><Link href="/manuals/business-dashboard" className="hover:text-primary">Business dashboard</Link></li>
            {isAdmin && (
              <li><Link href="/manuals/admin-dashboard" className="hover:text-primary">Admin dashboard</Link></li>
            )}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink text-[14px] mb-4">Company</p>
          <ul className="space-y-3 text-[14px] text-muted">
            <li>
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="hover:text-primary"
              >
                Contact us
              </button>
            </li>
            <li><Link href="/privacy-policy" className="hover:text-primary">Privacy policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Rewaldo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[13px] text-muted">Powered by <a href="https://solexes.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Solexes (Private) Limited</a></p>
            <span className="text-line">|</span>
            {isAdmin ? (
              <button
                type="button"
                onClick={logout}
                className="text-[13px] text-muted hover:text-primary"
              >
                Admin logout
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setLoginOpen(true)}
                className="text-[13px] text-muted hover:text-primary"
              >
                Admin login
              </button>
            )}
          </div>
        </div>
      </div>

      <AdminLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
};

export default Footer;
