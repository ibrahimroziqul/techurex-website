import React from 'react';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const faqs = [
    {
      question: "What services does Techurex offer?",
      answer: "We provide comprehensive technology solutions including mobile services, cybersecurity, digital marketing, and business technology setup."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide round-the-clock support for all our clients with emergency assistance available anytime."
    },
    {
      question: "Which countries do you serve?",
      answer: "We serve clients globally across 50+ countries with localized support and expertise in multiple languages."
    },
    {
      question: "How quickly can you start a project?",
      answer: "Project timelines vary based on complexity, but we typically begin within 1-2 weeks of contract signing."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;