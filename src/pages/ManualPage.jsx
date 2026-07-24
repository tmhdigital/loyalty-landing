import { useParams, Navigate } from "react-router-dom";
import DocsPage from "../components/docs/DocsPage";
import { MANUALS } from "../data/manuals";
import { useAdminAuth } from "../context/AdminAuthContext";

const ManualPage = () => {
  const { slug } = useParams();
  const { isAdmin } = useAdminAuth();
  const manual = MANUALS[slug];

  if (!manual) return <Navigate to="/" replace />;
  if (slug === "admin-dashboard" && !isAdmin) return <Navigate to="/" replace />;

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

export default ManualPage;
