import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

export function NavBar() {
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
     className="fixed top-0 w-full bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-light-border dark:border-dark-border z-50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-light-primary dark:text-dark-primary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xl font-bold">BitByteStudio</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <ThemeToggle />

        <Button variant="outline" className="md:hidden">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

    </motion.nav>);
}