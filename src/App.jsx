import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ManualPage from "./pages/ManualPage";
import { AdminAuthProvider } from "./context/AdminAuthContext";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <AdminAuthProvider>
      <div className="bg-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/manuals/:slug" element={<ManualPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AdminAuthProvider>
  );
}

export default App;
