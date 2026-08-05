"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getDocsNav } from "../../data/manuals";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { slugify } from "./ManualContent";

export const DocsMobileNav = ({ currentPath }) => {
  const router = useRouter();
  const { isAdmin } = useAdminAuth();
  const docsNav = getDocsNav(isAdmin);

  return (
    <div className="lg:hidden mb-10">
      <label className="block font-semibold text-ink text-[13px] uppercase tracking-wide mb-3">
        Jump to document
      </label>
      <select
        value={currentPath}
        onChange={(e) => router.push(e.target.value)}
        className="w-full rounded-xl border border-line px-4 py-3 text-[14px] text-ink bg-white focus:outline-none focus:border-primary"
      >
        {docsNav.map((group) => (
          <optgroup key={group.title} label={group.title}>
            {group.items.map((item) => (
              <option key={item.path} value={item.path}>
                {item.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

const DocsSidebar = ({ currentPath, sections, showDocsNav = true }) => {
  const { isAdmin } = useAdminAuth();
  const docsNav = getDocsNav(isAdmin);

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-28 space-y-8">
        {showDocsNav && (
          <div>
            <p className="font-semibold text-ink text-[13px] uppercase tracking-wide mb-4">
              Documentation
            </p>
            <div className="space-y-5">
              {docsNav.map((group) => (
                <div key={group.title}>
                  <p className="text-[12px] font-semibold text-muted uppercase tracking-wide mb-2">
                    {group.title}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item) => {
                      const active = item.path === currentPath;
                      return (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            className={`text-[13.5px] transition-colors ${
                              active
                                ? "text-primary font-semibold"
                                : "text-muted hover:text-primary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {sections?.length > 0 && (
          <div>
            <p className="font-semibold text-ink text-[13px] uppercase tracking-wide mb-4">
              On this page
            </p>
            <ul className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-2">
              {sections.map((section, i) => (
                <li key={section.title}>
                  <a
                    href={`#${slugify(section.title)}`}
                    className="text-[13.5px] text-muted hover:text-primary transition-colors"
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DocsSidebar;
