import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Headphones, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const QuickContact = () => {
  const handleQuickContact = (type) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Quick Contact Options
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Need immediate assistance? Choose from our quick contact options below.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => handleQuickContact('chat')}
          variant="outline"
          className="w-full justify-start p-6 h-auto border-2 hover:border-blue-500 hover:bg-blue-50"
        >
          <MessageSquare className="h-6 w-6 text-blue-600 mr-4" />
          <div className="text-left">
            <div className="font-semibold text-gray-900">Live Chat</div>
            <div className="text-sm text-gray-600">Chat with our support team</div>
          </div>
        </Button>

        <Button
          onClick={() => handleQuickContact('call')}
          variant="outline"
          className="w-full justify-start p-6 h-auto border-2 hover:border-green-500 hover:bg-green-50"
        >
          <Phone className="h-6 w-6 text-green-600 mr-4" />
          <div className="text-left">
            <div className="font-semibold text-gray-900">Schedule a Call</div>
            <div className="text-sm text-gray-600">Book a consultation call</div>
          </div>
        </Button>

        <Button
          onClick={() => handleQuickContact('support')}
          variant="outline"
          className="w-full justify-start p-6 h-auto border-2 hover:border-purple-500 hover:bg-purple-50"
        >
          <Headphones className="h-6 w-6 text-purple-600 mr-4" />
          <div className="text-left">
            <div className="font-semibold text-gray-900">Technical Support</div>
            <div className="text-sm text-gray-600">Get immediate technical help</div>
          </div>
        </Button>

        <Button
          onClick={() => handleQuickContact('global')}
          variant="outline"
          className="w-full justify-start p-6 h-auto border-2 hover:border-orange-500 hover:bg-orange-50"
        >
          <Globe className="h-6 w-6 text-orange-600 mr-4" />
          <div className="text-left">
            <div className="font-semibold text-gray-900">Global Offices</div>
            <div className="text-sm text-gray-600">Find your local office</div>
          </div>
        </Button>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Office Hours
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-medium">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-medium">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-medium">Emergency Support Only</span>
          </div>
          <div className="flex justify-between border-t pt-2 mt-3">
            <span className="text-gray-600">Emergency Support</span>
            <span className="font-medium text-blue-600">24/7 Available</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickContact;