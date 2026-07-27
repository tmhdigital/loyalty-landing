"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DocsPage from "../../../components/docs/DocsPage";
import { useAdminAuth } from "../../../context/AdminAuthContext";

const ManualPageClient = ({ slug, manual }) => {
  const { isAdmin } = useAdminAuth();
  const router = useRouter();
  const blocked = slug === "admin-dashboard" && !isAdmin;

  useEffect(() => {
    if (blocked) router.replace("/");
  }, [blocked, router]);

  if (blocked) return null;

  return (
    <DocsPage
      eyebrow={manual.eyebrow}
      title={manual.title}
      description={manual.description}
      meta={manual.version}
      sections={manual.sections}
    />
  );
};

export default ManualPageClient;
