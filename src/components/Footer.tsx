import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer id="contact" className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-orbitron font-bold text-gradient"
          >
            &lt;Portfolio/&gt;
          </motion.h2>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-muted-foreground">
              <a
                href="mailto:sabilaabidbarqi@gmail.com"
                className="hover:text-primary transition-colors"
              >
                sabilaabidbarqi@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground">
              <a
                href="https://wa.me/6283180499179"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                +62 831-8049-9179
              </a>
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-border"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Portofolio - Sabila abid barqi
              <Heart className="w-4 h-4 text-destructive animate-pulse" />
              using React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
