export type Language = 'uz' | 'tr' | 'en';

export interface PlatformItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  metricLabel: string;
  metricValue: string;
  metricSub: string;
}

export interface TranslationContent {
  nav: {
    platforms: string;
    techLayers: string;
    telemetry: string;
    contact: string;
    demoButton: string;
  };
  hero: {
    groupTag: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaDemo: string;
    ctaPlatforms: string;
    statusActive: string;
  };
  stats: {
    label1: string;
    value1: string;
    sub1: string;
    label2: string;
    value2: string;
    sub2: string;
    label3: string;
    value3: string;
    sub3: string;
  };
  twinExplorer: {
    tabIndustry: string;
    tabFactory: string;
    tabRd: string;
    tabEducation: string;
    liveBadge: string;
    allocated: string;
    available: string;
    activeStatus: string;
    // Industry Tab
    industryTitle: string;
    industryDesc: string;
    industryGis: string;
    parcel1Name: string;
    parcel1Desc: string;
    parcel2Name: string;
    parcel2Desc: string;
    parcel3Name: string;
    parcel3Desc: string;
    parcel4Name: string;
    parcel4Desc: string;
    powerLabel: string;
    powerValue: string;
    gasLabel: string;
    gasValue: string;
    legalLabel: string;
    legalValue: string;
    // Factory Tab
    factoryTitle: string;
    factoryDesc: string;
    factoryOeeBadge: string;
    stage1Label: string;
    stage1Title: string;
    stage1Desc: string;
    stage2Label: string;
    stage2Title: string;
    stage2Desc: string;
    stage3Label: string;
    stage3Title: string;
    stage3Desc: string;
    factoryFooterProtocol: string;
    factoryFooterMaintenance: string;
    // R&D Tab
    rdTitle: string;
    rdDesc: string;
    rdBadge: string;
    rdStage1Tag: string;
    rdStage1Title: string;
    rdStage1Desc: string;
    rdStage1Partner: string;
    rdStage2Tag: string;
    rdStage2Title: string;
    rdStage2Desc: string;
    rdStage2Saving: string;
    rdStage3Tag: string;
    rdStage3Title: string;
    rdStage3Desc: string;
    rdStage3Speed: string;
    rdFooterModel: string;
    rdFooterRate: string;
    // Education Tab
    eduTitle: string;
    eduDesc: string;
    eduBadge: string;
    eduCard1Tag: string;
    eduCard1Title: string;
    eduCard1Desc: string;
    eduCard1Metric: string;
    eduCard2Tag: string;
    eduCard2Title: string;
    eduCard2Desc: string;
    eduCard2Metric: string;
    eduCard3Tag: string;
    eduCard3Title: string;
    eduCard3Desc: string;
    eduCard3Metric: string;
    eduFooterCert: string;
    eduFooterSafety: string;
  };
  platformsSection: {
    tag: string;
    title: string;
    description: string;
    ctaBtn: string;
    activeBadge: string;
    platforms: PlatformItem[];
  };
  techLayersSection: {
    tag: string;
    title: string;
    description: string;
    stepPrefix: string;
    layers: Array<{
      step: string;
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  telemetrySection: {
    tag: string;
    title: string;
    description: string;
    liveBadge: string;
    refreshNote: string;
    tile1Title: string;
    tile1Sub: string;
    tile1FootLabel: string;
    tile2Title: string;
    tile2Sub: string;
    tile2FootLabel: string;
    tile2FootValue: string;
    tile3Title: string;
    tile3Sub: string;
    tile3FootLabel: string;
    tile3FootValue: string;
    tile4Title: string;
    tile4Sub: string;
    tile4FootLabel: string;
    tile4FootValue: string;
  };
  contactSection: {
    tag: string;
    title: string;
    description: string;
    officeLabel: string;
    officeValue: string;
    emailLabel: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      platformLabel: string;
      platformOptions: {
        all: string;
        industry: string;
        factory: string;
        rd: string;
        education: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
    };
  };
  demoModal: {
    title: string;
    subtitle: string;
    close: string;
    phoneLabel: string;
    submit: string;
  };
  footer: {
    tagline: string;
    rights: string;
    locations: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  // ============================================================
  // UZBEK (UZ) - 100% Qisqa, Aniq va Sof O'zbek Tili
  // ============================================================
  uz: {
    nav: {
      platforms: "Platformalar",
      techLayers: "Texnologiya",
      telemetry: "Telemetriya",
      contact: "Bog'lanish",
      demoButton: "Demo Olish",
    },
    hero: {
      groupTag: "DEEP TECH & DIGITAL TWIN GROUP",
      titleStart: "Sanoat, ishlab chiqarish va ilm-fanning",
      titleHighlight: "yagona raqamli egizagi",
      titleEnd: ".",
      description:
        "Sanoat zonalari (Maydon & EIZ), ishlab chiqarish (IIoT), texnologiya transferi (R&D) hamda professional ta'limni (VR & Akademiya) birlashtiruvchi ekotizim.",
      ctaDemo: "Demo Belgilash",
      ctaPlatforms: "Platformalarni Ko'rish",
      statusActive: "Tizim Ishlamoqda",
    },
    stats: {
      label1: "Asosiy Yo'nalish",
      value1: "4 ta Ustun",
      sub1: "Maydon, Zavod, R&D va Akademiya",
      label2: "Yagona Maydon",
      value2: "1,240+ Ga",
      sub2: "Monitoringdagi sanoat hududlari",
      label3: "Tizim Samaradorligi",
      value3: "99.4%",
      sub3: "Raqamli model aniqligi",
    },
    twinExplorer: {
      tabIndustry: "1. Industry (Maydon & EIZ)",
      tabFactory: "2. Factory (Ishlab Chiqarish)",
      tabRd: "3. R&D (Sanoat-Ilm Hamkorligi)",
      tabEducation: "4. Education (Ta'lim & VR)",
      liveBadge: "Jonli Tizim",
      allocated: "Band",
      available: "Bo'sh",
      activeStatus: "FAOL",
      // Industry
      industryTitle: "Toshkent Maxsus Sanoat Zonasi (EIZ) — 3D GIS Maydon Egizagi",
      industryDesc: "1,240 Gektar hudud, 48 ta sanoat maydoni va markaziy kommunikatsiyalar",
      industryGis: "GIS: 41.2995° N, 69.2401° E",
      parcel1Name: "Maydon A-01",
      parcel1Desc: "Farmatsevtika zavodi",
      parcel2Name: "Maydon A-02",
      parcel2Desc: "Mashinasozlik va avtomatika",
      parcel3Name: "Maydon B-01",
      parcel3Desc: "To'qimachilik klasteri",
      parcel4Name: "Maydon B-02",
      parcel4Desc: "Metall konstruksiya korxonasi",
      powerLabel: "Elektr Nimstansiyasi",
      powerValue: "110/10 kV — 12 MW Zaxira",
      gasLabel: "Magistral Gaz Quvuri",
      gasValue: "0.6 MPa Yuqori Bosim",
      legalLabel: "Huquqiy Imtiyoz (EIZ)",
      legalValue: "0% Bojxona / 10 yil Soliq Imtiyozi",
      // Factory
      factoryTitle: "Zavod Ishlab Chiqarish Liniyasi — SCADA & IIoT Telemetriyasi",
      factoryDesc: "Avtomatlashtirilgan oqim, datchiklar telemetriyasi va OEE unumdorlik tahlili",
      factoryOeeBadge: "OEE: 95.8% (Optimal)",
      stage1Label: "01-BO'LIM: XOMASHYO",
      stage1Title: "Yuklash Dastgohi",
      stage1Desc: "Datchik harorati: 42.1°C\nYuklama: 88% quvvat",
      stage2Label: "02-BO'LIM: MONTAJ",
      stage2Title: "Robotik Payvandlash",
      stage2Desc: "Tebranish darajasi: 1.1 mm/s\nSikl davomiyligi: 14.2 soniya",
      stage3Label: "03-BO'LIM: SIFAT NAZORATI",
      stage3Title: "Optik Skaner",
      stage3Desc: "Nuqsonlar: 0.02% (Minimal)\nChiqish hajmi: 1,840 dona/soat",
      factoryFooterProtocol: "Protokol: OPC-UA over TLS · PLC: Siemens S7-1500",
      factoryFooterMaintenance: "Bashoratli Ta'mirlash: Xavf 0%",
      // R&D
      rdTitle: "Sanoat-Ilm Hamkorligi & Texnologiya Transferi Laboratoriyasi",
      rdDesc: "Universitet ilmiy ishlanmalarini 3D simulyatsiya orqali sinash va ishlab chiqarishga joriy etish",
      rdBadge: "24+ Faol Transfer Loyihasi",
      rdStage1Tag: "01-BOSQICH: ILMIY R&D",
      rdStage1Title: "Akademik R&D & Patent",
      rdStage1Desc: "Universitet laboratoriyalarida yaratilgan yangi material, algoritm va konstruksiya loyihalari.",
      rdStage1Partner: "Hamkorlar: 8 ta Yetakchi Universitet",
      rdStage2Tag: "02-BOSQICH: RAQAMLI EGIZAK",
      rdStage2Title: "3D Virtual Prototiplash",
      rdStage2Desc: "Qimmatbaho jismoniy qoliplarsiz, raqamli egizak muhitida to'liq yuklama sinovlari.",
      rdStage2Saving: "Xarajat Tejami: 72% gacha arzonroq",
      rdStage3Tag: "03-BOSQICH: ISHLAB CHIQARISH",
      rdStage3Title: "Zavodga Integratsiya",
      rdStage3Desc: "Sinovdan o'tgan texnologiyani to'g'ridan-to'g'ri DigiTwins Factory platformasi orqali liniyaga ulash.",
      rdStage3Speed: "Ishga Tushish Tezligi: 2.8x tezroq",
      rdFooterModel: "Hamkorlik Modeli: Intellektual Mulk Himoyasi & Litsenziyalash",
      rdFooterRate: "Tijoratlashtirish Ko'rsatkichi: 91.5% Muvaffaqiyat",
      // Education
      eduTitle: "Sanoat Ta'lim Akademiyasi — VR Simulyator & Malaka Nazorati",
      eduDesc: "Sanoat xodimlari va operatorlar uchun xavfsiz virtual trenajyorlar va sertifikatsiya",
      eduBadge: "4,500+ Malakali Xodim",
      eduCard1Tag: "XAVFSIZLIK VR TIZIMI",
      eduCard1Title: "Texnika Xavfsizligi VR",
      eduCard1Desc: "Favqulodda vaziyatlar, yuqori kuchlanish va sanoat xavfsizligi bo'yicha virtual trenajyor.",
      eduCard1Metric: "Muvaffaqiyat Ko'rsatkichi: 99.1%",
      eduCard2Tag: "USKUNA EGIZAGI",
      eduCard2Title: "Dastgoh Operatori Trenajyori",
      eduCard2Desc: "Qimmatbaho uskunani buzmasdan, 1:1 fizik modelda boshqarishni o'rgatuvchi trenajyor.",
      eduCard2Metric: "O'rganish Tezligi: 3.4x tezroq",
      eduCard3Tag: "MALAKA ANALITIKASI",
      eduCard3Title: "Raqamli Sertifikatsiya",
      eduCard3Desc: "Xodimlar reflekslari, xatolik darajasi va xalqaro standartlarga (OSHA) muvofiqlik nazorati.",
      eduCard3Metric: "Standart: ISO 9001 / OSHA",
      eduFooterCert: "Sertifikatsiya: Xalqaro Sanoat Standartlari",
      eduFooterSafety: "O'quv jarayonida xavf: Mutlaqo 0%",
    },
    platformsSection: {
      tag: "XIZMATLAR VA PLATFORMALAR",
      title: "To'rtta strategik vertikal",
      description: "Sanoat zonalari, aqlli ishlab chiqarish, R&D transferi va VR ta'limi.",
      ctaBtn: "Demo So'rash",
      activeBadge: "FAOL",
      platforms: [
        {
          id: "industry",
          badge: "MAYDON & EIZ",
          title: "DigiTwins Industry",
          subtitle: "Sanoat zonalari & 3D GIS egizagi",
          features: [
            "Yer maydonlarini 3D taqsimlash",
            "Infratuzilma (gaz, tok, suv) telemetriyasi",
            "Investorlar uchun raqamli portal",
          ],
          metricLabel: "Yig'ilgan Maydon",
          metricValue: "1,240 Ga",
          metricSub: "3,850 datchik nuqtasi",
        },
        {
          id: "factory",
          badge: "ISHLAB CHIQARISH",
          title: "DigiTwins Factory",
          subtitle: "Aqlli ishlab chiqarish & IIoT",
          features: [
            "Real vaqt OEE unumdorlik nazorati",
            "Bashoratli ta'mirlash (Predictive)",
            "Virtual ishga tushirish (Commissioning)",
          ],
          metricLabel: "OEE Unumdorligi",
          metricValue: "95.8%",
          metricSub: "To'xtalishlar -38%",
        },
        {
          id: "rd",
          badge: "R&D TRANSFER",
          title: "DigiTwins R&D",
          subtitle: "Sanoat-Ilm Texnologiya Transferi",
          features: [
            "Universitet — Zavod to'g'ridan-to'g'ri ko'prigi",
            "3D virtual prototiplash va sinov",
            "Patentlarni sanoatda tijoratlashtirish",
          ],
          metricLabel: "Transfer Loyihalari",
          metricValue: "24+ Loyiha",
          metricSub: "8 ta hamkor universitet bilan",
        },
        {
          id: "education",
          badge: "TA'LIM & VR",
          title: "DigiTwins Education",
          subtitle: "VR Trenajyorlar & Akademiya",
          features: [
            "Sanoat xavfsizligi (HSE) VR tizimlari",
            "Dastgoh operatori virtual trenajyori",
            "Raqamli ISO/OSHA sertifikatsiya",
          ],
          metricLabel: "Tayyorlangan Kadrlar",
          metricValue: "4,500+",
          metricSub: "98.4% sertifikatlash natijasi",
        },
      ],
    },
    techLayersSection: {
      tag: "TEXNOLOGIK QATLAM",
      title: "4 bosqichli muhandislik arxitekturasi",
      description: "Fizik maydondan datchik ma'lumotlarini qabul qilib, ularni model va simulyatsiyaga aylantiramiz.",
      stepPrefix: "BOSQICH",
      layers: [
        {
          step: "01",
          title: "IoT & Telemetriya",
          description: "PLC, datchik va hisoblagichlardan uzluksiz ma'lumot oqimi.",
          tags: ["MQTT / OPC-UA", "Sensors", "Edge"],
        },
        {
          step: "02",
          title: "GIS & Fazoviy Model",
          description: "Hudud va binolarni millimetr aniqlikdagi 3D koordinataga ko'chirish.",
          tags: ["BIM", "GIS Spatial", "Point Cloud"],
        },
        {
          step: "03",
          title: "Jonli Simulyatsiya",
          description: "Fizik jarayonlarni virtual muhitda real vaqtda sinash.",
          tags: ["Physics Engine", "Real-Time Sync"],
        },
        {
          step: "04",
          title: "AI Tahlil & Qaror",
          description: "Mashinani o'rganish orqali eskirish va xatolarni oldindan aniqlash.",
          tags: ["Predictive Analytics", "Anomaly Detection"],
        },
      ],
    },
    telemetrySection: {
      tag: "JONLI KO'RSATKICHLAR",
      title: "Real vaqtdagi tizim telemetriyasi",
      description: "Sanoat maydonlari, ishlab chiqarish liniyalari va ilmiy-ta'limiy jarayonlar holati.",
      liveBadge: "JONLI TARMOQ",
      refreshNote: "Avtomatik yangilanadi",
      tile1Title: "MAYDON & EIZ (INDUSTRY)",
      tile1Sub: "1,240 Ga · 48 ta maydon",
      tile1FootLabel: "Kechikish (ping):",
      tile2Title: "ISHLAB CHIQARISH (FACTORY)",
      tile2Sub: "OEE Unumdorlik darajasi",
      tile2FootLabel: "Kutilmagan to'xtalish:",
      tile2FootValue: "0 daqiqa",
      tile3Title: "R&D TEXNOLOGIYA TRANSFERI",
      tile3Sub: "8 ta Hamkor Universitet & Lab",
      tile3FootLabel: "Tijoratlashtirish:",
      tile3FootValue: "91.5% Muvaffaqiyat",
      tile4Title: "VR TA'LIM (EDUCATION)",
      tile4Sub: "Tayyorlangan Sanoat Xodimlari",
      tile4FootLabel: "Imtihon topshirish:",
      tile4FootValue: "98.4%",
    },
    contactSection: {
      tag: "BOG'LANISH",
      title: "Muhandislik uchrashuvini rejalashtiramiz",
      description: "Sanoat hududingiz, zavodingiz yoki ta'lim loyihangiz uchun to'g'ridan-to'g'ri bog'laning.",
      officeLabel: "Bosh Qarorgoh",
      officeValue: "Toshkent shahri, O'zbekiston",
      emailLabel: "Elektron Pochta",
      form: {
        nameLabel: "Ism Familiya",
        namePlaceholder: "Masalan: Jamshid Rasulov",
        companyLabel: "Tashkilot / Korxona",
        companyPlaceholder: "Kompaniya nomi",
        emailLabel: "Elektron Pochta",
        emailPlaceholder: "nomi@kompaniya.uz",
        platformLabel: "Qiziqtirgan yo'nalish",
        platformOptions: {
          all: "Barcha yo'nalishlar (Kompleks ekotizim)",
          industry: "DigiTwins Industry (Maydon & EIZ)",
          factory: "DigiTwins Factory (Ishlab Chiqarish)",
          rd: "DigiTwins R&D (Sanoat-Ilm Hamkorligi)",
          education: "DigiTwins Education (Ta'lim & VR)",
        },
        messageLabel: "Loyiha haqida qisqacha",
        messagePlaceholder: "Hudud o'lchami, uskuna soni yoki maqsadlar...",
        submitBtn: "So'rov Yuborish",
        submittingBtn: "Yuborilmoqda...",
        successMsg: "So'rovingiz qabul qilindi! Tez orada bog'lanamiz.",
      },
    },
    demoModal: {
      title: "Demo Belgilash",
      subtitle: "DigiTwins platformasining amaliy imkoniyatlarini ko'rsatamiz.",
      close: "Yopish",
      phoneLabel: "Telefon yoki Telegram",
      submit: "Tasdiqlash",
    },
    footer: {
      tagline: "Sanoat, ishlab chiqarish, R&D va ta'lim uchun raqamli egizaklar guruhi.",
      rights: "Barcha huquqlar himoyalangan.",
      locations: "Toshkent · Istanbul · Global",
      privacy: "Maxfiylik",
      terms: "Shartlar",
    },
  },

  // ============================================================
  // TURKISH (TR) - 100% Doğal ve Sade Türkçe
  // ============================================================
  tr: {
    nav: {
      platforms: "Platformlar",
      techLayers: "Teknoloji",
      telemetry: "Telemetri",
      contact: "İletişim",
      demoButton: "Demo İste",
    },
    hero: {
      groupTag: "DEEP TECH & DİJİTAL İKİZ GRUBU",
      titleStart: "Fiziksel sahanın, üretimin ve bilimin",
      titleHighlight: "bütünleşik dijital ikizi",
      titleEnd: ".",
      description:
        "Sanayi bölgeleri (Saha & OSB), akıllı üretim (IIoT), teknoloji transferi (R&D) ve kurumsal eğitimi (VR & Akademi) tek altyapıda birleştiren ekosistem.",
      ctaDemo: "Demo Görüşmesi Ayarla",
      ctaPlatforms: "Platformları İncele",
      statusActive: "Sistem Aktif",
    },
    stats: {
      label1: "Temel Dikey",
      value1: "4 Ana Sütun",
      sub1: "Saha, Fabrika, Ar-Ge ve Akademi",
      label2: "Yönetilen Alan",
      value2: "1,240+ Ha",
      sub2: "OSB ve sanayi sahaları",
      label3: "Model Hassasiyeti",
      value3: "99.4%",
      sub3: "Simülasyon katsayısı",
    },
    twinExplorer: {
      tabIndustry: "1. Industry (Saha & OSB)",
      tabFactory: "2. Factory (Üretim & IIoT)",
      tabRd: "3. R&D (Sanayi-Akademi)",
      tabEducation: "4. Education (Eğitim & VR)",
      liveBadge: "Canlı Sistem",
      allocated: "Tahsis Edildi",
      available: "Uygun",
      activeStatus: "AKTİF",
      // Industry
      industryTitle: "Organize Sanayi Bölgesi (OSB) — 3D GIS Saha İkizi",
      industryDesc: "1,240 Hektar alan, 48 sanayi parseli ve merkezi altyapı şebekesi",
      industryGis: "GIS: 41.2995° N, 69.2401° E",
      parcel1Name: "Parsel A-01",
      parcel1Desc: "İlaç ve Tıbbi Cihaz Tesisi",
      parcel2Name: "Parsel A-02",
      parcel2Desc: "Makine ve Otomasyon Üretimi",
      parcel3Name: "Parsel B-01",
      parcel3Desc: "Tekstil ve İplik Kümesi",
      parcel4Name: "Parsel B-02",
      parcel4Desc: "Metal Konstrüksiyon Fabrikası",
      powerLabel: "Trafo Merkezi",
      powerValue: "110/10 kV — 12 MW Rezerv",
      gasLabel: "Ana Gaz Hattı",
      gasValue: "0.6 MPa Yüksek Basınç",
      legalLabel: "Hukuki Teşvik (OSB)",
      legalValue: "%0 Gümrük / 10 Yıl Vergi Muafiyeti",
      // Factory
      factoryTitle: "Akıllı Üretim Hattı — SCADA & IIoT Canlı Telemetrisi",
      factoryDesc: "Otomatik hat akışı, sensör telemetrisi ve OEE verimlilik optimizasyonu",
      factoryOeeBadge: "OEE: %95.8 (Optimal)",
      stage1Label: "01. İSTASYON: HAMMADDE",
      stage1Title: "Besleme Tezgahı",
      stage1Desc: "Sensör sıcaklığı: 42.1°C\nYük: %88 Nominal Güç",
      stage2Label: "02. İSTASYON: MONTAJ",
      stage2Title: "Robotik Kaynak",
      stage2Desc: "Titreşim: 1.1 mm/s\nÇevrim Süresi: 14.2 sn",
      stage3Label: "03. İSTASYON: KALİTE KONTROL",
      stage3Title: "Optik Tarayıcı",
      stage3Desc: "Hata Oranı: %0.02 (Minimum)\nÇıkış Kapasitesi: 1,840 adet/saat",
      factoryFooterProtocol: "Protokol: OPC-UA over TLS · PLC: Siemens S7-1500",
      factoryFooterMaintenance: "Kestirimci Bakım: Hata Riski %0",
      // R&D
      rdTitle: "Sanayi-Akademi İş Birliği & Teknoloji Transfer Laboratuvarı",
      rdDesc: "Üniversite Ar-Ge projelerinin 3D simülasyon ortamında ticarileştirilmesi ve üretime entegrasyonu",
      rdBadge: "24+ Aktif Transfer Projesi",
      rdStage1Tag: "01. AŞAMA: AKADEMİK AR-GE",
      rdStage1Title: "Ar-Ge & Patent Çıktısı",
      rdStage1Desc: "Üniversite laboratuvarlarında geliştirilen yeni materyal, algoritma ve donanım tasarımları.",
      rdStage1Partner: "Partnerler: 8 Öncü Üniversite",
      rdStage2Tag: "02. AŞAMA: DİJİTAL İKİZ",
      rdStage2Title: "3D Sanal Prototipleme",
      rdStage2Desc: "Fiziksel kalıp harcaması yapmadan, dijital ikiz ortamında tam yük testleri.",
      rdStage2Saving: "Maliyet Tasarrufu: %72 daha düşük",
      rdStage3Tag: "03. AŞAMA: ÜRETİME GEÇİŞ",
      rdStage3Title: "Fabrikaya Entegrasyon",
      rdStage3Desc: "Onaylanan teknolojinin doğrudan DigiTwins Factory platformu üzerinden sahada devreye alınması.",
      rdStage3Speed: "Pazara Çıkış: 2.8x daha hızlı",
      rdFooterModel: "Model: Fikri Mülkiyet (IP) Koruma & Lisanslama",
      rdFooterRate: "Ticarileşme Oranı: %91.5 Başarı",
      // Education
      eduTitle: "Sanayi Eğitim Akademisi — VR Simülasyonu & Yetkinlik Testi",
      eduDesc: "Sanayi personeli ve operatörler için sıfır riskli sanal tesis eğitimleri ve sertifikasyon",
      eduBadge: "4,500+ Sertifikalı Personel",
      eduCard1Tag: "İSG VR SİSTEMİ",
      eduCard1Title: "İş Güvenliği Simülasyonu",
      eduCard1Desc: "Yüksek gerilim, yangın ve acil durum prosedürlerinin 1:1 sanal ortamda tatbikatı.",
      eduCard1Metric: "Başarı Oranı: %99.1",
      eduCard2Tag: "MAKİNE İKİZİ",
      eduCard2Title: "Operatör Trenajörü",
      eduCard2Desc: "Pahalı tesis ve robot kollarını sanal ortamda hatasız kullanmayı öğreten trenajör.",
      eduCard2Metric: "Öğrenme Hızı: 3.4x daha hızlı",
      eduCard3Tag: "YETKİNLİK ANALİTİĞİ",
      eduCard3Title: "Dijital Sertifikasyon",
      eduCard3Desc: "Personel refleksleri, hata oranları ve uluslararası standartlara (OSHA) uyumluluk denetimi.",
      eduCard3Metric: "Standart: ISO 9001 / OSHA",
      eduFooterCert: "Sertifikasyon: Uluslararası Sanayi Standartları",
      eduFooterSafety: "Eğitimde kaza riski: Kesinlikle %0",
    },
    platformsSection: {
      tag: "HİZMETLER VE PLATFORMLAR",
      title: "Dört stratejik dikey platform",
      description: "OSB sahaları, akıllı üretim, Ar-Ge transferi ve VR eğitimi.",
      ctaBtn: "Demo Talep Et",
      activeBadge: "AKTİF",
      platforms: [
        {
          id: "industry",
          badge: "SAHA & OSB",
          title: "DigiTwins Industry",
          subtitle: "OSB & 3D GIS Saha İkizi",
          features: [
            "Parsellerin 3D dijital tahsisi",
            "Altyapı (trafo, gaz, su) telemetrisi",
            "Yatırımcılar için şeffaf portal",
          ],
          metricLabel: "Yönetilen Alan",
          metricValue: "1,240 Ha",
          metricSub: "3,850 telemetri düğümü",
        },
        {
          id: "factory",
          badge: "ÜRETİM & IIoT",
          title: "DigiTwins Factory",
          subtitle: "Akıllı Üretim & Hat İkizi",
          features: [
            "Gerçek zamanlı OEE verimlilik takibi",
            "Kestirimci bakım (Predictive)",
            "Sanal devreye alma (Commissioning)",
          ],
          metricLabel: "Tesis OEE Oranı",
          metricValue: "95.8%",
          metricSub: "Plansız duruşlar -%38",
        },
        {
          id: "rd",
          badge: "R&D TRANSFER",
          title: "DigiTwins R&D",
          subtitle: "Sanayi-Akademi İş Birliği",
          features: [
            "Üniversite — Fabrika doğrudan köprüsü",
            "3D sanal prototipleme ve test",
            "Patent ve fikri mülkiyet ticarileştirme",
          ],
          metricLabel: "Transfer Edilen",
          metricValue: "24+ Proje",
          metricSub: "8 partner üniversite ile",
        },
        {
          id: "education",
          badge: "EĞİTİM & VR",
          title: "DigiTwins Education",
          subtitle: "VR Trenajör & Akademi",
          features: [
            "İSG iş güvenliği VR sistemleri",
            "Operatör sanal trenajörü",
            "Uluslararası ISO/OSHA sertifikasyon",
          ],
          metricLabel: "Eğitilen Personel",
          metricValue: "4,500+",
          metricSub: "%98.4 başarı sertifikasyon oranı",
        },
      ],
    },
    techLayersSection: {
      tag: "TEKNOLOJİK KATMAN",
      title: "4 katmanlı derin mühendislik mimarisi",
      description: "Fiziksel sahadan toplanan telemetri verisini 3D model ve canlı simülasyona dönüştüren zincir.",
      stepPrefix: "KATMAN",
      layers: [
        {
          step: "01",
          title: "IoT & Telemetri Katmanı",
          description: "Endüstriyel PLC, sayaç ve sensörlerden şifreli veri akışı.",
          tags: ["MQTT / OPC-UA", "Sensors", "Edge"],
        },
        {
          step: "02",
          title: "Mekansal GIS Modelleme",
          description: "Fabrika yerleşimi ve arazi verisinin 3D koordinatlara aktarımı.",
          tags: ["BIM", "GIS Spatial", "Point Cloud"],
        },
        {
          step: "03",
          title: "Canlı Simülasyon",
          description: "Fiziksel olayların sanal ortamda eşzamanlı canlandırılması.",
          tags: ["Physics Engine", "Real-Time Sync"],
        },
        {
          step: "04",
          title: "Yapay Zeka & Analitik",
          description: "Kestirimci bakım ve anomali tespiti.",
          tags: ["Predictive Analytics", "Anomaly Detection"],
        },
      ],
    },
    telemetrySection: {
      tag: "CANLI SİSTEM",
      title: "Gerçek zamanlı telemetri göstergeleri",
      description: "Saha, fabrika ve eğitim simülasyonlarından gelen anlık telemetri akışı.",
      liveBadge: "CANLI AĞ",
      refreshNote: "Otomatik güncellenir",
      tile1Title: "SAHA & OSB (INDUSTRY)",
      tile1Sub: "1,240 Ha · 48 parsel",
      tile1FootLabel: "Gecikme (ping):",
      tile2Title: "ÜRETİM OEE (FACTORY)",
      tile2Sub: "Ekipman Verimlilik Oranı",
      tile2FootLabel: "Plansız duruş:",
      tile2FootValue: "0 dk",
      tile3Title: "R&D TECHTRANSFER",
      tile3Sub: "8 Partner Üniversite & Lab",
      tile3FootLabel: "Ticarileşme:",
      tile3FootValue: "%91.5 Başarı",
      tile4Title: "VR EĞİTİM (EDUCATION)",
      tile4Sub: "Eğitilen Sanayi Personeli",
      tile4FootLabel: "Başarı testi:",
      tile4FootValue: "%98.4",
    },
    contactSection: {
      tag: "İLETİŞİM",
      title: "Teknik görüşme planlayalım",
      description: "Sanayi sahanız, tesisiniz veya akademi projeniz için mühendislik ekibimizle görüşün.",
      officeLabel: "Genel Merkez",
      officeValue: "Taşkent, Özbekistan",
      emailLabel: "E-Posta",
      form: {
        nameLabel: "Ad Soyad",
        namePlaceholder: "Örn: Mehmet Yılmaz",
        companyLabel: "Kurum / Şirket",
        companyPlaceholder: "Şirketinizin Adı",
        emailLabel: "E-Posta",
        emailPlaceholder: "ornek@sirket.uz",
        platformLabel: "İlgilendiğiniz Alan",
        platformOptions: {
          all: "Tüm Platformlar (Bütünleşik Grup)",
          industry: "DigiTwins Industry (Saha & OSB)",
          factory: "DigiTwins Factory (Üretim & IIoT)",
          rd: "DigiTwins R&D (Sanayi-Akademi)",
          education: "DigiTwins Education (Eğitim & VR)",
        },
        messageLabel: "Proje Detayları",
        messagePlaceholder: "Saha büyüklüğü, hat sayısı veya hedefler...",
        submitBtn: "Talebi Gönder",
        submittingBtn: "Gönderiliyor...",
        successMsg: "Talebiniz alındı! En kısa sürede dönüş yapacağız.",
      },
    },
    demoModal: {
      title: "Demo Görüşmesi İste",
      subtitle: "DigiTwins platformunun canlı kabiliyetlerini sahanız için gösterelim.",
      close: "Kapat",
      phoneLabel: "Telefon veya Telegram",
      submit: "Randevuyu Onayla",
    },
    footer: {
      tagline: "Sanayi, üretim, Ar-Ge ve eğitim için uçtan uca dijital ikiz grubu.",
      rights: "Tüm hakları saklıdır.",
      locations: "Taşkent · İstanbul · Global",
      privacy: "Gizlilik",
      terms: "Koşullar",
    },
  },

  // ============================================================
  // ENGLISH (EN) - 100% Concise and Clean English
  // ============================================================
  en: {
    nav: {
      platforms: "Platforms",
      techLayers: "Technology",
      telemetry: "Telemetry",
      contact: "Contact",
      demoButton: "Request Demo",
    },
    hero: {
      groupTag: "DEEP TECH & DIGITAL TWIN GROUP",
      titleStart: "Unified digital twins for physical fields, production and",
      titleHighlight: "industrial science",
      titleEnd: ".",
      description:
        "An end-to-end ecosystem integrating industrial parks (Field & SEZ), smart manufacturing (IIoT), R&D tech transfer, and immersive VR training.",
      ctaDemo: "Schedule Demo",
      ctaPlatforms: "Explore Platforms",
      statusActive: "System Online",
    },
    stats: {
      label1: "Core Verticals",
      value1: "4 Pillars",
      sub1: "Field, Factory, R&D, and Academy",
      label2: "Footprint",
      value2: "1,240+ Ha",
      sub2: "Monitored industrial parks",
      label3: "Model Fidelity",
      value3: "99.4%",
      sub3: "Simulation precision",
    },
    twinExplorer: {
      tabIndustry: "1. Industry (Field & SEZ)",
      tabFactory: "2. Factory (Manufacturing)",
      tabRd: "3. R&D (Industry-Academia)",
      tabEducation: "4. Education (Training & VR)",
      liveBadge: "Live System",
      allocated: "Allocated",
      available: "Available",
      activeStatus: "ACTIVE",
      // Industry
      industryTitle: "Special Economic Zone (SEZ) — 3D GIS Spatial Twin",
      industryDesc: "1,240 Hectares footprint, 48 industrial parcels and municipal utilities",
      industryGis: "GIS: 41.2995° N, 69.2401° E",
      parcel1Name: "Parcel A-01",
      parcel1Desc: "Pharmaceutical Plant",
      parcel2Name: "Parcel A-02",
      parcel2Desc: "Machinery & Automation",
      parcel3Name: "Parcel B-01",
      parcel3Desc: "Textile Cluster",
      parcel4Name: "Parcel B-02",
      parcel4Desc: "Metal Fabrication Facility",
      powerLabel: "Power Substation",
      powerValue: "110/10 kV — 12 MW Reserve",
      gasLabel: "Main Gas Pipeline",
      gasValue: "0.6 MPa High Pressure",
      legalLabel: "Zoning Incentives (SEZ)",
      legalValue: "0% Customs / 10-Yr Tax Exemption",
      // Factory
      factoryTitle: "Smart Factory Production Line — SCADA & IIoT Telemetry",
      factoryDesc: "Automated line flow, sensor telemetries, and live OEE optimization",
      factoryOeeBadge: "OEE: 95.8% (Optimal)",
      stage1Label: "STATION 01: RAW MATERIAL",
      stage1Title: "Loading Infeed",
      stage1Desc: "Sensor Temp: 42.1°C\nLoad: 88% Rated Power",
      stage2Label: "STATION 02: ASSEMBLY",
      stage2Title: "Robotic Welding",
      stage2Desc: "Vibration: 1.1 mm/s\nCycle Time: 14.2 sec",
      stage3Label: "STATION 03: QUALITY CONTROL",
      stage3Title: "Optical Inspection",
      stage3Desc: "Defect Rate: 0.02% (Minimum)\nThroughput: 1,840 units/hr",
      factoryFooterProtocol: "Protocol: OPC-UA over TLS · PLC: Siemens S7-1500",
      factoryFooterMaintenance: "Predictive Maintenance: Risk 0%",
      // R&D
      rdTitle: "Industry-Academia Tech Transfer Laboratory",
      rdDesc: "Commercializing university scientific R&D through 3D simulation and production deployment",
      rdBadge: "24+ Active Transfer Projects",
      rdStage1Tag: "STAGE 01: ACADEMIC R&D",
      rdStage1Title: "R&D & Patent Assets",
      rdStage1Desc: "New materials, proprietary algorithms, and hardware architectures developed in university labs.",
      rdStage1Partner: "Partners: 8 Leading Universities",
      rdStage2Tag: "STAGE 02: DIGITAL TWIN",
      rdStage2Title: "3D Virtual Prototyping",
      rdStage2Desc: "Stress-testing under peak simulated workloads without expensive physical tooling.",
      rdStage2Saving: "Cost Reduction: Up to 72% lower",
      rdStage3Tag: "STAGE 03: PRODUCTION",
      rdStage3Title: "Factory Integration",
      rdStage3Desc: "Direct deployment of verified technologies onto production lines via DigiTwins Factory.",
      rdStage3Speed: "Time to Market: 2.8x faster",
      rdFooterModel: "Model: Intellectual Property (IP) Protection & Licensing",
      rdFooterRate: "Commercialization Rate: 91.5% Success",
      // Education
      eduTitle: "Industrial Training Academy — VR Simulation & Skill Assessment",
      eduDesc: "Zero-risk virtual simulations and certified skill assessment for industrial operators",
      eduBadge: "4,500+ Certified Specialists",
      eduCard1Tag: "HSE VR SYSTEM",
      eduCard1Title: "Industrial Safety VR",
      eduCard1Desc: "Immersive 1:1 drills for high voltage, fire safety, and emergency response procedures.",
      eduCard1Metric: "Certification Rate: 99.1%",
      eduCard2Tag: "MACHINE TWIN",
      eduCard2Title: "Operator Simulator",
      eduCard2Desc: "Digital twin training module for operating multi-million dollar machinery with zero risk.",
      eduCard2Metric: "Learning Velocity: 3.4x faster",
      eduCard3Tag: "COMPETENCY ANALYTICS",
      eduCard3Title: "Digital Certification",
      eduCard3Desc: "Real-time auditing of operator reaction times, error margins, and OSHA standard compliance.",
      eduCard3Metric: "Standard: ISO 9001 / OSHA",
      eduFooterCert: "Certification: International Industrial Standards",
      eduFooterSafety: "Training Injury Risk: Absolute 0%",
    },
    platformsSection: {
      tag: "SERVICES & VERTICALS",
      title: "Four strategic digital twin platforms",
      description: "Industrial zones, smart manufacturing, R&D transfer, and VR training.",
      ctaBtn: "Request Demo",
      activeBadge: "ACTIVE",
      platforms: [
        {
          id: "industry",
          badge: "FIELD & SEZ",
          title: "DigiTwins Industry",
          subtitle: "SEZs & 3D GIS Spatial Twin",
          features: [
            "3D parcel zoning & allocation",
            "Utility (power, gas, water) telemetry",
            "Transparent investor portal",
          ],
          metricLabel: "Managed Area",
          metricValue: "1,240 Ha",
          metricSub: "3,850 telemetry nodes",
        },
        {
          id: "factory",
          badge: "MANUFACTURING",
          title: "DigiTwins Factory",
          subtitle: "Smart Manufacturing & IIoT",
          features: [
            "Real-time OEE optimization",
            "Predictive maintenance",
            "Virtual commissioning",
          ],
          metricLabel: "Plant OEE",
          metricValue: "95.8%",
          metricSub: "Downtime reduced by 38%",
        },
        {
          id: "rd",
          badge: "R&D TRANSFER",
          title: "DigiTwins R&D",
          subtitle: "Industry-Academia Tech Transfer",
          features: [
            "University — Factory tech bridge",
            "3D virtual prototyping & testing",
            "Patent commercialization",
          ],
          metricLabel: "Transfer Projects",
          metricValue: "24+ Projects",
          metricSub: "With 8 partner universities",
        },
        {
          id: "education",
          badge: "TRAINING & VR",
          title: "DigiTwins Education",
          subtitle: "VR Simulators & Academy",
          features: [
            "HSE industrial safety VR modules",
            "Machinery operator digital twin",
            "ISO / OSHA digital certification",
          ],
          metricLabel: "Trained Specialists",
          metricValue: "4,500+",
          metricSub: "98.4% certification pass rate",
        },
      ],
    },
    techLayersSection: {
      tag: "ENGINEERING ARCHITECTURE",
      title: "4-Layer Deep Tech Stack",
      description: "Ingesting physical telemetry and converting it into accurate 3D spatial models and simulations.",
      stepPrefix: "LAYER",
      layers: [
        {
          step: "01",
          title: "IoT & Telemetry Ingestion",
          description: "Secure data pipelines from industrial PLCs, meters, and sensors.",
          tags: ["MQTT / OPC-UA", "Sensors", "Edge"],
        },
        {
          step: "02",
          title: "Spatial & GIS Modeling",
          description: "Sub-centimeter 3D spatial mapping of sites and assets.",
          tags: ["BIM", "GIS Spatial", "Point Cloud"],
        },
        {
          step: "03",
          title: "Real-Time Simulation",
          description: "Mirroring physical machine dynamics under simulated stress.",
          tags: ["Physics Engine", "Real-Time Sync"],
        },
        {
          step: "04",
          title: "AI Decision Support",
          description: "Predicting equipment wear, energy waste, and anomalies.",
          tags: ["Predictive Analytics", "Anomaly Detection"],
        },
      ],
    },
    telemetrySection: {
      tag: "LIVE SYSTEM",
      title: "Real-Time Telemetry Feed",
      description: "Live operational telemetry across industrial zones, production lines, and training academies.",
      liveBadge: "LIVE NETWORK",
      refreshNote: "Auto-updating",
      tile1Title: "FIELD & SEZ (INDUSTRY)",
      tile1Sub: "1,240 Ha · 48 parcels",
      tile1FootLabel: "Latency (ping):",
      tile2Title: "PLANT OEE (FACTORY)",
      tile2Sub: "Equipment Effectiveness Rate",
      tile2FootLabel: "Unplanned downtime:",
      tile2FootValue: "0 min",
      tile3Title: "R&D TECHTRANSFER",
      tile3Sub: "8 Partner Universities & Labs",
      tile3FootLabel: "Commercialization:",
      tile3FootValue: "91.5% Success",
      tile4Title: "VR TRAINING (EDUCATION)",
      tile4Sub: "Certified Industrial Specialists",
      tile4FootLabel: "Certification rate:",
      tile4FootValue: "98.4%",
    },
    contactSection: {
      tag: "CONTACT",
      title: "Schedule an Engineering Consultation",
      description: "Connect directly with our engineering team for deployment across your site, factory, or academy.",
      officeLabel: "Headquarters",
      officeValue: "Tashkent, Uzbekistan",
      emailLabel: "Email",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "e.g., Alex Johnson",
        companyLabel: "Company / Organization",
        companyPlaceholder: "Organization Name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@company.com",
        platformLabel: "Vertical of Interest",
        platformOptions: {
          all: "All Verticals (Unified Deep Tech Group)",
          industry: "DigiTwins Industry (Field & SEZ)",
          factory: "DigiTwins Factory (Manufacturing)",
          rd: "DigiTwins R&D (Industry-Academia)",
          education: "DigiTwins Education (Training & VR)",
        },
        messageLabel: "Project Scope",
        messagePlaceholder: "Site footprint, number of lines, or specific objectives...",
        submitBtn: "Send Request",
        submittingBtn: "Submitting...",
        successMsg: "Request received! Our team will contact you shortly.",
      },
    },
    demoModal: {
      title: "Schedule Live Demo",
      subtitle: "See how DigiTwins models and optimizes your physical operations.",
      close: "Close",
      phoneLabel: "Phone or Telegram",
      submit: "Confirm Request",
    },
    footer: {
      tagline: "The deep tech group building digital twins for industry, manufacturing, R&D, and training.",
      rights: "All rights reserved.",
      locations: "Tashkent · Istanbul · Global",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
};
