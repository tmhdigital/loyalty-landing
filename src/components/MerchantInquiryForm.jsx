"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CATEGORY_FIELDS = [
  { name: "businessName", label: "Business Name", type: "text", required: true },
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "businessEmail", label: "Business Email", type: "email", required: true },
  { name: "locationsCount", label: "Number of Physical Locations", type: "number", required: true },
  { name: "city", label: "City", type: "text", required: true },
  { name: "facebookUrl", label: "Facebook Page URL", type: "url", required: false },
];

const INITIAL_STATE = {
  businessName: "",
  firstName: "",
  lastName: "",
  phone: "",
  businessEmail: "",
  locationsCount: "",
  city: "",
  facebookUrl: "",
  message: "",
  company_website: "", // honeypot
};

const MerchantInquiryForm = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
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
    <section id="inquire" className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Partner with us
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-secondary leading-tight">
              Become a Rewaldo merchant
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed max-w-xl mx-auto">
              Tell us about your business and our team will reach out to get you
              set up on Rewaldo — free to join.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-3xl border border-line p-8 lg:p-10">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-primaryLight text-primary flex items-center justify-center text-2xl font-bold mb-5">
                  ✓
                </div>
                <h3 className="text-[22px] font-bold text-secondary mb-2">
                  Thanks — we've got it!
                </h3>
                <p className="text-muted text-[15px] leading-relaxed max-w-sm mx-auto">
                  Our team will review your details and reach out shortly to get
                  your business set up on Rewaldo.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-3 rounded-pill border border-line text-ink font-semibold text-[14px] hover:border-primary hover:text-primary transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid sm:grid-cols-2 gap-5">
                  {CATEGORY_FIELDS.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-[13px] font-medium text-ink mb-1.5"
                      >
                        {field.label}
                        {field.required && <span className="text-primary"> *</span>}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        min={field.type === "number" ? 1 : undefined}
                        value={values[field.name]}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-line px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-ink mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Anything else we should know?"
                    className="w-full rounded-xl border border-line px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] text-red-600 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-pill bg-primary text-white font-semibold text-[15px] hover:bg-primaryDark shadow-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Submit inquiry"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MerchantInquiryForm;
