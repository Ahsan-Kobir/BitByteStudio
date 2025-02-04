import { motion } from 'framer-motion';
import { Card } from './ui/card';

const services = [
  { title: 'Web Development', description: 'Modern web applications with cutting-edge technologies' },
  { title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions' },
  { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and services' },
  { title: 'UI/UX Design', description: 'User-centered interface design and prototyping' },
  { title: 'AI Integration', description: 'Smart solutions powered by machine learning' },
  { title: 'Consulting', description: 'Expert technical guidance and strategy' },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:bg-gray-700/50 transition-colors h-full">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};