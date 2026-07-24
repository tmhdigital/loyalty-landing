import { useState } from "react";
import { useAdminAuth } from "../context/AdminAuthContext";

const AdminLoginModal = ({ open, onClose }) => {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setError("");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email.trim(), password);
    if (success) {
      handleClose();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/60 px-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-7 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-1">
          Admin
        </p>
        <h2 className="text-[22px] font-bold text-secondary mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-ink mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary"
              placeholder="abc@xyz.com"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-ink mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-[13px] text-red-600 font-medium">{error}</p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-primary text-white text-[14px] font-semibold py-2.5 hover:opacity-90 transition-opacity"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-xl border border-line text-ink text-[14px] font-semibold py-2.5 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;
