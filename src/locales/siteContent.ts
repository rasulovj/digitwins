export type SiteLanguage = 'UZ' | 'TR' | 'EN';

export interface SiteDictionary {
  nav: {
    pillars: string;
    greenCarbon: string;
    events: string;
    demoButton: string;
    mobilePillars: string;
    mobileGreen: string;
    mobileEvents: string;
  };
  hero: {
    badge: string;
    titleGradient: string;
    description: string;
    telemetryTitle: string;
    online: string;
    fpsLabel: string;
    nodesLabel: string;
    nodesCount: string;
    latencyLabel: string;
    oeeLabel: string;
    oeeValue: string;
    dragHint: string;
  };
  dimensions: {
    badge: string;
    title: string;
    subtitle: string;
    expandBadge: string;
    pillar1: {
      tag: string;
      title: string;
      sub: string;
      desc: string;
      osb1Badge: string;
      osb1Caption: string;
      osb3Badge: string;
      osb3Caption: string;
      osb4Badge: string;
      osb4Caption: string;
    };
    pillar2: {
      tag: string;
      title: string;
      sub: string;
      desc: string;
      dt1Badge: string;
      dt1Caption: string;
      dt4Badge: string;
      dt4Caption: string;
      dt2Badge: string;
      dt2Caption: string;
    };
    greenCarbon: {
      tag: string;
      standard: string;
      title: string;
      desc: string;
      c1: string;
      c2: string;
      c3: string;
      c4: string;
      dt5Badge: string;
      dt5Caption: string;
    };
  };
  events: {
    badge: string;
    title: string;
    subtitle: string;
    forMoreInfo: string;
    card1: {
      tag: string;
      location: string;
      title: string;
      desc: string;
      cta: string;
      osb5Badge: string;
      osb5Caption: string;
      osb2Badge: string;
      osb2Caption: string;
    };
    card2: {
      tag: string;
      location: string;
      sub: string;
      title: string;
      desc: string;
      cta: string;
      dt3Badge: string;
      dt3Caption: string;
    };
  };
  lightbox: {
    defaultCaption: string;
    close: string;
    escHint: string;
    brand: string;
  };
  modal: {
    title: string;
    subtitle: string;
    companyLabel: string;
    companyPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    topicLabel: string;
    submitButton: string;
    feedbackSuccess: string;
    topics: {
      summit: string;
      workshop: string;
      osb: string;
      factory: string;
      greenCarbon: string;
    };
  };
  footer: {
    rights: string;
    linkPillars: string;
    linkGreen: string;
    linkEvents: string;
    linkContact: string;
  };
}

export const siteContent: Record<SiteLanguage, SiteDictionary> = {
  // ==========================================================
  // UZBEK (UZ)
  // ==========================================================
  UZ: {
    nav: {
      pillars: "OSB & Fabrika Egizagi",
      greenCarbon: "Green Carbon AI",
      events: "Sammit & Amaliyot",
      demoButton: "Demo & Aloqa",
      mobilePillars: "➔ OSB va Fabrika Egizaklari",
      mobileGreen: "➔ Green Carbon AI (SKDM)",
      mobileEvents: "➔ Sammit & Jonli Amaliyotlar",
    },
    hero: {
      badge: "SANOAT RAQAMLI EGIZAK PLATFORMASI",
      titleGradient: "Sanoat Zonalari va Inshootlar uchun Raqamli Egizak Platformasi.",
      description:
        "Organize sanoat zonalaridan tortib yirik korxona va fabrikalargacha barcha jismoniy maydonlarni integratsiyalashgan dasturiy yechimlar, GIS xaritalash, aktivlar nazorati va Green Carbon AI qatlami bilan raqamli asrga olib chiqamiz.",
      telemetryTitle: "JONLI TELEMETRIYA VA BOSHQARUV MARKAZI (Spatial Digital Twin)",
      online: "ONLINE",
      fpsLabel: "FPS:",
      nodesLabel: "Tugunlar Soni:",
      nodesCount: "142 Faol Tugun",
      latencyLabel: "Telemetriya Kechikishi:",
      oeeLabel: "Inshoot Salomatligi:",
      oeeValue: "%89 Samaradorlik (OEE)",
      dragHint: "Sichqoncha yoki Sensor bilan 3D Aylantiring",
    },
    dimensions: {
      badge: "MUTAXASSISLIK YO'NALISHLARIMIZ",
      title: "Ikki Asosiy Ustunda Raqamlashtirish",
      subtitle:
        "Hududiy miqyosdan to korxona ichki maydonlarigacha yaxlit raqamli egizak ekotizimi. Xaritalarni kattalashtirib ko'rish uchun ularga bosing.",
      expandBadge: "Kattalashtirish",
      pillar1: {
        tag: "1-USTUN",
        title: "OSB va Sanoat Zonalari Raqamli Egizagi",
        sub: "Yer Ajratish, Infratuzilma va Investor Portali",
        desc: "Sanoat zonalarining yer parsel xaritalari, infratuzilma tarmoqlari va investitsiya maydonlarini interaktiv raqamli muhitga o'tkazamiz. Investorlar uchun shaffof yer ajratish portalini taqdim etamiz.",
        osb1Badge: "3D OSB Bosh Reja (osb1.jpeg)",
        osb1Caption: "OSB 3D GIS Umumiy Joylashuv va Qatlam Xaritasi (osb1.jpeg)",
        osb3Badge: "Ruxsatnoma GIS (osb3.jpeg)",
        osb3Caption: "Sanoat Yer Maydonlari Ruxsatnomalari va Statistika GIS Paneli (osb3.jpeg)",
        osb4Badge: "Kadastr (osb4.jpeg)",
        osb4Caption: "Sanoat Maydonlari Kadastr va Mulkchilik Qatlamlari Boshqaruvi (osb4.jpeg)",
      },
      pillar2: {
        tag: "2-USTUN",
        title: "Fabrika, Bino va Inshootlar",
        sub: "Raqamli Aktiv, Inshoot va Operatsion Boshqaruv",
        desc: "Korxona va inshootlarning barchasini yoki kritik ishlab chiqarish bo'limlarini raqamlashtirib, aktivlar, uskunalar va jarayonlarni kuzatishni ta'minlaymiz. Ishlab chiqarish unumdorligini yagona markaziy panelda jamlaymiz.",
        dt1Badge: "Robotik Liniya & 3D Skaner (dt1.jpeg)",
        dt1Caption: "Robotik Ishlab Chiqarish Liniyasi 3D Raqamli Egizagi (dt1.jpeg)",
        dt4Badge: "Meqrix Datchiklar (dt4.jpeg)",
        dt4Caption: "Meqrix Sanoat IoT Datchiklari va Jonli Telemetriya Paneli (dt4.jpeg)",
        dt2Badge: "Boshqaruv Paneli (dt2.jpeg)",
        dt2Caption: "Aqlli Fabrika Qo'mondonlik Ekrani va Jonli SCADA Paneli (dt2.jpeg)",
      },
      greenCarbon: {
        tag: "BOSHQARUV QATLAMI: GREEN CARBON AI",
        standard: "SKDM / CBAM VA YI MOSLIGI",
        title: "Barqarorlik, Energiya va Uglerod Izini Boshqarish Qatlami",
        desc: "Sanoat zonalari va korxonalar uchun ISO 14064, ISO 14046 hamda YI SKDM standartlarida avtomatlashtirilgan uglerod izini hisoblash, energiya optimallashtirish va yashil hisobot platformasi.",
        c1: "Korporativ Uglerod (1-2-3 Ko'lamlar)",
        c2: "SKDM / CBAM Deklaratsiyasi",
        c3: "Suv Izi (ISO 14046)",
        c4: "Mahsulot Uglerod Izi",
        dt5Badge: "Aktiv & Energiya Kuzatuvi (dt5.jpeg)",
        dt5Caption: "Green Carbon AI Aktiv Salomatligi va Bashoratli Xizmat Ekrani (dt5.jpeg)",
      },
    },
    events: {
      badge: "O'ZBEKISTON RASMIY TADBIR VA AMALIYOT DASTURI",
      title: "Sammitlar va Jonli Maydon Uchrashuvlari",
      subtitle:
        "Hududiy sanoat yetakchilari, OSB boshqaruvi va korxona rahbarlari uchun maxsus sessiyalar.",
      forMoreInfo: "Ishtirok & Batafsil Ma'lumot Uchun:",
      card1: {
        tag: "SANOAT SAMMITI",
        location: "O'zbekiston",
        title: "O'zbekiston Aqlli Sanoat Sammiti",
        desc: "O'zbekistondagi Sanoat Zonalari rahbarlari, Vazirlik vakillari va xalqaro investorlarni birlashtiruvchi raqamli yer maydonlari hamda aqlli OSB sammiti.",
        cta: "Ro'yxatdan O'tish",
        osb5Badge: "OSB Boshqaruv (osb5.jpeg)",
        osb5Caption: "Aqlli OSB Boshqaruv Qo'mondonlik Markazi (osb5.jpeg)",
        osb2Badge: "Parsel Rejasi (osb2.jpeg)",
        osb2Caption: "OSB Bosh Rejasi Raqamli Egizagi va Yer Maydonlari (osb2.jpeg)",
      },
      card2: {
        tag: "AMALIY MAYDON TADBIRI",
        location: "Jonli Inshoot Skanerlash",
        sub: "\"Fabrikangizni Kashf Eting\" Amaliy Tadbiri",
        title: "AMALIYOT - Jonli Inshoot Skanerlash",
        desc: "Sanoatchilar va korxona egalari o'z ishlab chiqarish inshootlarining raqamli egizak salohiyati, aktivlar nazorati va energiya samaradorligini jonli joyida sinab ko'radigan maxsus maydon uchrashuvi.",
        cta: "Amaliyotga Ariza",
        dt3Badge: "IoT & Bosim/Harorat Datchiklari (dt3.jpeg)",
        dt3Caption: "Jonli Maydon Datchik Skaneri va Mobil Planshet Boshqaruvi (dt3.jpeg)",
      },
    },
    lightbox: {
      defaultCaption: "Görsel Detayi",
      close: "Yopish",
      escHint: "Yopish uchun [ESC] yoki tashqariga bosing",
      brand: "DigiTwins.uz Spatial Data Viewer",
    },
    modal: {
      title: "Katılım & Demo So'rovi",
      subtitle: "Maydoningiz, sammit ishtiroki yoki amaliyot uchun darhol bog'lanamiz.",
      companyLabel: "Tashkilot / Fabrika / Kompaniya Nomi",
      companyPlaceholder: "Masalan: Toshkent Sanoat Zonasi / Korxona Nomi",
      nameLabel: "Mas'ul Shaxsning Ismi Sharif",
      namePlaceholder: "Ism Familiya",
      phoneLabel: "Telefon / Aloqa",
      phonePlaceholder: "+998 / +90 ...",
      topicLabel: "Ishtirok / Qiziqtirgan Yo'nalish",
      submitButton: "Arizani Yuborish",
      feedbackSuccess: "✓ So'rovingiz qabul qilindi! Mutaxassislarimiz tez orada bog'lanishadi.",
      topics: {
        summit: "O'zbekiston Aqlli Sanoat Sammiti (OSB & Vazirlik)",
        workshop: "AMALIYOT - \"Fabrikangizni Kashf Eting\" (Jonli Skanerlash)",
        osb: "Sanoat Zonasi (OSB) Raqamli Egizagi & GIS",
        factory: "Fabrika & Ishlab Chiqarish Inshooti Egizagi (Aktiv & Datchik)",
        greenCarbon: "Green Carbon AI & SKDM Barqarorlik Qatlami",
      },
    },
    footer: {
      rights: "© 2026 DigiTwins.uz — Spatial Digital Twin. Barcha huquqlar himoyalangan.",
      linkPillars: "OSB & Fabrika",
      linkGreen: "Green Carbon AI",
      linkEvents: "O'zbekiston Sammiti",
      linkContact: "Aloqa & Demo",
    },
  },

  // ==========================================================
  // TURKISH (TR)
  // ==========================================================
  TR: {
    nav: {
      pillars: "OSB & Fabrika İkizi",
      greenCarbon: "Green Carbon AI",
      events: "Zirve & Atölye",
      demoButton: "Demo & İletişim",
      mobilePillars: "➔ OSB ve Fabrika İkizleri",
      mobileGreen: "➔ Green Carbon AI (SKDM)",
      mobileEvents: "➔ Zirve & Canlı Atölyeler",
    },
    hero: {
      badge: "ENDÜSTRİYEL DİJİTAL İKİZ PLATFORMU",
      titleGradient: "Sanayi Bölgeleri ve Tesisler İçin Dijital İkiz Platformu.",
      description:
        "Organize Sanayi Bölgelerinden fabrikalara kadar tüm fiziksel sahaları entegre yazılım çözümleri, GIS haritalama, varlık takibi ve Green Carbon AI sürdürülebilirlik katmanı ile dijital çağa taşıyoruz.",
      telemetryTitle: "CANLI TELEMETRİ VE KONTROL MERKEZİ (Spatial Digital Twin)",
      online: "ONLINE",
      fpsLabel: "FPS:",
      nodesLabel: "Düğüm Sayısı:",
      nodesCount: "142 Aktif Düğüm",
      latencyLabel: "Telemetri Gecikmesi:",
      oeeLabel: "Tesis Sağlık Oranı:",
      oeeValue: "%89 Verimlilik (OEE)",
      dragHint: "Fare veya Dokunmatik ile 3D Döndürün",
    },
    dimensions: {
      badge: "UZMANLIK ALANLARIMIZ",
      title: "İki Ana Sütun Üzerinde Dijitalleşme",
      subtitle:
        "Bölgesel ölçekten tesis ölçeğine kadar bütünsel dijital ikiz ekosistemi. Haritaların ayrıntılarını görmek için üzerlerine tıklayabilirsiniz.",
      expandBadge: "Büyüt",
      pillar1: {
        tag: "1. SÜTUN",
        title: "OSB ve Sanayi Bölgeleri Dijital İkizi",
        sub: "Parsel Tahsisi, Altyapı ve Yatırımcı Portalı",
        desc: "Sanayi bölgelerinin parsel haritalarını, altyapı hatlarını ve yatırım alanlarını interaktif dijital ortama aktarıyoruz. Yatırımcılar için şeffaf parsel tahsis portalı sunuyoruz.",
        osb1Badge: "3D OSB Masterplan (osb1.jpeg)",
        osb1Caption: "OSB 3D GIS Genel Yerleşim ve Katman Haritası (osb1.jpeg)",
        osb3Badge: "Ruhsat GIS (osb3.jpeg)",
        osb3Caption: "Sanayi Parsellerinin Ruhsat, İzin Durumları ve Sektör İstatistikleri GIS Paneli (osb3.jpeg)",
        osb4Badge: "Kadastro (osb4.jpeg)",
        osb4Caption: "Zonas Industriais Kadastro ve Mülkiyet Katman Yöneticisi (osb4.jpeg)",
      },
      pillar2: {
        tag: "2. SÜTUN",
        title: "Fabrika, Binalar ve Tesisler",
        sub: "Dijital Varlık, Tesis ve Operasyon Yönetimi",
        desc: "Tesislerin ve binaların tamamını veya kritik üretim bölümlerini dijitalleştirerek varlık, makine ve operasyon takibini sağlıyoruz. Üretim verimliliğini merkezi dijital panelde birleştiriyoruz.",
        dt1Badge: "Robotik Hat & 3D Tarama (dt1.jpeg)",
        dt1Caption: "Robotik Üretim Hattı Tel Kafes 3D Dijital İkizi (dt1.jpeg)",
        dt4Badge: "Meqrix Sensörler (dt4.jpeg)",
        dt4Caption: "Meqrix Endüstriyel IoT Sensör Donanımları & Canlı Telemetri Paneli (dt4.jpeg)",
        dt2Badge: "Komuta Paneli (dt2.jpeg)",
        dt2Caption: "Akıllı Fabrika Komuta Ekranı & Canlı SCADA Paneli (dt2.jpeg)",
      },
      greenCarbon: {
        tag: "ÇATI KATMANI: GREEN CARBON AI",
        standard: "SKDM / CBAM & AB UYUMLU",
        title: "Sürdürülebilirlik, Enerji ve Karbon Ayak İzi Katmanı",
        desc: "Hem OSB'ler hem de münferit fabrikalar için ISO 14064, ISO 14046 ve SKDM standartlarında otomatik karbon ayak izi hesaplama, enerji optimizasyonu ve yeşil dönüşüm raporlama platformu.",
        c1: "Kurumsal Karbon (Kapsam 1-2-3)",
        c2: "SKDM / CBAM Beyanı",
        c3: "Su Ayak İzi (ISO 14046)",
        c4: "Ürün Karbon Ayak İzi",
        dt5Badge: "Varlık & Enerji İzleme (dt5.jpeg)",
        dt5Caption: "Green Carbon AI Varlık Sağlığı ve Kestirimci Bakım Ekranı (dt5.jpeg)",
      },
    },
    events: {
      badge: "ÖZBEKİSTAN RESMİ ETKİNLİK & ATÖLYE PROGRAMI",
      title: "Zirveler ve Canlı Saha Buluşmaları",
      subtitle:
        "Bölgesel sanayi liderleri, OSB yönetimleri ve fabrika yöneticileri için özel oturumlar.",
      forMoreInfo: "Katılım & Detaylı Bilgi İçin:",
      card1: {
        tag: "SANAYİ ZİRVESİ",
        location: "Özbekistan",
        title: "Özbekistan Akıllı Sanayi Zirvesi",
        desc: "Özbekistan'daki Organize Sanayi Bölgeleri müdürleri, Bakanlık yetkilileri ve uluslararası yatırımcıları buluşturan dijital parsel ve akıllı OSB dönüşüm zirvesi.",
        cta: "Kayıt",
        osb5Badge: "OSB Komuta (osb5.jpeg)",
        osb5Caption: "Akıllı OSB Yönetim Komuta Merkezi (osb5.jpeg)",
        osb2Badge: "Parsel Planı (osb2.jpeg)",
        osb2Caption: "OSB Master Plan Dijital İkizi & Parseller (osb2.jpeg)",
      },
      card2: {
        tag: "SAHA ATÖLYESİ",
        location: "Canlı Tesis Taraması",
        sub: "\"Fabrikanı Keşfet\" Saha Etkinliği",
        title: "SAHA ATÖLYESİ - Canlı Tesis Taraması",
        desc: "Sanayicilerin ve fabrika sahiplerinin kendi üretim tesislerinin dijital ikiz potansiyelini, varlık takibini ve enerji verimliliğini canlı yerinde tecrübe ettiği özel saha buluşması.",
        cta: "Atölye Başvurusu",
        dt3Badge: "IoT & Canlı Basınç/Sıcaklık Sensörleri (dt3.jpeg)",
        dt3Caption: "Canlı Saha Sensör Taraması ve Mobil Tablet Kontrolü (dt3.jpeg)",
      },
    },
    lightbox: {
      defaultCaption: "Görsel Detayı",
      close: "Kapat",
      escHint: "Kapatmak için [ESC] veya dışarıya tıklayabilirsiniz",
      brand: "DigiTwins.uz Spatial Data Viewer",
    },
    modal: {
      title: "Katılım & Demo Talebi",
      subtitle: "Sahanız, zirve katılımı veya saha atölyesi için hemen irtibata geçelim.",
      companyLabel: "Kurum / Fabrika / Şirket Adı",
      companyPlaceholder: "Örn: Özbekistan Sanayi Bölgesi / Üretim Tesisi",
      nameLabel: "Yetkili Adı Soyadı",
      namePlaceholder: "Ad Soyad",
      phoneLabel: "Telefon / İletişim",
      phonePlaceholder: "+998 / +90 ...",
      topicLabel: "Katılım / Odak Alanı",
      submitButton: "Başvuruyu İlet",
      feedbackSuccess: "✓ Talebiniz başarıyla iletildi! Uzmanlarımız en kısa sürede dönüş yapacaktır.",
      topics: {
        summit: "Özbekistan Akıllı Sanayi Zirvesi (OSB & Bakanlık)",
        workshop: "SAHA ATÖLYESİ - \"Fabrikanı Keşfet\" (Canlı Tesis Taraması)",
        osb: "Organize Sanayi Bölgesi (OSB) Dijital İkizi & GIS",
        factory: "Fabrika & Üretim Tesisi İkizi (Varlık & Sensör)",
        greenCarbon: "Green Carbon AI & SKDM Sürdürülebilirlik Katmanı",
      },
    },
    footer: {
      rights: "© 2026 DigiTwins.uz — Spatial Digital Twin. Tüm Hakları Saklıdır.",
      linkPillars: "OSB & Fabrika",
      linkGreen: "Green Carbon AI",
      linkEvents: "Özbekistan Zirvesi",
      linkContact: "İletişim & Demo",
    },
  },

  // ==========================================================
  // ENGLISH (EN)
  // ==========================================================
  EN: {
    nav: {
      pillars: "IZ & Factory Twin",
      greenCarbon: "Green Carbon AI",
      events: "Summit & Workshop",
      demoButton: "Demo & Contact",
      mobilePillars: "➔ Industrial Zones & Factory Twins",
      mobileGreen: "➔ Green Carbon AI (CBAM)",
      mobileEvents: "➔ Summit & Live Field Workshops",
    },
    hero: {
      badge: "INDUSTRIAL DIGITAL TWIN PLATFORM",
      titleGradient: "Digital Twin Platform for Industrial Zones & Facilities.",
      description:
        "Digitizing physical industrial sites, zones, and facilities with unified software solutions, GIS mapping, spatial asset management, and Green Carbon AI sustainability.",
      telemetryTitle: "LIVE TELEMETRY & CONTROL CENTER (Spatial Digital Twin)",
      online: "ONLINE",
      fpsLabel: "FPS:",
      nodesLabel: "Active Nodes:",
      nodesCount: "142 Active Nodes",
      latencyLabel: "Telemetry Latency:",
      oeeLabel: "Facility Health:",
      oeeValue: "89% Efficiency (OEE)",
      dragHint: "Rotate 3D via Mouse or Touch Drag",
    },
    dimensions: {
      badge: "OUR CORE EXPERTISE",
      title: "Digitization Across Two Core Pillars",
      subtitle:
        "Comprehensive digital twin ecosystem from macro industrial zones to micro facilities. Click on maps to enlarge and inspect.",
      expandBadge: "Enlarge",
      pillar1: {
        tag: "PILLAR 1",
        title: "Industrial Zones (OSB) Digital Twin",
        sub: "Plot Allocation, Infrastructure & Investor Portal",
        desc: "Transforming industrial zones with 3D plot cadastre, utility line mapping, and interactive investor portals for transparent plot allocation.",
        osb1Badge: "3D Industrial Masterplan (osb1.jpeg)",
        osb1Caption: "Industrial Zone 3D GIS Masterplan & Layer Map (osb1.jpeg)",
        osb3Badge: "Permits GIS (osb3.jpeg)",
        osb3Caption: "Industrial Parcel Permits, Licenses and Statistics GIS Dashboard (osb3.jpeg)",
        osb4Badge: "Cadastre (osb4.jpeg)",
        osb4Caption: "Industrial Zones Cadastre and Property Layer Manager (osb4.jpeg)",
      },
      pillar2: {
        tag: "PILLAR 2",
        title: "Factories, Buildings & Facilities",
        sub: "Digital Asset, Facility & Operations Management",
        desc: "Digitizing entire facilities or critical production lines for asset tracking, predictive maintenance, and unified operational command.",
        dt1Badge: "Robotics Line & 3D Scan (dt1.jpeg)",
        dt1Caption: "Robotics Production Line Wireframe 3D Digital Twin (dt1.jpeg)",
        dt4Badge: "Meqrix Sensors (dt4.jpeg)",
        dt4Caption: "Meqrix Industrial IoT Sensor Hardware & Live Telemetry Panel (dt4.jpeg)",
        dt2Badge: "Command Dashboard (dt2.jpeg)",
        dt2Caption: "Smart Factory Command Dashboard & Live SCADA Display (dt2.jpeg)",
      },
      greenCarbon: {
        tag: "ROOF LAYER: GREEN CARBON AI",
        standard: "CBAM / SKDM & EU COMPLIANT",
        title: "Sustainability, Energy & Carbon Footprint Layer",
        desc: "Automated carbon footprint calculations, energy optimization, and sustainability reporting platform compliant with ISO 14064, ISO 14046, and EU CBAM standards.",
        c1: "Corporate Carbon (Scope 1-2-3)",
        c2: "CBAM / SKDM Declaration",
        c3: "Water Footprint (ISO 14046)",
        c4: "Product Carbon Footprint",
        dt5Badge: "Asset & Energy Monitoring (dt5.jpeg)",
        dt5Caption: "Green Carbon AI Asset Health & Predictive Maintenance Screen (dt5.jpeg)",
      },
    },
    events: {
      badge: "UZBEKISTAN OFFICIAL SUMMIT & FIELD WORKSHOP PROGRAM",
      title: "Summits & Live Field Workshops",
      subtitle:
        "Exclusive sessions for regional industrial leaders, zone administrators, and factory executives.",
      forMoreInfo: "For Participation & Info:",
      card1: {
        tag: "INDUSTRY SUMMIT",
        location: "Uzbekistan",
        title: "Uzbekistan Smart Industry Summit",
        desc: "A premier summit convening Industrial Zone directors, Ministry officials, and international investors for digital plot management and smart industrial zones.",
        cta: "Register",
        osb5Badge: "Zone Command (osb5.jpeg)",
        osb5Caption: "Smart Industrial Zone Command Center (osb5.jpeg)",
        osb2Badge: "Parcel Plan (osb2.jpeg)",
        osb2Caption: "Industrial Zone Masterplan Digital Twin & Parcels (osb2.jpeg)",
      },
      card2: {
        tag: "FIELD WORKSHOP",
        location: "Live Facility Scanning",
        sub: "\"Discover Your Factory\" Field Event",
        title: "FIELD WORKSHOP - Live Facility Scanning",
        desc: "An exclusive field workshop where industrialists and factory owners experience digital twin potential, asset tracking, and energy efficiency first-hand on-site.",
        cta: "Apply for Workshop",
        dt3Badge: "IoT & Pressure/Temp Sensors (dt3.jpeg)",
        dt3Caption: "Live On-Site Sensor Scanning & Mobile Tablet Control (dt3.jpeg)",
      },
    },
    lightbox: {
      defaultCaption: "Image Details",
      close: "Close",
      escHint: "Press [ESC] or click outside to close",
      brand: "DigiTwins.uz Spatial Data Viewer",
    },
    modal: {
      title: "Participation & Demo Request",
      subtitle: "Let's connect immediately for your site, summit registration, or live field workshop.",
      companyLabel: "Organization / Factory / Company Name",
      companyPlaceholder: "E.g. Industrial Zone / Manufacturing Plant",
      nameLabel: "Full Name",
      namePlaceholder: "Full Name",
      phoneLabel: "Phone / Contact",
      phonePlaceholder: "+998 / +90 ...",
      topicLabel: "Participation / Focus Area",
      submitButton: "Submit Application",
      feedbackSuccess: "✓ Your request has been sent! Our specialists will get back to you shortly.",
      topics: {
        summit: "Uzbekistan Smart Industry Summit (Zones & Ministry)",
        workshop: "FIELD WORKSHOP - \"Discover Your Factory\" (Live Facility Scan)",
        osb: "Industrial Zone (OSB) Digital Twin & GIS",
        factory: "Factory & Facility Digital Twin (Asset & Sensors)",
        greenCarbon: "Green Carbon AI & CBAM Sustainability Layer",
      },
    },
    footer: {
      rights: "© 2026 DigiTwins.uz — Spatial Digital Twin. All Rights Reserved.",
      linkPillars: "Zones & Factories",
      linkGreen: "Green Carbon AI",
      linkEvents: "Uzbekistan Summit",
      linkContact: "Contact & Demo",
    },
  },
};
