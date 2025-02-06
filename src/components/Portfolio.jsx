import { motion } from 'framer-motion';
import { Img } from 'react-image';


const projects = [
  {
    title: 'Fintech Platform',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1561525155-40a650192479?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=edi-kurniawan-knR3v0TZ0IA-unsplash.jpg'
  },
  {
    title: 'E-Learning System',
    category: 'Mobile App',
    image: 'https://unsplash.com/photos/aUmq85-2V7I/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1vYmlsZSUyMGFwcHxlbnwwfHx8fDE3Mzg4NjYwMzh8MA&force=true&w=1920'
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Healthcare Management',
    category: 'Enterprise',
    image: 'https://unsplash.com/photos/rCOWMC8qf8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aGVhbHRoJTIwdGVjaHxlbnwwfHx8fDE3Mzg4NjYzMDJ8MA&force=true&w=1920'
  },
  {
    title: 'E-Commerce Solution',
    category: 'Web App',
    image: 'https://unsplash.com/photos/hpjSkU2UYSU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGVjb21tZXJjZXxlbnwwfHx8fDE3Mzg4MTU4MTR8MA&force=true&w=1920'
  },
  {
    title: 'IoT Control System',
    category: 'Embedded',
    image: 'https://unsplash.com/photos/anapPhJFRhM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM4ODY4MDM0fA&force=true&w=1920'
  },
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Img
                src={project.image}
                loader={<div className="h-64 bg-gray-700 animate-pulse" />}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-background/80 via-transparent to-transparent dark:from-dark-background/80" />
<div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <h3 className="text-xl font-bold text-light-foreground dark:text-dark-foreground mb-1">
    {project.title}
  </h3>
  <p className="text-light-foreground/80 dark:text-dark-foreground/80">
    {project.category}
  </p>
</div>
       
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};