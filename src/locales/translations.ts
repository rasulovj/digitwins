export type Language = 'uz' | 'tr' | 'en';

export interface DimensionItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  widgetTitle: string;
  widgetStatus: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  btnText: string;
}

export interface TranslationContent {
  nav: {
    system: string;
    dimensions: string;
    greenCarbon: string;
    tech: string;
    contact: string;
    demoButton: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    tagAreas: string;
    tagFacilities: string;
    tagXr: string;
    tagGreen: string;
    btnMain: string;
    btnSub: string;
    canvasTelemetry: string;
  };
  coreEngines: {
    badge: string;
    title: string;
    subtitle: string;
    engine1Tag: string;
    engine1Title: string;
    engine1Desc: string;
    engine1Check: string;
    engine2Tag: string;
    engine2Title: string;
    engine2Desc: string;
    engine2Check: string;
  };
  dimensionsSection: {
    badge: string;
    title: string;
    subtitle: string;
    items: DimensionItem[];
  };
  greenCarbonSection: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    f1: string;
    f2: string;
    f3: string;
    f4: string;
    boxLabel: string;
    boxValue: string;
    boxSub: string;
    boxBtn: string;
  };
  techSection: {
    badge: string;
    title: string;
    subtitle: string;
    stepPrefix: string;
    layers: Array<{
      step: string;
      title: string;
      description: string;
      tag: string;
    }>;
  };
  contactSection: {
    badge: string;
    title: string;
    description: string;
    officeLabel: string;
    officeValue: string;
    phoneLabel: string;
    phoneValue: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      orgLabel: string;
      orgPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      domainLabel: string;
      domainOptions: {
        all: string;
        macro: string;
        micro: string;
        xr: string;
        green: string;
      };
      notesLabel: string;
      notesPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
    };
  };
  demoModal: {
    badge: string;
    title: string;
    close: string;
    nameLabel: string;
    orgLabel: string;
    domainLabel: string;
    notesLabel: string;
    submitBtn: string;
  };
  footer: {
    description: string;
    dimensionsHeading: string;
    contactHeading: string;
    phoneLabel: string;
    phoneValue: string;
    rights: string;
    locations: string;
    privacy: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  // ============================================================
  // UZBEK (UZ) - To'liq va Toza O'zbek Tili
  // ============================================================
  uz: {
    nav: {
      system: "Nimalar Qilamiz?",
      dimensions: "Transformatsiya Qatlamlari",
      greenCarbon: "Green Carbon",
      tech: "Texnologiya Qatlami",
      contact: "Aloqa",
      demoButton: "Loyiha / Demo So'rash",
    },
    hero: {
      badge: "MAKONIY RAQAMLASHTIRISH EKOTIZIMI",
      title1: "Jismoniy Maydon va Inshootlarning",
      title2: "Raqamli Egizak Xizmatlari",
      description:
        "Maydonlar, inshootlar va obyektlarni 3D lazer skanerlash, IoT datchiklar va simulyatsiya tizimlari orqali raqamli egizakka aylantiramiz. Tayyor modellarni integratsiya qilamiz yoki ehtiyojingizga qarab noldan modellaymiz.",
      tagAreas: "Makro / Geografik",
      tagFacilities: "Mikro / Inshootlar",
      tagXr: "Inson va Ta'sir",
      tagGreen: "Green Carbon",
      btnMain: "Jismoniy Aktivingizni Raqamlashtiring",
      btnSub: "Transformatsiya Qatlamlarini Kashf Eting",
      canvasTelemetry: "Jonli Telemetriya & GIS",
    },
    coreEngines: {
      badge: "NIMALAR QILAMIZ?",
      title: "Jismoniy Dunyoni Raqamli Modellarga Ko'chiramiz",
      subtitle:
        "Ehtiyojingizga qarab tayyor raqamli shablonlarni taqdim etamiz yoki maydoningizda maxsus skanerlash va datchik o'rnatish ishlarini bajaramiz.",
      engine1Tag: "1. MODEL: TAYYOR EGIZAKLAR KUTUBXONASI",
      engine1Title: "Tayyor Raqamlashtirilgan Aktivlar",
      engine1Desc:
        "Oldindan modellashtirilgan makoniy shablonlarni, bino va yer maydoni modellarini tizimga integratsiya qilamiz.",
      engine1Check: "Tayyor 3D va GIS kutubxonasi integratsiyasi",
      engine2Tag: "2. MODEL: MAYDONNI RAQAMLASHTIRISH XIZMATI",
      engine2Title: "Maxsus Raqamli Egizak Yaratish",
      engine2Desc:
        "Raqamlashmagan maydonlar, inshootlar va obyektlarni 3D skanerlash va datchiklar o'rnatish orqali raqamli egizakka ko'chiramiz.",
      engine2Check: "Maydon skanerlash, datchiklar va 3D egizak modeli",
    },
    dimensionsSection: {
      badge: "TRANSFORMATSIYA QATLAMLARI",
      title: "Makoniy O'lchovlarga Ko'ra Raqamli Egizak Yechimlari",
      subtitle:
        "Geografik hududlardan tortib binolar va ta'lim simulyatsiyalarigacha bo'lgan 3 bosqichda ishlaymiz.",
      items: [
        {
          id: "macro",
          tag: "MAKRO O'LCHOV",
          title: "Geografik va Makoniy Aktivlar",
          subtitle: "Yer Maydonlari va Geografik Hududlar",
          description:
            "Maydonlar, yerlar va infratuzilma tarmoqlarining 3D GIS va makoniy raqamli egizak modellari.",
          features: [
            "3D GIS Topografiya va Maydon Xaritalash",
            "Makoniy Ma'lumotlar Portali va Raqamli Ajratish",
            "Keng Maydonli Infratuzilma va Joylashuv Analitikasi",
          ],
          widgetTitle: "MAKONIY TELEMETRIYA",
          widgetStatus: "JONLI",
          metric1Label: "Xaritalangan Maydon",
          metric1Value: "2,450 Hektar",
          metric2Label: "GIS Aniqligi",
          metric2Value: "< 2 cm",
          btnText: "Makro Egizak Demosi",
        },
        {
          id: "micro",
          tag: "MIKRO O'LCHOV",
          title: "Inshootlar va Operatsion Ob'ektlar",
          subtitle: "Binolar, Inshootlar va Jismoniy Aktivlar",
          description:
            "Binolar, inshootlar va tizimlarning IoT datchiklari orqali raqamli kuzatuvi va simulyatsiyasi.",
          features: [
            "Jismoniy Aktiv va Inshoot 3D Modellashtirishi",
            "Jonli IoT va Datchik Telemetriya Integratsiyasi",
            "Prognostik Ta'mirlash va Jarayon Optimizatsiyasi",
          ],
          widgetTitle: "JONLI INSHOOT MONITORINGI",
          widgetStatus: "FAOL",
          metric1Label: "Boshqariladigan Bino va Tesis",
          metric1Value: "82 Tesis",
          metric2Label: "Datchik Unumdorligi",
          metric2Value: "96.2%",
          btnText: "Mikro Egizak Demosi",
        },
        {
          id: "xr",
          tag: "TA'SIR O'LCHOVI",
          title: "Inson, Simulyatsiya va Ta'sir",
          subtitle: "Jarayonlar, Ta'lim va Virtual Tajriba",
          description:
            "Ta'lim, simulyatsiya va 3D interaktiv ma'lumot tajribasi muhitlari.",
          features: [
            "Virtual va Arttirilgan Haqiqat (XR) Simulyatsiyasi",
            "Interaktiv Jarayon va Senariy Modellashtirish",
            "Raqamli Kompetensiya va Tajriba Boshqaruvi",
          ],
          widgetTitle: "SIMULYATSIYA VA XR",
          widgetStatus: "TAYYOR",
          metric1Label: "Faol Foydalanuvchilar",
          metric1Value: "18,400+",
          metric2Label: "Simulyator Modullari",
          metric2Value: "54 Tayyor Egizak",
          btnText: "Ta'sir Demosi",
        },
      ],
    },
    greenCarbonSection: {
      badge: "GREEN CARBON AI & ESG INTEGRATION",
      title1: "Yashil Raqamli Egizak va",
      title2: "Uglerod Izini Boshqarish",
      description:
        "GreenCarbonAI (greencarbonai.com) integratsiyasi bilan obyekt yoki inshootning energiya sarfi hamda uglerod chiqindisini raqamli egizakda kuzatamiz.",
      f1: "Jonli Uglerod va Suv Izi Hisoboti",
      f2: "Yevropa Ittifoqi SKDM va ESG Standartlari",
      f3: "Energiya Samaradorligi va Issiqlik Xaritasi",
      f4: "Yashil Pasport va Barqarorlik Sertifikati",
      boxLabel: "JONLI UGLEROD NEYTRALLIK DARAJA",
      boxValue: "94.8%",
      boxSub: "Optimizatsiya Faol",
      boxBtn: "Green Carbon Modulini Qo'shish",
    },
    techSection: {
      badge: "TEXNOLOGIYA QATLAMI",
      title: "4 Bosqichda Makoniy Egizak Arxitekturasi",
      subtitle:
        "Datchikdan raqamli egizakkacha, simulyatsiyadan tahliliy qaror qabul qilishgacha bo'lgan yaxlit tizim.",
      stepPrefix: "0",
      layers: [
        {
          step: "1",
          title: "IoT & Sensör Katmanı",
          description:
            "Maydon, inshoot va infratuzilmadagi fizik datchiklardan jonli telemetriya ma'lumotlarini yig'ish.",
          tag: "Wi-Fi / MQTT / Sensors",
        },
        {
          step: "2",
          title: "Raqamli Egizak Yaratish",
          description:
            "Infratuzilma ma'lumotlarining yuqori aniqlikdagi makoniy modellashtirilishi va 3D egizak yaratilishi.",
          tag: "3D Spatial / Point Cloud",
        },
        {
          step: "3",
          title: "Raqamli Egizak Simulyatsiyasi",
          description:
            "Jismoniy aktivlarning virtual muhitdagi jonli modellari, jarayonlar kuzatuvi va simulyatsiyalari.",
          tag: "XR / Physics Engine",
        },
        {
          step: "4",
          title: "Qaror Qabul Qilish va Analitika",
          description:
            "Ma'lumotlarga asoslangan optimallashtirish, prognozli ta'mirlash va yuqori darajadagi boshqaruv tahlili.",
          tag: "Predictive Analytics",
        },
      ],
    },
    contactSection: {
      badge: "ALOQA VA MARKAZ",
      title: "Fiziki Varligingizni Raqamli Egizakka Aylantiring",
      description:
        "Arazilar, inshootlar, binolar va har qanday jismoniy varliqlarning raqamli egizagi. Jismoniy dunyodagi barcha makonlarni raqamli modellarga ko'chiramiz.",
      officeLabel: "Bosh Qarorgoh",
      officeValue: "Toshkent, O'zbekiston / Istanbul, Turkiya",
      phoneLabel: "Telefon",
      phoneValue: "+998 90 277 73 66",
      form: {
        nameLabel: "Ismingiz va Familiyangiz",
        namePlaceholder: "Jasur Rahimov",
        orgLabel: "Kompaniya / Tashkilot Nomi",
        orgPlaceholder: "Tashkent Spatial Development",
        emailLabel: "Elektron Pochta",
        emailPlaceholder: "info@kompaniya.uz",
        domainLabel: "Sizni Qiziqtirgan Katman",
        domainOptions: {
          all: "Barcha Transformatsiya Qatlamlari",
          macro: "Mekansal & Coğrafi Varlıklar (Arazilar, OSB & Altyapı)",
          micro: "Tesisler & Yapı Kompleksleri (Fabrika, Binalar & Miras)",
          xr: "Simülasyon, XR & Eğitim (Nara XR & Digital School)",
          green: "Green Carbon AI (Karbon & Enerji)",
        },
        notesLabel: "Saha / Aktiv Haqida Izohlar",
        notesPlaceholder: "Saha büyüklüğü, lokasyon va hedefleringiz...",
        submitBtn: "So'rovni Yuborish / Request Demo",
        submittingBtn: "Yuborilmoqda...",
        successMsg: "Rahmat! So'rovingiz qabul qilindi. Mutaxassislarimiz tez orada bog'lanishadi.",
      },
    },
    demoModal: {
      badge: "DIGITWINS LOYIHA SO'ROVI",
      title: "Jismoniy Aktivingizni Raqamlashtiring",
      close: "Yopish",
      nameLabel: "Ismingiz va Familiyangiz",
      orgLabel: "Kompaniya / Tashkilot Nomi",
      domainLabel: "Sizni Qiziqtirgan Katman",
      notesLabel: "Saha / Aktiv Haqida Izohlar",
      submitBtn: "So'rovni Yuborish / Request Demo",
    },
    footer: {
      description:
        "Arazilar, inshootlar, binolar va barcha jismoniy varliqlarning raqamli egizagi. Jismoniy dunyodagi barcha makonlarni raqamli modellarga ko'chiramiz.",
      dimensionsHeading: "TRANSFORMATSIYA QATLAMLARI",
      contactHeading: "ALOQA VA MARKAZ",
      phoneLabel: "Telefon",
      phoneValue: "+998 90 277 73 66",
      rights: "Barcha huquqlar himoyalangan.",
      locations: "Toshkent, O'zbekiston / Istanbul, Turkiya",
      privacy: "Maxfiylik Siyosati",
    },
  },

  // ============================================================
  // TURKISH (TR) - 100% Doğal Türkçe
  // ============================================================
  tr: {
    nav: {
      system: "Ne Yapıyoruz?",
      dimensions: "Dönüşüm Katmanları",
      greenCarbon: "Green Carbon",
      tech: "Teknoloji Katmanı",
      contact: "İletişim",
      demoButton: "Proje / Demo İste",
    },
    hero: {
      badge: "MEKANSAL DİJİTALLEŞTİRME EKOSİSTEMİ",
      title1: "Fiziksel Mekan ve Yapıların",
      title2: "Dijital İkiz Hizmetleri",
      description:
        "Fiziksel sahaları, tesisleri ve yapıları 3D lazer tarama, IoT datchik/sensör bağlantıları ve simülasyon altyapısıyla dijital ikizlere dönüştürüyoruz. Hazır modelleri entegre ediyor veya ihtiyacınıza göre sıfırdan saha modellemesi yapıyoruz.",
      tagAreas: "Makro / Coğrafi",
      tagFacilities: "Mikro / Yapılar",
      tagXr: "İnsan & Etkileşim",
      tagGreen: "Green Carbon",
      btnMain: "Fiziki Varlığınızı Dijitalleştirin",
      btnSub: "Dönüşüm Katmanlarını Keşfet",
      canvasTelemetry: "Canlı Telemetri & GIS",
    },
    coreEngines: {
      badge: "NELER YAPAYORUZ?",
      title: "Fiziksel Dünyayı Dijital Modellere Aktarıyoruz",
      subtitle:
        "İhtiyacınıza göre hazır dijital şablonları kullanıyor veya sahanızda özel modelleme ve sensör entegrasyonu gerçekleştiriyoruz.",
      engine1Tag: "1. MODEL: HAZIR İKİZ KÜTÜPHANESİ",
      engine1Title: "Hazır Dijitalleştirilmiş Varlıklar",
      engine1Desc:
        "Önceden modellenmiş mekansal şablonları, bina ve arazi modellerini sisteme entegre ederek hızlı kullanım sağlıyoruz.",
      engine1Check: "Hazır 3D ve GIS Kütüphanesi Entegrasyonu",
      engine2Tag: "2. MODEL: SAHA DİJİTALLEŞTİRME HİZMETİ",
      engine2Title: "Özel Dijital İkiz Geliştirme",
      engine2Desc:
        "Dijitalleşmemiş sahaları, tesisleri ve yapıları 3D tarama, fotogrametri ve sensör ağı kurarak dijital ortama modelliyoruz.",
      engine2Check: "Saha Taraması, Sensör Entegrasyonu ve 3D İkiz Modeli",
    },
    dimensionsSection: {
      badge: "DÖNÜŞÜM KATMANLARI",
      title: "Mekansal Ölçeklere Göre Dijital İkiz Çözümleri",
      subtitle:
        "Coğrafi alanlardan tekil binalara ve eğitim simülasyonlarına kadar 3 temel ölçekte çalışıyoruz.",
      items: [
        {
          id: "macro",
          tag: "MAKRO ÖLÇEK",
          title: "Coğrafi & Mekansal Varlıklar",
          subtitle: "Araziler, Sahalar & Coğrafi Alanlar",
          description:
            "Geniş ölçekli sahaların, arazilerin ve altyapı ağlarının 3D GIS ve mekansal dijital ikizleme çözümleri.",
          features: [
            "3D GIS Topoğrafya ve Saha Haritalama",
            "Mekansal Veri Portalı ve Dijital Tahsis",
            "Geniş Alan Altyapı ve Konum Analitiği",
          ],
          widgetTitle: "MEKANSAL TELEMETRİ",
          widgetStatus: "CANLI",
          metric1Label: "Haritalanan Saha",
          metric1Value: "2,450 Hektar",
          metric2Label: "GIS Hassasiyeti",
          metric2Value: "< 2 cm",
          btnText: "Makro İkiz Demosu",
        },
        {
          id: "micro",
          tag: "MİKRO ÖLÇEK",
          title: "Yapılar & Operasyonel Tesisler",
          subtitle: "Binalar, Tesisler & Fiziksel Varlıklar",
          description:
            "Binaların, tesislerin ve kapalı alanların canlı IoT sensörleri ile dijital takibi ve simülasyonu.",
          features: [
            "Fiziksel Varlık ve Tesis 3D Modellemesi",
            "Canlı IoT & Sensör Telemetri Entegrasyonu",
            "Kestirimci Bakım & Süreç Optimizasyonu",
          ],
          widgetTitle: "CANLI TESİS İZLEME",
          widgetStatus: "AKTİF",
          metric1Label: "Yönetilen Bina & Tesis",
          metric1Value: "82 Tesis",
          metric2Label: "Sensör Verimliliği",
          metric2Value: "96.2%",
          btnText: "Mikro İkiz Demosu",
        },
        {
          id: "xr",
          tag: "ETKİLEŞİM ÖLÇEĞİ",
          title: "İnsan, Simülasyon & Deneyim",
          subtitle: "Süreçler, Eğitim & Sanal Deneyim",
          description:
            "Eğitim, simülasyon, oryantasyon ve 3D etkileşimli veri deneyimi ortamları.",
          features: [
            "Sanal & Artırılmış Gerçeklik (XR) Simülasyonu",
            "Etkileşimli Süreç ve Senaryo Modelleme",
            "Dijital Yetkinlik ve Deneyim Yönetimi",
          ],
          widgetTitle: "SİMÜLASYON & XR",
          widgetStatus: "HAZIR",
          metric1Label: "Aktif Kullanıcı",
          metric1Value: "18,400+",
          metric2Label: "Simülatör Modülü",
          metric2Value: "54 Hazır İkiz",
          btnText: "Etkileşim Demosu",
        },
      ],
    },
    greenCarbonSection: {
      badge: "GREEN CARBON AI & ESG INTEGRATION",
      title1: "Yeşil Dijital İkiz ve",
      title2: "Karbon Ayak İzi Yönetimi",
      description:
        "GreenCarbonAI (greencarbonai.com) entegrasyonu ile tesis ve yapıların enerji tüketimini ve karbon emisyonunu dijital ikiz üzerinde izliyoruz.",
      f1: "Canlı Karbon & Su Ayak İzi Raporlama",
      f2: "AB SKDM & ESG Uyum Standartları",
      f3: "Enerji Verimliliği & Isı Haritalama",
      f4: "Yeşil Pasaport & Sürdürülebilirlik Sertifikası",
      boxLabel: "CANLI KARBON NÖTR DÜZEYİ",
      boxValue: "94.8%",
      boxSub: "Optimizasyon Aktif",
      boxBtn: "Green Carbon Modülü Ekle",
    },
    techSection: {
      badge: "TEKNOLOJİ KATMANI",
      title: "4 Adımda Mekansal İkiz Mimarisi",
      subtitle:
        "Sensörden dijital ikize, simülasyondan analitik karar desteğe kadar bütünleşik sistem katmanı.",
      stepPrefix: "0",
      layers: [
        {
          step: "1",
          title: "IoT & Sensör Katmanı",
          description:
            "Saha, tesis ve altyapıdaki fiziksel sensörlerden canlı telemetri verilerinin toplanması.",
          tag: "Wi-Fi / MQTT / Sensör",
        },
        {
          step: "2",
          title: "Dijital İkiz Geliştirme",
          description:
            "Altyapı verilerinin yüksek hassasiyetli mekansal modellemesi ve 3D ikiz geliştirme.",
          tag: "3D Mekansal / Point Cloud",
        },
        {
          step: "3",
          title: "Dijital İkiz Simülasyonu",
          description:
            "Fiziksel varlıkların sanal ortamda canlı modelleri, süreç takibi ve simülasyonları.",
          tag: "XR / Simülasyon Motoru",
        },
        {
          step: "4",
          title: "Karar Destek & Analitik",
          description:
            "Veriye dayalı optimizasyon, kestirimci bakım ve üst düzey yönetim analitiği.",
          tag: "Kestirimci Analitik",
        },
      ],
    },
    contactSection: {
      badge: "İLETİŞİM & MERKEZ",
      title: "Fiziki Varlığınızı Dijital İkize Dönüştürün",
      description:
        "Araziler, tesisler, binalar ve tüm fiziki varlıkların dijital ikizi. Fiziksel mekanları dijital modellere dönüştürüyoruz.",
      officeLabel: "Genel Merkez",
      officeValue: "Tashkent, Uzbekistan / İstanbul, Türkiye",
      phoneLabel: "Telefon",
      phoneValue: "+998 90 277 73 66",
      form: {
        nameLabel: "Adınız ve Soyadınız",
        namePlaceholder: "Jasur Rahimov",
        orgLabel: "Şirket / Kurum Adı",
        orgPlaceholder: "Tashkent Spatial Development",
        emailLabel: "E-Posta",
        emailPlaceholder: "info@sirket.uz",
        domainLabel: "İlgilendiğiniz Dönüşüm Katmanı",
        domainOptions: {
          all: "Tüm Dönüşüm Katmanları",
          macro: "Mekansal & Coğrafi Varlıklar (Araziler, OSB & Altyapı)",
          micro: "Tesisler & Yapı Kompleksleri (Fabrika, Binalar & Miras)",
          xr: "Simülasyon, XR & Eğitim (Nara XR & Digital School)",
          green: "Green Carbon AI (Karbon & Enerji)",
        },
        notesLabel: "Saha / Varlık Notları",
        notesPlaceholder: "Saha büyüklüğü, lokasyon ve hedefleriniz...",
        submitBtn: "Talep Gönder / Request Demo",
        submittingBtn: "Gönderiliyor...",
        successMsg:
          "Teşekkürler! Talebiniz alındı. Uzmanlarımız en kısa sürede iletişime geçecektir.",
      },
    },
    demoModal: {
      badge: "DIGITWINS PROJE TALEBİ",
      title: "Fiziki Varlığınızı Dijitalleştirin",
      close: "Kapat",
      nameLabel: "Adınız ve Soyadınız",
      orgLabel: "Şirket / Kurum Adı",
      domainLabel: "İlgilendiğiniz Dönüşüm Boyutu",
      notesLabel: "Saha / Tesis Notları",
      submitBtn: "Talep Gönder / Request Demo",
    },
    footer: {
      description:
        "Araziler, tesisler, binalar ve tüm fiziki varlıkların dijital ikizi. Fiziksel mekanları dijital modellere dönüştürüyoruz.",
      dimensionsHeading: "DÖNÜŞÜM KATMANLARI",
      contactHeading: "İLETİŞİM & MERKEZ",
      phoneLabel: "Telefon",
      phoneValue: "+998 90 277 73 66",
      rights: "Tüm hakları saklıdır.",
      locations: "Tashkent, Uzbekistan / İstanbul, Türkiye",
      privacy: "Gizlilik Politikası",
    },
  },

  // ============================================================
  // ENGLISH (EN) - 100% Native English
  // ============================================================
  en: {
    nav: {
      system: "What We Do",
      dimensions: "Transformation Layers",
      greenCarbon: "Green Carbon",
      tech: "Tech Stack",
      contact: "Contact",
      demoButton: "Request Demo",
    },
    hero: {
      badge: "SPATIAL DIGITIZATION ECOSYSTEM",
      title1: "Digital Twin Services for",
      title2: "Physical Spaces & Assets",
      description:
        "We convert physical grounds, facilities, and structures into digital twins using 3D laser scanning, IoT sensors, and simulation engines. We integrate ready-made models or build custom spatial models on-site.",
      tagAreas: "Macro / Geo-Spatial",
      tagFacilities: "Micro / Structures",
      tagXr: "Human & Interaction",
      tagGreen: "Green Carbon",
      btnMain: "Digitize Your Physical Asset",
      btnSub: "Explore Transformation Layers",
      canvasTelemetry: "Live Telemetry & GIS",
    },
    coreEngines: {
      badge: "WHAT WE DO",
      title: "Bridging Physical Spaces with Digital Models",
      subtitle:
        "We either integrate pre-built spatial assets or provide custom on-site 3D scanning, modeling, and telemetry integration.",
      engine1Tag: "MODEL 1: PRE-BUILT TWIN LIBRARY",
      engine1Title: "Ready-Made Digital Assets",
      engine1Desc:
        "Integrating pre-digitized spatial models, structural templates, and environments into the platform for rapid deployment.",
      engine1Check: "Instant 3D & GIS Spatial Library Integration",
      engine2Tag: "MODEL 2: ON-SITE DIGITIZATION SERVICE",
      engine2Title: "Custom Digital Twin Development",
      engine2Desc:
        "Transforming non-digitized physical spaces, facilities, or structures via 3D scanning, photogrammetry, and IoT sensor setups.",
      engine2Check: "Site Scanning, Sensor Integration & 3D Twin Modeling",
    },
    dimensionsSection: {
      badge: "TRANSFORMATION LAYERS",
      title: "Digital Twin Solutions Across 3 Scales",
      subtitle:
        "Working across geographical lands, facility structures, and interactive training simulations.",
      items: [
        {
          id: "macro",
          tag: "MACRO SCALE",
          title: "Geo-Spatial & Land Assets",
          subtitle: "Lands, Terrains & Geographical Zones",
          description:
            "3D GIS mapping and spatial digital twin solutions for grounds, terrains, and infrastructure networks.",
          features: [
            "3D GIS Topography & Land Mapping",
            "Spatial Data Portal & Digital Allocation",
            "Wide-Area Infrastructure & Spatial Analytics",
          ],
          widgetTitle: "SPATIAL TELEMETRY",
          widgetStatus: "LIVE",
          metric1Label: "Mapped Area",
          metric1Value: "2,450 Hectares",
          metric2Label: "GIS Precision",
          metric2Value: "< 2 cm",
          btnText: "Request Macro Demo",
        },
        {
          id: "micro",
          tag: "MICRO SCALE",
          title: "Built Structures & Operations",
          subtitle: "Buildings, Facilities & Physical Assets",
          description:
            "Live IoT sensor tracking, digital simulation, and operational tracking for physical structures and indoor spaces.",
          features: [
            "Physical Asset & Facility 3D Modeling",
            "Live IoT & Sensor Telemetry Integration",
            "Predictive Maintenance & Process Optimization",
          ],
          widgetTitle: "FACILITY MONITORING",
          widgetStatus: "ACTIVE",
          metric1Label: "Managed Facilities",
          metric1Value: "82 Facilities",
          metric2Label: "Sensor Efficiency",
          metric2Value: "96.2%",
          btnText: "Request Micro Demo",
        },
        {
          id: "xr",
          tag: "INTERACTION SCALE",
          title: "Human, Simulation & Experience",
          subtitle: "Processes, Training & Virtual Experience",
          description:
            "Interactive 3D environments for training, simulation, orientation, and XR data experiences.",
          features: [
            "Virtual & Augmented Reality (XR) Simulation",
            "Interactive Process & Scenario Modeling",
            "Digital Competency & Experience Management",
          ],
          widgetTitle: "SIMULATION & XR",
          widgetStatus: "READY",
          metric1Label: "Active Users",
          metric1Value: "18,400+",
          metric2Label: "Simulator Modules",
          metric2Value: "54 Pre-built",
          btnText: "Request Interaction Demo",
        },
      ],
    },
    greenCarbonSection: {
      badge: "GREEN CARBON AI & ESG INTEGRATION",
      title1: "Green Digital Twin &",
      title2: "Carbon Footprint Intelligence",
      description:
        "Integrated with GreenCarbonAI (greencarbonai.com) to track live energy consumption and carbon emissions on 3D spatial twins.",
      f1: "Live Carbon & Water Footprint Reporting",
      f2: "EU CBAM & ESG Compliance Standards",
      f3: "Energy Efficiency & Thermal Heat Mapping",
      f4: "Green Passport & Sustainability Certification",
      boxLabel: "LIVE CARBON NEUTRAL LEVEL",
      boxValue: "94.8%",
      boxSub: "Optimization Active",
      boxBtn: "Add Green Carbon Layer",
    },
    techSection: {
      badge: "TECHNOLOGY STACK",
      title: "4-Layer Spatial Architecture",
      subtitle:
        "From hardware sensors to 3D twins, XR simulation, and decision-support analytics.",
      stepPrefix: "0",
      layers: [
        {
          step: "1",
          title: "IoT & Sensor Layer",
          description:
            "Collecting real-time telemetry from physical IoT sensors across sites and infrastructure.",
          tag: "Wi-Fi / MQTT / Sensors",
        },
        {
          step: "2",
          title: "Digital Twin Development",
          description:
            "High-precision spatial 3D modeling and digital twin asset construction.",
          tag: "3D Spatial / Point Cloud",
        },
        {
          step: "3",
          title: "Digital Twin Simulation",
          description:
            "Real-time virtual models, process tracking, and XR simulations.",
          tag: "XR / Simulation Engine",
        },
        {
          step: "4",
          title: "Decision Support & Analytics",
          description:
            "Data-driven optimization, predictive maintenance, and executive reporting.",
          tag: "Predictive Analytics",
        },
      ],
    },
    contactSection: {
      badge: "GLOBAL HQ & CONTACT",
      title: "Digitize Your Physical Asset",
      description:
        "Digital twins for grounds, facilities, buildings, and physical assets. We bridge physical spaces with digital models.",
      officeLabel: "Headquarters",
      officeValue: "Tashkent, Uzbekistan / Istanbul, Türkiye",
      phoneLabel: "Phone",
      phoneValue: "+998 90 277 73 66",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Jasur Rahimov",
        orgLabel: "Company / Organization",
        orgPlaceholder: "Tashkent Spatial Development",
        emailLabel: "Email",
        emailPlaceholder: "info@company.uz",
        domainLabel: "Interested Layer",
        domainOptions: {
          all: "All Transformation Layers",
          macro: "Macro / Geo-Spatial (Lands, SEZ & Utilities)",
          micro: "Micro / Facilities (Factories, Buildings & Heritage)",
          xr: "Interaction, XR & Training (Nara XR & Digital School)",
          green: "Green Carbon AI (Carbon & Energy)",
        },
        notesLabel: "Asset / Site Notes",
        notesPlaceholder: "Site footprint, location, and goals...",
        submitBtn: "Submit Request / Request Demo",
        submittingBtn: "Submitting...",
        successMsg: "Thank you! Your request has been received.",
      },
    },
    demoModal: {
      badge: "DIGITWINS PROJECT REQUEST",
      title: "Digitize Your Physical Asset",
      close: "Close",
      nameLabel: "Full Name",
      orgLabel: "Company / Organization",
      domainLabel: "Interested Transformation Dimension",
      notesLabel: "Asset / Site Notes",
      submitBtn: "Submit Request / Request Demo",
    },
    footer: {
      description:
        "Digital twins for grounds, facilities, buildings, and physical assets. We bridge physical spaces with digital models.",
      dimensionsHeading: "TRANSFORMATION LAYERS",
      contactHeading: "GLOBAL HQ & CONTACT",
      phoneLabel: "Phone",
      phoneValue: "+998 90 277 73 66",
      rights: "All rights reserved.",
      locations: "Tashkent, Uzbekistan / Istanbul, Türkiye",
      privacy: "Privacy Policy",
    },
  },
};
