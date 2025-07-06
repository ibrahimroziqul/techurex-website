
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Users, 
  Globe, 
  Award, 
  Target, 
  Heart, 
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '500+', label: 'Global Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations and drive real business results.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Trust and transparency are at the core of our business relationships, ensuring honest communication and reliable service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex challenges and stay ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Success comes through partnership. We work closely with our clients to understand their unique needs and goals.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Chief Executive Officer',
      description: 'Visionary leader with 15+ years in technology innovation'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'Expert in cybersecurity and enterprise solutions'
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Mobile Solutions',
      description: 'Specialist in mobile technology and device management'
    },
    {
      name: 'Elena Petrov',
      role: 'Director of Digital Marketing',
      description: 'Creative strategist driving digital transformation'
    }
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>About Us - Techurex | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Techurex, a global leader in technology solutions. Our mission, values, and expert team dedicated to transforming businesses worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 tech-gradient overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                About Techurex
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We are a global technology company dedicated to empowering businesses with innovative solutions that drive growth, enhance security, and transform digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  
                alt="Techurex team collaborating on innovative technology solutions"
                className="rounded-2xl shadow-2xl w-full h-auto"
               src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize access to advanced technology solutions, enabling businesses of all sizes to compete globally through innovative mobile services, robust cybersecurity, and transformative digital solutions.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's most trusted technology partner, recognized for our expertise, innovation, and commitment to client success across all continents and industries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img  
                alt="Global technology network visualization showing worldwide connectivity"
                className="rounded-2xl shadow-xl w-full h-auto"
               src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" />
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation and excellence at Techurex
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Global Presence
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With operations spanning across multiple continents, Techurex serves clients in over 50 countries. Our global network ensures 24/7 support and localized expertise wherever you are.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">North America</span>
                  </div>
                  <p className="text-gray-600 text-sm">Primary operations hub</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Europe</span>
                  </div>
                  <p className="text-gray-600 text-sm">Regional headquarters</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Asia Pacific</span>
                  </div>
                  <p className="text-gray-600 text-sm">Growing market presence</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Middle East</span>
                  </div>
                  <p className="text-gray-600 text-sm">Strategic partnerships</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img  
                alt="World map showing Techurex global presence and service locations"
                className="rounded-2xl shadow-xl w-full h-auto"
               src="https://images.unsplash.com/photo-1585858229735-cd08d8cb510d" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
