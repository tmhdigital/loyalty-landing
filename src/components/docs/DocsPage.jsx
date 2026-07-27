"use client";

import { usePathname } from "next/navigation";
import DocsSidebar, { DocsMobileNav } from "./DocsSidebar";
import ManualSections from "./ManualContent";

const DocsPage = ({ eyebrow, title, description, meta, sections }) => {
  const pathname = usePathname();

  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            {eyebrow}
          </p>
          <h1 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-muted text-[16px] leading-relaxed">
            {description}
          </p>
          {meta && (
            <p className="mt-3 text-muted text-[13px] font-medium">{meta}</p>
          )}
        </div>

        <DocsMobileNav currentPath={pathname} />

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          <DocsSidebar currentPath={pathname} sections={sections} />
          <ManualSections sections={sections} />
        </div>
      </div>
    </section>
  );
};

export default DocsPage;
