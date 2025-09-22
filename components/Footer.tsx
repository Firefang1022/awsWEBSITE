import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { icon: Github, href: "#", color: "hover:text-gray-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@innovatetech.com", href: "mailto:hello@innovatetech.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              InnovateTech
            </motion.h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming visions into digital reality. We're your partners in building the future of technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-primary-foreground/60 ${social.color} transition-colors p-2 rounded-full hover:bg-white/10`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Process', 'Team', 'Contact'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Data Engineering', 'AI/ML'].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="text-primary-foreground/60"
                  >
                    <contact.icon size={18} />
                  </motion.div>
                  <a
                    href={contact.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-primary-foreground/60 text-sm">
            © 2024 InnovateTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}