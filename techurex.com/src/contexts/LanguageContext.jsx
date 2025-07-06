
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Global Technology Solutions',
    heroSubtitle: 'Empowering businesses worldwide with cutting-edge mobile services, cybersecurity solutions, and digital transformation.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services
    mobileServices: 'Mobile Services',
    mobileServicesDesc: 'IMEI checking, iCloud unlocking, SIM unlocking, and eSIM sales',
    cybersecurity: 'Cybersecurity',
    cybersecurityDesc: 'Advanced security solutions to protect your digital assets',
    digitalSolutions: 'Digital Solutions',
    digitalSolutionsDesc: 'Website creation, social media management, and advertising design',
    businessTech: 'Business Technology',
    businessTechDesc: 'Complete technology setup including security camera installation',
    
    // Features
    globalReach: 'Global Reach',
    globalReachDesc: 'Serving clients worldwide with 24/7 support',
    expertTeam: 'Expert Team',
    expertTeamDesc: 'Certified professionals with years of experience',
    cuttingEdge: 'Cutting-edge Technology',
    cuttingEdgeDesc: 'Latest tools and technologies for optimal results',
    
    // Contact
    getInTouch: 'Get in Touch',
    contactDesc: 'Ready to transform your business? Contact us today for a consultation.',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    
    // Footer
    footerDesc: 'Leading provider of technology solutions worldwide.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    
    // Buttons
    viewDetails: 'View Details',
    contactUs: 'Contact Us',
    requestQuote: 'Request Quote'
  },
  tr: {
    // Navigation
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    
    // Hero Section
    heroTitle: 'Küresel Teknoloji Çözümleri',
    heroSubtitle: 'Dünya çapında işletmeleri son teknoloji mobil hizmetler, siber güvenlik çözümleri ve dijital dönüşümle güçlendiriyoruz.',
    getStarted: 'Başlayın',
    learnMore: 'Daha Fazla Bilgi',
    
    // Services
    mobileServices: 'Mobil Hizmetler',
    mobileServicesDesc: 'IMEI kontrolü, iCloud kilidi açma, SIM kilidi açma ve eSIM satışı',
    cybersecurity: 'Siber Güvenlik',
    cybersecurityDesc: 'Dijital varlıklarınızı korumak için gelişmiş güvenlik çözümleri',
    digitalSolutions: 'Dijital Çözümler',
    digitalSolutionsDesc: 'Web sitesi oluşturma, sosyal medya yönetimi ve reklam tasarımı',
    businessTech: 'İş Teknolojisi',
    businessTechDesc: 'Güvenlik kamerası kurulumu dahil komple teknoloji kurulumu',
    
    // Features
    globalReach: 'Küresel Erişim',
    globalReachDesc: '7/24 destek ile dünya çapında müşterilere hizmet',
    expertTeam: 'Uzman Ekip',
    expertTeamDesc: 'Yılların deneyimine sahip sertifikalı profesyoneller',
    cuttingEdge: 'Son Teknoloji',
    cuttingEdgeDesc: 'Optimal sonuçlar için en son araçlar ve teknolojiler',
    
    // Contact
    getInTouch: 'İletişime Geçin',
    contactDesc: 'İşinizi dönüştürmeye hazır mısınız? Danışmanlık için bugün bize ulaşın.',
    email: 'E-posta',
    phone: 'Telefon',
    address: 'Adres',
    
    // Footer
    footerDesc: 'Dünya çapında teknoloji çözümlerinin önde gelen sağlayıcısı.',
    quickLinks: 'Hızlı Bağlantılar',
    followUs: 'Bizi Takip Edin',
    allRightsReserved: 'Tüm hakları saklıdır.',
    
    // Buttons
    viewDetails: 'Detayları Görüntüle',
    contactUs: 'Bize Ulaşın',
    requestQuote: 'Teklif İste'
  },
  ru: {
    // Navigation
    home: 'Главная',
    services: 'Услуги',
    about: 'О нас',
    contact: 'Контакты',
    
    // Hero Section
    heroTitle: 'Глобальные Технологические Решения',
    heroSubtitle: 'Расширяем возможности бизнеса по всему миру с помощью передовых мобильных услуг, решений кибербезопасности и цифровой трансформации.',
    getStarted: 'Начать',
    learnMore: 'Узнать больше',
    
    // Services
    mobileServices: 'Мобильные Услуги',
    mobileServicesDesc: 'Проверка IMEI, разблокировка iCloud, разблокировка SIM и продажа eSIM',
    cybersecurity: 'Кибербезопасность',
    cybersecurityDesc: 'Передовые решения безопасности для защиты ваших цифровых активов',
    digitalSolutions: 'Цифровые Решения',
    digitalSolutionsDesc: 'Создание веб-сайтов, управление социальными сетями и дизайн рекламы',
    businessTech: 'Бизнес Технологии',
    businessTechDesc: 'Полная настройка технологий, включая установку камер безопасности',
    
    // Features
    globalReach: 'Глобальный Охват',
    globalReachDesc: 'Обслуживание клиентов по всему миру с поддержкой 24/7',
    expertTeam: 'Команда Экспертов',
    expertTeamDesc: 'Сертифицированные специалисты с многолетним опытом',
    cuttingEdge: 'Передовые Технологии',
    cuttingEdgeDesc: 'Новейшие инструменты и технологии для оптимальных результатов',
    
    // Contact
    getInTouch: 'Связаться с нами',
    contactDesc: 'Готовы трансформировать свой бизнес? Свяжитесь с нами сегодня для консультации.',
    email: 'Электронная почта',
    phone: 'Телефон',
    address: 'Адрес',
    
    // Footer
    footerDesc: 'Ведущий поставщик технологических решений по всему миру.',
    quickLinks: 'Быстрые ссылки',
    followUs: 'Следите за нами',
    allRightsReserved: 'Все права защищены.',
    
    // Buttons
    viewDetails: 'Подробности',
    contactUs: 'Связаться с нами',
    requestQuote: 'Запросить предложение'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
