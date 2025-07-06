import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Smartphone, 
  Shield, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Wifi,
  Lock,
  Camera,
  Code,
  Megaphone,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      icon: Smartphone,
      title: t('mobileServices'),
      description: t('mobileServicesDesc'),
      gradient: 'from-blue-500 to-purple-600',
      services: [
        'IMEI Checking & Verification',
        'iCloud Unlock Services',
        'SIM Card Unlocking',
        'eSIM Sales & Activation',
        'Mobile Device Diagnostics',
        'Carrier Unlock Solutions'
      ]
    },
    {
      icon: Shield,
      title: t('cybersecurity'),
      description: t('cybersecurityDesc'),
      gradient: 'from-green-500 to-teal-600',
      services: [
        'Network Security Assessment',
        'Data Protection Solutions',
        'Threat Detection & Response',
        'Security Auditing',
        'Compliance Management',
        'Incident Response Planning'
      ]
    },
    {
      icon: Globe,
      title: t('digitalSolutions'),
      description: t('digitalSolutionsDesc'),
      gradient: 'from-orange-500 to-red-600',
      services: [
        'Custom Website Development',
        'Social Media Management',
        'Digital Marketing Campaigns',
        'Brand Identity Design',
        'Content Creation',
        'SEO Optimization'
      ]
    },
    {
      icon: Zap,
      title: t('businessTech'),
      description: t('businessTechDesc'),
      gradient: 'from-purple-500 to-pink-600',
      services: [
        'Security Camera Installation',
        'Network Infrastructure Setup',
        'Business Automation Systems',
        'Cloud Migration Services',
        'IT Support & Maintenance',
        'Hardware Procurement'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'Enterprise-grade networking and connectivity solutions'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Advanced encryption and data protection services'
    },
    {
      icon: Camera,
      title: 'Surveillance Systems',
      description: 'Professional security camera and monitoring solutions'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions for business needs'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive online marketing and advertising'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert technology consulting and strategy planning'
    }
  ];

  const handleRequestQuote = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleContactUs = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="pt-16">
      <Helmet>
        <title>Services - Techurex | Professional Technology Solutions</title>
        <meta name="description" content="Comprehensive technology services including mobile solutions, cybersecurity, digital marketing, and business automation. Professional services for global clients." />
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
              Our {t('services')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={handleRequestQuote}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {t('requestQuote')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your technology infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your unique requirements and challenges' },
              { step: '02', title: 'Planning', description: 'Developing a comprehensive strategy and timeline' },
              { step: '03', title: 'Implementation', description: 'Executing the solution with precision and expertise' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization services' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 tech-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your technology needs and discover how we can help transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleRequestQuote}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full hover-lift"
              >
                {t('requestQuote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactUs}
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full hover-lift"
              >
                {t('contactUs')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;