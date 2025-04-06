import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      icon: Target,
      description: "To empower businesses with cutting-edge eCommerce solutions and expert training that drives growth and innovation."
    },
    {
      title: "Our Vision",
      icon: Lightbulb,
      description: "To be the leading force in digital commerce transformation, helping businesses thrive in the evolving digital landscape."
    },
    {
      title: "Our Values",
      icon: Users,
      description: "Customer success, innovation, excellence, and continuous learning are the core values that drive everything we do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Dexa Technologies</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, Dexa Technologies has quickly emerged as a leading force in eCommerce consulting and Salesforce training. 
              Our team of experts brings together decades of combined experience in digital commerce, CRM implementation, and business transformation.
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Founder" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">John Smith</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <card.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}