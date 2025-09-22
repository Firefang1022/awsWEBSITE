import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Brain, Code, Rocket, BarChart } from 'lucide-react';

export function ProcessFlow() {
  const steps = [
    {
      icon: Brain,
      title: "Strategy & Discovery",
      description: "Deep market analysis and strategic planning to identify opportunities and define success metrics.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Development & Engineering",
      description: "Cutting-edge development using the latest technologies and best practices for scalable solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Launch & Deployment",
      description: "Seamless deployment with comprehensive testing and performance optimization.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart,
      title: "Growth & Optimization",
      description: "Continuous monitoring, analysis, and optimization to maximize ROI and market impact.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A proven methodology that transforms ideas into market-leading solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-30 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <Card className="p-6 h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <step.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl mb-4 text-center group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    {index + 1}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl mb-4">Data-Driven Results</h3>
            <p className="text-foreground/70">Real-time visualization of our impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "150%", label: "Average ROI Increase", delay: 0 },
              { value: "98%", label: "Client Satisfaction", delay: 0.2 },
              { value: "30+", label: "Projects Delivered", delay: 0.4 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, type: "spring" }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    background: [
                      'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      'linear-gradient(45deg, #8b5cf6, #06b6d4)',
                      'linear-gradient(45deg, #06b6d4, #3b82f6)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl md:text-5xl bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}