import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Globe, Smartphone, Cloud, Database, Shield, Lightbulb } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Cutting-edge web solutions built with modern frameworks and optimized for performance.",
      features: ["React/Next.js", "TypeScript", "PWAs", "SEO Optimized"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["React Native", "iOS/Android", "App Store", "Push Notifications"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud architecture designed for growth and reliability.",
      features: ["AWS/Azure", "Microservices", "Auto-scaling", "CI/CD"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform your data into actionable insights with modern analytics platforms.",
      features: ["Big Data", "AI/ML", "Real-time Analytics", "Data Visualization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions to protect your digital assets.",
      features: ["Cybersecurity", "GDPR/SOC2", "Penetration Testing", "Audit Support"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Explore emerging technologies and prototype next-generation solutions.",
      features: ["AI Integration", "Blockchain", "IoT", "AR/VR"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive technology solutions that drive digital transformation and competitive advantage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="p-8 h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon size={32} className="text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-sm text-foreground/60"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full hover:shadow-xl transition-all duration-300">
              Let's Build Something Amazing
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}