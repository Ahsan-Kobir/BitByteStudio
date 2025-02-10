import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';

const teamMembers = [
  {
    name: 'MH Shaheen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Tech visionary with 15+ years experience in software innovation',
    social: {
      linkedin: '#',
      github: '#',
      email: '#'
    }
  },
  {
    name: 'Fahad Alam',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Full-stack wizard specializing in scalable architectures',
    social: {
      linkedin: '#',
      github: '#',
      email: '#'
    }
  },
  {
    name: 'AK',
    role: 'TESTER :D',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Award-winning tester focused on user-centric experiences',
    social: {
      linkedin: '#',
      github: '#',
      email: '#'
    }
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-light-accent/30 dark:bg-dark-accent/20">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-light-foreground/80 dark:text-dark-foreground/80 max-w-2xl mx-auto">
            The brilliant minds behind BitByteStudio's success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-light-card dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-background/60 dark:from-dark-background/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-light-primary dark:text-dark-primary mb-3">{member.role}</p>
                <p className="text-sm text-light-foreground/80 dark:text-dark-foreground/80 mb-4">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="text-light-foreground/80 hover:text-light-primary dark:text-dark-foreground/80 dark:hover:text-dark-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-light-foreground/80 hover:text-light-primary dark:text-dark-foreground/80 dark:hover:text-dark-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.email}
                    className="text-light-foreground/80 hover:text-light-primary dark:text-dark-foreground/80 dark:hover:text-dark-primary transition-colors"
                    aria-label="Email"
                  >
                    <MailIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};