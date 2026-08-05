"use client";

import Link from "next/link";

const TABS = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    match: (path) => path === "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
    match: (path) => path === "/terms-and-conditions",
  },
  {
    label: "User Manual",
    href: "/manuals/customer-app",
    match: (path) => path.startsWith("/manuals"),
  },
];

const DocsTabs = ({ currentPath }) => (
  <div className="mb-10 border-b border-line overflow-x-auto">
    <nav className="flex gap-6 min-w-max">
      {TABS.map((tab) => {
        const active = tab.match(currentPath);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`whitespace-nowrap pb-3 text-[14px] font-semibold border-b-2 -mb-px transition-colors ${
              active
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  </div>
);

export default DocsTabs;
