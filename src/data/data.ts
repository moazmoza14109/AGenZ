// ════════════════════════════════════════════════════════════
//  data.ts
//  ✏️  هنا بتضيف وبتعدل الصور والفيديوهات والبراندات
// ════════════════════════════════════════════════════════════

export type AspectRatio = "reel" | "square" | "landscape";

export interface ImageItem {
  id: number;
  src: string;
  aspect: "square" | "reel" | "landscape";
  brandId: string;
  category: "branding" | "sales" | "engagement" | "awareness";
    slogan?: string;
}

export interface VideoItem {
  id: number;
  src: string;
  aspect: AspectRatio;
  thumbnail?: string;
  category: VidCategory;
}
export type VidCategory =
  | "bromo"
  | "Teaser"
  | "UGC"
  | "Branding"
  | "Motion"
  | "Reels"
  | "Voice Over"
  | "Podcast";
export type Category = "branding" | "sales" | "engagement" | "awareness";

export interface BrandItem {
  id: string;
  name: string;
  logo: string;
  category: Category[];
  pdf?: string;
  slogans?: Partial<
    Record<"branding" | "sales" | "engagement" | "awareness", string[]>
  >;
}
export interface BrandingItem {
  id: number;
  src: string;
  aspect: "square" | "reel" | "landscape";
  brandId: string;
  category: "branding" | "sales" | "engagement" | "awareness";
}
export const ASPECT_PAD: Record<AspectRatio, string> = {
  reel: "177.78%",
  square: "110%",
  landscape: "56.25%",
};

// ─────────────────────────────────────
//  BRANDS  ← ✏️ عدّل وأضف براندات هنا
// ─────────────────────────────────────
export const BRANDS: BrandItem[] = [
  {
    id: "line-wear",
    name: "Line Wear Store",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773594087/21_rfw8ka.jpg",
    category: ["branding"],
  },
  {
    id: "salasil-alhudaa",
    name: "Salasil Alhudaa",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588784/13_rjhspb.jpg",
    category: ["branding"],
  },
  {
    id: "dr-ahmed-essam-zidan",
    name: "Dr. Ahmed Essam Zidan",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588772/1_l7ryir.jpg",
    category: ["awareness", "sales"],
    slogans: {
      sales: ["حكايات من العيادة"],
      awareness: ["حالة خطر", "خط أحمر"],
    },
  },
  {
    id: "dr-hussain-abo-saleh",
    name: "Dr Hussain Abo Saleh",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588774/3_hkiysa.jpg",
    category: ["awareness", "engagement"],
    slogans: {
      awareness: ["العشر وصايا"],
      engagement: ["سنة جديدة تحدي جديد", "استشارة في السريع", "معانا ولا علينا"],
    },
  },
  {
    id: "tz-technology-zone",
    name: "TZ-Technology Zone",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588780/10_prnbyc.jpg",
    category: ["awareness"],
  },
  {
    id: "dr-mohamed-wasef-aglan",
    name: "Dr.Mohamed Wasef Aglan",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588774/5_v7kkri.jpg",
    category: ["awareness"],
    slogans: {
      awareness: ["ما وراء التقويم"],
    },
  },
  {
    id: "tiba-new-house",
    name: "TIBA New House",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588789/17_cnexxw.jpg",
    category: ["awareness"],
    slogans: {
      awareness: ["شطب صح"],
    },
  },
  {
    id: "elgebaly-pharmacy",
    name: "Elgebaly Pharmacy",
    logo: "https://agenz.site/_assets/media/ccfeeb9aeb0c5d56693af04ca4dce8ac.png",
    category: ["awareness", "sales"],
    slogans: {
      sales: ["منور بعروضنا", "بضمان الجبالي"],
      awareness: ["بينهم كيميا"],
    },
  },
  {
    id: "el-aamal-exhibition",
    name: "el-Aamal Exhibition",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588790/18_p7tbvm.jpg",
    category: ["sales"],
  },
  {
    id: "golden-tech",
    name: "Golden Tech",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588779/8_mqwu6j.jpg",
    category: ["sales"],
    slogans: {
      sales: ["جولدن ستايل", "اسهل اسرع اوفر"],
      awareness: ["بينهم كيميا"],
    },
  },
  {
    id: "flash-tech",
    name: "Flash Tech",
    logo: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588781/9_v2viuw.png",
    category: ["engagement"],
  },
  {
    id: "shoaib-designs",
    name: "Shoaib Designs",
    logo: "https://agenz.site/_assets/media/9fb268ab6df955bf599887b124f56d67.png",
    category: ["branding"],
    pdf: "pdf/Shoaib designs.pdf",
  },
  {
    id: "nuxup",
    name: "NuxUp",
    category: ["branding"],
    logo: "https://agenz.site/_assets/media/88a26607d1cf0ea26ecc83098d1cf1ef.png",
    pdf: "pdf/NUXUP LOGO.pdf",
  },
];

// ─────────────────────────────────────
//  IMAGES  ← ✏️ أضف/عدّل brandId لكل صورة
// ─────────────────────────────────────
export const IMAGES: ImageItem[] = [

  {
    id: 2,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591986/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_1_zmocku.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"

  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589618/1_xqgp8e.jpg",
    aspect: "square",
    brandId: "line-wear",
    category: "branding",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589619/2_itgxfa.jpg",
    aspect: "square",
    brandId: "line-wear",
    category: "branding",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589620/3_wzwglh.jpg",
    aspect: "square",
    brandId: "line-wear",
    category: "branding",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589823/4_n9frhk.jpg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589626/1_swtwr6.jpg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589627/2_xk0wko.jpg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589628/3_pwykhh.jpg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589631/6_a5fhtw.jpg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773589999/%D8%AD%D8%A7%D9%84%D8%A9_%D8%AE%D8%B7%D8%B11_ghhtxh.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "حالة خطر"
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590002/%D8%AD%D8%A7%D9%84%D8%A9_%D8%AE%D8%B7%D8%B12_aozt7t.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "حالة خطر"
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590006/%D8%AE%D8%B7_%D8%A7%D8%AD%D9%85%D8%B1_2_wxlxi5.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "خط أحمر"
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590006/%D8%AE%D8%B7_%D8%A7%D8%AD%D9%85%D8%B11_yo8tim.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "خط أحمر"
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590320/%D8%A7%D9%84%D9%88%D8%B5%D8%A9_1_mfn3wz.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 25,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590321/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_2_vgtctl.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590338/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_3_ialrvh.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 27,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590339/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_4_etip44.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 28,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590342/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_5_wwymxa.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 29,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590343/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_6_azlbwy.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 30,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590345/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_7_is9n3d.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 31,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590349/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_8_idkaku.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 32,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590350/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_9_sc3yzb.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 33,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773590352/%D8%A7%D9%84%D9%88%D8%B5%D9%8A%D8%A9_10_trjead.jpg",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 34,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591424/1_gemm4q.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 35,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591432/2_gme8eb.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 36,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591434/3_kuyfqh.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 37,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591436/4_nsdzzv.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 38,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591518/5_dtifh2.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 39,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591520/6_carywu.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 40,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591523/7_rp8f5r.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 41,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591568/8_fuasre.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 42,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591587/9_ylfaoq.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 43,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591593/10_jkydxv.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 44,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591597/11_tjpnfv.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 45,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591601/12_lnzpjo.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 46,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591606/13_enqjoa.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 47,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591609/14_szztt1.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 48,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591611/15_wmgc3y.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 49,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591614/16_gjoav0.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 50,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591617/17_fq2l4e.jpg",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 51,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591620/18_dfqxnq.jpg",
    aspect: "square",
    category: "awareness",
    brandId: "tz-technology-zone",
  },
  {
    id: 52,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591998/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_2_kcaq8a.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 53,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591989/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_3_rjeu8l.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 54,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591991/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_4_rwoumx.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 55,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591993/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_5_vc6d1i.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 56,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591995/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_6_lrwccp.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 57,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773591998/%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%AA%D9%82%D9%88%D9%8A%D9%85_7_cv2qv4.jpg",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 58,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773592812/%D8%B4%D8%B7%D8%A8_%D8%B5%D8%AD_1_ouutwb.jpg",
    aspect: "square",
    brandId: "tiba-new-house",
    category: "awareness",
    slogan: "شطب صح"
  },
  {
    id: 59,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773592814/%D8%B4%D8%B7%D8%A8_%D8%B5%D8%AD_2_quzn43.jpg",
    aspect: "square",
    brandId: "tiba-new-house",
    category: "awareness",
    slogan: "شطب صح"
  },
  {
    id: 60,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773592827/%D8%B4%D8%B7%D8%A8_%D8%B5%D8%AD_3_u8dtme.jpg",
    aspect: "square",
    brandId: "tiba-new-house",
    category: "awareness",
    slogan: "شطب صح"
  },
  {
    id: 61,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772998736/40_nu8hgy.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "awareness",
    slogan: "بينهم كيميا"
    
  },
  {
    id: 62,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593095/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_1_e7kgya.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 63,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593108/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_2_apc84p.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 64,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593110/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_3_yj4qdq.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 65,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593112/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_4_j8norx.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 66,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593120/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_5_l65alm.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 67,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593128/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_6_xn1mqc.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 68,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593135/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_7_inkeuz.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 69,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593138/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA_%D9%85%D9%86_%D8%A7%D9%84%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9_8_ymb28f.jpg",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 70,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593398/1_kkecih.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
  {
    id: 71,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593400/2_gdpvrc.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
  {
    id: 72,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772998735/41_epwxr0.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "awareness",
    slogan: "بينهم كيميا"
  },
  {
    id: 73,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772998738/39_mpkdo7.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "awareness",
    slogan: "بينهم كيميا"
  },
  {
    id: 74,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999585/16_bieaot.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "بضمان الجبالي"
  },
  {
    id: 75,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999611/%D8%B1%D9%85%D8%B6%D8%A7%D9%86-4_dsnzwh.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "منور بعروضنا"
  },
  {
    id: 76,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999620/20_vnzez8.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "بضمان الجبالي"
  },
  {
    id: 77,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999621/17_gh2cqb.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "بضمان الجبالي"
  },
  {
    id: 78,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999624/18_t81l5a.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "بضمان الجبالي"
  },
  {
    id: 79,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999625/19_zree5k.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "بضمان الجبالي"
  },
  {
    id: 80,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999630/%D8%B1%D9%85%D8%B6%D8%A7%D9%86-5_mx4maj.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "منور بعروضنا"
  },
  {
    id: 81,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1772999632/%D8%B1%D9%85%D8%B6%D8%A7%D9%86-6_pipayg.png",
    aspect: "square",
    brandId: "elgebaly-pharmacy",
    category: "sales",
    slogan: "منور بعروضنا"
  },
  {
    id: 82,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000468/21_hvy7bt.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
    slogan: "اسهل اسرع اوفر"
  },
  {
    id: 83,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000469/24_bujlus.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
    slogan: "اسهل اسرع اوفر"
  },
  {
    id: 84,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000472/22_dn3bv4.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
    slogan: "اسهل اسرع اوفر"
  },
  {
    id: 85,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000469/26_1_vea98t.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
    slogan: "اسهل اسرع اوفر"
  },
  {
    id: 86,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000477/16_1_jnc14w.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
    slogan: "جولدن ستايل"
  },
  {
    id: 87,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000473/25_zxt6ax.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
    slogan: "اسهل اسرع اوفر"
  },
  {
    id: 88,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773000477/26_bt0ioo.png",
    aspect: "square",
    brandId: "golden-tech",
    category: "sales",
  },
  {
    id: 89,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593785/2_zpztcg.jpg",
    aspect: "square",
    brandId: "flash-tech",
    category: "engagement",
  },
  {
    id: 90,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593784/1_gckgoo.jpg",
    aspect: "square",
    brandId: "flash-tech",
    category: "engagement",
  },
  {
    id: 91,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773001360/%D8%A7%D8%AE%D8%B1-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D9%83%D8%A7%D9%86-%D9%83%D8%A7%D9%85_vc6ieo.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "سنة جديدة تحدي جديد"
  },
  {
    id: 92,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773001362/%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A-1_iuy5ok.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "سنة جديدة تحدي جديد"
  },
  {
    id: 93,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773001362/%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A-2_tbyd5w.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "سنة جديدة تحدي جديد"
  },
  {
    id: 94,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773001366/%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A-3_pwda3a.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "سنة جديدة تحدي جديد"
  },
  {
    id: 95,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773001357/%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A-4_soayke.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "سنة جديدة تحدي جديد"
  },
  {
    id: 96,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003000/%D8%A7%D8%B3%D8%A3%D9%84-face-insta-1_cg5zwm.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 97,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003011/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-1_or9kwo.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 98,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003014/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-5_zcuela.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 99,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003014/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-6_rvabuj.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 100,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003014/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-4_mvwuoc.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 101,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003015/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-3_rupao3.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 102,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003018/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-2_lmwxql.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 103,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003020/%D8%A7%D9%84%D8%A7%D8%AC%D8%A7%D8%A8%D9%87-face-insta-tik-7_mikq6q.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "استشارة في السريع"
  },
  {
    id: 104,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003374/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-1_atadul.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 105,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003399/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-1-1_bu3e0b.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 106,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003407/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-2-2_vaxwvs.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 107,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003420/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-3_obxubz.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 108,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003413/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-3-1_ujcojk.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 109,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003420/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-3-2_q6rmcf.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 110,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003423/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-2_ovcygp.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 111,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003423/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-2-1_ojatt3.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
  {
    id: 112,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773003421/%D9%85%D8%B9%D8%A7%D9%86%D8%A7-%D9%88%D9%84%D8%A7-%D8%B9%D9%84%D9%8A%D9%86%D8%A7-1-2_zync5z.png",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "engagement",
    slogan: "معانا ولا علينا"
  },
    {
    id: 113,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593403/3_p8znqf.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 114,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593405/4_tqqhpo.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 115,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593407/5_yyn7j8.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 116,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593409/6_gd8fzp.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 117,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593412/7_x4mesa.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 118,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593414/8_b24hvu.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 119,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593420/9_ah2rdo.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 120,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593426/10_figwuh.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
    {
    id: 121,
    src: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773593438/11_zldkz4.jpg",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
];

// ─────────────────────────────────────
//  VIDEOS  ← ✏️ أضف/عدّل brandId لكل فيديو
// ─────────────────────────────────────
export const VIDEOS: VideoItem[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772845747/AQMkAE-9ggK2MamWwgHNyCl0uZNlo7T_sqbdn-sbjkKskGan_vdrHPtP24wdNFkPLO7AsJM1k7AZVjeF8qVuRjiKpDdpn8qi5VCITuKdhhk8oQ_itdkbh.mp4",
    aspect: "reel",
    category: "bromo",
  },
  // {
  //   id: 2,
  //   src: "https://agenz.site/_assets/video/e7969d27e0e3d10be2e36b427d68da99.mp4",
  //   aspect: "reel",
  //   category: "Branding",
  // },
  {
    id: 3,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772843708/%D9%81%D8%B1%D8%B9_%D9%83%D9%81%D8%B1%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_-_%D8%A7%D9%83%D8%AA%D8%B4%D9%81%D9%8A_%D8%A7%D9%84%D8%A2%D9%86_%D9%83%D9%88%D9%84%D9%8A%D9%83%D8%B4%D9%86_%D8%A7%D9%84%D8%A3%D8%AD%D8%B0%D9%8A%D8%A9_%D9%88%D8%A7%D9%84%D8%AD%D9%82%D8%A7%D8%A6%D8%A8_%D8%A7%D9%84%D8%A3%D9%83%D8%AB%D8%B1_%D9%81%D8%AE%D8%A7%D9%85%D8%A9_%D8%B9%D9%84%D9%89_%D8%A7%D9%84%D8%A5%D8%B7%D9%84%D8%A7%D9%82_%D9%85%D9%86_Top_Shoes_-_%D8%B9%D9%86%D8%A7_m2czqp.mp4",
    aspect: "reel",
    category: "bromo",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846152/AQMMKl9vc0rPUEV0ND2HjUgD6eJrjwzEFtFECP-6pFNLEcGgknDHW7X3Yi4h9gkHS3ZWM3ugyhUW8NuphSeUJnw2E5xRDplmi-Vq8_-blI5heQ_sbflm0.mp4",
    aspect: "reel",
    category: "UGC",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772845963/AQMA2jvzWm3EiJ900NkYzLPe55rNIvJHFJTfw1Ww9SgzwLKLSTuIdABtyzo4p7ETAkTOHnHy8Wd-sGaPLW1QcYEpSvb0uBUu3weYkDuvx5WJTg_rh1b7x.mp4",
    aspect: "reel",
    category: "UGC",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846292/AQOZMbgBx_AFVAYgLir-oxagkuaOn8wv7kWR97__Jex_jtaJoUW8g4sZ_xwEteU0gcL2Hp9oMedREGAVghQ3IZytWo83dlnonZD7DP5ZwGq9CQ_hyekaw.mp4",
    aspect: "reel",
    category: "Branding",
  },
  {
    id: 11,
    src: "https://agenz.site/_assets/video/f50dfd593f22bbb6ff6500592da3a5a7.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 12,
    src: "https://agenz.site/_assets/video/12239357ada69ad5faffc4f68fcc4a5a.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846686/AQPw6Wc3C6TYPlWOzHgUXK1q15wbp3vgDB8EUq_vBwbighaogc9vXN8Ke41_jmNsQaHwo-CTyzuNiiqBDkLiF2OHPhNmvJ3JxO7YNMKg2hwKNw_sxfosi.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846821/s_olyw4v.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846915/w_rffye2.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846596/AQNiGx814GBfIdXOnM54pFiWf7WWrh5MYJ-OLHDQDs938y_fq3G-oP2ogYm36rlQKyp5UbzfGkQCLn4QmG6W3T131KXUl12JiwB1U8G-P-irTA_ioo7pe.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772846520/AQPynn2wYQwQdsx7xRPhyHDuznBLhEG7hPEG59osRcEkdKyeL10GvEm7PM0EmTkfGqxbNx2CP9f_CLOkEtoEW6tC1E4a67UgyRAKezl9oq3Flg_f9a3xn.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772847210/1_luqc6t.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772847226/6_rnxut4.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772847226/4_estwba.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772847270/3_gourr4.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772847278/5_mhqysm.mp4",
    aspect: "reel",
    category: "bromo",
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1772847278/2_swfl2y.mp4",
    aspect: "reel",
    category: "Teaser",
  },
  
  {
    id: 24,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773006910/AQOAG6K7kV-upijBn2_pH5GLkGKZ3Q-mccQTSYV5Yw9NdlHvC82pbBfK_8pJ9ePPFv1F_9rXqD8gO7nqTQmchxWTOip773Z8SeI43SmMr_K3XQ_aeppbr.mp4",
    aspect: "reel",
    category: "bromo",
  },
  {
    id: 25,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773007192/AQMx7Hvdjgn0a8NmHsWhOxlTuzElyW1icJ-Xqs9G34_lQ4iLqQH8WzAFPc5wRm_hfBt3vb_pCm0W82u0DTQUCegoi_gCSPUzdcLmNBDpVeHB-A_yrmmxx.mp4",
    aspect: "reel",
    category: "bromo",
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773007384/AQOgJ41YCYk-AErqO39VGcT_6Vb_kK0Jbw0IyULCxZaJub4QkQTk0axPLdrTMifS1LzZu8hKC8AmMZ6rzZlpQIt6ZBP6f9DIU0kYrM996A_dzolix.mp4",
    aspect: "reel",
    category: "Teaser",
  },
  {
    id: 27,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773007553/AQM9LhGguaYIwTp28IqGMMWmkbBQN-0cXhqFNy78u7kdJzAW1Lun6SBWn3iLCHy_pRbWqAFX5w-n8OTLAQ2tt7Sean_I9CzkmV_OTJa-RQ_mkr8cx.mp4",
    aspect: "reel",
    category: "Teaser",
  },
  {
    id: 28,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773007840/AQMQ7SdVwtsDkWoYsEWpNUxb9XJBpT80qksNhBMejaAu0TG8TLfyEmEQnRUqunlJ3vZyplGzHIe3y2Vda3u9gF_Wfd0TbGpk8EqaF1oW1Q_u5xfa8.mp4",
    aspect: "reel",
    category: "UGC",
  },
  {
    id: 29,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773007943/AQP4PZv4WcHSsVIkAKTbteOL17mlI51_DWBS2-x2Sxw1QfFhwg_tBYuiSyzQwJ6eB160jodBPaBhfCizUsRYVCyi-lTeQWvc2JUEfqm5AA_bemhti.mp4",
    aspect: "reel",
    category: "UGC",
  },
  {
    id: 30,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008091/AQNq4GQqBAIQtyngRybzxLwuO6wSTT2wDMON5hIoSkP2gl4mbf7Fp3BLigQ2lj32Ifv9faU4IEB2uTrtORv4ub1okGiVUktzUPxyEsGK6A_qajprm.mp4",
    aspect: "reel",
    category: "UGC",
  },
  {
    id: 31,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008184/AQPPc-KyjW-CGkRDhTcS6ugqvLb4JeNw8Th7JIFEhpW76N2dsoumFgRcqWVKHfPykjLyviRv0m1Wtivi-kykH6simB1zNL0WMKpLOIZTtA_v5rqnn.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 32,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008346/AQOY5ZR7Q8goCBoEnXP9vZAVNHdpmZFZ1iYRAQ__NFz9xbb0964U4quXlVoCDP27pT7EVNgSI_6Ee8wCvvgVIvTNLzlVw7d50ib6OmkKDQ_wgwocr.mp4",
    aspect: "reel",
    category: "Motion",
  },
  {
    id: 33,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008427/AQPLJg61iblx09tuhh77F_RNMmXUOgxnhUF9aOFJ20zUbC6LHw2i0doo1k4s9Bid1fYBvjRx-iUUex84A5PCa-8SOy4nHx78qgloK12eMg_vazq31.mp4",
    aspect: "reel",
    category: "Motion",
  },
  {
    id: 34,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008705/AQOD8T_tS3qeKserdQO5YXNIlejmiq24F1QtJWMNHJc7xVhrCy3o65svd7bLW8oCGpgR7acn6-aDv5UBWsIS5SSHRScOMiWd71ork2EKQA_rnxiif.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 35,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008920/AQN3FRCBKD8yomPUogOCmehb7qbHdxKCaMbzlZC2aMpZ8HPc64ACcENuLvgZXQ-lRSb1Dat7AabVqkdovoPzeUu_1HcVls7SnMWuZ9hMcQ_t2iqf9.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 36,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773008924/AQP5uet5KHSpWYU9W4zgWvYa0Iz_CKYR5I1NxHsiQMD2SuvX3NpMgqXE20mrbCo7EVNQMs9tLpuF3AjXT9Tws5unpRPlyoi0eDYdGpucVg_cqjvmf.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 37,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773020916/AQMFOaMng_o_VkFsv-Vjtc_CWsOmhW_2X2LevaekDoPOVAaFBcQWpIO_frc8G-SlB-gWY-7G-Bz8hIlKtkIagMEA0-3szWexkR1ij23DoA_cglumq.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 38,
    src: "https://www.youtube.com/embed/aP5weEGl8i4",
    aspect: "landscape",
    category: "Podcast",
  },
  {
    id: 39,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078348/AQNojBPu34oVFApeDB2BfjccUyHRnEZnkTOIUSl_OMC01uOtw_04VbyjrVggWIMOaGLBz54lu_gT3lD96yCK7Dt-vgw67AtgjtiHE3Ysug_be5vo5.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 40,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078350/AQP2_QmEyOZhOdUscQfxzfHCnOZGl64Q7L6fEQ2VOVbBJNHcKazigYN0YXNInSmiSDY6p23f3ypcLZi-416txYgc9IRh0d2-bZ9LsGEEag_gysswi.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 41,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078351/AQP4lJAtRdP2WXa9wDuDDvUIVWyNd_YwhXNplnXyiqKyz2EVq39Xp4btSWYHb3AQrYU7tbcQZXu09WsStx5P6agCjd9DArmOQPaY1l7iCQ_ulooxi.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 42,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078353/AQNXxEwTgmuqV_kpzcLCrHhDWMeZwcGtm7h88K_nIwy4YVmY9SaEIYJW3V6a76q9jbFpoPkq0C5-144VKsjrov2W9RzYoWjcAfB0q5eh4g_wiqeam.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 43,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078631/55_mnneif.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 44,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078650/57_aaom8a.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 45,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078650/56_woursz.mp4",
    aspect: "reel",
    category: "Voice Over",
  },
  {
    id: 46,
    src: "https://res.cloudinary.com/dd3skvgyv/video/upload/v1773078776/580_qvwrub.mp4",
    aspect: "reel",
    category: "bromo",
  },
  {
    id: 6,
    src: "https://agenz.site/_assets/video/8818ccaee8639b1a43fa3cf07436b0e3.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 7,
    src: "https://agenz.site/_assets/video/ca3134cad0b7cdd60dcd49068c14634b.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 8,
    src: "https://agenz.site/_assets/video/928044ac59bde76c0901a1d5bcbd18c7.mp4",
    aspect: "reel",
    category: "Reels",
  },
  {
    id: 9,
    src: "https://agenz.site/_assets/video/05b845061ce8e821d0fff4cbed553977.mp4",
    aspect: "reel",
    category: "Reels",
  },
];

// ─────────────────────────────────────
//  STATS
// ─────────────────────────────────────
export const STATS = [
  {
    value: "6+",
    labelKey: "about.stat_years_label",
    descKey: "about.stat_years_desc",
  },
  {
    value: "62+",
    labelKey: "about.stat_clients_label",
    descKey: "about.stat_clients_desc",
  },
  {
    value: "200+",
    labelKey: "about.stat_projects_label",
    descKey: "about.stat_projects_desc",
  },
  {
    value: "120+",
    labelKey: "about.stat_social_label",
    descKey: "about.stat_social_desc",
  },
  {
    value: "20k+",
    labelKey: "about.stat_followers_label",
    descKey: "about.stat_followers_desc",
  },
];

// ─────────────────────────────────────
//  CERTIFICATIONS
// ─────────────────────────────────────
export const CERTIFICATIONS = [
  {
    label: "ELGebaly Pharmacy",
    category: "pharmacy",
    img: "https://agenz.site/_assets/media/ccfeeb9aeb0c5d56693af04ca4dce8ac.png",
    href: "https://www.facebook.com/elgebalypharmacy/?locale=ar_AR",
  },
  {
    label: "Pegasus Perfumes",
    category: "perfumes",
    img: "https://agenz.site/_assets/media/c5c8b7003979dc54f0169e8478d16de0.png",
    href: "https://www.facebook.com/pegasusperfumesEG",
  },
  {
    label: "Nux Up Visual Production",
    category: "other",
    img: "https://agenz.site/_assets/media/88a26607d1cf0ea26ecc83098d1cf1ef.png",
    href: "https://www.facebook.com/profile.php?id=61566979797955&__tn__=-UC*F",
  },
  {
    label: "Shoaib Designs",
    category: "interior",
    img: "https://agenz.site/_assets/media/9fb268ab6df955bf599887b124f56d67.png",
    href: "https://www.facebook.com/ShoaibDesigns?__tn__=-UC*F",
  },
  {
    label: "Top Shoes",
    category: "clothes",
    img: "https://agenz.site/_assets/media/d28386fa1d8ae499b7a9adec98d8dd91.png",
    href: "https://www.facebook.com/storetopshoes1?__tn__=-UC*F",
  },
  {
    label: "Magdy Onsy",
    category: "pharmacy",
    img: "https://agenz.site/_assets/media/321b0d2f4056b12091260faf5ee8d0de.png",
  },
  {
    label: "Tmr Henna",
    category: "perfumes",
    img: "https://agenz.site/_assets/media/a0f8a9e2c8f3635c301fd2c2a4c14db3.png",
    href: "https://www.facebook.com/tmrhenna55/",
  },
  {
    label: "Rouh Medical Center",
    category: "medical",
    img: "https://agenz.site/_assets/media/04658f1875c69a4e899850a91f7c2630.png",
    href: "https://www.facebook.com/ROUH.DC/",
  },
  {
    label: "Kafr ElSheikh News",
    category: "other",
    img: "https://agenz.site/_assets/media/5889a8973d51f332fbd8a97de4be78d1.png",
  },
  {
    label: "Alpha modern pharmacies",
    category: "pharmacy",
    img: "https://agenz.site/_assets/media/a14ef790c374aa7af2c1e0a35c5ab486.png",
    href: "https://www.facebook.com/modern.pharmacy.kfs?__tn__=-UC*F",
  },
  {
    label: "Dr. Ahmed Essam Zidan",
    category: "medical",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588772/1_l7ryir.jpg",
    href: "https://www.facebook.com/Dr.AhmedZidan.Dentist/",
  },
  {
    label: "Dr. yassmin Elezaby",
    category: "medical",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588773/2_uxqe7k.jpg",
    href: "https://www.facebook.com/dr.yasmeen.Elezaby.derma/",
  },
  {
    label: "Dr Hussain Abo Saleh",
    category: "medical",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588774/3_hkiysa.jpg",
    href: "https://www.facebook.com/p/Dr-Hussain-Abo-Saleh-61578988993906/",
  },
  {
    label: "Emad Eldin Pharmacy",
    category: "pharmacy",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588773/4_vpm5vp.jpg",
  },
  {
    label: "Dr.Mohamed Wasef Aglan",
    category: "medical",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588774/5_v7kkri.jpg",
    href: "https://www.facebook.com/profile.php?id=61574456515820",
  },
  {
    label: "Osama Arab Pharmacy",
    category: "pharmacy",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588780/6_fwtuf8.jpg",
    href: "https://www.facebook.com/Dr.Osama.Arab/",
  },
  {
    label: "EleGance",
    category: "interior",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588776/7_ekxwsy.jpg",
  },
  {
    label: "Golden Tech",
    category: "laptops",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588779/8_mqwu6j.jpg",
    href: "https://www.facebook.com/profile.php?id=61569935036914&__tn__=-UC*F",
  },
  {
    label: "FlasH Tech",
    category: "laptops",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588781/9_v2viuw.png",
    href: "https://www.facebook.com/flashtech2010/",
  },
  {
    label: "TZ-Technology Zone",
    category: "laptops",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588780/10_prnbyc.jpg",
    href: "https://www.facebook.com/TechnologyZoneTZ/",
  },
  {
    label: "Ultra 9 Laptop",
    category: "laptops",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588780/11_lb1z44.jpg",
    href: "https://www.facebook.com/ultra9laptop/",
  },
  {
    label: "Creativity for Aluminum Systems",
    category: "kitchens",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588782/12_qcagbg.jpg",
    href: "https://www.facebook.com/creativityforaluminum/",
  },
  {
    label: "Salasil Alhudaa",
    category: "kitchens",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588784/13_rjhspb.jpg",
    href: "https://www.facebook.com/profile.php?id=61578185626955#",
  },
  {
    label: "khayt harir mafrushat",
    category: "furniture",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588785/14_zsoxi4.jpg",
    href: "https://www.facebook.com/khaytharirmafrushat",
  },
  {
    label: "Alsaad Mafrushat",
    category: "furniture",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588786/15_tsnsuk.jpg",
    href: "https://www.facebook.com/p/%D8%A7%D9%84%D8%B3%D8%B9%D8%AF-%D9%84%D9%84%D9%85%D9%81%D8%B1%D9%88%D8%B4%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9-61554729456952/",
  },
  {
    label: "Abaya Asmaa",
    category: "clothes",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588788/16_v0gbte.jpg",
    href: "https://www.facebook.com/abayaasmaa?locale=ar_AR",
  },
  {
    label: "TIBA New House",
    category: "kitchens",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588789/17_cnexxw.jpg",  href: "https://www.facebook.com/vertex2027",
  },
  {
    label: "Al-amal Group",
    category: "other",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588790/18_p7tbvm.jpg",
  },
  {
    label: "New HOUSE Aluminum and UPVC",
    category: "kitchens",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588795/19_zkwy6t.jpg",
    href: "https://www.facebook.com/NewHouseUPVC/",
  },
  {
    label: "Alhoda Lab",
    category: "medical",
    img: "https://res.cloudinary.com/dd3skvgyv/image/upload/v1773588792/20_ptoxwl.jpg",
    href: "https://www.facebook.com/people/%D9%85%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D9%80%D9%87%D9%80%D8%AF%D9%8A-%D9%84%D9%84%D8%AA%D8%AD%D8%A7%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9_-AlHoda-Lab/100065210341313/",
  },
];

// ─────────────────────────────────────
//  SERVICES
// ─────────────────────────────────────
export const SERVICES = [
  {
    number: "01",
    title: "ecommerce.title",
    description: "ecommerce.description",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    href: "ecommerce-solutions",
    features: [
      "ecommerce.features.0",
      "ecommerce.features.1",
      "ecommerce.features.2",
      "ecommerce.features.3",
      "ecommerce.features.4",
    ],
  },
  {
    number: "02",
    title: "social_media.title",
    description: "social_media.intro",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    href: "social-media-marketing",
    features: [
      "social_media.features.0",
      "social_media.features.1",
      "social_media.features.2",
      "social_media.features.3",
    ],
  },
  {
    number: "03",
    title: "web_design.title",
    description: "web_design.intro",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    href: "web-design-development",
    features: [
      "web_design.features.0",
      "web_design.features.1",
      "web_design.features.2",
      "web_design.features.3",
      "web_design.features.4",
      "web_design.features.5",
    ],
  },
  {
    number: "04",
    title: "media_buying.title",
    description: "media_buying.paragraphs.0",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    href: "digital-media-buying",
    features: [
      "media_buying.features.0",
      "media_buying.features.1",
      "media_buying.features.2",
      "media_buying.features.3",
    ],
  },
  {
    number: "05",
    title: "branding.title",
    description: "branding.paragraphs.0",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
    href: "branding",
    features: [
      "branding.features.0",
      "branding.features.1",
      "branding.features.2",
      "branding.features.3",
      "branding.features.4",
      "branding.features.5",
    ],
  },
  {
    number: "06",
    title: "media_production.title",
    description: "media_production.paragraphs.0",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    href: "media-production",
    features: [
      "media_production.features.0",
      "media_production.features.1",
      "media_production.features.2",
      "media_production.features.3",
      "media_production.features.4",
    ],
  },
];
// ─────────────────────────────────────
//  BRANDING_IMAGES ← ✏️ صور خاصة بتاب Branding فقط
//  هتظهر في Branding tab بس، مش في Images tab
// ─────────────────────────────────────
export const BRANDING_IMAGES: BrandingItem[] = [
  {
    id: 10001,
    src: "/assets/1.jpeg",
    aspect: "square",
    brandId: "shoaib-designs",
    category: "branding",
  },
  {
    id: 10002,
    src: "../assets/2.jpeg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 10003,
    src: "../assets/3.jpeg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 10004,
    src: "../assets/4.jpeg",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 10005,
    src: "../assets/5.jpeg",
    aspect: "square",
    brandId: "nuxup",
    category: "branding",
  },
  {
    id: 10006,
    src: "../assets/6.jpeg",
    aspect: "square",
    brandId: "nuxup",
    category: "branding",
  },
];
