import customerApp from "./customerApp";
import businessApp from "./businessApp";
import businessDashboard from "./businessDashboard";
import adminDashboard from "./adminDashboard";

export const MANUALS = {
  "customer-app": customerApp,
  "business-app": businessApp,
  "business-dashboard": businessDashboard,
  "admin-dashboard": adminDashboard,
};

export const getDocsNav = (isAdmin) => [
  {
    title: "Mobile Apps",
    items: [
      { label: "Rewaldo Customer App", path: "/manuals/customer-app" },
      { label: "Rewaldo Business App", path: "/manuals/business-app" },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { label: "Business Dashboard", path: "/manuals/business-dashboard" },
      ...(isAdmin
        ? [{ label: "Admin Dashboard", path: "/manuals/admin-dashboard" }]
        : []),
    ],
  },
];
