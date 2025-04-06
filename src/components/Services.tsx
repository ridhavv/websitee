import { motion } from 'framer-motion';
import { ShoppingCart, Cloud, Code, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "eCommerce Strategy Consulting",
      description: "Expert guidance on platform selection, market analysis, and growth strategies for your online business.",
    },
    {
      icon: Cloud,
      title: "Salesforce CRM Setup",
      description: "Complete Salesforce implementation, customization, and integration services for optimal business operations.",
    },
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Tailored eCommerce solutions with modern technology stack and exceptional user experience.",
    },
    {
      icon: Megaphone,
      title: "Marketing Automation",
      description: "Streamline your marketing efforts with automated workflows and targeted campaigns.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital marketplace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}