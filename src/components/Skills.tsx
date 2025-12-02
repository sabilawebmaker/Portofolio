import { useState } from "react";
import { motion } from "framer-motion";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import SkillCodeModal from "./SkillCodeModal";
import { Progress } from "@/components/ui/progress";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skills = [
    {
      name: "JavaScript",
      level: 95,
      icon: "⚡",
      color: "#F7DF1E",
      code: `// JavaScript Example\nconst greet = (name) => {\n  return \`Hello, \${name}! Welcome to JavaScript.\`;\n};\n\nconsole.log(greet('Developer'));`,
      language: "JavaScript",
    },
    {
      name: "Python",
      level: 90,
      icon: "🐍",
      color: "#3776AB",
      code: `# Python Example\ndef greet(name):\n    return f"Hello, {name}! Welcome to Python."\n\nprint(greet('Developer'))`,
      language: "Python",
    },
    {
      name: "React",
      level: 95,
      icon: "⚛️",
      color: "#61DAFB",
      code: `// React Component Example\nimport React from 'react';\n\nconst Welcome = ({ name }) => {\n  return (\n    <div className="welcome">\n      <h1>Hello, {name}!</h1>\n    </div>\n  );\n};\n\nexport default Welcome;`,
      language: "JavaScript",
    },
    {
      name: "Node.js",
      level: 85,
      icon: "🟢",
      color: "#339933",
      code: `// Node.js Express Example\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from Node.js!');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});`,
      language: "JavaScript",
    },
    {
      name: "TypeScript",
      level: 90,
      icon: "📘",
      color: "#3178C6",
      code: `// TypeScript Example\ninterface User {\n  name: string;\n  age: number;\n}\n\nconst greetUser = (user: User): string => {\n  return \`Hello, \${user.name}! You are \${user.age} years old.\`;\n};\n\nconst user: User = { name: 'Developer', age: 25 };\nconsole.log(greetUser(user));`,
      language: "JavaScript",
    },
    {
      name: "HTML/CSS",
      level: 95,
      icon: "🎨",
      color: "#E34F26",
      code: `<!-- HTML & CSS Example -->\n<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      background: linear-gradient(45deg, #00D9FF, #9D4EDD);\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <h1>Hello, World!</h1>\n  </div>\n</body>\n</html>`,
      language: "HTML",
    },
    {
      name: "Three.js",
      level: 80,
      icon: "🎮",
      color: "#000000",
      code: `// Three.js Example\nimport * as THREE from 'three';\n\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);\nconst renderer = new THREE.WebGLRenderer();\n\nconst geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshBasicMaterial({ color: 0x00D9FF });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();`,
      language: "JavaScript",
    },
    {
      name: "PHP",
      level: 75,
      icon: "🐘",
      color: "#777BB4",
      code: `<?php\n// PHP Example\nfunction greet($name) {\n    return "Hello, " . $name . "! Welcome to PHP.";\n}\n\necho greet('Developer');\n?>`,
      language: "PHP",
    },
  ];

  const radarData = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map((s) => s.level),
        backgroundColor: "rgba(0, 217, 255, 0.2)",
        borderColor: "rgba(0, 217, 255, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(157, 78, 221, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(157, 78, 221, 1)",
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        pointLabels: {
          color: "#fff",
          font: {
            size: 12,
          },
        },
        ticks: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on any skill to see real code examples
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedSkill(skill)}
              className="cyber-card cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-5xl mb-4 text-center">{skill.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-center mb-4">
                  {skill.name}
                </h3>
                <Progress value={skill.level} className="h-2 mb-2" />
                <p className="text-center text-sm text-muted-foreground">
                  {skill.level}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="cyber-card p-8">
            <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-gradient">
              Skill Radar Chart
            </h3>
            <div className="h-[400px]">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Code Modal */}
      {selectedSkill && (
        <SkillCodeModal
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          skill={selectedSkill}
        />
      )}
    </section>
  );
};

export default Skills;
