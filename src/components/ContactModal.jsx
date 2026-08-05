"use client";

import { useState } from "react";

const FIELDS = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
];

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
  company_website: "", // honeypot
};

const ContactModal = ({ open, onClose }) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleClose = () => {
    setValues(INITIAL_STATE);
    setStatus("idle");
    setError("");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(INITIAL_STATE);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/60 px-4 py-8 overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {status === "success" ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-primaryLight text-primary flex items-center justify-center text-2xl font-bold mb-5">
              ✓
            </div>
            <h3 className="text-[22px] font-bold text-secondary mb-2">
              Message sent!
            </h3>
            <p className="text-muted text-[15px] leading-relaxed max-w-sm mx-auto">
              Thanks for reaching out — our team will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 px-6 py-3 rounded-pill bg-primary text-white font-semibold text-[14px] hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-1">
                  Get in touch
                </p>
                <h2 className="text-[22px] font-bold text-secondary">
                  Contact Us
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="text-muted hover:text-ink text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="company_website"
                value={values.company_website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-[13px] font-semibold text-ink mb-1.5"
                    >
                      {field.label} <span className="text-primary">*</span>
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      autoFocus={field.name === "firstName"}
                      value={values[field.name]}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[14px] text-ink transition-shadow focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-semibold text-ink mb-1.5"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[14px] text-ink transition-shadow focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[13px] font-semibold text-ink mb-1.5"
                >
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[14px] text-ink transition-shadow focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-semibold text-ink mb-1.5"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={values.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[14px] text-ink transition-shadow focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[13px] text-red-600 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-9 py-3.5 rounded-pill bg-gradient-to-r from-primary to-primaryDark text-white font-semibold text-[15px] shadow-soft transition-all hover:brightness-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
