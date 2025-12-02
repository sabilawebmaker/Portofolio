import { motion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// 👉 Import foto profil kamu
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer & UI/UX Designer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >

          {/* FOTO PROFIL */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto w-32 h-32 rounded-full relative"
          >
            <img
              src={profileImg}
              alt="fotoprofiljpeg"
              className="w-32 h-32 rounded-full object-cover shadow-xl border-2 border-neutral-700"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground font-medium text-lg"
            >
              Hello World
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Sabila abid Barqi
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground"
            >
              {text}
              <span className="inline-block w-0.5 h-5 bg-foreground ml-1 animate-pulse" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Website developer yang menciptakan solusi digital cepat, modern, dan responsi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="group" asChild>
              <a href="https://wa.me/6283180499179" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Hubungi via WhatsApp
              </a>
            </Button>

            <Button size="lg" variant="outline" className="group">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
