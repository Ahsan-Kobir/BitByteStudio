import { motion } from 'framer-motion';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    // In App.jsx
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground">
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}