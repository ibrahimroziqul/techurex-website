import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import QuickContact from '@/components/contact/QuickContact';
import FaqSection from '@/components/contact/FaqSection';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <Helmet>
        <title>Contact Us - Techurex | Get in Touch for Technology Solutions</title>
        <meta name="description" content="Contact Techurex for professional technology solutions. Reach out to our expert team for mobile services, cybersecurity, digital marketing, and business technology needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 tech-gradient overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t('getInTouch')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('contactDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <ContactInfo />

      {/* Contact Form & Quick Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <QuickContact />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};

export default Contact;