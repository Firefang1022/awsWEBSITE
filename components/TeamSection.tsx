import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1624555130882-dcfa8ecb17ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0ZWNoJTIwbGVhZGVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODU3MzMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      about: "Visionary leader with 15+ years in tech startups. Led 3 successful exits, raised $50M+ in funding. MIT Computer Science graduate with expertise in AI and product strategy.",
      skills: ["Strategy", "AI/ML", "Product", "Leadership"],
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODUwODMwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      about: "Full-stack architect who's built systems serving 100M+ users. Former Google senior engineer, specializes in scalable cloud infrastructure and microservices architecture.",
      skills: ["Cloud Architecture", "DevOps", "React", "Node.js"],
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1742119803195-aaf41d6b2e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU4NTI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      about: "Award-winning UX designer with a passion for human-centered design. Previously at Apple and Tesla, leading design teams that shipped products used by millions globally.",
      skills: ["UX/UI Design", "Design Systems", "Prototyping", "User Research"],
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHRlYW0lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4NTczMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      about: "Polyglot programmer with expertise in modern web technologies. Open source contributor with 10k+ GitHub stars. Passionate about clean code and developer experience.",
      skills: ["TypeScript", "React", "Python", "GraphQL"],
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Alex Thompson",
      role: "Business Development",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODU0OTU0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      about: "Strategic partnerships expert who's closed $100M+ in enterprise deals. Former McKinsey consultant with deep expertise in digital transformation and market expansion.",
      skills: ["Sales Strategy", "Partnerships", "Market Analysis", "Client Relations"],
      social: { linkedin: "#", github: "#", twitter: "#" }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Industry veterans who've shaped the future of technology at world-class companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 h-full">
                {/* Front Card */}
                <motion.div
                  className="absolute inset-0 p-6 flex flex-col items-center text-center z-10 group-hover:opacity-0 transition-opacity duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative mb-6"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-purple-600 p-1">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-purple-600 to-cyan-500 opacity-20"
                      style={{ padding: '2px' }}
                    />
                  </motion.div>

                  <h3 className="text-xl mb-2">{member.name}</h3>
                  <p className="text-foreground/70 mb-4">{member.role}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                {/* Back Card - About Section */}
                <motion.div
                  className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-gradient-to-br from-primary/10 to-purple-600/10 backdrop-blur-sm"
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-lg mb-2">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    
                    <p className="text-sm text-foreground/80 mb-4 flex-grow leading-relaxed">
                      {member.about}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-foreground/60 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.2, color: "#0077b5" }}
                          href={member.social.linkedin}
                          className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                          <Linkedin size={16} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, color: "#333" }}
                          href={member.social.github}
                          className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, color: "#1da1f2" }}
                          href={member.social.twitter}
                          className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                          <Twitter size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}