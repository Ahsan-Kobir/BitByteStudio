import { motion } from 'framer-motion';

const projects = [
  { title: 'Fintech Platform', category: 'Web App' },
  { title: 'E-Learning System', category: 'Mobile App' },
  { title: 'AI Analytics Dashboard', category: 'SaaS' },
  { title: 'Healthcare Management', category: 'Enterprise' },
  { title: 'E-Commerce Solution', category: 'Web App' },
  { title: 'IoT Control System', category: 'Embedded' },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="h-64 bg-gray-700/30 group-hover:bg-gray-700/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};