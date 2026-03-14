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
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/504382555_122104417298936094_5897152326465305964_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGcwVm4db0o7r6uwkFjwLj1bScyy4YqaM5tJzLLhipozvhSGWz99fVYZDmdgIDA-POaziWDiTXyxznW92i_YnIM&_nc_ohc=RLWolq9JnJ0Q7kNvwGFhnCh&_nc_oc=AdldFkHzZSy3a-E_wkvx-Q_cEaSNIHbiBt4-iWmvPID_NofT5RNXkh9k6LAy3y9nQyc&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=aOQ-K2Iq2Y05le-omPL70g&_nc_ss=8&oh=00_AfzWd8Q0gwdg0c3XcgfX7ng4cP0x_yXlHUWZfRsHZMZSTg&oe=69B3752D",
    category: ["branding"],
  },
  {
    id: "salasil-alhudaa",
    name: "Salasil Alhudaa",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/540145103_122125910414939520_1932052322910511617_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFLQ6McWO2rwPKDj_NBWL_5Bdq_Z2c_KOwF2r9nZz8o7CeFX_X0jCbpCzTKpSbpBi8eM5fKiU1JYaVE6v6FerIO&_nc_ohc=kiHU4e-xdUMQ7kNvwF_XAmK&_nc_oc=AdlTapGtt1K2kkALyNM5RFCLDi9HcTq1HifHONPeICeBKF9dAScKWeJ53gSA4fHRHdI&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=RjXnOBvuhyMkYqwZC0hTAw&_nc_ss=8&oh=00_AfywSrQ4anRTc7kuJX8CtS5e6NzzArccAELjHAkQRhlfQg&oe=69B3723D",
    category: ["branding"],
  },
  {
    id: "dr-ahmed-essam-zidan",
    name: "Dr. Ahmed Essam Zidan",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/439866588_10159258021556548_6003574618929294597_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGzr0RgkPh3RG1wT62s5G1Wo81olXVEV06jzWiVdURXTjY1RxBR9gtrD6ZGuCAcsOg9ftFmqAi9U4TD5DI9gaMj&_nc_ohc=NBZTpTyQ954Q7kNvwHDCG03&_nc_oc=Adk5UkU3rY52On1-Q3x3hYkCBv1bP1-_dKT82okfA0L-X8C2MYPWnqrEWJVS5vOy-VY&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=_43zVLGtDmkrW8MVO0fG0g&_nc_ss=8&oh=00_Afx9IzsNU6GgSHHgYDcgGrCs_-otMWBJcrfsUGBzqt6uAg&oe=69B13F79",
    category: ["awareness", "sales"],
    slogans: {
      sales: ["حكايات من العيادة"],
      awareness: ["حالة خطر", "خط أحمر"],
    },
  },
  {
    id: "dr-hussain-abo-saleh",
    name: "Dr Hussain Abo Saleh",
    logo: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/637769859_122148957710966299_73712703970723080_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGztR1jRYOWS4CFH4V4BKgKpN9RjXTn6sik31GNdOfqyIVkh_rXV3tXJzVtCGq2L0AAhRHDk3zta_q3WKMsZyXH&_nc_ohc=EAYTo14BTMsQ7kNvwH-GwrA&_nc_oc=Adnyxj8qYhIqZspRrFEqdiYhdMtWSn3NSMK0PgnOitopOvSBM64Hq8pOb576cF9nwKo&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=PO0z_P2gWCflV2aEwI1yRg&_nc_ss=8&oh=00_AfyxMv0C4OyXMO6tABk9R-v_niNBDTllz4IqR1EvkPv4iw&oe=69B13D99",
    category: ["awareness", "engagement"],
    slogans: {
      awareness: ["العشر وصايا"],
      engagement: ["سنة جديدة تحدي جديد", "استشارة في السريع", "معانا ولا علينا"],
    },
  },
  {
    id: "tz-technology-zone",
    name: "TZ-Technology Zone",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/545634355_122128297784931237_2529149437608491258_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEe3_q13wTw5pFLR681hUERq5M1zN0OYOCrkzXM3Q5g4Hp5Saln1W5wBKbdv-pYTnF-Z_Xwb8CptgRhVAoFZ1C0&_nc_ohc=epLViSegPjQQ7kNvwGB4YzX&_nc_oc=Adm9qGNCnrCvLUZ5mVb7AVyvTKl-tf397qEAO7I2SbEUl0Cf_LvW-BpbfxiZQjZfKQA&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=tbSnmnk0vnH1kDOOQFuvhw&_nc_ss=8&oh=00_Afx_5UFuYyd7sIAP6N-M4J8da0cwbzeOCROZIqYbtwSmMA&oe=69B147B7",
    category: ["awareness"],
  },
  {
    id: "dr-mohamed-wasef-aglan",
    name: "Dr.Mohamed Wasef Aglan",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484973573_122095261304815217_4102978367698759177_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeF1kI59GdeiECUAI_kTb8y8HAQmCgPWSEkcBCYKA9ZISXfqi0jGxPM3hzGZQH6uzsND0tubRCHzej3WnCacWYwp&_nc_ohc=_N8--7PdBN8Q7kNvwGrmInu&_nc_oc=AdmnaSq2oHNOsapnlyP4E-avY3mAhl3wZ-VQXd62SdseQCk0SL6j_ZDmUeNAMyyFSsk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=lYSKhsgUAxhndL2XZnWYSg&_nc_ss=8&oh=00_AfyLqq5jalw74GQkX9NO7iB8CFRqFwSykw0X8PcrKMLsqw&oe=69B15034",
    category: ["awareness"],
    slogans: {
      awareness: ["ما وراء التقويم"],
    },
  },
  {
    id: "tiba-new-house",
    name: "TIBA New House",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/581750468_838775231868850_7678836905119777213_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGPiUkPvrpdm-JMtjNKo5c2XK8vStfr-4Rcry9K1-v7hB42vsT-YsSX8XtnJZ9nhrzk8G8wWGohgvzRxT-VmaAP&_nc_ohc=hueAbjznwOkQ7kNvwGvHYJn&_nc_oc=Adk-lTJgG9m0rJnv2cquv1R1FYSx4WUbt5PVCQmXk9AzwgG6PIdiLNy88kleuxawgvk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=IY6brYFpu57xLGCkpExQ8g&_nc_ss=8&oh=00_AfyOwjBxRXhJK51t3EAeRFGnV7kU5kwTQ4JQykb3kjrqEw&oe=69B167F3",
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
    logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-1/447067400_943508674453079_785018646365556276_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeF6CWUgKzMBOgy2W46ODP2tc63_oh5QB8hzrf-iHlAHyHf25TuFehhsekcxOPwLXskMWGjUDoD78uP1p-UWZmBw&_nc_ohc=GIQ-1cfU7iIQ7kNvwEatkWH&_nc_oc=Adm9pjbD8n6KQtGvfoZX0FLx6pz3BSFBIFrmNUihlbHhHAqBPrzb7WST304RVYCtCLY&_nc_zt=24&_nc_ht=scontent.fcai19-4.fna&_nc_gid=6uKMBZgrazMpA0FpCW0rsQ&_nc_ss=8&oh=00_AfyeFyQhAdF9rO-XQoqnNd0JMzDaPGi2bOPnnCkB8d52mw&oe=69B38EB3",
    category: ["sales"],
  },
  {
    id: "golden-tech",
    name: "Golden Tech",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/634953814_122154191108664501_2461587214244218392_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEcxtWiJxGzhCncdnJR0jE-H9h9td0OATAf2H213Q4BMH3hUyZJCSjgzZP5HGFOdqUyKWkUo1LYZgUFNMQ8_h7j&_nc_ohc=gB7Z1Sn9hE0Q7kNvwE7Xxj4&_nc_oc=AdlIX6kFRcCMvVkBaagaMPwzMQHFXqnpqVznLMS9BBf9D6WFM2CBD9ylhHP430jIWnw&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=s98w_1u5Sl3vjhiirxyUmQ&_nc_ss=8&oh=00_Afz8jIyeYEWLvoebemMbSwdz4Sd3Fhf9G6pt0gdmN3SCbg&oe=69B16965",
    category: ["sales"],
    slogans: {
      sales: ["جولدن ستايل", "اسهل اسرع اوفر"],
      awareness: ["بينهم كيميا"],
    },
  },
  {
    id: "flash-tech",
    name: "Flash Tech",
    logo: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/301174993_457692303039246_4196782548958421927_n.png?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEUtTlMJVPqA9GfHH-PqnEPYFYm2jLoC6hgVibaMugLqGhzKdCsqxtBAgxX42EG8l4DoW7lv1ckt-INaJgjq1L2&_nc_ohc=Lh2A22XG60oQ7kNvwFEDofB&_nc_oc=AdmQ-6Lvw3jDvhGom8aOBSb-gX9KpgdRTwiBMpOzU68ysc1W74SQsPrcdMN2jgGo8i0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=UgyCjp5sme7BUUsLtssp2w&_nc_ss=8&oh=00_Afw3CoN7EKPFdObfLzaMnHpfFsvSL8sBBPGfq9_WBvEeaw&oe=69B162F5",
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
  // {
  //   id: 1,
  //   src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/527997072_756953493748360_2534168410072234841_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFDpWJAtegxVb7O4dc_26b1MZav21IhgEIxlq_bUiGAQuorKjYBXL49Vd7Pcl_PG-Gs3xKVBqYDuUkjkPK53TZ7&_nc_ohc=8lDcLxYr3IIQ7kNvwHYzu-5&_nc_oc=AdlfJiw2Ag2gYUuFZRRO342AXNVWBJtMlbcQwJ5N_1P2KSSep74MjAOsd8GVzyw5Ahw&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=FpOBwViEw7uFf4MRNLH_oA&_nc_ss=8&oh=00_Afx3Cdpn8pO4qZsruwzkJ_4wwnnRg5EUNL8RRr_5LsMpFA&oe=69B12E57",
  //   aspect: "square",
  //   brandId: "top-shoes",
  //   category: "awareness",
  // },
  {
    id: 2,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/588869788_122147565614815217_383930066058588766_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHz1d22AWyEWsEX95X0UiTEwcDeOCaTEWbBwN44JpMRZnelEhR3KPbmdT3B6RuAPDYj7f7DGTtC-njsAKvzomuz&_nc_ohc=AxlHSgGyf7IQ7kNvwHT0GMv&_nc_oc=Adn2LBDme-XSUZ9uwjp_th_gAa-8PTKWRVzfEUoNmF4kCPqeOuApkMui6-9aBJZGMPk&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=JTw2c-EV5MZPO_Ob_CH27g&_nc_ss=8&oh=00_Afybp8qgy0sspLVlcpsy7sM3L4v-nCJYjg1lMHqWjKdgZg&oe=69B14797",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"

  },
  // {
  //   id: 3,
  //   src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/598002525_122150191340909300_1607977319547774639_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEyfJn-wkkEOGmb1uhkehgzSHMCxIagcoJIcwLEhqByginItSIjZ-ZtcahN--g-RiqgMKYNbYNS1THxodiWAzCE&_nc_ohc=bKMZ4ebyTNUQ7kNvwHGX1OG&_nc_oc=AdlILVofpuhOF7xKASN8x9bRIPv9Dpi6cCkS_ZkmjU4lLj5VdRHZOeoiZbKdBv7mSbw&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=AWwdvpt0Yto6VFi3kX7jRQ&_nc_ss=8&oh=00_AfyBgk24QAP9D32dqhWvWCcrugoUkUgbMpARLsHgckvTKQ&oe=69B14D17",
  //   aspect: "square",
  //   brandId: "elgebaly-pharmacy",
  //   category: "awareness",
  // },
  // {
  //   id: 4,
  //   src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/595670136_1310555567752911_4110406625796415830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFNtHPDTXdW7Nj-NpwZCr7lxIQpMQ2Sqv3EhCkxDZKq_e5Nok0cLbEARgVxQZzwueK2NIzomdcDvJ4pagRwrfGW&_nc_ohc=Xa83IxmFT4IQ7kNvwHm9tJE&_nc_oc=AdmIkOqLVbWoxXys26B3dqpRjkXyN2XIl9wOxAj3VNpykQ8PwWnGJbCDG7wMnx29LT4&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=PIPwgGc8_zMn04OMCo8ZZQ&_nc_ss=8&oh=00_AfxKMJNaj8mPxX2tGJUU5fiG7x6fif0mfkZ6CjDE8yZipw&oe=69B148AB",
  //   aspect: "square",
  //   brandId: "elgebaly-pharmacy",
  //   category: "awareness",
  // },
  {
    id: 5,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/571807653_122140661612939520_2657159993884686570_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFzN8GhgXqT61rSGaoDvGKhf_9rpWdPHOl__2ulZ08c6cxVQrmzCkwQcPlmbDfnNm9RQcHb_iSmWKx_DJDWBTvQ&_nc_ohc=E_Eh7J0a5bAQ7kNvwGhYwBc&_nc_oc=AdnlNjmpReHBShEXZAGR1qun7b5OMM8ATf7GYBj7VUOZHXkploZEDkrlt1b50IlGfD8&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=fRHykgSrHm16oKWSYFELRw&_nc_ss=8&oh=00_Afw7nBFmY4DjOlV31km7-baZSzkKOl3l7XN0ADgQTfqXIA&oe=69B15663",
    aspect: "square",
    brandId: "pegasus-perfumes",
    category: "awareness",
  },
  {
    id: 6,
    src: "https://agenz.site/_assets/media/dbffe64b82cf77039e66cf69d6faf688.png",
    aspect: "square",
    brandId: "pegasus-perfumes",
    category: "awareness",
    slogan: "بينهم كيميا"
  },
  {
    id: 7,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/615969870_122234392844282176_1682922987030465930_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGsAobzplOd60St_f8TxrHSJYiUtu6woHYliJS27rCgdhxm69XgOiWybDGXlvU9gCdRTWzFYJV6wY14cqjCoZRf&_nc_ohc=P1YV6ot8tMIQ7kNvwFS6o7X&_nc_oc=AdmM8e017JOjvpqkXitT0jc7w61Iof7nhC67y7R4jXIQVxzpEDEmFNE-6Lf2a2UbxLg&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=RGyVrk6TSRX5uJf63u-85Q&_nc_ss=8&oh=00_AfzEcJdLH6kFfWqc3MVGUranrSDMcHW45idYuuqnGqwFGw&oe=69B135C9",
    aspect: "square",
    brandId: "rouh-medical",
    category: "awareness",
    
  },
  {
    id: 8,
    src: "https://agenz.site/_assets/media/db3a694a7b0266c864c39f2a1be19cdd.png",
    aspect: "square",
    brandId: "rouh-medical",
    category: "awareness",
  },
  {
    id: 9,
    src: "https://agenz.site/_assets/media/ce5d630fc25d768303746ea71af2cd21.png",
    aspect: "square",
    brandId: "kafr-elsheikh-news",
    category: "awareness",
  },
  {
    id: 10,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/583201083_122146576982664501_7993582882477633672_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGX-k-BdPoZDRtsICI_Ktc2EhtNCOB1-N8SG00I4HX439ohMttxZXBSqfDTTehiFyfBlCLjpTkgANHSJaK7_zKh&_nc_ohc=HQoUdyNSF74Q7kNvwH4uKZU&_nc_oc=Adm9Yw6uPdr--XQF2ujHzvaIGwsmjpVHQoxMK8trRCCvTNcKs3_kQwjA-bSG6_GuWM8&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=P8Mw9VDoEMeg8VXUiMFa9w&_nc_ss=8&oh=00_AfwNh62SNwnlLIhspA0KoWPuCCcn0vaTvHFrp_RPmreH4g&oe=69B13BDE",
    aspect: "square",
    brandId: "kafr-elsheikh-news",
    category: "awareness",
  },
  {
    id: 11,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/594075157_122107420107106001_1653618482895819294_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFRrQdJ9_gfgb7oaS6ELSnciOKy_sjyr9SI4rL-yPKv1JxXLkHPnOlEmQkjEtGEuaeqAuAdWDgHe0TDzzrKZ1Jv&_nc_ohc=j95RgrHk36gQ7kNvwEeoI2l&_nc_oc=Adl0UJ86Qk3XY4vBZeMm46OfmwxTFQauHakj-2-pFFtuHZ1xijfSqsiEOzG4vNGQgYs&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=f2P_51sGYnIzTXdcLRIJ2A&_nc_ss=8&oh=00_AfxsaIP-n_k35HCCTl6YKTk8noXhIwg7S8hY_vP13pm_4w&oe=69B14A54",
    aspect: "square",
    brandId: "shoaib-designs",
    category: "awareness",
  },
  {
    id: 12,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/518305266_122106361502936094_5992184708692596362_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFfr3bClpkepInPnktDcYaMevZr-cxOFPB69mv5zE4U8MWAZjqxS58p_VL8RQqy0O_tvVwkGGTp7GPBsdzZFWe-&_nc_ohc=X4Sm1ma5tcMQ7kNvwH2FpUM&_nc_oc=AdlbqsIYcNxie3wLTfUGt_fCZbcMWf5OEPFw89_ItUSrOj88OnlaPPkoPHsMBlOYf1U&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=gaa9zdJ2MPzhC4lVFT1_1g&_nc_ss=8&oh=00_Afwiy-UCPxOJfxQX8BX-y3v7uKv2XH03TKvXEGrgGbrPOA&oe=69B3741A",
    aspect: "square",
    brandId: "line-wear",
    category: "branding",
  },
  {
    id: 13,
    src: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/518306020_122106370112936094_7628645175458242567_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEujxsFlfYzNheNd6GcN3Nz9YagctIla5X1hqBy0iVrlSmkkrrjJ8AOgiXNy-RYU7fCFY-0pKHuz5jOTTG7XEfJ&_nc_ohc=XMIyYeBsauMQ7kNvwGUKR3W&_nc_oc=AdnyHlXiUjBN4OWa3cgVmnjDQ44nAZaMEfQgMaWIzgJkaVKPzKZfuC0VQ2ISFXgyy70&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=b94fJG41RHKgSNJDi4wgiw&_nc_ss=8&oh=00_AfyCjbPKNM7cjapt4irek5q9UVG9R46cwiZCmHbpsLrJcA&oe=69B39084",
    aspect: "square",
    brandId: "line-wear",
    category: "branding",
  },
  {
    id: 14,
    src: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/518111340_122106371888936094_2169365964691593503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH9JnnBZEEPwTOt6gOYml-J3Z1x2v4w6V3dnXHa_jDpXUqCs9IZqX-X88b5tgrOI7XZHxVxgORm2K802l1y4t9H&_nc_ohc=Akxt8ek5qSEQ7kNvwEQjsPc&_nc_oc=Adm4rms4uStwhx5z6gGtsm6DNrtfoBWiarFRvVesdMSGiiM5mG-5vqzMtgsXSsd3LV0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=UKzr5ROul3_b40aWz-l3Dw&_nc_ss=8&oh=00_AfzSweHLhITbwHSckf2pQSBHtMXHT5PKlAfRGBV-7d-V_Q&oe=69B362E6",
    aspect: "square",
    brandId: "line-wear",
    category: "branding",
  },
  {
    id: 15,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/544837862_122128111364939520_7790676766305608085_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH2F_bYDYTaZedVGKMQYetEvBjsLEwVQEO8GOwsTBVAQ5K5K5-bU96HXwNAPB9KJCn8yNLmoQUh3k4DNoR71s5R&_nc_ohc=kDsfvUuUk7kQ7kNvwEXl6Jr&_nc_oc=AdnR2_aqx31u-SnaELSuxn2KkDLv_KDS2jSRZRfjSbCTS2n-RmyUNbbeC9J17QpjXC8&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=KZSZ7cjNrMk7c84nSVlx6A&_nc_ss=8&oh=00_AfyK5u4KGFDsBvRv85XkHbR6-S0ILlTFQw2hMBXLdKceBA&oe=69B367BD",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 16,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/545762577_122128382336939520_7705378987874916759_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGEPO1OQa6MhNpQJkaqlEnuPyxYmAtZMIc_LFiYC1kwh6Y-46YZmT0-6tuO4GswwVkf0lYTK0eOxS42zhKxdiET&_nc_ohc=ADFt-0WIzJoQ7kNvwGmJhf5&_nc_oc=Adny1nFGJpqD8qeotDz71G4BPCLi7qGWFbsC3SWNrOY1XXd53bBWvpkomu8blnJA7cE&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=KjZRXCCLeRQJ3-5GWrDrDQ&_nc_ss=8&oh=00_AfxVD1-2PuIJ8lMIZuK5Cfe4HHWiH_kD4xbj0yued4J7mA&oe=69B36383",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 17,
    src: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/545780076_122128948994939520_1091032909003667746_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH3XPpMPFsAZPCNZOCQIkw6KoMfrd_2w5kqgx-t3_bDmQV5HZNIYpKqgwWFFO1YgMmWrnOXvTPxJ7BORNnhuI51&_nc_ohc=yW4bhAk-CpoQ7kNvwH8JjHI&_nc_oc=AdmretSUeECl9kiFPUQ5He9Gv8KDEhjenedQo9T9TQMU41gOV0HOd6BmghSEKz_AzOs&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=z6xElY_EmVxDkGjpUSQzdw&_nc_ss=8&oh=00_AfwxVhl_83g7GSqepM_AAFSz_Lp5sAkBNMFE8SaEzgCZCw&oe=69B38F75",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 18,
    src: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/540975483_122127153302939520_4802141215107657294_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHBlbpDyrorN17OdqRjamDNJKZaM44Z_SAkplozjhn9IJn7UZodH9wY2tIAkw0mHiFiKgbd45kdPz-LUXOjpmFg&_nc_ohc=1UJMdG2rVosQ7kNvwE14po2&_nc_oc=AdnJNFgbYac1e-D6f9gJu0CMEuSzCJireHXoD53wlTzuBPeMRzNoTFDkvd7dTQDP4vE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=z7Fa5OeDNezp7KD03ftfiQ&_nc_ss=8&oh=00_Afyu9e0oCv30hH6wPc7Wg7wJsbmLYC5HPPaMZKJw6uKbYw&oe=69B366C5",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 19,
    src: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/541523015_122126823728939520_7245955170306646907_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEb64p5uIMhzl6q_t1Vfgfl0mOIYHpy_GHSY4hgenL8YXPOHTU6EnZ6MyHbuWDRdCLOsc8LwfKxT-P1MfrBQA2H&_nc_ohc=oosDgt81i00Q7kNvwFe0q0R&_nc_oc=AdlvZDeLx6S0k6FT4gTANYDPL4Ey1zA6KZY4zeZKO8IKvIwbP9LfMN2TvVkXktCDdG8&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=QTiFWswapG6ky9g3DQu8DA&_nc_ss=8&oh=00_AfxORO1BggsROodSYYAkAw6cW9M3pJUifK1H4dLS4pvQOw&oe=69B3617E",
    aspect: "square",
    brandId: "salasil-alhudaa",
    category: "branding",
  },
  {
    id: 20,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/611182201_122232802538282176_4350554819158735682_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHI7lw6nMt2YsNc-bEnBwiDzFGhUL0okRPMUaFQvSiRE7tzGTWACyJLk3XUa1CDbyuoG1YmbcfatpzmiqduZcBv&_nc_ohc=4-Ue4ONibioQ7kNvwFeF1Ht&_nc_oc=AdlVD21ZsvwabUgxz6ioyUJfCRfbJqePqK4IYcxTsdCFcGp_akPVsCr1ukZney_xKk4&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=KUQHKKmr6RxEnbXYc6Cnww&_nc_ss=8&oh=00_AfxGE_vgPPifeqNzt22_yYGqJZWQYu4Rh6fp35PJf60wOQ&oe=69B37D57",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "حالة خطر"
  },
  {
    id: 21,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/618610707_122234790800282176_1875470576122891858_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEcXRMzVkZMievZucxOzk_RCd6FLDOV_aIJ3oUsM5X9ouocASnq3KY0plDE0YX1uANJXpMeBRS1IA7Ofe73ON5S&_nc_ohc=E2dAQrCWu0UQ7kNvwFd7qu_&_nc_oc=Adl6ZNQujWbyjG1EHIeqAJ9C-vQmRvPJRMIuNAn7tQ-rEPr6BW6Fk4EjikTxbdhXUYc&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=PKACrtcjdjzspghZhaKgMA&_nc_ss=8&oh=00_AfzIQANcxLUTUr_OqyX4ZPyC9CFnJ11tCvvsQdAa6m1ftw&oe=69B391F9",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "حالة خطر"
  },
  {
    id: 22,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/590806637_122228072054282176_1807060350427836150_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGevWAJ-_7IPnTLThImV3OKc3Dg3yjz4ExzcODfKPPgTAqwDolU26jDFfJ73Cfkl541eRcO26gDS_fEOpQzuASh&_nc_ohc=FA5juPDiVugQ7kNvwEF8ITA&_nc_oc=AdnRXprXhOBj8qvw0Nzaj3js4OM7oTLYgyZ90alXXqZJaRwaQb7SncHKyV1QtbRHlZQ&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=d0iaP1Rf47N7MyrpA9bwKg&_nc_ss=8&oh=00_AfyGgGzplpeiFxqzpYr8RKGVy7Ih09uFmXXnyJ06pDnpPQ&oe=69B37F08",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "خط أحمر"
  },
  {
    id: 23,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/594427112_122228661098282176_5228775344290671224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHCgB3UzMEN6HihCr-AZJGvxXfK4fTV1H3Fd8rh9NXUfT0_1JH_9G2T0rttFpzao2KRnWRG8CoLTZNvDlEcNGky&_nc_ohc=O1V8Z-ce4OUQ7kNvwHUh9P7&_nc_oc=Admt7NEKPwE8JsJsYxzsokdMzj8V92XsMNaS1zGbxmqoLcDmK2YxkxraVy-LciJ4Sqk&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=v3F_8S7Wvivz7G-aD-vGMg&_nc_ss=8&oh=00_Afwv0nSwo2TNoA8_v3yhfcnIv1mhxIljYc5RpeEYrb_UDw&oe=69B37B2D",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "awareness",
    slogan: "خط أحمر"
  },
  {
    id: 24,
    src: "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/537336771_122112644390966299_3607074129343784425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEhhEJwPLpjPHecH-uvIFhfMWz5ftF9QtwxbPl-0X1C3CfWe3Lh88mv2-aGuLuPB0i-TWK-duhKLK2dakB5jZ4w&_nc_ohc=D4AZ7DngbagQ7kNvwEQ2I13&_nc_oc=Adkhc-iVq5TKWiVfilWcGdAyyK_SGE5ZmidRdTBl-xeqquFA5walcvun342jaKbNvT4&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=Yb3JsLF8EYAAw5lGuhFyVw&_nc_ss=8&oh=00_Afwg5npbYX51S8d9rXKDhRbB_NXojhSG_pGd1u7oQNTTMg&oe=69B39109",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 25,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/539845846_122113344092966299_8979816882344369081_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHAQctZB627Fz4fXIoEUDzE8klfKWl0Q97ySV8paXRD3gusxFF7f8B3W0c-EnGosTFW88nVxVTRLn5xQx8x-6mh&_nc_ohc=EkN7YlGmjVkQ7kNvwGVPLR5&_nc_oc=AdlUBQTRpk77XpbBcbqZYsVnXZdVWXRChMzqyPhBwYKaGwjkl9kAZm3pkfHONdZAu0Y&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=-GVuQpdf7e6bFRVjjtIQFQ&_nc_ss=8&oh=00_AfzWuJFG2zJ5YwPhN7tBn-acWwEHDETfVj-SKN95GCr-jw&oe=69B36447",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 26,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/539937979_122114003192966299_3989607420105325303_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH7IMgyKYQCJnqwGfhFXk6Odk-gcmPgP3N2T6ByY-A_c5uYli0KCJI5vr5F2WR_ehe6z7KEsLeARAAcF1DHDZUv&_nc_ohc=fQjsj2uxfbEQ7kNvwFZ5a5Q&_nc_oc=AdlNjtdh-MJjZMkw4HYh1O8N-PCpRONydAEakt8PPjQtffU7pmqcnzwRt4H4sBS_zQY&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=wOB3zba3WXCrN6LvC3jVRg&_nc_ss=8&oh=00_Afx9tmjEGvdBbALfM2TYkIt1YgZaWKm5jiX2T-bP55mEsQ&oe=69B3797A",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 27,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/540361334_122115249734966299_8382362192940487455_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFBnMY_pSp9KFkdWlO4q8RVUxnBtIdcW1RTGcG0h1xbVOnm2Aqjxb5PuLL8nxi_fIJL6rmQhtpQLcniC1L9TnXH&_nc_ohc=RDfxg6D_JTMQ7kNvwGztZ2u&_nc_oc=AdlQnK-RbMOSn2WfDNvbNueG_EL0poBj_DBDCWay18IHsn44HR9NdpZlmCeON-4OBfI&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=ewlCY-ghetB0pZDFUfVZkw&_nc_ss=8&oh=00_AfzcBegVQFosAspDbJCU_szOqLcxeje2JrBJ6RXlSeQG0Q&oe=69B38E0A",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 28,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/541996894_122115831902966299_374179553404565123_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLm7DuAZJkye_pYKCSUAY44P0laHb8d2zg_SVodvx3bPR3MxqL5eJZktOln5Aa-JuGEtCH7wwCUmXlC2lLrPDO&_nc_ohc=E1NKWIhi8IsQ7kNvwHfZKmF&_nc_oc=AdkH94p5Fs5VL5UIl5H90XGOl7rhJJOfQ1viidWnaeXjmpgZAUKev7z9v_0DyR5VOWQ&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=XNHAheS93JrIGHBURsKfCw&_nc_ss=8&oh=00_Afxd6KPmm5QqZwMVw4M4dbNzwHA0or50i1-M1ZLOGUmtGw&oe=69B369A1",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 29,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/541786868_122117012732966299_5676887278472104598_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGjKJX_ohz4pJEaVxQHm_Jlalz4pnhjC-NqXPimeGML442wbOSGCTlQaANdrUeUO22jgSgbvSNKeUgFclFta72b&_nc_ohc=H3Ox7dm6EOMQ7kNvwF5p5c1&_nc_oc=Adk0YnI0p3_56FzQQVtfrv7DTmBgp8um82Q0Rn4qPAnmO2r-1j3fWFh3DoWXvfiuQDM&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=9N83F_gBNC9AaBqUt9x0WA&_nc_ss=8&oh=00_AfzjmtmU-84keb_q3EIg-4ZVgShZNjUV9jQw_4HhdiFc2w&oe=69B36011",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 30,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/545236050_122117269004966299_7847309428295712277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGSt8s2PKmpj7QJADw7MLRkw7oCramluVvDugKtqaW5W7a43zSuvzYZG9_yzVQU7mBWBJcac3Aea7oU_GVyksYT&_nc_ohc=yBLabcTzTCUQ7kNvwGKE3kD&_nc_oc=AdkNz1neuOwl5KMB05KpHEcKJ9W6GRX5LkVXlycGlITl0F9QwUTXUxAVt4fGD8Gogck&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=PoOnHtvaRRfy8udYc1I_ew&_nc_ss=8&oh=00_AfwgnrXLhAH4QrpqqqfLo6APAGF6bg8RffLnsNwGvjSrBQ&oe=69B365D9",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 31,
    src: "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/546084768_122117928536966299_3926892659672973107_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHYIdu2jXeAvbFgd3GkOsc0PzHk5KOXCB4_MeTko5cIHqU9uBR8yX1-OQ74WCyebaDa_ioeJSPjB0BsmTKbxV6y&_nc_ohc=p4hCBwq9VVYQ7kNvwFJhYn7&_nc_oc=Adl1awutlW0BmDTXDYoQoZyS3ITJPbv5BMlheunPmTP2_XSP8pwoWHf7R0v5gMmKoA0&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=K59zV8YVQnz_OyQ02mxq_g&_nc_ss=8&oh=00_AfzbEBYCiVQSEA-YgC6T35o8ScO9D0jsdoDEFLNR2hqTxw&oe=69B38B4A",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 32,
    src: "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/547100877_122118485852966299_4778507616674447825_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG06BpFP_rAsVBEDQU0oCmPsfgmhz5d766x-CaHPl3vrvcRZfex3TaFSqJyWTNVVO6EpJGOyN_gUNE_nTz-HYoV&_nc_ohc=clNl5zELxrwQ7kNvwGrRKYx&_nc_oc=Admu_45xapnB54vDGfzkIwg6UMBQK3ilngMmm0o1U--qyrfxhAHX_h_QRsDcxOsT1nw&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=3YMzWdh0fVQNtAzHG8B2gg&_nc_ss=8&oh=00_AfyxnFB1_FV2ixzWQrv3o2xUilbMtWZX37JZX26uBB1dIQ&oe=69B38ADB",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 33,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/547306589_122119373720966299_4960393002490658974_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEMMC-VBeyojxpbS_H4LTaT9rllrCUuERP2uWWsJS4RE_ppqlTbY16gqs8G6aUYzCdWYmPp5nGsRaMn2sJmI1bt&_nc_ohc=W97OMtndpDAQ7kNvwF_dpOc&_nc_oc=AdlV4lHEYJAkXVl4XnT5ahQWSiBNUp6FNd9ry_r7bRkGVg8UuG2tTCktWJbhVA6ICMg&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=CeDFLMuTGe_1Czd3Xk4QCw&_nc_ss=8&oh=00_AfySv_HkS3YwZIy3kAXpv65e1N5-jpJP7Cps3QC1U88LWg&oe=69B37D97",
    aspect: "square",
    brandId: "dr-hussain-abo-saleh",
    category: "awareness",
    slogan: "العشر وصايا"
  },
  {
    id: 34,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/622368641_122157250418931237_8134422918341525258_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFsALf4garKyivHRGF-BwjPXRyimncjhv5dHKKadyOG_pzAYrqEyx_RyrE8kVYvnJUYeoUBqyIVdDrPHc_Wuzrt&_nc_ohc=vFrn6pDuA84Q7kNvwFxjaLd&_nc_oc=AdmM5nkSQToreko16VlGKvOxO9nGpWAjK60VvifYqZS7R88iIfGvvmkaDY4N3yaNCoU&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=i8Rp4EzTec0YUf_2fmRdxw&_nc_ss=8&oh=00_Afyi3HZVZ11VBnx0JDAp0m5mPt2Y8Ix8D9ud_NiIgrVROw&oe=69B36695",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 35,
    src: "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/619512876_122157250298931237_4760850172303508511_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG15YkUdDqMblnypaXF9gykuqRD45nQtwC6pEPjmdC3ABFExvPB8JVpO9WaUEVACafy9witpfIB-XiKBKqyB3WE&_nc_ohc=S-0Y9V2RG50Q7kNvwEXrHJb&_nc_oc=Adlvez-Pp1tq6VN7DRmtSFx0gDukAaXuDnuVPwhqw_8vzZi4V2jAGzSWuvy4TVYRi3Y&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=i8Rp4EzTec0YUf_2fmRdxw&_nc_ss=8&oh=00_AfyoGcoTAeR8W0qXoXlqoxZ-rzxKBZQ5mDGkGi-F56PsjQ&oe=69B3878F",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 36,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/621808741_122157250292931237_4367026581483550433_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFNmmeS9w289KkMKPsMKXLDI7Eeyt4RLMgjsR7K3hEsyG3CUi2jyFQRBZogUU8YOhvQnmnbqpqs6QS5L6B2zMdX&_nc_ohc=GoRlNNG7bBYQ7kNvwEAJ5Nb&_nc_oc=AdkWJYIttW8QXh_2FTMl4OgsZLz6KMYl5r7fqI76hr80udnNsqeQpqMCcMRnGgUpUZQ&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=i8Rp4EzTec0YUf_2fmRdxw&_nc_ss=8&oh=00_Afx0n3As4s6oxDHCLoEdceqLzkXn0OoTmtQpJR2zEioi3A&oe=69B39538",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 37,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/620090525_122157250328931237_3175525992702411192_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG7tH1d97Qmjbaqs2C7D2Bjda6wSyUKWut1rrBLJQpa6w3Owu-dqNKR177OlDbXMm6qd7bul593kLrRwZrLqtfu&_nc_ohc=NrbboTS16SAQ7kNvwEQZVeZ&_nc_oc=AdlUgz6ISIUxWrXeivBJR4-Hs5CDvU_xKIDlrfyoQhjRzFcj0ml2W598T6R7XF_CPI8&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=i8Rp4EzTec0YUf_2fmRdxw&_nc_ss=8&oh=00_Afyqj2Si5M896t31ZTW6lMRW0duQpEBFljg3d_jOzXkURg&oe=69B39B1F",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 38,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/621664678_122157250304931237_3215513213624320399_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFa1mBo1F0ONBdXIC0wNnCpBn_MXZ9aG_kGf8xdn1ob-TSPZE3L0ZUf7Y7QABte0WjUO8K-bnYu-0cxAufrAuU-&_nc_ohc=iA4OuyyK-bwQ7kNvwG8kUHw&_nc_oc=AdmASafBXpRsUpHS-Fa2S-jXdSMM58DUnM7f6YoKQCA5TvtaQ6QAw1Yh89O65Wwaq9M&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=i8Rp4EzTec0YUf_2fmRdxw&_nc_ss=8&oh=00_AfzhowJKTxVrwSUfhZThPaGhfQjN5ElM-UJznBVhDh9IIQ&oe=69B3763A",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 39,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/628451545_122159891996931237_4337319868532025957_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGge_UuMof6DhdFUDtwecVQEnxYgIfs3TsSfFiAh-zdO0hovJDeENZT_RQS_elp-pPWPKI4e5HixbbmI9Ni4oQU&_nc_ohc=sJ794MGEXoMQ7kNvwGwOKcT&_nc_oc=Adkiz8VMhAOrm0yfY3BaEdPS272Z6TtGNNoa1GV4G2ur8dgKE5c_N8141z6-VtQJ3Jw&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=viMxo5U3DiiQLr13tASkOA&_nc_ss=8&oh=00_AfxR6_GFnspjvTA8TyR3cCGiEtlnFNYtrlmVFnkQjayY2w&oe=69B38772",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 40,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/632518246_122159891942931237_4465233297295863432_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH8EbXoohfu3OXX5Esdeb3VfEuyYS-q5-p8S7JhL6rn6lGXH0dYfltHbDtvxpErYl5t3_jRMSjVsRfNHztodbGA&_nc_ohc=0Pu09XKF6AIQ7kNvwG4wYI_&_nc_oc=AdmdFzxAfz9XdVsaW4507ZEkxHD80zhJbXNRA-gvsTkm_d2lvh1vPYFsfGzLbpiecww&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=k4qouqbqoL2RkzUq81s5cQ&_nc_ss=8&oh=00_AfyP4QqyUP7jhj4CIMOtv_zPXGBpl5MPYk_aguzWTZ3BZg&oe=69B39809",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 41,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/629284537_122159892038931237_2672281731556171517_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGw657dgAyjnzYpvPwT44PCEPkJDzYXQO8Q-QkPNhdA7z9lyby2W3Hwal5oDaPxhgszchCWqMUPCb5pfZN-9Jo0&_nc_ohc=gRe4zQw4rMcQ7kNvwE57kDs&_nc_oc=Adnpf16IH753rRvmcbxUV7eVJIS-OhjUpiA4qF2HXRoDMJq7RyKhLCvdL7NvCrWhfrw&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=2WkW6NCuCX3-hhlkkqgHUw&_nc_ss=8&oh=00_Afxt1pi3n9R8j3rC__IR7yFqre4zIUqo0DyYp3LndMLFNQ&oe=69B38AB2",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 42,
    src: "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/629185515_122159891954931237_2340620073661186801_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFsSGWlEhIfW1SZSG9nEfwxu0zMHMwioFq7TMwczCKgWkf_nWu7lP7wtpE0mBNYKAYCNv4qnyB7-KIfjZ__Bx2Z&_nc_ohc=mCTciMaCs4QQ7kNvwFJcuG-&_nc_oc=AdlPizNPl3ik2NwnaSb2BG06WqlF8PEkAQvWXdvXpMg9nttF2v488dLrKMRUy4CUlj4&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=2WkW6NCuCX3-hhlkkqgHUw&_nc_ss=8&oh=00_AfwtzneD_ZrBmmmwFAruzLmLFNU5afVeKZ7DacPXzlBxfw&oe=69B38C8F",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 43,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/633531082_122159892098931237_3863589089795445671_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFjXJXz8k5CbWOnteex7iSu8wctvtrwi1nzBy2-2vCLWUl_ubeRMnqTbpCRCNoix67O6pDhK7k6o_hLLya5iRLl&_nc_ohc=YgS1E_we9aUQ7kNvwHJqPUG&_nc_oc=AdlqB58xTiQvyUFHUlKh8_Gu9-5HFZXkuSQd-SrMc3hJ0Ma_Vptwi5UKEAWTZl6ZnZg&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=2WkW6NCuCX3-hhlkkqgHUw&_nc_ss=8&oh=00_Afyd6vzbpRLrBtUFXIlQp2lUnA0YC5zFzY4nbA_EMY-ADQ&oe=69B3926A",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 44,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/631236368_122159891882931237_2760031178612311251_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFG-r0lUhSm0eg1Z2P8Eer6DzKyIRD3Hi8PMrIhEPceL7wdxrdcnfAyFGmTHYZMqQKc6gMAOV9Takfepbv9NVQX&_nc_ohc=qsXgNzoGIUwQ7kNvwFESI0o&_nc_oc=AdlXO4XlNvH7_LxMY9UiOv5qKnzCaMTAQQP_4FdBSXoEvSHA5VOodNt2fdUMzesTC3k&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=2WkW6NCuCX3-hhlkkqgHUw&_nc_ss=8&oh=00_AfxTKeiO_-cLL11zrMzdDn0CXGg0B_Su9hCC7wF0P-Xblg&oe=69B36A18",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 45,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/641072092_122162450414931237_6986977722039372424_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHj-LNHrQpOClCquTzeTyxkIYRt4RxGRrMhhG3hHEZGs020-Uibyjahezm1tN25cO2odibi580qkXejbmHVmQeF&_nc_ohc=Apl9bF1uPEAQ7kNvwGjG1ji&_nc_oc=Adk_V8Gtz3mtLk6rs6IFKALsmhRmVVzD9GAOenF6nF4eIUhKoiy5TCQVaekrXWuv5Gg&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=ugzx0jFYPI8Lk9PFN2x7-w&_nc_ss=8&oh=00_AfwQcqsg85-6wOAtyg3c41FuIxdzdgJZF41Q6yAei4amxg&oe=69B3724C",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 46,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/640262485_122162450276931237_4855289292378501483_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGgsIm838Ms-dWPcCb4Dc-j2haLGtyxS2LaFosa3LFLYofRFJoPrrcExYOYaE38eZ7p2wZAfotXS8Kr5v0fGnDU&_nc_ohc=iwA7tZJ1USsQ7kNvwHu2Ksu&_nc_oc=AdlPDRq24EX0gaH-nPELp0Ed14b8kbC50gfNvx8vTfqk_KBDY8_tY4tndpdsmcITXRM&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=ugzx0jFYPI8Lk9PFN2x7-w&_nc_ss=8&oh=00_AfzvK39n4yS_tBPDz1b1Fwy3nxGb7Ih65SPCrz9jXOFP4A&oe=69B37C5A",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 47,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/641288102_122162450342931237_2806385323881822649_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEj1wplpRWu3R_W2kC8brijdwopV9Q56713CilX1DnrvczH8DsUIePqVeFLIoEotR-aP2rQCwjCNOMm4dlCWznD&_nc_ohc=apCDEVLWktcQ7kNvwG2on_G&_nc_oc=Adkvbur3P15zEJn2eekSc3FJr8RmaaXHdz8KrGeovkgUZYYFduZ2NdX9_Yk2GsC-4Ys&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=ugzx0jFYPI8Lk9PFN2x7-w&_nc_ss=8&oh=00_AfxrxogBPB2nDWz3ro9TOzjMvnCB8aGp2sLJsHoIeLLAGA&oe=69B3785F",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 48,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/641388668_122162450378931237_8774834686983487576_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeENdVto5QjYninG_89y-1ZxoLwzoTEGmbygvDOhMQaZvKm74L9N002wAQ2ivEkAz33F4T3Q4YP_Cb9DWpdJO4tk&_nc_ohc=2RMNQ8lSZ04Q7kNvwGPiqZJ&_nc_oc=Adlutw4mxCigOWRq4KqMcPLGaWO3LIKQSW4vveKrOE4sgnIAXO-58WVzPmCtBnGvynU&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=ugzx0jFYPI8Lk9PFN2x7-w&_nc_ss=8&oh=00_AfzjlWsijcXW75TxBYYpHJplOf8W3-kjTC4Ki7ol3E7OvA&oe=69B39623",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 49,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/641283766_122162450282931237_3247888622941806177_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF5XCdQR3kvUb0mOJg8h9dP72c7ZdcDahfvZztl1wNqF-1TkZaTW_kGcmHuc87fblrJ-5O4nx5VwddPnkyxFjNl&_nc_ohc=TeeHJtYVfukQ7kNvwFI0Y-m&_nc_oc=AdkooEomdcJGIRpTWy7aRt6JaX4A_IiSczR1LhQ-K8Immecu0GGprL3gmwPguL_Jgbw&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=aLWd8M16ZcrtvN9IVh_mcg&_nc_ss=8&oh=00_AfwX_7JL9p4prAqDJLjaplgVcXI7YnloGi49VNaMa3f6Rw&oe=69B386F7",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 50,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/641270172_122162450318931237_6770110418720154191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFCSanOJhqkKtdleR6eV15A_F3qoKChS9r8XeqgoKFL2nHAi1HDB17TyT15c7IpSu9gQRetaktOq9As-KZE_5E-&_nc_ohc=QayCQ_6qHDsQ7kNvwHJL9VO&_nc_oc=AdlOV40czCb5cs8IQkSTEzLYvMyspx1DB-KsQ5W1SwUa08Uzll8dNVGDHap2w_ed_T8&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=fSt1uOoT1odiEV3izh4VjQ&_nc_ss=8&oh=00_AfxJmMqT7G2t2CdZy8Tg8-cuKcsX9M-rDAa6cyH6bP5l-Q&oe=69B38E2C",
    aspect: "square",
    brandId: "tz-technology-zone",
    category: "awareness",
  },
  {
    id: 51,
    src: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/640128602_122162450228931237_2330166489904234274_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEILOAtI-OVDPM5IhW7eTkSvUWyhIDrzDW9RbKEgOvMNeKvku5jcmeX9FAQd7AcmFNM9kc8uHBLDMAIzgiuGSAn&_nc_ohc=_eliiUfbppIQ7kNvwE6veHd&_nc_oc=Adn5-fA1GRh9eA52dFPBwM4V8p1WlUhrk6hj0eHxLpeq0SAxoVrctdtCKWZrpj5Yhh0&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=EvmV1kzhZxsQoyYj-aPU7Q&_nc_ss=8&oh=00_Afx6EBnz3VH__O01l9QoY_5r_KuoC_oWudQi6R3lHPht1g&oe=69B39711",
    aspect: "square",
    category: "awareness",
    brandId: "tz-technology-zone",
  },
  {
    id: 52,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/587970783_122147653772815217_6758150110285456515_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEoOaVI99_4kIfbzXSf2upyQXjYzoDrH7RBeNjOgOsftNia8AX3J_w8uHCyyka7kXZBrwytaf0SlvLgPv51Klb6&_nc_ohc=Bh1UNYgY6pYQ7kNvwEEhdFz&_nc_oc=AdnqKJKSHC-wkWUaKRkPWPh2lHdwmNqGiOOrV4P0zTq6ngeOMRMfip3Xj9suTQaz1Pw&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=brQN4zTvGpAUbHVrh_PmGQ&_nc_ss=8&oh=00_Afwg3P2IUJJkUEIpXVoopEUYuoJQQ7jTB2O3NAqQtbGuDw&oe=69B36B2D",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 53,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/587545323_122147382596815217_6442862457573857024_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHIP2-Z5bGD8g0g-R4cAF7aTQFIshLvTshNAUiyEu9OyD49s74UOs8aJ65XM1xpdHZcmrs_rq3Hz2kdActkIgko&_nc_ohc=8WvN31mkLnEQ7kNvwFrQR7H&_nc_oc=Adn12KnsCQ0n8hPYotqLZepdcEQpJM0u-aDGdQAweF0pEZjhcezcPF1NwO2NlPIvLRI&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=s7mUoCsWwc9F7zG0eTEChw&_nc_ss=8&oh=00_AfyBdw3M3cnh2nAYjyrWAPW8OwNLug7EqVKnPMOS6FqbSA&oe=69B37340",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 54,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/586806090_122147751104815217_4026042774749217946_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFLHEAD1lXi8DtsBtqc2k6uBROvQA3r0tgFE69ADevS2AWv6NIN9hWBz5WyYq-CDOqdsKa18oV4xBui5zdj34dP&_nc_ohc=Yr9ixAK_iWYQ7kNvwF_Yibp&_nc_oc=AdlyezFKSZ93frGM3zEqDu5D8LZjGzSbf3gFZxPjzahOzqCPjlokXcEOE-Qu37hylic&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=tpiJdJst2OA7X0VPJmVxMg&_nc_ss=8&oh=00_AfyZeM-OIb74o4MdBJJ9xtrd5xBNlueFSZNg9RpHvKJA3w&oe=69B378D3",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 55,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/586145004_122147264780815217_9210511296258901253_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH_SQCu3kwaq4PypebM8146LtRSI84hqwMu1FIjziGrA9wdB6P54XRaAlckEw_0_o-wQ7uDQEXB6vjtfZ9nXvvj&_nc_ohc=WqHmxPnGvwYQ7kNvwEcBrm1&_nc_oc=AdliTN93HfAn9AwZS0XyR4kpVRWQRFH7UIeEWV8yl-RZDZ_vIfJN9LHvENXYebOyGGM&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=V13F7PhqVOCBxqHHgRcDZg&_nc_ss=8&oh=00_AfzShvIGjZsIIckyLfPFbBmUuUBLvxisOqY5ISb_m64zYA&oe=69B372CD",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 56,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/587171753_122147099288815217_927699968395712553_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEzU099K_H_7ZZ4rCvw7II20lwtSjnt_eLSXC1KOe394ns7JfY7nhRdGMI3uCxjGvtaeChXe-a6S9LuAc_sCVbq&_nc_ohc=A2OJ-Mb_nOwQ7kNvwFzpA4i&_nc_oc=Adm9Df2D04sfrzecKVkWxltrwXulQRPnScgMjgYHjreiEi2EreH5dK767blZcdkM-F8&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=nlrkBmlVe7jLQfMFy0nejA&_nc_ss=8&oh=00_AfwGHGII1CLeL2IPEmEQB9-8p8CAUh2wCw8bWcvsukZOlQ&oe=69B38749",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 57,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/581959808_122146721270815217_6849456530800324790_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHPypNFaMZl67Ph5nxPTUp2J6YSHHTk9qYnphIcdOT2pvsYBHdbhl82scjMNPaw7PtKCoRNJbUmXnuiOufLY8dR&_nc_ohc=VDfNL5hO_pgQ7kNvwFK9o3p&_nc_oc=AdmU4-WMWJk873gZwU8z605O_TKycjRk9xlkxPqi9XG_JMdUQuyiooAHZUpom7OCn3E&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=xoOtXS0hRuzCIm6E4pITUg&_nc_ss=8&oh=00_Afxj6pRHX697sPjfCMjrseBw7e6naRYv-aIcrmXEYSm5zg&oe=69B37353",
    aspect: "square",
    brandId: "dr-mohamed-wasef-aglan",
    category: "awareness",
    slogan: "ما وراء التقويم"
  },
  {
    id: 58,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/626957671_898182715928101_3766580057558611645_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGGKCQmXZsmO5CxFvaBCkulZyyPtg4mTDdnLI-2DiZMN2lb09S7s1QKSObeuKD4ZtZsGDKo5MebYjElUrkM4Jqq&_nc_ohc=rbLysqsMo2YQ7kNvwGQNRTB&_nc_oc=AdkH78cGoBKD1yv1N0GNCC5WIGZFBFjCjt6fypxGBjHyJ8B4UYDzkoGpGGLFLx_RiLQ&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=kWt9Q3OdfYNNqFqsnh96Xw&_nc_ss=8&oh=00_AfzVelpt7fnG1sytRsAYsxg0DLwdU3rfKc_JUZiv6O9C2g&oe=69B3A2D1",
    aspect: "square",
    brandId: "tiba-new-house",
    category: "awareness",
    slogan: "شطب صح"
  },
  {
    id: 59,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/620017459_891002116646161_1592406263882009207_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHOTsT2fWqSabrQo-Fp-pbJOE1j-SdUe744TWP5J1R7vlxS32u_tdZLT-ptZZvoMeXNt5Fl8noVtKmQkw-H5GkZ&_nc_ohc=V7OTlQVL8OYQ7kNvwG6Xd80&_nc_oc=AdlqGiiy8KZb0S0SUOIetmDh8L9PlBy9HC-3Lr_biAo1lAtYKotaFSy-5HSLW4hXxCE&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=KvUDH3A7JTR8geZgPrtmtw&_nc_ss=8&oh=00_AfzVfeYvjmLFgE3Mm04xY5jNAalxJBbu_bvLIaAG4Jf0nA&oe=69B36FCA",
    aspect: "square",
    brandId: "tiba-new-house",
    category: "awareness",
    slogan: "شطب صح"
  },
  {
    id: 60,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/618793427_886975367048836_7783019050781948616_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFG0SnZq2piZ7uAnbMYCuPeoBHaZwQNZHagEdpnBA1kdhhHUt4H2gMttJJWuepRsUF-jtA8Y8cvDQvdhE_Kr4tH&_nc_ohc=vLeN7o_yNFQQ7kNvwEN9YhL&_nc_oc=AdnLPdEB1W9CJe74ti7n5Yp6w7UE1_gtJ1g0Y1avXnVxM2tXfnxd7ED-XmTsUHAOOYo&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=gWTgESFiNX_oYniVeQMMxg&_nc_ss=8&oh=00_AfwNbg0Rgi48KoSJFr4C5xDA5PMucNiOnlsJkNAh9e13Lw&oe=69B3A428",
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
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/574273868_122223462248282176_1049146372594212085_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGLCLTqKwL2NQ4ZAZwPE5JC7zNlZ6u9ZlzvM2Vnq71mXIV8XOvjSJ8psXRd_LlwEmze-Z873qykwHoT2LM0nqg3&_nc_ohc=QqSaAD2L9JoQ7kNvwFvKdC0&_nc_oc=Adnj5hdoGzg2_bEVbN-aDu40h4h9bWGBuvIzT_bMAlS-xR6ZsX-tJZGk2CoWh-ev89M&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=_r46o00NI01Y4pS6MsnbuQ&_nc_ss=8&oh=00_AfzdOppJ34BADIpbAFmceaWTBgmxwRSP243iL9cJvpRhLQ&oe=69B3A7CE",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 63,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/573909978_122223462176282176_1830506752246008607_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHTac-PACHl5QSlbRKVEtch33pSHs8eEADfelIezx4QADdnHr08AEFq371b1cBXmyq3b2j0xMxgaDyC5ardk0FE&_nc_ohc=YhQSFuKiBJgQ7kNvwFCg9kH&_nc_oc=AdmH1DjwSEFp12XW3LKcezQkjvifPggYSK9K_MUVucZZXqG0V4m-QC2Jjt8NbMbNdU8&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=_r46o00NI01Y4pS6MsnbuQ&_nc_ss=8&oh=00_Afz86o3GQwcXumSMlEbtjvrt8B0XK59PxOay-JUWnsLbng&oe=69B3A4DB",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 64,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/571277029_122223462152282176_1780456357574606017_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE9dScy-1kgXbohDPaqAR6qT5QQ-4imlXFPlBD7iKaVcVy6zjtzj3xNavOTVxEItLH_2Z8Bl8A_L_XwFf6yv1pA&_nc_ohc=8Q0c-pKLCaMQ7kNvwGVKzvs&_nc_oc=Adl76e4EEwspIuZtLoX8mOX73tZZBJokDiZBlB1QLzV4E9wwzfoIHJZbUsw5COiXKZA&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=_r46o00NI01Y4pS6MsnbuQ&_nc_ss=8&oh=00_AfwgAYCJZC7lgzxeqrOFx3F-zEg3nH_b3ReHZLUQ0nZ65Q&oe=69B38C7B",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 65,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/572076978_122223462212282176_4075689069711435962_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG_sdUl_ePAK5ZqBSPGBshDGopZ0BXCa1gailnQFcJrWMxxgJFGwkaeANpirWaLzasirQce88wrTgUWyptroZEX&_nc_ohc=YNaf9kLi8tAQ7kNvwF2H3G1&_nc_oc=Adn3hHr1CENYaio39SmjG1gOiMdJcNIpllFgcRIeuGj5L7tQ57WLHVSRMzixQw0TLmE&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=_r46o00NI01Y4pS6MsnbuQ&_nc_ss=8&oh=00_AfyYclmakNvbgOxhv7cWPfkdsDbuqpjIcEnp_OUaIBXjYQ&oe=69B3A9D4",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 66,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/586873044_122226704618282176_7919865514731375726_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeECyXYS34BPhniMnDPR5CRjyabur7dyEffJpu6vt3IR9z4bH_kcQpLgA1QupFJX1jylQoYf4RqG_I6eVIzjthqp&_nc_ohc=A0x3_fW88AIQ7kNvwHWG2Gr&_nc_oc=Adnx5z8MhdPeP918RswJcxaFoRJUbPl04tpAe7baR51gp_iCNuz8lJIJfIJxvgy_bcI&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=bjLctn-fwbskl_O6CoLtsQ&_nc_ss=8&oh=00_AfzYCyODS_hUByvd8IuVVfcO1bGeSZmcleOVocJf5Sc1ww&oe=69B3948B",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 67,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/587381414_122226704564282176_3310669057441507649_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFzyZ_tuaGTAxVXn-zBbZaKkdwPBbsW8iSR3A8FuxbyJNGjIIR36Zd6dybYcoO5kWcPmbM1uAmmQgcQVX4ci0hX&_nc_ohc=B_BeW9iKuhYQ7kNvwEQMDn3&_nc_oc=AdlCqnUXQwsCByloj4issW_RU5Jjs-CkI29smmoghnrPe1WvOuFIxry17v-OZ8lTNmc&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=bjLctn-fwbskl_O6CoLtsQ&_nc_ss=8&oh=00_Afzucd4eAmJylNeO3NpGyG1V2bEJhtiwnHq7j24nVJ1lAQ&oe=69B390D2",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 68,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/588438877_122226704558282176_3599885278647894484_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE1AiglBp930C-Z2B0jHF0zirjbUi3mBNSKuNtSLeYE1AbrqxC4fF1UIw8VXH5XKRTQOc7ur7fsYesBrXSvXYYi&_nc_ohc=iL6ui_YfmDgQ7kNvwEZs92N&_nc_oc=AdliZczdfW-MRKdAuVmeJ1wbv3A_9gP9NLhVxQe3_bIIn2jZGFXtjXwojsPRwJNLwmw&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=bjLctn-fwbskl_O6CoLtsQ&_nc_ss=8&oh=00_Afw3S4m_XzrcXxBvPKZqUysnjLcdQy5rGdkV9iI9NK_P3Q&oe=69B3A7D4",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 69,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/585644940_122226704522282176_2114137724737149756_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHOLOc3FvQbvOwpNqGlZxiTlt1b2ajzF6GW3VvZqPMXobbNVaO3bpfqszgFK0GXqB_f4i0OIzm5WKVg0orbtQKL&_nc_ohc=O25HzPHwJqIQ7kNvwH1RxOF&_nc_oc=AdnpUAHAYMiV-bAwA1-wuNKgE4i-vp54Sd-fmDg1IgM84EShx7AzUSBw8tg9EGEFdn0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=bjLctn-fwbskl_O6CoLtsQ&_nc_ss=8&oh=00_AfyVlxTxkLB9OTiV9wJc9fLB7FSvIqvygoCxymGEiyILMw&oe=69B39C53",
    aspect: "square",
    brandId: "dr-ahmed-essam-zidan",
    category: "sales",
    slogan: "حكايات من العيادة"  
  },
  {
    id: 70,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/647919396_1532915728845701_6790488482424370314_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFpKaEZxg0XMepCIQzt5zv8RNurR_yPDCtE26tH_I8MK6tGtFOts241eZO3fz0JvTulhzFjvTAmYudwZIWNPpW8&_nc_ohc=7cJPj8uX9q8Q7kNvwEJxftK&_nc_oc=AdlBaUZdhn7LerJPgoQ4WqQIH_WydmRU8oCuzSU5w00O8duzKYo2wXpgbjuVDW5yEGk&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=-cwEd4tt52nAMfwjuOmjqA&_nc_ss=8&oh=00_AfzOTDRR-hIwta_BrwQ2ANnZGqc_Uk9UbMCn9wGIlFadEg&oe=69B3AE1E",
    aspect: "square",
    brandId: "el-aamal-exhibition",
    category: "sales",
  },
  {
    id: 71,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/646885475_1532915692179038_4062645453044837609_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFrFDaIhQ31TPqEfnf0zakviTzS0qvSzWiJPNLSq9LNaIfliN_l5NcwrcLWHfk7zZwa1wQF77BQm7bwPv6m2eUB&_nc_ohc=EdKSaziZsdgQ7kNvwFx5egy&_nc_oc=Adkf3a80_hCvvv2TPBXg4r9ucoDpJMfQYkafQNBYL295I_EaQDl6z3C-y6Z00AqIRik&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=-cwEd4tt52nAMfwjuOmjqA&_nc_ss=8&oh=00_Afw-1-zHCrEXaeRoT2_eV5ak2ZEKAZmV9OWykGb0o600-g&oe=69B3B9B7",
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
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/648644546_1380128827462251_3850655168019830560_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFNhLi_yMBT5xkmip50bgbn9HHKt_QL8070ccq39AvzTn7q5xx4h1zt4_jqPeZyUL0KkFzVCDL9VBxomwIJLuq7&_nc_ohc=ckr3ZzR7o2UQ7kNvwHMSdEY&_nc_oc=AdmrevVkFH79tr1rYL93vJ75X7I54QdkVFu4KeHZwhOUrJCyeA4YbDANCCOxD-sKIRs&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=gsGS4SmL2mhl4XcEiGWW4Q&_nc_ss=8&oh=00_Afz0Ke5LfPQScxefwcBlRPvBqL6U_cJNkZngjZy_t7owFw&oe=69B3BF6C",
    aspect: "square",
    brandId: "flash-tech",
    category: "engagement",
  },
  {
    id: 90,
    src: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/641055720_1369857685156032_7100134043901586034_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeErOqcVzmpf6La2greKDDnI-7WwMg52Jun7tbAyDnYm6WTiedqgvxIu9uz3f2Em9WXQi2h6dtxkkNnYuN139Cqv&_nc_ohc=wxjinM1mFacQ7kNvwFcKLMx&_nc_oc=AdkGogC2IB25R-FWWDJgni6yO7dWOKybGsmP0MNWc6DH9ixoBEE3lSxwibRweOoyKrk&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=YDWFpbET6UNYDIJSWBJ8xw&_nc_ss=8&oh=00_AfzhxemPSXbvtxU-BFxNQrzAApgHlTxQZpr-lDzE9ogwhg&oe=69B3A3F6",
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
    value: "7+",
    labelKey: "about.stat_years_label",
    descKey: "about.stat_years_desc",
  },
  {
    value: "50+",
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
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/439866588_10159258021556548_6003574618929294597_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGzr0RgkPh3RG1wT62s5G1Wo81olXVEV06jzWiVdURXTjY1RxBR9gtrD6ZGuCAcsOg9ftFmqAi9U4TD5DI9gaMj&_nc_ohc=NBZTpTyQ954Q7kNvwHDCG03&_nc_oc=Adk5UkU3rY52On1-Q3x3hYkCBv1bP1-_dKT82okfA0L-X8C2MYPWnqrEWJVS5vOy-VY&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=_43zVLGtDmkrW8MVO0fG0g&_nc_ss=8&oh=00_Afx9IzsNU6GgSHHgYDcgGrCs_-otMWBJcrfsUGBzqt6uAg&oe=69B13F79",
    href: "https://www.facebook.com/Dr.AhmedZidan.Dentist/",
  },
  {
    label: "Dr. yassmin Elezaby",
    category: "medical",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/559337416_122108255385030980_6800374764864533301_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHsndI4OGRutXss2OVeQWqPSiXXNX9d_LVKJdc1f138tcQiVHbiuWYm1xde-iFKAJQipYrMgg3fyNqD1FYNFTBX&_nc_ohc=L9L0s7NCAx4Q7kNvwHcWNxI&_nc_oc=AdmG7U3mxBCZqE9bFcWKLR1-HcEsJ9Y8flu_bktE-f9UdZk7TmXTVUJT-K0drrfrfYY&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=_b2c4Qve64nG1DYwTQTUUA&_nc_ss=8&oh=00_AfwWhK6rc3Bvlc40vVJZgcIZyt6VS6oSm8i-beko9jsM5Q&oe=69B150AB",
    href: "https://www.facebook.com/dr.yasmeen.Elezaby.derma/",
  },
  {
    label: "Dr Hussain Abo Saleh",
    category: "medical",
    img: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/637769859_122148957710966299_73712703970723080_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGztR1jRYOWS4CFH4V4BKgKpN9RjXTn6sik31GNdOfqyIVkh_rXV3tXJzVtCGq2L0AAhRHDk3zta_q3WKMsZyXH&_nc_ohc=EAYTo14BTMsQ7kNvwH-GwrA&_nc_oc=Adnyxj8qYhIqZspRrFEqdiYhdMtWSn3NSMK0PgnOitopOvSBM64Hq8pOb576cF9nwKo&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=PO0z_P2gWCflV2aEwI1yRg&_nc_ss=8&oh=00_AfyxMv0C4OyXMO6tABk9R-v_niNBDTllz4IqR1EvkPv4iw&oe=69B13D99",
    href: "https://www.facebook.com/p/Dr-Hussain-Abo-Saleh-61578988993906/",
  },
  {
    label: "Emad Eldin Pharmacy",
    category: "pharmacy",
    img: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/487565639_122117569682791826_3540465160487915739_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGh-mf07rCnD2wTgBo29MmNEPHTiBpzb9cQ8dOIGnNv13P78MUPoMrw0Z2oSIKQ57abvR87MVfYD-H5mEpjgJS4&_nc_ohc=WtnCI33AxGgQ7kNvwGKpIif&_nc_oc=AdnK_9s9maxr0rDDNCDD0jSw2R9tK-_C1HQfzipz650YadTHtamJEC022S_I7NHlTyg&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=jAqn1kIVTJ_e817tH_GfPg&_nc_ss=8&oh=00_AfyeW5yr4HOWBAiThzv7ZgKKSLzB3Rzmt70CX3j_7UWjHw&oe=69B15F6D",
  },
  {
    label: "Dr.Mohamed Wasef Aglan",
    category: "medical",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484973573_122095261304815217_4102978367698759177_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeF1kI59GdeiECUAI_kTb8y8HAQmCgPWSEkcBCYKA9ZISXfqi0jGxPM3hzGZQH6uzsND0tubRCHzej3WnCacWYwp&_nc_ohc=_N8--7PdBN8Q7kNvwGrmInu&_nc_oc=AdmnaSq2oHNOsapnlyP4E-avY3mAhl3wZ-VQXd62SdseQCk0SL6j_ZDmUeNAMyyFSsk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=lYSKhsgUAxhndL2XZnWYSg&_nc_ss=8&oh=00_AfyLqq5jalw74GQkX9NO7iB8CFRqFwSykw0X8PcrKMLsqw&oe=69B15034",
    href: "https://www.facebook.com/profile.php?id=61574456515820",
  },
  {
    label: "Osama Arab Pharmacy",
    category: "pharmacy",
    img: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/506656695_1004270318532447_1178553646101447103_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEfiOw1SnlhRYcM9LV7YXig1EjdlUHK1sfUSN2VQcrWxzwm3srN0XUpshW3NBwIUPoasyfJ6XJy5pLH6OIoFHFC&_nc_ohc=xJEuaweONtsQ7kNvwHXEEJn&_nc_oc=AdmRN_ZHXK9ustMlnItLPsvnbuYmbC_vV2CmIg1weKESvYW-EmBCaZ8Ujp-ebJybZ9Q&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=_a6HVWzPcfvBGRzY11fB6Q&_nc_ss=8&oh=00_AfzDAGUVHVI3R5xEY8K0-jJxawAMHIbRb4ICAHsUpnCq7w&oe=69B14EA6",
    href: "https://www.facebook.com/Dr.Osama.Arab/",
  },
  {
    label: "EleGance",
    category: "interior",
    img: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/366252118_234287236248699_2952202469938813063_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEo5drYl5wxFP6j8S3U9gY_OcJ3cLhvlWY5wndwuG-VZlRJADJvMW2tl_g6YWwJ37RqNLaQMF3AXhc53LQTqLZp&_nc_ohc=V_8QChZZIsYQ7kNvwGRXIoX&_nc_oc=AdnCIXKukaPqRd18cRi9ciULVirwAwBQ_oCIZiSEhcLaHqJ0fQPpF5wSvJyu97o_zMg&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=JxoQ1rPXf7S-EWvfUj3TsA&_nc_ss=8&oh=00_Afy7u08VpSIF-7yh-e58nGpHfFZlomsI9heP8_61b3NhmQ&oe=69B161E1",
  },
  {
    label: "Golden Tech",
    category: "laptops",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/634953814_122154191108664501_2461587214244218392_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEcxtWiJxGzhCncdnJR0jE-H9h9td0OATAf2H213Q4BMH3hUyZJCSjgzZP5HGFOdqUyKWkUo1LYZgUFNMQ8_h7j&_nc_ohc=gB7Z1Sn9hE0Q7kNvwE7Xxj4&_nc_oc=AdlIX6kFRcCMvVkBaagaMPwzMQHFXqnpqVznLMS9BBf9D6WFM2CBD9ylhHP430jIWnw&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=s98w_1u5Sl3vjhiirxyUmQ&_nc_ss=8&oh=00_Afz8jIyeYEWLvoebemMbSwdz4Sd3Fhf9G6pt0gdmN3SCbg&oe=69B16965",
    href: "https://www.facebook.com/profile.php?id=61569935036914&__tn__=-UC*F",
  },
  {
    label: "FlasH Tech",
    category: "laptops",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/301174993_457692303039246_4196782548958421927_n.png?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEUtTlMJVPqA9GfHH-PqnEPYFYm2jLoC6hgVibaMugLqGhzKdCsqxtBAgxX42EG8l4DoW7lv1ckt-INaJgjq1L2&_nc_ohc=Lh2A22XG60oQ7kNvwFEDofB&_nc_oc=AdmQ-6Lvw3jDvhGom8aOBSb-gX9KpgdRTwiBMpOzU68ysc1W74SQsPrcdMN2jgGo8i0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=UgyCjp5sme7BUUsLtssp2w&_nc_ss=8&oh=00_Afw3CoN7EKPFdObfLzaMnHpfFsvSL8sBBPGfq9_WBvEeaw&oe=69B162F5",
    href: "https://www.facebook.com/flashtech2010/",
  },
  {
    label: "TZ-Technology Zone",
    category: "laptops",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/545634355_122128297784931237_2529149437608491258_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEe3_q13wTw5pFLR681hUERq5M1zN0OYOCrkzXM3Q5g4Hp5Saln1W5wBKbdv-pYTnF-Z_Xwb8CptgRhVAoFZ1C0&_nc_ohc=epLViSegPjQQ7kNvwGB4YzX&_nc_oc=Adm9qGNCnrCvLUZ5mVb7AVyvTKl-tf397qEAO7I2SbEUl0Cf_LvW-BpbfxiZQjZfKQA&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=tbSnmnk0vnH1kDOOQFuvhw&_nc_ss=8&oh=00_Afx_5UFuYyd7sIAP6N-M4J8da0cwbzeOCROZIqYbtwSmMA&oe=69B147B7",
    href: "https://www.facebook.com/TechnologyZoneTZ/",
  },
  {
    label: "Ultra 9 Laptop",
    category: "laptops",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/492422058_1056862866366868_6705883167584962386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHoTfU7REELtPs1R9mUc65ZJnZbOh6VkMEmdls6HpWQwcOfLtrAPbPBh26I2QWVZ7oetLXEamgUZf3jvmm8SxTX&_nc_ohc=Pw1JOqkbTXEQ7kNvwE7Gzup&_nc_oc=Admtrb1L_HeFoRJvCxhUFDXYwgQs9et2i9sDbLbmgPt5geAKeyCrx7L7yghirvgDkmg&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=fM8nf3ARvfWvWITG0zW9PQ&_nc_ss=8&oh=00_AfztXFHt54KrBzVQxG7506Xk4MRHDHsGjFcOu2I3bMtJUg&oe=69B14A30",
    href: "https://www.facebook.com/ultra9laptop/",
  },
  {
    label: "Creativity for Aluminum Systems",
    category: "kitchens",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/475954941_648349597752318_3950822554588149078_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeE5q5h72KXC-4aKYTO1Fa124AsAvGl1a_HgCwC8aXVr8VAOx3bJggOQeVlTCuckU6sgKUoR3hKVXPMxwk8zcyfS&_nc_ohc=CoIk9PO7Nf8Q7kNvwECRzlF&_nc_oc=AdnxFEzUhxE_OW3OCIWpFSCeUFfnAG1v9Zrb1dQU7aLHf6YI1jqC0505dxFEk9kUGu0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=DVHtLgvR2t9IQCZln5cYZw&_nc_ss=8&oh=00_Afyld1rP1y1qthMBJClOK3KgaID4bjx6PAvsfYnR_8CYtg&oe=69B154DA",
    href: "https://www.facebook.com/creativityforaluminum/",
  },
  {
    label: "Salasil Alhudaa",
    category: "kitchens",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/540145103_122125910414939520_1932052322910511617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFLQ6McWO2rwPKDj_NBWL_5Bdq_Z2c_KOwF2r9nZz8o7CeFX_X0jCbpCzTKpSbpBi8eM5fKiU1JYaVE6v6FerIO&_nc_ohc=kiHU4e-xdUMQ7kNvwF_XAmK&_nc_oc=AdlTapGtt1K2kkALyNM5RFCLDi9HcTq1HifHONPeICeBKF9dAScKWeJ53gSA4fHRHdI&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=vS6VvLpyUxpepUmD0FUQtg&_nc_ss=8&oh=00_AfwYpXcDR671I7RlJZaiBe8VnByDFcGFCpAJ-BnRUUrzhQ&oe=69B16FDA",
    href: "https://www.facebook.com/profile.php?id=61578185626955#",
  },
  {
    label: "khayt harir mafrushat",
    category: "furniture",
    img: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/490030718_1166873578787735_4315110809113291256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGT6elWvYxdFVyxZBEg7BN1uupWv5M1bcq66la_kzVtyjrs0BZGnJbnCevc9JLQvggp219wlwEnQcYlJ-Df4gdD&_nc_ohc=UpoWeAOb_KYQ7kNvwHiVOi9&_nc_oc=Adn9-0Yj4cK61qIg9e3cxuljV3NklJItCE56mMqlHC5pOeIMsbwr-18c6hmLVkwjMU0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=4-Z9ooti7J3xKwQficjNrQ&_nc_ss=8&oh=00_AfzgCd6Phy1xhsl7yDcfRkY1KbB6X0Lf0drcxHSgh0W7cg&oe=69B1406D",
    href: "https://www.facebook.com/khaytharirmafrushat",
  },
  {
    label: "Alsaad Mafrushat",
    category: "furniture",
    img: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/637779120_122251660448157648_1530059220487389898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGmlSYDHG48tIN_iwjI55LmdFpRe70Kt6R0WlF7vQq3pHcFmS4TrUdbC7yDShljW22hOSE4kC2uGXhsevF-Hw40&_nc_ohc=PAsLPZpkcNQQ7kNvwFWDpon&_nc_oc=AdkphAdSO-CMKh4qdDbvJ3zsOCEUG6Wi7coqgJE-VCeoGF1qNbAlwdCBK8b2iMFUyaY&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=dhaP-HzLXeFsy_pdCg-wQQ&_nc_ss=8&oh=00_AfxWNLyGAZraj-s2fz6QqoQ4KJw5NY_dLgX4a-QncC8LyQ&oe=69B163D4",
    href: "https://www.facebook.com/p/%D8%A7%D9%84%D8%B3%D8%B9%D8%AF-%D9%84%D9%84%D9%85%D9%81%D8%B1%D9%88%D8%B4%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9-61554729456952/",
  },
  {
    label: "Abaya Asmaa",
    category: "clothes",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/633815792_1220500770253041_667701460472401908_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFGSh2gLmn7MxgB5nq6HjtYkdRK2CgjVZ-R1ErYKCNVnyOyy4Ws1x8qfk8_8ZBueRHkUmiwepgzRv1rRzXpR5SI&_nc_ohc=2oVgbF83ybUQ7kNvwEuIi9h&_nc_oc=AdnudQLXF0qp7gLdJvzzN1ICwHg5CKrTsQqm_JeLqwiI4WyTncDv8vhxvDLoKPOYigs&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=EOiX14SNhUSgBN3JWAAcPg&_nc_ss=8&oh=00_AfzsKZgv9Z249Z5zJ7d4kHlrEUdIwuHuIODs4O_rVVEyBA&oe=69B1500F",
    href: "https://www.facebook.com/abayaasmaa?locale=ar_AR",
  },
  {
    label: "TIBA New House",
    category: "kitchens",
    img: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/581750468_838775231868850_7678836905119777213_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGPiUkPvrpdm-JMtjNKo5c2XK8vStfr-4Rcry9K1-v7hB42vsT-YsSX8XtnJZ9nhrzk8G8wWGohgvzRxT-VmaAP&_nc_ohc=hueAbjznwOkQ7kNvwGvHYJn&_nc_oc=Adk-lTJgG9m0rJnv2cquv1R1FYSx4WUbt5PVCQmXk9AzwgG6PIdiLNy88kleuxawgvk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=IY6brYFpu57xLGCkpExQ8g&_nc_ss=8&oh=00_AfyOwjBxRXhJK51t3EAeRFGnV7kU5kwTQ4JQykb3kjrqEw&oe=69B167F3",
    href: "https://www.facebook.com/vertex2027",
  },
  {
    label: "Al-amal Group",
    category: "other",
    img: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/447067400_943508674453079_785018646365556276_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeF6CWUgKzMBOgy2W46ODP2tc63_oh5QB8hzrf-iHlAHyHf25TuFehhsekcxOPwLXskMWGjUDoD78uP1p-UWZmBw&_nc_ohc=GIQ-1cfU7iIQ7kNvwEatkWH&_nc_oc=Adm9pjbD8n6KQtGvfoZX0FLx6pz3BSFBIFrmNUihlbHhHAqBPrzb7WST304RVYCtCLY&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=STTd9prFidevOO9eXRgNHQ&_nc_ss=8&oh=00_Afwo3qgQ_b0eWZwyDtoIJ0WoquH897khEU8TC0psYk9BRQ&oe=69B16FD1",
  },
  {
    label: "New HOUSE Aluminum and UPVC",
    category: "kitchens",
    img: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/584205955_122103682479113593_3958101320093212433_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGCr0fplf31u2PBNxkh6vQu8UJpmwL3u6nxQmmbAve7qWQxrJYES2yG5c9rDHi9K0WmwKtIEhJpN6oUSn_geFmc&_nc_ohc=QTrBddADGhkQ7kNvwHVqrAS&_nc_oc=Adn2JMYZ0L0wdsI33nNg36nGJT-rgK8pOAFvCDa8lbIltcXy7b4Y6-jhmJv6X0NyqPY&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=cRQlSmso0u2td-hkxFbB7Q&_nc_ss=8&oh=00_AfyUuhkHzOsB7HIQ3pVnxaemW03ZcrYiAkKGUW9ZYrMORw&oe=69B16FC5",
    href: "https://www.facebook.com/NewHouseUPVC/",
  },
  {
    label: "Alhoda Lab",
    category: "medical",
    img: "https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/615965279_1256285209888479_7599013895774730033_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEVDheaGKe8HjQjS9QnApyMlZiwXzTo6nmVmLBfNOjqeXiVDx5JDKkB3uZe2ylNsc7gu36oQfHGt8v3CypaXQTq&_nc_ohc=WrTesGuv8FkQ7kNvwFdru03&_nc_oc=AdkVt7PAr-OaZvhK2MO9y_clAjhQHmz-2RBKiF9pUCtJs8XzpHcDVSifhgseQNNIOFg&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=5efkZIXFozN67Pa4R45cfg&_nc_ss=8&oh=00_AfzujYXFRTlcNG7KfVc6_hYkcEoubCQ3i5Wzoox6CzE4Nw&oe=69B16C4D",
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
