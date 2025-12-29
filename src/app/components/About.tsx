import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-400 text-sm sm:text-base tracking-[0.3em] uppercase border border-gray-600 px-6 py-2 rounded-full">
                About Me
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Hey 👋, I'm Pebs
            </h2>
          </motion.div>

          {/* Main content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.p 
              className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              A Web3 marketer, VC analyst, raid leader, and clipper.
            </motion.p>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I work closely with blockchain teams to help them grow by telling their story the right way, 
              activating strong communities, leading effective raids, and turning long-form content into short, 
              viral clips that travel far beyond the original post.
            </motion.p>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm big on understanding what actually matters in a project—the product, the market, and the people—and 
              using that insight to shape narratives that feel authentic and convert.
            </motion.p>

            <motion.div
              className="pt-8 border-l-4 border-white pl-6 sm:pl-8"
              whileInView={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                The goal is always the same: convert attention into real users, measurable growth, and long-term relevance.
              </p>
            </motion.div>
          </motion.div>

          {/* Expertise cards */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6 mt-16"
            variants={containerVariants}
          >
            {/* Clipping expertise */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: '#ffffff' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  Content Clipping Specialist
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I specialize in turning long-form Web3 content into short, high-retention clips designed for 
                  distribution across X, Telegram, TikTok, and Reels.
                </p>
                <p className="text-gray-500 text-sm">
                  This isn't just cutting videos—it's about identifying the moment, shaping the narrative, 
                  and packaging it so it travels fast and lands with the right audience.
                </p>
              </div>
            </motion.div>

            {/* Motion design */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: '#ffffff' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  Motion Design
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I create simple, clean motion designs that help Web3 content stand out and communicate faster.
                </p>
                <p className="text-gray-500 text-sm">
                  From animated captions and UI callouts to lightweight explainer visuals, my focus is on clarity, 
                  pacing, and retention. Each piece is designed to support the narrative, improve watch time, 
                  and make complex ideas easier to understand.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
