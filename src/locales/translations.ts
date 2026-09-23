export type Language = 'uz' | 'tr' | 'en';

export interface PlatformItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  origin: string; // e.g., "Fabriq Land negizida" / "Fabriq EPC negizida" / "Xapp negizida"
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
    interactiveLabel: string;
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
  platformsSection: {
    tag: string;
    title: string;
    description: string;
    ctaBtn: string;
    platforms: PlatformItem[];
  };
  techLayersSection: {
    tag: string;
    title: string;
    description: string;
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
  };
  contactSection: {
    tag: string;
    title: string;
    description: string;
    officeLabel: string;
    officeValue: string;
    emailLabel: string;
    telegramLabel: string;
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
  // UZBEK (UZ)
  // ============================================================
  uz: {
    nav: {
      platforms: "Platformalar",
      techLayers: "Muvofiqlik Qatlami",
      telemetry: "Jonli Telemetriya",
      contact: "Aloqa",
      demoButton: "Demo Talab Qilish",
    },
    hero: {
      groupTag: "SANOAT, FABRIKA VA TA'LIM UCHUN RAQAMLI EGIZAKLAR",
      titleStart: "Fizik borliqning",
      titleHighlight: "mukammal raqamli egizagi",
      titleEnd: "yagona ekotizimda.",
      description:
        "Sanoat zonalari (Fabriq Land), zamonaviy zavod ishlab chiqarishi (Fabriq Build & Tech) hamda ilg'or ta'lim texnologiyalari va simulyatorlarni (Xapp) birlashtirgan chuqur muhandislik platformasi.",
      ctaDemo: "Demo Uchrashuv Belgilash",
      ctaPlatforms: "Platformalarni Ko'rish",
      interactiveLabel: "Interaktiv 3D Klaster",
      statusActive: "Jonli Sinxronizatsiya",
    },
    stats: {
      label1: "Yagona Ekosistema",
      value1: "3 ta Soha",
      sub1: "Sanoat, Zavod va Ta'lim",
      label2: "Sanoat Maydoni",
      value2: "1,240+ Ga",
      sub2: "Monitoring ostidagi EIZ hududlari",
      label3: "Muhandislik Aniqligi",
      value3: "99.2%",
      sub3: "Raqamli simulyatsiya koeffitsiyenti",
    },
    platformsSection: {
      tag: "BIRLASHGAN EKOTIZIM",
      title: "Uch strategik yo'nalish. Bitta raqamli arxitektura.",
      description:
        "Yer va sanoat parklarini boshqarishdan tortib, ishlab chiqarish liniyalari telemetriyasi va mutaxassislarni virtual tayyorlashgacha bo'lgan yagona tsikl.",
      ctaBtn: "Demo So'rash",
      platforms: [
        {
          id: "industry",
          badge: "SANOAT & HUDUDIY GIS",
          title: "DigiTwins Industry",
          subtitle: "Sanoat zonalari, EIZ & yer maydonlari egizagi",
          description:
            "Maxsus iqtisodiy zonalar (EIZ), erkin sanoat parklari va yirik yer maydonlari uchun 3D GIS fazoviy xarita, infratuzilma (elektr, gaz, suv) telemetriyasi va investorlar portali.",
          origin: "Fabriq Land tajribasi asosida",
          features: [
            "EIZ va sanoat yerlarini raqamli taqsimlash",
            "Infratuzilma va quvvat quvurlari 3D monitoringi",
            "Xorijiy investorlar uchun shaffof tahliliy portal",
          ],
          metricLabel: "Yig'ilgan Maydon",
          metricValue: "1,240 Ga",
          metricSub: "3,850 ta telemetriya datchigi",
        },
        {
          id: "factory",
          badge: "ISHLAB CHIQARISH & IIoT",
          title: "DigiTwins Factory",
          subtitle: "Zavod, dastgohlar & jarayonlar simulyatsiyasi",
          description:
            "Ishlab chiqarish korxonalari, konveyer liniyalari va mashinalar oqimining jonli virtual egizagi. SCADA/MES va IIoT datchiklari orqali kutilmagan to'xtalishlarning oldini oladi.",
          origin: "Fabriq Build & Tech tajribasi asosida",
          features: [
            "Uskunalar unumdorligi (OEE) real vaqtda monitoringi",
            "Avariyalarni oldindan bashoratlash (Predictive Maintenance)",
            "Yangi ishlab chiqarish liniyalarini virtual ishga tushirish",
          ],
          metricLabel: "Tizim Samaradorligi (OEE)",
          metricValue: "95.8%",
          metricSub: "To'xtalishlar -38% qisqardi",
        },
        {
          id: "education",
          badge: "TA'LIM & SIMULYATSIYA",
          title: "DigiTwins Education",
          subtitle: "Akademiya, VR/AR simulyatorlar & jiddiy o'yinlar",
          description:
            "Universitetlar, korporativ akademiyalar va maktablar uchun interaktiv ta'lim muhiti, sanoat kadrlari uchun xavfsiz virtual trenajyorlar va ta'lim texnologiyalari transferi.",
          origin: "Xapp texnologiyalari asosida",
          features: [
            "Sanoat xavfsizligi va uskunalarni boshqarish VR trenajyori",
            "Ta'limiy o'yinlar va aqliy platformalar transferi",
            "Kadrlar malakasi va sertifikatlash bo'yicha jonli tahlil",
          ],
          metricLabel: "Simulyatsiya Muvaffaqiyati",
          metricValue: "98.4%",
          metricSub: "4,500+ tayyorlangan mutaxassis",
        },
      ],
    },
    techLayersSection: {
      tag: "TEXNOLOGIK QATLAM",
      title: "Fizik maydondan strategik qarorgacha bo'lgan zanjir",
      description:
        "Shunchaki 3D rasm emas — datchiklardan keluvchi xom ma'lumotni kognitiv biznes yechimlarga aylantiruvchi 4 bosqichli muhandislik.",
      layers: [
        {
          step: "01",
          title: "IoT & Telemetriya Yig'ish",
          description:
            "Sanoat datchiklari, hisoblagichlar va mashina kontrollerlaridan (PLC) xavfsiz va uzluksiz ma'lumot oqimini qabul qilish.",
          tags: ["MQTT / OPC-UA", "Sensors", "Telemetry Gateway"],
        },
        {
          step: "02",
          title: "Fazoviy & GIS Modellashtirish",
          description:
            "Zavod binosi, hudud relyefi va uskunalar joylashuvini millimetr aniqlikdagi 3D koordinatalarga ko'chirish.",
          tags: ["BIM Integration", "GIS Spatial Data", "Point Cloud"],
        },
        {
          step: "03",
          title: "Jonli Raqamli Simulyatsiya",
          description:
            "Fizik olamdagi har qanday o'zgarishni bir lahzada virtual muhitda takrorlash va yuz berishi mumkin bo'lgan yuklamalarni sinovdan o'tkazish.",
          tags: ["Physics Engine", "Real-Time Sync", "Edge Computing"],
        },
        {
          step: "04",
          title: "AI & Bashoratli Analitika",
          description:
            "Mashinani o'rganish modellari orqali uskunaning eskirishi, energiya isrofi va kadrlar xatolarini oldindan ko'rsatib berish.",
          tags: ["Predictive Maintenance", "Decision Support", "Neural Analytics"],
        },
      ],
    },
    telemetrySection: {
      tag: "JONLI TELEMETRIYA",
      title: "Real vaqtdagi sensor va platforma ko'rsatkichlari",
      description:
        "Sanoat parki, zavod konveyeri va ta'lim simulyatorlaridan kelayotgan jonli oqim.",
      liveBadge: "JONLI ALOQA TARMOG'I",
      refreshNote: "Har 3 soniyada avtomatik yangilanadi",
    },
    contactSection: {
      tag: "ALOQA & HAMKORLIK",
      title: "Raqamli egizak transformatsiyasini boshlaymiz",
      description:
        "Sanoat parki, ishlab chiqarish zavodi yoki ta'lim markazingiz uchun muhandislik guruhimiz bilan demo o'tkazing.",
      officeLabel: "Bosh Qarorgoh",
      officeValue: "Toshkent shahri, O'zbekiston",
      emailLabel: "Elektron pochta",
      telegramLabel: "Telegram / Telefon",
      form: {
        nameLabel: "Ism-familiyangiz",
        namePlaceholder: "Masalan: Jamshid Rasulov",
        companyLabel: "Tashkilot / Kompaniya",
        companyPlaceholder: "Kompaniya nomi",
        emailLabel: "Elektron pochta",
        emailPlaceholder: "nomi@kompaniya.uz",
        platformLabel: "Qaysi yo'nalish qiziqtiradi?",
        platformOptions: {
          all: "Barcha yo'nalishlar (Kompleks ekotizim)",
          industry: "DigiTwins Industry (Sanoat & EIZ)",
          factory: "DigiTwins Factory (Zavod & IIoT)",
          education: "DigiTwins Education (Ta'lim & Simulyatsiya)",
        },
        messageLabel: "Loyiha tafsilotlari",
        messagePlaceholder: "Ob'ekt maydoni, dastgohlar soni yoki talab etilayotgan maqsad...",
        submitBtn: "Demo So'rovini Yuborish",
        submittingBtn: "Yuborilmoqda...",
        successMsg: "So'rovingiz qabul qilindi! Muhandislarimiz tez orada bog'lanishadi.",
      },
    },
    demoModal: {
      title: "Kuratorlik Demoni So'rash",
      subtitle: "DigiTwins tizimining amaliy imkoniyatlarini ko'rsatib beramiz.",
      close: "Yopish",
      phoneLabel: "Telefon yoki Telegram",
      submit: "Uchrashuvni Tasdiqlash",
    },
    footer: {
      tagline: "Sanoat, ishlab chiqarish va ta'lim texnologiyalarini birlashtiruvchi raqamli egizaklar guruhi.",
      rights: "Barcha huquqlar himoyalangan.",
      locations: "Toshkent · Istanbul · Global",
      privacy: "Maxfiylik siyosati",
      terms: "Xizmat ko'rsatish shartlari",
    },
  },

  // ============================================================
  // TURKISH (TR)
  // ============================================================
  tr: {
    nav: {
      platforms: "Platformlar",
      techLayers: "Teknoloji Katmanı",
      telemetry: "Canlı Telemetri",
      contact: "İletişim",
      demoButton: "Demo Talep Et",
    },
    hero: {
      groupTag: "SANAYİ, ÜRETİM VE EĞİTİM İÇİN DİJİTAL İKİZLER",
      titleStart: "Fiziksel dünyanın",
      titleHighlight: "kusursuz dijital ikizi",
      titleEnd: "tek ekosistemde.",
      description:
        "Sanayi bölgeleri (Fabriq Land), akıllı fabrika üretimi (Fabriq Build & Tech) ve modern eğitim teknolojileri ile simülasyonları (Xapp) bir araya getiren derin teknoloji grubu.",
      ctaDemo: "Demo Görüşmesi Ayarla",
      ctaPlatforms: "Platformları İncele",
      interactiveLabel: "Etkileşimli 3D Küme",
      statusActive: "Canlı Senkronizasyon",
    },
    stats: {
      label1: "Entegre Ekosistem",
      value1: "3 Dikey Alan",
      sub1: "Sanayi, Üretim ve Eğitim",
      label2: "Yönetilen Saha",
      value2: "1,240+ Hektar",
      sub2: "OSB ve EIZ izleme alanları",
      label3: "Mühendislik Hassasiyeti",
      value3: "99.2%",
      sub3: "Dijital simülasyon katsayısı",
    },
    platformsSection: {
      tag: "BÜTÜNLEŞİK EKOSİSTEM",
      title: "Üç stratejik yön. Tek dijital mimari.",
      description:
        "Arazi ve organize sanayi bölgesi yönetiminden, üretim hatları telemetrisine ve personelin sanal ortamda eğitilmesine uzanan uçtan uca döngü.",
      ctaBtn: "Demo Talep Et",
      platforms: [
        {
          id: "industry",
          badge: "SANAYİ & MEKANSAL GIS",
          title: "DigiTwins Industry",
          subtitle: "OSB, Sanayi Bölgeleri & Arazi İkizi",
          description:
            "Organize sanayi bölgeleri ve sanayi parkları için 3D GIS mekansal haritalama, enerji/altyapı telemetrisi ve yatırımcı dijital tahsis altyapısı.",
          origin: "Fabriq Land tecrübesi üzerine inşa edildi",
          features: [
            "OSB parsellerinin dijital tahsis ve yönetimi",
            "3D altyapı (elektrik, gaz, su) şebeke telemetrisi",
            "Uluslararası sanayi yatırımcıları için şeffaf portal",
          ],
          metricLabel: "Yönetilen Alan",
          metricValue: "1,240 Ha",
          metricSub: "3,850 telemetri sensör düğümü",
        },
        {
          id: "factory",
          badge: "ÜRETİM & IIoT",
          title: "DigiTwins Factory",
          subtitle: "Fabrika, Hatlar & Süreç Canlı Simülasyonu",
          description:
            "Üretim tesisleri, makine hatları ve proses akışının canlı dijital ikizi. SCADA/MES entegrasyonu ve IIoT sensörleriyle beklenmedik duruşları önler.",
          origin: "Fabriq Build & Tech tecrübesi üzerine inşa edildi",
          features: [
            "Gerçek zamanlı ekipman etkinliği (OEE) takibi",
            "Kestirimci bakım ve anomali tespiti",
            "Yeni hatların sanal ortamda devreye alınması (Virtual Commissioning)",
          ],
          metricLabel: "Tesis Verimliliği (OEE)",
          metricValue: "95.8%",
          metricSub: "Arıza duruşlarında %38 azalma",
        },
        {
          id: "education",
          badge: "EĞİTİM & SİMÜLASYON",
          title: "DigiTwins Education",
          subtitle: "Akademi, VR/AR Simülatörler & Ciddi Oyunlar",
          description:
            "Üniversiteler, kurumsal sanayi akademileri ve eğitim kurumları için etkileşimli dijital ortam, sanal iş güvenliği simülatörleri ve eğitici oyun transferi.",
          origin: "Xapp teknolojileri üzerine inşa edildi",
          features: [
            "Sanayi iş güvenliği ve makine operatörlüğü VR eğitimleri",
            "Eğitici mobil oyunlar ve EdTech platform transferi",
            "Personel yetkinlik ve sertifikasyon canlı analitiği",
          ],
          metricLabel: "Simülasyon Başarısı",
          metricValue: "98.4%",
          metricSub: "4,500+ eğitilen uzman personel",
        },
      ],
    },
    techLayersSection: {
      tag: "TEKNOLOJİK KATMAN",
      title: "Fiziksel sahadan yönetim kararına uzanan zincir",
      description:
        "Sadece bir 3D çizim değil; sahadaki ham telemetri verisini stratejik kararlara dönüştüren 4 katmanlı mühendislik mimarisi.",
      layers: [
        {
          step: "01",
          title: "IoT & Sensör Veri Toplama",
          description:
            "Saha sensörleri, sayaçlar ve endüstriyel PLC kontrolörlerinden şifreli ve kesintisiz telemetri veri akışı.",
          tags: ["MQTT / OPC-UA", "Sensors", "Telemetry Gateway"],
        },
        {
          step: "02",
          title: "Mekansal & GIS Modelleme",
          description:
            "Fabrika yerleşimi, arazi topoğrafyası ve altyapı ağlarının milimetrik hassasiyetle 3D koordinatlara aktarımı.",
          tags: ["BIM Entegrasyonu", "GIS Spatial Data", "Point Cloud"],
        },
        {
          step: "03",
          title: "Canlı Dijital Simülasyon",
          description:
            "Fiziksel sahadaki anlık olayların sanal dünyada eşzamanlı canlandırılması ve olası yük senaryolarının testi.",
          tags: ["Physics Engine", "Real-Time Sync", "Edge Computing"],
        },
        {
          step: "04",
          title: "Yapay Zeka & Kestirimci Analiz",
          description:
            "Makine öğrenimi modelleri ile mekanik aşınma, enerji kayıpları ve proses darboğazlarının önceden tespiti.",
          tags: ["Kestirimci Bakım", "Karar Destek", "Nöral Analitik"],
        },
      ],
    },
    telemetrySection: {
      tag: "CANLI TELEMETRİ",
      title: "Gerçek Zamanlı Sensör & Platform Göstergeleri",
      description:
        "Sanayi parkı, fabrika üretim hatları ve eğitim simülatörlerinden gelen canlı veri akışı.",
      liveBadge: "CANLI BAĞLANTI KATMANI",
      refreshNote: "Her 3 saniyede otomatik güncellenir",
    },
    contactSection: {
      tag: "İLETİŞİM & ORTAKLIK",
      title: "Dijital İkiz Dönüşümünü Başlatalım",
      description:
        "Sanayi bölgeniz, üretim tesisiniz veya eğitim akademiniz için mühendislik ekibimizle demo toplantısı planlayın.",
      officeLabel: "Genel Merkez",
      officeValue: "Taşkent, Özbekistan",
      emailLabel: "E-Posta",
      telegramLabel: "Telegram / Telefon",
      form: {
        nameLabel: "Adınız Soyadınız",
        namePlaceholder: "Örn: Mehmet Yılmaz",
        companyLabel: "Kurum / Şirket",
        companyPlaceholder: "Şirketinizin Adı",
        emailLabel: "E-Posta Adresi",
        emailPlaceholder: "ornek@sirket.uz",
        platformLabel: "İlgilendiğiniz Platform",
        platformOptions: {
          all: "Tüm Platformlar (Bütünleşik Ekosistem)",
          industry: "DigiTwins Industry (Sanayi & OSB)",
          factory: "DigiTwins Factory (Fabrika & IIoT)",
          education: "DigiTwins Education (Eğitim & Simülasyon)",
        },
        messageLabel: "Proje Detayları",
        messagePlaceholder: "Saha büyüklüğü, hat sayısı veya hedeflenen süreçler...",
        submitBtn: "Demo Talebini Gönder",
        submittingBtn: "Gönderiliyor...",
        successMsg: "Talebiniz başarıyla alındı! Mühendislerimiz en kısa sürede dönüş yapacaktır.",
      },
    },
    demoModal: {
      title: "Kapsamlı Demo Görüşmesi",
      subtitle: "DigiTwins platformunun canlı kabiliyetlerini sahanız için gösterelim.",
      close: "Kapat",
      phoneLabel: "Telefon veya Telegram",
      submit: "Randevu Talebini Onayla",
    },
    footer: {
      tagline: "Sanayi, üretim ve eğitim teknolojilerini birleştiren uçtan uca dijital ikiz grubu.",
      rights: "Tüm hakları saklıdır.",
      locations: "Taşkent · İstanbul · Global",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
    },
  },

  // ============================================================
  // ENGLISH (EN)
  // ============================================================
  en: {
    nav: {
      platforms: "Platforms",
      techLayers: "Tech Layers",
      telemetry: "Live Telemetry",
      contact: "Contact",
      demoButton: "Request Demo",
    },
    hero: {
      groupTag: "DIGITAL TWINS FOR INDUSTRY, FACTORIES & EDUCATION",
      titleStart: "The physical world's",
      titleHighlight: "definitive digital twin",
      titleEnd: "in one unified stack.",
      description:
        "A deep tech holding bringing together industrial zones (Fabriq Land), smart factory production (Fabriq Build & Tech), and advanced educational simulations & serious games (Xapp).",
      ctaDemo: "Schedule Demo",
      ctaPlatforms: "Explore Platforms",
      interactiveLabel: "Interactive 3D Cluster",
      statusActive: "Live Synchronized",
    },
    stats: {
      label1: "Unified Ecosystem",
      value1: "3 Core Verticals",
      sub1: "Industry, Factory & Education",
      label2: "Managed Footprint",
      value2: "1,240+ Ha",
      sub2: "SEZ & Industrial zones",
      label3: "Engineering Fidelity",
      value3: "99.2%",
      sub3: "Digital simulation accuracy",
    },
    platformsSection: {
      tag: "UNIFIED ECOSYSTEM",
      title: "Three strategic verticals. One cohesive architecture.",
      description:
        "From industrial park land management to machine-level telemetry and immersive workforce simulation.",
      ctaBtn: "Request Demo",
      platforms: [
        {
          id: "industry",
          badge: "INDUSTRY & GEOSPATIAL GIS",
          title: "DigiTwins Industry",
          subtitle: "SEZs, Industrial Parks & Land Digital Twin",
          description:
            "3D geospatial GIS mapping, utility telemetry (power, gas, water), and an investor allocation portal for Special Economic Zones and large-scale industrial lands.",
          origin: "Built on Fabriq Land operational experience",
          features: [
            "Digital parcel allocation and zoning management",
            "Real-time 3D utility infrastructure network monitoring",
            "Transparent intelligence portal for foreign industrial investors",
          ],
          metricLabel: "Managed Area",
          metricValue: "1,240 Ha",
          metricSub: "3,850 live telemetry nodes",
        },
        {
          id: "factory",
          badge: "PRODUCTION & IIoT",
          title: "DigiTwins Factory",
          subtitle: "Facility, Assembly Lines & Process Simulation",
          description:
            "A synchronized digital replica of manufacturing plants, conveyor lines, and machines. Prevents unplanned downtime via SCADA/MES and IIoT sensor telemetry.",
          origin: "Built on Fabriq Build & Tech engineering expertise",
          features: [
            "Real-time Overall Equipment Effectiveness (OEE) tracking",
            "Predictive maintenance & anomaly detection",
            "Virtual commissioning of new automated production lines",
          ],
          metricLabel: "Plant Efficiency (OEE)",
          metricValue: "95.8%",
          metricSub: "Downtime reduced by 38%",
        },
        {
          id: "education",
          badge: "EDUCATION & SIMULATION",
          title: "DigiTwins Education",
          subtitle: "Academy, VR/AR Simulators & Serious Games",
          description:
            "Interactive simulation environments for universities, corporate industrial academies, and schools. Immersive safety training and EdTech games distribution.",
          origin: "Built on Xapp technologies & localization",
          features: [
            "VR industrial safety and machine operator training",
            "Educational serious games & EdTech platform distribution",
            "Real-time competency analytics & certification tracking",
          ],
          metricLabel: "Simulation Accuracy",
          metricValue: "98.4%",
          metricSub: "4,500+ specialists trained",
        },
      ],
    },
    techLayersSection: {
      tag: "TECHNOLOGY STACK",
      title: "From the physical field to executive decisions",
      description:
        "Far beyond static 3D models: a disciplined 4-layer engineering architecture turning physical telemetry into predictive decisions.",
      layers: [
        {
          step: "01",
          title: "IoT & Telemetry Collection",
          description:
            "Encrypted, high-frequency data ingestion from field sensors, smart meters, and industrial PLC controllers.",
          tags: ["MQTT / OPC-UA", "Sensors", "Telemetry Gateway"],
        },
        {
          step: "02",
          title: "Spatial & GIS Modeling",
          description:
            "Sub-centimeter 3D spatial reconstruction of factory assets, topography, and municipal utility networks.",
          tags: ["BIM Integration", "GIS Spatial Data", "Point Cloud"],
        },
        {
          step: "03",
          title: "Real-Time Simulation",
          description:
            "Instant digital mirroring of real-world physical dynamics with stress-testing under simulated operational peaks.",
          tags: ["Physics Engine", "Real-Time Sync", "Edge Computing"],
        },
        {
          step: "04",
          title: "AI & Decision Analytics",
          description:
            "Machine learning algorithms identifying wear, thermal anomalies, energy waste, and operational bottlenecks.",
          tags: ["Predictive Maintenance", "Decision Support", "Neural Analytics"],
        },
      ],
    },
    telemetrySection: {
      tag: "LIVE TELEMETRY",
      title: "Real-Time Sensor & Platform Status",
      description:
        "Live telemetry streams from industrial parks, manufacturing plants, and educational simulations.",
      liveBadge: "LIVE TELEMETRY FEED",
      refreshNote: "Auto-refreshes every 3 seconds",
    },
    contactSection: {
      tag: "CONTACT & INQUIRIES",
      title: "Initiate Your Digital Twin Transformation",
      description:
        "Consult with our engineering team to explore digital twin deployment across your industrial zone, manufacturing facility, or training academy.",
      officeLabel: "Headquarters",
      officeValue: "Tashkent, Uzbekistan",
      emailLabel: "Email",
      telegramLabel: "Telegram / Phone",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "e.g., Alex Johnson",
        companyLabel: "Company / Organization",
        companyPlaceholder: "Organization Name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@company.com",
        platformLabel: "Area of Interest",
        platformOptions: {
          all: "All Verticals (Unified Deep Tech Group)",
          industry: "DigiTwins Industry (SEZ & Industrial Parks)",
          factory: "DigiTwins Factory (Smart Manufacturing & IIoT)",
          education: "DigiTwins Education (Academies & VR Simulators)",
        },
        messageLabel: "Project Scope",
        messagePlaceholder: "Site footprint, number of production lines, or specific objectives...",
        submitBtn: "Submit Demo Request",
        submittingBtn: "Submitting...",
        successMsg: "Request received successfully! Our engineering team will get back to you shortly.",
      },
    },
    demoModal: {
      title: "Request Live Demonstration",
      subtitle: "Experience how DigiTwins mirrors and optimizes your physical operations.",
      close: "Close",
      phoneLabel: "Phone or Telegram",
      submit: "Confirm Demo Schedule",
    },
    footer: {
      tagline: "The unified deep tech group bridging physical industry, manufacturing, and educational technology.",
      rights: "All rights reserved.",
      locations: "Tashkent · Istanbul · Global",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
};
