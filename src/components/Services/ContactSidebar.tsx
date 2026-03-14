import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

const CONTACT = {
  email: "agenzmarketingagency@gmail.com",
  phone: "+20 155 198 5963",
  phone2: "+20 106 031 8598",
};

function ContactSidebar() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const borderColor = isDark ? "rgba(167,139,250,0.15)" : "#f3f4f6";
  const inputBorder = isDark ? "rgba(167,139,250,0.2)" : "#e5e7eb";
  const inputFocus = isDark ? "#a78bfa" : "#3F0F8B";

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div
        className="sticky top-32 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300"
        style={{
          background: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
          border: `1px solid ${borderColor}`,
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${borderColor}` }}
        >
          <h3
            className="font-black text-base transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            {t("contact.form_badge")}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="px-5 py-4 space-y-3">
          {["name", "email", "phone"].map((field) => (
            <input
              key={field}
              name={field}
              value={(form as any)[field]}
              onChange={handle}
              placeholder={t(`contact.field_${field}`)}
              required={field !== "phone"}
              className="w-full pb-2 text-xs outline-none transition-colors bg-transparent"
              style={{
                color: brandPrimary,
                borderBottom: `1px solid ${inputBorder}`,
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = inputFocus)}
              onBlur={(e) => (e.target.style.borderBottomColor = inputBorder)}
            />
          ))}
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder={t("contact.field_message")}
            rows={4}
            className="w-full rounded-lg p-2.5 text-xs outline-none transition-colors resize-none bg-transparent"
            style={{
              color: brandPrimary,
              border: `1px solid ${inputBorder}`,
            }}
            onFocus={(e) => (e.target.style.borderColor = inputFocus)}
            onBlur={(e) => (e.target.style.borderColor = inputBorder)}
          />
          <button
            type="submit"
            className="w-full text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: isDark
                ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                : "linear-gradient(135deg, #3F0F8B, #53178A)",
            }}
          >
            {sent ? (
              "✓ Sent!"
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t("contact.submit")}
              </>
            )}
          </button>
        </form>

        {/* Contact info */}
        <div
          className="px-5 py-4 space-y-2"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          <p
            className="font-black text-xs mb-3 transition-colors duration-300"
            style={{ color: brandPrimary }}
          >
            Contact Info
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-xs transition-colors"
            style={{ color: isDark ? "rgba(255,255,255,0.5)" : "#6b7280" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = brandPrimary)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isDark
                ? "rgba(255,255,255,0.5)"
                : "#6b7280")
            }
          >
            <div
              className="w-5 h-5 rounded flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #3F0F8B, #53178A)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            {CONTACT.email}
          </a>
          {[CONTACT.phone, CONTACT.phone2].map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-xs transition-colors"
              style={{ color: isDark ? "rgba(255,255,255,0.5)" : "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = brandPrimary)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isDark
                  ? "rgba(255,255,255,0.5)"
                  : "#6b7280")
              }
            >
              <div
                className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                style={{ background: "#53178A" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              {phone}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ContactSidebar;
