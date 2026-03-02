import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import profileImage from './figma/pebpfp.jpg';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background grid added*/}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <motion.div
              className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated ring around profile */}
              <motion.div
                className="absolute -inset-4 border-2 border-gray-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-2 border-2 border-gray-400/50 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <img
                src={profileImage}
                alt="Pebs Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              PEBS
            </motion.h1>
            
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {['Web3 Marketer', 'VC Analyst', 'Raid Leader', 'Clipper'].map((title, index) => (
                <motion.span
                  key={title}
                  className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium px-4 py-2 border border-gray-600 rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    transition: { duration: 0.2 }
                  }}
                >
                  {title}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Turning narratives into growth.<br />
              Converting attention into real users.
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm tracking-wider">SCROLL</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
