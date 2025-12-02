import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Website Compeny serta catalog Platform",
      description: "Website yang berfokus pada pengenalan perusahaan di kancah internasional, Lengkap dengan catalog produk dan layanan yang di tawarkan",
      image: "https://i.ibb.co.com/GwhhyP5/Screenshot-2025-12-01-190740.png",
      category: "Web App",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#",
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js animations and WebGL effects",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      category: "3D Web",
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      demo: "#",
      github: "#",
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot using OpenAI API with natural language processing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI/ML",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      demo: "#",
      github: "#",
    },
    {
      title: "Mobile Banking App",
      description: "React Native banking app with biometric authentication",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      category: "Mobile",
      tech: ["React Native", "TypeScript", "Firebase"],
      demo: "#",
      github: "#",
    },
    {
      title: "Real-time Dashboard",
      description: "Analytics dashboard with WebSocket real-time data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Web App",
      tech: ["Vue.js", "Chart.js", "WebSocket", "Node.js"],
      demo: "#",
      github: "#",
    },
    {
      title: "AR Furniture App",
      description: "Augmented reality app for visualizing furniture in your space",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      category: "3D Web",
      tech: ["Three.js", "AR.js", "React", "WebXR"],
      demo: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Web App", "3D Web", "AI/ML", "Mobile"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient mb-4">
            Portfolio Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={
                filter === category
                  ? "bg-gradient-to-r from-primary to-secondary"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="cyber-card group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    className="bg-secondary hover:bg-secondary/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-orbitron font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
