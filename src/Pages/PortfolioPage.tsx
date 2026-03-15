import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import {
  IMAGES,
  VIDEOS,
  STATS,
  BRANDS,
  BRANDING_IMAGES,
  type VidCategory,
} from "../data/data";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import VideoCard from "../components/VideoCard";
import ImageLightbox from "../components/ImageLightbox";
import VideoLightbox from "../components/VideoLightbox";
import ImageCard from "../components/ImageCard";
import BrandOnlyFilter from "../components/BrandOnlyFilter";
import TwoLevelFilter from "../components/TwoLevelFilter";
import VideoFilter from "../components/VideoFilter";
type Category = "branding" | "sales" | "engagement" | "awareness";

// ── Main Page ──────────────────────────────────────────────────
export default function PortfolioPage() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"images" | "videos" | "branding">(
    "images"
  );
const [activeSloganImages, setActiveSloganImages] = useState<string | null>(null);

  // Images filter
  const [activeCategoryImages, setActiveCategoryImages] =
    useState<Category | null>(null);
  const [activeBrandImages, setActiveBrandImages] = useState<string | null>(
    null
  );

  // Videos filter
  const [activeVidCategory, setActiveVidCategory] =
    useState<VidCategory | null>(null);

  // Branding tab state
  const [activeBrandBranding, setActiveBrandBranding] = useState<string | null>(
    null
  );
  const [brandLightbox, setBrandLightbox] = useState<number | null>(null);

  // Lightboxes
  const [imgLightbox, setImgLightbox] = useState<number | null>(null);
  const [vidLightbox, setVidLightbox] = useState<number | null>(null);

  const { t } = useTranslation();
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Filtered data
const filteredImages = (() => {
  if (!activeCategoryImages) return IMAGES;

  let result = IMAGES.filter(img => img.category === activeCategoryImages);

  if (!activeBrandImages) return result; // كاتيجوري بس → كل صورها

  result = result.filter(img => img.brandId === activeBrandImages);

  const activeBrandData = BRANDS.find(b => b.id === activeBrandImages);
  const hasSlogans = activeBrandData?.slogans?.[activeCategoryImages]?.length ?? 0;

  if (hasSlogans > 0 && activeSloganImages) {
    result = result.filter(img => img.slogan === activeSloganImages);
  }

  return result;
})();
const handleCategoryChange = (cat: Category | null) => {
  setActiveCategoryImages(cat);
  setActiveBrandImages(null);
  setActiveSloganImages(null);
};
const handleBrandChange = (brand: string | null) => {
  setActiveBrandImages(brand);
  setActiveSloganImages(null);
};

const filteredVideos = activeVidCategory
  ? VIDEOS.filter((v) => v.category === activeVidCategory)
  : VIDEOS; // ← مش [] عشان All بيعرض الكل
  // Branding tab derived data — الصور من BRANDING_IMAGES في data.ts مباشرة
  const brandingBrandIds = [
    ...new Set(BRANDING_IMAGES.map((img) => img.brandId)),
  ];
  const brandingBrands = brandingBrandIds
    .map((id) => BRANDS.find((b) => b.id === id))
    .filter(Boolean) as typeof BRANDS;
  const filteredBrandingImages = activeBrandBranding
    ? BRANDING_IMAGES.filter((img) => img.brandId === activeBrandBranding)
    : BRANDING_IMAGES;

  // Lightbox navigation - images
  const imgIndex =
    imgLightbox !== null
      ? filteredImages.findIndex((i) => i.id === imgLightbox)
      : -1;
  const goNextImg = useCallback(
    () =>
      setImgLightbox(
        filteredImages[(imgIndex + 1) % filteredImages.length]?.id ?? null
      ),
    [imgIndex, filteredImages]
  );
  const goPrevImg = useCallback(
    () =>
      setImgLightbox(
        filteredImages[
          (imgIndex - 1 + filteredImages.length) % filteredImages.length
        ]?.id ?? null
      ),
    [imgIndex, filteredImages]
  );

  // Lightbox navigation - videos
  const vidIndex =
    vidLightbox !== null
      ? filteredVideos.findIndex((i) => i.id === vidLightbox)
      : -1;
  const goNextVid = useCallback(
    () =>
      setVidLightbox(
        filteredVideos[(vidIndex + 1) % filteredVideos.length]?.id ?? null
      ),
    [vidIndex, filteredVideos]
  );
  const goPrevVid = useCallback(
    () =>
      setVidLightbox(
        filteredVideos[
          (vidIndex - 1 + filteredVideos.length) % filteredVideos.length
        ]?.id ?? null
      ),
    [vidIndex, filteredVideos]
  );

  // Lightbox navigation - branding
  const brandLightboxIndex =
    brandLightbox !== null
      ? filteredBrandingImages.findIndex((i) => i.id === brandLightbox)
      : -1;
  const goNextBrand = useCallback(
    () =>
      setBrandLightbox(
        filteredBrandingImages[
          (brandLightboxIndex + 1) % filteredBrandingImages.length
        ]?.id ?? null
      ),
    [brandLightboxIndex, filteredBrandingImages]
  );
  const goPrevBrand = useCallback(
    () =>
      setBrandLightbox(
        filteredBrandingImages[
          (brandLightboxIndex - 1 + filteredBrandingImages.length) %
            filteredBrandingImages.length
        ]?.id ?? null
      ),
    [brandLightboxIndex, filteredBrandingImages]
  );

  const brandPrimary = isDark ? "#c4b5fd" : "#3F0F8B";
  const brandSecondary = isDark ? "#a78bfa" : "#53178A";

  return (
    <div className="relative min-h-screen bg-base-100 overflow-x-hidden font-sans transition-colors duration-300">
      <Navbar />
      <div
        className="pointer-events-none absolute top-40 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(124,58,237,0.08)" : "rgba(63,15,139,0.05)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-60 -left-32 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: isDark ? "rgba(109,40,217,0.06)" : "rgba(83,23,138,0.04)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-20">
        {/* Hero */}
        <div
          className={`mb-14 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3 transition-colors duration-300"
            style={{ color: brandSecondary }}
          >
            {t("portfolio.badge")}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1
              className="text-3xl sm:text-4xl font-bold leading-tight max-w-lg transition-colors duration-300"
              style={{ color: brandPrimary }}
            >
              {t("portfolio.title")}{" "}
            </h1>
            <p className="text-base-content/50 text-sm leading-relaxed max-w-xs">
              {t("portfolio.description")}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 transition-all duration-1000 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-5 transition-all duration-300 group cursor-default"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "#f7f7f7",
                border: isDark ? "1px solid rgba(167,139,250,0.1)" : "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = isDark
                  ? "rgba(124,58,237,0.12)"
                  : "#f3f0ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.04)"
                  : "#f7f7f7")
              }
            >
              <p
                className="text-3xl font-black transition-colors duration-300"
                style={{ color: brandPrimary }}
              >
                {t(s.value)}
              </p>
              <p className="text-base-content/60 font-medium mt-1">
                {t(s.labelKey)}
              </p>
            </div>
          ))}
        </div>

        <h2
          className="font-black text-3xl sm:text-5xl text-right rtl:text-right ltr:text-left pt-8 pb-6"
          style={{ color: isDark ? "#c4b5fd" : "#3F0F8B" }}
        >
          {t("portfolio.work_title")}
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === "images"
                ? "bg-purple-600 text-white shadow-lg"
                : isDark
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t("portfolio.section_photos")} ({IMAGES.length})
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === "videos"
                ? "bg-purple-600 text-white shadow-lg"
                : isDark
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t("portfolio.section_videos")} ({VIDEOS.length})
          </button>
          <button
            onClick={() => {
              setActiveTab("branding");
              setActiveBrandBranding(null);
            }}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === "branding"
                ? "bg-purple-600 text-white shadow-lg"
                : isDark
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t("portfolio.section_branding")} ({BRANDING_IMAGES.length})
          </button>
        </div>

        {/* Filter */}
        <div
          className={`transition-all duration-1000 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {activeTab === "images" && (
            <TwoLevelFilter
  key="images-filter"
  activeCategory={activeCategoryImages}
  activeBrand={activeBrandImages}
  activeSlogan={activeSloganImages}
  onCategoryChange={handleCategoryChange}
  onBrandChange={handleBrandChange}
  onSloganChange={setActiveSloganImages}
  isDark={isDark}
/>
          )}
          {activeTab === "branding" && (
            <BrandOnlyFilter
              key="branding-filter"
              activeBrand={activeBrandBranding}
              onBrandChange={setActiveBrandBranding}
              brands={brandingBrands}
              isDark={isDark}
            />
          )}
          {activeTab === "videos" && (
            <VideoFilter
              key="videos-filter"
              active={activeVidCategory}
              onChange={setActiveVidCategory}
              isDark={isDark}
            />
          )}
        </div>

        {/* ── Images Tab ── */}
        {activeTab === "images" && (
          <div
            className={`mb-20 transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: brandPrimary }} />
              <h3
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: brandPrimary }}
              >
                {t("portfolio.section_photos")}
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: isDark ? "rgba(167,139,250,0.1)" : "#f3f4f6",
                }}
              />
        <span className="text-xs font-bold text-base-content/30">
  {filteredImages.length} / {IMAGES.length} {t("portfolio.posts_count")}
</span>

            </div>
            {filteredImages.length === 0 ? (
 <div className="flex flex-col items-center justify-center py-16 opacity-40">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12 mb-3">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3l18 18" />
    </svg>
<p className="text-sm font-medium">
  {!activeCategoryImages
    ? t("portfolio.filter_hint_start")
    : activeBrandImages && !activeSloganImages
    ? t("portfolio.filter_hint_campaign")
    : t("portfolio.no_images")}
</p>

  </div>
            ) : (
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                }}
              >
                {filteredImages.map((item) => (
                  <ImageCard
                    key={item.id}
                    item={item}
                    onClick={() => setImgLightbox(item.id)}
                    isDark={isDark}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Videos Tab ── */}
        {activeTab === "videos" && (
          <div
            className={`mb-20 transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: brandPrimary }} />
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: brandPrimary }}
              >
                {t("portfolio.section_videos")}
              </p>
              <div
                className="flex-1 h-px"
                style={{
                  background: isDark ? "rgba(167,139,250,0.1)" : "#f3f4f6",
                }}
              />
        <span className="text-xs font-bold text-base-content/30">
  {filteredVideos.length} / {VIDEOS.length} {t("portfolio.videos_count")}
</span>
            </div>
            {filteredVideos.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-16 opacity-40">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12 mb-3">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
<p className="text-sm font-medium">
  {!activeVidCategory ? t("portfolio.filter_hint_start") : t("portfolio.no_videos")}
</p>

  </div>
            ) : (
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                }}
              >
                {filteredVideos.map((item) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    onClick={() => setVidLightbox(item.id)}
                    isDark={isDark}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Branding Tab ── */}
        {activeTab === "branding" && (
          <div
            className={`mb-20 transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: brandPrimary }} />
              <h3
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: brandPrimary }}
              >
                {t("portfolio.section_branding")}
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: isDark ? "rgba(167,139,250,0.1)" : "#f3f4f6",
                }}
              />
              <span className="text-xs font-bold text-base-content/30">
                {filteredBrandingImages.length} {t("portfolio.pdf_count")}
              </span>
            </div>
            {filteredBrandingImages.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 opacity-40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-12 h-12 mb-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3l18 18"
                  />
                </svg>
<p className="text-sm font-medium">{t("portfolio.no_files")}</p>              </div>
            ) : (
              <div
                className="grid gap-x-8 gap-y-10"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                }}
              >
                {filteredBrandingImages.map((item) => (
                  <ImageCard
                    key={item.id}
                    item={item}
                    onClick={() => setBrandLightbox(item.id)}
                    isDark={isDark}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div
          className={`border rounded-3xl px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: isDark
              ? "rgba(124,58,237,0.08)"
              : "linear-gradient(135deg, #faf8ff, #f3f0ff)",
            borderColor: isDark ? "rgba(167,139,250,0.2)" : "#e9e0ff",
          }}
        >
          <div>
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
              style={{ color: brandSecondary }}
            >
              {t("portfolio.cta_badge")}
            </p>
            <h3
              className="text-3xl font-bold leading-tight"
              style={{ color: brandPrimary }}
            >
              {t("portfolio.cta_title_1")}
              <br />
              {t("portfolio.cta_title_2")}
            </h3>
          </div>
          <a
          target="_blank"
            href="https://wa.me/+201060318598"
            className="flex-shrink-0 text-white text-sm font-bold tracking-wide px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap"
            style={{
              background: isDark
                ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                : "linear-gradient(135deg, #3F0F8B, #53178A)",
            }}
          >
            {t("portfolio.cta")}
          </a>
        </div>
      </div>

      {/* Lightboxes */}
      {imgLightbox !== null &&
        (() => {
          const item = filteredImages.find((i) => i.id === imgLightbox);
          if (!item) return null;
          return (
            <ImageLightbox
              item={item}
              onClose={() => setImgLightbox(null)}
              onPrev={goPrevImg}
              onNext={goNextImg}
            />
          );
        })()}
      {vidLightbox !== null &&
        (() => {
          const item = filteredVideos.find((i) => i.id === vidLightbox);
          if (!item) return null;
          return (
            <VideoLightbox
              item={item}
              onClose={() => setVidLightbox(null)}
              onPrev={goPrevVid}
              onNext={goNextVid}
            />
          );
        })()}
      {brandLightbox !== null &&
        (() => {
          const item = filteredBrandingImages.find(
            (i) => i.id === brandLightbox
          );
          if (!item) return null;
          return (
            <ImageLightbox
              item={item}
              onClose={() => setBrandLightbox(null)}
              onPrev={goPrevBrand}
              onNext={goNextBrand}
            />
          );
        })()}
    </div>
  );
}
