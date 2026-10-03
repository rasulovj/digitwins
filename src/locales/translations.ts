export type Language = 'uz' | 'tr' | 'en';

export interface TranslationContent {
  nav: {
    system: string;
    dimensions: string;
    events: string;
    tech: string;
    partners: string;
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
    p1Tag: string;
    p1Title: string;
    p1Sub: string;
    p1Desc: string;
    p1C1: string;
    p1C2: string;
    p1C3: string;
    p1Btn: string;
    p2Tag: string;
    p2Title: string;
    p2Sub: string;
    p2Desc: string;
    p2C1: string;
    p2C2: string;
    p2C3: string;
    p2Btn: string;
  };
  eventsSection: {
    badge: string;
    title: string;
    subtitle: string;
    event1Tag: string;
    event1Location: string;
    event1Title: string;
    event1Desc: string;
    event2Tag: string;
    event2Location: string;
    event2Title: string;
    event2Desc: string;
    ctaLabel: string;
    ctaBtn1: string;
    ctaBtn2: string;
  };
  techSection: {
    badge: string;
    title: string;
    subtitle: string;
    t1Step: string;
    t1Title: string;
    t1Desc: string;
    t2Step: string;
    t2Title: string;
    t2Desc: string;
    t3Step: string;
    t3Title: string;
    t3Desc: string;
    t4Step: string;
    t4Title: string;
    t4Desc: string;
  };
  partnersSection: {
    badge: string;
    title: string;
    subtitle: string;
    btn: string;
  };
  showcaseSection: {
    badge: string;
    title: string;
    description: string;
    btn: string;
  };
  legalSection: {
    title: string;
    toggleOpen: string;
    toggleClose: string;
    pf6079Title: string;
    pf6079Desc: string;
    orq702Title: string;
    orq702Desc: string;
  };
  contactSection: {
    form: {
      nameLabel: string;
      namePlaceholder: string;
      orgLabel: string;
      orgPlaceholder: string;
      domainLabel: string;
      domainOptions: {
        osb: string;
        facilities: string;
        summit: string;
        fieldEvent: string;
        ad: string;
        partner: string;
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
    tagAreas: string;
    tagFacilities: string;
    eventLink: string;
    contactHeading: string;
    locations: string;
    phoneLabel: string;
    phoneValue: string;
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  // ============================================================
  // UZBEK (UZ)
  // ============================================================
  uz: {
    nav: {
      system: "Nimalar Qilamiz?",
      dimensions: "Transformatsiya Yo'nalishlari",
      events: "Sammit va Tadbirlar",
      tech: "Texnologiya Arxitekturasi",
      partners: "Hamkorlarimiz",
      contact: "Aloqa",
      demoButton: "Loyiha / Demo So'rash",
    },
    hero: {
      badge: "SANOAT ZONALARI VA INSHOOTLAR EKOTIZIMI",
      title1: "Sanoat Zonalari va Inshootlar uchun",
      title2: "Raqamli Egizak va Green Carbon Platformasi",
      description:
        "Sanoat zonalari va sanoat korxonalari uchun ajratilgan yer maydonlari raqamli egizagi, infratuzilma kuzatuvi va korxona operatsion boshqaruvini ishlab chiqamiz.",
      tagAreas: "Sanoat Zonalari",
      tagFacilities: "Inshootlar va Majmualar",
      tagGreen: "Green Carbon AI",
      btnMain: "Jismoniy Aktivingizni Raqamlashtiring",
      btnSub: "Transformatsiya Yo'nalishlarini Kashf Eting",
      canvasTelemetry: "Jonli Telemetriya & GIS",
    },
    coreEngines: {
      badge: "NIMALAR QILAMIZ?",
      title: "Jismoniy Dunyoni Raqamli Modellarga Ko'chiramiz",
      subtitle:
        "Jismoniy maydonni raqamlashtirishda avvalo tayyor yechim bormi ko'rib chiqamiz, aks holda raqamli egizakni noldan o'zimiz modellashtiramiz.",
      engine1Tag: "1-YO'L: TAYYOR RAQAMLASHTIRISH SHABLONLARI",
      engine1Title: "Tayyor Raqamlashtirilgan Aktivlar",
      engine1Desc:
        "Jismoniy maydonni raqamlashtirishda avvalo tayyor model va shablonlar kutubxonasidan foydalanamiz hamda mavjud yechimlarni tezkor integratsiya qilamiz.",
      engine1Check: "Mavjud Modellarni Tezkor Integratsiya Qilish",
      engine2Tag: "2-YO'L: MAYDON VA INSHOOTLARNI RAQAMLASHTIRISH",
      engine2Title: "Maxsus Raqamli Egizak Yaratish",
      engine2Desc:
        "Tayyor yechim mavjud bo'lmagan maydon va inshootlarda skanerlash va maxsus raqamlashtirish orqali raqamli egizakni noldan o'zimiz ishlab chiqamiz.",
      engine2Check: "Maydon Skanerlash va Noldan Raqamli Egizak Yaratish",
    },
    dimensionsSection: {
      badge: "TRANSFORMATSIYA YO'NALISHLARI",
      title: "2 Ustuvor Yo'nalishda Raqamli Egizak Yechimlari",
      subtitle:
        "Faqat ikkita strategik yo'nalishga e'tibor qaratamiz: Sanoat Zonalari va Ishlab Chiqarish/Tijorat Inshootlari.",
      p1Tag: "1-USTUN: SANOAT ZONALARI",
      p1Title: "Sanoat Zonalari Raqamli Egizagi",
      p1Sub: "Yer Ajratish, Infratuzilma va Investor Portali",
      p1Desc:
        "Sanoat zonalarining 3D xaritalanishi, investorlarga masofaviy maydon namoyishi, elektr/gaz/suv tarmoqlari nazorati hamda ijarachilar portali.",
      p1C1: "3D Yer Ajratish va Investor Portali",
      p1C2: "Infratuzilma va Tarmoq Yo'qotishlarini Kuzatish",
      p1C3: "Zona Boshqaruvi va Korxona Ruxsatnomalar Integratsiyasi",
      p1Btn: "Sanoat Zonasi Raqamlashtirish So'rovi",
      p2Tag: "2-USTUN: INSHOOT VA MAJMYALAR",
      p2Title: "Fabrika, Bino va Inshootlar",
      p2Sub: "Raqamli Aktiv va Operatsion Boshqaruv",
      p2Desc:
        "Fabrikalar, tijorat binolari, omborlar va inshootlarni qavat/hudud bo'yicha yoki to'liq raqamlashtirish. Aktivlar inventarizatsiyasi va davriy texnik xizmat.",
      p2C1: "Inshoot va Bo'limlar Bo'yicha 3D Aktiv Inventari",
      p2C2: "Proaktiv Texnik Xizmat va Operatsion Boshqaruv",
      p2C3: "Ixtiyoriy Jonli IoT va Datchik Telemetriyasi",
      p2Btn: "Inshoot Demosini So'rash",
    },
    eventsSection: {
      badge: "KELAJAK TADBIR VA EKOTIZIM TASHABBUSLARI",
      title: "Sohaviy Sammit va Maydon Tadbirlari",
      subtitle:
        "O'zbekiston sanoat va inshootlarni raqamlashtirish ekotizimini birlashtiruvchi nufuzli uchrashuvlar.",
      event1Tag: "PRESTIJ SAMMITI",
      event1Location: "Tashkent / Sirdaryo",
      event1Title: "Aqlli Sanoat Zonalari Sammiti",
      event1Desc:
        "O'zbekistondagi Sanoat Zonalari rahbarlari, Vazirlik vakillari va xalqaro investorlarni birlashtiruvchi raqamli yer maydonlari hamda aqlli sanoat zonalari sammiti.",
      event2Tag: "MAYDON TADBIRI",
      event2Location: "Jonli Inshoot Skanerlash",
      event2Title: "\"Fabrikangizni Kashf Eting\" Amaliy Tadbiri",
      event2Desc:
        "Sanoatchilar va korxona egalari o'z ishlab chiqarish inshootlarining raqamli egizak salohiyati, aktivlar nazorati va energiya samaradorligini jonli tajriba qiluvchi amaliy uchrashuv.",
      ctaLabel: "Ishtirok va Batafsil Ma'lumot uchun:",
      ctaBtn1: "Ro'yxatdan O'tish",
      ctaBtn2: "Mezbonlik / Ro'yxatdan O'tish",
    },
    techSection: {
      badge: "TEXNOLOGIYA ARXITEKTURASI",
      title: "4 Bosqichda Makoniy Egizak Mimarisi",
      subtitle:
        "Ma'lumot yig'ishdan raqamli egizakkacha, ixtiyoriy jonli ulanishlardan tahliliy qaror qabul qilishgacha bo'lgan bosqichli tizim.",
      t1Step: "BOSQICH 01",
      t1Title: "Maydon Ma'lumotlari va Raqamlashtirish",
      t1Desc:
        "Tayyor modellarni integratsiya qilish yoki maydondan skanerlash va makoniy ma'lumotlarni yig'ish.",
      t2Step: "BOSQICH 02",
      t2Title: "Raqamli Egizakni Shakllantirish",
      t2Desc:
        "Yig'ilgan jismoniy ma'lumotlarni raqamli egizak formatida tuzilmalashtirish va ma'lumotlar bazasini yaratish.",
      t3Step: "BOSQICH 03",
      t3Title: "Jonli Ma'lumotlar va Integratsiya (Ixtiyoriy)",
      t3Desc:
        "Zarur bo'lgan inshoot va tizimlarda datchiklar, IIoT va jonli telemetriya ulanishlari.",
      t4Step: "BOSQICH 04",
      t4Title: "Qaror Qabul Qilish va Analitika",
      t4Desc:
        "Boshqaruv panellari, operatsion kuzatuv, energiya va emissiya tahlili.",
    },
    partnersSection: {
      badge: "HAMKORLARIMIZ VA EKOTIZIM",
      title: "Rivojlanayotgan Texnologik Ekotizimimiz",
      subtitle:
        "Makoniy raqamlashtirish va IoT ekotizimimizga qo'shilish yoki texnologik hamkor bo'lish uchun biz bilan bog'laning.",
      btn: "Hamkorimiz Bo'ling / Become a Partner",
    },
    showcaseSection: {
      badge: "SARALANGAN MAYDONLAR VA REKLAMA PANOSI",
      title: "Raqamlashtirilgan Aktivingizni Platformada Namoyish Eting",
      description:
        "Raqamli egizagi yaratilgan yer maydoningiz, sanoat inshootingiz va loyihangizni xalqaro investorlarga namoyish etish uchun platformamizda alohida ajratib ko'rsatishingiz mumkin.",
      btn: "Reklama So'rovi / Sponsoring",
    },
    legalSection: {
      title: "O'zbekiston Raqamli Islohotlari va Huquqiy Asoslar",
      toggleOpen: "Qonunchilik / Ma'lumotnoma",
      toggleClose: "Ma'lumotnomani Yopish",
      pf6079Title: "\"Raqamli O'zbekiston – 2030\" Strategiyasi",
      pf6079Desc:
        "Sanoat korxonalari va infratuzilmada raqamli transformatsiyani joriy etish bo'yicha milliy strategiya.",
      orq702Title: "\"Fazoviy Ma'lumotlar To'g'risida\"gi Qonun",
      orq702Desc:
        "GIS xaritalash, kadastr va 3D topografik ma'lumotlarni yagona standartlarda boshqarish qonuniy asoslari.",
    },
    contactSection: {
      form: {
        nameLabel: "Ismingiz va Familiyangiz",
        namePlaceholder: "Jasur Rahimov",
        orgLabel: "Kompaniya / Tashkilot Nomi",
        orgPlaceholder: "Tashkent Spatial Development",
        domainLabel: "Sizni Qiziqtirgan Yo'nalish",
        domainOptions: {
          osb: "Sanoat Zonalari (Yer va Infratuzilma)",
          facilities: "Tesisler & Yapılar (Bino va Fabrikalar)",
          summit: "Aqlli Sanoat Zonalari Sammiti (Ro'yxatdan o'tish)",
          fieldEvent: "\"Fabrikangizni Kashf Eting\" Maydon Tadbiri",
          ad: "Reklama & Saralangan Maydonlar (Sponsoring)",
          partner: "Texnologik Hamkorlik / Partnership",
        },
        notesLabel: "Saha / Aktiv Haqida Izohlar",
        notesPlaceholder: "Saha hajmi, joylashuvi va raqamlashtirish maqsadlaringiz...",
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
      domainLabel: "Sizni Qiziqtirgan Yo'nalish",
      notesLabel: "Saha / Aktiv Haqida Izohlar",
      submitBtn: "So'rovni Yuborish / Request Demo",
    },
    footer: {
      description: "Sanoat zonalari, inshootlar va majmualarning raqamli egizak platformasi.",
      dimensionsHeading: "TRANSFORMATSIYA YO'NALISHLARI",
      tagAreas: "Sanoat Zonalari",
      tagFacilities: "Inshootlar va Majmualar",
      eventLink: "Sanoat Zirvesi",
      contactHeading: "ALOQA VA MARKAZ",
      locations: "Tashkent, Uzbekistan / Istanbul, Türkiye",
      phoneLabel: "Telefon",
      phoneValue: "+998 90 277 73 66",
      rights: "Barcha huquqlar himoyalangan.",
      tagline: "Spatial Twin & Green Tech Ecosystem",
    },
  },

  // ============================================================
  // TURKISH (TR)
  // ============================================================
  tr: {
    nav: {
      system: "Ne Yapıyoruz?",
      dimensions: "Dönüşüm Odakları",
      events: "Zirve & Etkinlikler",
      tech: "Teknoloji Mimarisi",
      partners: "Partnerlerimiz",
      contact: "İletişim",
      demoButton: "Proje / Demo İste",
    },
    hero: {
      badge: "OSB & SANAYİ DİJİTALLEŞTİRME EKOSİSTEMİ",
      title1: "Organize Sanayi Bölgeleri (OSB) ve Tesisler için",
      title2: "Dijital İkiz ve Green Carbon Platformu",
      description:
        "Organize sanayi bölgeleri ve endüstriyel tesisler için parsel tahsis ikizi, altyapı takibi ve tesis operasyon yönetimi geliştiriyoruz.",
      tagAreas: "OSB & Sanayi Bölgeleri",
      tagFacilities: "Tesisler & Yapılar",
      tagGreen: "Green Carbon AI",
      btnMain: "Fiziki Varlığınızı Dijitalleştirin",
      btnSub: "Dönüşüm Odaklarını Keşfet",
      canvasTelemetry: "Canlı Telemetri & GIS",
    },
    coreEngines: {
      badge: "NE YAPIYORUZ?",
      title: "Fiziksel Dünyayı Dijital Modellere Aktarıyoruz",
      subtitle:
        "Bir fiziki mekanı dijitalleştirirken hazır bir çözüm varsa önce onu sunarız, yoksa dijital ikizini sıfırdan biz geliştiririz.",
      engine1Tag: "1. YOL: HAZIR DİJİTALİZASYON ŞABLONLARI",
      engine1Title: "Hazır Dijitalleştirilmiş Varlıklar",
      engine1Desc:
        "Fiziki bir mekanı dijitalleştirirken öncelikle hazır model, veri ve şablon kütüphanemizden yararlanıyor, var olan çözümleri hızlıca entegre ediyoruz.",
      engine1Check: "Var Olan Modelleri Hızlı Entegre Etme",
      engine2Tag: "2. YOL: SAHA VE MEKAN DİJİTALLEŞTİRME",
      engine2Title: "Özel Dijital İkiz Geliştirme",
      engine2Desc:
        "Hazır bir çözümün bulunmadığı sahalarda veya yapılarda; saha taraması ve özel verileştirme ile dijital ikizi sıfırdan kendimiz geliştiriyoruz.",
      engine2Check: "Saha Taraması ve Sıfırdan Dijital İkiz Geliştirme",
    },
    dimensionsSection: {
      badge: "DÖNÜŞÜM ODAKLARI",
      title: "2 Ana Sütunda Sanayi ve Tesis Dijitalleştirmesi",
      subtitle:
        "Sadece iki stratejik alana odaklanıyoruz: OSB'ler/Sanayi Bölgeleri ve Üretim/Ticari Tesisler.",
      p1Tag: "1. SÜTUN: OSB & SANAYİ BÖLGELERİ",
      p1Title: "OSB ve Sanayi Bölgeleri Dijital İkizi",
      p1Sub: "Parsel Tahsisi, Altyapı ve Yatırımcı Portalı",
      p1Desc:
        "Organize Sanayi Bölgelerinin 3D parsel haritalaması, yatırımcılara uzaktan saha gösterimi, elektrik/gaz/su hatları takibi ve kiracı yönetim portalı.",
      p1C1: "3D Parsel Tahsis ve Yatırımcı Portalı",
      p1C2: "OSB Altyapı, Şebeke ve Kayıp-Kaçak İzleme",
      p1C3: "Bölge Yönetimi & Fabrika Ruhsat Entegrasyonu",
      p1Btn: "OSB Dijitalleştirme Talebi",
      p2Tag: "2. SÜTUN: TESİS VE YAPILAR",
      p2Title: "Fabrika, Binalar ve Tesisler",
      p2Sub: "Dijital Varlık, Tesis ve Operasyon Yönetimi",
      p2Desc:
        "Fabrikaların, ticari binaların, depoların ve tesislerin kat/alan bazlı veya komple dijitalleştirilmesi. Varlık envanteri, periyodik bakım takibi ve opsiyonel sensör entegrasyonu.",
      p2C1: "Tesis & Bölüm Bazlı 3D Varlık Envanteri",
      p2C2: "Kestirimci Bakım & Tesis Operasyon Yönetimi",
      p2C3: "Opsiyonel Canlı IoT ve Sensör Telemetrisi",
      p2Btn: "Tesis Demosu İste",
    },
    eventsSection: {
      badge: "GELECEK ETKİNLİKLER VE EKOSİSTEM İNİSİYATİFLERİ",
      title: "Sektörel Zirveler ve Saha Etkinlikleri",
      subtitle:
        "Özbekistan sanayi ve tesis dijitalleşme ekosistemini bir araya getiren prestijli buluşmalar.",
      event1Tag: "PRESTİJ ZİRVESİ",
      event1Location: "Tashkent / Sirdaryo",
      event1Title: "Akıllı OSB ve Sanayi Bölgeleri Zirvesi",
      event1Desc:
        "Özbekistan'daki Organize Sanayi Bölgeleri müdürleri, Bakanlık yetkilileri ve uluslararası yatırımcıları buluşturan dijital parsel ve akıllı OSB dönüşüm zirvesi.",
      event2Tag: "SAHA ATÖLYESİ",
      event2Location: "Canlı Tesis Taraması",
      event2Title: "\"Fabrikanı Keşfet\" Saha Etkinliği",
      event2Desc:
        "Sanayicilerin ve fabrika sahiplerinin kendi üretim tesislerinin dijital ikiz potansiyelini, varlık takibini ve enerji verimliliğini canlı yerinde tecrübe ettiği özel saha buluşması.",
      ctaLabel: "Katılım & Detaylı Bilgi İçin:",
      ctaBtn1: "Kayıt / Bilgi İste",
      ctaBtn2: "Ev Sahipliği / Kayıt",
    },
    techSection: {
      badge: "TEKNOLOJİ MİMARİSİ",
      title: "4 Adımda Mekansal İkiz Mimarisi",
      subtitle:
        "Veri toplamadan dijital ikize, opsiyonel canlı bağlantılardan analitik karar desteğe kadar aşamalı mimari.",
      t1Step: "ADIM 01",
      t1Title: "Saha Verisi & Dijitalleştirme",
      t1Desc:
        "Hazır modellerin entegrasyonu veya sahadan tarama ve mekansal verilerin toplanması.",
      t2Step: "ADIM 02",
      t2Title: "Dijital İkiz Yapılandırması",
      t2Desc:
        "Toplanan fiziki verilerin dijital ikiz formatında düzenlenmesi ve verileştirilmesi.",
      t3Step: "ADIM 03",
      t3Title: "Canlı Veri & Entegrasyon (Opsiyonel)",
      t3Desc:
        "İhtiyaç duyulan tesis ve sistemlerde sensör, IIoT ve canlı telemetri bağlantıları.",
      t4Step: "ADIM 04",
      t4Title: "Karar Destek & Analitik",
      t4Desc:
        "Yönetim panelleri, operasyonel takip, enerji ve emisyon analitiği.",
    },
    partnersSection: {
      badge: "PARTNERLERİMİZ VE EKOSİSTEM",
      title: "Gelişen Teknoloji Ekosistemimiz",
      subtitle:
        "Mekansal dijitalleştirme ve teknoloji ekosistemimize katılmak veya partnerimiz olmak için bizimle iletişime geçebilirsiniz.",
      btn: "Partnerimiz Olun / Become a Partner",
    },
    showcaseSection: {
      badge: "ÖNE ÇIKAN SAHALAR VE REKLAM PANOSU",
      title: "Dijitalleşen Varlığınızı Platformda Öne Çıkarın",
      description:
        "Dijital ikizini oluşturduğumuz arazinizi, sanayi tesisinizi veya projenizi yatırımcılara ve müşterilere sergilemek için platformumuzda öne çıkarabilirsiniz.",
      btn: "Reklam / Öne Çıkarma Talebi",
    },
    legalSection: {
      title: "Özbekistan Dijital Reformları ve Yasal Mevzuat",
      toggleOpen: "Mevzuat / Bilgi Rehberi",
      toggleClose: "Rehberi Kapat",
      pf6079Title: "\"Dijital Özbekistan – 2030\" Stratejisi",
      pf6079Desc:
        "Sanayi ve altyapıda dijital dönüşümü hayata geçirmeye yönelik ulusal strateji.",
      orq702Title: "\"Mekansal Veriler Hakkında\" Kanun",
      orq702Desc:
        "GIS haritalama, kadastro ve 3D topografik verilerin yönetimi yasal çerçevesi.",
    },
    contactSection: {
      form: {
        nameLabel: "Adınız ve Soyadınız",
        namePlaceholder: "Jasur Rahimov",
        orgLabel: "Şirket / Kurum Adı",
        orgPlaceholder: "Tashkent Spatial Development",
        domainLabel: "İlgilendiğiniz Dönüşüm Boyutu",
        domainOptions: {
          osb: "OSB & Sanayi Bölgeleri (Parsel ve Altyapı Takibi)",
          facilities: "Tesisler & Yapılar (Binalar, Fabrikalar & Tesisler)",
          summit: "Akıllı OSB ve Sanayi Bölgeleri Zirvesi (Kayıt / Bilgi)",
          fieldEvent: "\"Fabrikanı Keşfet\" Saha Etkinliği (Ev Sahipliği / Kayıt)",
          ad: "Reklam & Öne Çıkarma (Sponsoring)",
          partner: "Teknoloji Partnerliği / Partnership",
        },
        notesLabel: "Saha / Varlık Notları",
        notesPlaceholder: "Saha büyüklüğü, lokasyon ve hedefleriniz...",
        submitBtn: "Talep Gönder / Request Demo",
        submittingBtn: "Gönderiliyor...",
        successMsg: "Teşekkürler! Talebiniz alındı. Uzmanlarımız en kısa sürede iletişime geçecektir.",
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
      description: "Organize Sanayi Bölgeleri ve tesisler için dijital ikiz altyapı platformu.",
      dimensionsHeading: "DÖNÜŞÜM ODAKLARI",
      tagAreas: "OSB & Sanayi Bölgeleri",
      tagFacilities: "Tesisler & Yapılar",
      eventLink: "OSB & Sanayi Zirvesi",
      contactHeading: "İLETİŞİM & MERKEZ",
      locations: "Tashkent, Uzbekistan / İstanbul, Türkiye",
      phoneLabel: "Telefon",
      phoneValue: "+998 90 277 73 66",
      rights: "Tüm hakları saklıdır.",
      tagline: "Spatial Twin & Green Tech Ecosystem",
    },
  },

  // ============================================================
  // ENGLISH (EN)
  // ============================================================
  en: {
    nav: {
      system: "What We Do",
      dimensions: "Transformation Focus",
      events: "Summits & Events",
      tech: "Tech Architecture",
      partners: "Partners",
      contact: "Contact",
      demoButton: "Request Demo",
    },
    hero: {
      badge: "INDUSTRIAL ZONES & FACILITIES ECOSYSTEM",
      title1: "Digital Twin & Green Carbon Platform for",
      title2: "Industrial Zones (OSB) & Facilities",
      description:
        "We develop plot allocation twins, infrastructure tracking, and facility operation management systems for industrial zones and enterprise facilities.",
      tagAreas: "Industrial Zones (OSB)",
      tagFacilities: "Facilities & Built Spaces",
      tagGreen: "Green Carbon AI",
      btnMain: "Digitize Your Physical Asset",
      btnSub: "Explore Focus Dimensions",
      canvasTelemetry: "Live Telemetry & GIS",
    },
    coreEngines: {
      badge: "WHAT WE DO",
      title: "Bridging Physical Spaces with Digital Models",
      subtitle:
        "When digitizing a space, we first check for ready-made solutions; if none exist, we develop the digital twin from scratch.",
      engine1Tag: "PATH 1: PRE-BUILT DIGITIZATION TEMPLATES",
      engine1Title: "Ready-Made Digital Assets",
      engine1Desc:
        "When digitizing a physical space, we first leverage our library of models, data, and templates to quickly integrate available solutions.",
      engine1Check: "Rapid Integration of Existing Models",
      engine2Tag: "PATH 2: ON-SITE DIGITIZATION SERVICE",
      engine2Title: "Custom Digital Twin Development",
      engine2Desc:
        "If a ready-made solution does not exist, we perform on-site scanning and custom data modeling to build the digital twin from scratch.",
      engine2Check: "On-Site Scanning & Twin Development from Scratch",
    },
    dimensionsSection: {
      badge: "TRANSFORMATION FOCUS",
      title: "Focused Solutions Across 2 Core Pillars",
      subtitle:
        "We focus specifically on Industrial Zones (OSB) and Manufacturing/Enterprise Facilities.",
      p1Tag: "1. PILLAR: OSB & INDUSTRIAL ZONES",
      p1Title: "Industrial Zones (OSB) Digital Twin",
      p1Sub: "Plot Allocation, Infrastructure & Investor Portal",
      p1Desc:
        "3D plot mapping for Industrial Zones, remote site tours for investors, utility tracking, and tenant management portals.",
      p1C1: "3D Plot Allocation & Investor Portal",
      p1C2: "Infrastructure & Grid Loss Monitoring",
      p1C3: "Zone Management & Factory Permit Integration",
      p1Btn: "Request Industrial Zone Twin",
      p2Tag: "2. PILLAR: FACILITIES & STRUCTURES",
      p2Title: "Factories, Buildings & Facilities",
      p2Sub: "Digital Asset, Facility & Operations Management",
      p2Desc:
        "Floor/zone or full digitization of factories, commercial buildings, warehouses, and facilities. Asset inventory and maintenance tracking.",
      p2C1: "3D Asset Inventory by Zone/Facility",
      p2C2: "Predictive Maintenance & Operations Management",
      p2C3: "Optional Live IoT & Sensor Telemetry",
      p2Btn: "Request Facility Demo",
    },
    eventsSection: {
      badge: "UPCOMING EVENTS & ECOSYSTEM INITIATIVES",
      title: "Industry Summits & Field Events",
      subtitle:
        "Prestigious gatherings bringing together Uzbekistan's industrial and facility digitization ecosystem.",
      event1Tag: "PRESTIGE SUMMIT",
      event1Location: "Tashkent / Sirdaryo",
      event1Title: "Smart OSB & Industrial Zones Summit",
      event1Desc:
        "A summit bringing together Industrial Zone directors, Ministry officials, and global investors for digital plot management and smart industrial zones.",
      event2Tag: "FIELD WORKSHOP",
      event2Location: "Live Facility Scanning",
      event2Title: "\"Discover Your Factory\" Field Event",
      event2Desc:
        "An exclusive field workshop where industrialists and factory owners experience digital twin potential, asset tracking, and energy efficiency first-hand.",
      ctaLabel: "For Registration & Info:",
      ctaBtn1: "Request Registration",
      ctaBtn2: "Host / Register",
    },
    techSection: {
      badge: "TECH ARCHITECTURE",
      title: "4-Step Spatial Twin Architecture",
      subtitle:
        "From data acquisition to digital twin structuring, optional live connectivity, and decision support analytics.",
      t1Step: "STEP 01",
      t1Title: "Field Data & Digitization",
      t1Desc:
        "Integration of pre-built models or collecting spatial scan data directly from the field.",
      t2Step: "STEP 02",
      t2Title: "Digital Twin Structuring",
      t2Desc:
        "Organizing physical space data into structured digital twin asset models.",
      t3Step: "STEP 03",
      t3Title: "Live Data & Integration (Optional)",
      t3Desc:
        "Connecting sensors, IoT, and live telemetry in facilities where real-time tracking is required.",
      t4Step: "STEP 04",
      t4Title: "Decision Support & Analytics",
      t4Desc:
        "Executive dashboards, operational monitoring, energy and carbon analytics.",
    },
    partnersSection: {
      badge: "PARTNERS & ECOSYSTEM",
      title: "Our Growing Tech Ecosystem",
      subtitle:
        "Contact us to join our spatial digitization ecosystem or become a technology partner.",
      btn: "Become a Partner",
    },
    showcaseSection: {
      badge: "FEATURED SHOWCASE & SPONSORSHIP",
      title: "Promote Your Digitized Asset on the Platform",
      description:
        "Feature your digitized land plot, industrial facility, or development project on our platform to reach global investors and buyers.",
      btn: "Request Advertisement / Featuring",
    },
    legalSection: {
      title: "Uzbekistan Digital Reforms & Legal Regulations",
      toggleOpen: "Legal / Reference Guide",
      toggleClose: "Close Guide",
      pf6079Title: "\"Digital Uzbekistan – 2030\" Strategy",
      pf6079Desc:
        "National strategy for digital transformation in industries and infrastructure.",
      orq702Title: "\"Law on Spatial Data\" (O'RQ-702)",
      orq702Desc:
        "Legal framework for managing GIS mapping, cadastre, and 3D topographic data.",
    },
    contactSection: {
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Jasur Rahimov",
        orgLabel: "Company / Organization",
        orgPlaceholder: "Tashkent Spatial Development",
        domainLabel: "Interested Focus",
        domainOptions: {
          osb: "Industrial Zones (OSB) - Plot & Utilities",
          facilities: "Facilities & Built Spaces (Factories & Buildings)",
          summit: "Smart OSB & Industrial Zones Summit (Register)",
          fieldEvent: "\"Discover Your Factory\" Field Event (Host / Register)",
          ad: "Featured Showcase & Advertisement",
          partner: "Technology Partnership",
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
      domainLabel: "Interested Focus",
      notesLabel: "Asset / Site Notes",
      submitBtn: "Submit Request / Request Demo",
    },
    footer: {
      description: "Digital twin platform tailored for Industrial Zones and enterprise facilities.",
      dimensionsHeading: "TRANSFORMATION FOCUS",
      tagAreas: "Industrial Zones (OSB)",
      tagFacilities: "Facilities & Built Spaces",
      eventLink: "OSB & Industrial Summit",
      contactHeading: "GLOBAL HQ & CONTACT",
      locations: "Tashkent, Uzbekistan / Istanbul, Türkiye",
      phoneLabel: "Phone",
      phoneValue: "+998 90 277 73 66",
      rights: "All rights reserved.",
      tagline: "Spatial Twin & Green Tech Ecosystem",
    },
  },
};
