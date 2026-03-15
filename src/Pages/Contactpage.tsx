import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const contactInfo = [
  {
    number: "01",
    labelKey: "contact.office_label",
    value: "contact.office_value",
    link: "#",
  },
  {
    number: "02",
    labelKey: "contact.mail_label",
    value: "agenzmarketingagency@gmail.com",
    link: "mailto:agenzmarketingagency@gmail.com",
  },
];

const phones = [
  { label: "EG", value: "015 519 859 63", link: "tel:+201551985963" },
  { label: "EG", value: "010 603 185 98", link: "tel:+201060318598" },
];

const LabelEl = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1.5 text-base-content/40">
    {children}
  </label>
);

export default function ContactPage() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { t } = useTranslation();
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await emailjs.send(
        "service_osuarsd",
        "template_myny2yh",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "2BFA77R694R8P6kdT"
      );
      setSubmitted(true);
    } catch {
      setError(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";
  const inputBg = isDark ? "rgba(255,255,255,0.06)" : "#f5f5f3";
  const inputColor = isDark ? "#e2e8f0" : "#3F0F8B";
  const focusStyle = isDark
    ? "2px solid rgba(167,139,250,0.5)"
    : "2px solid rgba(63,15,139,0.35)";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "1px solid rgba(167,139,250,0.12)" : "none";
  const inputClass = `w-full rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none transition`;

  const inputStyle = {
    background: inputBg,
    color: inputColor,
    border: "2px solid transparent",
  };

  return (
    <section className="relative min-h-screen bg-base-100 overflow-hidden font-sans transition-colors duration-300">
      <Navbar />

      <div
        className="pointer-events-none absolute top-32 -left-24 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(124,58,237,0.08)" : "rgba(63,15,139,0.07)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(109,40,217,0.06)" : "rgba(83,23,138,0.04)",
        }}
      />

      <div className="mt-10 relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-16">
        {/* Hero */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: brandSecondary }}
          >
            {t("contact.badge")}
          </p>
          <h1
            className="text-4xl font-bold leading-tight mb-4"
            style={{ color: brandPrimary }}
          >
            {t("contact.title_1")} <br />
            <span style={{ color: brandSecondary }}>
              {t("contact.title_2")}
            </span>
          </h1>
          <p className="text-base-content/60 text-base leading-relaxed max-w-lg mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Form card ── */}
          <div
            className={`rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-1000 delay-100 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: cardBg,
              border: cardBorder,
              boxShadow: isDark ? "0 4px 32px rgba(0,0,0,0.3)" : undefined,
            }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1"
              style={{ color: brandSecondary }}
            >
              {t("contact.form_badge")}
            </p>
            <h2
              className="text-2xl font-black mb-8"
              style={{ color: brandPrimary }}
            >
              {t("contact.form_title")}
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: isDark
                      ? "rgba(167,139,250,0.15)"
                      : "rgba(63,15,139,0.08)",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={brandPrimary}
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-black mb-2"
                  style={{ color: brandPrimary }}
                >
                  {t("contact.success_title")}
                </h3>
                <p className="text-base-content/50 text-sm">
                  {t("contact.success_desc")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <LabelEl>{t("contact.field_name")}</LabelEl>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contact.field_name_placeholder")}
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.border = focusStyle)}
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </div>
                  <div>
                    <LabelEl>{t("contact.field_email")}</LabelEl>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("contact.field_email_placeholder")}
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.border = focusStyle)}
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Service */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <LabelEl>{t("contact.field_phone")}</LabelEl>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+20 1xx xxx xxxx"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.border = focusStyle)}
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </div>
                  <div>
                    <LabelEl>{t("contact.field_service")}</LabelEl>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                      style={{
                        ...inputStyle,
                        color: form.service ? inputColor : "#9ca3af",
                      }}
                      onFocus={(e) => (e.target.style.border = focusStyle)}
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    >
                      <option value="" disabled style={{ color: "#9ca3af" }}>
                        {t("contact.field_service_placeholder")}
                      </option>
                      <option value="web">{t("contact.service_web")}</option>
                      <option value="branding">
                        {t("contact.service_branding")}
                      </option>
                      <option value="seo">{t("contact.service_seo")}</option>
                      <option value="social">
                        {t("contact.service_social")}
                      </option>
                      <option value="other">
                        {t("contact.service_other")}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <LabelEl>{t("contact.field_message")}</LabelEl>
                  <textarea
                    name="message"
                    placeholder={t("contact.field_message_placeholder")}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.border = focusStyle)}
                    onBlur={(e) =>
                      (e.target.style.border = "2px solid transparent")
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white text-sm font-bold tracking-[0.2em] uppercase py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                      : "linear-gradient(135deg, #3F0F8B, #53178A)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      {t("contact.sending")}
                    </span>
                  ) : (
                    t("contact.submit")
                  )}
                </button>

                {error && (
                  <p className="text-red-400 text-xs text-center mt-2">
                    {error}
                  </p>
                )}
              </form>
            )}

            {/* WhatsApp */}
            <div className="flex text-center items-center justify-center py-5 text-base-content/40 text-sm">
              or
            </div>
              <a
                target="_blank"
                dir="ltr"
                href="https://wa.me/+201060318598"
                className="btn font-medium flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] rounded"
              >
                WhatsApp
              </a>
          </div>

          {/* ── Info cards ── */}
          <div
            className={`flex flex-col gap-4 transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {contactInfo.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl px-6 py-5 flex items-start gap-5 transition-all duration-300 group"
                style={{
                  background: cardBg,
                  border: cardBorder,
                  boxShadow: isDark
                    ? "0 2px 16px rgba(0,0,0,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = isDark
                    ? "0 8px 32px rgba(124,58,237,0.2)"
                    : "0 8px 32px rgba(63,15,139,0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = isDark
                    ? "0 2px 16px rgba(0,0,0,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.06)")
                }
              >
                <span className="text-xs font-black font-mono mt-0.5 transition-colors duration-300 text-base-content/20 group-hover:text-[#c4b5fd]">
                  {item.number}
                </span>
                <div>
                  <p
                    className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1"
                    style={{ color: brandSecondary }}
                  >
                    {t(item.labelKey)}
                  </p>
                  <a
                    href={item.link}
                    className="text-sm leading-relaxed transition-colors duration-200 text-base-content/60 hover:text-[#c4b5fd]"
                  >
                    {t(item.value)}
                  </a>
                </div>
              </div>
            ))}

            {/* Phone cards */}
            <div className="grid grid-cols-2 gap-4">
              {phones.map((p) => (
                <a
                  key={p.value}
                  href={p.link}
                  className="group rounded-2xl px-5 py-4 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #3F0F8B 0%, #53178A 100%)",
                    boxShadow: "0 4px 24px rgba(63,15,139,0.25)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3.5 h-3.5 text-white/80"
                      >
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1.01l-2.2 2.18z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                      {p.label}
                    </span>
                  </div>
                  <span
                    dir="ltr"
                    className="text-base font-black text-white tracking-wide leading-none"
                  >
                    {p.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Quote card */}
            <div
              className="rounded-2xl px-8 py-7 shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #3F0F8B, #53178A, #3F0F8B)",
              }}
            >
              <p className="text-white text-lg font-black leading-snug">
                {t("contact.quote")}
              </p>
              <p className="text-white/60 text-sm font-medium mt-1">
                {t("contact.quote_sub")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
