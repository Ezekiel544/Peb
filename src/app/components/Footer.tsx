import { motion } from 'motion/react';
import { Twitter, Send, MessageCircle, Linkedin, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'http://x.com/Nojeeet',
    color: '#1DA1F2',
  },
  {
    name: 'Telegram',
    icon: Send,
    url: 'http://t.me/Peb522',
    color: '#0088cc',
  },
  {
    name: 'Discord',
    icon: MessageCircle,
    url: 'https://discord.com/users/am_pebs',
    color: '#5865F2',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/pebs522',
    color: '#0A66C2',
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-gray-900 overflow-hidden">
      {/* Background gradient added*/}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 lg:py-24 text-center border-b border-gray-900"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Ready to take your Web3 project to the next level? Let's talk about how we can work together.
          </p>
          <motion.button
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="http://t.me/Peb522">Start a Conversation</a>
          </motion.button>
        </motion.div>

        {/* Main footer content added*/}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Brand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                PEBS
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Web3 Marketer • VC Analyst • Raid Leader • Clipper
              </p>
              <p className="text-gray-500 text-sm">
                Converting attention into real users, measurable growth, and long-term relevance.
              </p>
            </motion.div>

            {/* Right side - Social links added*/}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start md:items-end"
            >
              <h4 className="text-white text-xl font-semibold mb-6">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-gray-900 border-2 border-gray-800 group-hover:border-white p-4 rounded-xl transition-all duration-300">
                        <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        {social.name}
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Email contact added*/}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-500 text-sm mb-2">Email:</p>
                <a
                  href="mailto:contact@pebs.web3"
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
                >
                 Preciousbob902@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 Pebs. All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </motion.div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-gray-900 border-2 border-gray-800 hover:border-white p-3 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Decorative element */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </footer>
  );
}