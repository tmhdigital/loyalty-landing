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
    <section id="inquire" className="relative overflow-hidden py-16 lg:py-24">
      {/* Soft green halo so the card lifts off the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]"
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-primaryLight text-primaryDark text-[13px] font-semibold mb-5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Partner with us
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-bold text-secondary leading-[1.1]">
              Become a <span className="text-primary">Rewaldo</span> Merchant
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed max-w-xl mx-auto">
              Tell us about your business and our team will reach out to get you
              set up on Rewaldo — free to join.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-primary/10 shadow-[0_40px_90px_-30px_rgba(20,102,63,0.45)]">
            {/* Gradient accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-emerald-400 to-primaryDark" />

            <div className="p-8 lg:p-10">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primaryLight text-primary flex items-center justify-center text-2xl font-bold mb-5">
                    ✓
                  </div>
                  <h3 className="text-[22px] font-bold text-secondary mb-2">
                    Thanks — we've got it!
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed max-w-sm mx-auto">
                    Our team will review your details and reach out shortly to
                    get your business set up on Rewaldo.
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
                          className="block text-[13px] font-semibold text-ink mb-1.5"
                        >
                          {field.label}
                          {field.required && (
                            <span className="text-primary"> *</span>
                          )}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          min={field.type === "number" ? 1 : undefined}
                          value={values[field.name]}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[14px] text-ink transition-shadow focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold text-ink mb-1.5"
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
                      className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[14px] text-ink transition-shadow focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-red-600 font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto px-9 py-4 rounded-pill bg-gradient-to-r from-primary to-primaryDark text-white font-semibold text-[15px] shadow-soft transition-all hover:brightness-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Submit inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MerchantInquiryForm;