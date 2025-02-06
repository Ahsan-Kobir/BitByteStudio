import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    comment: 'BitByteStudio transformed our business with their innovative solutions. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, InnovateX',
    comment: 'Their team is incredibly talented and delivered beyond our expectations.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Alex Johnson',
    role: 'Product Manager, NextGen',
    comment: 'The quality of their work is exceptional. They truly understand our needs.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export const Testimonials = () => {
  return (

    <section id="testimonials" className="py-20 px-6 bg-light-accent/50 dark:bg-dark-accent/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-light-card dark:bg-dark-card p-6 rounded-lg border border-light-border dark:border-dark-border"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};