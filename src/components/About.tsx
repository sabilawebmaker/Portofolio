import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Mail, MapPin, Heart, Briefcase, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const biodata = [
    { icon: User, label: "Nama", value: "Sabila Abid Barqi" },
    { icon: Calendar, label: "Umur", value: "18 Tahun" },
    { icon: Mail, label: "Email", value: "sabilaabidbarqi@gmail.com" },
    { icon: MapPin, label: "Lokasi", value: "Jepara, Jawa Tengah, Indonesia" },
    { icon: Heart, label: "Hobi", value: "Coding, Gaming, Riset" },
    { icon: Briefcase, label: "Status", value: "Available for Freelancer & student" },
  ];

  const education = [
    {
      year: "2025 - Sekarang ",
      title: "S1 Sistem Informasi",
      institution: "Universitas Islam Nahdlatul Ulama Jepara ( UNISNU )",
      description: "Informatics Student - Berfokus pada Pengembangan Sistem informasi di suatu organisasi, pengembangan website dan analisis data",
    },
    {
      year: "2022 - 2025",
      title: "MAN 1 Jepara",
      institution: "Jepara",
      description: "Jurusan IPA - Fokus pada penelitian / riset dengan membuat karya tulis ilmiah dan pengembangan website sederhana",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            pengembang website yang berfokus pada solusi digital modern, cepat, responsif, aman, dan mudah digunakan. Kami membantu bisnis membangun kehadiran online yang kuat melalui desain elegan, teknologi terbaru, dan pengembangan berbasis kebutuhan.
          </p>
        </motion.div>

        {/* Biodata Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {biodata.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="about-card cyber-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="timeline max-w-4xl mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-gradient">
            Education Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

            {education.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative mb-12 ${
                  index % 2 === 0 ? "text-right pr-1/2" : "text-left pl-1/2"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`inline-block w-full md:w-5/12 cyber-card ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                      {item.year}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {item.institution}
                  </p>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-neon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
