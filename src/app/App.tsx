import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { VideoPortfolio } from './components/VideoPortfolio';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for preloader added
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black"
        >
          <Hero />
          <About />
          <Services />
          <VideoPortfolio />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
