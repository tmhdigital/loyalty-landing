"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DASHBOARD_LINKS } from "../config";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Mobile apps", href: "/#mobile-apps" },
  { label: "Benefits", href: "/#benefits" },
  { label: "For business", href: "/#for-business" },
  { label: "FAQ", href: "/#faq" },
  { label: "Inquire", href: "/#inquire" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // At the very top the navbar sits over the dark animated intro hero,
  // so links/buttons switch to white for contrast. Once scrolled the
  // navbar gets a white background and returns to dark text.
  const linkColor = scrolled
    ? "text-ink/80 hover:text-primary"
    : "text-white/90 hover:text-white";
  const adminBtn = scrolled
    ? "text-ink border-line hover:border-primary hover:text-primary"
    : "text-white border-white/40 hover:bg-white/10";
  const burgerBar = scrolled ? "bg-ink" : "bg-white";
  const burgerBorder = scrolled ? "border-line" : "border-white/40";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Rewaldo" className="h-9 w-auto" />
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[15px] font-medium transition-colors ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href={DASHBOARD_LINKS.admin}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-pill text-[14px] font-semibold border transition-colors ${adminBtn}`}
          >
            Admin login
          </a>
          <a
            href={DASHBOARD_LINKS.business}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-pill text-[14px] font-semibold text-white bg-primary hover:bg-primaryDark shadow-soft transition-colors"
          >
            Business login
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`xl:hidden w-10 h-10 flex items-center justify-center rounded-full border ${burgerBorder}`}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 transition-transform ${burgerBar} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-opacity ${burgerBar} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-transform ${burgerBar} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="xl:hidden bg-white border-t border-line px-6 py-6 flex flex-col gap-5 shadow-card max-h-[calc(100vh-5rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-ink/80"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={DASHBOARD_LINKS.admin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-5 py-3 rounded-pill text-[14px] font-semibold text-ink border border-line"
            >
              Admin login
            </a>
            <a
              href={DASHBOARD_LINKS.business}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-5 py-3 rounded-pill text-[14px] font-semibold text-white bg-primary"
            >
              Business login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;